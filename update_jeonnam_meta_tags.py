#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
전남 HTML 파일들의 메타(description/keywords) 태그를
시·군·읍·면·동 정보에 맞춰 자동 업데이트하는 스크립트
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path
from typing import Iterable, List, Optional, Tuple

from update_seoul_detail_info import THEME_INFO
from update_jeonnam_detail_info import REGION_DISTRICTS as DETAIL_REGION_DATA

THEME_DISPLAY = {slug: info["name"] for slug, info in THEME_INFO.items()}

REGION_META = {
    "mokpo": {"display": "전남 목포시", "alias": "목포"},
    "yeosu": {"display": "전남 여수시", "alias": "여수"},
    "suncheon": {"display": "전남 순천시", "alias": "순천"},
    "gwangyang": {"display": "전남 광양시", "alias": "광양"},
    "naju": {"display": "전남 나주시", "alias": "나주"},
    "yeongam": {"display": "전남 영암군", "alias": "영암"},
    "yeonggwang": {"display": "전남 영광군", "alias": "영광"},
    "haenam": {"display": "전남 해남군", "alias": "해남"},
    "gangjin": {"display": "전남 강진군", "alias": "강진"},
    "goheung": {"display": "전남 고흥군", "alias": "고흥"},
    "sinan": {"display": "전남 신안군", "alias": "신안"},
    "wando": {"display": "전남 완도군", "alias": "완도"},
    "jangheung": {"display": "전남 장흥군", "alias": "장흥"},
    "hwasun": {"display": "전남 화순군", "alias": "화순"},
    "damyang": {"display": "전남 담양군", "alias": "담양"},
    "gokseong": {"display": "전남 곡성군", "alias": "곡성"},
    "gurye": {"display": "전남 구례군", "alias": "구례"},
    "yeongam": {"display": "전남 영암군", "alias": "영암"},
    "hampyeong": {"display": "전남 함평군", "alias": "함평"},
    "jangseong": {"display": "전남 장성군", "alias": "장성"},
    "boseong": {"display": "전남 보성군", "alias": "보성"},
    "muan": {"display": "전남 무안군", "alias": "무안"},
    "jindo": {"display": "전남 진도군", "alias": "진도"},
}

