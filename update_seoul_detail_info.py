#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
서울 HTML 파일들의 관련정보 모달 내용을 자동으로 업데이트하는 스크립트
"""

import os
import re
from pathlib import Path
import random

# 서울 지역별 행정구간 정보
REGION_DISTRICTS = {
    'gangnam': {
        'name': '강남',
        'districts': [
            '시내 중심', '역삼동', '삼성동', '청담동', '논현동', '신사동', '압구정동'
        ],
        'description': '서울의 남부 중심 지역으로, 강남대로와 테헤란로가 있는 상업 중심지입니다.'
    },
    'gangdong': {
        'name': '강동',
        'districts': [
            '시내 중심', '천호동', '성내동', '길동', '둔촌동', '암사동', '상일동'
        ],
        'description': '서울의 동쪽 지역으로, 한강과 가까운 주거지역입니다.'
    },
    'gangbuk': {
        'name': '강북',
        'districts': [
            '시내 중심', '미아동', '수유동', '번동', '우이동', '인수동', '삼양동'
        ],
        'description': '서울의 북부 지역으로, 북한산과 가까운 주거지역입니다.'
    },
    'gangseo': {
        'name': '강서',
        'districts': [
            '시내 중심', '염창동', '등촌동', '화곡동', '가양동', '마곡동', '방화동'
        ],
        'description': '서울의 서쪽 지역으로, 김포공항과 가까운 지역입니다.'
    },
    'gwanak': {
        'name': '관악',
        'districts': [
            '시내 중심', '신림동', '봉천동', '서원동', '신원동', '서림동', '삼성동'
        ],
        'description': '서울의 남부 지역으로, 서울대학교와 가까운 지역입니다.'
    },
    'gwangjin': {
        'name': '광진',
        'districts': [
            '시내 중심', '구의동', '광장동', '자양동', '화양동', '군자동', '능동'
        ],
        'description': '서울의 동부 지역으로, 한강과 가까운 지역입니다.'
    },
    'guro': {
        'name': '구로',
        'districts': [
            '시내 중심', '구로동', '가리봉동', '신도림동', '고척동', '개봉동', '오류동'
        ],
        'description': '서울의 서남부 지역으로, 구로디지털단지와 산업지역이 있는 지역입니다.'
    },
    'geumcheon': {
        'name': '금천',
        'districts': [
            '시내 중심', '가산동', '독산동', '시흥동', '범일동', '금하동', '한내동'
        ],
        'description': '서울의 남서부 지역으로, 가산디지털단지와 산업지역이 있는 지역입니다.'
    },
    'nowon': {
        'name': '노원',
        'districts': [
            '시내 중심', '월계동', '공릉동', '하계동', '중계동', '상계동', '도봉동'
        ],
        'description': '서울의 북부 지역으로, 주거지역과 대학가가 있는 지역입니다.'
    },
    'dobong': {
        'name': '도봉',
        'districts': [
            '시내 중심', '쌍문동', '방학동', '창동', '도봉동', '마들동', '우이동'
        ],
        'description': '서울의 북부 지역으로, 북한산과 가까운 주거지역입니다.'
    },
    'dongdaemun': {
        'name': '동대문',
        'districts': [
            '시내 중심', '용신동', '제기동', '전농동', '답십리동', '장안동', '이문동'
        ],
        'description': '서울의 동부 지역으로, 동대문시장과 전통시장이 있는 지역입니다.'
    },
    'dongjak': {
        'name': '동작',
        'districts': [
            '시내 중심', '노량진동', '상도동', '흑석동', '사당동', '대방동', '신대방동'
        ],
        'description': '서울의 남부 지역으로, 한강과 가까운 주거지역입니다.'
    },
    'mapo': {
        'name': '마포',
        'districts': [
            '시내 중심', '공덕동', '아현동', '도화동', '용강동', '대흥동', '염리동'
        ],
        'description': '서울의 서부 지역으로, 홍대와 상업지역이 발달한 지역입니다.'
    },
    'seodaemun': {
        'name': '서대문',
        'districts': [
            '시내 중심', '충현동', '천연동', '북아현동', '신촌동', '연희동', '홍제동'
        ],
        'description': '서울의 서부 지역으로, 신촌과 대학가가 있는 지역입니다.'
    },
    'seocho': {
        'name': '서초',
        'districts': [
            '시내 중심', '방배동', '양재동', '우면동', '원지동', '잠원동', '반포동'
        ],
        'description': '서울의 남부 지역으로, 강남과 인접한 고급 주거지역입니다.'
    },
    'seongdong': {
        'name': '성동',
        'districts': [
            '시내 중심', '왕십리동', '마장동', '사근동', '행당동', '응봉동', '금호동'
        ],
        'description': '서울의 동부 지역으로, 한강과 가까운 지역입니다.'
    },
    'seongbuk': {
        'name': '성북',
        'districts': [
            '시내 중심', '성북동', '삼선동', '동선동', '돈암동', '안암동', '보문동'
        ],
        'description': '서울의 북부 지역으로, 고려대학교와 대학가가 있는 지역입니다.'
    },
    'songpa': {
        'name': '송파',
        'districts': [
            '시내 중심', '잠실동', '신천동', '문정동', '가락동', '거여동', '마천동'
        ],
        'description': '서울의 남동부 지역으로, 잠실과 롯데월드가 있는 지역입니다.'
    },
    'yangcheon': {
        'name': '양천',
        'districts': [
            '시내 중심', '목동', '신월동', '신정동', '오목교동', '염창동', '등촌동'
        ],
        'description': '서울의 서부 지역으로, 목동 신도시와 주거지역이 있는 지역입니다.'
    },
    'yeongdeungpo': {
        'name': '영등포',
        'districts': [
            '시내 중심', '여의도동', '당산동', '도림동', '문래동', '신길동', '대림동'
        ],
        'description': '서울의 서남부 지역으로, 여의도와 상업지역이 발달한 지역입니다.'
    },
    'yongsan': {
        'name': '용산',
        'districts': [
            '시내 중심', '이촌동', '한강로동', '원효로동', '용산동', '한남동', '이태원동'
        ],
        'description': '서울의 중부 지역으로, 용산역과 이태원이 있는 지역입니다.'
    },
    'eunpyeong': {
        'name': '은평',
        'districts': [
            '시내 중심', '녹번동', '불광동', '갈현동', '구산동', '대조동', '응암동'
        ],
        'description': '서울의 서북부 지역으로, 북한산과 가까운 주거지역입니다.'
    },
    'jongno': {
        'name': '종로',
        'districts': [
            '시내 중심', '종로동', '청와대', '세종로', '효자동', '이화동', '혜화동'
        ],
        'description': '서울의 중심 지역으로, 경복궁과 청와대가 있는 지역입니다.'
    },
    'junggu': {
        'name': '중구',
        'districts': [
            '시내 중심', '명동', '을지로동', '회현동', '남대문로', '중림동', '다산동'
        ],
        'description': '서울의 중심 지역으로, 명동과 남대문시장이 있는 상업 중심지입니다.'
    },
    'jungnang': {
        'name': '중랑',
        'districts': [
            '시내 중심', '면목동', '상봉동', '중화동', '묵동', '망우동', '신내동'
        ],
        'description': '서울의 동북부 지역으로, 주거지역과 상업지역이 발달한 지역입니다.'
    },
}

# 테마별 상세 정보 (SEO 중복 방지를 위해 다양한 표현 사용)
THEME_INFO = {
    'waxing': {
        'name': '왁싱',
        'icon': '💆',
        'introductions': [
            '전문 왁싱 서비스로 깔끔하고 매끄러운 피부를 제공합니다.',
            '천연 왁스를 사용한 안전하고 효과적인 제모 서비스입니다.',
            '전문 관리사가 제공하는 프리미엄 왁싱 경험을 선사합니다.'
        ],
        'features_list': [
            ['전문 왁싱 기술', '위생적 시설', '다양한 부위 시술', '자극 최소화', '빠른 시술 시간', '오래 지속되는 효과'],
            ['천연 왁스 사용', '전문 자격증 보유', '개인 맞춤 시술', '부드러운 피부 관리', '효과적인 제모', '편안한 시술 환경'],
            ['프리미엄 왁싱', '위생 관리 철저', '다양한 코스 선택', '피부 자극 최소화', '빠른 시술', '지속력 우수']
        ],
        'benefits': [
            '피부 매끄러움', '모발 재생 지연', '피부 각질 제거', '피부톤 개선', '자극 최소화', '편리한 관리'
        ],
        'services': [
            '상체 왁싱', '하체 왁싱', '전신 왁싱', '부분 왁싱', '이브로우 왁싱', '브라질리안 왁싱'
        ],
        'reviews': [
            '왁싱 후 피부가 정말 매끄러워져서 만족스러웠어요.',
            '전문 관리사분이 부드럽게 시술해주셔서 통증이 거의 없었습니다.',
            '제모 효과가 오래 지속되어서 자주 받고 싶어요.',
            '위생적인 시설과 전문적인 서비스에 감동했습니다.',
            '피부 자극이 없어서 민감한 피부인 저도 안심하고 받을 수 있었어요.'
        ]
    },
    'thai': {
        'name': '타이마사지',
        'icon': '🇹🇭',
        'introductions': [
            '태국 전통 마사지 기법으로 에너지 라인을 따라 압박과 스트레칭을 결합한 마사지입니다.',
            '태국에서 수천 년 전부터 전해져 내려온 전통 기법을 현대적으로 재해석한 마사지입니다.',
            '센 라인을 따라 압박과 스트레칭을 결합하여 전신의 에너지 흐름을 개선합니다.'
        ],
        'features_list': [
            ['에너지 라인 자극', '스트레칭 기법', '압박 마사지', '유연성 향상', '에너지 회복', '전신 이완'],
            ['센 라인 마사지', '태국 전통 기법', '관절 가동성 향상', '근육 긴장 완화', '혈액순환 촉진', '전신 균형 회복'],
            ['전통 타이 기법', '에너지 경로 자극', '유연성 개선', '스트레칭 효과', '압박과 당김', '전신 힐링']
        ],
        'benefits': [
            '근육 이완', '유연성 향상', '에너지 회복', '스트레스 해소', '혈액순환 개선', '관절 가동성 향상'
        ],
        'services': [
            '전신 타이마사지', '발 타이마사지', '머리 타이마사지', '등 타이마사지', '스트레칭 마사지', '에너지 라인 마사지'
        ],
        'reviews': [
            '타이마사지로 몸이 정말 유연해진 것을 느꼈어요.',
            '스트레칭과 압박이 조화롭게 이루어져서 완벽한 힐링이었습니다.',
            '태국 전통 기법의 효과를 직접 체험할 수 있어서 특별했어요.',
            '에너지 라인을 따라 마사지를 받으니 전신이 가벼워진 느낌이었습니다.',
            '관절 가동성이 향상되어 일상생활이 훨씬 편해졌어요.'
        ]
    },
    'swedish': {
        'name': '스웨디시',
        'icon': '🇸🇪',
        'introductions': [
            '클래식한 스웨덴식 마사지 기법으로 근육 이완과 혈액순환 개선에 효과적입니다.',
            '19세기 스웨덴에서 개발된 전통 마사지 기법을 현대적으로 재해석한 서비스입니다.',
            '스트로킹, 프리셔, 진동 등 다양한 기법을 조합한 종합 마사지입니다.'
        ],
        'features_list': [
            ['근육 이완', '혈액순환 개선', '스트로킹 기법', '프리셔 기법', '진동 기법', '관절 가동'],
            ['클래식 마사지', '근육 긴장 완화', '림프 순환 촉진', '부드러운 스트로킹', '깊은 압박', '전신 이완'],
            ['전통 스웨덴 기법', '근육 피로 해소', '혈류 개선', '스트로킹과 압박', '진동 마사지', '완전한 휴식']
        ],
        'benefits': [
            '근육 피로 해소', '혈액순환 개선', '스트레스 해소', '수면 질 개선', '면역력 강화', '에너지 회복'
        ],
        'services': [
            '전신 스웨디시', '등 스웨디시', '다리 스웨디시', '팔 스웨디시', '얼굴 스웨디시', '스포츠 마사지'
        ],
        'reviews': [
            '스웨디시 마사지로 하루 종일 쌓인 피로가 완전히 사라졌어요.',
            '부드러운 스트로킹과 적절한 압박이 조화를 이루어서 최고였습니다.',
            '혈액순환이 개선되어 손발이 따뜻해진 것을 느꼈어요.',
            '전문 관리사분의 기법이 정말 뛰어나서 몸과 마음이 모두 편안해졌습니다.',
            '수면의 질이 개선되어 다음날 아침 일어났을 때 개운한 느낌이었어요.'
        ]
    },
    'aroma': {
        'name': '아로마마사지',
        'icon': '🌺',
        'introductions': [
            '천연 에센셜 오일을 활용한 향기로운 마사지로 감각적이고 치유적인 경험을 제공합니다.',
            '다양한 에센셜 오일의 향기와 마사지 기법이 결합된 종합 힐링 서비스입니다.',
            '향기 요법과 마사지의 시너지 효과로 몸과 마음의 완전한 휴식을 제공합니다.'
        ],
        'features_list': [
            ['천연 에센셜 오일', '향기 요법', '피부 보습', '이완 효과', '감각적 경험', '스트레스 해소'],
            ['프리미엄 오일 사용', '향기 치료', '피부 영양 공급', '근육 이완', '감각적 힐링', '완전한 휴식'],
            ['에센셜 오일 마사지', '아로마테라피', '피부 케어', '이완과 회복', '향기 힐링', '전신 보습']
        ],
        'benefits': [
            '피부 보습', '향기 요법 효과', '스트레스 해소', '수면 질 개선', '에너지 회복', '감각적 힐링'
        ],
        'services': [
            '전신 아로마마사지', '등 아로마마사지', '다리 아로마마사지', '얼굴 아로마마사지', '발 아로마마사지', '헤드 아로마마사지'
        ],
        'reviews': [
            '향기로운 에센셜 오일과 함께 받는 마사지가 정말 힐링이었어요.',
            '피부가 부드러워지고 향기도 좋아서 기분이 정말 좋았습니다.',
            '아로마테라피의 효과를 직접 체험할 수 있어서 만족스러웠어요.',
            '스트레스가 완전히 해소되고 마음이 평온해진 것을 느꼈습니다.',
            '향기와 마사지의 조합이 완벽해서 몸과 마음이 모두 회복되었어요.'
        ]
    },
    'massage': {
        'name': '마사지',
        'icon': '💆',
        'introductions': [
            '전문 마사지 서비스로 몸과 마음의 완전한 힐링을 제공합니다.',
            '다양한 마사지 기법을 조합한 종합 힐링 서비스입니다.',
            '전문 관리사가 제공하는 맞춤형 마사지로 개인의 필요에 맞는 서비스를 제공합니다.'
        ],
        'features_list': [
            ['전문 마사지 기술', '다양한 기법', '개인 맞춤 서비스', '편안한 환경', '전문 관리사', '힐링 경험'],
            ['전문 자격증 보유', '다양한 마사지 스타일', '맞춤형 시술', '깨끗한 시설', '경험 많은 관리사', '완전한 휴식'],
            ['프로페셔널 마사지', '종합 마사지 기법', '개인화된 서비스', '편안한 분위기', '전문가 시술', '전신 힐링']
        ],
        'benefits': [
            '근육 이완', '혈액순환 개선', '스트레스 해소', '수면 질 개선', '에너지 회복', '전신 건강 개선'
        ],
        'services': [
            '전신 마사지', '등 마사지', '다리 마사지', '팔 마사지', '발 마사지', '헤드 마사지'
        ],
        'reviews': [
            '전문 관리사분이 정성스럽게 시술해주셔서 몸과 마음이 모두 편안해졌어요.',
            '다양한 마사지 기법을 조합해서 받을 수 있어서 만족스러웠습니다.',
            '하루 종일 쌓인 피로가 한 번에 사라져서 정말 좋았어요.',
            '개인 맞춤 서비스로 제 상태에 맞게 시술해주셔서 효과가 뛰어났습니다.',
            '편안한 환경에서 받는 마사지가 정말 힐링이었어요.'
        ]
    },
    'foot': {
        'name': '발마사지',
        'icon': '🦶',
        'introductions': [
            '반사구 이론에 기반한 발마사지로 전신 건강에도 도움이 되는 종합적인 힐링 서비스입니다.',
            '발바닥의 반사구를 자극하여 전신의 장기와 기관에 영향을 주는 전문 마사지입니다.',
            '족욕과 발마사지를 결합한 종합 케어로 발의 피로뿐만 아니라 전신 건강을 개선합니다.'
        ],
        'features_list': [
            ['반사구 자극', '혈액순환 개선', '족욕 서비스', '다리 마사지', '부종 완화', '전신 건강 개선'],
            ['경혈 마사지', '발 피로 해소', '따뜻한 족욕', '다리 이완', '림프 순환', '전신 균형'],
            ['반사 마사지', '발 관리', '족욕 힐링', '다리 케어', '부종 관리', '전신 회복']
        ],
        'benefits': [
            '발 피로 해소', '혈액순환 개선', '부종 완화', '수면 질 개선', '면역력 강화', '전신 건강 개선'
        ],
        'services': [
            '전문 발마사지', '반사구 마사지', '족욕 서비스', '다리 마사지', '부위별 발마사지', '출장 발마사지'
        ],
        'reviews': [
            '발마사지로 하루 종일 서서 일한 발의 피로가 완전히 사라졌어요.',
            '족욕과 함께 받는 발마사지가 정말 힐링이었습니다.',
            '반사구 마사지로 전신 건강이 개선된 것을 느꼈어요.',
            '부종이 완화되어 다리가 가벼워진 것을 느꼈습니다.',
            '발마사지 후 수면의 질이 정말 좋아졌어요.'
        ]
    },
    'chinese': {
        'name': '중국마사지',
        'icon': '🏮',
        'introductions': [
            '경락 이론에 기반한 중국 전통 마사지로 에너지 흐름을 개선하고 통증을 완화합니다.',
            '중국에서 수천 년 전부터 전해져 내려온 전통 기법을 현대적으로 재해석한 마사지입니다.',
            '경혈을 자극하여 전신의 에너지 균형을 회복하고 건강을 개선하는 종합 마사지입니다.'
        ],
        'features_list': [
            ['경락 자극', '경혈 마사지', '압박과 지압', '에너지 회복', '통증 완화', '전신 균형 회복'],
            ['경혈 자극', '경락 이론', '에너지 흐름 개선', '기력 회복', '만성 통증 완화', '전신 건강'],
            ['전통 중국 기법', '경혈 압박', '에너지 균형', '기 회복', '통증 관리', '전신 조화']
        ],
        'benefits': [
            '경락 자극', '혈액순환 개선', '통증 완화', '에너지 회복', '면역력 강화', '전신 건강 개선'
        ],
        'services': [
            '경락 마사지', '경혈 자극 마사지', '전신 중국마사지', '부위별 경락 마사지', '중국 관리사 시술', '출장 중국마사지'
        ],
        'reviews': [
            '경락 마사지로 몸의 에너지 흐름이 개선된 것을 느꼈어요.',
            '만성 통증이 완화되어서 정말 만족스러웠습니다.',
            '중국 전통 기법의 효과를 직접 체험할 수 있어서 특별했어요.',
            '경혈을 정확하게 자극해주셔서 통증이 사라졌습니다.',
            '에너지가 회복되어 전신이 가벼워진 느낌이었어요.'
        ]
    },
    'outcall': {
        'name': '출장마사지',
        'icon': '🚗',
        'introductions': [
            '고객이 원하는 장소로 전문 관리사가 직접 방문하여 서비스를 제공하는 혁신적인 마사지 형태입니다.',
            '이동 시간 없이 원하는 장소에서 바로 마사지를 받을 수 있는 편리한 서비스입니다.',
            '호텔, 사무실, 집 등 어디서든 전문 마사지를 받을 수 있는 프리미엄 서비스입니다.'
        ],
        'features_list': [
            ['출장 서비스', '편리한 이용', '프라이버시 보장', '시간 절약', '개인 맞춤', '전문 관리사'],
            ['방문 서비스', '이동 없이 이용', '완벽한 프라이버시', '효율적인 시간 활용', '맞춤형 시술', '전문가 방문'],
            ['출장 마사지', '원하는 장소 서비스', '개인 공간 보장', '시간 효율성', '개인화된 케어', '프로페셔널 서비스']
        ],
        'benefits': [
            '이동 시간 절약', '편리한 이용', '프라이버시 보장', '개인 맞춤 서비스', '시간 효율성', '편안한 환경'
        ],
        'services': [
            '호텔 출장마사지', '사무실 출장마사지', '집 출장마사지', '전신 출장마사지', '부위별 출장마사지', '24시간 출장마사지'
        ],
        'reviews': [
            '출장 중 호텔에서 마사지를 받을 수 있어서 정말 편리했어요.',
            '이동 시간 없이 바로 서비스를 받을 수 있어서 시간이 절약되었습니다.',
            '프라이버시가 완벽하게 보장되어서 안심하고 받을 수 있었어요.',
            '집에서 편안하게 마사지를 받을 수 있어서 최고였습니다.',
            '출장마사지의 편리함을 직접 체험하고 나서 정기적으로 이용하고 있어요.'
        ]
    },
}

# 서울 관광지 정보
TOURISM_SPOTS = [
    {
        'category': '역사 문화 유적지',
        'spots': [
            '경복궁: 조선왕조의 대표 궁궐로, 한국의 전통 건축을 감상할 수 있습니다.',
            '북한산: 서울의 북쪽에 위치한 산으로, 등산과 자연 감상을 즐길 수 있습니다.',
            '남산타워: 서울의 대표 랜드마크로, 전망대에서 서울 시내를 조망할 수 있습니다.',
            '한강공원: 한강을 따라 조성된 공원으로, 산책과 자전거 타기를 즐길 수 있습니다.'
        ]
    },
    {
        'category': '쇼핑 및 엔터테인먼트',
        'spots': [
            '명동: 서울의 대표 쇼핑 거리로, 다양한 상점과 식당이 있습니다.',
            '강남: 서울의 남부 상업지역으로, 고급 쇼핑몰과 레스토랑이 있습니다.',
            '홍대: 서울의 대표 문화 거리로, 클럽과 카페가 집중되어 있습니다.',
            '이태원: 서울의 국제 거리로, 다양한 국제 음식과 쇼핑을 즐길 수 있습니다.'
        ]
    },
    {
        'category': '문화 시설',
        'spots': [
            '국립중앙박물관: 한국의 역사와 문화를 감상할 수 있는 박물관입니다.',
            '롯데월드: 서울의 대표 테마파크로, 다양한 놀이기구와 엔터테인먼트를 즐길 수 있습니다.',
            '세종문화회관: 서울의 대표 공연장으로, 다양한 공연을 관람할 수 있습니다.',
            '63빌딩: 서울의 대표 건물로, 전망대와 수족관이 있습니다.'
        ]
    }
]

# 서울 음식 정보
FOOD_RECOMMENDATIONS = [
    {
        'category': '서울 전통 음식',
        'foods': [
            '서울 한정식: 서울의 전통 한정식을 맛볼 수 있는 전문점입니다.',
            '서울 전통 찻집: 서울의 전통 차와 한과를 즐길 수 있는 찻집입니다.',
            '서울 떡볶이: 서울의 대표 간식으로, 다양한 떡볶이를 즐길 수 있습니다.',
            '서울 순대: 전통 방식으로 만든 순대를 맛볼 수 있습니다.'
        ]
    },
    {
        'category': '서울 현대 음식',
        'foods': [
            '서울 카페 거리: 서울의 다양한 카페에서 커피와 디저트를 즐길 수 있습니다.',
            '서울 한강 카페: 한강을 조망하며 커피를 마실 수 있는 카페입니다.',
            '서울 브런치 카페: 서울의 다양한 브런치와 디저트를 즐길 수 있는 카페입니다.',
            '서울 파인다이닝: 서울의 고급 레스토랑에서 다양한 요리를 즐길 수 있습니다.'
        ]
    },
    {
        'category': '서울 특색 음식',
        'foods': [
            '서울 닭갈비: 서울의 대표 음식으로, 특별한 맛을 자랑합니다.',
            '서울 불고기: 서울의 전통 불고기를 맛볼 수 있습니다.',
            '서울 비빔밥: 서울의 전통 비빔밥을 맛볼 수 있습니다.',
            '서울 해물파전: 서울의 전통 해물파전을 맛볼 수 있습니다.'
        ]
    }
]

def generate_introduction(region_name, theme_name=None):
    """소개글 생성"""
    if region_name == '서울':
        region_description = '대한민국의 수도로, 정치·경제·문화의 중심지입니다.'
        display_name = ''
        title_prefix = '서울'
    else:
        region_key = {
            '강남': 'gangnam', '강동': 'gangdong', '강북': 'gangbuk', '강서': 'gangseo',
            '관악': 'gwanak', '광진': 'gwangjin', '구로': 'guro', '금천': 'geumcheon',
            '노원': 'nowon', '도봉': 'dobong', '동대문': 'dongdaemun', '동작': 'dongjak',
            '마포': 'mapo', '서대문': 'seodaemun', '서초': 'seocho', '성동': 'seongdong',
            '성북': 'seongbuk', '송파': 'songpa', '양천': 'yangcheon', '영등포': 'yeongdeungpo',
            '용산': 'yongsan', '은평': 'eunpyeong', '종로': 'jongno', '중구': 'junggu',
            '중랑': 'jungnang'
        }.get(region_name, '')
        region_info = REGION_DISTRICTS.get(region_key, {})
        region_description = region_info.get('description', '서울 지역')
        display_name = region_name
        title_prefix = f'서울 {region_name}'
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        intro = random.choice(theme_info['introductions'])
        return f"""            <h3>{theme_info['icon']} {title_prefix} {theme_info['name']} 소개</h3>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>는 {region_description} {intro} {title_prefix}에서는 이러한 전문 {theme_info['name']} 서비스를 제공하고 있으며, 각 지역마다 전문 {theme_info['name']} 업체가 운영되고 있습니다.
            </p>
            <p>
              {title_prefix} {theme_info['name']}는 단순한 피로 회복을 넘어서 몸과 마음의 완전한 힐링을 추구합니다. 전문 관리사들이 제공하는 다양한 {theme_info['name']} 기법을 통해 일상의 스트레스와 피로를 완전히 해소하고, {display_name if display_name else '서울'}의 여유로운 분위기 속에서 진정한 휴식을 경험할 수 있습니다.
            </p>"""
    else:
        return f"""            <h3>🏢 {title_prefix} 마사지 소개</h3>
            <p>
              <strong>{title_prefix} 마사지</strong>는 {region_description} {display_name if display_name else '서울'}에서 제공되는 전문 마사지 서비스입니다. {display_name if display_name else '서울'}은 다양한 지역에 마사지 업체들이 위치해 있습니다.
            </p>
            <p>
              {title_prefix} 마사지는 단순한 피로 회복을 넘어서 몸과 마음의 완전한 힐링을 추구합니다. 전문 관리사들이 제공하는 다양한 마사지 기법을 통해 일상의 스트레스와 피로를 완전히 해소하고, {display_name if display_name else '서울'}의 여유로운 분위기 속에서 진정한 휴식을 경험할 수 있습니다.
            </p>"""

def generate_features(region_name, theme_name=None):
    """특징과 내용 생성 (SEO 중복 방지)"""
    if region_name == '서울':
        display_name = ''
        title_prefix = '서울'
    else:
        display_name = region_name
        title_prefix = f'서울 {region_name}'
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        features = random.choice(theme_info['features_list'])
        features_html = '\n'.join([f'                <li><strong>{feature}:</strong> {theme_info["name"]}의 핵심 특징으로, 고객에게 최적의 서비스를 제공합니다. 전문 관리사가 정성스럽게 시술하여 만족도를 극대화합니다.</li>' for feature in features])
        return f"""            <h4>✨ {title_prefix} {theme_info['name']}의 특징과 내용</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>는 {display_name if display_name else '서울'}만의 독특한 특성을 가지고 있습니다. 전문 {theme_info['name']} 서비스를 제공하며, 고객의 만족도를 최우선으로 생각합니다. {display_name if display_name else '서울'}의 지역적 특색과 {theme_info['name']}의 전문성이 결합되어 최고의 힐링 경험을 선사합니다.
            </p>
            <div class="info-highlight">
              <h4>🌟 {theme_info['name']}의 핵심 특징</h4>
              <ul>
{features_html}
              </ul>
            </div>"""
    else:
        return f"""            <h4>✨ {title_prefix} 마사지의 특징과 내용</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>는 {display_name if display_name else '서울'}만의 독특한 특성을 가지고 있습니다. 다양한 마사지 서비스를 제공하며, 고객의 만족도를 최우선으로 생각합니다. {display_name if display_name else '서울'}의 지역적 특색과 전문 마사지 기술이 결합되어 최고의 힐링 경험을 선사합니다.
            </p>
            <div class="info-highlight">
              <h4>🌟 마사지의 핵심 특징</h4>
              <ul>
                <li><strong>전문 마사지 기술:</strong> 전문 자격증을 보유한 경험 많은 관리사들이 서비스를 제공합니다. 지속적인 교육을 통해 최신 마사지 기법을 습득하고 있습니다.</li>
                <li><strong>다양한 마사지 기법:</strong> 스웨디시, 타이, 아로마 등 다양한 마사지 기법을 제공합니다. 고객의 필요에 맞는 최적의 기법을 선택할 수 있습니다.</li>
                <li><strong>개인 맞춤 서비스:</strong> 고객의 상태와 목적에 따라 맞춤형 서비스를 제공합니다. 전문 상담을 통해 개인에게 최적화된 마사지를 받을 수 있습니다.</li>
                <li><strong>편안한 환경:</strong> 깨끗하고 편안한 환경에서 마사지를 받을 수 있습니다. 프라이버시가 보장되는 개인 공간에서 편안하게 휴식을 취할 수 있습니다.</li>
                <li><strong>합리적인 가격:</strong> 합리적인 가격대를 형성하고 있어 가성비 좋은 서비스를 받을 수 있습니다. 다양한 코스와 가격대를 선택할 수 있습니다.</li>
              </ul>
            </div>"""

def generate_districts(region_name, theme_name=None):
    """행정구간 생성"""
    if region_name == '서울':
        # 서울 전체인 경우 구 정보 제공
        districts = ['강남', '강동', '강북', '강서', '관악', '광진', '구로', '금천', '노원', '도봉', '동대문', '동작', '마포', '서대문', '서초', '성동', '성북', '송파', '양천', '영등포', '용산', '은평', '종로', '중구', '중랑']
        districts_html = '\n'.join([f'                <li><strong>{district}:</strong> 서울 {district}에는 전문 마사지 업체들이 위치해 있으며, 각 구별로 특색 있는 마사지 서비스를 제공합니다.</li>' for district in districts[:12]])
        theme_display = THEME_INFO[theme_name]['name'] if theme_name and theme_name in THEME_INFO else "마사지"
        return f"""            <h4>🗺️ 서울 {theme_display} 추천 행정구간</h4>
            <p>
              <strong>서울</strong>은 25개 구로 구성되어 있으며, 각 구마다 전문 {theme_display} 업체들이 운영되고 있습니다. 서울의 주요 구별 {theme_display} 특색을 소개합니다.
            </p>
            <div class="info-highlight">
              <h4>🏛️ 서울 주요 구</h4>
              <ul>
{districts_html}
              </ul>
            </div>"""
    else:
        # 상세지역인 경우 동 정보 제공
        region_key = {
            '강남': 'gangnam', '강동': 'gangdong', '강북': 'gangbuk', '강서': 'gangseo',
            '관악': 'gwanak', '광진': 'gwangjin', '구로': 'guro', '금천': 'geumcheon',
            '노원': 'nowon', '도봉': 'dobong', '동대문': 'dongdaemun', '동작': 'dongjak',
            '마포': 'mapo', '서대문': 'seodaemun', '서초': 'seocho', '성동': 'seongdong',
            '성북': 'seongbuk', '송파': 'songpa', '양천': 'yangcheon', '영등포': 'yeongdeungpo',
            '용산': 'yongsan', '은평': 'eunpyeong', '종로': 'jongno', '중구': 'junggu',
            '중랑': 'jungnang'
        }.get(region_name, '')
        region_info = REGION_DISTRICTS.get(region_key, {})
        districts = region_info.get('districts', [])
        
        if not districts:
            districts = [f'{region_name} 시내', f'{region_name} 중심가']
        
        if theme_name:
            theme_info = THEME_INFO[theme_name]
            district_descriptions = [
                f'{region_name} {theme_info["name"]} 업체가 위치해 있으며, 전문 {theme_info["name"]} 서비스를 제공합니다.',
                f'접근성이 좋고 다양한 가격대의 {theme_info["name"]} 서비스를 선택할 수 있습니다.',
                f'전문 관리사가 정성스럽게 {theme_info["name"]} 시술을 제공하여 만족도가 높습니다.',
                f'{theme_info["name"]} 업체들이 집중되어 있어 비교 선택이 용이합니다.',
                f'편안한 환경에서 전문적인 {theme_info["name"]} 서비스를 받을 수 있습니다.',
                f'다양한 {theme_info["name"]} 코스와 프로그램을 제공하여 고객의 선택권이 넓습니다.',
                f'전문 자격증을 보유한 관리사가 {theme_info["name"]} 시술을 제공합니다.'
            ]
            districts_html = '\n'.join([f'                <li><strong>{district}:</strong> {random.choice(district_descriptions)}</li>' for district in districts[:7]])
        else:
            district_descriptions = [
                f'{region_name} 마사지 업체가 위치해 있으며, 전문 마사지 서비스를 제공합니다.',
                '접근성이 좋고 다양한 가격대의 마사지 서비스를 선택할 수 있습니다.',
                '전문 관리사가 정성스럽게 마사지 시술을 제공하여 만족도가 높습니다.',
                '마사지 업체들이 집중되어 있어 비교 선택이 용이합니다.',
                '편안한 환경에서 전문적인 마사지 서비스를 받을 수 있습니다.',
                '다양한 마사지 코스와 프로그램을 제공하여 고객의 선택권이 넓습니다.',
                '전문 자격증을 보유한 관리사가 마사지 시술을 제공합니다.'
            ]
            districts_html = '\n'.join([f'                <li><strong>{district}:</strong> {random.choice(district_descriptions)}</li>' for district in districts[:7]])
        
        theme_display = THEME_INFO[theme_name]['name'] if theme_name and theme_name in THEME_INFO else "마사지"
        return f"""            <h4>🗺️ 서울 {region_name} {theme_display} 추천 행정구간</h4>
            <p>
              <strong>{region_name}</strong>은 다양한 행정구간으로 구성되어 있으며, 각 지역마다 전문 {theme_display} 업체들이 운영되고 있습니다. {region_name}의 주요 행정구간별 {theme_display} 특색을 소개합니다.
            </p>
            <div class="info-highlight">
              <h4>🏛️ {region_name} 주요 행정구간</h4>
              <ul>
{districts_html}
              </ul>
            </div>"""

def generate_tourism(region_name, theme_name=None):
    """관광 및 놀이 생성"""
    display_name = '서울' if region_name == '서울' else region_name
    title_prefix = '서울' if region_name == '서울' else f'서울 {region_name}'
    
    tourism_html = ''
    for category in TOURISM_SPOTS:
        spots_list = []
        for spot in category['spots'][:3]:
            if ': ' in spot:
                spot_name, spot_desc = spot.split(': ', 1)
                spots_list.append(f'                <li><strong>{spot_name}:</strong> {spot_desc}</li>')
            else:
                spots_list.append(f'                <li><strong>{spot}</strong></li>')
        spots_html = '\n'.join(spots_list)
        tourism_html += f"""            <div class="info-highlight">
              <h4>🌊 {category['category']}</h4>
              <ul>
{spots_html}
              </ul>
            </div>

