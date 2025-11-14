#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
서울 관련 HTML 파일들의 메타(description/keywords) 태그를
구·동 정보에 맞춰 일괄 업데이트하는 스크립트
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import List, Optional, Tuple

from update_seoul_detail_info import REGION_DISTRICTS, THEME_INFO

# 테마 표시 이름 매핑
THEME_DISPLAY = {slug: info["name"] for slug, info in THEME_INFO.items()}

# 서울 구 슬러그 ↔ 한글 명칭 매핑
REGION_SLUG_TO_NAME = {
    "gangnam": "강남",
    "gangdong": "강동",
    "gangbuk": "강북",
    "gangseo": "강서",
    "gwanak": "관악",
    "gwangjin": "광진",
    "guro": "구로",
    "geumcheon": "금천",
    "nowon": "노원",
    "dobong": "도봉",
    "dongdaemun": "동대문",
    "dongjak": "동작",
    "mapo": "마포",
    "seodaemun": "서대문",
    "seocho": "서초",
    "seongdong": "성동",
    "seongbuk": "성북",
    "songpa": "송파",
    "yangcheon": "양천",
    "yeongdeungpo": "영등포",
    "yongsan": "용산",
    "eunpyeong": "은평",
    "jongno": "종로",
    "junggu": "중구",
    "jungnang": "중랑",
}

# 대표 구 선택 (서울 전체 메타 태그용)
SEOUL_REPRESENTATIVE_REGIONS = [
    "gangnam",
    "seocho",
    "songpa",
    "mapo",
    "jongno",
    "yongsan",
    "yeongdeungpo",
]


DESCRIPTION_TEMPLATE = (
    "    <meta\n"
    '      name="description"\n'
    '      content="{description}"\n'
    "    />"
)

KEYWORDS_TEMPLATE = (
    "    <meta\n"
    '      name="keywords"\n'
    '      content="{keywords}"\n'
    "    />"
)


def ensure_display_region(region_name: str) -> str:
    """지역 이름이 '구'로 끝나지 않으면 '구'를 붙여 반환"""
    return region_name if region_name.endswith("구") else f"{region_name}구"


def get_region_dongs(region_slug: str, max_count: int = 3) -> List[str]:
    """해당 구의 대표 동 목록을 반환 (시내 중심 등 비정형 표현 제외)"""
    data = REGION_DISTRICTS.get(region_slug, {})
    districts = data.get("districts", [])
    primary = [d for d in districts if d.endswith("동")]
    if len(primary) < max_count:
        extras = [
            d
            for d in districts
            if d not in primary and d != "시내 중심"
        ]
        primary.extend(extras)
    # 중복 제거 후 상위 max_count만 사용
    seen = set()
    ordered: List[str] = []
    for name in primary:
        if name not in seen:
            seen.add(name)
            ordered.append(name)
        if len(ordered) >= max_count:
            break
    return ordered


def build_region_dong_pairs(region_slugs: List[str], per_region: int = 1) -> List[Tuple[str, str]]:
    """구/동 조합을 (구, 동) 튜플 리스트로 반환"""
    pairs: List[Tuple[str, str]] = []
    for slug in region_slugs:
        region_name = REGION_SLUG_TO_NAME.get(slug)
        if not region_name:
            continue
        display_region = ensure_display_region(region_name)
        dongs = get_region_dongs(slug, per_region)
        for dong in dongs:
            pairs.append((display_region, dong))
    return pairs


def generate_meta_for_seoul() -> Tuple[str, str]:
    """서울 기본 페이지용 메타 생성"""
    pairs = build_region_dong_pairs(SEOUL_REPRESENTATIVE_REGIONS, per_region=1)
    pair_text = ", ".join(f"{region} {dong}" for region, dong in pairs[:5])
    description = (
        f"서울 마사지천국은 {pair_text} 등 서울 주요 구·동의 마사지·스파 업체 정보를 "
        "한눈에 비교하고 예약할 수 있는 플랫폼입니다."
    )
    keywords = [
        "서울 마사지천국",
        "서울 마사지 예약",
        "서울 마사지 추천",
    ]
    keywords.extend(
        f"{region} {dong} 마사지" for region, dong in pairs
    )
    return description, ", ".join(dict.fromkeys(keywords))


def generate_meta_for_seoul_theme(theme_slug: str) -> Tuple[str, str]:
    """서울 + 테마 페이지용 메타 생성"""
    theme_name = THEME_DISPLAY[theme_slug]
    pairs = build_region_dong_pairs(SEOUL_REPRESENTATIVE_REGIONS, per_region=1)
    pair_text = ", ".join(f"{region} {dong}" for region, dong in pairs[:5])
    description = (
        f"서울 {theme_name} 전문 마사지천국은 {pair_text} 등 서울 주요 구·동의 {theme_name} 코스를 "
        "비교하고 예약할 수 있는 플랫폼입니다."
    )
    keywords = [
        f"서울 {theme_name}",
        f"서울 {theme_name} 마사지",
        f"서울 {theme_name} 추천",
    ]
    keywords.extend(
        f"{region} {dong} {theme_name}" for region, dong in pairs
    )
    return description, ", ".join(dict.fromkeys(keywords))


