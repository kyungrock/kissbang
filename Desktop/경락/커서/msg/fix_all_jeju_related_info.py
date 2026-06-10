import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

# busan.html의 정확한 구조 (올바른 구조)
CORRECT_STRUCTURE = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""


def fix_related_info_button(text: str) -> str:
    """관련정보 버튼 위치를 busan.html과 똑똑같이 수정"""
    
    original = text
    
    # 1단계: 여분의 </div> 제거 (반복해서 제거)
    while "</div>                        </div>" in text:
        text = text.replace("</div>                        </div>", "</div>\n        </div>")
    while "</div>        </div>" in text:
        text = text.replace("</div>        </div>", "</div>\n        </div>")
    
    # 2단계: 정규식으로 공백이 많은 패턴 처리
    # </div> 다음에 공백 8칸 이상이 있고 그 다음 </div>가 있는 경우
    pattern_extra_div = re.compile(
        r'(</div>\s*\n\s*</div>)\s{8,}</div>',
        re.MULTILINE
    )
    text = pattern_extra_div.sub(r'\1', text)
    
    # 3단계: 관련정보 버튼 부분을 올바른 구조로 교체
    def replace_func(match):
        return match.group(1) + CORRECT_STRUCTURE
    
    # 패턴 1: 가장 흔한 패턴 - </div> 다음에 relatedInfoBtn이 있는 경우
    pattern1 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    new_text = pattern1.sub(replace_func, text)
    
    # 패턴 2: </button> 다음에 </div>와 </section>이 별도 줄에 있는 경우
    pattern2 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button>\s*\n\s*</div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    new_text = pattern2.sub(replace_func, new_text)
    
    # 패턴 3: </button></section>로 바로 끝나는 경우
    pattern3 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)(?:</div>\s*\n\s*)?<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></section>',
        re.MULTILINE
    )
    
    new_text = pattern3.sub(replace_func, new_text)
    
    # 패턴 4: 여러 줄로 나뉜 button 태그
    pattern4 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)\s*<button\s*\n\s*class="filter-btn"\s*\n\s*id="relatedInfoBtn"\s*\n\s*style="cursor: pointer"\s*\n\s*>\s*\n\s*관련정보\s*\n\s*</button>\s*\n\s*</div>\s*\n\s*</section>',
        re.MULTILINE
    )
    
    new_text = pattern4.sub(replace_func, new_text)
    
    # 패턴 5: 한 줄로 된 경우
    pattern5 = re.compile(
        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)(?:</div>\s*\n\s*)?<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*관련정보\s*</button></section>',
        re.MULTILINE
    )
    
    new_text = pattern5.sub(replace_func, new_text)
    
    # 4단계: 여분의 </div>가 남아있는지 다시 확인하고 제거
    while "</div>                        </div>" in new_text:
        new_text = new_text.replace("</div>                        </div>", "</div>\n        </div>")
    while "</div>        </div>" in new_text:
        new_text = new_text.replace("</div>        </div>", "</div>\n        </div>")
    
    # 5단계: 최종 패턴 적용 (여분의 </div> 제거 후)
    new_text = pattern1.sub(replace_func, new_text)
    new_text = pattern2.sub(replace_func, new_text)
    new_text = pattern3.sub(replace_func, new_text)
    
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
    
    print("Checking all jeju*.html files...")
    
    for path in sorted(ROOT.glob("jeju*.html")):
        if not should_target(path):
            continue
        
        try:
            text = path.read_text(encoding="utf-8")
            
            # relatedInfoBtn이 있는지 확인
            if "relatedInfoBtn" not in text:
                skipped_files.append((path.name, "relatedInfoBtn not found"))
                continue
            
            # 이미 올바른 구조인지 확인
            if CORRECT_STRUCTURE in text:
                already_correct.append(path.name)
                continue
            
            # 여분의 </div>가 있는지 먼저 확인
            has_extra_div = "</div>                        </div>" in text or "</div>        </div>" in text
            
            # 수정 전후 비교
            new_text = fix_related_info_button(text)
            
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
                changed_files.append(path.name)
            elif has_extra_div:
                # 여분의 </div>가 있었지만 수정되지 않은 경우 - 직접 수정
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
                    skipped_files.append((path.name, "Pattern not matched after manual fix"))
            else:
                # 수정되지 않았지만 올바른 구조도 아닌 경우
                if "relatedInfoBtn" in text and CORRECT_STRUCTURE not in text:
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
    print(f"Total files processed: {len(changed_files) + len(already_correct) + len(skipped_files)}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
