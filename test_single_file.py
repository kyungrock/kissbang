#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""단일 파일 테스트 및 업데이트"""

import re
import html
from pathlib import Path

def extract_og_title(content: str) -> str:
    patterns = [
        r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)["\']',
        r'<meta\s+property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']',
    ]
    for pattern in patterns:
        match = re.search(pattern, content, flags=re.IGNORECASE | re.DOTALL)
        if match:
            return match.group(1).strip()
    return None

def update_title_from_og_title(content: str, og_title_value: str) -> str:
    content = re.sub(
        r"<title>.*?</title>",
        f"<title>{og_title_value}</title>",
        content,
        flags=re.IGNORECASE | re.DOTALL,
    )
    return content

# 테스트할 파일
test_file = Path("busan-aroma.html")

print(f"파일: {test_file.name}\n")

with open(test_file, "r", encoding="utf-8") as f:
    content = f.read()

# title 추출
title_match = re.search(r"<title>(.*?)</title>", content, flags=re.IGNORECASE | re.DOTALL)
current_title = title_match.group(1).strip() if title_match else ""

# og:title 추출
og_title_value = extract_og_title(content)

print(f"현재 title: '{current_title}'")
print(f"og:title: '{og_title_value}'")
print()

if not og_title_value:
    print("og:title을 찾을 수 없습니다!")
else:
    # HTML 엔티티 디코딩
    og_title_final = html.unescape(og_title_value).strip()

    # 비교
    current_title_normalized = re.sub(r'\s+', ' ', html.unescape(current_title).strip()).strip()
    og_title_normalized = re.sub(r'\s+', ' ', og_title_final).strip()

    print(f"정규화된 title: '{current_title_normalized}'")
    print(f"정규화된 og:title: '{og_title_normalized}'")
    print(f"동일 여부: {current_title_normalized == og_title_normalized}")
    print()

    if current_title_normalized != og_title_normalized:
        print("업데이트 중...")
        new_content = update_title_from_og_title(content, og_title_final)
        with open(test_file, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✓ 업데이트 완료: '{current_title}' -> '{og_title_final}'")
    else:
        print("이미 동일합니다.")
