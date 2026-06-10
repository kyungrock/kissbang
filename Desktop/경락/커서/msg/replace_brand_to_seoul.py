from pathlib import Path

ROOT = Path(__file__).resolve().parent
PUBLIC_DIR = ROOT / "kissbang-main" / "kissbang-main" / "public"

OLD = "마사지천국"
NEW = "서울출장마사지"

def replace_in_file(path: Path) -> bool:
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return False

    if OLD not in text:
        return False

    new_text = text.replace(OLD, NEW)
    if new_text == text:
        return False

    path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    if not PUBLIC_DIR.exists():
        print(f"PUBLIC_DIR not found: {PUBLIC_DIR}")
        return

    updated = 0
    for html_path in PUBLIC_DIR.rglob("*.html"):
        if replace_in_file(html_path):
            updated += 1
            print(f"Updated: {html_path}")

    print(f"Done. Updated {updated} HTML files.")


if __name__ == "__main__":
    main()

