#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 동/역 HTML 파일에 논현동과 동일한 정렬 로직 적용
- dongStationSelect의 value에 따라 해당 동/역 매칭 업체 최상단 배치
- showHealingShop + 동/역 매칭 기준으로 4개 그룹 정렬
- F5 새로고침 시 그룹2와 그룹4 랜덤 재정렬
"""
import sys
import re
import html
import random
from pathlib import Path

# Windows에서 UTF-8 출력 설정
if sys.platform == 'win32':
    try:
        import os
        os.environ['PYTHONIOENCODING'] = 'utf-8'
    except:
        pass

SCRIPT_DIR = Path(__file__).parent.absolute()

# 기존 스크립트의 함수들을 import
sys.path.insert(0, str(SCRIPT_DIR))

from insert_shop_cards_to_html import (
    read_shop_card_data,
    extract_dong_from_address,
    create_shop_card_html,
    insert_static_header,
    disable_dynamic_card_generation,
    update_footer_link,
    matches_filter,
    extract_region_and_filter,
    get_dong_station_name,
    REGION_MAP,
    DISTRICT_MAP,
)


def extract_dong_station_from_html(html_content):
    """HTML에서 dongStationSelect의 value 추출"""
    # dongStationSelect 요소 찾기
    pattern = r'<select[^>]*id=["\']dongStationSelect["\'][^>]*>.*?<option[^>]*value=["\']([^"\']+)["\'][^>]*selected'
    match = re.search(pattern, html_content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1)
    
    # 또는 파일명에서 추출 시도
    return None


def get_dong_station_name_from_key(region_key, district_key, dong_station_key):
    """동/역 키로부터 한글 이름 찾기"""
    if not region_key or not district_key or not dong_station_key:
        return None
    
    # script.js에서 직접 찾기
    try:
        script_file = SCRIPT_DIR / 'public' / 'script.js'
        if script_file.exists():
            script_content = script_file.read_text(encoding='utf-8')
            # districtMap 구조에서 찾기
            # 예: 'seoul': { 'gangnam': { 'nonhyeon-dong': '논현동' } }
            pattern = rf"['\"]({re.escape(dong_station_key)})['\"]:\s*['\"]([^'\"]+)['\"]"
            match = re.search(pattern, script_content)
            if match:
                return match.group(2)
    except Exception as e:
        print(f"  ⚠️ script.js 파싱 오류: {e}")
    
    # get_dong_station_name 함수 사용
    try:
        return get_dong_station_name(region_key, district_key, dong_station_key)
    except:
        return None


def insert_protection_script(content, dong_station_name):
    """JavaScript 보호 코드를 script.js 로드 전에 삽입"""
    # script.js 로드 위치 찾기
    script_js_pattern = r'<script[^>]*src=["\']script\.js["\'][^>]*>'
    script_js_match = re.search(script_js_pattern, content, re.IGNORECASE)
    
    if not script_js_match:
        print("  ⚠️ script.js를 찾을 수 없습니다.")
        return content
    
    # 이미 보호 코드가 있는지 확인
    before_script = content[:script_js_match.start()]
    if '카드 순서 보호' in before_script or 'shuffleNonhyeonGroups' in before_script:
        print("  ℹ️ 보호 코드가 이미 존재합니다. 업데이트합니다.")
        # 기존 보호 코드 제거
        protection_pattern = r'<script>\s*//.*?카드 순서 보호.*?</script>'
        content = re.sub(protection_pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        # 다시 script.js 위치 찾기
        script_js_match = re.search(script_js_pattern, content, re.IGNORECASE)
        if not script_js_match:
            return content
    
    # 보호 스크립트 생성 (동/역 이름을 변수로 사용)
    protection_script = f'''    <script>
      // {dong_station_name} 카드 순서 보호 + 그룹2/그룹4 랜덤 재정렬
      (function() {{
        'use strict';
        
        const DONG_STATION_NAME = '{dong_station_name}';
        
        // staticCardsSorted 플래그 즉시 설정
        window.staticCardsSorted = true;
        
        // 랜덤 재정렬 함수 (그룹2와 그룹4만)
        function shuffleDongStationGroups() {{
          const massageList = document.getElementById('massageList');
          if (!massageList) return;
          
          // 모든 카드 수집
          const allCards = Array.from(massageList.children).filter((child) => {{
            return child.tagName === 'A' && child.querySelector('.massage-card');
          }});
          
          if (allCards.length === 0) return;
          
          // 각 카드의 그룹 분류
          const group1 = []; // showHealingShop: true + {dong_station_name} (고정)
          const group2 = []; // showHealingShop: true + {dong_station_name} 이외 (랜덤)
          const group3 = []; // showHealingShop: false + {dong_station_name} (고정)
          const group4 = []; // showHealingShop: false + {dong_station_name} 이외 (랜덤)
          
          allCards.forEach((card) => {{
            const massageCard = card.querySelector('.massage-card');
            if (!massageCard) return;
            
            // showHealingShop 확인
            const showHealingShop = massageCard.getAttribute('data-show-healing-shop') === 'true';
            
            // {dong_station_name} 매칭 확인 (카드 내용에서)
            const cardText = massageCard.textContent || '';
            const isDongStation = cardText.includes(DONG_STATION_NAME);
            
            // 그룹 분류
            if (showHealingShop && isDongStation) {{
              group1.push(card);
            }} else if (showHealingShop && !isDongStation) {{
              group2.push(card);
            }} else if (!showHealingShop && isDongStation) {{
              group3.push(card);
            }} else {{
              group4.push(card);
            }}
          }});
          
          // 그룹2와 그룹4만 랜덤 셔플
          function shuffleArray(array) {{
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {{
              const j = Math.floor(Math.random() * (i + 1));
              [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }}
            return newArray;
          }}
          
          const shuffledGroup2 = shuffleArray(group2);
          const shuffledGroup4 = shuffleArray(group4);
          
          // 모든 카드 제거
          allCards.forEach((card) => card.remove());
          
          // 정렬된 순서로 다시 추가: 그룹1 + 그룹2(랜덤) + 그룹3 + 그룹4(랜덤)
          const sortedCards = [...group1, ...shuffledGroup2, ...group3, ...shuffledGroup4];
          sortedCards.forEach((card) => massageList.appendChild(card));
          
          console.log('[{dong_station_name} 정렬] 그룹2와 그룹4 랜덤 재정렬 완료');
        }}
        
        // sortStaticCards 함수 오버라이드 - 그룹2/그룹4만 랜덤 재정렬
        window.sortStaticCards = function() {{
          console.log('[{dong_station_name} 보호] sortStaticCards 호출 - 그룹2/그룹4 랜덤 재정렬');
          shuffleDongStationGroups();
          // 카드 표시
          const massageList = document.getElementById('massageList');
          if (massageList) {{
            massageList.style.opacity = '1';
            massageList.style.visibility = 'visible';
            massageList.classList.add('sorted');
          }}
        }};
        
        // initStaticCardSorting 함수 비활성화
        window.initStaticCardSorting = function() {{
          console.log('[{dong_station_name} 보호] initStaticCardSorting 호출 차단');
          return;
        }};
        
        // DOM 로드 시 카드 표시 및 랜덤 재정렬
        function ensureCardsVisibleAndShuffle() {{
          const massageList = document.getElementById('massageList');
          if (massageList) {{
            massageList.style.opacity = '1';
            massageList.style.visibility = 'visible';
            massageList.classList.add('sorted');
            // 그룹2와 그룹4 랜덤 재정렬
            shuffleDongStationGroups();
          }}
        }}
        
        // 페이지 로드 시 카드 표시 및 랜덤 재정렬
        if (document.readyState === 'loading') {{
          document.addEventListener('DOMContentLoaded', ensureCardsVisibleAndShuffle);
        }} else {{
          setTimeout(ensureCardsVisibleAndShuffle, 100);
        }}
        
        window.addEventListener('load', function() {{
          ensureCardsVisibleAndShuffle();
          // 함수 재오버라이드 (script.js 로드 후에도 유지)
          window.sortStaticCards = function() {{ 
            console.log('[{dong_station_name} 보호] sortStaticCards 호출 (load 이벤트) - 그룹2/그룹4 랜덤 재정렬');
            shuffleDongStationGroups();
            const massageList = document.getElementById('massageList');
            if (massageList) {{
              massageList.style.opacity = '1';
              massageList.style.visibility = 'visible';
              massageList.classList.add('sorted');
            }}
            return; 
          }};
          window.initStaticCardSorting = function() {{ 
            console.log('[{dong_station_name} 보호] initStaticCardSorting 호출 차단 (load 이벤트)');
            return; 
          }};
          window.staticCardsSorted = true;
        }});
        
        // DOMContentLoaded 이벤트에서도 재설정
        document.addEventListener('DOMContentLoaded', function() {{
          window.sortStaticCards = function() {{ 
            console.log('[{dong_station_name} 보호] sortStaticCards 호출 (DOMContentLoaded) - 그룹2/그룹4 랜덤 재정렬');
            shuffleDongStationGroups();
            const massageList = document.getElementById('massageList');
            if (massageList) {{
              massageList.style.opacity = '1';
              massageList.style.visibility = 'visible';
              massageList.classList.add('sorted');
            }}
            return; 
          }};
          window.initStaticCardSorting = function() {{ 
            console.log('[{dong_station_name} 보호] initStaticCardSorting 호출 차단 (DOMContentLoaded)');
            return; 
          }};
          window.staticCardsSorted = true;
        }});
      }})();
    </script>
    '''
    
    # script.js 앞에 보호 코드 삽입
    content = content[:script_js_match.start()] + protection_script + content[script_js_match.start():]
    
    print("  ✅ JavaScript 보호 코드 삽입 완료")
    return content


def sort_shops_for_dong_station(shops, dong_station_name):
    """
    동/역 + showHealingShop 기준 정렬
    1. showHealingShop: true + 동/역 매칭 → 1번 (최상단, 고정)
    2. showHealingShop: true + 동/역 이외 → 2번 (랜덤 배치, F5마다 변경)
    3. showHealingShop: false + 동/역 매칭 → 3번 (고정)
    4. showHealingShop: false + 동/역 이외 → 4번 (랜덤 배치, F5마다 변경)
    """
    # 4개 그룹으로 분류
    group1 = []  # showHealingShop: true + 동/역 매칭 (고정)
    group2 = []  # showHealingShop: true + 동/역 이외 (랜덤)
    group3 = []  # showHealingShop: false + 동/역 매칭 (고정)
    group4 = []  # showHealingShop: false + 동/역 이외 (랜덤)
    
    for shop in shops:
        show_healing_shop = shop.get('showHealingShop', False)
        
        # 동/역 매칭 확인
        shop_dong_field = shop.get('dong', '').strip() if shop.get('dong') else ''
        is_dong_station = False
        
        # dong 필드가 동/역 이름과 정확히 일치하는 경우
        if shop_dong_field == dong_station_name:
            is_dong_station = True
        else:
            # dong 필드가 없거나 다른 경우, 주소에서 확인
            shop_address = shop.get('address', '')
            shop_detail_address = shop.get('detailAddress', '')
            address_text = f"{shop_address} {shop_detail_address}".strip()
            
            # 주소에 동/역 이름이 포함되어 있는지 확인
            if dong_station_name in address_text:
                is_dong_station = True
        
        # 그룹 분류
        if show_healing_shop and is_dong_station:
            group1.append(shop)
        elif show_healing_shop and not is_dong_station:
            group2.append(shop)
        elif not show_healing_shop and is_dong_station:
            group3.append(shop)
        else:
            group4.append(shop)
    
    # 그룹2와 그룹4는 랜덤 배치 (F5마다 변경되도록)
    random.shuffle(group2)
    random.shuffle(group4)
    
    # 최종 정렬: 그룹1 + 그룹2 + 그룹3 + 그룹4
    sorted_shops = group1 + group2 + group3 + group4
    
    print(f"\n  [정렬 결과]")
    print(f"    - 그룹1 (showHealingShop: true + {dong_station_name}): {len(group1)}개 (최상단, 고정)")
    print(f"    - 그룹2 (showHealingShop: true + {dong_station_name} 이외): {len(group2)}개 (랜덤 배치)")
    print(f"    - 그룹3 (showHealingShop: false + {dong_station_name}): {len(group3)}개 (고정)")
    print(f"    - 그룹4 (showHealingShop: false + {dong_station_name} 이외): {len(group4)}개 (랜덤 배치)")
    
    return sorted_shops


def update_dong_station_massage_file(html_file):
    """동/역 HTML 파일 업데이트"""
    filename = html_file.name
    
    # company- 파일은 건너뛰기
    if filename.startswith('company-'):
        return False
    
    # -dong-massage.html, -station-massage.html, -dong.html, -station.html 패턴 확인
    is_massage_filter = filename.endswith('-dong-massage.html') or filename.endswith('-station-massage.html')
    is_all_filter = filename.endswith('-dong.html') or filename.endswith('-station.html')
    
    if not (is_massage_filter or is_all_filter):
        return False
    
    print(f"\n{'=' * 60}")
    print(f"처리 중: {filename}")
    print("=" * 60)
    
    # 파일 읽기
    content = html_file.read_text(encoding='utf-8')
    
    # dongStationSelect의 value 추출
    dong_station_key = extract_dong_station_from_html(content)
    if not dong_station_key:
        # 파일명에서 추출 시도
        if is_massage_filter:
            # 예: seoul-gangnam-nonhyeon-dong-massage.html -> nonhyeon-dong
            match = re.search(r'-([a-z]+-(?:dong|station))-massage\.html$', filename, re.IGNORECASE)
        else:
            # 예: seoul-gangnam-nonhyeon-dong.html -> nonhyeon-dong
            match = re.search(r'-([a-z]+-(?:dong|station))\.html$', filename, re.IGNORECASE)
        
        if match:
            dong_station_key = match.group(1)
        else:
            print(f"  ⚠️ dongStationSelect value를 찾을 수 없습니다. 건너뜁니다.")
            return False
    
    # 지역, 세부지역, 필터 추출
    region, district, _, filter_type = extract_region_and_filter(filename)
    
    # -dong.html, -station.html 파일의 경우 filter_type이 None이 되므로 'all'로 설정
    if is_all_filter and not filter_type:
        filter_type = 'all'
    
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
    
    # 동/역 이름 찾기
    dong_station_name = None
    if region_key and district_key:
        dong_station_name = get_dong_station_name_from_key(region_key, district_key, dong_station_key)
    
    if not dong_station_name:
        print(f"  ⚠️ 동/역 이름을 찾을 수 없습니다. 키: {dong_station_key}, 건너뜁니다.")
        return False
    
    print(f"  지역: {region}, 구: {district}, 동/역 키: {dong_station_key}, 동/역 이름: {dong_station_name}, 필터: {filter_type}")
    
    # shop-card-data.js에서 업체 데이터 읽기
    shops = read_shop_card_data()
    if not shops:
        print("  ❌ 업체 데이터를 읽을 수 없습니다.")
        return False
    
    # 정적 header 삽입
    content = insert_static_header(content)
    
    # 동적 카드 생성 비활성화
    content = disable_dynamic_card_generation(content)
    
    # 매칭된 업체 필터링
    # 타입필터: all (전체)일 때는 모든 타입 필터를 포함
    # (왁싱, 마사지, 스웨디시, 중국마사지, 출장마사지, 발마사지, 스파, 타이마사지, 아로마마사지 등)
    # 타입필터: all일 때도 동/역 정렬 로직 적용
    matching_shops = []
    for shop in shops:
        shop_region = shop.get('region', '')
        shop_district = shop.get('district', '')
        shop_type = shop.get('type', '')
        services = shop.get('services', [])
        if isinstance(services, str):
            services = [services]
        is_outcall = (shop_type == '출장마사지' or any('출장마사지' in str(s) for s in services))
        
        # 지역 매칭 (출장마사지의 경우 여러 지역 처리)
        if region:
            shop_region_str = str(shop_region).strip()
            region_str = str(region).strip()
            
            if is_outcall and ',' in shop_region_str:
                # 출장마사지이고 여러 지역을 포함하는 경우
                shop_regions = [r.strip() for r in shop_region_str.split(',')]
                if region_str not in shop_regions:
                    continue
            else:
                if shop_region_str != region_str:
                    continue
        
        # 세부지역 매칭 (출장마사지의 경우 district 매칭 스킵)
        # 출장마사지는 구(district) 단위가 아닌 지역(region) 단위로 운영되므로 모든 출장마사지에서 district 매칭 스킵
        if district:
            if is_outcall:
                # 출장마사지의 경우 district 매칭 스킵 (전 지역, 세부지역, 동/역 모두 포함)
                pass
            else:
                if shop_district != district:
                    continue
        
        # 필터 매칭
        # filter_type이 'all'이거나 None이면 matches_filter가 True를 반환하여 
        # 모든 업체 타입(왁싱, 마사지, 스웨디시, 중국마사지, 출장마사지, 발마사지, 스파, 타이마사지, 아로마마사지 등) 포함
        if not matches_filter(shop, filter_type):
            continue
        
        matching_shops.append(shop)
    
    print(f"  ✅ 매칭된 업체 수: {len(matching_shops)}개")
    
    if not matching_shops:
        print("  ⚠️ 매칭된 업체가 없습니다.")
        html_file.write_text(content, encoding='utf-8')
        return True
    
    # 정렬: 동/역 매칭 카드 최상단, 나머지 랜덤
    sorted_shops = sort_shops_for_dong_station(matching_shops, dong_station_name)
    
    # 업체 카드 HTML 생성
    cards_list = []
    for shop in sorted_shops:
        card_html = create_shop_card_html(shop)
        cards_list.append(card_html)
    cards_html = '\n'.join(cards_list)
    
    # massageList 내부의 기존 카드 완전 삭제 후 새로 생성
    massage_list_start_pattern = r'<div[^>]*id=["\']massageList["\'][^>]*>'
    massage_list_match = re.search(massage_list_start_pattern, content)
    
    if not massage_list_match:
        print("  ❌ massageList 요소를 찾을 수 없습니다.")
        return False
    
    start_tag_start = massage_list_match.start()
    start_tag_end = massage_list_match.end()
    
    # </main> 태그 찾기
    main_end_pos = content.find('</main>', start_tag_end)
    if main_end_pos < 0:
        print("  ❌ </main> 태그를 찾을 수 없습니다.")
        return False
    
    # 기존 카드 개수 확인
    existing_section = content[start_tag_end:main_end_pos]
    existing_cards = re.findall(r'<a[^>]*href[^>]*>.*?</a>', existing_section, re.DOTALL | re.IGNORECASE)
    total_existing = len(existing_cards)
    if total_existing > 0:
        print(f"  ℹ️ 기존 카드 {total_existing}개 발견, 완전 삭제 중...")
    
    # massageList 종료 태그 찾기
    section_before_main = content[start_tag_end:main_end_pos]
    last_close_div = section_before_main.rfind('</div>')
    
    if last_close_div < 0:
        print("  ❌ massageList 종료 태그를 찾을 수 없습니다.")
        return False
    
    end_pos = start_tag_end + last_close_div + 6
    
    # 기존 내용 완전 제거하고 새 카드만 삽입
    new_content = (
        content[:start_tag_end] + 
        '\n' + cards_html + '\n      ' +
        content[end_pos:]
    )
    
    content = new_content
    
    # 기존 절대 경로를 상대 경로로 변경 (이미 생성된 파일의 링크 수정)
    # https://www.msg1000.com/company-*.html -> company-*.html
    content = re.sub(
        r'href=["\']https://www\.msg1000\.com/(company-[^"\']+\.html)["\']',
        r'href="\1"',
        content
    )
    
    # footer-link 업데이트
    content = update_footer_link(content, region, district, filter_type, filename)
    
    # JavaScript 보호 코드 삽입
    content = insert_protection_script(content, dong_station_name)
    
    # 파일 저장
    html_file.write_text(content, encoding='utf-8')
    
    print(f"  ✅ 업데이트 완료: {len(sorted_shops)}개 카드")
    return True


def main():
    """모든 동/역 HTML 파일 처리"""
    public_dir = SCRIPT_DIR / 'public'
    
    if not public_dir.exists():
        print(f"❌ public 디렉토리를 찾을 수 없습니다: {public_dir}")
        return
    
    # 모든 -dong-massage.html, -station-massage.html, -dong.html, -station.html 파일 찾기
    dong_massage_files = list(public_dir.glob('*-dong-massage.html'))
    station_massage_files = list(public_dir.glob('*-station-massage.html'))
    dong_all_files = list(public_dir.glob('*-dong.html'))
    station_all_files = list(public_dir.glob('*-station.html'))
    all_files = dong_massage_files + station_massage_files + dong_all_files + station_all_files
    
    print("=" * 60)
    print("모든 동/역 HTML 파일 업데이트")
    print("=" * 60)
    print(f"발견된 파일 수: {len(all_files)}개")
    print("=" * 60)
    
    success_count = 0
    fail_count = 0
    
    for html_file in all_files:
        try:
            if update_dong_station_massage_file(html_file):
                success_count += 1
            else:
                fail_count += 1
        except Exception as e:
            print(f"  ❌ 오류 발생: {e}")
            import traceback
            traceback.print_exc()
            fail_count += 1
    
    print("\n" + "=" * 60)
    print("[완료] 전체 업데이트 완료!")
    print("=" * 60)
    print(f"  - 성공: {success_count}개")
    print(f"  - 실패: {fail_count}개")
    print(f"  - 총 파일: {len(all_files)}개")
    print("=" * 60)


if __name__ == "__main__":
    try:
        main()
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ 오류 발생: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

