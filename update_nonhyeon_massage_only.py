#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
seoul-gangnam-nonhyeon-dong-massage.html 파일 하나만 처리하는 스크립트
- dongStationSelect의 value가 'nonhyeon-dong'이고 '논현동'과 매칭되면 최상단 배치
- 그 외는 랜덤 배치
- 정적 HTML로 카드 등록하여 동적 정렬 방지
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
)

# 대상 파일
TARGET_FILE = SCRIPT_DIR / 'public' / 'seoul-gangnam-nonhyeon-dong-massage.html'
DONG_STATION_KEY = 'nonhyeon-dong'
DONG_STATION_NAME = '논현동'


def extract_dong_station_from_html(html_content):
    """HTML에서 dongStationSelect의 value 추출"""
    # dongStationSelect 요소 찾기
    pattern = r'<select[^>]*id=["\']dongStationSelect["\'][^>]*>.*?<option[^>]*value=["\']([^"\']+)["\'][^>]*selected'
    match = re.search(pattern, html_content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1)
    
    # 또는 value="nonhyeon-dong" 패턴 직접 찾기
    pattern2 = r'value=["\'](nonhyeon-dong)["\']'
    match2 = re.search(pattern2, html_content, re.IGNORECASE)
    if match2:
        return match2.group(1)
    
    return None