"""
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        return f"""            <h4>🎨 {title_prefix} {theme_info['name']} 후 추천 관광지 및 놀이</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>를 받은 후에는 서울의 다양한 관광지와 놀이 시설을 즐기실 수 있습니다. {theme_info['name']}로 풀린 몸과 마음으로 서울의 특별한 경험을 더욱 풍성하게 만들어보세요.
            </p>

{tourism_html.rstrip()}"""
    else:
        return f"""            <h4>🎨 {title_prefix} 마사지 후 추천 관광지 및 놀이</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>를 받은 후에는 서울의 다양한 관광지와 놀이 시설을 즐기실 수 있습니다. 마사지로 풀린 몸과 마음으로 서울의 특별한 경험을 더욱 풍성하게 만들어보세요.
            </p>

{tourism_html.rstrip()}"""

def generate_food(region_name, theme_name=None):
    """음식 추천 생성"""
    display_name = '서울' if region_name == '서울' else region_name
    title_prefix = '서울' if region_name == '서울' else f'서울 {region_name}'
    
    food_html = ''
    for category in FOOD_RECOMMENDATIONS:
        foods_list = []
        for food in category['foods'][:3]:
            if ': ' in food:
                food_name, food_desc = food.split(': ', 1)
                foods_list.append(f'                <li><strong>{food_name}:</strong> {food_desc}</li>')
            else:
                foods_list.append(f'                <li><strong>{food}</strong></li>')
        foods_html = '\n'.join(foods_list)
        food_html += f"""            <div class="info-highlight">
              <h4>🦀 {category['category']}</h4>
              <ul>
{foods_html}
              </ul>
            </div>

