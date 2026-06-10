#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
특정 구들의 동/역 HTML 파일만 업데이트 (출장마사지 제외 확인)
"""
import sys
from pathlib import Path

# Windows에서 UTF-8 출력 설정
if sys.platform == 'win32':
    try:
        import os
        os.environ['PYTHONIOENCODING'] = 'utf-8'
    except:
        pass

SCRIPT_DIR = Path(__file__).parent.absolute()

# 기존 스크립트 import
sys.path.insert(0, str(SCRIPT_DIR))
from update_all_dong_station_massage import update_dong_station_massage_file

# 대상 구 목록
TARGET_DISTRICTS = ['관악', '도봉', '서대문', '용산', '은평', '중랑']

def main():
    """특정 구들의 동/역 HTML 파일만 처리"""
    public_dir = SCRIPT_DIR / 'public'
    
    if not public_dir.exists():
        print(f"❌ public 디렉토리를 찾을 수 없습니다: {public_dir}")
        return
    
    # 모든 -dong-massage.html 및 -station-massage.html 파일 찾기
    dong_files = list(public_dir.glob('*-dong-massage.html'))
    station_files = list(public_dir.glob('*-station-massage.html'))
    all_files = dong_files + station_files
    
    # 대상 구 필터링
    target_files = []
    for html_file in all_files:
        filename = html_file.name
        # 파일명에서 구 추출 (예: seoul-gwanak-xxx-massage.html)
        for district in TARGET_DISTRICTS:
            # 구 이름을 영문 키로 변환
            district_map = {
                '관악': 'gwanak',
                '도봉': 'dobong',
                '서대문': 'seodaemun',
                '용산': 'yongsan',
                '은평': 'eunpyeong',
                '중랑': 'jungnang'
            }
            district_key = district_map.get(district)
            if district_key and district_key in filename:
                target_files.append(html_file)
                break
    
    print("=" * 60)
    print("특정 구들의 동/역 HTML 파일 업데이트")
    print("=" * 60)
    print(f"대상 구: {', '.join(TARGET_DISTRICTS)}")
    print(f"발견된 파일 수: {len(target_files)}개")
    print("=" * 60)
    
    success_count = 0
    fail_count = 0
    
    for html_file in target_files:
        try:
            if update_dong_station_massage_file(html_file):
                success_count += 1
            else:
                fail_count += 1
        except Exception as e:
            print(f"  ❌ 오류 발생: {e}")
            import traceback
            traceback.print_exc()
            fail_count += 1
    
    print("\n" + "=" * 60)
    print("[완료] 업데이트 완료!")
    print("=" * 60)
    print(f"  - 성공: {success_count}개")
    print(f"  - 실패: {fail_count}개")
    print(f"  - 총 파일: {len(target_files)}개")
    print("=" * 60)


if __name__ == "__main__":
    try:
        main()
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ 오류 발생: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

