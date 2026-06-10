#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 company-*.html 파일에서 JSON-LD 스키마 부분을 제거하는 스크립트
"""
import os
import re

def remove_schema_from_file(filepath):
    """파일에서 스키마 부분을 제거"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 스키마 부분 찾기 (주석 포함)
        # 패턴 1: <!-- 구조화된 데이터 --> + <!-- Breadcrumb Schema --> + script
        pattern1 = r'<!--\s*구조화된\s*데이터[^-]*?-->.*?<!--\s*Breadcrumb\s*Schema\s*-->.*?<script\s+type=["\']application/ld\+json["\']>.*?</script>\s*'
        # 패턴 2: <!-- 구조화된 데이터 --> + script (Breadcrumb 없음)
        pattern2 = r'<!--\s*구조화된\s*데이터[^-]*?-->.*?<script\s+type=["\']application/ld\+json["\']>.*?</script>\s*'
        
        # 여러 줄에 걸쳐 매칭 (DOTALL 모드)
        content = re.sub(pattern1, '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(pattern2, '', content, flags=re.DOTALL | re.IGNORECASE)
        
        # 변경사항이 있었는지 확인
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """메인 함수"""
    # 여러 가능한 경로 시도
    possible_paths = [
        os.path.join('kissbang-main', 'kissbang-main', 'public'),
        os.path.join(os.path.dirname(__file__), 'kissbang-main', 'kissbang-main', 'public'),
        'public',
    ]
    
    public_dir = None
    for path in possible_paths:
        if os.path.exists(path):
            public_dir = path
            break
    
    if not public_dir:
        print(f"Directory not found. Tried: {possible_paths}")
        print(f"Current directory: {os.getcwd()}")
        return
    
    # company-*.html 파일들 찾기
    html_files = [f for f in os.listdir(public_dir) if f.startswith('company-') and f.endswith('.html')]
    
    print(f"Found {len(html_files)} HTML files")
    
    removed_count = 0
    for filename in html_files:
        filepath = os.path.join(public_dir, filename)
        if remove_schema_from_file(filepath):
            removed_count += 1
            print(f"Removed schema from: {filename}")
    
    print(f"\nDone! Removed schema from {removed_count} files.")

if __name__ == '__main__':
    main()

