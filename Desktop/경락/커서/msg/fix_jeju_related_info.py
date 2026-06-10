import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

# busan.html의 정확한 구조
BUSAN_CORRECT_STRUCTURE = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""


def fix_related_info_button(text: str) -> str:
    """관련정보 버튼 위치를 busan.html과 똑똑같이 수정"""
    
    # 먼저 직접 문자열 치환으로 여분의 </div> 제거
    # 다양한 패턴의 여분의 </div> 제거
    while "</div>                        </div>" in text:
        text = text.replace("</div>                        </div>", "</div>\n        </div>")
    while "</div>        </div>" in text:
        text = text.replace("</div>        </div>", "</div>\n        </div>")
    
    # 정규식으로 공백이 많은 패턴 처리
    # </div> 다음에 공백 8칸 이상이 있고 그 다음 </div>가 있는 경우
    pattern_extra_div = re.compile(
        r'(</div>\s*\n\s*</div>\s{8,})</div>',
        re.MULTILINE
    )
    text = pattern_extra_div.sub(r'\1', text)
    
    # 더 강력한 패턴: </div> 다음에 공백과 </div>가 한 줄에 있는 모든 경우
    pattern_extra_div2 = re.compile(
        r'(</div>\s*\n\s*</div>)\s{8,}</div>',
        re.MULTILINE
    )
    text = pattern_extra_div2.sub(r'\1', text)
    
    def replace_func(match):
        return match.group(1) + BUSAN_CORRECT_STRUCTURE
    
    # 패턴 1: </div> 다음에 relatedInfoBtn이 있는 경우 (여분의 </div> 제거 후)
    pattern1 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    new_text = pattern1.sub(replace_func, text)
    
    # 패턴 2: </div>        </div> 다음에 <button>이 있고, </button> 다음에 </div>와 </section>이 별도 줄에 있는 경우
    pattern2 = re.compile(
        r'(\s+</div>\s*)\s*</div>\s*\n\s*<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button>\s*\n\s*</div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    new_text = pattern2.sub(replace_func, new_text)
    
    # 패턴 3: </button></section>로 바로 끝나는 경우
    pattern3 = re.compile(
        r'(\s+</div>\s*)\s*</div>\s*\n\s*(?:</div>\s*\n\s*)?<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></section>',
        re.MULTILINE
    )
    
    new_text = pattern3.sub(replace_func, new_text)
    
    # 패턴 4: </button></div>로 끝나지만 들여쓰기가 다른 경우 (여분의 </div> 없이)
    pattern4 = re.compile(
        r'(\s+</div>\s*)\s*</div>\s*\n\s*<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    new_text = pattern4.sub(replace_func, new_text)
    
    return new_text


def should_target(path: pathlib.Path) -> bool:
    """jeju 관련 파일인지 확인"""
    name = path.name
    return name.startswith("jeju")


def main() -> None:
    """모든 jeju*.html 파일을 검사하고 수정"""
    changed_files = []
    skipped_files = []
    already_correct = []
    
    for path in sorted(ROOT.glob("jeju*.html")):
        if not should_target(path):
            continue
        
        try:
            text = path.read_text(encoding="utf-8")
            
            # relatedInfoBtn이 있는지 확인
            if "relatedInfoBtn" not in text:
                skipped_files.append((path.name, "relatedInfoBtn not found"))
                continue
            
            # 이미 busan.html과 같은 구조인지 확인
            if BUSAN_CORRECT_STRUCTURE in text:
                already_correct.append(path.name)
                continue
            
            # 수정 전후 비교
            new_text = fix_related_info_button(text)
            
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
                changed_files.append(path.name)
            else:
                # 수정되지 않았지만 busan.html 구조도 아닌 경우
                # 여분의 </div>가 있는지 다시 확인하고 직접 수정
                if "</div>                        </div>" in text or "</div>        </div>" in text:
                    # 직접 수정 시도
                    fixed = text
                    while "</div>                        </div>" in fixed:
                        fixed = fixed.replace("</div>                        </div>", "</div>\n        </div>")
                    while "</div>        </div>" in fixed:
                        fixed = fixed.replace("</div>        </div>", "</div>\n        </div>")
                    # 다시 패턴 적용
                    fixed = fix_related_info_button(fixed)
                    if fixed != text:
                        path.write_text(fixed, encoding="utf-8")
                        changed_files.append(path.name)
                    else:
                        skipped_files.append((path.name, "Pattern not matched"))
                elif "relatedInfoBtn" in text and BUSAN_CORRECT_STRUCTURE not in text:
                    skipped_files.append((path.name, "Pattern not matched"))
        except Exception as e:
            skipped_files.append((path.name, f"Error: {e}"))
    
    if changed_files:
        print(f"Updated {len(changed_files)} files:")
        for name in changed_files[:50]:  # 처음 50개만 출력
            print(f"   - {name}")
        if len(changed_files) > 50:
            print(f"   ... and {len(changed_files) - 50} more")
    else:
        print("No files needed updating.")
    
    if already_correct:
        print(f"\nAlready correct ({len(already_correct)} files)")
    
    if skipped_files:
        print(f"\nSkipped {len(skipped_files)} files:")
        for name, reason in skipped_files[:10]:  # 처음 10개만 출력
            print(f"   - {name}: {reason}")
        if len(skipped_files) > 10:
            print(f"   ... and {len(skipped_files) - 10} more")


if __name__ == "__main__":
    main()
