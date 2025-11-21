#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
경기 HTML 파일들의 메타(description/keywords) 태그를
구·동 단위 정보에 맞춰 자동으로 업데이트하는 스크립트
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path
from typing import Iterable, List, Optional, Tuple

from update_seoul_detail_info import THEME_INFO

# 테마별 표시 이름
THEME_DISPLAY = {slug: info["name"] for slug, info in THEME_INFO.items()}
THEME_SLUGS = tuple(THEME_DISPLAY.keys())

# 경기 지역 데이터
REGION_DISTRICTS = {
    "anseong": {
        "display": "안성시",
        "alias": "안성",
        "districts": ["안성1동", "공도읍", "보개면", "금광면", "죽산면", "서운면"],
        "description": "안성맞춤으로 유명한 전통과 물류 산업이 공존하는 내륙 거점 도시입니다.",
    },
    "anyang": {
        "display": "안양시",
        "alias": "안양",
        "districts": ["동안구", "만안구", "평촌동", "범계동", "안양1번가", "호계동"],
        "description": "평촌신도시와 안양천 생활권이 조성된 남부 수도권의 업무·주거 중심지입니다.",
    },
    "bucheon": {
        "display": "부천시",
        "alias": "부천",
        "districts": ["중동", "상동", "역곡동", "송내동", "소사동", "상동호수공원"],
        "description": "서울과 인천 사이에서 주거·문화 인프라가 밀집한 서부 수도권의 핵심 도시입니다.",
    },
    "dongducheon": {
        "display": "동두천시",
        "alias": "동두천",
        "districts": ["지행동", "송내동", "보산동", "동두천동", "상패동", "탑동동"],
        "description": "보산동 관광특구와 캠프 케이시가 있는 경기 북부의 교통 요지입니다.",
    },
    "gapyeong": {
        "display": "가평군",
        "alias": "가평",
        "districts": ["가평읍", "청평면", "설악면", "상면", "조종면", "북면"],
        "description": "북한강과 수목원이 어우러진 사계절 휴양지로 유명한 청정 관광도시입니다.",
    },
    "gimpo": {
        "display": "김포시",
        "alias": "김포",
        "districts": ["구래동", "운양동", "사우동", "장기동", "마산동", "양촌읍"],
        "description": "김포골드라인과 한강신도시 개발로 주목받는 북부 수도권의 베드타운입니다.",
    },
    "goyang": {
        "display": "고양시",
        "alias": "고양",
        "districts": ["일산동구", "일산서구", "덕양구", "백석동", "주엽동", "삼송동"],
        "description": "킨텍스와 일산신도시가 조성된 대규모 생활권으로 전시·문화 인프라가 풍부합니다.",
    },
    "gunpo": {
        "display": "군포시",
        "alias": "군포",
        "districts": ["산본동", "금정동", "당동", "부곡동", "대야미동", "오금동"],
        "description": "산본신도시와 GTX-C 예정지로 주목받는 남서부 수도권의 생활 거점입니다.",
    },
    "gwacheon": {
        "display": "과천시",
        "alias": "과천",
        "districts": ["중앙동", "별양동", "문원동", "갈현동", "주암동", "과천동"],
        "description": "정부과천청사와 과천과학관이 위치한 행정·문화 중심 도시입니다.",
    },
    "gwangju": {
        "display": "광주시",
        "alias": "광주",
        "districts": ["오포읍", "곤지암읍", "초월읍", "쌍령동", "송정동", "태전동"],
        "description": "경기 동남권에서 자연휴양과 주거가 공존하는 교외 힐링 도시입니다.",
    },
    "gwangmyeong": {
        "display": "광명시",
        "alias": "광명",
        "districts": ["철산동", "하안동", "소하동", "일직동", "광명동", "노온사동"],
        "description": "KTX광명역과 광명사거리 상권이 발달한 서남권 대표 주거 도시입니다.",
    },
    "hanam": {
        "display": "하남시",
        "alias": "하남",
        "districts": ["미사동", "덕풍동", "풍산동", "위례동", "감이동", "초이동"],
        "description": "미사강변도시와 위례신도시로 성장하는 한강 생활권 신도시입니다.",
    },
    "hwaseong": {
        "display": "화성시",
        "alias": "화성",
        "districts": ["동탄동", "봉담읍", "향남읍", "남양읍", "정남면", "송산그린시티"],
        "description": "동탄신도시와 해양 관광벨트를 동시에 품은 미래형 복합 도시입니다.",
    },
    "icheon": {
        "display": "이천시",
        "alias": "이천",
        "districts": ["중리동", "창전동", "부발읍", "증포동", "마장면", "모가면"],
        "description": "쌀과 도자기로 유명하며 물류·첨단산업이 발달한 경기 동남부 도시입니다.",
    },
    "osan": {
        "display": "오산시",
        "alias": "오산",
        "districts": ["오산동", "원동", "세마동", "갈곶동", "대원동", "은계동"],
        "description": "동탄·평택과 맞닿아 성장하는 중남부 수도권의 교통·생활 거점입니다.",
    },
    "paju": {
        "display": "파주시",
        "alias": "파주",
        "districts": ["운정신도시", "금촌동", "교하동", "문산읍", "탄현면", "헤이리마을"],
        "description": "운정신도시와 임진각 관광지가 공존하는 접경 문화도시입니다.",
    },
    "pyeongtaek": {
        "display": "평택시",
        "alias": "평택",
        "districts": ["비전동", "고덕국제신도시", "안중읍", "포승읍", "청북읍", "송탄동"],
        "description": "평택항과 고덕신도시 개발로 성장 속도가 빠른 산업·주거 복합 도시입니다.",
    },
    "seongnam": {
        "display": "성남시",
        "alias": "성남",
        "districts": ["분당구", "수정구", "중원구", "정자동", "야탑동", "모란동"],
        "description": "분당·위례 신도시를 아우르는 IT·비즈니스 중심 도시입니다.",
    },
    "siheung": {
        "display": "시흥시",
        "alias": "시흥",
        "districts": ["정왕동", "배곧동", "월곶동", "대야동", "은행동", "군자동"],
        "description": "배곧신도시와 시흥 MTV가 조성된 서해안의 해양·첨단 도시입니다.",
    },
    "suwon": {
        "display": "수원시",
        "alias": "수원",
        "districts": ["장안구", "팔달구", "영통구", "권선구", "인계동", "매탄동", "영통동"],
        "description": "경기도청과 수원화성이 위치한 경기 남부의 대표 생활·상업 도시입니다.",
    },
    "uijeongbu": {
        "display": "의정부시",
        "alias": "의정부",
        "districts": ["의정부동", "호원동", "가능동", "신곡동", "민락동", "장암동"],
        "description": "경기북부청사와 민락2지구가 있는 북부 수도권의 행정·상업 중심지입니다.",
    },
    "uiwang": {
        "display": "의왕시",
        "alias": "의왕",
        "districts": ["포일동", "내손동", "왕곡동", "오전동", "청계동", "고천동"],
        "description": "백운밸리와 인덕원 생활권을 공유하는 친환경 주거 도시입니다.",
    },
    "yangpyeong": {
        "display": "양평군",
        "alias": "양평",
        "districts": ["양평읍", "용문면", "옥천면", "서종면", "강상면", "단월면"],
        "description": "두물머리와 남한강이 어우러진 수도권 대표 자연 힐링 지역입니다.",
    },
    "yeoju": {
        "display": "여주시",
        "alias": "여주",
        "districts": ["여흥동", "중앙동", "가남읍", "세종대왕면", "흥천면", "강천면"],
        "description": "세종대왕릉과 남한강 수변이 있는 도자기·농산물 특화 도시입니다.",
    },
    "yeoncheon": {
        "display": "연천군",
        "alias": "연천",
        "districts": ["연천읍", "전곡읍", "청산면", "미산면", "장남면", "군남면"],
        "description": "임진강과 DMZ 관광지가 있는 경기 북부의 프리미엄 휴양지입니다.",
    },
    "yongin": {
        "display": "용인시",
        "alias": "용인",
        "districts": ["수지구", "기흥구", "처인구", "동백동", "죽전동", "포곡읍"],
        "description": "에버랜드와 플랫폼시티로 대표되는 남부 수도권의 주거·관광 도시입니다.",
    },
}

