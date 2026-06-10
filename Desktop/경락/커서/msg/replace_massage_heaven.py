import os
import re
from pathlib import Path


def replace_in_html_files(root_dir: Path):
    """
    모든 HTML 파일에서 브랜드명을 통일:
    - '마사지천국'  -> '서울출장마사지'
    - '마사지피플' -> '서울출장마사지'
    """
    root_path = Path(root_dir)
    html_files = list(root_path.rglob("*.html"))

    changed_files = 0
    total_count = len(html_files)

    print(f"총 {total_count}개의 HTML 파일을 검사합니다...")

    for html_file in html_files:
        try:
            with open(html_file, "r", encoding="utf-8") as f:
                content = f.read()

            if ("마사지천국" in content) or ("마사지피플" in content):
                new_content = content.replace("마사지천국", "서울출장마사지")
                new_content = new_content.replace("마사지피플", "서울출장마사지")

                with open(html_file, "w", encoding="utf-8") as f:
                    f.write(new_content)

                changed_files += 1
                print(f"변경됨: {html_file.relative_to(root_path)}")

        except Exception as e:
            print(f"오류 발생 ({html_file}): {e}")

    print(f"\n완료! 총 {changed_files}개의 파일이 변경되었습니다.")


if __name__ == "__main__":
    # 프로젝트 내 모든 HTML 대상으로 실행 (public 포함 전체)
    project_root = Path("kissbang-main") / "kissbang-main"

    if project_root.exists():
        replace_in_html_files(project_root)
    else:
        print(f"경로를 찾을 수 없습니다: {project_root}")
        print("현재 작업 디렉토리:", os.getcwd())
