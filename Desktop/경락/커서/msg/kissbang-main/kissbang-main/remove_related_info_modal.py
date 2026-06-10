#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 HTML 파일에서 relatedInfoModal 모달과 info-btn 버튼을 제거하는 스크립트
"""
import sys
import re
from pathlib import Path

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# 스크립트 파일의 디렉토리 경로 (스크립트 위치 기준)
SCRIPT_DIR = Path(__file__).parent.absolute()

def remove_related_info_modal(content):
    """relatedInfoModal 모달 제거"""
    # relatedInfoModal div 시작 태그 찾기 (주석이 있으면 주석부터, 없으면 div부터)
    comment_pattern = r'<!--\s*관련정보\s*모달\s*-->'
    comment_match = re.search(comment_pattern, content, re.IGNORECASE)
    
    modal_start_pattern = r'<div[^>]*id=["\']relatedInfoModal["\'][^>]*>'
    modal_match = re.search(modal_start_pattern, content, re.IGNORECASE)
    
    if not modal_match:
        return content, False
    
    # 주석이 있으면 주석부터, 없으면 div부터 시작
    if comment_match and comment_match.start() < modal_match.start():
        start_pos = comment_match.start()
    else:
        start_pos = modal_match.start()
    
    # 시작 위치부터 끝까지의 텍스트
    remaining = content[start_pos:]
    
    # relatedInfoModal div 시작 태그 찾기
    modal_start_match = re.search(modal_start_pattern, remaining, re.IGNORECASE)
    
    if not modal_start_match:
        return content, False
    
    # modal div 시작 위치 (remaining 기준)
    modal_start_idx = modal_start_match.end()
    div_count = 1  # relatedInfoModal div 시작
    
    # div 태그 카운팅으로 끝 찾기
    i = modal_start_idx
    end_pos_in_remaining = -1
    
    while i < len(remaining):
        # <div 시작 태그 찾기
        if i + 4 <= len(remaining) and remaining[i:i+4].lower() == '<div':
            tag_end = remaining.find('>', i)
            if tag_end > i:
                # self-closing이 아닌 경우
                if remaining[tag_end-1] != '/':
                    div_count += 1
                i = tag_end + 1
            else:
                i += 1
        # </div> 닫는 태그 찾기
        elif i + 6 <= len(remaining) and remaining[i:i+6].lower() == '</div>':
            div_count -= 1
            if div_count == 0:
                end_pos_in_remaining = i + 6
                break
            i += 6
        else:
            i += 1
    
    if end_pos_in_remaining > 0:
        # 전체 제거 범위 계산
        # 주석 앞의 줄바꿈까지 포함하여 제거
        before_start = content[:start_pos]
        last_newline = before_start.rfind('\n')
        if last_newline >= 0:
            # 줄바꿈 바로 다음부터 시작
            actual_start = last_newline + 1
        else:
            actual_start = start_pos
        
        # 끝 위치 (start_pos 기준으로 변환)
        actual_end = start_pos + end_pos_in_remaining
        
        # 끝 위치 뒤의 줄바꿈도 확인
        after_end = content[actual_end:]
        first_newline = after_end.find('\n')
        if first_newline >= 0:
            actual_end = actual_end + first_newline + 1
        
        # 모달 전체 제거
        new_content = content[:actual_start] + content[actual_end:]
        return new_content, True
    
    return content, False

def remove_info_btn(content):
    """info-btn 버튼 제거"""
    # info-btn 버튼 패턴 찾기
    # <button class="info-btn" ...> 관련정보 </button>
    # 여러 줄에 걸쳐 있을 수 있음
    pattern = r'<button[^>]*class=["\'][^"]*info-btn[^"]*["\'][^>]*>.*?관련정보.*?</button>'
    
    new_content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # 제거 여부 확인
    removed = new_content != content
    
    return new_content, removed

def process_html_file(html_file):
    """HTML 파일 처리"""
    try:
        content = html_file.read_text(encoding='utf-8')
        modified = False
        
        # relatedInfoModal 모달 제거
        new_content, removed_modal = remove_related_info_modal(content)
        if removed_modal:
            content = new_content
            modified = True
        
        # info-btn 버튼 제거
        new_content, removed_btn = remove_info_btn(content)
        if removed_btn:
            content = new_content
            modified = True
        
        if modified:
            html_file.write_text(content, encoding='utf-8')
            return True, removed_modal, removed_btn
        return False, False, False
    except Exception as e:
        print(f"  ❌ 오류 발생: {e}")
        return False, False, False

def main():
    """메인 함수"""
    print("=" * 60)
    print("relatedInfoModal 모달 및 info-btn 버튼 제거 스크립트")
    print("=" * 60)
    
    public_dir = SCRIPT_DIR / 'public'
    if not public_dir.exists():
        print(f"ERROR: {public_dir} 디렉토리를 찾을 수 없습니다.")
        return
    
    # 모든 HTML 파일 찾기
    html_files = list(public_dir.glob('*.html'))
    print(f"\n총 {len(html_files)}개 HTML 파일 발견")
    
    success_count = 0
    modal_count = 0
    btn_count = 0
    
    for html_file in sorted(html_files):
        result, removed_modal, removed_btn = process_html_file(html_file)
        if result:
            messages = []
            if removed_modal:
                messages.append("relatedInfoModal")
                modal_count += 1
            if removed_btn:
                messages.append("info-btn")
                btn_count += 1
            if messages:
                print(f"  ✅ {html_file.name}: {', '.join(messages)} 제거 완료")
                success_count += 1
    
    print(f"\n완료:")
    print(f"  - {success_count}개 파일 수정됨")
    print(f"  - {modal_count}개 파일에서 relatedInfoModal 제거됨")
    print(f"  - {btn_count}개 파일에서 info-btn 버튼 제거됨")

if __name__ == '__main__':
    main()

