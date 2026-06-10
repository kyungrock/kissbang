import pathlib

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

# busan.html의 정확한 구조
CORRECT_TAIL = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""


def fix_file_direct(text: str) -> str:
    """파일 내용을 직접 수정 - 문자열 치환만 사용"""
    
    # 1단계: 여분의 </div> 제거 - 직접 문자열 치환
    # 무한 반복해서 제거
    while "</div>                        </div>" in text:
        text = text.replace("</div>                        </div>", "</div>\n        </div>")
    while "</div>        </div>" in text:
        text = text.replace("</div>        </div>", "</div>\n        </div>")
    
    # 2단계: 관련정보 버튼 부분을 올바른 구조로 교체
    # 잘못된 패턴 찾아서 교체
    wrong_pattern = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""
    
    # 이미 올바른 패턴이면 그대로 반환
    if CORRECT_TAIL in text:
        return text
    
    # 잘못된 패턴이 있는지 확인하고 교체
    # 패턴: </div> 다음에 relatedInfoBtn이 있는 경우
    import re
    
    # 패턴 1: 가장 흔한 패턴
    pattern1 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    def replace_func(match):
        return match.group(1) + CORRECT_TAIL
    
    text = pattern1.sub(replace_func, text)
    
    # 패턴 2: </button> 다음에 </div>와 </section>이 별도 줄
    pattern2 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button>\s*\n\s*</div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    text = pattern2.sub(replace_func, text)
    
    # 패턴 3: </button></section>로 바로 끝
    pattern3 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)(?:</div>\s*\n\s*)?<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></section>',
        re.MULTILINE
    )
    
    text = pattern3.sub(replace_func, text)
    
    return text


def main():
    changed_files = []
    already_correct = []
    skipped_files = []
    
    print("Checking all jeju*.html files...")
    print("Fixing all files with relatedInfoBtn...\n")
    
    for path in sorted(ROOT.glob("jeju*.html")):
        try:
            text = path.read_text(encoding="utf-8")
            
            if "relatedInfoBtn" not in text:
                skipped_files.append((path.name, "relatedInfoBtn not found"))
                continue
            
            if CORRECT_TAIL in text:
                already_correct.append(path.name)
                continue
            
            # 여분의 </div>가 있는지 확인
            has_extra = "</div>                        </div>" in text or "</div>        </div>" in text
            
            # 수정 시도
            new_text = fix_file_direct(text)
            
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
                changed_files.append(path.name)
            elif has_extra:
                # 더 강력하게 수정
                fixed = text
                # 직접 치환
                while "</div>                        </div>" in fixed:
                    fixed = fixed.replace("</div>                        </div>", "</div>\n        </div>")
                while "</div>        </div>" in fixed:
                    fixed = fixed.replace("</div>        </div>", "</div>\n        </div>")
                # 다시 패턴 적용
                fixed = fix_file_direct(fixed)
                if fixed != text:
                    path.write_text(fixed, encoding="utf-8")
                    changed_files.append(path.name)
                else:
                    skipped_files.append((path.name, "Pattern not matched"))
            else:
                skipped_files.append((path.name, "Pattern not matched"))
        except Exception as e:
            skipped_files.append((path.name, f"Error: {e}"))
    
    # 결과 출력
    print(f"\n{'='*60}")
    print(f"RESULTS")
    print(f"{'='*60}")
    
    if changed_files:
        print(f"\nUpdated {len(changed_files)} files:")
        for name in changed_files[:300]:
            print(f"   - {name}")
        if len(changed_files) > 300:
            print(f"   ... and {len(changed_files) - 300} more")
    else:
        print("\nNo files needed updating.")
    
    if already_correct:
        print(f"\nAlready correct ({len(already_correct)} files)")
    
    if skipped_files:
        print(f"\nSkipped {len(skipped_files)} files:")
        for name, reason in skipped_files[:30]:
            print(f"   - {name}: {reason}")
        if len(skipped_files) > 30:
            print(f"   ... and {len(skipped_files) - 30} more")
    
    print(f"\n{'='*60}")
    print(f"Total: {len(changed_files) + len(already_correct) + len(skipped_files)} files")
    print(f"  - Updated: {len(changed_files)}")
    print(f"  - Already correct: {len(already_correct)}")
    print(f"  - Skipped: {len(skipped_files)}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
