import pathlib

ROOT = pathlib.Path(__file__).resolve().parent / "kissbang-main" / "kissbang-main" / "public"

def fix_file(path):
    """Fix a single file"""
    try:
        text = path.read_text(encoding="utf-8")
        
        # Pattern 1: </div>                        </div> (no newline in between)
        if "</div>                        </div>" in text:
            text = text.replace("</div>                        </div>", "</div>\n        </div>")
            path.write_text(text, encoding="utf-8")
            return True, "Pattern 1"
        
        # Pattern 2: </div>\n        </div>                        </div> (newline in between)
        if "</div>\n        </div>                        </div>" in text:
            text = text.replace("</div>\n        </div>                        </div>", "</div>\n        </div>")
            path.write_text(text, encoding="utf-8")
            return True, "Pattern 2"
        
        return False, "No pattern found"
    except Exception as e:
        return False, f"Error: {e}"

def main():
    changed_files = []
    skipped_files = []
    
    print("Fixing all jeju*.html files...\n")
    
    for path in sorted(ROOT.glob("jeju*.html")):
        fixed, reason = fix_file(path)
        if fixed:
            changed_files.append((path.name, reason))
        else:
            if "relatedInfoBtn" in path.read_text(encoding="utf-8"):
                skipped_files.append((path.name, reason))
    
    print(f"{'='*60}")
    print(f"RESULTS")
    print(f"{'='*60}\n")
    
    if changed_files:
        print(f"Updated {len(changed_files)} files:")
        for name, reason in changed_files[:50]:
            print(f"   - {name} ({reason})")
        if len(changed_files) > 50:
            print(f"   ... and {len(changed_files) - 50} more")
    else:
        print("No files needed updating.")
    
    if skipped_files:
        print(f"\nSkipped {len(skipped_files)} files:")
        for name, reason in skipped_files[:10]:
            print(f"   - {name}: {reason}")
    
    print(f"\n{'='*60}")
    print(f"Total: {len(changed_files) + len(skipped_files)} files")
    print(f"  - Updated: {len(changed_files)}")
    print(f"  - Skipped: {len(skipped_files)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
