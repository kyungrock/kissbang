#!/usr/bin/env python3
"""
CSS/JS 축소 및 Font Awesome 최적화 스크립트
"""

import os
import re
import subprocess
import sys
from pathlib import Path

# 사용되는 Font Awesome 아이콘 목록
USED_ICONS = [
    'fa-spa',           # 로고
    'fa-search',         # 검색
    'fa-bars',           # 햄버거 메뉴
    'fa-times',          # 닫기
    'fa-chevron-right',  # 화살표
    'fa-chevron-down',   # 드롭다운
    'fa-bullhorn',       # 공지사항
    'fa-gift',           # 이벤트
    'fa-sign-out-alt',   # 로그아웃
    'fa-cog',            # 관리자
    'fa-map-marker-alt', # 위치
    'fa-building',       # 건물
    'fa-heart',          # 좋아요
]

def check_dependencies():
    """필요한 도구가 설치되어 있는지 확인"""
    tools = {
        'cleancss': 'clean-css-cli',
        'terser': 'terser'
    }
    
    missing = []
    for tool, package in tools.items():
        try:
            subprocess.run([tool, '--version'], 
                         capture_output=True, 
                         check=True)
            print(f"✓ {tool} 설치됨")
        except (subprocess.CalledProcessError, FileNotFoundError):
            missing.append((tool, package))
            print(f"✗ {tool} 미설치")
    
    if missing:
        print("\n필요한 도구를 설치하세요:")
        print("npm install -g clean-css-cli terser")
        print("\n또는 온라인 도구를 사용하세요:")
        print("https://www.minifier.org/")
        return False
    return True

def minify_css(input_file, output_file):
    """CSS 파일 축소"""
    try:
        subprocess.run([
            'cleancss',
            '-o', output_file,
            input_file
        ], check=True, capture_output=True)
        
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = ((original_size - minified_size) / original_size) * 100
        
        print(f"✓ CSS 축소 완료: {original_size:,}B → {minified_size:,}B ({reduction:.1f}% 절감)")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ CSS 축소 실패: {e}")
        return False
    except FileNotFoundError:
        print("✗ cleancss를 찾을 수 없습니다. npm install -g clean-css-cli")
        return False

def minify_js(input_file, output_file):
    """JavaScript 파일 축소"""
    try:
        subprocess.run([
            'terser',
            input_file,
            '-o', output_file,
            '-c',  # 압축
            '-m',  # 난독화
        ], check=True, capture_output=True)
        
        original_size = os.path.getsize(input_file)
        minified_size = os.path.getsize(output_file)
        reduction = ((original_size - minified_size) / original_size) * 100
        
        print(f"✓ JS 축소 완료: {original_size:,}B → {minified_size:,}B ({reduction:.1f}% 절감)")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ JS 축소 실패: {e}")
        return False
    except FileNotFoundError:
        print("✗ terser를 찾을 수 없습니다. npm install -g terser")
        return False

def create_fontawesome_svg_icons():
    """Font Awesome 아이콘을 SVG로 대체하는 스크립트 생성"""
    svg_icons = {
        'fa-spa': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z"/><path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"/></svg>',
        'fa-search': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>',
        'fa-bars': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>',
        'fa-times': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="20" height="20"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>',
    }
    
    # SVG 아이콘 파일 생성
    icons_dir = Path('public/icons')
    icons_dir.mkdir(exist_ok=True)
    
    for icon_name, svg_content in svg_icons.items():
        icon_file = icons_dir / f"{icon_name.replace('fa-', '')}.svg"
        with open(icon_file, 'w', encoding='utf-8') as f:
            f.write(svg_content)
    
    print(f"✓ SVG 아이콘 {len(svg_icons)}개 생성 완료: {icons_dir}")
    return True

def update_html_for_minified_files():
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
                print(f"✓ {html_file.name} 업데이트됨")
        
        except Exception as e:
            print(f"✗ {html_file.name} 업데이트 실패: {e}")
    
    print(f"\n✓ 총 {updated}개 HTML 파일 업데이트 완료")
    return updated > 0

def main():
    """메인 함수"""
    print("=" * 60)
    print("CSS/JS 축소 및 Font Awesome 최적화")
    print("=" * 60)
    print()
    
    public_dir = Path('public')
    
    # 1. CSS 축소
    print("1. CSS 파일 축소 중...")
    css_file = public_dir / 'style.css'
    css_min_file = public_dir / 'style.min.css'
    
    if css_file.exists():
        if minify_css(str(css_file), str(css_min_file)):
            print(f"   → {css_min_file} 생성 완료\n")
    else:
        print(f"✗ {css_file}를 찾을 수 없습니다.\n")
    
    # 2. JS 축소
    print("2. JavaScript 파일 축소 중...")
    js_files = [
        ('script.js', 'script.min.js'),
        ('common-components.js', 'common-components.min.js'),
    ]
    
    for js_file, js_min_file in js_files:
        js_path = public_dir / js_file
        js_min_path = public_dir / js_min_file
        
        if js_path.exists():
            if minify_js(str(js_path), str(js_min_path)):
                print(f"   → {js_min_path} 생성 완료")
        else:
            print(f"✗ {js_path}를 찾을 수 없습니다.")
    print()
    
    # 3. Font Awesome SVG 아이콘 생성
    print("3. Font Awesome SVG 아이콘 생성 중...")
    create_fontawesome_svg_icons()
    print()
    
    # 4. HTML 파일 업데이트
    print("4. HTML 파일 업데이트 중...")
    update_html_for_minified_files()
    print()
    
    print("=" * 60)
    print("최적화 완료!")
    print("=" * 60)
    print("\n다음 단계:")
    print("1. 축소된 파일을 테스트하세요")
    print("2. 모든 페이지가 정상 작동하는지 확인하세요")
    print("3. 성능 테스트를 다시 실행하세요")

if __name__ == '__main__':
    main()

