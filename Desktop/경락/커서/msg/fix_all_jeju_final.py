import pathlib

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

# busan.html의 정확한 구조
BUSAN_CORRECT_TAIL = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""

def main():
    changed_files = []
    already_correct = []
    skipped_files = []
    
    for path in sorted(ROOT.glob("jeju*.html")):
        try:
            text = path.read_text(encoding="utf-8")
            
            if "relatedInfoBtn" not in text:
                skipped_files.append((path.name, "relatedInfoBtn not found"))
                continue
            
            if BUSAN_CORRECT_TAIL in text:
                already_correct.append(path.name)
                continue
            
            original = text
            
            # 여분의 </div> 제거 - 반복해서 제거
            while "</div>                        </div>" in text:
                text = text.replace("</div>                        </div>", "</div>\n        </div>")
            while "</div>        </div>" in text:
                text = text.replace("</div>        </div>", "</div>\n        </div>")
            
            # 관련정보 버튼 부분 찾아서 교체
            if "relatedInfoBtn" in text:
                # 패턴: </div> 다음에 relatedInfoBtn이 있는 경우
                old_pattern = """        </div>
        
              <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">
          관련정보
        </button></div>
    </section>"""
                
                # 이미 올바른 패턴이면 스킵
                if old_pattern in text:
                    already_correct.append(path.name)
                    continue
                
                # 잘못된 패턴 찾기
                wrong_patterns = [
                    ("        </div>\n        </div>\n        \n              <button class=\"filter-btn\" id=\"relatedInfoBtn\" style=\"cursor: pointer;\">\n          관련정보\n        </button></div>\n    </section>", BUSAN_CORRECT_TAIL),
                    ("          </div>\n        </div>                        </div>\n        \n              <button class=\"filter-btn\" id=\"relatedInfoBtn\" style=\"cursor: pointer;\">\n          관련정보\n        </button></div>\n    </section>", BUSAN_CORRECT_TAIL),
                ]
                
                for wrong, correct in wrong_patterns:
                    if wrong in text:
                        text = text.replace(wrong, correct)
                        break
                
                # 일반적인 패턴 교체
                if "        </div>\n        </div>\n        \n              <button" in text and "relatedInfoBtn" in text:
                    # 더 정확한 패턴 찾기
                    import re
                    pattern = re.compile(
                        r'(\s+</div>\s*\n\s*</div>\s*\n\s*)<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\s*\n\s*관련정보\s*\n\s*</button></div>\s*\n\s*</section>',
                        re.MULTILINE
                    )
                    
                    def replace_func(match):
                        return match.group(1) + BUSAN_CORRECT_TAIL
                    
                    text = pattern.sub(replace_func, text)
            
            if text != original:
                path.write_text(text, encoding="utf-8")
                changed_files.append(path.name)
        except Exception as e:
            skipped_files.append((path.name, f"Error: {e}"))
    
    print(f"Updated {len(changed_files)} files:")
    for name in changed_files[:100]:
        print(f"   - {name}")
    if len(changed_files) > 100:
        print(f"   ... and {len(changed_files) - 100} more")
    
    print(f"\nAlready correct ({len(already_correct)} files)")
    
    if skipped_files:
        print(f"\nSkipped {len(skipped_files)} files:")
        for name, reason in skipped_files[:10]:
            print(f"   - {name}: {reason}")

if __name__ == "__main__":
    main()