def insert_protection_script(content):
    """JavaScript 보호 코드를 script.js 로드 전에 삽입"""
    # script.js 로드 위치 찾기
    script_js_pattern = r'<script[^>]*src=["\']script\.js["\'][^>]*>'
    script_js_match = re.search(script_js_pattern, content, re.IGNORECASE)
    
    if not script_js_match:
        print("  ⚠️ script.js를 찾을 수 없습니다.")
        return content
    
    # 이미 보호 코드가 있는지 확인
    before_script = content[:script_js_match.start()]
    if '논현동 카드 순서 보호' in before_script or 'originalMassageListHTML' in before_script:
        print("  ℹ️ 보호 코드가 이미 존재합니다. 업데이트합니다.")
        # 기존 보호 코드 제거
        protection_pattern = r'<script>\s*//.*?논현동.*?</script>'
        content = re.sub(protection_pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        # 다시 script.js 위치 찾기
        script_js_match = re.search(script_js_pattern, content, re.IGNORECASE)
        if not script_js_match:
            return content
    
    # 보호 스크립트 생성
    protection_script = '''    <script>
      // 논현동 카드 순서 보호 + 그룹2/그룹4 랜덤 재정렬
      (function() {
        'use strict';
        
        // staticCardsSorted 플래그 즉시 설정
        window.staticCardsSorted = true;
        
        // 랜덤 재정렬 함수 (그룹2와 그룹4만)
        function shuffleNonhyeonGroups() {
          const massageList = document.getElementById('massageList');
          if (!massageList) return;
          
          // 모든 카드 수집
          const allCards = Array.from(massageList.children).filter((child) => {
            return child.tagName === 'A' && child.querySelector('.massage-card');
          });
          
          if (allCards.length === 0) return;
          
          // 각 카드의 그룹 분류
          const group1 = []; // showHealingShop: true + 논현동 (고정)
          const group2 = []; // showHealingShop: true + 논현동 이외 (랜덤)
          const group3 = []; // showHealingShop: false + 논현동 (고정)
          const group4 = []; // showHealingShop: false + 논현동 이외 (랜덤)
          
          allCards.forEach((card) => {
            const massageCard = card.querySelector('.massage-card');
            if (!massageCard) return;
            
            // showHealingShop 확인
            const showHealingShop = massageCard.getAttribute('data-show-healing-shop') === 'true';
            
            // 논현동 매칭 확인 (카드 내용에서)
            const cardText = massageCard.textContent || '';
            const isNonhyeon = cardText.includes('논현동');
            
            // 그룹 분류
            if (showHealingShop && isNonhyeon) {
              group1.push(card);
            } else if (showHealingShop && !isNonhyeon) {
              group2.push(card);
            } else if (!showHealingShop && isNonhyeon) {
              group3.push(card);
            } else {
              group4.push(card);
            }
          });
          
          // 그룹2와 그룹4만 랜덤 셔플
          function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
          }
          
          const shuffledGroup2 = shuffleArray(group2);
          const shuffledGroup4 = shuffleArray(group4);
          
          // 모든 카드 제거
          allCards.forEach((card) => card.remove());
          
          // 정렬된 순서로 다시 추가: 그룹1 + 그룹2(랜덤) + 그룹3 + 그룹4(랜덤)
          const sortedCards = [...group1, ...shuffledGroup2, ...group3, ...shuffledGroup4];
          sortedCards.forEach((card) => massageList.appendChild(card));
          
          console.log('[논현동 정렬] 그룹2와 그룹4 랜덤 재정렬 완료');
        }
        
        // sortStaticCards 함수 오버라이드 - 그룹2/그룹4만 랜덤 재정렬
        window.sortStaticCards = function() {
          console.log('[논현동 보호] sortStaticCards 호출 - 그룹2/그룹4 랜덤 재정렬');
          shuffleNonhyeonGroups();
          // 카드 표시
          const massageList = document.getElementById('massageList');
          if (massageList) {
            massageList.style.opacity = '1';
            massageList.style.visibility = 'visible';
            massageList.classList.add('sorted');
          }
        };
        
        // initStaticCardSorting 함수 비활성화
        window.initStaticCardSorting = function() {
          console.log('[논현동 보호] initStaticCardSorting 호출 차단');
          return;
        };
        
        // DOM 로드 시 카드 표시 및 랜덤 재정렬
        function ensureCardsVisibleAndShuffle() {
          const massageList = document.getElementById('massageList');
          if (massageList) {
            massageList.style.opacity = '1';
            massageList.style.visibility = 'visible';
            massageList.classList.add('sorted');
            // 그룹2와 그룹4 랜덤 재정렬
            shuffleNonhyeonGroups();
          }
        }
        
        // 페이지 로드 시 카드 표시 및 랜덤 재정렬
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', ensureCardsVisibleAndShuffle);
        } else {
          setTimeout(ensureCardsVisibleAndShuffle, 100);
        }
        
        window.addEventListener('load', function() {
          ensureCardsVisibleAndShuffle();
          // 함수 재오버라이드 (script.js 로드 후에도 유지)
          window.sortStaticCards = function() { 
            console.log('[논현동 보호] sortStaticCards 호출 (load 이벤트) - 그룹2/그룹4 랜덤 재정렬');
            shuffleNonhyeonGroups();
            const massageList = document.getElementById('massageList');
            if (massageList) {
              massageList.style.opacity = '1';
              massageList.style.visibility = 'visible';
              massageList.classList.add('sorted');
            }
            return; 
          };
          window.initStaticCardSorting = function() { 
            console.log('[논현동 보호] initStaticCardSorting 호출 차단 (load 이벤트)');
            return; 
          };
          window.staticCardsSorted = true;
        });
        
        // DOMContentLoaded 이벤트에서도 재설정
        document.addEventListener('DOMContentLoaded', function() {
          window.sortStaticCards = function() { 
            console.log('[논현동 보호] sortStaticCards 호출 (DOMContentLoaded) - 그룹2/그룹4 랜덤 재정렬');
            shuffleNonhyeonGroups();
            const massageList = document.getElementById('massageList');
            if (massageList) {
              massageList.style.opacity = '1';
              massageList.style.visibility = 'visible';
              massageList.classList.add('sorted');
            }
            return; 
          };
          window.initStaticCardSorting = function() { 
            console.log('[논현동 보호] initStaticCardSorting 호출 차단 (DOMContentLoaded)');
            return; 
          };
          window.staticCardsSorted = true;
        });
      })();
    </script>
    '''
    
    # script.js 앞에 보호 코드 삽입
    content = content[:script_js_match.start()] + protection_script + content[script_js_match.start():]
    
    print("  ✅ JavaScript 보호 코드 삽입 완료")
    return content


def sort_shops_for_nonhyeon(shops):
    """
    논현동 + showHealingShop 기준 정렬
    1. showHealingShop: true + 논현동 → 1번 (최상단, 고정)
    2. showHealingShop: true + 논현동 이외 → 2번 (랜덤 배치, F5마다 변경)
    3. showHealingShop: false + 논현동 → 3번 (고정)
    4. showHealingShop: false + 논현동 이외 → 4번 (랜덤 배치, F5마다 변경)
    """
    # 4개 그룹으로 분류
    group1 = []  # showHealingShop: true + 논현동 (고정)
    group2 = []  # showHealingShop: true + 논현동 이외 (랜덤)
    group3 = []  # showHealingShop: false + 논현동 (고정)
    group4 = []  # showHealingShop: false + 논현동 이외 (랜덤)
    
    for shop in shops:
        show_healing_shop = shop.get('showHealingShop', False)
        
        # 논현동 매칭 확인
        shop_dong_field = shop.get('dong', '').strip() if shop.get('dong') else ''
        is_nonhyeon = False
        
        # dong 필드가 '논현동'과 정확히 일치하는 경우
        if shop_dong_field == DONG_STATION_NAME:
            is_nonhyeon = True
        else:
            # dong 필드가 없거나 다른 경우, 주소에서 확인
            shop_address = shop.get('address', '')
            shop_detail_address = shop.get('detailAddress', '')
            address_text = f"{shop_address} {shop_detail_address}".strip()
            
            # 주소에 '논현동'이 포함되어 있는지 확인
            if DONG_STATION_NAME in address_text:
                is_nonhyeon = True
        
        # 그룹 분류
        if show_healing_shop and is_nonhyeon:
            group1.append(shop)
            print(f"  ✅ [그룹1] {shop.get('name', 'Unknown')[:30]}... - showHealingShop: true, 논현동 (고정)")
        elif show_healing_shop and not is_nonhyeon:
            group2.append(shop)
            print(f"  ✅ [그룹2] {shop.get('name', 'Unknown')[:30]}... - showHealingShop: true, 논현동 이외 (랜덤)")
        elif not show_healing_shop and is_nonhyeon:
            group3.append(shop)
            print(f"  ✅ [그룹3] {shop.get('name', 'Unknown')[:30]}... - showHealingShop: false, 논현동 (고정)")
        else:
            group4.append(shop)
            print(f"  ✅ [그룹4] {shop.get('name', 'Unknown')[:30]}... - showHealingShop: false, 논현동 이외 (랜덤)")
    
    # 그룹2와 그룹4는 랜덤 배치 (F5마다 변경되도록)
    random.shuffle(group2)
    random.shuffle(group4)
    
    # 최종 정렬: 그룹1 + 그룹2 + 그룹3 + 그룹4
    sorted_shops = group1 + group2 + group3 + group4
    
    print(f"\n  [정렬 결과]")
    print(f"    - 그룹1 (showHealingShop: true + 논현동): {len(group1)}개 (최상단, 고정)")
    print(f"    - 그룹2 (showHealingShop: true + 논현동 이외): {len(group2)}개 (랜덤 배치)")
    print(f"    - 그룹3 (showHealingShop: false + 논현동): {len(group3)}개 (고정)")
    print(f"    - 그룹4 (showHealingShop: false + 논현동 이외): {len(group4)}개 (랜덤 배치)")
    
    return sorted_shops


def update_nonhyeon_massage_file():
    """seoul-gangnam-nonhyeon-dong-massage.html 파일 업데이트"""
    
    if not TARGET_FILE.exists():
        print(f"❌ 파일을 찾을 수 없습니다: {TARGET_FILE}")
        return False
    
    print("=" * 60)
    print("논현동 마사지 페이지 업데이트")
    print("=" * 60)
    print(f"대상 파일: {TARGET_FILE.name}")
    print(f"동/역 키: {DONG_STATION_KEY}")
    print(f"동/역 이름: {DONG_STATION_NAME}")
    print("=" * 60)
    
    # 1. shop-card-data.js에서 업체 데이터 읽기
    print("\n1. shop-card-data.js에서 업체 데이터 읽는 중...")
    shops = read_shop_card_data()
    if not shops:
        print("  ❌ 업체 데이터를 읽을 수 없습니다.")
        return False
    print(f"  ✅ {len(shops)}개 업체 데이터 로드 완료")
    
    # 2. HTML 파일 읽기
    print(f"\n2. HTML 파일 읽는 중: {TARGET_FILE.name}")
    content = TARGET_FILE.read_text(encoding='utf-8')
    
    # 3. dongStationSelect의 value 확인
    dong_station_value = extract_dong_station_from_html(content)
    if dong_station_value:
        print(f"  ✅ dongStationSelect value 발견: {dong_station_value}")
        if dong_station_value != DONG_STATION_KEY:
            print(f"  ⚠️ 경고: value가 '{DONG_STATION_KEY}'가 아닙니다. ({dong_station_value})")
    else:
        print(f"  ⚠️ dongStationSelect value를 찾을 수 없습니다. 계속 진행합니다.")
    
    # 4. 정적 header 삽입
    print("\n3. 정적 header 삽입 중...")
    content = insert_static_header(content)
    
    # 5. 동적 카드 생성 비활성화
    print("4. 동적 카드 생성 비활성화 중...")
    content = disable_dynamic_card_generation(content)
    
    # 6. 매칭된 업체 필터링 (서울, 강남, massage) - 논현동 필터링은 하지 않음
    print("\n5. 매칭된 업체 필터링 중...")
    matching_shops = []
    
    for shop in shops:
        # 지역 매칭
        shop_region = shop.get('region', '')
        if shop_region != '서울':
            continue
        
        # 세부지역 매칭
        shop_district = shop.get('district', '')
        if shop_district != '강남':
            continue
        
        # 필터 매칭 (massage) - matches_filter 함수 사용
        if not matches_filter(shop, 'massage'):
            continue
        
        matching_shops.append(shop)
    
    print(f"  ✅ 매칭된 업체 수: {len(matching_shops)}개")
    
    if not matching_shops:
        print("  ⚠️ 매칭된 업체가 없습니다.")
        # header만 업데이트하고 저장
        TARGET_FILE.write_text(content, encoding='utf-8')
        print("  ✅ header만 업데이트 완료")
        return True
    
    # 7. 정렬: 논현동 매칭 카드 최상단, 나머지 랜덤
    print("\n6. 업체 정렬 중...")
    sorted_shops = sort_shops_for_nonhyeon(matching_shops)
    
    # 8. 업체 카드 HTML 생성
    print("\n7. 업체 카드 HTML 생성 중...")
    cards_list = []
    for shop in sorted_shops:
        card_html = create_shop_card_html(shop)
        # 생성된 카드 HTML 검증
        if 'card-content' not in card_html:
            print(f"  ⚠️ 경고: {shop.get('name', 'Unknown')} 카드에 card-content가 없습니다!")
            # 디버깅: 생성된 HTML의 처음 500자 출력
            print(f"  디버깅 (처음 500자): {card_html[:500]}")
        if card_html.count('</div>') < card_html.count('<div'):
            print(f"  ⚠️ 경고: {shop.get('name', 'Unknown')} 카드의 div 태그가 맞지 않습니다!")
            print(f"  <div> 개수: {card_html.count('<div')}, </div> 개수: {card_html.count('</div>')}")
        cards_list.append(card_html)
    cards_html = '\n'.join(cards_list)
    
    # 전체 cards_html 검증
    if 'card-content' not in cards_html:
        print(f"  ❌ 전체 cards_html에 card-content가 없습니다!")
        # 디버깅: 처음 1000자 출력
        print(f"  디버깅 (처음 1000자):\n{cards_html[:1000]}")
        # 디버깅: 생성된 HTML을 파일로 저장
        debug_file = TARGET_FILE.parent / 'debug_cards_html.txt'
        debug_file.write_text(cards_html, encoding='utf-8')
        print(f"  디버깅: 생성된 HTML을 {debug_file}에 저장했습니다.")
        return False
    else:
        print(f"  ✅ cards_html에 card-content가 포함되어 있습니다.")
        # 디버깅: 생성된 HTML의 처음 500자 출력
        print(f"  디버깅 (처음 500자):\n{cards_html[:500]}")
    
    # 9. massageList 내부의 기존 카드 완전 삭제 후 새로 생성
    print("\n8. massageList 기존 카드 삭제 및 새 카드 삽입 중...")
    
    # massageList 전체를 정규식으로 찾아서 교체 (가장 확실한 방법)
    # massageList 시작 태그부터 </main> 전까지의 모든 내용을 찾아서 교체
    massage_list_start_pattern = r'<div[^>]*id=["\']massageList["\'][^>]*>'
    massage_list_match = re.search(massage_list_start_pattern, content)
    
    if not massage_list_match:
        print("  ❌ massageList 요소를 찾을 수 없습니다.")
        return False
    
    # massageList 시작 태그 위치
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
    
    # massageList 종료 태그 찾기 (</main> 전의 마지막 </div>)
    # </main> 전의 섹션에서 마지막 </div> 찾기
    section_before_main = content[start_tag_end:main_end_pos]
    last_close_div = section_before_main.rfind('</div>')
    
    if last_close_div < 0:
        print("  ❌ massageList 종료 태그를 찾을 수 없습니다.")
        return False
    
    end_pos = start_tag_end + last_close_div + 6  # </div> 포함
    
    # 디버깅: 찾은 위치 확인
    print(f"  ℹ️ massageList 시작: {start_tag_end}, 종료: {end_pos}, 길이: {end_pos - start_tag_end}")
    
    # cards_html 검증: card-content가 포함되어 있는지 확인
    if 'card-content' not in cards_html:
        print(f"  ❌ cards_html에 card-content가 없습니다!")
        # 디버깅: 생성된 HTML을 파일로 저장
        debug_file = TARGET_FILE.parent / 'debug_cards_html.txt'
        debug_file.write_text(cards_html, encoding='utf-8')
        print(f"  디버깅: 생성된 HTML을 {debug_file}에 저장했습니다.")
        return False
    
    # 기존 내용 완전 제거하고 새 카드만 삽입
    # cards_html은 이미 올바른 들여쓰기를 가지고 있음 (각 줄이 '        '로 시작)
    # massageList 시작 태그 다음에 바로 새 카드 삽입
    new_content = (
        content[:start_tag_end] + 
        '\n' + cards_html + '\n      ' +
        content[end_pos:]
    )
    
    content = new_content
    
    # 삽입 후 검증: massageList 내부에 card-content가 있는지 확인
    massage_list_match2 = re.search(massage_list_start_pattern, content)
    if massage_list_match2:
        list_start = massage_list_match2.end()
        main_end = content.find('</main>', list_start)
        if main_end > 0:
            list_section = content[list_start:main_end]
            if 'card-content' not in list_section:
                print(f"  ❌ 경고: 삽입 후에도 card-content가 없습니다!")
                print(f"  디버깅 (처음 1000자):\n{list_section[:1000]}")
                # 디버깅: 삽입된 섹션을 파일로 저장
                debug_file2 = TARGET_FILE.parent / 'debug_inserted_section.txt'
                debug_file2.write_text(list_section, encoding='utf-8')
                print(f"  디버깅: 삽입된 섹션을 {debug_file2}에 저장했습니다.")
                return False
            else:
                print(f"  ✅ 삽입 후 card-content 확인됨")
    
    # 추가 정리: massageList 내부의 깨진 구조 완전 제거 (card-content가 있는 경우에만)
    # massageList 시작 태그부터 </main> 전까지의 모든 내용에서 불완전한 카드 제거
    massage_list_start_pattern2 = r'<div[^>]*id=["\']massageList["\'][^>]*>'
    massage_list_match2 = re.search(massage_list_start_pattern2, content)
    if massage_list_match2:
        list_start = massage_list_match2.end()
        main_end = content.find('</main>', list_start)
        if main_end > 0:
            list_section = content[list_start:main_end]
            
            # card-content가 있는지 먼저 확인
            if 'card-content' in list_section:
                # card-content가 있으면 정리하지 않음 (올바른 구조)
                pass
            else:
                # card-content가 없으면 깨진 구조이므로 정리
                # 깨진 카드 구조 패턴들 제거
                # 패턴 1: </div>만 있고 내용이 없는 경우
                list_section = re.sub(r'</div>\s*</div>\s*</div>\s*</div>', '', list_section)
                # 패턴 2: 빈 </a> 태그 제거
                list_section = re.sub(r'\s*</a>\s*</a>', '</a>', list_section)
                list_section = re.sub(r'<a[^>]*>\s*</a>', '', list_section)
                
                # 정리된 섹션으로 교체
                content = content[:list_start] + list_section + content[main_end:]
    
    # 연속된 빈 줄 정리 (3개 이상 -> 2개로)
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    print(f"  ✅ 기존 카드 {total_existing}개 삭제 완료, 새 카드 {len(sorted_shops)}개 삽입 완료")
    
    # 10. footer-link 업데이트
    print("9. footer-link 업데이트 중...")
    content = update_footer_link(content, '서울', '강남', 'massage', TARGET_FILE.name)
    
    # 11. JavaScript 보호 코드 삽입 (script.js 로드 전)
    print("10. JavaScript 보호 코드 삽입 중...")
    content = insert_protection_script(content)
    
    # 12. 파일 저장
    print("\n11. 파일 저장 중...")
    TARGET_FILE.write_text(content, encoding='utf-8')
    
    # 그룹별 카드 수 계산
    group1_count = 0
    group2_count = 0
    group3_count = 0
    group4_count = 0
    
    for s in sorted_shops:
        show_healing_shop = s.get('showHealingShop', False)
        shop_dong = s.get('dong', '').strip() if s.get('dong') else ''
        shop_address = s.get('address', '')
        shop_detail = s.get('detailAddress', '')
        address_text = f"{shop_address} {shop_detail}"
        is_nonhyeon = (shop_dong == DONG_STATION_NAME or DONG_STATION_NAME in address_text)
        
        if show_healing_shop and is_nonhyeon:
            group1_count += 1
        elif show_healing_shop and not is_nonhyeon:
            group2_count += 1
        elif not show_healing_shop and is_nonhyeon:
            group3_count += 1
        else:
            group4_count += 1
    
    print("\n" + "=" * 60)
    print("[완료] 업데이트 완료!")
    print("=" * 60)
    print(f"  - 파일: {TARGET_FILE.name}")
    print(f"  - 그룹1 (showHealingShop: true + 논현동): {group1_count}개 (최상단, 고정)")
    print(f"  - 그룹2 (showHealingShop: true + 논현동 이외): {group2_count}개 (랜덤 배치)")
    print(f"  - 그룹3 (showHealingShop: false + 논현동): {group3_count}개 (고정)")
    print(f"  - 그룹4 (showHealingShop: false + 논현동 이외): {group4_count}개 (랜덤 배치)")
    print(f"  - 총 카드 수: {len(sorted_shops)}개")
    print("=" * 60)
    
    return True


if __name__ == "__main__":
    try:
        success = update_nonhyeon_massage_file()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"\n❌ 오류 발생: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

