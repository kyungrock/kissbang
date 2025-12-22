#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
서울 지역만 massage-card 업데이트하는 스크립트
기존 insert_shop_cards_to_html.py의 로직을 재사용하되 서울만 처리
동/역 매칭 로직 개선: 동/역이 포함된 카드를 각 그룹의 최상단에 배치
"""
import sys
import re
import html
import random
from pathlib import Path

# Windows에서 UTF-8 출력 설정 (더 안전한 방법)
if sys.platform == 'win32':
    try:
        import os
        # 환경 변수로 UTF-8 설정
        os.environ['PYTHONIOENCODING'] = 'utf-8'
    except:
        pass

SCRIPT_DIR = Path(__file__).parent.absolute()

# 기존 스크립트의 함수들을 import
sys.path.insert(0, str(SCRIPT_DIR))

# 기존 스크립트의 모든 필요한 함수와 변수 import
from insert_shop_cards_to_html import (
    read_shop_card_data,
    extract_region_and_filter,
    get_dong_station_name,
    matches_filter,
    extract_dong_from_address,
    create_shop_card_html,
    create_shop_display_name,
    extract_location_info,
    insert_static_header,
    disable_dynamic_card_generation,
    update_footer_link,
    REGION_MAP,
    DISTRICT_MAP,
)

# 개선된 정렬 함수 (동/역 우선 배치)
def sort_shops(shops, dong_station_name=None, dong_station_key=None):
    """showHealingShop: true인 항목을 상단에, false인 항목을 하단에 배치
    동/역 이름이 있으면 해당 동/역이 포함된 카드를 전체 목록의 최상단에 배치 (showHealingShop 구분 무시)
    동/역 이름이 없어도 동/역 키가 있으면 주소에서 직접 추출하여 매칭"""
    
    healing_shops = [shop for shop in shops if shop.get('showHealingShop') is True]
    non_healing_shops = [shop for shop in shops if shop.get('showHealingShop') is not True]
    
    # 동/역 이름이 없고 키가 있는 경우, dong_station_key를 우선적으로 사용하여 매칭
    if not dong_station_name and dong_station_key:
        # dong_station_key를 기반으로 주소에서 직접 매칭
        # 키 예: "nonhyeon-dong" -> 주소에서 "논현동" 찾기
        # 모든 업체의 주소에서 동 이름 추출 (출장마사지 제외)
        dong_counts = {}
        key_matched_counts = {}  # 키 이름이 주소에 포함된 경우
        
        for shop in shops:
            # 출장마사지는 주소가 "전지역" 같은 형태이므로 제외
            shop_type = shop.get('type', '')
            services = shop.get('services', [])
            if isinstance(services, str):
                services = [services]
            is_outcall = (shop_type == '출장마사지' or '출장마사지' in services)
            if is_outcall:
                continue
            
            shop_address = shop.get('address', '')
            shop_detail_address = shop.get('detailAddress', '')
            
            # "전지역", "불가" 같은 단어가 포함된 주소는 제외
            address_text = f"{shop_address} {shop_detail_address}".strip()
            if '전지역' in address_text or '불가' in address_text or not shop_address or len(shop_address) < 5:
                continue
            
            shop_dong = extract_dong_from_address(shop_address, shop_detail_address)
            if shop_dong and shop_dong not in ['불가']:  # 잘못된 동 이름 제외
                dong_counts[shop_dong] = dong_counts.get(shop_dong, 0) + 1
                # 키 이름이 주소에 포함되어 있는지 확인 (예: "nonhyeon"이 주소에 있으면)
                key_base = dong_station_key.replace('-dong', '').replace('-station', '').replace('-', '')
                if key_base.lower() in address_text.lower():
                    key_matched_counts[shop_dong] = key_matched_counts.get(shop_dong, 0) + 1
        
        # 키와 일치하는 동 이름이 있으면 우선 선택, 없으면 가장 많이 나오는 동 이름 선택
        if key_matched_counts:
            dong_station_name = max(key_matched_counts, key=key_matched_counts.get)
            print(f"  [정렬] 동/역 이름 키 기반 자동 감지: {dong_station_name} (키 매칭: {key_matched_counts[dong_station_name]}개)")
        elif dong_counts:
            dong_station_name = max(dong_counts, key=dong_counts.get)
            print(f"  [정렬] 동/역 이름 자동 감지: {dong_station_name} (출현 횟수: {dong_counts[dong_station_name]})")
    
    if dong_station_name:
        print(f"  [정렬] 동/역 이름: {dong_station_name}")
        
        # 전체 목록에서 동/역 매칭 카드와 나머지 카드 분리 (showHealingShop 구분 무시)
        all_with_dong = []
        all_without_dong = []
        
        # 모든 카드에서 동/역 매칭 확인 - dong 필드를 최우선으로 사용
        for shop in shops:
            shop_address = shop.get('address', '')
            shop_detail_address = shop.get('detailAddress', '')
            address_text = f"{shop_address} {shop_detail_address}".strip()
            
            # 매칭 확인: shop-card-data.js에 dong 필드를 최우선으로 사용
            is_match = False
            shop_dong_field = None
            if shop.get('dong'):
                shop_dong_field = str(shop.get('dong')).strip()  # shop-card-data.js의 dong 필드 (최우선)
            shop_dong = ''  # 로깅용
            
            if dong_station_name:
                # 최우선: dong 필드가 있고 정확히 일치하는 경우만 매칭 (논현동 = '논현동')
                if shop_dong_field and shop_dong_field == dong_station_name:
                    is_match = True
                    shop_dong = shop_dong_field
                    print(f"    ✅✅✅ [dong 필드 최우선 매칭] {shop.get('name', 'Unknown')[:30]}... - dong: '{shop_dong_field}' == '{dong_station_name}'")
                # dong 필드가 없거나 일치하지 않는 경우에만 주소에서 추출하여 매칭
                elif not shop_dong_field:
                    # dong 필드가 없는 경우에만 주소에서 추출하여 매칭
                    shop_dong_from_address = extract_dong_from_address(shop_address, shop_detail_address)
                    # 추출한 동 이름이 정확히 일치
                    if shop_dong_from_address and shop_dong_from_address == dong_station_name:
                        is_match = True
                        shop_dong = shop_dong_from_address
                    # 주소 전체 텍스트에 동/역 이름이 포함
                    elif dong_station_name in address_text:
                        is_match = True
                        shop_dong = shop_dong_from_address if shop_dong_from_address else dong_station_name
                    # 추출한 동 이름에 동/역 이름이 포함 (예: "논현동" in "논현동1가")
                    elif shop_dong_from_address and dong_station_name in shop_dong_from_address:
                        is_match = True
                        shop_dong = shop_dong_from_address
                # dong 필드가 있지만 일치하지 않는 경우 -> 매칭 안됨 (논현동이 아닌 다른 동)
                else:
                    is_match = False
            
            if is_match:
                all_with_dong.append(shop)
                shop_type_group = "힐링샵" if shop.get('showHealingShop') is True else "일반"
                dong_source = "dong 필드" if shop_dong_field and shop_dong_field == dong_station_name else "주소 추출"
                if not shop_dong:
                    shop_dong = shop_dong_field if shop_dong_field else (extract_dong_from_address(shop_address, shop_detail_address) or dong_station_name)
                print(f"    ✅ [{shop_type_group} 매칭] {shop.get('name', 'Unknown')[:30]}... - 동: {shop_dong} ({dong_source})")
            else:
                all_without_dong.append(shop)
        
        print(f"  [전체] 동/역 매칭: {len(all_with_dong)}개, 나머지: {len(all_without_dong)}개")
        
        # 동/역 매칭 카드 내에서 showHealingShop 기준으로 재분류
        healing_with_dong = [shop for shop in all_with_dong if shop.get('showHealingShop') is True]
        non_healing_with_dong = [shop for shop in all_with_dong if shop.get('showHealingShop') is not True]
        healing_without_dong = [shop for shop in all_without_dong if shop.get('showHealingShop') is True]
        non_healing_without_dong = [shop for shop in all_without_dong if shop.get('showHealingShop') is not True]
        
        print(f"  [힐링샵 그룹] 동/역 매칭: {len(healing_with_dong)}개, 나머지: {len(healing_without_dong)}개")
        print(f"  [일반 그룹] 동/역 매칭: {len(non_healing_with_dong)}개, 나머지: {len(non_healing_without_dong)}개")
        
        # 각 그룹 내에서 랜덤 정렬
        random.shuffle(healing_with_dong)
        random.shuffle(healing_without_dong)
        random.shuffle(non_healing_with_dong)
        random.shuffle(non_healing_without_dong)
        
        # 정렬 순서: 동/역 매칭 카드를 최상단에 배치 (힐링샵 먼저, 그 다음 일반), 그 다음 나머지 (힐링샵 먼저, 그 다음 일반)
        # 예: 논현동 페이지의 경우:
        # 1. 논현동 + 힐링샵 (랜덤 순서) - 예: 논현동 5월스파
        # 2. 논현동 + 일반 (랜덤 순서) - 예: 논현동 애플텐, 논현동 우유스파
        # 3. 논현동 아닌 + 힐링샵 (랜덤 순서) - 예: 역삼동 엔젤, 서초동 강남 클라스
        # 4. 논현동 아닌 + 일반 (랜덤 순서) - 예: 기타 일반 카드들
        sorted_result = healing_with_dong + non_healing_with_dong + healing_without_dong + non_healing_without_dong
        
        # 검증: 논현동 카드가 실제로 최상단에 있는지 확인
        if dong_station_name and len(all_with_dong) > 0:
            # 처음 len(all_with_dong)개의 카드가 모두 논현동 카드인지 확인
            top_cards = sorted_result[:len(all_with_dong)]
            all_dong_in_top = all(
                dong_station_name in f"{shop.get('address', '')} {shop.get('detailAddress', '')}" or
                (shop.get('dong') and shop.get('dong') == dong_station_name) or
                (extract_dong_from_address(shop.get('address', ''), shop.get('detailAddress', '')) == dong_station_name)
                for shop in top_cards
            )
            if all_dong_in_top:
                print(f"  ✅ [검증 성공] 논현동 카드 {len(all_with_dong)}개가 최상단에 배치됨")
            else:
                print(f"  ⚠️ [검증 실패] 논현동 카드가 최상단에 없을 수 있음")
        else:
            print(f"  [최종 정렬] 논현동 카드 {len(all_with_dong)}개가 최상단에 배치됨")
        
        return sorted_result
    else:
        # 동/역 이름이 없으면 기존처럼 랜덤 정렬
        random.shuffle(healing_shops)
        random.shuffle(non_healing_shops)
        
        # true 그룹을 상단에, false 그룹을 하단에 배치
        return healing_shops + non_healing_shops

# HTML 파일에 업체 카드 삽입 (서울만, 개선된 정렬 함수 사용)
def insert_shop_cards_to_html_seoul(html_file, shops):
    """HTML 파일의 본문에 업체 카드 삽입 (서울 지역만, 개선된 정렬 함수 사용)"""
    filename = html_file.name
    content = html_file.read_text(encoding='utf-8')
    
    # company- 파일은 건너뛰기
    if filename.startswith('company-'):
        return False
    
    # 정적 header 삽입
    content = insert_static_header(content)
    
    # 파일명에서 지역, 세부지역, 동/역, 필터 추출
    region, district, dong_station_key, filter_type = extract_region_and_filter(filename)
    
    # 동/역 키가 있으면 한글 이름으로 변환
    dong_station_name = None
    if dong_station_key and region and district:
        # region_key와 district_key 찾기
        region_key = None
        district_key = None
        for key, value in REGION_MAP.items():
            if value == region:
                region_key = key
                break
        if region_key and region_key in DISTRICT_MAP:
            for key, value in DISTRICT_MAP[region_key].items():
                if value == district:
                    district_key = key
                    break
        
        if region_key and district_key:
            dong_station_name = get_dong_station_name(region_key, district_key, dong_station_key)
            if not dong_station_name:
                # get_dong_station_name이 실패한 경우, script.js에서 직접 찾기 시도
                try:
                    script_file = SCRIPT_DIR / 'public' / 'script.js'
                    if script_file.exists():
                        script_content = script_file.read_text(encoding='utf-8')
                        # 정규식으로 'nonhyeon-dong': '논현동' 패턴 찾기
                        pattern = rf"['\"]({re.escape(dong_station_key)})['\"]:\s*['\"]([^'\"]+)['\"]"
                        match = re.search(pattern, script_content)
                        if match:
                            dong_station_name = match.group(2)
                            print(f"  ✅ script.js에서 직접 찾음: {dong_station_key} -> {dong_station_name}")
                        else:
                            print(f"  ⚠️ 동/역 이름을 찾을 수 없음. 키: {dong_station_key}, 정렬 단계에서 자동 감지 수행")
                    else:
                        print(f"  ⚠️ script.js 파일을 찾을 수 없음. 키: {dong_station_key}, 정렬 단계에서 자동 감지 수행")
                except Exception as e:
                    print(f"  ⚠️ script.js 파싱 오류: {e}, 정렬 단계에서 자동 감지 수행")
    
    print(f"\n처리 중: {filename}")
    print(f"  지역: {region}, 구: {district}, 동/역 키: {dong_station_key}, 동/역 이름: {dong_station_name}, 필터: {filter_type}")
    
    # 조건에 맞는 업체 필터링 (먼저 모든 업체를 가져온 후, 동/역 이름이 없으면 자동 감지)
    matching_shops = []
    
    # 동/역 이름이 없고 키가 있는 경우, 키를 직접 사용하여 동 이름 감지 시도
    # 키 예: "nonhyeon-dong" -> "논현동"으로 직접 매핑 (script.js의 districtMap 사용)
    if not dong_station_name and dong_station_key:
        # 키에서 직접 동 이름을 찾지 못한 경우, 모든 업체를 수집하여 동 이름 자동 감지
        # 하지만 이 방법은 부정확할 수 있으므로, 먼저 키를 기반으로 한글 변환 시도
        print(f"  ⚠️ 동/역 이름을 찾을 수 없음. 키: {dong_station_key}")
        
        # 일단 주소에서 직접 매칭하도록 하고, 필터링은 모든 업체를 포함
        # 정렬 단계에서 동 이름 자동 감지를 수행하여 정확한 정렬 수행
    
    # 조건에 맞는 업체 필터링 (동/역 필터링은 하지 않음, 정렬 단계에서 처리)
    region_matched = 0
    district_matched = 0
    filter_matched = 0
    
    for shop in shops:
        shop_region = shop.get('region', '')
        shop_district = shop.get('district', '')
        shop_type = shop.get('type', '')
        services = shop.get('services', [])
        if isinstance(services, str):
            services = [services]
        is_outcall = (shop_type == '출장마사지' or '출장마사지' in services)
        
        # 지역 매칭
        if region:
            shop_region_str = str(shop_region).strip()
            region_str = str(region).strip()
            
            if is_outcall and ',' in shop_region_str:
                shop_regions = [r.strip() for r in shop_region_str.split(',')]
                if region_str not in shop_regions:
                    continue
            else:
                if shop_region_str != region_str:
                    continue
        
        region_matched += 1
        
        # 구 매칭
        if district:
            if is_outcall and ',' in str(shop_region):
                pass
            elif is_outcall and str(shop_region) == '제주':
                pass
            else:
                if shop_district != district:
                    continue
        
        district_matched += 1
        
        # 동/역 매칭은 필터링 단계에서 하지 않음
        # 모든 업체를 포함하여 정렬 단계에서 동/역 이름 자동 감지 및 정렬 수행
        
        # 필터 매칭
        if not matches_filter(shop, filter_type):
            continue
        
        filter_matched += 1
        matching_shops.append(shop)
    
    print(f"  지역 매칭: {region_matched}개, 구 매칭: {district_matched}개, 필터 매칭: {filter_matched}개")
    print(f"  최종 매칭된 업체 수: {len(matching_shops)}")
    
    # header가 삽입되었는지 확인
    header_inserted = '<header class="header" id="mainHeader"' in content
    
    if not matching_shops:
        print(f"  ⚠️ 매칭된 업체가 없습니다.")
        if header_inserted:
            html_file.write_text(content, encoding='utf-8')
            print(f"  ✅ header만 업데이트 완료")
            return True
        return False
    
    # showHealingShop 기준으로 정렬 및 랜덤화 (개선된 함수 사용)
    # 동/역 이름이 있으면 해당 동/역이 포함된 카드를 각 그룹의 최상단에 배치
    sorted_shops = sort_shops(matching_shops, dong_station_name, dong_station_key)
    
    # 업체 카드 HTML 생성
    cards_html = '\n'.join([create_shop_card_html(shop) for shop in sorted_shops])
    
    # massageList 내부의 기존 massage-card 요소들만 찾아서 교체
    inserted = False
    
    # massageList 시작 태그 찾기
    massage_list_start_pattern = r'<div[^>]*id=["\']massageList["\'][^>]*>'
    massage_list_match = re.search(massage_list_start_pattern, content)
    
    if massage_list_match:
        start_pos = massage_list_match.start()
        start_tag_end = massage_list_match.end()
        start_tag = massage_list_match.group(0)
        
        # </main> 태그를 먼저 찾기
        main_end_pos = content.find('</main>', start_tag_end)
        if main_end_pos < 0:
            main_end_pos = len(content)
        
        section = content[start_tag_end:main_end_pos]
        last_close_div = section.rfind('</div>')
        
        if last_close_div >= 0:
            end_pos = start_tag_end + last_close_div + 6
            
            # sortStaticCards 스크립트 제거 (더 강력한 패턴)
            section_before = content[start_pos:end_pos]
            while True:
                old_section = section_before
                # 패턴 1: <script>...</script> 형태의 sortStaticCards 스크립트 제거
                section_before = re.sub(
                    r'<script>\s*\(function\(\)\s*\{[^}]*sortStaticCards[^}]*(?:\{[^}]*\}[^}]*)*\}\)\(\);\s*</script>',
                    '',
                    section_before,
                    flags=re.DOTALL
                )
                # 패턴 2: 즉시 실행 함수 형태 제거
                section_before = re.sub(
                    r'\(function\(\)\s*\{[^}]*sortStaticCards[^}]*(?:\{[^}]*\}[^}]*)*\}\)\(\);\s*',
                    '',
                    section_before,
                    flags=re.DOTALL
                )
                # 패턴 3: if (typeof sortStaticCards === 'function') { sortStaticCards(); } 제거
                section_before = re.sub(
                    r'if\s*\(typeof\s+sortStaticCards\s*===\s*[\'"]function[\'"]\s*\)\s*\{[^}]*sortStaticCards\(\)[^}]*\}',
                    '',
                    section_before,
                    flags=re.DOTALL
                )
                # 패턴 4: sortStaticCards(); 단독 호출 제거
                section_before = re.sub(
                    r'sortStaticCards\(\);\s*',
                    '',
                    section_before,
                    flags=re.MULTILINE
                )
                # 패턴 5: 연속된 </script><script> 제거
                section_before = re.sub(
                    r'</script>\s*<script>',
                    '',
                    section_before,
                    flags=re.DOTALL
                )
                # 패턴 6: 빈 <script></script> 제거
                section_before = re.sub(
                    r'<script>\s*</script>',
                    '',
                    section_before,
                    flags=re.MULTILINE
                )
                if old_section == section_before:
                    break
            content = content[:start_pos] + section_before + content[end_pos:]
            end_pos = start_pos + len(section_before)
            
            # sortStaticCards 스크립트는 제거 (정적 정렬을 위해)
            new_massage_list = f'{start_tag}\n{cards_html}\n        </div>'
            
            # massageList 전체 교체
            content = content[:start_pos] + new_massage_list + content[end_pos:]
            inserted = True
            print(f"  ✅ massageList 전체 교체 후 새 카드 {len(matching_shops)}개 등록")
    
    # 기존 sortStaticCards 오버라이드 스크립트 모두 제거 (중복 방지)
    # 전역 오버라이드 코드도 제거 (지역 선택 드롭다운 등에 영향을 주지 않도록)
    while True:
        old_content = content
        # 패턴 1: 전역 HTMLElement.prototype 또는 Element.prototype 오버라이드가 포함된 스크립트 블록 전체 제거
        content = re.sub(
            r'<script>\s*//\s*정적\s*HTML\s*정렬\s*유지[^<]*?</script>',
            '',
            content,
            flags=re.DOTALL | re.IGNORECASE
        )
        # 패턴 2: HTMLElement.prototype.innerHTML 또는 Element.prototype.setAttribute가 포함된 스크립트 제거
        content = re.sub(
            r'<script>[^<]*(?:HTMLElement\.prototype\.innerHTML|Element\.prototype\.setAttribute)[^<]*</script>',
            '',
            content,
            flags=re.DOTALL | re.IGNORECASE
        )
        # 패턴 3: sortStaticCards 오버라이드 스크립트 (구버전)
        content = re.sub(
            r'<script>\s*//\s*sortStaticCards\s*함수\s*오버라이드[^<]*</script>',
            '',
            content,
            flags=re.DOTALL | re.IGNORECASE
        )
        if old_content == content:
            break
    
    # 기존 오버라이드 스크립트 모두 제거 (전역 오버라이드 제거)
    # script.js 앞의 모든 오버라이드 스크립트 제거
    script_js_pattern = r'(<script src="script\.js"[^>]*>)'
    script_js_match = re.search(script_js_pattern, content)
    if script_js_match:
        before_script_area = content[:script_js_match.start()]
        # 전역 오버라이드가 포함된 스크립트 블록 찾아서 제거
        # 패턴: <script> ... HTMLElement.prototype ... </script> (멀티라인 지원)
        pattern = r'<script>[\s\S]*?HTMLElement\.prototype[\s\S]*?</script>'
        before_script_area = re.sub(pattern, '', before_script_area, flags=re.IGNORECASE)
        # 패턴: <script> ... Element.prototype.setAttribute ... </script>
        pattern = r'<script>[\s\S]*?Element\.prototype\.setAttribute[\s\S]*?</script>'
        before_script_area = re.sub(pattern, '', before_script_area, flags=re.IGNORECASE)
        content = before_script_area + content[script_js_match.start():]
        # script_js_match 다시 검색
        script_js_match = re.search(script_js_pattern, content)
    
    # script.js 로드 전에 sortStaticCards 함수 오버라이드 추가 (간단한 버전)
    if script_js_match:
        # 이미 오버라이드가 있는지 확인
        before_script = content[:script_js_match.start()]
        if 'sortStaticCards 함수 오버라이드' not in before_script or 'window.staticCardsSorted = true' not in before_script:
            override_script = '''    <script>
      // sortStaticCards 함수 오버라이드하여 비활성화
      window.sortStaticCards = function() {
        // 정적 HTML이 이미 정렬되어 있으므로 아무것도 하지 않음
        return;
      };
      // staticCardsSorted 플래그도 true로 설정
      window.staticCardsSorted = true;
    </script>
    '''
            content = content[:script_js_match.start()] + override_script + content[script_js_match.start():]
    
    # footer-link 텍스트 업데이트 및 필터 링크 삽입
    content = update_footer_link(content, region, district, filter_type, filename)
    
    # JavaScript의 동적 카드 생성 코드 비활성화
    content = disable_dynamic_card_generation(content)
    
    if inserted:
        html_file.write_text(content, encoding='utf-8')
        print(f"  ✅ 업체 카드 {len(matching_shops)}개 삽입 완료")
        return True
    else:
        html_file.write_text(content, encoding='utf-8')
        print(f"  ⚠️ 삽입 위치를 찾을 수 없습니다.")
        return False

# 메인 함수
def main():
    print("=" * 60)
    print("서울 지역만 massage-card 업데이트 스크립트")
    print("=" * 60)
    
    # shop-card-data.js 읽기
    print("\n1. shop-card-data.js 읽는 중...")
    shops = read_shop_card_data()
    print(f"   ✅ {len(shops)}개 업체 데이터 로드 완료")
    
    if not shops:
        print("   ⚠️ 업체 데이터가 없습니다. 스크립트를 종료합니다.")
        return
    
    # 서울 HTML 파일 찾기
    print("\n2. 서울 HTML 파일 검색 중...")
    public_dir = SCRIPT_DIR / 'public'
    if not public_dir.exists():
        print(f"   ⚠️ {public_dir} 디렉토리를 찾을 수 없습니다.")
        return
    
    # 서울로 시작하는 파일만 필터링
    html_files = [f for f in public_dir.glob('*.html') if f.name.startswith('seoul-')]
    print(f"   ✅ {len(html_files)}개 서울 HTML 파일 발견")
    
    # 제외할 파일 목록
    exclude_files = {'notice.html', 'event.html'}
    
    # 각 HTML 파일 처리
    print("\n3. 서울 HTML 파일 처리 중...")
    processed_count = 0
    skipped_count = 0
    
    for html_file in html_files:
        # notice.html과 event.html은 제외
        if html_file.name in exclude_files:
            print(f"   ⏭️ {html_file.name}: 공지사항/이벤트 페이지로 건너뜀")
            skipped_count += 1
            continue
        
        if insert_shop_cards_to_html_seoul(html_file, shops):
            processed_count += 1
        else:
            skipped_count += 1
    
    print("\n" + "=" * 60)
    print(f"처리 완료: {processed_count}개 파일 수정, {skipped_count}개 파일 건너뜀")
    print("=" * 60)

if __name__ == '__main__':
    main()
