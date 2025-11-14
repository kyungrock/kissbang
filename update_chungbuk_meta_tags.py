#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
충북 HTML 파일들의 메타(description/keywords) 태그를
시·군·동 정보에 맞춰 자동 업데이트하는 스크립트
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path
from typing import Iterable, List, Optional, Tuple

from update_seoul_detail_info import THEME_INFO

# 테마 매핑
THEME_DISPLAY = {slug: info["name"] for slug, info in THEME_INFO.items()}

# 충북 지역 데이터
REGION_DISTRICTS = {
    "cheongju": {
        "display": "충북 청주시",
        "alias": "청주",
        "districts": ["성안동", "분평동", "복대동", "지웰시티", "오창읍", "율량동"],
        "description": "충북도청과 청주국제공항이 위치한 청주는 오송·오창 바이오밸리와 도심 상권이 조화를 이루는 도시입니다.",
    },
    "chungju": {
        "display": "충북 충주시",
        "alias": "충주",
        "districts": ["연수동", "성내동", "용산동", "칠금동", "호암동", "금릉동"],
        "description": "충주호와 중심시가지가 어우러진 중원 문화 도시로, 관광과 레저가 발달했습니다.",
    },
    "jecheon": {
        "display": "충북 제천시",
        "alias": "제천",
        "districts": ["의림동", "장락동", "신백동", "용두동", "청전동", "봉양읍"],
        "description": "의림지와 청풍호, 한방바이오 특화단지를 갖춘 힐링 레저 도시입니다.",
    },
    "boeun": {
        "display": "충북 보은군",
        "alias": "보은",
        "districts": ["보은읍", "속리산면", "내북면", "삼승면", "탄부면", "마로면"],
        "description": "속리산 국립공원과 법주사를 품은 자연·문화 관광지입니다.",
    },
    "okcheon": {
        "display": "충북 옥천군",
        "alias": "옥천",
        "districts": ["옥천읍", "동이면", "안남면", "청성면", "이원면", "군북면"],
        "description": "대청호와 금강 수변 경관이 아름다운 힐링 도시로 수도권과 접근성이 좋습니다.",
    },
    "yeongdong": {
        "display": "충북 영동군",
        "alias": "영동",
        "districts": ["영동읍", "황간면", "용산면", "추풍령면", "매곡면", "심천면"],
        "description": "국내 최대 와인 축제와 영동난계국악축제로 유명한 문화 관광 도시입니다.",
    },
    "jincheon": {
        "display": "충북 진천군",
        "alias": "진천",
        "districts": ["진천읍", "덕산읍", "광혜원면", "이월면", "문백면", "초평면"],
        "description": "혁신도시와 산업단지가 조성되어 기업과 주거가 빠르게 성장 중인 도시입니다.",
    },
    "eumseong": {
        "display": "충북 음성군",
        "alias": "음성",
        "districts": ["음성읍", "금왕읍", "대소면", "맹동면", "삼성면", "소이면"],
        "description": "충북혁신도시와 혁신산단이 위치한 산업·주거 복합 지역입니다.",
    },
    "jeungpyeong": {
        "display": "충북 증평군",
        "alias": "증평",
        "districts": ["증평읍", "도안면", "연탄2리", "장동", "진송리", "좌구산휴양림"],
        "description": "좌구산휴양림과 보강천길 등 자연과 문화가 어우러진 살기 좋은 군입니다.",
    },
    "danyang": {
        "display": "충북 단양군",
        "alias": "단양",
        "districts": ["단양읍", "매포읍", "가곡면", "영춘면", "적성면", "어상천면"],
        "description": "도담삼봉과 온달동굴, 단양강 잔도가 있는 국가지질공원 관광지입니다.",
    },
    "goesan": {
        "display": "충북 괴산군",
        "alias": "괴산",
        "districts": ["괴산읍", "청천면", "청안면", "불정면", "문광면", "연풍면"],
        "description": "산막이옛길과 청천 계곡이 유명한 청정 힐링 여행지입니다.",
    },
}

