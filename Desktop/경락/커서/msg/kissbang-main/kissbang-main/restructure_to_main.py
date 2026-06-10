#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
사이트 구조를 main/ 폴더로 재구성하는 스크립트
public/ -> main/ 구조로 변경
"""

import os
import shutil
import sys
from pathlib import Path

# 경로 설정 - 현재 스크립트가 있는 디렉토리
script_path = Path(__file__).resolve()
BASE_DIR = script_path.parent
PUBLIC_DIR = BASE_DIR / "public"
MAIN_DIR = BASE_DIR / "main"

print(f"📂 BASE_DIR: {BASE_DIR}")
print(f"📂 PUBLIC_DIR: {PUBLIC_DIR} (exists: {PUBLIC_DIR.exists()})")
print(f"📂 MAIN_DIR: {MAIN_DIR}")
print()

if not PUBLIC_DIR.exists():
    print(f"❌ 오류: {PUBLIC_DIR} 폴더를 찾을 수 없습니다.")
    sys.exit(1)

def create_main_structure():
    """main 폴더 구조 생성"""
    print("📁 main 폴더 구조 생성 중...")

    # main 폴더 생성
    MAIN_DIR.mkdir(exist_ok=True)

    # 하위 폴더 생성
    (MAIN_DIR / "css").mkdir(exist_ok=True)
    (MAIN_DIR / "js").mkdir(exist_ok=True)
    (MAIN_DIR / "images").mkdir(exist_ok=True)

    print("✅ 폴더 구조 생성 완료")

def copy_basic_files():
    """기본 파일들 복사"""
    print("📄 기본 파일 복사 중...")

    files_to_copy = ["index.html", "sitemap.xml", "robots.txt"]

    for file in files_to_copy:
        src = PUBLIC_DIR / file
        dst = MAIN_DIR / file
        if src.exists():
            shutil.copy2(src, dst)
            print(f"  ✅ {file}")
        else:
            print(f"  ⚠️  {file} 없음")

def copy_css_files():
    """CSS 파일들 복사"""
    print("🎨 CSS 파일 복사 중...")

    css_files = list(PUBLIC_DIR.glob("*.css"))

    for css_file in css_files:
        dst = MAIN_DIR / "css" / css_file.name
        shutil.copy2(css_file, dst)
        print(f"  ✅ {css_file.name}")

def copy_js_files():
    """JS 파일들 복사"""
    print("📜 JS 파일 복사 중...")

    js_files = list(PUBLIC_DIR.glob("*.js"))

    for js_file in js_files:
        dst = MAIN_DIR / "js" / js_file.name
        shutil.copy2(js_file, dst)
        print(f"  ✅ {js_file.name}")

def copy_images():
    """images 폴더 복사"""
    print("🖼️  images 폴더 복사 중...")

    images_src = PUBLIC_DIR / "images"
    images_dst = MAIN_DIR / "images"

    if images_src.exists():
        if images_dst.exists():
            shutil.rmtree(images_dst)
        shutil.copytree(images_src, images_dst)
        print(f"  ✅ images 폴더 복사 완료 ({len(list(images_dst.rglob('*')))} 파일)")
    else:
        print("  ⚠️  images 폴더 없음")

def copy_data_files():
    """데이터 파일들 복사 (shops.json 등)"""
    print("📊 데이터 파일 복사 중...")

    data_files = ["shops.json", "shop-card-data.js"]

    for file in data_files:
        src = PUBLIC_DIR / file
        if src.exists():
            dst = MAIN_DIR / file
            shutil.copy2(src, dst)
            print(f"  ✅ {file}")

def update_html_paths():
    """main/index.html의 경로 수정"""
    print("🔧 HTML 경로 수정 중...")

    index_file = MAIN_DIR / "index.html"
    if not index_file.exists():
        print("  ⚠️  index.html 없음")
        return

    with open(index_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 경로 수정
    # style.css -> css/style.css
    content = content.replace('href="style.css', 'href="css/style.css')
    content = content.replace("href='style.css", "href='css/style.css")

    # script.js 등 -> js/script.js
    js_files = ["script.js", "detail.js", "common-components.js", "common-components.min.js",
                "shop-card-data.js", "shop-manager.js", "generate-pages.js"]

    for js_file in js_files:
        content = content.replace(f'src="{js_file}', f'src="js/{js_file}')
        content = content.replace(f"src='{js_file}", f"src='js/{js_file}")

    # images/ -> images/ (이미 상대경로이므로 유지)

    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print("  ✅ index.html 경로 수정 완료")

def create_region_folders():
    """지역별 폴더 구조 생성 예시"""
    print("🗺️  지역별 폴더 구조 생성 중...")

    # 예시 구조
    regions = {
        "seoul": ["gangnam", "jongro"],
        "gyeonggi": ["suwon"],
        "incheon": []
    }

    for region, districts in regions.items():
        region_dir = MAIN_DIR / region
        region_dir.mkdir(exist_ok=True)

        # 지역 index.html 생성 (나중에 실제 내용으로 교체)
        index_file = region_dir / "index.html"
        if not index_file.exists():
            with open(index_file, 'w', encoding='utf-8') as f:
                f.write(f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{region} 마사지 | 마사지천국</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <h1>{region} 마사지</h1>
    <!-- 내용 추가 예정 -->
</body>
</html>""")
            print(f"  ✅ {region}/index.html 생성")

        # 세부 지역 폴더 생성
        for district in districts:
            district_dir = region_dir / district
            district_dir.mkdir(exist_ok=True)

            district_index = district_dir / "index.html"
            if not district_index.exists():
                with open(district_index, 'w', encoding='utf-8') as f:
                    f.write(f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{region} {district} 마사지 | 마사지천국</title>
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
    <h1>{region} {district} 마사지</h1>
    <!-- 내용 추가 예정 -->
</body>
</html>""")
                print(f"  ✅ {region}/{district}/index.html 생성")

def main():
    print("🚀 사이트 구조 재구성 시작\n")

    try:
        # 1. 폴더 구조 생성
        create_main_structure()

        # 2. 기본 파일 복사
        copy_basic_files()

        # 3. CSS 파일 복사
        copy_css_files()

        # 4. JS 파일 복사
        copy_js_files()

        # 5. images 폴더 복사
        copy_images()

        # 6. 데이터 파일 복사
        copy_data_files()

        # 7. HTML 경로 수정
        update_html_paths()

        # 8. 지역별 폴더 구조 생성
        create_region_folders()

        print("\n✅ 모든 작업 완료!")
        print(f"📁 main 폴더 위치: {MAIN_DIR.absolute()}")

    except Exception as e:
        print(f"\n❌ 오류 발생: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
