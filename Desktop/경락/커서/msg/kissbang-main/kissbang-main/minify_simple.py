#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
간단한 CSS/JS 축소 스크립트 (Node.js 도구 없이 작동)
"""

import os
import re
from pathlib import Path

def minify_css_simple(input_file, output_file):
    """간단한 CSS 축소 (주석 제거, 공백 최소화)"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 주석 제거 (/* ... */)
        content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
        
        # 불필요한 공백 제거
        content = re.sub(r'\s+', ' ', content)
        content = re.sub(r'\s*{\s*', '{', content)
        content = re.sub(r'\s*}\s*', '}', content)
        content = re.sub(r'\s*;\s*', ';', content)
        content = re.sub(r'\s*:\s*', ':', content)
        content = re.sub(r'\s*,\s*', ',', content)
        content = re.sub(r'\s*>\s*', '>', content)
        content = re.sub(r'\s*\+\s*', '+', content)
        content = re.sub(r'\s*~\s*', '~', content)
        
        # 줄바꿈 제거
        content = content.replace('\n', '').replace('\r', '')
        
        # 앞뒤 공백 제거
        content = content.strip()
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = ((original_size - minified_size) / original_size) * 100
        
        print(f"CSS 축소 완료: {original_size:,}B -> {minified_size:,}B ({reduction:.1f}% 절감)")
        return True
    except Exception as e:
        print(f"CSS 축소 실패: {e}")
        return False

def minify_js_simple(input_file, output_file):
    """간단한 JS 축소 (주석 제거, 공백 최소화)"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 한 줄 주석 제거 (// ...)
        lines = content.split('\n')
        cleaned_lines = []
        in_multiline_comment = False
        
        for line in lines:
            # 여러 줄 주석 처리
            if '/*' in line:
                in_multiline_comment = True
                if '*/' in line:
                    in_multiline_comment = False
                    line = line.split('*/', 1)[1] if '*/' in line else ''
                else:
                    line = line.split('/*', 1)[0]
            
            if '*/' in line and in_multiline_comment:
                in_multiline_comment = False
                line = line.split('*/', 1)[1]
            
            if in_multiline_comment:
                continue
            
            # 한 줄 주석 제거
            if '//' in line:
                # 문자열 내부의 //는 제외
                in_string = False
                quote_char = None
                comment_pos = -1
                for i, char in enumerate(line):
                    if char in ['"', "'"] and (i == 0 or line[i-1] != '\\'):
                        if not in_string:
                            in_string = True
                            quote_char = char
                        elif char == quote_char:
                            in_string = False
                            quote_char = None
                    elif not in_string and char == '/' and i < len(line) - 1 and line[i+1] == '/':
                        comment_pos = i
                        break
                
                if comment_pos >= 0:
                    line = line[:comment_pos].rstrip()
            
            if line.strip():
                cleaned_lines.append(line.strip())
        
        content = ' '.join(cleaned_lines)
        
        # 불필요한 공백 제거 (연산자 주변은 유지)
        content = re.sub(r'\s+', ' ', content)
        content = re.sub(r'\s*{\s*', '{', content)
        content = re.sub(r'\s*}\s*', '}', content)
        content = re.sub(r'\s*;\s*', ';', content)
        content = re.sub(r'\s*,\s*', ',', content)
        content = re.sub(r'\s*\(\s*', '(', content)
        content = re.sub(r'\s*\)\s*', ')', content)
        
        # 줄바꿈 제거
        content = content.replace('\n', '').replace('\r', '')
        content = content.strip()
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = ((original_size - minified_size) / original_size) * 100
        
        print(f"JS 축소 완료: {original_size:,}B -> {minified_size:,}B ({reduction:.1f}% 절감)")
        return True
    except Exception as e:
        print(f"JS 축소 실패: {e}")
        return False

def update_html_files():
    """HTML 파일에서 축소된 파일로 경로 변경"""
    public_dir = Path('public')
    html_files = list(public_dir.glob('*.html'))
    
    updated = 0
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # CSS 경로 변경
            content = re.sub(
                r'href=["\']style\.css(\?v=[^"\']+)?["\']',
                r'href="style.min.css\1"',
                content
            )
            
            # JS 경로 변경
            content = re.sub(
                r'src=["\']script\.js(\?v=[^"\']+)?["\']',
                r'src="script.min.js\1"',
                content
            )
            content = re.sub(
                r'src=["\']common-components\.js(\?v=[^"\']+)?["\']',
                r'src="common-components.min.js\1"',
                content
            )
            
            if content != original_content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                updated += 1
                print(f"  {html_file.name} 업데이트됨")
        
        except Exception as e:
            print(f"  {html_file.name} 업데이트 실패: {e}")
    
    return updated

def main():
    print("=" * 60)
    print("CSS/JS 축소 (간단한 방법)")
    print("=" * 60)
    print()
    
    public_dir = Path('public')
    
    # CSS 축소
    print("1. CSS 파일 축소 중...")
    css_file = public_dir / 'style.css'
    css_min_file = public_dir / 'style.min.css'
    
    if css_file.exists():
        minify_css_simple(str(css_file), str(css_min_file))
    else:
        print(f"  {css_file}를 찾을 수 없습니다.")
    print()
    
    # JS 축소
    print("2. JavaScript 파일 축소 중...")
    js_files = [
        ('script.js', 'script.min.js'),
        ('common-components.js', 'common-components.min.js'),
    ]
    
    for js_file, js_min_file in js_files:
        js_path = public_dir / js_file
        js_min_path = public_dir / js_min_file
        
        if js_path.exists():
            minify_js_simple(str(js_path), str(js_min_path))
        else:
            print(f"  {js_path}를 찾을 수 없습니다.")
    print()
    
    # HTML 파일 업데이트
    print("3. HTML 파일 업데이트 중...")
    updated = update_html_files()
    print(f"  총 {updated}개 파일 업데이트 완료")
    print()
    
    print("=" * 60)
    print("축소 완료!")
    print("=" * 60)
    print("\n다음 단계:")
    print("1. 축소된 파일을 테스트하세요")
    print("2. 모든 페이지가 정상 작동하는지 확인하세요")
    print("3. 성능 테스트를 다시 실행하세요")
    print("\n참고: 더 나은 압축을 원하면 온라인 도구 사용:")
    print("https://www.minifier.org/")

if __name__ == '__main__':
    main()

