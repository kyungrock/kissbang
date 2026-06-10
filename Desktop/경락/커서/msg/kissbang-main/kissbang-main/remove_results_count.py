#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
모든 HTML 파일에서 resultsCount 요소 제거
"""
import re
from pathlib import Path

# 스크립트 파일의 디렉토리 경로
SCRIPT_DIR = Path(__file__).parent.absolute()

def remove_results_count(html_file):
    """HTML 파일에서 resultsCount 요소 제거"""
    content = html_file.read_text(encoding='utf-8')
    original_content = content
    
    # resultsCount 요소 제거 (여러 패턴 처리)
    # 패턴 1: id="resultsCount" class="results-count"
    content = re.sub(
        r'<span[^>]*id=["\']resultsCount["\'][^>]*class=["\']results-count["\'][^>]*>.*?</span>',
        '',
        content,
        flags=re.DOTALL
    )
    # 패턴 2: id="resultsCount"만 있는 경우
    content = re.sub(
        r'<span[^>]*id=["\']resultsCount["\'][^>]*>.*?</span>',
        '',
        content,
        flags=re.DOTALL
    )
    # 패턴 3: class="results-count"만 있는 경우
    content = re.sub(
        r'<span[^>]*class=["\']results-count["\'][^>]*>.*?</span>',
        '',
        content,
        flags=re.DOTALL
    )
    
    if content != original_content:
        html_file.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    print("=" * 60)
    print("HTML 파일에서 resultsCount 요소 제거")
    print("=" * 60)
    
    # public 디렉토리의 모든 HTML 파일 찾기
    public_dir = SCRIPT_DIR / 'public'
    if not public_dir.exists():
        print(f"⚠️ {public_dir} 디렉토리를 찾을 수 없습니다.")
        return
    
    html_files = list(public_dir.glob('*.html'))
    print(f"\n{len(html_files)}개 HTML 파일 발견")
    
    # 각 HTML 파일 처리
    removed_count = 0
    for html_file in html_files:
        if remove_results_count(html_file):
            removed_count += 1
    
    print(f"\n처리 완료: {removed_count}개 파일에서 resultsCount 제거됨")
    print("=" * 60)

if __name__ == '__main__':
    main()

