#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
main/ 폴더를 docs/로 이름 변경하는 스크립트
"Deploy from a branch" 방식에서 /docs 폴더 사용
"""

import os
import shutil
import sys
from pathlib import Path

# 경로 설정
script_path = Path(__file__).resolve()
BASE_DIR = script_path.parent
MAIN_DIR = BASE_DIR / "main"
DOCS_DIR = BASE_DIR / "docs"

print(f"📂 BASE_DIR: {BASE_DIR}")
print(f"📂 MAIN_DIR: {MAIN_DIR} (exists: {MAIN_DIR.exists()})")
print()

if not MAIN_DIR.exists():
    print(f"❌ 오류: {MAIN_DIR} 폴더를 찾을 수 없습니다.")
    sys.exit(1)

def move_main_to_docs():
    """main/ 폴더를 docs/로 이름 변경"""
    print("🚀 main/ 폴더를 docs/로 변경 시작\n")

    try:
        # docs/ 폴더가 이미 존재하는 경우
        if DOCS_DIR.exists():
            print(f"  ⚠️  docs/ 폴더가 이미 존재합니다.")
            response = input("  계속하시겠습니까? (기존 docs/ 폴더는 백업됩니다) [y/N]: ")
            if response.lower() != 'y':
                print("  취소되었습니다.")
                return

            # 백업
            backup = BASE_DIR / "docs.backup"
            if backup.exists():
                shutil.rmtree(backup)
            shutil.move(str(DOCS_DIR), str(backup))
            print(f"  💾 기존 docs/ 폴더 백업: docs.backup/")

        # main/ 폴더를 docs/로 이름 변경
        shutil.move(str(MAIN_DIR), str(DOCS_DIR))
        print(f"  ✅ main/ → docs/ 이름 변경 완료")

        # .nojekyll 파일 생성 (Jekyll 처리 방지)
        nojekyll = DOCS_DIR / ".nojekyll"
        if not nojekyll.exists():
            nojekyll.touch()
            print(f"  ✅ .nojekyll 파일 생성")

        print("\n✅ 모든 작업 완료!")
        print(f"📁 이제 GitHub Settings → Pages → Source를 'Deploy from a branch'로 설정하세요")
        print(f"   - Branch: main")
        print(f"   - Folder: /docs")

    except Exception as e:
        print(f"\n❌ 오류 발생: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    move_main_to_docs()