JEONNAM_OVERVIEW_REGIONS = [
    "mokpo",
    "yeosu",
    "suncheon",
    "gwangyang",
    "naju",
    "yeongam",
    "haenam",
    "goheung",
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


def deterministic_pick(key: str, options: Iterable[str]) -> str:
    options = tuple(options)
    if not options:
        raise ValueError("선택할 문장이 없습니다.")
    index = int(hashlib.md5(key.encode("utf-8")).hexdigest(), 16) % len(options)
    return options[index]


def unique_join(values: Iterable[str]) -> str:
    seen = set()
    ordered: List[str] = []
    for value in values:
        if not value:
            continue
        if value not in seen:
            seen.add(value)
            ordered.append(value)
    return ", ".join(ordered)


def get_region_info(region_slug: str) -> dict:
    if region_slug not in REGION_META:
        raise KeyError(f"지원하지 않는 전남 지역: {region_slug}")
    base = REGION_META[region_slug]
    detail = DETAIL_REGION_DATA.get(region_slug, {})
    districts = list(detail.get("districts", []))
    description = detail.get(
        "description",
        f"{base['display']} 주요 생활권의 마사지 정보를 제공합니다.",
    )
    return {
        "display": base["display"],
        "alias": base["alias"],
        "districts": districts,
        "description": description,
    }


def get_region_districts(region_slug: str, limit: int = 6) -> List[str]:
    info = get_region_info(region_slug)
    return info["districts"][:limit]


def build_region_pairs(region_slugs: Iterable[str], per_region: int = 1) -> List[Tuple[str, str]]:
    pairs: List[Tuple[str, str]] = []
    for slug in region_slugs:
        info = get_region_info(slug)
        for district in get_region_districts(slug, per_region):
            pairs.append((info["display"], district))
    return pairs


def generate_meta_for_jeonnam() -> Tuple[str, str]:
    pairs = build_region_pairs(JEONNAM_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"전남 마사지천국은 {highlight} 등 전남 주요 생활권의 마사지·스파 정보를 한눈에 비교하고 예약할 수 있도록 돕는 플랫폼입니다.",
        f"{highlight} 라인의 전남 마사지샵 정보를 마사지천국에서 손쉽게 확인하고 지역별 힐링 코스를 선택하세요.",
        f"목포·여수·순천에서 광양·해남까지 {highlight} 중심으로 전남 마사지 정보를 큐레이션합니다.",
    ]
    description = deterministic_pick("jeonnam-overview", variants)

    keyword_candidates = [
        "전남 마사지천국",
        "전남 마사지 예약",
        "전남 마사지 추천",
        "전남 스웨디시",
        "전남 타이마사지",
    ]
    keyword_candidates.extend(f"{display} {district} 마사지" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_jeonnam_theme(theme_slug: str) -> Tuple[str, str]:
    theme_name = THEME_DISPLAY[theme_slug]
    pairs = build_region_pairs(JEONNAM_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"전남 {theme_name} 전문 업체는 {highlight} 등 핵심 생활권에 모여 있으며, 마사지천국에서 비교 예약이 가능합니다.",
        f"{highlight} 중심 전남 {theme_name} 코스를 마사지천국에서 모아 정리했습니다. 테마별 프로그램을 한 번에 비교하세요.",
        f"전남 {theme_name} 정보는 마사지천국에 모두 모였습니다. {highlight} 라인의 인기샵과 후기를 확인해 보세요.",
    ]
    description = deterministic_pick(f"jeonnam-theme-{theme_slug}", variants)

    keyword_candidates = [
        f"전남 {theme_name}",
        f"전남 {theme_name} 마사지",
        f"전남 {theme_name} 추천",
        f"전남 {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{display} {district} {theme_name}" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region(region_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    districts = get_region_districts(region_slug, limit=6)
    districts_text = ", ".join(districts)

    variants = [
        f"{info['alias']} {districts_text} 일대에 모여 있는 전남 {info['alias']} 마사지샵을 마사지천국에서 찾아보고 예약하세요. {info['description']}",
        f"전남 {info['alias']} 마사지 정보는 {districts_text} 라인에 집중되어 있으며, 마사지천국에서 인기 힐링 코스를 비교할 수 있습니다. {info['description']}",
        f"{districts_text} 중심으로 형성된 전남 {info['alias']} 마사지·스파 업체를 마사지천국이 한눈에 정리했습니다. {info['description']}",
    ]
    description = deterministic_pick(region_slug, variants)

    keyword_candidates = [
        f"전남 {info['alias']} 마사지",
        f"{info['alias']} 마사지",
        f"{info['alias']} 스웨디시",
        f"{info['alias']} 타이마사지",
    ]
    keyword_candidates.extend(f"{info['alias']} {district} 마사지" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region_theme(region_slug: str, theme_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    theme_name = THEME_DISPLAY[theme_slug]
    districts = get_region_districts(region_slug, limit=6)
    districts_text = ", ".join(districts)

    variants = [
        f"{info['alias']} {districts_text} 라인의 전남 {info['alias']} {theme_name} 전문샵을 마사지천국에서 비교하고 예약할 수 있습니다.",
        f"{districts_text} 중심으로 형성된 전남 {info['alias']} {theme_name} 프로그램을 마사지천국이 정리했습니다.",
        f"{info['alias']} {districts_text} 일대 {theme_name} 가격과 후기 정보를 마사지천국에서 빠르게 확인해 보세요.",
    ]
    description = deterministic_pick(f"{region_slug}-{theme_slug}", variants)

    keyword_candidates = [
        f"전남 {info['alias']} {theme_name}",
        f"{info['alias']} {theme_name} 마사지",
        f"{info['alias']} {theme_name} 추천",
        f"{info['alias']} {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{info['alias']} {district} {theme_name}" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def determine_context(file_path: Path) -> Tuple[Optional[str], Optional[str]]:
    name = file_path.name
    if name == "jeonnam.html":
        return None, None

    if not name.startswith("jeonnam-") or not name.endswith(".html"):
        return None, None

    slug_part = name[len("jeonnam-") : -len(".html")]
    if not slug_part:
        return None, None

    parts = slug_part.split("-")

    theme_slug: Optional[str] = None
    if parts and parts[-1] in THEME_DISPLAY:
        theme_slug = parts.pop()

    region_slug: Optional[str] = None
    if parts:
        candidate = "-".join(parts)
        if candidate in REGION_META:
            region_slug = candidate
        elif len(parts) == 1 and parts[0] in REGION_META:
            region_slug = parts[0]

    return region_slug, theme_slug


def replace_meta(content: str, description: str, keywords: str) -> str:
    new_description = DESCRIPTION_TEMPLATE.format(description=description)
    new_keywords = KEYWORDS_TEMPLATE.format(keywords=keywords)

    description_pattern = re.compile(r"<meta\s+name=\"description\"[\s\S]*?/>", re.IGNORECASE)
    keywords_pattern = re.compile(r"<meta\s+name=\"keywords\"[\s\S]*?/>", re.IGNORECASE)

    updated = description_pattern.sub(new_description, content, count=1)
    updated = keywords_pattern.sub(new_keywords, updated, count=1)
    return updated


def update_file(file_path: Path) -> bool:
    region_slug, theme_slug = determine_context(file_path)

    if region_slug and region_slug not in REGION_META:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 지역")
        return False

    if theme_slug and theme_slug not in THEME_DISPLAY:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 테마")
        return False

    if region_slug is None and theme_slug is None:
        description, keywords = generate_meta_for_jeonnam()
    elif region_slug is None and theme_slug:
        description, keywords = generate_meta_for_jeonnam_theme(theme_slug)
    elif region_slug and theme_slug is None:
        description, keywords = generate_meta_for_region(region_slug)
    else:
        description, keywords = generate_meta_for_region_theme(region_slug, theme_slug)

    original = file_path.read_text(encoding="utf-8")
    updated = replace_meta(original, description, keywords)

    if original == updated:
        print(f"[SKIP] {file_path.name}: 변경 사항 없음")
        return False

    file_path.write_text(updated, encoding="utf-8")
    print(f"[OK] {file_path.name}")
    return True


def main() -> None:
    public_dir = Path("public")
    if not public_dir.exists():
        raise FileNotFoundError("public 디렉터리를 찾을 수 없습니다.")

    target_files = list(public_dir.glob("jeonnam*.html"))
    if not target_files:
        print("처리할 전남 HTML 파일이 없습니다.")
        return

    updated_count = 0
    for file_path in sorted(target_files):
        if update_file(file_path):
            updated_count += 1

    print(f"\n[완료] 총 {updated_count}개 전남 지역 파일의 메타 태그를 업데이트했습니다.")


if __name__ == "__main__":
    main()