"""
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        return f"""            <h4>🍽️ {title_prefix} {theme_info['name']} 후 추천 음식 및 경로</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>를 받은 후에는 서울의 맛있는 음식으로 에너지를 보충하세요. {theme_info['name']}로 활력을 회복한 후 서울의 특별한 맛을 즐기시면 더욱 완벽한 하루가 됩니다.
            </p>

{food_html.rstrip()}"""
    else:
        return f"""            <h4>🍽️ {title_prefix} 마사지 후 추천 음식 및 경로</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>를 받은 후에는 서울의 맛있는 음식으로 에너지를 보충하세요. 마사지로 활력을 회복한 후 서울의 특별한 맛을 즐기시면 더욱 완벽한 하루가 됩니다.
            </p>

{food_html.rstrip()}"""

def generate_reviews(region_name, theme_name=None):
    """후기 생성 (테마별 다양한 후기)"""
    display_name = '서울' if region_name == '서울' else region_name
    title_prefix = '서울' if region_name == '서울' else f'서울 {region_name}'
    theme_display = THEME_INFO[theme_name]['name'] if theme_name and theme_name in THEME_INFO else "마사지"
    
    if theme_name and theme_name in THEME_INFO:
        theme_reviews = THEME_INFO[theme_name]['reviews']
        review_names = ['김○○님', '박○○님', '이○○님', '최○○님', '정○○님', '강○○님', '조○○님', '한○○님']
        review_titles = [
            '정말 좋았어요',
            '만족스러운 경험이었습니다',
            '피로가 완전히 해소되었어요',
            '전문적인 서비스였습니다',
            '정기적으로 받고 있어요',
            '강력 추천합니다',
            '에너지가 회복되었어요',
            '완벽한 경험이었습니다'
        ]
        
        reviews_html = ''
        for i in range(8):
            review_text = random.choice(theme_reviews) if theme_reviews else f'{display_name}에서 {theme_display}를 받으니 정말 만족스러웠어요.'
            reviews_html += f"""              <div class="review-story">
                <h6>✨ "{review_titles[i]}" - {review_names[i]}</h6>
                <p>
                  "{review_text}"
                </p>
              </div>

