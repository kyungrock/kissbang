import pathlib

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

def fix_file(path):
    """Fix a single file"""
    try:
        text = path.read_text(encoding="utf-8")
        original = text
        
        # Pattern 1: </div>\n        </div>\n        </div> (extra </div>)
        if "</div>\n        </div>\n        </div>" in text:
            text = text.replace("</div>\n        </div>\n        </div>", "</div>\n        </div>")
        
        # Pattern 2: </div>                        </div> (no newline)
        if "</div>                        </div>" in text:
            text = text.replace("</div>                        </div>", "</div>\n        </div>")
        
        # Pattern 3: </div>\n        </div>                        </div> (with newline and spaces)
        if "</div>\n        </div>                        </div>" in text:
            text = text.replace("</div>\n        </div>                        </div>", "</div>\n        </div>")
        
        if text != original:
            path.write_text(text, encoding="utf-8")
            return True, "Fixed"
        
        return False, "No pattern found"
    except Exception as e:
        return False, f"Error: {e}"

def main():
    # Files to fix
    files_to_fix = [
        "jeju-seogwipo-namwon-eup-massage.html",
        "jeju-seogwipo-seongsan-eup-massage.html",
        "jeju-seogwipo-andeok-myeon-massage.html",
        "jeju-seogwipo-pyoseon-myeon-massage.html",
        "jeju-seogwipo-songsan-dong-massage.html",
        "jeju-seogwipo-jeongbang-dong-massage.html",
        "jeju-seogwipo-jungang-dong-massage.html",
        "jeju-seogwipo-cheonji-dong-massage.html",
        "jeju-seogwipo-hyodon-dong-massage.html",
        "jeju-seogwipo-yeongcheon-dong-massage.html",
        "jeju-seogwipo-donghong-dong-massage.html",
        "jeju-seogwipo-seohong-dong-massage.html",
        "jeju-seogwipo-daeryun-dong-massage.html",
        "jeju-seogwipo-daecheon-dong-massage.html",
        "jeju-seogwipo-jungmun-dong-massage.html",
        "jeju-seogwipo-yerae-dong-massage.html",
    ]
    
    # Also fix all jeju-seogwipo-yerae-dong-*.html files
    yerae_dong_files = list(ROOT.glob("jeju-seogwipo-yerae-dong-*.html"))
    
    changed_files = []
    skipped_files = []
    
    print("Fixing jeju-seogwipo files...\n")
    
    # Fix specific files
    for filename in files_to_fix:
        path = ROOT / filename
        if path.exists():
            fixed, reason = fix_file(path)
            if fixed:
                changed_files.append((filename, reason))
            else:
                skipped_files.append((filename, reason))
        else:
            skipped_files.append((filename, "File not found"))
    
    # Fix all jeju-seogwipo-yerae-dong-*.html files
    for path in yerae_dong_files:
        fixed, reason = fix_file(path)
        if fixed:
            changed_files.append((path.name, reason))
        else:
            if "relatedInfoBtn" in path.read_text(encoding="utf-8"):
                skipped_files.append((path.name, reason))
    
    # Also check all jeju-seogwipo-*-massage.html, jeju-seogwipo-*-outcall.html, etc.
    all_jeju_seogwipo_files = list(ROOT.glob("jeju-seogwipo-*.html"))
    for path in all_jeju_seogwipo_files:
        if path.name not in [f[0] for f in changed_files + skipped_files]:
            fixed, reason = fix_file(path)
            if fixed:
                changed_files.append((path.name, reason))
    
    print(f"{'='*60}")
    print(f"RESULTS")
    print(f"{'='*60}\n")
    
    if changed_files:
        print(f"Updated {len(changed_files)} files:")
        for name, reason in changed_files[:100]:
            print(f"   - {name} ({reason})")
        if len(changed_files) > 100:
            print(f"   ... and {len(changed_files) - 100} more")
    else:
        print("No files needed updating.")
    
    if skipped_files:
        print(f"\nSkipped {len(skipped_files)} files:")
        for name, reason in skipped_files[:20]:
            print(f"   - {name}: {reason}")
    
    print(f"\n{'='*60}")
    print(f"Total: {len(changed_files) + len(skipped_files)} files")
    print(f"  - Updated: {len(changed_files)}")
    print(f"  - Skipped: {len(skipped_files)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
