#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""busan-aroma.html 직접 테스트"""

import re
import html
from pathlib import Path

file_path = Path("busan-aroma.html")

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# title 추출
title_match = re.search(r"<title>(.*?)</title>", content, flags=re.IGNORECASE | re.DOTALL)
title = title_match.group(1).strip() if title_match else None

# og:title 추출
patterns = [
    r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)["\']',
    r'<meta\s+property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']',
]

og_title = None
for pattern in patterns:
    match = re.search(pattern, content, flags=re.IGNORECASE | re.DOTALL)
    if match:
        og_title = match.group(1).strip()
        break

print("=" * 60)
print(f"title (원본): '{title}'")
print(f"og:title (원본): '{og_title}'")
print("=" * 60)

# HTML 엔티티 디코딩
title_decoded = html.unescape(title) if title else ""
og_title_decoded = html.unescape(og_title) if og_title else ""

print(f"\ntitle (디코딩): '{title_decoded}'")
print(f"og:title (디코딩): '{og_title_decoded}'")
print(f"\n동일 여부 (원본): {title == og_title}")
print(f"동일 여부 (디코딩): {title_decoded == og_title_decoded}")

# 정규화 비교
title_norm = re.sub(r'\s+', ' ', title_decoded).strip()
og_norm = re.sub(r'\s+', ' ', og_title_decoded).strip()
print(f"동일 여부 (정규화): {title_norm == og_norm}")

# 사용자가 말한 값 검색
user_title = "best 샵 | 부산 아로마마사지 추천 BEST 샵"
user_og = "부산 아로마마사지 추천 BEST 샵｜아로마·힐링 1위샵 가격·후기"

print("\n" + "=" * 60)
print("사용자가 말한 값:")
print(f"title: '{user_title}'")
print(f"og:title: '{user_og}'")
print("=" * 60)

# 파일에서 사용자가 말한 값 검색
if user_title in content:
    print("\n✓ 파일에 사용자가 말한 title 값이 있습니다!")
else:
    print("\n✗ 파일에 사용자가 말한 title 값이 없습니다.")

if user_og in content:
    print("✓ 파일에 사용자가 말한 og:title 값이 있습니다!")
else:
    print("✗ 파일에 사용자가 말한 og:title 값이 없습니다.")
