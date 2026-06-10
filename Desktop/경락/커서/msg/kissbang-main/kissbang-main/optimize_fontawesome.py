#!/usr/bin/env python3
"""
Font Awesome 최적화: 필요한 아이콘만 SVG로 대체
"""

import os
import re
from pathlib import Path

# Font Awesome 아이콘을 SVG로 대체하는 매핑
ICON_SVG_MAP = {
    'fa-spa': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z"/><path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"/></svg>''',
    
    'fa-search': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>''',
    
    'fa-bars': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>''',
    
    'fa-times': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="20" height="20" fill="currentColor"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>''',
    
    'fa-chevron-right': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>''',
    
    'fa-chevron-down': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>''',
    
    'fa-bullhorn': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M480 32c0-11.09-5.75-21.37-15.17-27.22C460.4 1.703 450.2 0 440 0c-7.031 0-14.12 2.016-20.28 6.25C390.1 14.5 384 26.75 384 40v8L32 192v-48c0-17.67-14.33-32-32-32S0 126.3 0 144v224c0 17.67 14.33 32 32 32s32-14.33 32-32v-48l352 144v8c0 13.25 6.047 25.5 15.72 33.75C409.9 509.1 417 512 424 512c10.2 0 20.4-1.703 24.83-4.781C458.2 501.4 464 491.1 464 480V32h16z"/></svg>''',
    
    'fa-gift': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.2 0H278.8c51.5-76.7 66.2-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>''',
    
    'fa-sign-out-alt': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/></svg>''',
    
    'fa-cog': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 209c1.1 1.2 2.1 2.6 2.1 4.2 0 1.5-1 2.9-2.1 4.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.6-11.2-5.5-14zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>''',
}

def replace_fontawesome_with_svg(content):
    """Font Awesome 아이콘을 SVG로 대체"""
    # <i class="fas fa-xxx"></i> 패턴 찾기
    pattern = r'<i\s+class="[^"]*fa-([a-z-]+)[^"]*"></i>'
    
    def replace_icon(match):
        icon_class = match.group(1)
        icon_name = f'fa-{icon_class}'
        
        if icon_name in ICON_SVG_MAP:
            svg = ICON_SVG_MAP[icon_name]
            # 원래 클래스 속성 유지 (스타일링용)
            classes = match.group(0).split('class="')[1].split('"')[0]
            return f'<span class="{classes}" style="display:inline-block;vertical-align:middle;">{svg}</span>'
        return match.group(0)  # 매핑이 없으면 원본 유지
    
    return re.sub(pattern, replace_icon, content)

def remove_fontawesome_cdn(content):
    """Font Awesome CDN 링크 제거"""
    patterns = [
        r'<link[^>]*font-awesome[^>]*>',
        r'<link[^>]*cdnjs\.cloudflare\.com/ajax/libs/font-awesome[^>]*>',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.IGNORECASE)
    
    return content

def optimize_html_file(filepath):
    """HTML 파일 최적화"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Font Awesome 아이콘을 SVG로 대체
        content = replace_fontawesome_with_svg(content)
        
        # Font Awesome CDN 제거 (선택사항 - 주석 처리)
        # content = remove_fontawesome_cdn(content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    
    except Exception as e:
        print(f"✗ {filepath} 처리 실패: {e}")
        return False

def main():
    """메인 함수"""
    print("=" * 60)
    print("Font Awesome 최적화: SVG 아이콘으로 대체")
    print("=" * 60)
    print()
    
    public_dir = Path('public')
    html_files = list(public_dir.glob('*.html'))
    
    updated = 0
    for html_file in html_files:
        if optimize_html_file(html_file):
            print(f"✓ {html_file.name} 최적화 완료")
            updated += 1
    
    print()
    print("=" * 60)
    print(f"총 {updated}개 파일 최적화 완료")
    print("=" * 60)
    print("\n주의사항:")
    print("1. Font Awesome CDN을 제거하면 SVG 아이콘만 사용됩니다")
    print("2. 모든 페이지를 테스트하여 아이콘이 정상 표시되는지 확인하세요")
    print("3. 필요시 Font Awesome CDN을 다시 추가할 수 있습니다")

if __name__ == '__main__':
    main()