GYEONGGI_OVERVIEW_REGIONS = [
    "suwon",
    "seongnam",
    "yongin",
    "goyang",
    "bucheon",
    "hwaseong",
    "pyeongtaek",
    "gimpo",
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


def deterministic_choice(key: str, options: Iterable[str]) -> str:
    options = tuple(options)
    if not options:
        raise ValueError("선택할 옵션이 없습니다.")
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
        raise KeyError(f"지원하지 않는 경기 지역: {region_slug}")
    return REGION_DISTRICTS[region_slug]


def get_region_districts(region_slug: str, limit: int = 5) -> List[str]:
    data = get_region_info(region_slug)
    districts = data.get("districts", [])
    return districts[:limit]


def build_region_dong_pairs(region_slugs: Iterable[str], per_region: int = 1) -> List[Tuple[str, str]]:
    pairs: List[Tuple[str, str]] = []
    for slug in region_slugs:
        info = get_region_info(slug)
        districts = get_region_districts(slug, limit=per_region)
        for district in districts:
            pairs.append((info["display"], district))
    return pairs


def generate_meta_for_gyeonggi() -> Tuple[str, str]:
    pairs = build_region_dong_pairs(GYEONGGI_OVERVIEW_REGIONS, per_region=1)
    highlight_text = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"경기 마사지천국은 {highlight_text} 등 경기도 주요 구·동의 마사지·스파 정보를 한눈에 비교하고 예약할 수 있도록 돕는 플랫폼입니다.",
        f"경기도 전역의 마사지샵을 연결하는 마사지천국에서는 {highlight_text}를 비롯한 핵심 생활권 업체 정보를 쉽고 빠르게 찾을 수 있습니다.",
        f"{highlight_text} 등 인기 생활권을 포함한 경기도 마사지 정보를 모아둔 마사지천국에서 지역별 맞춤 힐링 코스를 살펴보세요.",
    ]
    description = deterministic_choice("gyeonggi-overview", variants)

    keyword_candidates = [
        "경기 마사지천국",
        "경기 마사지 예약",
        "경기 마사지 추천",
        "경기 스웨디시",
        "경기 타이마사지",
    ]
    keyword_candidates.extend(f"{display} {district} 마사지" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_gyeonggi_theme(theme_slug: str) -> Tuple[str, str]:
    theme_name = THEME_DISPLAY[theme_slug]
    pairs = build_region_dong_pairs(GYEONGGI_OVERVIEW_REGIONS, per_region=1)
    highlight_text = ", ".join(f"{display} {district}" for display, district in pairs[:6])

    variants = [
        f"경기도 {theme_name} 전문 업체는 {highlight_text} 등 주요 생활권에 밀집해 있으며, 마사지천국에서 비교 예약이 가능합니다.",
        f"{highlight_text}를 비롯한 경기 전역 {theme_name} 코스를 마사지천국에서 한 번에 확인하고 나에게 맞는 힐링 프로그램을 선택하세요.",
        f"경기 {theme_name} 정보는 마사지천국에 모두 모였습니다. {highlight_text} 중심의 인기 라인을 살펴보고 예약해 보세요.",
    ]
    description = deterministic_choice(f"gyeonggi-theme-{theme_slug}", variants)

    keyword_candidates = [
        f"경기 {theme_name}",
        f"경기 {theme_name} 마사지",
        f"경기 {theme_name} 추천",
        f"경기 {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{display} {district} {theme_name}" for display, district in pairs)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region(region_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    districts = get_region_districts(region_slug, limit=5)
    districts_text = ", ".join(districts)

    variants = [
        f"경기 {info['display']} 마사지 정보는 {districts_text} 일대에 집중되어 있으며, 마사지천국에서 지역별 인기샵을 비교할 수 있습니다. {info['description']}",
        f"{info['display']}의 {districts_text} 라인에 모여 있는 마사지·스파 업체를 마사지천국에서 확인하고 맞춤 힐링 코스를 선택하세요. {info['description']}",
        f"{districts_text} 등 {info['display']} 핵심 생활권의 마사지 정보를 마사지천국이 큐레이션합니다. {info['description']}",
    ]
    description = deterministic_choice(region_slug, variants)

    keyword_candidates = [
        f"경기 {info['display']} 마사지",
        f"{info['display']} 마사지",
        f"{info['display']} 스웨디시",
        f"{info['display']} 타이마사지",
    ]
    keyword_candidates.extend(f"{info['display']} {district} 마사지" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def generate_meta_for_region_theme(region_slug: str, theme_slug: str) -> Tuple[str, str]:
    info = get_region_info(region_slug)
    theme_name = THEME_DISPLAY[theme_slug]
    districts = get_region_districts(region_slug, limit=5)
    districts_text = ", ".join(districts)

    variants = [
        f"경기 {info['display']} {theme_name}는 {districts_text} 일대에 집중되어 있으며, 마사지천국에서 테마별 전문샵을 비교하고 예약할 수 있습니다.",
        f"{info['display']} {theme_name} 전문 라인은 {districts_text}을 중심으로 형성되어 있습니다. 마사지천국에서 후기와 프로그램을 확인해 보세요.",
        f"{districts_text} 등 {info['display']} 주요 생활권의 {theme_name} 코스를 마사지천국이 한눈에 정리했습니다.",
    ]
    description = deterministic_choice(f"{region_slug}-{theme_slug}", variants)

    keyword_candidates = [
        f"경기 {info['display']} {theme_name}",
        f"{info['display']} {theme_name} 마사지",
        f"{info['display']} {theme_name} 추천",
        f"{info['display']} {theme_name} 예약",
    ]
    keyword_candidates.extend(f"{info['display']} {district} {theme_name}" for district in districts)
    keywords = unique_join(keyword_candidates)

    return description, keywords


def determine_context(file_path: Path) -> Tuple[Optional[str], Optional[str]]:
    name = file_path.name
    if name == "gyeonggi.html":
        return None, None

    if not name.startswith("gyeonggi-") or not name.endswith(".html"):
        return None, None

    slug_part = name[len("gyeonggi-") : -len(".html")]
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
        else:
            region_slug = None

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

    if theme_slug and theme_slug not in THEME_DISPLAY:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 테마")
        return False

    if region_slug and region_slug not in REGION_DISTRICTS:
        print(f"[SKIP] {file_path.name}: 지원하지 않는 지역")
        return False

    if region_slug is None and theme_slug is None:
        description, keywords = generate_meta_for_gyeonggi()
    elif region_slug is None and theme_slug:
        description, keywords = generate_meta_for_gyeonggi_theme(theme_slug)
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

    target_files = list(public_dir.glob("gyeonggi*.html"))
    if not target_files:
        print("처리할 경기 HTML 파일이 없습니다.")
        return

    updated_count = 0
    for file_path in sorted(target_files):
        if update_file(file_path):
            updated_count += 1

    print(f"\n[완료] 총 {updated_count}개 경기 지역 파일의 메타 태그를 업데이트했습니다.")


if __name__ == "__main__":
    main()