def generate_meta_for_region(region_slug: str) -> Tuple[str, str]:
    """서울 + 구 페이지용 메타 생성"""
    region_name = REGION_SLUG_TO_NAME[region_slug]
    display_region = ensure_display_region(region_name)
    dongs = get_region_dongs(region_slug, max_count=4)
    dong_text = ", ".join(dongs)
    description = (
        f"서울 {display_region} 마사지천국은 {dong_text} 등 {display_region} 대표 동의 마사지·스파 업체 정보를 "
        "한눈에 비교하고 예약할 수 있는 플랫폼입니다."
    )
    keywords = [
        f"서울 {display_region} 마사지",
        f"{display_region} 마사지",
        f"{display_region} 스웨디시",
        f"{display_region} 타이마사지",
    ]
    keywords.extend(
        f"{display_region} {dong} 마사지" for dong in dongs
    )
    return description, ", ".join(dict.fromkeys(keywords))


def generate_meta_for_region_theme(region_slug: str, theme_slug: str) -> Tuple[str, str]:
    """서울 + 구 + 테마 페이지용 메타 생성"""
    region_name = REGION_SLUG_TO_NAME[region_slug]
    display_region = ensure_display_region(region_name)
    theme_name = THEME_DISPLAY[theme_slug]
    dongs = get_region_dongs(region_slug, max_count=4)
    dong_text = ", ".join(dongs)
    description = (
        f"서울 {display_region} {theme_name} 전문 업체 정보는 {dong_text} 등 {display_region} 주요 동의 "
        f"{theme_name} 코스를 마사지천국에서 비교하고 예약하세요."
    )
    keywords = [
        f"서울 {display_region} {theme_name}",
        f"{display_region} {theme_name} 마사지",
        f"{display_region} {theme_name} 추천",
    ]
    keywords.extend(
        f"{display_region} {dong} {theme_name}" for dong in dongs
    )
    return description, ", ".join(dict.fromkeys(keywords))


def determine_context(file_path: Path) -> Tuple[Optional[str], Optional[str]]:
    """
    파일명에서 구/테마 컨텍스트를 추출
    반환값: (region_slug, theme_slug)
    """
    name = file_path.name
    if name == "seoul.html":
        return None, None

    if not name.startswith("seoul-") or not name.endswith(".html"):
        return None, None

    slug_part = name[len("seoul-") : -len(".html")]
    if not slug_part:
        return None, None

    parts = slug_part.split("-")

    theme_slug: Optional[str] = None
    if parts and parts[-1] in THEME_DISPLAY:
        theme_slug = parts.pop()

    region_slug: Optional[str] = None
    if parts:
        candidate = "-".join(parts)
        if candidate in REGION_SLUG_TO_NAME:
            region_slug = candidate
        elif len(parts) == 1 and parts[0] in REGION_SLUG_TO_NAME:
            region_slug = parts[0]
        else:
            # 인식 불가한 패턴
            region_slug = None

    return region_slug, theme_slug


def replace_meta(content: str, description: str, keywords: str) -> str:
    """기존 메타 태그를 새로운 내용으로 교체"""
    new_description_block = DESCRIPTION_TEMPLATE.format(description=description)
    new_keywords_block = KEYWORDS_TEMPLATE.format(keywords=keywords)

    description_pattern = re.compile(r"<meta\s+name=\"description\"[\s\S]*?/>")
    keywords_pattern = re.compile(r"<meta\s+name=\"keywords\"[\s\S]*?/>")

    updated = description_pattern.sub(new_description_block, content, count=1)
    updated = keywords_pattern.sub(new_keywords_block, updated, count=1)
    return updated


def update_file(file_path: Path) -> bool:
    """단일 파일의 메타 태그를 업데이트"""
    region_slug, theme_slug = determine_context(file_path)

    if region_slug and region_slug not in REGION_SLUG_TO_NAME:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 지역")
        return False

    if theme_slug and theme_slug not in THEME_DISPLAY:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 테마")
        return False

    if region_slug and region_slug not in REGION_DISTRICTS:
        print(f"[SKIP] {file_path.name}: 지역 데이터 없음")
        return False

    if theme_slug and theme_slug not in THEME_DISPLAY:
        print(f"[SKIP] {file_path.name}: 테마 데이터 없음")
        return False

    if region_slug is None and theme_slug is None:
        description, keywords = generate_meta_for_seoul()
    elif region_slug is None and theme_slug:
        description, keywords = generate_meta_for_seoul_theme(theme_slug)
    elif region_slug and theme_slug is None:
        description, keywords = generate_meta_for_region(region_slug)
    else:
        description, keywords = generate_meta_for_region_theme(region_slug, theme_slug)

    original = file_path.read_text(encoding="utf-8")
    updated = replace_meta(original, description, keywords)

    if updated == original:
        print(f"[SKIP] {file_path.name}: 변경 사항 없음")
        return False

    file_path.write_text(updated, encoding="utf-8")
    print(f"[OK] {file_path.name}")
    return True


def main() -> None:
    public_dir = Path("public")
    if not public_dir.exists():
        raise FileNotFoundError("public 디렉터리를 찾을 수 없습니다.")

    target_files = list(public_dir.glob("seoul*.html"))
    if not target_files:
        print("처리할 서울 HTML 파일이 없습니다.")
        return

    updated_count = 0
    for file_path in sorted(target_files):
        if update_file(file_path):
            updated_count += 1

    print(f"\n[완료] 총 {updated_count}개 파일의 메타 태그를 업데이트했습니다.")


if __name__ == "__main__":
    main()

