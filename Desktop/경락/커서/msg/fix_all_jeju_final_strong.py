import pathlib

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

# busan.html의 정확한 구조 (올바른 구조)
CORRECT_TAIL = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""


def fix_file(text: str) -> str:
    """파일 내용을 수정"""
    original = text
    
    # 1단계: 여분의 </div> 제거 (반복해서 제거)
    while "</div>                        </div>" in text:
        text = text.replace("</div>                        </div>", "</div>\n        </div>")
    while "</div>        </div>" in text:
        text = text.replace("</div>        </div>", "</div>\n        </div>")
    
    # 2단계: 관련정보 버튼 부분 찾아서 교체
    # 잘못된 패턴들
    wrong_patterns = [
        # 패턴 1: </div> 다음에 여분의 </div>가 있고 relatedInfoBtn이 있는 경우
        ("          </div>\n        </div>                        </div>\n        \n              <button class=\"filter-btn\" id=\"relatedInfoBtn\" style=\"cursor: pointer;\">\n          관련정보\n        </button></div>\n    </section>", 
         "          </div>\n        </div>\n        \n              <button class=\"filter-btn\" id=\"relatedInfoBtn\" style=\"cursor: pointer;\">\n          관련정보\n        </button></div>\n    </section>"),
        
        # 패턴 2: </div> 다음에 relatedInfoBtn이 있는 경우 (여분의 </div> 없이)
        ("          </div>\n        </div>\n        \n              <button class=\"filter-btn\" id=\"relatedInfoBtn\" style=\"cursor: pointer;\">\n          관련정보\n        </button></div>\n    </section>",
         CORRECT_TAIL),
    ]
    
    for wrong, correct in wrong_patterns:
        if wrong in text:
            text = text.replace(wrong, correct)
            break
    
    # 3단계: 일반적인 패턴 교체 (정규식 사용)
    import re
    
    # 패턴: </div> 다음에 relatedInfoBtn이 있는 경우
    pattern = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    def replace_func(match):
        return match.group(1) + CORRECT_TAIL
    
    text = pattern.sub(replace_func, text)
    
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
                # 여분의 </div>가 있는지 확인
                if "</div>                        </div>" in text or "</div>        </div>" in text:
                    # 직접 수정
                    fixed = text
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