CHUNGBUK_OVERVIEW_REGIONS = [
    "cheongju",
    "chungju",
    "jecheon",
    "jincheon",
    "eumseong",
    "yeongdong",
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
    if region_slug not in REGION_DISTRICTS:
        raise KeyError(f"지원하지 않는 충북 지역: {region_slug}")
    return REGION_DISTRICTS[region_slug]


def get_region_districts(region_slug: str, limit: int = 5) -> List[str]:
    info = get_region_info(region_slug)
    return info.get("districts", [])[:limit]


def build_region_pairs(region_slugs: Iterable[str], per_region: int = 1) -> List[Tuple[str, str]]:
    pairs: List[Tuple[str, str]] = []
    for slug in region_slugs:
        info = get_region_info(slug)
        for district in get_region_districts(slug, per_region):
            pairs.append((info["display"], district))
    return pairs


def generate_meta_for_chungbuk() -> Tuple[str, str]:
    pairs = build_region_pairs(CHUNGBUK_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"충북 마사지천국은 {highlight} 등 충북 주요 생활권의 마사지·스파 정보를 한눈에 비교하고 예약할 수 있도록 돕는 플랫폼입니다.",
        f"{highlight} 라인의 충북 마사지샵 정보를 마사지천국에서 손쉽게 확인하고 지역별 힐링 코스를 선택하세요.",
        f"청주·충주·제천에서 혁신도시 라인까지 {highlight} 중심으로 충북 마사지 정보를 큐레이션합니다.",
    ]
    description = deterministic_pick("chungbuk-overview", variants)

    keyword_candidates = [
        "충북 마사지천국",
        "충북 마사지 예약",
        "충북 마사지 추천",
        "충북 스웨디시",
        "충북 타이마사지",
    ]
    keyword_candidates.extend(f"{display} {district} 마사지" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_chungbuk_theme(theme_slug: str) -> Tuple[str, str]:
    theme_name = THEME_DISPLAY[theme_slug]
    pairs = build_region_pairs(CHUNGBUK_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"충북 {theme_name} 전문 업체는 {highlight} 등 핵심 생활권에 모여 있으며, 마사지천국에서 비교 예약이 가능합니다.",
        f"{highlight} 중심 충북 {theme_name} 코스를 마사지천국에서 모아 보고 원하는 프로그램을 선택하세요.",
        f"충북 {theme_name} 정보는 마사지천국에 모두 모였습니다. {highlight} 라인의 인기샵과 후기, 가격을 확인해 보세요.",
    ]
    description = deterministic_pick(f"chungbuk-theme-{theme_slug}", variants)

    keyword_candidates = [
        f"충북 {theme_name}",
        f"충북 {theme_name} 마사지",
        f"충북 {theme_name} 추천",
        f"충북 {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{display} {district} {theme_name}" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region(region_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    districts = get_region_districts(region_slug, limit=5)
    districts_text = ", ".join(districts)

    variants = [
        f"충북 {info['alias']} 마사지 정보는 {districts_text} 일대에 집중되어 있으며, 마사지천국에서 인기 힐링 코스를 비교할 수 있습니다. {info['description']}",
        f"{info['alias']} {districts_text} 라인의 마사지·스파 업체를 마사지천국이 한눈에 정리했습니다. {info['description']}",
        f"{districts_text} 중심으로 모여 있는 충북 {info['alias']} 마사지샵을 마사지천국에서 찾아보고 예약하세요. {info['description']}",
    ]
    description = deterministic_pick(region_slug, variants)

    keyword_candidates = [
        f"충북 {info['alias']} 마사지",
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
    districts = get_region_districts(region_slug, limit=5)
    districts_text = ", ".join(districts)

    variants = [
        f"충북 {info['alias']} {theme_name} 라인은 {districts_text}을 중심으로 형성되어 있으며, 마사지천국에서 테마별 전문샵을 비교하고 예약할 수 있습니다.",
        f"{districts_text} 중심 충북 {info['alias']} {theme_name} 프로그램을 마사지천국이 정리했습니다.",
        f"{info['alias']} {districts_text} 일대 {theme_name} 가격과 후기 정보를 마사지천국에서 빠르게 확인해 보세요.",
    ]
    description = deterministic_pick(f"{region_slug}-{theme_slug}", variants)

    keyword_candidates = [
        f"충북 {info['alias']} {theme_name}",
        f"{info['alias']} {theme_name} 마사지",
        f"{info['alias']} {theme_name} 추천",
        f"{info['alias']} {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{info['alias']} {district} {theme_name}" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def determine_context(file_path: Path) -> Tuple[Optional[str], Optional[str]]:
    name = file_path.name
    if name == "chungbuk.html":
        return None, None

    if not name.startswith("chungbuk-") or not name.endswith(".html"):
        return None, None

    slug_part = name[len("chungbuk-") : -len(".html")]
    if not slug_part:
        return None, None

    parts = slug_part.split("-")

    theme_slug: Optional[str] = None
    if parts and parts[-1] in THEME_DISPLAY:
        theme_slug = parts.pop()

    region_slug: Optional[str] = None
    if parts:
        region_candidate = "-".join(parts)
        if region_candidate in REGION_DISTRICTS:
            region_slug = region_candidate
        elif len(parts) == 1 and parts[0] in REGION_DISTRICTS:
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

    if region_slug and region_slug not in REGION_DISTRICTS:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 지역")
        return False

    if theme_slug and theme_slug not in THEME_DISPLAY:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 테마")
        return False

    if region_slug is None and theme_slug is None:
        description, keywords = generate_meta_for_chungbuk()
    elif region_slug is None and theme_slug:
        description, keywords = generate_meta_for_chungbuk_theme(theme_slug)
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

    target_files = list(public_dir.glob("chungbuk*.html"))
    if not target_files:
        print("처리할 충북 HTML 파일이 없습니다.")
        return

    updated_count = 0
    for file_path in sorted(target_files):
        if update_file(file_path):
            updated_count += 1

    print(f"\n[완료] 총 {updated_count}개 충북 지역 파일의 메타 태그를 업데이트했습니다.")


if __name__ == "__main__":
    main()

