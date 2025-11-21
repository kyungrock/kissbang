#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
강원 HTML 파일들의 메타(description/keywords) 태그를
시·군·읍·면 정보에 맞춰 자동으로 업데이트하는 스크립트
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path
from typing import Iterable, List, Optional, Tuple

from update_seoul_detail_info import THEME_INFO

# 테마명 매핑
THEME_DISPLAY = {slug: info["name"] for slug, info in THEME_INFO.items()}

# 강원 지역 데이터
REGION_DISTRICTS = {
    "chuncheon": {
        "display": "강원 춘천시",
        "alias": "춘천",
        "districts": ["명동", "온의동", "퇴계동", "석사동", "강남동", "신사우동"],
        "description": "소양강과 의암호가 어우러진 강원도청 소재지로 카페·맛집과 호수 관광이 조화를 이루는 도시입니다.",
    },
    "wonju": {
        "display": "강원 원주시",
        "alias": "원주",
        "districts": ["무실동", "단구동", "명륜동", "기업도시", "혁신도시", "우산동"],
        "description": "혁신도시와 기업도시 개발로 성장 중인 강원 남부의 생활·의료 중심 도시입니다.",
    },
    "gangneung": {
        "display": "강원 강릉시",
        "alias": "강릉",
        "districts": ["교동", "포남동", "홍제동", "연곡면", "주문진읍", "안목해변"],
        "description": "경포호와 안목해변, 주문진을 품은 강원 동해안 대표 관광·커피 도시입니다.",
    },
    "sokcho": {
        "display": "강원 속초시",
        "alias": "속초",
        "districts": ["청학동", "교동", "조양동", "금호동", "노학동", "설악동"],
        "description": "설악산과 청초호, 속초해수욕장을 중심으로 한 사계절 관광도시입니다.",
    },
    "donghae": {
        "display": "강원 동해시",
        "alias": "동해",
        "districts": ["천곡동", "묵호동", "발한동", "북평동", "송정동", "망상동"],
        "description": "묵호항과 망상해변을 품은 항만·해양 관광 도시로 알려져 있습니다.",
    },
    "samcheok": {
        "display": "강원 삼척시",
        "alias": "삼척",
        "districts": ["남양동", "정라동", "도계읍", "원덕읍", "근덕면", "하장면"],
        "description": "해양동굴과 장호항, 도계탄광문화촌이 공존하는 동해안 남부 관광도시입니다.",
    },
    "taebaek": {
        "display": "강원 태백시",
        "alias": "태백",
        "districts": ["황지동", "장성동", "문곡동", "철암동", "소도동", "창죽동"],
        "description": "해발 650m 고원지대에 위치한 석탄 산업과 겨울축제로 유명한 도시입니다.",
    },
    "yeongwol": {
        "display": "강원 영월군",
        "alias": "영월",
        "districts": ["영월읍", "주천면", "김삿갓면", "무릉도원면", "북면", "남면"],
        "description": "동강과 한반도지형 전망대, 김삿갓 계곡을 품은 자연·문화 관광지입니다.",
    },
    "pyeongchang": {
        "display": "강원 평창군",
        "alias": "평창",
        "districts": ["평창읍", "대관령면", "봉평면", "용평면", "진부면", "대화면"],
        "description": "알펜시아와 용평리조트 등 동계스포츠 시설과 푸른 고원이 어우러진 힐링 도시입니다.",
    },
    "jeongseon": {
        "display": "강원 정선군",
        "alias": "정선",
        "districts": ["정선읍", "고한읍", "사북읍", "신동읍", "여량면", "임계면"],
        "description": "아리랑 축제와 하이원리조트, 정선5일장으로 유명한 산악 관광지입니다.",
    },
    "hongcheon": {
        "display": "강원 홍천군",
        "alias": "홍천",
        "districts": ["홍천읍", "남면", "서석면", "화촌면", "북방면", "내촌면"],
        "description": "서울과 가까운 계곡·온천 휴양지로 사계절 레저가 발달한 지역입니다.",
    },
    "hoengseong": {
        "display": "강원 횡성군",
        "alias": "횡성",
        "districts": ["횡성읍", "둔내면", "갑천면", "공근면", "서원면", "우천면"],
        "description": "횡성한우로 유명하며, 둔내자연휴양림과 레저시설이 잘 갖춰진 군입니다.",
    },
    "yanggu": {
        "display": "강원 양구군",
        "alias": "양구",
        "districts": ["양구읍", "국토정중앙면", "동면", "방산면", "해안면", "남면"],
        "description": "펀치볼 분지와 두타연 등 DMZ 생태관광 명소를 보유한 지역입니다.",
    },
    "yangyang": {
        "display": "강원 양양군",
        "alias": "양양",
        "districts": ["양양읍", "강현면", "현북면", "현남면", "손양면", "서면"],
        "description": "서핑 스팟인 낙산·죽도 해변과 설악산 자락을 함께 즐길 수 있는 해양·산악 관광지입니다.",
    },
    "goseong": {
        "display": "강원 고성군",
        "alias": "고성",
        "districts": ["간성읍", "토성면", "죽왕면", "현내면", "거진읍", "수동면"],
        "description": "DMZ 박물관, 화진포해변 등 청정 동해안 비경을 품은 최북단 휴양지입니다.",
    },
    "inje": {
        "display": "강원 인제군",
        "alias": "인제",
        "districts": ["인제읍", "남면", "북면", "기린면", "서화면", "상남면"],
        "description": "내린천과 설악산, 백담사가 어우러진 산림 치유·레저 명소입니다.",
    },
    "hwacheon": {
        "display": "강원 화천군",
        "alias": "화천",
        "districts": ["화천읍", "사내면", "하남면", "간동면", "상서면", "중리산촌"],
        "description": "산천어축제로 유명하며 DMZ 생태와 호수 풍경이 아름다운 북부 접경 지역입니다.",
    },
    "cheorwon": {
        "display": "강원 철원군",
        "alias": "철원",
        "districts": ["철원읍", "동송읍", "갈말읍", "김화읍", "서면", "근남면"],
        "description": "한탄강 주상절리와 노동당사 등 역사·생태 관광지가 공존하는 DMZ 접경 지역입니다.",
    },
}

