#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 HTML 파일에서 "name": "massageList"를 포함한 JSON-LD 스키마 블록을 제거하는 스크립트
"""
import os
import re

def remove_massagelist_schema(filepath):
    """파일에서 "massageList" 스키마 블록 제거"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # "name": "massageList"를 포함한 스크립트 블록 제거
        # <script type="application/ld+json">부터 </script>까지
        pattern = r'<script\s+type=["\']application/ld\+json["\'][^>]*>.*?"name":\s*"massageList".*?</script>\s*'
        
        new_content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        
        if new_content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """메인 함수"""
    # public 디렉토리 경로
    public_dir = os.path.join('kissbang-main', 'kissbang-main', 'public')
    
    # 제외할 파일 목록
    exclude_files = {'index.html', 'users-management.html'}
    
    # 모든 HTML 파일 찾기
    html_files = []
    for filename in os.listdir(public_dir):
        if filename.endswith('.html') and filename not in exclude_files:
            html_files.append(os.path.join(public_dir, filename))
    
    print(f"Found {len(html_files)} HTML files (excluding index.html, users-management.html)")
    print("Processing files...\n")
    
    removed_count = 0
    processed_count = 0
    
    for filepath in sorted(html_files):
        processed_count += 1
        if remove_massagelist_schema(filepath):
            removed_count += 1
            filename = os.path.basename(filepath)
            if removed_count <= 20:  # 처음 20개만 출력
                print(f"✓ Removed massageList schema from: {filename}")
        
        # 진행 상황 표시 (100개마다)
        if processed_count % 100 == 0:
            print(f"Processed {processed_count}/{len(html_files)} files...")
    
    if removed_count > 20:
        print(f"... and {removed_count - 20} more files")
    
    print(f"\n{'='*60}")
    print(f"Done! Removed massageList schema from {removed_count} files")
    print(f"Processed {processed_count} files total")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()

