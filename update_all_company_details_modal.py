#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 company HTML 파일에 detailsModal 모달과 openDetailsModal 함수 추가
"""

import re
from pathlib import Path

# detailsModal HTML 템플릿
DETAILS_MODAL = '''    <!-- 상세 정보 모달 -->
    <div
      id="detailsModal"
      class="modal"
      role="dialog"
      aria-labelledby="detailsModalTitle"
      aria-hidden="true"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="detailsModalTitle">서비스 필터 전체 보기</h2>
          <button
            class="modal-close"
            onclick="closeModal('detailsModal')"
            aria-label="닫기"
          >
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="terms-section">
            <h3>서비스 필터 전체 보기</h3>
            <div class="filter-links-container" style="margin-top: 20px;">
              <p>필터 링크를 생성하는 중...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
'''

# openDetailsModal 함수 템플릿
OPEN_DETAILS_MODAL_FUNC = '''      function openDetailsModal(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }

        const modal = document.getElementById('detailsModal');
        if (!modal) {
          console.error('detailsModal을 찾을 수 없습니다.');
          alert('모달을 찾을 수 없습니다. 페이지를 새로고침해주세요.');
          return;
        }

        // script.js의 openDetailsModal 함수가 있으면 사용
        if (typeof window.openDetailsModal === 'function' && window.openDetailsModal !== openDetailsModal) {
          window.openDetailsModal(event);
          return;
        }

        // 로컬 모달 표시
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
'''

def update_company_file(file_path):
    """각 company HTML 파일을 업데이트"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 이미 detailsModal이 있으면 스킵
        if 'id="detailsModal"' in content:
            print(f"[SKIP] {file_path.name} - 이미 detailsModal이 있습니다.")
            return 'skipped'
        
        modified = False
        
        # 1. detailsModal 추가 (이용약관 모달 다음 또는 script 태그 전)
        if '</div>\n    </div>\n\n    <script>' in content:
            # 이용약관 모달 다음에 추가
            content = content.replace('</div>\n    </div>\n\n    <script>', 
                                     f'</div>\n    </div>\n\n{DETAILS_MODAL}\n    <script>')
            modified = True
        elif '</div>\n      </div>\n    </div>\n\n    <script>' in content:
            content = content.replace('</div>\n      </div>\n    </div>\n\n    <script>',
                                     f'</div>\n      </div>\n    </div>\n\n{DETAILS_MODAL}\n    <script>')
            modified = True
        elif '</div>\n    </div>\n    <script>' in content:
            content = content.replace('</div>\n    </div>\n    <script>',
                                     f'</div>\n    </div>\n{DETAILS_MODAL}\n    <script>')
            modified = True
        
        # 2. openDetailsModal 함수 추가 (closeModal 함수 전에)
        if 'function openDetailsModal' not in content:
            if 'function closeModal(' in content:
                content = content.replace('function closeModal(',
                                        f'{OPEN_DETAILS_MODAL_FUNC}\n\n      function closeModal(')
                modified = True
            elif 'function openAboutModal(' in content:
                content = content.replace('function openAboutModal(',
                                        f'{OPEN_DETAILS_MODAL_FUNC}\n\n      function openAboutModal(')
                modified = True
            elif 'function shareShop(' in content:
                # shareShop 함수 다음에 추가
                share_shop_end = content.find('function shareShop(')
                if share_shop_end != -1:
                    # 함수 끝 찾기
                    brace_count = 0
                    func_end = share_shop_end
                    in_func = False
                    for i in range(share_shop_end, len(content)):
                        if content[i] == '{':
                            brace_count += 1
                            in_func = True
                        elif content[i] == '}':
                            brace_count -= 1
                            if in_func and brace_count == 0:
                                func_end = i + 1
                                break
                    content = content[:func_end] + '\n\n' + OPEN_DETAILS_MODAL_FUNC + content[func_end:]
                    modified = True
        
        # 3. footer 링크에 onclick 추가 (새로운 양식인 경우)
        if 'onclick="openDetailsModal(event)"' not in content:
            # footer-link 클래스를 가진 링크 찾기
            footer_link_pattern = r'(<a href="#" class="footer-link"[^>]*>)(.*?정보)(</a>)'
            def add_onclick(match):
                if 'onclick' not in match.group(0):
                    return f'<a href="#" class="footer-link" onclick="openDetailsModal(event)">{match.group(2)}{match.group(3)}'
                return match.group(0)
            
            content = re.sub(footer_link_pattern, add_onclick, content)
            
            # 기존 양식의 링크도 수정
            old_link_pattern = r'(<a href="[^"]*-info\.html"[^>]*>)(.*?정보)(</a>)'
            def update_old_link(match):
                return f'<a href="#" class="footer-link" onclick="openDetailsModal(event)">{match.group(2)}{match.group(3)}'
            
            content = re.sub(old_link_pattern, update_old_link, content)
            modified = True
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[OK] {file_path.name} - 업데이트 완료")
            return 'updated'
        else:
            print(f"[WARN] {file_path.name} - 수정할 내용이 없습니다.")
            return 'no_change'
        
    except Exception as e:
        print(f"[ERROR] {file_path.name} - 오류: {e}")
        import traceback
        traceback.print_exc()
        return 'error'

def main():
    """메인 함수"""
    # 스크립트 파일의 절대 경로 찾기
    script_file = Path(__file__).resolve()
    script_dir = script_file.parent
    
    # public 디렉토리 찾기
    public_dir = script_dir / 'public'
    if not public_dir.exists():
        # 상위 디렉토리에서 찾기
        public_dir = script_dir.parent / 'public'
        if not public_dir.exists():
            print(f"오류: public 디렉토리를 찾을 수 없습니다.")
            print(f"  시도한 경로: {script_dir / 'public'}")
            print(f"  시도한 경로: {script_dir.parent / 'public'}")
            return
    
    company_files = sorted(list(public_dir.glob('company-*.html')))
    
    print(f"총 {len(company_files)}개의 company HTML 파일을 찾았습니다.\n")
    
    stats = {'updated': 0, 'skipped': 0, 'no_change': 0, 'error': 0}
    
    for file_path in company_files:
        result = update_company_file(file_path)
        if result in stats:
            stats[result] += 1
    
    print(f"\n완료:")
    print(f"  - 업데이트: {stats['updated']}개")
    print(f"  - 스킵 (이미 있음): {stats['skipped']}개")
    print(f"  - 변경 없음: {stats['no_change']}개")
    print(f"  - 오류: {stats['error']}개")

if __name__ == '__main__':
    main()
