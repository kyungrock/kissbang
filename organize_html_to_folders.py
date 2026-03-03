#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
public/ 폴더의 모든 HTML 파일을 지역별 폴더 구조로 변환하는 스크립트

예시:
- public/seoul-gangnam.html → seoul/gangnam/index.html
- public/busan-bukgu.html → busan/bukgu/index.html
- public/busan-bukgu-deokcheon-dong.html → busan/bukgu/deokcheon-dong/index.html
"""

import os
import shutil
import re
from pathlib import Path

# 경로 설정
script_path = Path(__file__).resolve()
BASE_DIR = script_path.parent
PUBLIC_DIR = BASE_DIR / "public"

print(f"BASE_DIR: {BASE_DIR}")
print(f"PUBLIC_DIR: {PUBLIC_DIR} (exists: {PUBLIC_DIR.exists()})")
print()

if not PUBLIC_DIR.exists():
    print(f"오류: {PUBLIC_DIR} 폴더를 찾을 수 없습니다.")
    exit(1)

# 지역 매핑 (한글 → 영문)
REGION_MAP = {
    'seoul': 'seoul',
    'busan': 'busan',
    'daegu': 'daegu',
    'incheon': 'incheon',
    'gyeonggi': 'gyeonggi',
    'daejeon': 'daejeon',
    'gwangju': 'gwangju',
    'ulsan': 'ulsan',
    'jeju': 'jeju',
    'gangwon': 'gangwon',
    'chungbuk': 'chungbuk',
    'chungnam': 'chungnam',
    'jeonbuk': 'jeonbuk',
    'jeonnam': 'jeonnam',
    'gyeongbuk': 'gyeongbuk',
    'gyeongnam': 'gyeongnam',
    'sejong': 'sejong',
}

def parse_filename(filename):
    """파일명을 파싱하여 지역/구/동 구조로 변환"""
    # .html 제거
    name = filename.replace('.html', '')

    # 특수 파일 제외
    if name in ['index', 'admin', 'aroma']:
        return None

    # company- 접두사 제거
    if name.startswith('company-'):
        name = name.replace('company-', '', 1)

    # 하이픈으로 분리
    parts = name.split('-')

    if len(parts) < 2:
        return None

    region = parts[0]
    if region not in REGION_MAP:
        return None

    # 지역 폴더
    region_folder = REGION_MAP[region]

    # 나머지 부분 (구, 동, 역 등)
    rest = parts[1:]

    # 서비스 타입 제거 (aroma, massage, thai, swedish, foot, outcall, spa, chinese, waxing)
    service_types = ['aroma', 'massage', 'thai', 'swedish', 'foot', 'outcall', 'spa', 'chinese', 'waxing']

    # 서비스 타입이 마지막에 있는 경우 제거
    if rest and rest[-1] in service_types:
        rest = rest[:-1]

    return {
        'region': region_folder,
        'path_parts': rest,
        'original_name': name
    }

def update_html_paths(file_path, depth, new_url_path):
    """HTML 파일의 경로를 새로운 구조에 맞게 수정"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # depth에 따라 상대 경로 계산
    # depth 0: seoul/ (../css)
    # depth 1: seoul/gangnam/ (../../css)
    # depth 2: seoul/gangnam/xxx/ (../../../css)

    prefix = '../' * depth if depth > 0 else ''

    # CSS 경로 수정
    content = re.sub(r'href=["\']style\.css([^"\']*)', rf'href="{prefix}css/style.css\1', content)
    content = re.sub(r'href=["\']\./style\.css([^"\']*)', rf'href="{prefix}css/style.css\1', content)

    # JS 경로 수정
    js_files = ['script.js', 'detail.js', 'common-components.js', 'common-components.min.js',
                'shop-card-data.js', 'shop-manager.js', 'generate-pages.js']

    for js_file in js_files:
        content = re.sub(f'src=["\']{re.escape(js_file)}([^"\']*)', rf'src="{prefix}js/{js_file}\1', content)
        content = re.sub(f'src=["\']\\./{re.escape(js_file)}([^"\']*)', rf'src="{prefix}js/{js_file}\1', content)

    # base href 수정
    if depth == 0:
        base_href = './'
    else:
        base_href = '../' * depth
    content = re.sub(r'<base href=["\'][^"\']*["\']', f'<base href="{base_href}"', content)

    # canonical URL 수정
    new_canonical = f'https://msg1000.com/{new_url_path}'
    content = re.sub(r'<link rel="canonical" href="https://msg1000\.com/[^"]*"',
                     f'<link rel="canonical" href="{new_canonical}"', content)

    # og:url 수정
    content = re.sub(r'<meta property="og:url" content="https://msg1000\.com/[^"]*"',
                     f'<meta property="og:url" content="{new_canonical}"', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def organize_html_files():
    """public/ 폴더의 모든 HTML 파일을 지역별 폴더 구조로 변환"""
    print("HTML 파일 구조화 시작\n")

    html_files = list(PUBLIC_DIR.glob("*.html"))

    # 특수 파일 제외
    exclude_files = ['index.html', 'admin.html']
    html_files = [f for f in html_files if f.name not in exclude_files]

    print(f"처리할 HTML 파일: {len(html_files)}개\n")

    moved_count = 0
    skipped_count = 0
    already_exists_count = 0
    error_count = 0

    for html_file in html_files:
        try:
            parsed = parse_filename(html_file.name)

            if not parsed:
                skipped_count += 1
                if skipped_count <= 10:  # 처음 10개만 출력
                    print(f"  {html_file.name} - 건너뜀")
                continue

            # 폴더 경로 생성
            folder_parts = [parsed['region']] + parsed['path_parts']
            target_dir = BASE_DIR / Path(*folder_parts)
            target_dir.mkdir(parents=True, exist_ok=True)

            # index.html로 이동
            target_file = target_dir / "index.html"

            # 이미 존재하는 경우 확인
            if target_file.exists():
                # 기본 템플릿 파일인지 확인 (내용이 매우 짧으면 템플릿)
                try:
                    with open(target_file, 'r', encoding='utf-8') as f:
                        target_content = f.read()
                        is_template = '내용 추가 예정' in target_content and len(target_content) < 1000
                except:
                    is_template = False

                # 템플릿 파일이면 무조건 교체
                if is_template:
                    # 템플릿 파일이므로 실제 내용으로 교체
                    pass  # 계속 진행하여 덮어쓰기
                else:
                    # 실제 파일인 경우 수정 시간 비교
                    source_mtime = html_file.stat().st_mtime
                    target_mtime = target_file.stat().st_mtime

                    # 타겟 파일이 더 최신이거나 같으면 건너뛰기
                    if target_mtime >= source_mtime:
                        already_exists_count += 1
                        if already_exists_count <= 10:  # 처음 10개만 출력
                            print(f"  {html_file.name} - 이미 처리됨")
                        continue
                    else:
                        # 소스가 더 최신이면 백업 후 업데이트
                        backup_file = target_dir / "index.html.backup"
                        if not backup_file.exists():
                            shutil.copy2(target_file, backup_file)

            # 파일 복사
            shutil.copy2(html_file, target_file)

            # 경로 수정 (depth 계산)
            depth = len(folder_parts)
            new_url_path = '/'.join(folder_parts) + '/'
            update_html_paths(target_file, depth, new_url_path)

            moved_count += 1
            if moved_count % 100 == 0:
                print(f"  {moved_count}개 처리 완료... (이미 존재: {already_exists_count}개)")

        except Exception as e:
            error_count += 1
            print(f"  오류: {html_file.name} - {e}")

    print(f"\n처리 결과:")
    print(f"  새로 이동: {moved_count}개")
    print(f"  이미 존재: {already_exists_count}개")
    print(f"  건너뜀: {skipped_count}개")
    print(f"  오류: {error_count}개")

    print(f"\n모든 작업 완료!")
    print(f"파일들이 지역별 폴더 구조로 이동되었습니다.")

    if already_exists_count > 10:
        print(f"\n팁: {already_exists_count}개 파일이 이미 처리되어 건너뛰었습니다.")
        print(f"   재실행 시 이미 처리된 파일은 자동으로 건너뜁니다.")

if __name__ == "__main__":
    organize_html_files()
