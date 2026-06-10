#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HTML 파일의 실시간 순위 날짜를 업데이트하는 스크립트
(2025년 11월 실시간 순위) → (2025년 12월 실시간 순위)
"""

import os
import re
from pathlib import Path

def update_ranking_date_in_file(file_path):
    """
    단일 HTML 파일의 실시간 순위 날짜를 업데이트
    
    Args:
        file_path: HTML 파일 경로
        
    Returns:
        bool: 변경 사항이 있으면 True, 없으면 False
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 원본 내용 백업
        original_content = content
        
        # (2025년 11월 실시간 순위) → (2025년 12월 실시간 순위) 변경
        # 다양한 패턴을 모두 처리
        patterns = [
            (r'\(2025년\s*11월\s*실시간\s*순위\)', '(2025년 12월 실시간 순위)'),
            (r'\(2025년11월실시간순위\)', '(2025년 12월 실시간 순위)'),
            (r'2025년\s*11월\s*실시간\s*순위', '2025년 12월 실시간 순위'),
        ]
        
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        # 변경 사항이 있으면 파일 저장
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"❌ 오류 발생 ({file_path}): {e}")
        return False

def update_all_html_files(directory):
    """
    지정된 디렉토리의 모든 HTML 파일 업데이트
    
    Args:
        directory: HTML 파일이 있는 디렉토리 경로
    """
    directory_path = Path(directory)
    
    if not directory_path.exists():
        print(f"❌ 디렉토리가 존재하지 않습니다: {directory}")
        return
    
    # HTML 파일 찾기
    html_files = list(directory_path.glob('*.html'))
    
    if not html_files:
        print(f"⚠️  HTML 파일을 찾을 수 없습니다: {directory}")
        return
    
    print(f"🔍 총 {len(html_files)}개의 HTML 파일을 찾았습니다.\n")
    
    updated_count = 0
    unchanged_count = 0
    
    for html_file in html_files:
        if update_ranking_date_in_file(html_file):
            print(f"✅ 업데이트 완료: {html_file.name}")
            updated_count += 1
        else:
            unchanged_count += 1
    
    print(f"\n" + "="*60)
    print(f"📊 작업 완료!")
    print(f"   - 업데이트된 파일: {updated_count}개")
    print(f"   - 변경 없는 파일: {unchanged_count}개")
    print(f"   - 총 파일 수: {len(html_files)}개")
    print("="*60)

def main():
    """
    메인 함수
    """
    # public 디렉토리 경로
    public_dir = os.path.join(os.path.dirname(__file__), 'public')
    
    print("="*60)
    print("  실시간 순위 날짜 업데이트 스크립트")
    print("  (2025년 11월 → 2025년 12월)")
    print("="*60)
    print()
    
    # HTML 파일 업데이트
    update_all_html_files(public_dir)
    
    print("\n✨ 모든 작업이 완료되었습니다!")

if __name__ == "__main__":
    main()

