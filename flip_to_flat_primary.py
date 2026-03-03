#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
public/*.html 안의 원본 콘텐츠를 루트로 복원하면서
- 리다이렉트 껍데기(.html)를 전부 덮어쓰고
- CSS/JS 경로
- canonical / og:url
을 '파일형 URL' 기준으로 다시 잡아주는 스크립트.
"""

import re
from pathlib import Path
import shutil


# 경로 설정
script_path = Path(__file__).resolve()
BASE_DIR = script_path.parent          # 예: .../kissbang-main
PUBLIC_DIR = BASE_DIR / "public"


print(f"BASE_DIR : {BASE_DIR}")
print(f"PUBLIC_DIR: {PUBLIC_DIR} (exists: {PUBLIC_DIR.exists()})")
print()

if not PUBLIC_DIR.exists():
    print(f"오류: {PUBLIC_DIR} 폴더를 찾을 수 없습니다.")
    raise SystemExit(1)


def update_html_for_flat(content: str, filename: str) -> str:
    """
    - style.css / ./style.css  -> css/style.css
    - 각종 JS 파일             -> js/파일명
    - base href                -> "./"
    - canonical / og:url       -> https://msg1000.com/filename
    """
    # CSS 경로 수정
    content = re.sub(
        r'href=["\']style\.css([^"\']*)',
        r'href="css/style.css\1"',
        content,
    )
    content = re.sub(
        r'href=["\']\./style\.css([^"\']*)',
        r'href="css/style.css\1"',
        content,
    )

    # JS 파일들 경로 수정
    js_files = [
        'script.js',
        'detail.js',
        'common-components.js',
        'common-components.min.js',
        'shop-card-data.js',
        'shop-manager.js',
        'generate-pages.js',
    ]
    for js in js_files:
        # src="script.js"
        content = re.sub(
            rf'src=["\']{re.escape(js)}([^"\']*)',
            rf'src="js/{js}\1"',
            content,
        )
        # src="./script.js"
        content = re.sub(
            rf'src=["\']\./{re.escape(js)}([^"\']*)',
            rf'src="js/{js}\1"',
            content,
        )

    # base href 수정 (있으면 교체)
    if re.search(r'<base href=["\'][^"\']*["\']', content):
        content = re.sub(
            r'<base href=["\'][^"\']*["\']',
            '<base href="./"',
            content,
        )

    # canonical / og:url 을 파일형 URL 기준으로 수정
    new_url = f"https://msg1000.com/{filename}"

    # canonical
    if re.search(r'<link rel="canonical" href="https://msg1000\.com/[^"]*"', content):
        content = re.sub(
            r'<link rel="canonical" href="https://msg1000\.com/[^"]*"',
            f'<link rel="canonical" href="{new_url}"',
            content,
        )

    # og:url
    if re.search(r'<meta property="og:url" content="https://msg1000\.com/[^"]*"', content):
        content = re.sub(
            r'<meta property="og:url" content="https://msg1000\.com/[^"]*"',
            f'<meta property="og:url" content="{new_url}"',
            content,
        )

    return content


def flip_to_flat_primary():
    html_files = list(PUBLIC_DIR.glob("*.html"))

    # index/admin 등은 제외 (원래처럼 root index.html, admin.html은 따로 관리)
    exclude = {"index.html", "admin.html"}
    html_files = [f for f in html_files if f.name not in exclude]

    print(f"처리할 public HTML 파일: {len(html_files)}개\n")

    copied = 0
    skipped = 0
    errors = 0

    for src in html_files:
        try:
            filename = src.name
            dst = BASE_DIR / filename

            # 원본 내용 읽기
            with open(src, "r", encoding="utf-8") as f:
                content = f.read()

            # CSS/JS/ canonical/og:url 업데이트
            new_content = update_html_for_flat(content, filename)

            # 백업 (기존 dst가 있을 경우)
            if dst.exists():
                backup = BASE_DIR / f"{filename}.backup_flat_before"
                if not backup.exists():
                    shutil.copy2(dst, backup)

            # 새 내용으로 루트에 쓰기
            with open(dst, "w", encoding="utf-8") as f:
                f.write(new_content)

            copied += 1
            if copied % 500 == 0:
                print(f"  {copied}개 복원 완료...")

        except Exception as e:
            errors += 1
            print(f"  오류: {src.name} - {e}")

    print("\n📊 처리 결과:")
    print(f"  ✅ 루트로 복원(덮어쓰기): {copied}개")
    print(f"  ⏭️  건너뜀: {skipped}개")
    print(f"  ❌ 오류: {errors}개")
    print("\n✅ 작업 완료! 이제 파일형 URL이 대표 콘텐츠를 가지게 됩니다.")


if __name__ == "__main__":
    flip_to_flat_primary()

