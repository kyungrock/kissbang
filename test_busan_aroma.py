#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""busan-aroma.html 파일 테스트"""

import re
from pathlib import Path

file_path = Path("busan-aroma.html")

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# title 추출
title_match = re.search(r"<title>(.*?)</title>", content, flags=re.IGNORECASE | re.DOTALL)
title = title_match.group(1).strip() if title_match else None

# og:title 추출 (여러 패턴 시도)
patterns = [
    r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)["\']',
    r'<meta\s+property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']',
    r'<meta[^>]*property\s*=\s*["\']og:title["\'][^>]*content\s*=\s*["\']([^"\']+)["\'][^>]*>',
]

og_title = None
for pattern in patterns:
    match = re.search(pattern, content, flags=re.IGNORECASE | re.DOTALL)
    if match:
        og_title = match.group(1).strip()
        break

print(f"title: '{title}'")
print(f"og:title: '{og_title}'")
print(f"동일 여부: {title == og_title}")
print(f"title 길이: {len(title) if title else 0}")
print(f"og:title 길이: {len(og_title) if og_title else 0}")

# 모든 og:title 태그 찾기
all_og = re.findall(r'<meta[^>]*property\s*=\s*["\']og:title["\'][^>]*>', content, re.I)
print(f"\n모든 og:title 태그 ({len(all_og)}개):")
for i, tag in enumerate(all_og, 1):
    print(f"  {i}. {tag[:100]}")
