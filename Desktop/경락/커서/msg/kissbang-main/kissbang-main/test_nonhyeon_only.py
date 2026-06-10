#!/usr/bin/env python3
"""
논현동 파일만 테스트하는 스크립트

이 스크립트는:
1. shop-card-data.js에서 업체 데이터를 읽어옵니다
2. seoul-gangnam-nonhyeon-dong*.html 파일들을 찾습니다
3. 각 파일에 대해:
   - 동/역 기준(논현동)으로 카드를 정렬합니다
   - 논현동 카드를 최상단에 배치합니다 (힐링샵 먼저, 그 다음 일반)
   - 논현동이 아닌 카드를 그 다음에 배치합니다 (힐링샵 먼저, 그 다음 일반)
   - 각 그룹 내에서는 랜덤 배치됩니다
"""
import sys
import glob
from pathlib import Path

# update_seoul_massage_cards.py의 함수들 import
SCRIPT_DIR = Path(__file__).parent.absolute()
sys.path.insert(0, str(SCRIPT_DIR))

from update_seoul_massage_cards import (
    read_shop_card_data,
    insert_shop_cards_to_html_seoul,
)

PUBLIC_DIR = SCRIPT_DIR / 'public'

def main():
    print("=" * 60)
    print("논현동 파일 테스트 스크립트")
    print("=" * 60)
    print("\n[처리 방식]")
    print("  - shop-card-data.js에서 업체 데이터 읽기")
    print("  - 동/역 기준(논현동)으로 카드 정렬")
    print("  - 논현동 카드 → 최상단 배치")
    print("  - 나머지 카드 → 그 다음 배치 (랜덤)")
    print("=" * 60)
    
    # shop-card-data.js 읽기
    print("\n1. shop-card-data.js에서 업체 데이터 읽는 중...")
    shops = read_shop_card_data()
    print(f"   ✅ {len(shops)}개 업체 데이터 로드 완료")
    
    # seoul-gangnam-nonhyeon-dong-massage.html 파일만 처리
    test_file_path = PUBLIC_DIR / 'seoul-gangnam-nonhyeon-dong-massage.html'
    
    if not test_file_path.exists():
        print(f"\n   ⚠️ 파일을 찾을 수 없습니다: {test_file_path}")
        return
    
    nonhyeon_files = [test_file_path]
    
    print(f"\n2. 처리할 파일:")
    print(f"   - {test_file_path.name}")
    
    # 각 파일 처리
    success_count = 0
    fail_count = 0
    
    for test_file in nonhyeon_files:
        print(f"\n{'=' * 60}")
        print(f"처리 중: {test_file.name}")
        print(f"{'=' * 60}")
        print(f"  [정렬 규칙]")
        print(f"  1. 논현동 카드 → 최상단 (힐링샵 먼저, 일반 다음)")
        print(f"  2. 논현동 아닌 카드 → 그 다음 (힐링샵 먼저, 일반 다음)")
        print(f"  3. 각 그룹 내에서 랜덤 배치")
        
        result = insert_shop_cards_to_html_seoul(test_file, shops)
        
        if result:
            print(f"\n✅ {test_file.name} 처리 완료")
            print(f"   → 논현동 카드가 최상단에 배치되었습니다.")
            success_count += 1
        else:
            print(f"\n❌ {test_file.name} 처리 실패")
            fail_count += 1
    
    # 최종 결과
    print(f"\n{'=' * 60}")
    print(f"최종 결과: 성공 {success_count}개, 실패 {fail_count}개")
    print(f"{'=' * 60}")

if __name__ == '__main__':
    main()