"""
    else:
        review_names = ['김○○님', '박○○님', '이○○님', '최○○님', '정○○님', '강○○님', '조○○님', '한○○님']
        review_titles = [
            '정말 좋았어요',
            '만족스러운 경험이었습니다',
            '피로가 완전히 해소되었어요',
            '전문적인 서비스였습니다',
            '정기적으로 받고 있어요',
            '강력 추천합니다',
            '에너지가 회복되었어요',
            '완벽한 경험이었습니다'
        ]
        review_details = [
            '전문 관리사분이 정성스럽게 시술해주셔서 몸과 마음이 모두 편안해졌어요.',
            '시설도 깨끗하고 서비스도 훌륭했습니다.',
            '하루 종일 쌓인 피로가 한 번에 사라졌습니다.',
            '자격증을 보유한 전문 관리사분이 시술해주셔서 안심할 수 있었습니다.',
            '몸과 마음의 건강을 위해 정기적으로 받고 있습니다.',
            '친구들한테도 추천할 만큼 만족스러웠습니다.',
            '마사지 후 새로운 에너지로 일상을 시작할 수 있었습니다.',
            '예상보다 훨씬 좋아서 다음에도 또 오고 싶습니다.'
        ]
        
        reviews_html = ''
        for i in range(8):
            reviews_html += f"""              <div class="review-story">
                <h6>✨ "{review_titles[i]}" - {review_names[i]}</h6>
                <p>
                  "{display_name}에서 {theme_display}를 받으니 {review_details[i]}"
                </p>
              </div>

