import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

# busan.html의 정확한 구조
CORRECT_TAIL = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""


def fix_file(text: str) -> str:
    """파일 내용을 수정 - 모든 패턴 처리"""
    original = text
    
    # 1단계: 여분의 </div> 제거 (모든 공백 패턴 처리)
    # </div> 다음에 공백 8칸 이상이 있고 그 다음 </div>가 있는 경우
    text = re.sub(r'(</div>\s*\n\s*</div>)\s{8,}</div>', r'\1', text)
    
    # 직접 문자열 치환도 시도
    while "</div>                        </div>" in text:
        text = text.replace("</div>                        </div>", "</div>\n        </div>")
    while "</div>        </div>" in text:
        text = text.replace("</div>        </div>", "</div>\n        </div>")
    
    # 2단계: 관련정보 버튼 부분을 올바른 구조로 교체
    # 패턴: </div> 다음에 relatedInfoBtn이 있는 모든 경우
    patterns = [
        # 패턴 1: 가장 흔한 패턴
        (r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>', CORRECT_TAIL),
        # 패턴 2: </button> 다음에 </div>와 </section>이 별도 줄
        (r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button>\s*\n\s*</div>\s*\n\s*</section>', CORRECT_TAIL),
        # 패턴 3: </button></section>로 바로 끝
        (r'(\s+</div>\s*\n\s*</div>\s*\n\s*)(?:</div>\s*\n\s*)?<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></section>', CORRECT_TAIL),
    ]
    
    for pattern, replacement in patterns:
        def replace_func(match):
            return match.group(1) + replacement
        text = re.sub(pattern, replace_func, text, flags=re.MULTILINE)
    
    return text


def main():
    changed_files = []
    already_correct = []
    skipped_files = []
    
    print("Checking all jeju*.html files...")
    
    for path in sorted(ROOT.glob("jeju*.html")):
        try:
            text = path.read_text(encoding="utf-8")
            
            if "relatedInfoBtn" not in text:
                skipped_files.append((path.name, "relatedInfoBtn not found"))
                continue
            
            if CORRECT_TAIL in text:
                already_correct.append(path.name)
                continue
            
            # 수정
            new_text = fix_file(text)
            
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
                changed_files.append(path.name)
            else:
                # 여분의 </div>가 있는지 확인하고 직접 수정
                if "</div>                        </div>" in text or "</div>        </div>" in text:
                    fixed = text
                    # 정규식으로 제거
                    fixed = re.sub(r'(</div>\s*\n\s*</div>)\s{8,}</div>', r'\1', fixed)
                    # 직접 치환
                    while "</div>                        </div>" in fixed:
                        fixed = fixed.replace("</div>                        </div>", "</div>\n        </div>")
                    while "</div>        </div>" in fixed:
                        fixed = fixed.replace("</div>        </div>", "</div>\n        </div>")
                    # 다시 패턴 적용
                    fixed = fix_file(fixed)
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
        for name in changed_files[:100]:
            print(f"   - {name}")
        if len(changed_files) > 100:
            print(f"   ... and {len(changed_files) - 100} more")
    else:
        print("\nNo files needed updating.")
    
    if already_correct:
        print(f"\nAlready correct ({len(already_correct)} files)")
    
    if skipped_files:
        print(f"\nSkipped {len(skipped_files)} files:")
        for name, reason in skipped_files[:20]:
            print(f"   - {name}: {reason}")
        if len(skipped_files) > 20:
            print(f"   ... and {len(skipped_files) - 20} more")
    
    print(f"\n{'='*60}")
    print(f"Total: {len(changed_files) + len(already_correct) + len(skipped_files)} files")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