GANGWON_OVERVIEW_REGIONS = [
    "chuncheon",
    "wonju",
    "gangneung",
    "sokcho",
    "donghae",
    "samcheok",
    "pyeongchang",
    "yeongwol",
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
        raise ValueError("선택 가능한 문장이 없습니다.")
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
        raise KeyError(f"지원하지 않는 강원 지역: {region_slug}")
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


def generate_meta_for_gangwon() -> Tuple[str, str]:
    pairs = build_region_pairs(GANGWON_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"강원 마사지천국은 {highlight} 등 강원 주요 생활권의 마사지·스파 정보를 한눈에 비교하고 예약할 수 있도록 돕는 플랫폼입니다.",
        f"{highlight} 라인을 포함한 강원 전역 마사지샵 정보를 마사지천국에서 손쉽게 확인하고 테마별 힐링 코스를 선택하세요.",
        f"춘천·원주·강릉에서 평창·영월까지 {highlight} 중심으로 강원 마사지 정보를 큐레이션합니다.",
    ]
    description = deterministic_pick("gangwon-overview", variants)

    keyword_candidates = [
        "강원 마사지천국",
        "강원 마사지 예약",
        "강원 마사지 추천",
        "강원 스웨디시",
        "강원 타이마사지",
    ]
    keyword_candidates.extend(f"{display} {district} 마사지" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_gangwon_theme(theme_slug: str) -> Tuple[str, str]:
    theme_name = THEME_DISPLAY[theme_slug]
    pairs = build_region_pairs(GANGWON_OVERVIEW_REGIONS, per_region=1)
    highlight = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"강원 {theme_name} 전문 업체는 {highlight} 등 핵심 생활권에 모여 있으며, 마사지천국에서 비교 예약이 가능합니다.",
        f"{highlight} 중심 강원 {theme_name} 코스를 마사지천국에서 모아 보고 나에게 맞는 힐링 프로그램을 선택하세요.",
        f"강원 {theme_name} 정보는 마사지천국에 모두 모였습니다. {highlight} 라인의 인기샵과 가격대를 확인해 보세요.",
    ]
    description = deterministic_pick(f"gangwon-theme-{theme_slug}", variants)

    keyword_candidates = [
        f"강원 {theme_name}",
        f"강원 {theme_name} 마사지",
        f"강원 {theme_name} 추천",
        f"강원 {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{display} {district} {theme_name}" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region(region_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    districts = get_region_districts(region_slug, limit=5)
    districts_text = ", ".join(districts)

    variants = [
        f"강원 {info['alias']} 마사지 정보는 {districts_text} 일대에 집중되어 있으며, 마사지천국에서 인기 힐링 코스를 비교할 수 있습니다. {info['description']}",
        f"{info['alias']} {districts_text} 라인의 마사지·스파 업체를 마사지천국이 한눈에 정리했습니다. {info['description']}",
        f"{districts_text} 중심으로 모여 있는 강원 {info['alias']} 마사지샵을 마사지천국에서 찾아보고 예약하세요. {info['description']}",
    ]
    description = deterministic_pick(region_slug, variants)

    keyword_candidates = [
        f"강원 {info['alias']} 마사지",
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
        f"강원 {info['alias']} {theme_name} 라인은 {districts_text}을 중심으로 형성되어 있으며, 마사지천국에서 테마별 전문샵을 비교하고 예약할 수 있습니다.",
        f"{districts_text} 중심 강원 {info['alias']} {theme_name} 프로그램을 마사지천국이 정리했습니다.",
        f"{info['alias']} {districts_text} 일대 {theme_name} 가격과 후기 정보를 마사지천국에서 빠르게 확인해 보세요.",
    ]
    description = deterministic_pick(f"{region_slug}-{theme_slug}", variants)

    keyword_candidates = [
        f"강원 {info['alias']} {theme_name}",
        f"{info['alias']} {theme_name} 마사지",
        f"{info['alias']} {theme_name} 추천",
        f"{info['alias']} {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{info['alias']} {district} {theme_name}" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def determine_context(file_path: Path) -> Tuple[Optional[str], Optional[str]]:
    name = file_path.name
    if name == "gangwon.html":
        return None, None

    if not name.startswith("gangwon-") or not name.endswith(".html"):
        return None, None

    slug_part = name[len("gangwon-") : -len(".html")]
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
        description, keywords = generate_meta_for_gangwon()
    elif region_slug is None and theme_slug:
        description, keywords = generate_meta_for_gangwon_theme(theme_slug)
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

    target_files = list(public_dir.glob("gangwon*.html"))
    if not target_files:
        print("처리할 강원 HTML 파일이 없습니다.")
        return

    updated_count = 0
    for file_path in sorted(target_files):
        if update_file(file_path):
            updated_count += 1

    print(f"\n[완료] 총 {updated_count}개 강원 지역 파일의 메타 태그를 업데이트했습니다.")


if __name__ == "__main__":
    main()

