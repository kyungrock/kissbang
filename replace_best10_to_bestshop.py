#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 HTML 파일에서 "BEST 10"을 "BEST 샵"으로 변경
"""
import sys
import re
from pathlib import Path

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = Path(__file__).parent.absolute()

def replace_best10_to_bestshop(content):
    """BEST 10을 BEST 샵으로 변경"""
    original_content = content
    modified = False
    
    # "BEST 10" 또는 "BEST10" 패턴 찾기 (대소문자 구분 없이)
    # 공백이 있을 수도 있고 없을 수도 있음
    patterns = [
        (r'BEST\s*10', 'BEST 샵'),
        (r'BEST10', 'BEST 샵'),
    ]
    
    new_content = content
    for pattern, replacement in patterns:
        new_content, count = re.subn(pattern, replacement, new_content, flags=re.IGNORECASE)
        if count > 0:
            modified = True
    
    return new_content, modified

def process_html_file(html_file):
    """HTML 파일 처리"""
    try:
        content = html_file.read_text(encoding='utf-8')
        new_content, modified = replace_best10_to_bestshop(content)
        
        if modified:
            html_file.write_text(new_content, encoding='utf-8')
            return True
        return False
    except Exception as e:
        print(f"  ❌ 오류 발생: {html_file.name} 처리 중 오류: {e}")
        return False

def main():
    print("=" * 60)
    print("모든 HTML 파일에서 'BEST 10'을 'BEST 샵'으로 변경 스크립트")
    print("=" * 60)
    
    public_dir = SCRIPT_DIR / 'public'
    if not public_dir.exists():
        print(f"ERROR: {public_dir} 디렉토리를 찾을 수 없습니다.")
        return
    
    html_files = list(public_dir.glob('*.html'))
    print(f"\n총 {len(html_files)}개 HTML 파일 발견")
    
    modified_count = 0
    
    for html_file in sorted(html_files):
        if process_html_file(html_file):
            modified_count += 1
            print(f"  ✅ {html_file.name}: 수정 완료")
    
    print(f"\n완료: {modified_count}개 파일 수정됨")

if __name__ == '__main__':
    main()

