#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HTML 파일들의 <title>과 og:title을 동일하게 만드는 스크립트.
루트 디렉토리의 모든 HTML 파일을 처리합니다.
"""

import re
from pathlib import Path


# 경로 설정
script_path = Path(__file__).resolve()
BASE_DIR = script_path.parent


# --- 지역 / 상세지역 / 타입 한글 매핑 (타이틀/OG용) ---
REGION_NAME_MAP = {
    # 광역시/도
    "seoul": "서울",
    "busan": "부산",
    "incheon": "인천",
    "daegu": "대구",
    "gwangju": "광주",
    "daejeon": "대전",
    "ulsan": "울산",
    "sejong": "세종",
    "gyeonggi": "경기",
    "gangwon": "강원",
    "chungbuk": "충북",
    "chungnam": "충남",
    "jeonbuk": "전북",
    "jeonnam": "전남",
    "gyeongbuk": "경북",
    "gyeongnam": "경남",
    "jeju": "제주",
}

# 서울 구 한글 매핑 (상세지역 우선 노출용)
SEOUL_DISTRICT_MAP = {
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
    "jung": "중구",
    "jungnang": "중랑",
}

# 부산 구/군
BUSAN_DISTRICT_MAP = {
    "junggu": "중구",
    "seogu": "서구",
    "donggu": "동구",
    "yeongdo": "영도구",
    "busanjin": "부산진구",
    "dongnae": "동래구",
    "namgu": "남구",
    "bukgu": "북구",
    "haeundae": "해운대구",
    "saha": "사하구",
    "geumjeong": "금정구",
    "gangseo": "강서구",
    "yeonje": "연제구",
    "suyeong": "수영구",
    "sasang": "사상구",
    "gijang": "기장군",
}

# 대구 구/군
DAEGU_DISTRICT_MAP = {
    "junggu": "중구",
    "donggu": "동구",
    "seogu": "서구",
    "namgu": "남구",
    "bukgu": "북구",
    "suseong": "수성구",
    "dalseo": "달서구",
    "dalseong": "달성군",
}

# 인천 구/군
INCHEON_DISTRICT_MAP = {
    "junggu": "중구",
    "donggu": "동구",
    "michuhol": "미추홀구",
    "yeonsu": "연수구",
    "namdong": "남동구",
    "bupyeong": "부평구",
    "gyeyang": "계양구",
    "seogu": "서구",
    "ganghwa": "강화군",
    "ongjin": "옹진군",
}

# 광주 구
GWANGJU_DISTRICT_MAP = {
    "donggu": "동구",
    "seogu": "서구",
    "namgu": "남구",
    "bukgu": "북구",
    "gwangsan": "광산구",
}

# 대전 구
DAEJEON_DISTRICT_MAP = {
    "donggu": "동구",
    "junggu": "중구",
    "seogu": "서구",
    "yuseong": "유성구",
    "daedeok": "대덕구",
}

# 울산 구/군
ULSAN_DISTRICT_MAP = {
    "junggu": "중구",
    "namgu": "남구",
    "donggu": "동구",
    "bukgu": "북구",
    "ulju": "울주군",
}

# 제주 시
JEJU_DISTRICT_MAP = {
    "jeju-si": "제주시",
    "jeju-seogwipo": "서귀포시",
    "seogwipo-si": "서귀포시",
}

# 지역별 세부지역(구/시/군) 매핑 모음
DISTRICT_NAME_MAP_BY_REGION = {
    "seoul": SEOUL_DISTRICT_MAP,
    "busan": BUSAN_DISTRICT_MAP,
    "daegu": DAEGU_DISTRICT_MAP,
    "incheon": INCHEON_DISTRICT_MAP,
    "gwangju": GWANGJU_DISTRICT_MAP,
    "daejeon": DAEJEON_DISTRICT_MAP,
    "ulsan": ULSAN_DISTRICT_MAP,
    "jeju": JEJU_DISTRICT_MAP,
}

TYPE_NAME_MAP = {
    "massage": "마사지",
    "outcall": "출장마사지",
    "swedish": "스웨디시",
    "thai": "타이마사지",
    "aroma": "아로마마사지",
    "waxing": "왁싱",
    "chinese": "중국마사지",
    "foot": "발마사지",
    "spa": "스파",
}


def build_seo_title_from_filename(filename: str) -> str:
    """
    파일명(예: seoul-gangnam-massage.html)을 기반으로
    SEO 친화적인 타이틀을 생성합니다.

    규칙(파일명 예시 기준):
    - seoul-massage.html                              -> 서울 마사지 BEST 샵 | 지금 가장 핫 업체
    - ulsan-outcall.html                              -> 울산 출장마사지 BEST 샵 | 지금 가장 핫 업체
    - busan-bukgu-massage.html                        -> 부산 북구 마사지 BEST 샵 | 지금 가장 핫 업체
    - seoul-gangnam-swedish.html                      -> 서울 강남 스웨디시 BEST 샵 | 지금 가장 핫 업체
    - gyeongbuk-pohang-yeonil-eup-massage.html        -> 경북 pohang yeonil eup 마사지 BEST 샵 | 지금 가장 핫 업체
      (가능한 한 지역 + 세부지역(구/군/시) + 동/역 정보를 모두 포함)
    """
    name = filename.replace(".html", "")
    parts = name.split("-")

    if not parts:
        return "BEST 샵 | 지금 가장 핫 업체"

    # 타입(마지막) 판별
    type_slug = None
    if parts[-1] in TYPE_NAME_MAP:
        type_slug = parts[-1]
        location_parts = parts[:-1]
    else:
        location_parts = parts

    region_slug = location_parts[0] if location_parts else ""
    district_slug = location_parts[1] if len(location_parts) >= 2 else ""
    dong_slug = "-".join(location_parts[2:]) if len(location_parts) >= 3 else ""

    region_name = REGION_NAME_MAP.get(region_slug, region_slug or "").strip()

    # 세부지역(구/군/시) 이름 찾기
    district_name = ""
    if district_slug:
        region_district_map = DISTRICT_NAME_MAP_BY_REGION.get(region_slug, {})
        district_name = region_district_map.get(district_slug, district_slug)

    # 동/역 이름은 일단 슬러그를 공백 기준으로만 보기 좋게
    dong_name = ""
    if dong_slug:
        dong_name = dong_slug.replace("-", " ")

    # 지역 + 세부지역 + 동/역을 모두 포함하는 영역 이름 구성
    area_parts = []
    if region_name:
        area_parts.append(region_name)
    if district_name:
        area_parts.append(district_name)
    if dong_name:
        area_parts.append(dong_name)

    area_name = " ".join(area_parts).strip() or region_name or "지역"

    type_name = TYPE_NAME_MAP.get(type_slug or "", "마사지")

    return f"{area_name} {type_name} BEST 샵 | 지금 가장 핫 업체"


def sync_title_and_og_title(content: str, filename: str) -> str:
    """
    HTML 내용에서 <title>과 og:title을 동일한 값으로 통일합니다.
    """
    # 파일명 기반으로 SEO 타이틀 생성
    seo_title = build_seo_title_from_filename(filename)

    # <title>...</title> - title 태그를 seo_title로 통일
    content = re.sub(
        r"<title>.*?</title>",
        f"<title>{seo_title}</title>",
        content,
        flags=re.IGNORECASE | re.DOTALL,
    )

    # og:title – 기존 태그 전체를 새 태그로 교체 (모든 형식 매칭)
    # content 속성의 값이 무엇이든 상관없이 전체 태그를 교체하여 title과 동일하게 만듦
    content = re.sub(
        r'<meta\s+property=["\']og:title["\'][^>]*>',
        f'<meta property="og:title" content="{seo_title}" />',
        content,
        flags=re.IGNORECASE,
    )

    # og:title이 없으면 추가 (title과 동일한 값으로)
    if not re.search(r'<meta\s+property=["\']og:title["\']', content, flags=re.IGNORECASE):
        # </head> 태그 앞에 추가
        if re.search(r'</head>', content, flags=re.IGNORECASE):
            content = re.sub(
                r'(</head>)',
                f'    <meta property="og:title" content="{seo_title}" />\n\\1',
                content,
                flags=re.IGNORECASE,
            )

    return content


def sync_all_html_files():
    """
    루트 디렉토리의 모든 HTML 파일에서 title과 og:title을 동일하게 만듭니다.
    """
    html_files = list(BASE_DIR.glob("*.html"))

    # index/admin 등은 제외
    exclude = {"index.html", "admin.html"}
    html_files = [f for f in html_files if f.name not in exclude]

    print(f"처리할 HTML 파일: {len(html_files)}개\n")

    updated = 0
    errors = 0

    for html_file in html_files:
        try:
            filename = html_file.name

            # 원본 내용 읽기
            with open(html_file, "r", encoding="utf-8") as f:
                content = f.read()

            # title과 og:title 동기화
            new_content = sync_title_and_og_title(content, filename)

            # 변경사항이 있으면 저장
            if new_content != content:
                with open(html_file, "w", encoding="utf-8") as f:
                    f.write(new_content)
                updated += 1
                if updated % 100 == 0:
                    print(f"  {updated}개 파일 업데이트 완료...")

        except Exception as e:
            errors += 1
            print(f"  오류: {html_file.name} - {e}")

    print("\n📊 처리 결과:")
    print(f"  ✅ 업데이트: {updated}개")
    print(f"  ❌ 오류: {errors}개")
    print("\n✅ 작업 완료! 모든 HTML 파일의 title과 og:title이 동일하게 설정되었습니다.")


if __name__ == "__main__":
    sync_all_html_files()
