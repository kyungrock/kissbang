#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
인천 HTML 파일들의 메타(description/keywords) 태그를
구·동 단위 정보에 맞춰 자동으로 업데이트하는 스크립트
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path
from typing import Iterable, List, Optional, Tuple

from update_seoul_detail_info import THEME_INFO

# 테마 표시 이름
THEME_DISPLAY = {slug: info["name"] for slug, info in THEME_INFO.items()}

# 인천 지역 데이터
REGION_DISTRICTS = {
    "junggu": {
        "display": "인천 중구",
        "alias": "중구",
        "districts": ["신포동", "동인천동", "영종동", "운서동", "을왕동", "용유동"],
        "description": "동인천역과 영종국제도시, 인천항 일대를 품고 있는 역사·관광 중심 구입니다.",
    },
    "donggu": {
        "display": "인천 동구",
        "alias": "동구",
        "districts": ["송현동", "화평동", "화수동", "송림동", "만석동", "금창동"],
        "description": "제물포 근대문화와 항만 산업이 공존하는 인천 내항 배후 생활권입니다.",
    },
    "michuhol": {
        "display": "인천 미추홀구",
        "alias": "미추홀구",
        "districts": ["주안동", "도화동", "관교동", "용현동", "학익동", "문학동"],
        "description": "주안역과 문학경기장을 품은 인천 도심 핵심 상권으로 교통과 상업이 발달했습니다.",
    },
    "bupyeong": {
        "display": "인천 부평구",
        "alias": "부평구",
        "districts": ["부평동", "산곡동", "삼산동", "갈산동", "청천동", "십정동"],
        "description": "부평문화의거리와 삼산체육관을 중심으로 한 인천 북부 최대 생활·상업 지구입니다.",
    },
    "gyeyang": {
        "display": "인천 계양구",
        "alias": "계양구",
        "districts": ["계산동", "작전동", "효성동", "귤현동", "박촌동", "장기동"],
        "description": "계양산과 공항철도를 품은 인천 북부 관문으로 주거와 자연이 공존하는 지역입니다.",
    },
    "seogu": {
        "display": "인천 서구",
        "alias": "서구",
        "districts": ["청라동", "검단동", "가좌동", "연희동", "석남동", "마전동"],
        "description": "청라국제도시와 검단신도시 개발이 한창인 서북부 성장 거점입니다.",
    },
    "namdong": {
        "display": "인천 남동구",
        "alias": "남동구",
        "districts": ["구월동", "논현동", "간석동", "만수동", "서창동", "장수동"],
        "description": "인천시청과 예술회관이 위치한 남동구는 구월동 중심상권과 논현지구로 유명합니다.",
    },
    "yeonsu": {
        "display": "인천 연수구",
        "alias": "연수구",
        "districts": ["송도동", "연수동", "청학동", "옥련동", "동춘동", "선학동"],
        "description": "송도국제도시와 연수동 학원가를 아우르는 글로벌 비즈니스·주거 중심 구입니다.",
    },
    "ganghwa": {
        "display": "인천 강화군",
        "alias": "강화군",
        "districts": ["강화읍", "선원면", "길상면", "불은면", "교동면", "삼산면"],
        "description": "유네스코 유산과 평야가 어우러진 한강 하구의 대표 힐링 아일랜드입니다.",
    },
    "ongjin": {
        "display": "인천 옹진군",
        "alias": "옹진군",
        "districts": ["백령면", "대청면", "덕적면", "자월면", "연평면", "영흥면"],
        "description": "서해의 청정 도서들을 품은 해양 관광 중심지로 섬마다 특색 있는 휴양지를 갖추고 있습니다.",
    },
}

