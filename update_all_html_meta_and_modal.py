#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 지역 HTML 파일에 대해:
1. title 변경: "best 샵 |" + 동/역 소개글
2. description 변경: massageList 업체 기반 소개글
3. filter-section에 "관련정보" 버튼 추가
4. 관련정보 모달 추가
"""

import sys
import re
import json
from pathlib import Path
from typing import Optional, List, Dict, Tuple

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# 스크립트 파일의 디렉토리 경로
SCRIPT_DIR = Path(__file__).resolve().parent
PUBLIC_DIR = SCRIPT_DIR / 'public'

# 경로 확인
if not PUBLIC_DIR.exists():
    # 대체 경로 시도
    alt_public = Path('public')
    if alt_public.exists():
        PUBLIC_DIR = alt_public.resolve()
    else:
        print(f"ERROR: public 디렉터리를 찾을 수 없습니다. {PUBLIC_DIR}")
        sys.exit(1)

# 필터 키워드
FILTER_KEYWORDS = ['massage', 'outcall', 'swedish', 'thai', 'aroma', 'waxing', 'chinese', 'foot', 'spa']

# 필터 한글명 매핑
FILTER_NAMES = {
    'massage': '마사지',
    'outcall': '출장마사지',
    'swedish': '스웨디시',
    'thai': '타이마사지',
    'aroma': '아로마마사지',
    'waxing': '왁싱',
    'chinese': '중국마사지',
    'foot': '발마사지',
    'spa': '스파'
}

# 지역 매핑 (간단한 버전, 필요시 확장)
REGION_MAP = {
    'seoul': '서울',
    'busan': '부산',
    'incheon': '인천',
    'daegu': '대구',
    'daejeon': '대전',
    'gwangju': '광주',
    'ulsan': '울산',
    'gyeonggi': '경기',
    'gangwon': '강원',
    'chungbuk': '충북',
    'chungnam': '충남',
    'jeonbuk': '전북',
    'jeonnam': '전남',
    'gyeongbuk': '경북',
    'gyeongnam': '경남',
    'jeju': '제주'
}

def extract_file_info(filename: str) -> Tuple[Optional[str], Optional[str], Optional[str], Optional[str]]:
    """파일명에서 지역, 세부지역, 동/역, 필터 추출"""
    name = filename.replace('.html', '')
    parts = name.split('-')
    
    region = None
    district = None
    dong_station = None
    filter_type = None
    
    if parts[0] in REGION_MAP:
        region = REGION_MAP[parts[0]]
        
        if len(parts) >= 2:
            if parts[1] in FILTER_KEYWORDS:
                filter_type = parts[1]
            else:
                district = parts[1]
                
                # 동/역 정보 추출
                if len(parts) >= 3:
                    dong_parts = []
                    for i in range(2, len(parts)):
                        if parts[i] in FILTER_KEYWORDS:
                            filter_type = parts[i]
                            break
                        else:
                            dong_parts.append(parts[i])
                    
                    if dong_parts:
                        dong_station = '-'.join(dong_parts)
    else:
        if parts[0] in FILTER_KEYWORDS:
            filter_type = parts[0]
    
    return region, district, dong_station, filter_type

def extract_massage_cards(html_content: str) -> List[Dict]:
    """HTML에서 massage-card 정보 추출"""
    cards = []
    
    # massage-card 패턴 찾기
    card_pattern = r'<div class="massage-card"[^>]*>.*?</div>\s*</div>\s*</a>'
    card_matches = re.finditer(card_pattern, html_content, re.DOTALL)
    
    for match in card_matches:
        card_html = match.group(0)
        
        # shop-name 추출
        name_match = re.search(r'<div class="shop-name">([^<]+)</div>', card_html)
        shop_name = name_match.group(1) if name_match else ''
        
        # greeting 추출
        greeting_match = re.search(r'<span>([^<]+)</span>', card_html)
        greeting = greeting_match.group(1) if greeting_match else ''
        
        # data-type 추출
        type_match = re.search(r'data-type="([^"]+)"', card_html)
        shop_type = type_match.group(1) if type_match else ''
        
        cards.append({
            'name': shop_name,
            'greeting': greeting,
            'type': shop_type
        })
    
    return cards

def generate_title(region: Optional[str], district: Optional[str], dong_station: Optional[str], filter_type: Optional[str]) -> str:
    """Title 생성"""
    parts = []
    
    if dong_station:
        # 동/역 이름 변환 (예: yongsan-station -> 용산역)
        dong_name = dong_station.replace('-', ' ').title()
        if 'station' in dong_station:
            dong_name = dong_station.replace('-station', '역').replace('-', '')
        elif 'dong' in dong_station:
            dong_name = dong_station.replace('-dong', '동').replace('-', '')
        
        if filter_type:
            filter_name = FILTER_NAMES.get(filter_type, filter_type)
            parts.append(f"{dong_name} {filter_name}")
        else:
            parts.append(f"{dong_name} 마사지")
    elif district:
        if filter_type:
            filter_name = FILTER_NAMES.get(filter_type, filter_type)
            parts.append(f"{district} {filter_name}")
        else:
            parts.append(f"{district} 마사지")
    elif region:
        if filter_type:
            filter_name = FILTER_NAMES.get(filter_type, filter_type)
            parts.append(f"{region} {filter_name}")
        else:
            parts.append(f"{region} 마사지")
    else:
        if filter_type:
            filter_name = FILTER_NAMES.get(filter_type, filter_type)
            parts.append(f"{filter_name} 추천")
        else:
            parts.append("마사지 추천")
    
    return f"best 샵 | {' '.join(parts)} 추천 BEST 샵"

def generate_description(cards: List[Dict], region: Optional[str], district: Optional[str], dong_station: Optional[str], filter_type: Optional[str]) -> str:
    """Description 생성"""
    keywords = []
    
    if dong_station:
        dong_name = dong_station.replace('-station', '역').replace('-dong', '동').replace('-', '')
        keywords.append(dong_name)
    if district:
        keywords.append(district)
    if region:
        keywords.append(region)
    if filter_type:
        keywords.append(FILTER_NAMES.get(filter_type, filter_type))
    
    keyword_str = ' '.join(keywords)
    
    if cards:
        shop_count = len(cards)
        shop_names = ', '.join([card['name'] for card in cards[:3]])
        
        desc = f"{keyword_str} BEST 샵 실시간 순위. {keyword_str} 인근 {shop_names} 등 {shop_count}개 업체 정보. "
        desc += f"{keyword_str} 가격 비교 및 후기 확인. "
        if region:
            desc += f"{region} 전지역 서비스 제공."
    else:
        desc = f"{keyword_str} BEST 샵 실시간 순위. {keyword_str} 마사지 가격 비교 및 후기 확인."
    
    return desc

def add_related_info_button(html_content: str) -> str:
    """filter-section에 관련정보 버튼 추가 - 테마보기 옆에 (type-filter-dropdown 밖)"""
    # 기존 관련정보 버튼 모두 제거 (어디에 있든)
    # 관련정보 버튼 패턴 찾기
    button_pattern = r'<button[^>]*id="relatedInfoBtn"[^>]*>.*?</button>'
    html_content = re.sub(button_pattern, '', html_content, flags=re.DOTALL)
    
    # type-filter-dropdown의 닫는 </div> 태그 다음에 관련정보 버튼 추가
    # 패턴: type-filter-dropdown의 전체 구조를 찾음
    # type-filter-dropdown > button + type-dropdown-menu 구조
    pattern = r'(<div class="type-filter-dropdown">.*?</div>\s*</div>\s*)'
    
    match = re.search(pattern, html_content, re.DOTALL)
    if match:
        # type-filter-dropdown의 닫는 태그 다음에 관련정보 버튼 추가
        # 들여쓰기는 8칸 (filter-container 안의 요소들)
        replacement = match.group(1) + '        <button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\n          관련정보\n        </button>'
        html_content = html_content.replace(match.group(0), replacement)
    else:
        # type-filter-dropdown이 없는 경우, filter-container의 마지막에 추가
        # filter-container 안의 마지막 요소 다음에 추가
        container_match = re.search(r'(<div class="filter-container">.*?)(</div>\s*</section>)', html_content, re.DOTALL)
        if container_match:
            container_content = container_match.group(1)
            # 마지막 요소 다음에 추가
            lines = container_content.rstrip().split('\n')
            # 마지막 비어있지 않은 줄의 들여쓰기 확인
            last_line = None
            for line in reversed(lines):
                if line.strip():
                    last_line = line
                    break
            
            if last_line:
                indent = ' ' * 8  # filter-container 안의 요소들은 8칸 들여쓰기
                button_html = f'{indent}<button class="filter-btn" id="relatedInfoBtn" style="cursor: pointer;">\n{indent}          관련정보\n{indent}        </button>'
                # 마지막에 추가
                new_container = container_content.rstrip() + '\n' + button_html
                html_content = html_content.replace(container_match.group(1), new_container)
    
    return html_content

def generate_modal_content(cards: List[Dict], region: Optional[str], district: Optional[str], dong_station: Optional[str], filter_type: Optional[str]) -> str:
    """관련정보 모달 내용 생성"""
    # 제목 생성
    title_parts = []
    if dong_station:
        dong_name = dong_station.replace('-station', '역').replace('-dong', '동').replace('-', '')
        title_parts.append(dong_name)
    elif district:
        title_parts.append(district)
    elif region:
        title_parts.append(region)
    
    if filter_type:
        title_parts.append(FILTER_NAMES.get(filter_type, filter_type))
    else:
        title_parts.append('마사지')
    
    modal_title = ' '.join(title_parts) + ' 관련정보'
    
    # 모달 내용 생성
    modal_html = f'''    <!-- 관련정보 모달 -->
    <div id="relatedInfoModal" class="modal" role="dialog" aria-labelledby="relatedInfoModalTitle" aria-hidden="true">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="relatedInfoModalTitle">{modal_title}</h2>
          <button class="modal-close" onclick="closeModal('relatedInfoModal')" aria-label="닫기">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="info-section">
            <h3>📍 {' '.join(title_parts)} 업체별 서비스 안내</h3>
'''
    
    # 업체별 소개
    for card in cards[:10]:  # 최대 10개만
        modal_html += f'''            <h4>{card['name']}</h4>
            <p>
              {card['name']}은(는) {', '.join([p for p in title_parts if p])} 주변으로 빠른 서비스를 제공합니다. 
              {card['greeting']} 전문 관리사들이 최상의 서비스를 제공합니다.
            </p>

'''
    
    modal_html += '''          </div>

          <div class="info-section">
            <h3>⭐ ''' + ' '.join(title_parts) + ''' 후기</h3>
            <p>
              ''' + ' '.join(title_parts) + '''을(를) 이용한 고객들은 편리한 접근성과 전문적인 서비스에 만족한다는 후기가 많습니다. 
              특히 주변 지역으로 빠른 방문 서비스를 제공받을 수 있어 비즈니스 여행객들과 주민들에게 인기가 높습니다.
            </p>
            <p>
              많은 고객들이 전문 관리사들의 친절한 서비스와 깔끔한 시설에 대해 긍정적인 평가를 남기고 있으며, 
              특히 다양한 서비스를 통해 원하는 장소에서 편안하게 마사지를 받을 수 있다는 점이 큰 장점으로 꼽힙니다.
            </p>
          </div>

          <div class="info-section">
            <h3>🗺️ 주변 지역 소개</h3>
            <p>
              ''' + ' '.join(title_parts) + ''' 주변은 주요 상업지역으로, 다양한 문화시설이 위치해 있습니다. 
              역세권의 편리한 접근성과 함께 전역으로 빠른 방문 서비스를 제공받을 수 있어 매우 편리합니다.
            </p>
            <p>
              주변 지역은 교통이 발달되어 있어 전지역으로 서비스를 제공하는 업체들이 많습니다. 
              특히 이 지역을 중심으로 한 지역은 서비스의 주요 수요 지역 중 하나로, 24시간 서비스를 제공하는 업체들이 활발히 운영하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
'''
    
    return modal_html

def add_modal_script(html_content: str) -> str:
    """모달 JavaScript 추가"""
    script = '''    <script>
      // 관련정보 버튼 클릭 이벤트 리스너
      document.addEventListener('DOMContentLoaded', function() {
        const relatedInfoBtn = document.getElementById('relatedInfoBtn');
        if (relatedInfoBtn) {
          relatedInfoBtn.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            const modal = document.getElementById('relatedInfoModal');
            if (modal) {
              modal.classList.add('active');
              modal.style.display = 'flex';
              modal.style.alignItems = 'flex-start';
              modal.style.justifyContent = 'center';
              modal.style.padding = '20px';
              modal.style.position = 'fixed';
              modal.style.top = '0';
              modal.style.left = '0';
              modal.style.width = '100%';
              modal.style.height = '100%';
              modal.style.background = 'rgba(0, 0, 0, 0.6)';
              modal.style.zIndex = '1000';
              document.body.style.overflow = 'hidden';
            }
          });
        }
      });

      // 모달 닫기 함수
      function closeModal(modalId) {
        try {
          const modal = document.getElementById(modalId);
          if (modal) {
            modal.classList.remove('active');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
          }
        } catch (error) {
          console.error('closeModal 오류:', error);
        }
      }

      if (typeof window !== 'undefined') {
        window.closeModal = closeModal;
      }
    </script>'''
    
    # </body> 태그 전에 스크립트 추가
    if '</body>' in html_content:
        html_content = html_content.replace('</body>', script + '\n  </body>')
    
    return html_content

def update_html_file(file_path: Path) -> bool:
    """HTML 파일 업데이트"""
    try:
        content = file_path.read_text(encoding='utf-8')
        
        # 파일 정보 추출
        region, district, dong_station, filter_type = extract_file_info(file_path.name)
        
        # massage-card 추출
        cards = extract_massage_cards(content)
        
        # Title 변경
        new_title = generate_title(region, district, dong_station, filter_type)
        title_pattern = r'<title>.*?</title>'
        if re.search(title_pattern, content):
            content = re.sub(title_pattern, f'<title>{new_title}</title>', content, flags=re.IGNORECASE)
        
        # Description 변경
        new_description = generate_description(cards, region, district, dong_station, filter_type)
        desc_pattern = r'<meta\s+name="description"\s+content="[^"]*"\s*/?>'
        if re.search(desc_pattern, content):
            content = re.sub(desc_pattern, f'<meta name="description" content="{new_description}" />', content, flags=re.IGNORECASE)
        
        # 관련정보 버튼 추가/수정 (이미 있으면 위치 확인 후 수정)
        content = add_related_info_button(content)
        
        # 관련정보 모달 추가 (이미 있으면 스킵)
        if 'id="relatedInfoModal"' not in content:
            modal_content = generate_modal_content(cards, region, district, dong_station, filter_type)
            # 이용약관 모달 전에 추가
            if '<!-- 이용약관 모달 -->' in content:
                content = content.replace('<!-- 이용약관 모달 -->', modal_content + '\n\n    <!-- 이용약관 모달 -->')
            elif '</body>' in content:
                content = content.replace('</body>', modal_content + '\n  </body>')
        
        # 모달 JavaScript 추가 (이미 있으면 스킵)
        if 'relatedInfoBtn.addEventListener' not in content:
            content = add_modal_script(content)
        
        file_path.write_text(content, encoding='utf-8')
        return True
        
    except Exception as e:
        print(f"  ❌ 오류: {e}")
        return False

def main():
    """메인 함수"""
    # 경로 확인 및 설정
    script_path = Path(__file__).resolve()
    script_dir = script_path.parent
    public_dir = script_dir / 'public'
    
    if not public_dir.exists():
        # 대체 경로 시도
        alt_public = Path('public')
        if alt_public.exists():
            public_dir = alt_public.resolve()
        else:
            print(f"ERROR: public 디렉터리를 찾을 수 없습니다.")
            print(f"  시도한 경로: {public_dir}")
            print(f"  스크립트 위치: {script_dir}")
            return
    
    print(f"Public 디렉터리: {public_dir}")
    
    # 모든 HTML 파일 찾기 (company-로 시작하는 파일 제외)
    html_files = [f for f in public_dir.glob('*.html') if not f.name.startswith('company-')]
    
    print(f"총 {len(html_files)}개 파일 처리 시작...\n")
    
    updated_count = 0
    skipped_count = 0
    error_count = 0
    
    for file_path in sorted(html_files):
        print(f"처리 중: {file_path.name}", end=' ... ')
        try:
            if update_html_file(file_path):
                updated_count += 1
                print("✅ 완료")
            else:
                skipped_count += 1
                print("⚠️ 스킵")
        except Exception as e:
            error_count += 1
            print(f"❌ 오류: {e}")
    
    print(f"\n[완료] 총 {len(html_files)}개 파일 중:")
    print(f"  ✅ 업데이트: {updated_count}개")
    print(f"  ⚠️ 스킵: {skipped_count}개")
    print(f"  ❌ 오류: {error_count}개")

if __name__ == '__main__':
    main()