"""
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        return f"""            <h4>💬 {title_prefix} {theme_info['name']} 실제 고객 후기</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>를 실제로 이용하신 고객님들의 생생한 후기와 특별한 사연들을 소개합니다. {display_name}에서 {theme_info['name']}를 받으신 분들의 솔직한 경험담을 통해 더욱 신뢰할 수 있는 정보를 제공합니다.
            </p>
            <div class="review-stories">
{reviews_html.rstrip()}
            </div>"""
    else:
        return f"""            <h4>💬 {title_prefix} 마사지 실제 고객 후기</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>를 실제로 이용하신 고객님들의 생생한 후기와 특별한 사연들을 소개합니다. {display_name}에서 마사지를 받으신 분들의 솔직한 경험담을 통해 더욱 신뢰할 수 있는 정보를 제공합니다.
            </p>
            <div class="review-stories">
{reviews_html.rstrip()}
            </div>"""

def generate_benefits(region_name, theme_name=None):
    """받으면 좋은 점 생성"""
    display_name = '서울' if region_name == '서울' else region_name
    title_prefix = '서울' if region_name == '서울' else f'서울 {region_name}'
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        benefits_html = '\n'.join([f'                <li><strong>{benefit}:</strong> {theme_info["name"]}를 통해 {benefit}을(를) 경험할 수 있습니다. 전문 관리사의 정성스러운 시술로 최적의 효과를 얻을 수 있습니다.</li>' for benefit in theme_info['benefits']])
        return f"""            <h4>💎 {title_prefix} {theme_info['name']} 받으면 좋은 점</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>를 받으면 다양한 긍정적인 효과를 경험할 수 있습니다. {theme_info['name']}의 특별한 기법으로 전신 건강에도 많은 도움이 됩니다.
            </p>
            <div class="info-highlight">
              <h4>🏥 신체적 건강 효과</h4>
              <ul>
{benefits_html}
              </ul>
            </div>
            <div class="info-highlight">
              <h4>🧘 정신적 건강 효과</h4>
              <ul>
                <li><strong>스트레스 해소:</strong> {theme_info["name"]}는 신체적 스트레스뿐만 아니라 정신적 스트레스도 해소해줍니다. 일상의 고민과 걱정을 잠시 잊을 수 있습니다.</li>
                <li><strong>에너지 충전:</strong> {theme_info["name"]} 후 몸과 마음이 재충전되어 새로운 에너지로 일상을 시작할 수 있습니다.</li>
                <li><strong>감정 안정:</strong> {theme_info["name"]}는 교감신경을 안정시켜 감정을 조절하고 마음의 평화를 찾는 데 도움이 됩니다.</li>
              </ul>
            </div>"""
    else:
        return f"""            <h4>💎 {title_prefix} 마사지 받으면 좋은 점</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>를 받으면 다양한 긍정적인 효과를 경험할 수 있습니다. 마사지의 특별한 기법으로 전신 건강에도 많은 도움이 됩니다.
            </p>
            <div class="info-highlight">
              <h4>🏥 신체적 건강 효과</h4>
              <ul>
                <li><strong>근육 이완:</strong> 마사지를 통해 근육을 이완시켜 피로를 해소합니다. 하루 종일 쌓인 근육 긴장을 완화합니다.</li>
                <li><strong>혈액순환 개선:</strong> 마사지를 통해 혈액순환이 개선되어 전신 건강이 향상됩니다. 산소와 영양소 공급이 원활해집니다.</li>
                <li><strong>스트레스 해소:</strong> 마사지는 신체적 스트레스뿐만 아니라 정신적 스트레스도 해소해줍니다. 일상의 고민과 걱정을 잠시 잊을 수 있습니다.</li>
                <li><strong>수면 질 개선:</strong> 마사지 후 편안한 상태에서 숙면을 취할 수 있어 수면의 질이 향상됩니다.</li>
                <li><strong>면역력 강화:</strong> 정기적인 마사지는 면역력을 강화하고 질병 예방에 도움이 됩니다.</li>
              </ul>
            </div>
            <div class="info-highlight">
              <h4>🧘 정신적 건강 효과</h4>
              <ul>
                <li><strong>스트레스 해소:</strong> 마사지는 신체적 스트레스뿐만 아니라 정신적 스트레스도 해소해줍니다.</li>
                <li><strong>에너지 충전:</strong> 마사지 후 몸과 마음이 재충전되어 새로운 에너지로 일상을 시작할 수 있습니다.</li>
                <li><strong>감정 안정:</strong> 마사지는 교감신경을 안정시켜 감정을 조절하고 마음의 평화를 찾는 데 도움이 됩니다.</li>
              </ul>
            </div>"""

def generate_services(region_name, theme_name=None):
    """서비스 소개 생성"""
    display_name = '서울' if region_name == '서울' else region_name
    title_prefix = '서울' if region_name == '서울' else f'서울 {region_name}'
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        services_html = '\n'.join([f'                <div class="service-item"><i class="fas fa-spa"></i><span>{service}</span></div>' for service in theme_info['services']])
        services_detail_html = '\n'.join([f"""                <div class="service-detail-item">
                  <h5>✨ {service}</h5>
                  <p>
                    {service} 서비스로 고객에게 최적의 {theme_info["name"]} 경험을 제공합니다. 전문 관리사가 정성스럽게 시술하여 {theme_info["name"]}의 효과를 극대화합니다.
                  </p>
                </div>""" for service in theme_info['services']])
        return f"""            <h4>🎁 {title_prefix} {theme_info['name']} 서비스 소개</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']} 업체</strong>에서는 {display_name if display_name else '서울'}만의 특별한 {theme_info['name']} 서비스와 상품을 제공하여 고객님들의 만족도를 극대화하고 있습니다.
            </p>
            <div class="service-categories">
              <h4>🌟 {title_prefix} {theme_info['name']} 업체 제공 서비스</h4>
              <div class="service-grid">
{services_html}
              </div>
              <div class="service-details">
{services_detail_html}
              </div>
            </div>"""
    else:
        services = ['전신 마사지', '등 마사지', '다리 마사지', '팔 마사지', '발 마사지', '헤드 마사지']
        services_html = '\n'.join([f'                <div class="service-item"><i class="fas fa-spa"></i><span>{service}</span></div>' for service in services])
        services_detail_html = '\n'.join([f"""                <div class="service-detail-item">
                  <h5>✨ {service}</h5>
                  <p>
                    {service} 서비스로 고객에게 최적의 마사지 경험을 제공합니다. 전문 관리사가 정성스럽게 시술하여 마사지의 효과를 극대화합니다.
                  </p>
                </div>""" for service in services])
        return f"""            <h4>🎁 {title_prefix} 마사지 서비스 소개</h4>
            <p>
              <strong>{title_prefix} 마사지 업체</strong>에서는 {display_name if display_name else '서울'}만의 특별한 마사지 서비스와 상품을 제공하여 고객님들의 만족도를 극대화하고 있습니다.
            </p>
            <div class="service-categories">
              <h4>🌟 {title_prefix} 마사지 업체 제공 서비스</h4>
              <div class="service-grid">
{services_html}
              </div>
              <div class="service-details">
{services_detail_html}
              </div>
            </div>"""

def generate_modal_content(region_name, theme_name=None):
    """모달 내용 생성 (modal-body 내부 내용만)"""
    content = f"""          <div class="terms-section">
{generate_introduction(region_name, theme_name)}