INCHON_OVERVIEW_REGIONS = [
    "namdong",
    "bupyeong",
    "yeonsu",
    "seogu",
    "michuhol",
    "junggu",
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
        raise KeyError(f"지원하지 않는 인천 지역: {region_slug}")
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


def generate_meta_for_incheon() -> Tuple[str, str]:
    pairs = build_region_pairs(INCHON_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"인천 마사지천국은 {highlight} 등 인천 주요 생활권의 마사지·스파 정보를 한눈에 비교하고 예약할 수 있도록 돕는 플랫폼입니다.",
        f"{highlight} 라인을 포함한 인천 전역 마사지샵 정보를 마사지천국에서 손쉽게 확인하고 지역별 힐링 코스를 선택하세요.",
        f"송도와 구월동, 청라까지 {highlight} 중심으로 인천 마사지 정보를 큐레이션하여 맞춤형 선택을 지원합니다.",
    ]
    description = deterministic_pick("incheon-overview", variants)

    keyword_candidates = [
        "인천 마사지천국",
        "인천 마사지 예약",
        "인천 마사지 추천",
        "인천 스웨디시",
        "인천 타이마사지",
    ]
    keyword_candidates.extend(f"{display} {district} 마사지" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_incheon_theme(theme_slug: str) -> Tuple[str, str]:
    theme_name = THEME_DISPLAY[theme_slug]
    pairs = build_region_pairs(INCHON_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"인천 {theme_name} 전문 업체는 {highlight} 등 핵심 생활권에 모여 있으며, 마사지천국에서 비교 예약이 가능합니다.",
        f"{highlight} 중심 인천 {theme_name} 코스를 마사지천국에서 모아 보고 나에게 맞는 프로그램을 선택하세요.",
        f"송도·청라·구월동 등 {highlight} 라인의 인천 {theme_name} 정보를 한 번에 정리해 드립니다.",
    ]
    description = deterministic_pick(f"incheon-theme-{theme_slug}", variants)

    keyword_candidates = [
        f"인천 {theme_name}",
        f"인천 {theme_name} 마사지",
        f"인천 {theme_name} 추천",
        f"인천 {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{display} {district} {theme_name}" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region(region_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    districts = get_region_districts(region_slug, limit=5)
    districts_text = ", ".join(districts)

    variants = [
        f"인천 {info['alias']} 마사지 정보는 {districts_text} 일대에 집중되어 있으며, 마사지천국에서 인기 힐링 코스를 비교할 수 있습니다. {info['description']}",
        f"{info['alias']} {districts_text} 라인에 모여 있는 마사지·스파 업체를 마사지천국이 큐레이션합니다. {info['description']}",
        f"{districts_text} 중심의 인천 {info['alias']} 마사지샵을 마사지천국에서 한 번에 찾고 예약하세요. {info['description']}",
    ]
    description = deterministic_pick(region_slug, variants)

    keyword_candidates = [
        f"인천 {info['alias']} 마사지",
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
        f"인천 {info['alias']} {theme_name}는 {districts_text} 일대에 집중되어 있으며, 마사지천국에서 테마별 전문샵을 비교하고 예약할 수 있습니다.",
        f"{districts_text} 중심으로 형성된 인천 {info['alias']} {theme_name} 라인을 마사지천국이 정리했습니다.",
        f"{info['alias']} {districts_text} 일대 {theme_name} 프로그램과 가격대를 마사지천국에서 빠르게 비교해 보세요.",
    ]
    description = deterministic_pick(f"{region_slug}-{theme_slug}", variants)

    keyword_candidates = [
        f"인천 {info['alias']} {theme_name}",
        f"{info['alias']} {theme_name} 마사지",
        f"{info['alias']} {theme_name} 추천",
        f"{info['alias']} {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{info['alias']} {district} {theme_name}" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def determine_context(file_path: Path) -> Tuple[Optional[str], Optional[str]]:
    name = file_path.name
    if name == "incheon.html":
        return None, None

    if not name.startswith("incheon-") or not name.endswith(".html"):
        return None, None

    slug_part = name[len("incheon-") : -len(".html")]
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
        description, keywords = generate_meta_for_incheon()
    elif region_slug is None and theme_slug:
        description, keywords = generate_meta_for_incheon_theme(theme_slug)
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

    target_files = list(public_dir.glob("incheon*.html"))
    if not target_files:
        print("처리할 인천 HTML 파일이 없습니다.")
        return

    updated_count = 0
    for file_path in sorted(target_files):
        if update_file(file_path):
            updated_count += 1

    print(f"\n[완료] 총 {updated_count}개 인천 지역 파일의 메타 태그를 업데이트했습니다.")


if __name__ == "__main__":
    main()

