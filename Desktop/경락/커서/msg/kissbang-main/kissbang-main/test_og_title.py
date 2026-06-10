#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""og:title과 title이 다른 파일 찾기"""

import re
from pathlib import Path

BASE_DIR = Path(__file__).parent
html_files = [f for f in BASE_DIR.glob("*.html") if f.name not in ["index.html", "admin.html"]][:20]

print(f"샘플 {len(html_files)}개 파일 확인:\n")

for html_file in html_files:
    try:
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()

        # og:title 추출
        og_match = re.search(r'<meta\s+property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']', content, re.I)
        og_title = og_match.group(1).strip() if og_match else None

        # title 추출
        title_match = re.search(r"<title>(.*?)</title>", content, re.I | re.DOTALL)
        title = title_match.group(1).strip() if title_match else None

        if og_title and title:
            if og_title != title:
                print(f"[DIFF] {html_file.name}:")
                print(f"   title: {title[:60]}...")
                print(f"   og:title: {og_title[:60]}...")
                print()
            else:
                print(f"[SAME] {html_file.name}: 동일함")
        elif not og_title:
            print(f"[NO_OG] {html_file.name}: og:title 없음")
        elif not title:
            print(f"[NO_TITLE] {html_file.name}: title 없음")
    except Exception as e:
        print(f"[ERROR] {html_file.name}: {e}")
