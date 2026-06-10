#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
main/ 폴더의 내용을 프로젝트 root로 이동하는 스크립트
"Deploy from a branch" 방식 사용을 위해
"""

import os
import shutil
import sys
from pathlib import Path

# 경로 설정
script_path = Path(__file__).resolve()
BASE_DIR = script_path.parent
MAIN_DIR = BASE_DIR / "main"

print(f"📂 BASE_DIR: {BASE_DIR}")
print(f"📂 MAIN_DIR: {MAIN_DIR} (exists: {MAIN_DIR.exists()})")
print()

if not MAIN_DIR.exists():
    print(f"❌ 오류: {MAIN_DIR} 폴더를 찾을 수 없습니다.")
    sys.exit(1)

def move_main_to_root():
    """main/ 폴더의 내용을 root로 이동"""
    print("🚀 main/ 폴더 내용을 root로 이동 시작\n")

    try:
        # main/ 폴더의 모든 항목 확인
        items = list(MAIN_DIR.iterdir())

        print(f"📋 이동할 항목: {len(items)}개\n")

        # 충돌 확인
        conflicts = []
        for item in items:
            dst = BASE_DIR / item.name
            if dst.exists():
                conflicts.append(item.name)

        if conflicts:
            print(f"⚠️  충돌하는 항목 발견: {', '.join(conflicts)}")
            print("   기존 파일/폴더는 백업됩니다.\n")

        for item in items:
            dst = BASE_DIR / item.name

            # 이미 존재하는 경우 백업
            if dst.exists():
                if dst.is_dir():
                    # 폴더인 경우: 기존 폴더를 백업하고 새 폴더로 교체
                    backup = BASE_DIR / f"{item.name}.backup"
                    if backup.exists():
                        shutil.rmtree(backup)
                    shutil.move(str(dst), str(backup))
                    print(f"  💾 {item.name}/ 백업: {backup.name}/")
                else:
                    # 파일인 경우 백업
                    backup = BASE_DIR / f"{item.name}.backup"
                    if backup.exists():
                        backup.unlink()
                    shutil.move(str(dst), str(backup))
                    print(f"  💾 {item.name} 백업: {backup.name}")

            # 이동
            if item.is_dir():
                shutil.move(str(item), str(dst))
                print(f"  ✅ {item.name}/ 이동 완료")
            else:
                shutil.move(str(item), str(dst))
                print(f"  ✅ {item.name} 이동 완료")

        # main/ 폴더가 비어있으면 삭제
        try:
            if not any(MAIN_DIR.iterdir()):
                MAIN_DIR.rmdir()
                print(f"\n  🗑️  빈 main/ 폴더 삭제")
        except:
            pass

        # .nojekyll 파일 생성 (Jekyll 처리 방지)
        nojekyll = BASE_DIR / ".nojekyll"
        if not nojekyll.exists():
            nojekyll.touch()
            print(f"  ✅ .nojekyll 파일 생성")

        print("\n✅ 모든 작업 완료!")
        print(f"\n📁 다음 단계:")
        print(f"   1. GitHub Settings → Pages")
        print(f"   2. Source: 'Deploy from a branch' 선택")
        print(f"   3. Branch: main")
        print(f"   4. Folder: / (root)")
        print(f"   5. Save 클릭")

    except Exception as e:
        print(f"\n❌ 오류 발생: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    move_main_to_root()