{generate_features(region_name, theme_name)}

{generate_districts(region_name, theme_name)}

{generate_tourism(region_name, theme_name)}

{generate_food(region_name, theme_name)}

{generate_reviews(region_name, theme_name)}

{generate_benefits(region_name, theme_name)}

{generate_services(region_name, theme_name)}
          </div>"""
    return content

def update_file(file_path, region_name, theme_name=None):
    """파일 업데이트"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # relatedInfoModal의 modal-body 내용 찾기
        pattern = r'(<div id="relatedInfoModal"[^>]*>.*?<div class="modal-body">)(.*?)(</div>\s*</div>\s*</div>\s*(?:<!--.*?-->)?\s*(?:<div id="hamburger-menu-container"></div>)?\s*</body>)'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            new_modal_body = generate_modal_content(region_name, theme_name)
            # modal-body 시작 태그는 유지하고 내용만 교체
            new_content = content[:match.start(2)] + '\n        ' + new_modal_body + '\n        ' + content[match.end(2):]
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[OK] Updated: {os.path.basename(file_path)}")
            return True
        else:
            print(f"[SKIP] Pattern not found: {os.path.basename(file_path)}")
            return False
    except Exception as e:
        print(f"[ERROR] {os.path.basename(file_path)}: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """메인 함수"""
    public_dir = Path('public')
    
    # 테마 목록
    themes = ['waxing', 'thai', 'swedish', 'aroma', 'massage', 'foot', 'chinese', 'outcall']
    
    # 상세지역 목록
    detail_regions = ['gangnam', 'gangdong', 'gangbuk', 'gangseo', 'gwanak', 'gwangjin', 'guro', 'geumcheon',
                     'nowon', 'dobong', 'dongdaemun', 'dongjak', 'mapo', 'seodaemun', 'seocho', 'seongdong',
                     'seongbuk', 'songpa', 'yangcheon', 'yeongdeungpo', 'yongsan', 'eunpyeong', 'jongno', 'junggu',
                     'jungnang']
    
    # 지역명 매핑
    region_name_map = {
        'gangnam': '강남', 'gangdong': '강동', 'gangbuk': '강북', 'gangseo': '강서',
        'gwanak': '관악', 'gwangjin': '광진', 'guro': '구로', 'geumcheon': '금천',
        'nowon': '노원', 'dobong': '도봉', 'dongdaemun': '동대문', 'dongjak': '동작',
        'mapo': '마포', 'seodaemun': '서대문', 'seocho': '서초', 'seongdong': '성동',
        'seongbuk': '성북', 'songpa': '송파', 'yangcheon': '양천', 'yeongdeungpo': '영등포',
        'yongsan': '용산', 'eunpyeong': '은평', 'jongno': '종로', 'junggu': '중구',
        'jungnang': '중랑'
    }
    
    updated_count = 0
    
    # 1. 서울 전체 파일 업데이트
    print("=== 서울 전체 파일 업데이트 시작 ===")
    file_path = public_dir / 'seoul.html'
    if file_path.exists():
        if update_file(file_path, '서울', None):
            updated_count += 1
    
    # 2. 서울 + 필터테마 파일들 업데이트
    print("\n=== 서울 + 필터테마 파일 업데이트 시작 ===")
    for theme in themes:
        file_path = public_dir / f'seoul-{theme}.html'
        if file_path.exists():
            if update_file(file_path, '서울', theme):
                updated_count += 1
    
    # 3. 서울 + 상세지역 파일들 업데이트
    print("\n=== 서울 + 상세지역 파일 업데이트 시작 ===")
    for region in detail_regions:
        file_path = public_dir / f'seoul-{region}.html'
        if file_path.exists():
            region_name = region_name_map.get(region, region)
            if update_file(file_path, region_name, None):
                updated_count += 1
    
    # 4. 서울 + 상세지역 + 테마 파일들 업데이트
    print("\n=== 서울 + 상세지역 + 테마 파일 업데이트 시작 ===")
    for region in detail_regions:
        for theme in themes:
            file_path = public_dir / f'seoul-{region}-{theme}.html'
            if file_path.exists():
                region_name = region_name_map.get(region, region)
                if update_file(file_path, region_name, theme):
                    updated_count += 1
    
    print(f"\n[완료] 총 {updated_count}개 파일 업데이트 완료!")

if __name__ == '__main__':
    main()

