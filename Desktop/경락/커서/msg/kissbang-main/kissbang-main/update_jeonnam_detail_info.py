#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
전남 HTML 파일들의 관련정보 모달 내용을 자동으로 업데이트하는 스크립트
"""

import os
import re
from pathlib import Path
import random

# 전남 지역별 행정구간 정보
REGION_DISTRICTS = {
    'mokpo': {
        'name': '목포',
        'districts': [
            '시내 중심', '용해동', '상동', '하당동', '삼학동', '옥암동', '부주동'
        ],
        'description': '전남의 서해안 항구 도시로, 다도해의 관문 역할을 하는 지역입니다.'
    },
    'yeosu': {
        'name': '여수',
        'districts': [
            '시내 중심', '돌산읍', '소호동', '중앙동', '돌산도', '오동도', '만성동'
        ],
        'description': '아름다운 해안 도시로, 여수엑스포와 해상케이블카가 있는 관광 도시입니다.'
    },
    'suncheon': {
        'name': '순천',
        'districts': [
            '시내 중심', '순천만', '조곡동', '저전동', '왕지동', '조곡동', '해룡면'
        ],
        'description': '순천만습지가 있는 생태 관광 도시로, 자연과 문화가 어우러진 지역입니다.'
    },
    'naju': {
        'name': '나주',
        'districts': [
            '시내 중심', '나주읍', '빛가람동', '공산면', '다시면', '문평면'
        ],
        'description': '전남의 중심 지역으로, 빛가람혁신도시가 있는 지역입니다.'
    },
    'gwangyang': {
        'name': '광양',
        'districts': [
            '시내 중심', '광양읍', '옥곡면', '진월면', '다압면', '중마동'
        ],
        'description': '포스코가 있는 산업 도시로, 해안 휴양지도 함께 있는 지역입니다.'
    },
    'damyang': {
        'name': '담양',
        'districts': [
            '담양읍', '고서면', '창평면', '대전면', '무정면', '용면'
        ],
        'description': '죽제품과 메타세쿼이아 가로수길로 유명한 지역입니다.'
    },
    'gokseong': {
        'name': '곡성',
        'districts': [
            '곡성읍', '오곡면', '삼기면', '석곡면', '목사동면', '죽곡면'
        ],
        'description': '섬진강이 흐르는 자연 환경이 우수한 지역입니다.'
    },
    'gurye': {
        'name': '구례',
        'districts': [
            '구례읍', '문척면', '간전면', '토지면', '마산면', '광의면'
        ],
        'description': '지리산국립공원이 있는 자연 관광지입니다.'
    },
    'goheung': {
        'name': '고흥',
        'districts': [
            '고흥읍', '도양읍', '풍양면', '도덕면', '금산면', '대서면'
        ],
        'description': '고흥반도가 있는 해안 지역으로, 아름다운 해안선을 자랑합니다.'
    },
    'boseong': {
        'name': '보성',
        'districts': [
            '보성읍', '벌교읍', '노동면', '미력면', '득량면', '회천면'
        ],
        'description': '녹차로 유명한 지역으로, 대한다원이 있는 관광지입니다.'
    },
    'hwasun': {
        'name': '화순',
        'districts': [
            '화순읍', '한천면', '춘양면', '청풍면', '이양면', '능주면'
        ],
        'description': '화순고인돌 유적지가 있는 역사 문화 지역입니다.'
    },
    'jangheung': {
        'name': '장흥',
        'districts': [
            '장흥읍', '관산읍', '대덕읍', '용산면', '안양면', '부산면'
        ],
        'description': '장흥벌이 있는 농업 지역으로, 전통 문화가 살아있는 지역입니다.'
    },
    'gangjin': {
        'name': '강진',
        'districts': [
            '강진읍', '군동면', '칠량면', '대구면', '도암면', '신전면'
        ],
        'description': '강진만이 있는 해안 지역으로, 갯벌 체험이 가능한 지역입니다.'
    },
    'haenam': {
        'name': '해남',
        'districts': [
            '해남읍', '삼산면', '화산면', '현산면', '송지면', '북평면'
        ],
        'description': '대한민국 최남단 지역으로, 땅끝마을이 있는 지역입니다.'
    },
    'yeongam': {
        'name': '영암',
        'districts': [
            '영암읍', '삼호읍', '덕진면', '신북면', '시종면', '도포면'
        ],
        'description': '영암호가 있는 지역으로, 자연 환경이 우수한 지역입니다.'
    },
    'muan': {
        'name': '무안',
        'districts': [
            '무안읍', '일로읍', '삼향읍', '몽탄면', '청계면', '현경면'
        ],
        'description': '무안국제공항이 있는 지역으로, 접근성이 좋은 지역입니다.'
    },
    'hampyeong': {
        'name': '함평',
        'districts': [
            '함평읍', '손불면', '신광면', '학교면', '엄다면', '대동면'
        ],
        'description': '함평나비축제로 유명한 지역입니다.'
    },
    'yeonggwang': {
        'name': '영광',
        'districts': [
            '영광읍', '홍농읍', '대마면', '묘량면', '불갑면', '군서면'
        ],
        'description': '영광법성포 굴비로 유명한 지역입니다.'
    },
    'jangseong': {
        'name': '장성',
        'districts': [
            '장성읍', '진원면', '남면', '동화면', '삼서면', '삼계면'
        ],
        'description': '백양사가 있는 지역으로, 내장산과 인접한 지역입니다.'
    },
    'wando': {
        'name': '완도',
        'districts': [
            '완도읍', '노화읍', '군외면', '신지면', '고금면', '약산면'
        ],
        'description': '완도군은 섬으로 이루어진 지역으로, 해산물이 풍부한 지역입니다.'
    },
    'jindo': {
        'name': '진도',
        'districts': [
            '진도읍', '군내면', '고군면', '의신면', '임회면', '지산면'
        ],
        'description': '진도아리랑과 진도개로 유명한 지역입니다.'
    },
    'sinan': {
        'name': '신안',
        'districts': [
            '지도읍', '압해읍', '증도면', '임자면', '자은면', '비금면'
        ],
        'description': '1004개의 섬으로 이루어진 지역으로, 천사섬으로 유명합니다.'
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

# 전남 관광지 정보
TOURISM_SPOTS = [
    {
        'category': '해안 휴양지',
        'spots': [
            '여수 오동도: 아름다운 섬으로, 해상케이블카와 등대가 있는 관광지입니다.',
            '순천만습지: 세계적으로 유명한 갯벌 습지로, 생태 관광지입니다.',
            '완도 청산도: 아름다운 섬으로, 해안 도로가 유명합니다.',
            '진도 우도: 진도와 연결된 섬으로, 해안 휴양지입니다.'
        ]
    },
    {
        'category': '문화 유적지',
        'spots': [
            '목포 근대역사관: 목포의 근대 문화유산을 감상할 수 있는 박물관입니다.',
            '나주 영산포: 백제 문화의 중심지로, 역사 유적지가 많습니다.',
            '담양 죽제품박물관: 죽제품의 역사와 문화를 배울 수 있는 박물관입니다.',
            '보성 대한다원: 녹차로 유명한 대형 다원으로, 체험이 가능합니다.'
        ]
    },
    {
        'category': '자연 관광지',
        'spots': [
            '지리산국립공원: 구례에 걸쳐 있는 국립공원으로, 등산과 자연 감상을 즐길 수 있습니다.',
            '순천만국가정원: 순천만습지와 함께 조성된 정원으로, 아름다운 풍경을 자랑합니다.',
            '담양 메타세쿼이아 가로수길: 아름다운 가로수길로, 산책하기 좋은 곳입니다.',
            '여수 엑스포: 국제 박람회가 열린 곳으로, 해상공원이 있습니다.'
        ]
    }
]

# 전남 음식 정보
FOOD_RECOMMENDATIONS = [
    {
        'category': '전남 해산물 전문 음식점',
        'foods': [
            '여수 돌산갓김치: 여수에서 만든 특별한 갓김치를 맛볼 수 있습니다.',
            '완도 전복: 완도에서 잡은 신선한 전복 요리를 즐길 수 있습니다.',
            '진도 홍어: 진도에서 만든 특별한 홍어 요리를 맛볼 수 있습니다.',
            '신안 천사섬 게장: 신안에서 만든 신선한 게장을 맛볼 수 있습니다.'
        ]
    },
    {
        'category': '전남 전통 음식',
        'foods': [
            '순천 맛집거리: 순천의 다양한 전통 음식을 맛볼 수 있는 거리입니다.',
            '보성 녹차: 보성에서 만든 유명한 녹차를 맛볼 수 있습니다.',
            '담양 죽제품: 담양에서 만든 전통 죽제품을 맛볼 수 있습니다.',
            '영광 법성포 굴비: 영광에서 만든 유명한 굴비를 맛볼 수 있습니다.'
        ]
    },
    {
        'category': '전남 카페 및 디저트',
        'foods': [
            '여수 해안가 카페: 바다 전망을 보며 커피를 마실 수 있는 카페입니다.',
            '순천만 카페: 순천만을 조망하며 디저트를 즐길 수 있는 카페입니다.',
            '담양 죽제품 카페: 죽제품을 활용한 특별한 음료를 즐길 수 있습니다.',
            '보성 녹차 카페: 보성 녹차를 활용한 다양한 음료를 즐길 수 있습니다.'
        ]
    }
]

def generate_introduction(region_name, theme_name=None):
    """소개글 생성"""
    region_name_to_key = {
        '목포': 'mokpo', '여수': 'yeosu', '순천': 'suncheon', '나주': 'naju',
        '광양': 'gwangyang', '담양': 'damyang', '곡성': 'gokseong', '구례': 'gurye',
        '고흥': 'goheung', '보성': 'boseong', '화순': 'hwasun', '장흥': 'jangheung',
        '강진': 'gangjin', '해남': 'haenam', '영암': 'yeongam', '무안': 'muan',
        '함평': 'hampyeong', '영광': 'yeonggwang', '장성': 'jangseong', '완도': 'wando',
        '진도': 'jindo', '신안': 'sinan'
    }
    
    clean_region_name = region_name.replace('시', '').replace('군', '').replace('읍', '')
    region_key = region_name_to_key.get(clean_region_name, clean_region_name.lower())
    region_info = REGION_DISTRICTS.get(region_key, {})
    region_description = region_info.get('description', '전남 지역')
    
    if region_name == '전남':
        display_name = ''
        title_prefix = '전남'
    else:
        display_name = region_name
        title_prefix = f'전남 {region_name}'
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        intro = random.choice(theme_info['introductions'])
        return f"""            <h3>{theme_info['icon']} {title_prefix} {theme_info['name']} 소개</h3>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>는 {region_description} {intro} {title_prefix}에서는 이러한 전문 {theme_info['name']} 서비스를 제공하고 있으며, 각 지역마다 전문 {theme_info['name']} 업체가 운영되고 있습니다.
            </p>
            <p>
              {title_prefix} {theme_info['name']}는 단순한 피로 회복을 넘어서 몸과 마음의 완전한 힐링을 추구합니다. 전문 관리사들이 제공하는 다양한 {theme_info['name']} 기법을 통해 일상의 스트레스와 피로를 완전히 해소하고, {display_name if display_name else '전남'}의 여유로운 분위기 속에서 진정한 휴식을 경험할 수 있습니다.
            </p>"""
    else:
        if region_name == '전남':
            region_description = '전라남도의 중심 지역으로, 아름다운 해안선과 섬들이 많은 지역입니다.'
        return f"""            <h3>🌊 {title_prefix} 마사지 소개</h3>
            <p>
              <strong>{title_prefix} 마사지</strong>는 {region_description} {display_name if display_name else '전남'}에서 제공되는 전문 마사지 서비스입니다. {display_name if display_name else '전남'}은 다양한 지역에 마사지 업체들이 위치해 있습니다.
            </p>
            <p>
              {title_prefix} 마사지는 단순한 피로 회복을 넘어서 몸과 마음의 완전한 힐링을 추구합니다. 전문 관리사들이 제공하는 다양한 마사지 기법을 통해 일상의 스트레스와 피로를 완전히 해소하고, {display_name if display_name else '전남'}의 여유로운 분위기 속에서 진정한 휴식을 경험할 수 있습니다.
            </p>"""

def generate_features(region_name, theme_name=None):
    """특징과 내용 생성 (SEO 중복 방지)"""
    if region_name == '전남':
        display_name = ''
        title_prefix = '전남'
    else:
        display_name = region_name
        title_prefix = f'전남 {region_name}'
    
    if theme_name:
        theme_info = THEME_INFO[theme_name]
        features = random.choice(theme_info['features_list'])
        features_html = '\n'.join([f'                <li><strong>{feature}:</strong> {theme_info["name"]}의 핵심 특징으로, 고객에게 최적의 서비스를 제공합니다. 전문 관리사가 정성스럽게 시술하여 만족도를 극대화합니다.</li>' for feature in features])
        return f"""            <h4>✨ {title_prefix} {theme_info['name']}의 특징과 내용</h4>
            <p>
              <strong>{title_prefix} {theme_info['name']}</strong>는 {display_name if display_name else '전남'}만의 독특한 특성을 가지고 있습니다. 전문 {theme_info['name']} 서비스를 제공하며, 고객의 만족도를 최우선으로 생각합니다. {display_name if display_name else '전남'}의 지역적 특색과 {theme_info['name']}의 전문성이 결합되어 최고의 힐링 경험을 선사합니다.
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
              <strong>{title_prefix} 마사지</strong>는 {display_name if display_name else '전남'}만의 독특한 특성을 가지고 있습니다. 다양한 마사지 서비스를 제공하며, 고객의 만족도를 최우선으로 생각합니다. {display_name if display_name else '전남'}의 지역적 특색과 전문 마사지 기술이 결합되어 최고의 힐링 경험을 선사합니다.
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
    region_name_to_key = {
        '목포': 'mokpo', '여수': 'yeosu', '순천': 'suncheon', '나주': 'naju',
        '광양': 'gwangyang', '담양': 'damyang', '곡성': 'gokseong', '구례': 'gurye',
        '고흥': 'goheung', '보성': 'boseong', '화순': 'hwasun', '장흥': 'jangheung',
        '강진': 'gangjin', '해남': 'haenam', '영암': 'yeongam', '무안': 'muan',
        '함평': 'hampyeong', '영광': 'yeonggwang', '장성': 'jangseong', '완도': 'wando',
        '진도': 'jindo', '신안': 'sinan'
    }
    
    if region_name == '전남':
        # 전남 전체인 경우 시군 정보 제공
        districts = ['목포', '여수', '순천', '나주', '광양', '담양', '곡성', '구례', '고흥', '보성', '화순', '장흥', '강진', '해남', '영암', '무안', '함평', '영광', '장성', '완도', '진도', '신안']
        districts_html = '\n'.join([f'                <li><strong>{district}:</strong> 전남 {district}에는 전문 마사지 업체들이 위치해 있으며, 각 지역별로 특색 있는 마사지 서비스를 제공합니다.</li>' for district in districts[:10]])
        theme_display = THEME_INFO[theme_name]['name'] if theme_name and theme_name in THEME_INFO else "마사지"
        return f"""            <h4>🗺️ 전남 {theme_display} 추천 행정구간</h4>
            <p>
              <strong>전남</strong>은 다양한 시군으로 구성되어 있으며, 각 지역마다 전문 {theme_display} 업체들이 운영되고 있습니다. 전남의 주요 시군별 {theme_display} 특색을 소개합니다.
            </p>
            <div class="info-highlight">
              <h4>🏛️ 전남 주요 시군</h4>
              <ul>
{districts_html}
              </ul>
            </div>"""
    else:
        # 상세지역인 경우 동 정보 제공
        clean_region_name = region_name.replace('시', '').replace('군', '').replace('읍', '')
        region_key = region_name_to_key.get(clean_region_name, clean_region_name.lower())
        region_info = REGION_DISTRICTS.get(region_key, {})
        districts = region_info.get('districts', [])
        
        if not districts:
            if region_name.endswith('시'):
                districts = [f'{region_name} 시내', f'{region_name} 중심가', f'{region_name} 인근']
            elif region_name.endswith('군'):
                districts = [f'{region_name} 읍내', f'{region_name} 중심가', f'{region_name} 인근']
            else:
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
        return f"""            <h4>🗺️ 전남 {region_name} {theme_display} 추천 행정구간</h4>
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
    display_name = '전남' if region_name == '전남' else region_name
    title_prefix = '전남' if region_name == '전남' else f'전남 {region_name}'
    
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
              <strong>{title_prefix} {theme_info['name']}</strong>를 받은 후에는 전남의 다양한 관광지와 놀이 시설을 즐기실 수 있습니다. {theme_info['name']}로 풀린 몸과 마음으로 전남의 특별한 경험을 더욱 풍성하게 만들어보세요.
            </p>

{tourism_html.rstrip()}"""
    else:
        return f"""            <h4>🎨 {title_prefix} 마사지 후 추천 관광지 및 놀이</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>를 받은 후에는 전남의 다양한 관광지와 놀이 시설을 즐기실 수 있습니다. 마사지로 풀린 몸과 마음으로 전남의 특별한 경험을 더욱 풍성하게 만들어보세요.
            </p>

{tourism_html.rstrip()}"""

def generate_food(region_name, theme_name=None):
    """음식 추천 생성"""
    display_name = '전남' if region_name == '전남' else region_name
    title_prefix = '전남' if region_name == '전남' else f'전남 {region_name}'
    
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
              <strong>{title_prefix} {theme_info['name']}</strong>를 받은 후에는 전남의 맛있는 음식으로 에너지를 보충하세요. {theme_info['name']}로 활력을 회복한 후 전남의 특별한 맛을 즐기시면 더욱 완벽한 하루가 됩니다.
            </p>

{food_html.rstrip()}"""
    else:
        return f"""            <h4>🍽️ {title_prefix} 마사지 후 추천 음식 및 경로</h4>
            <p>
              <strong>{title_prefix} 마사지</strong>를 받은 후에는 전남의 맛있는 음식으로 에너지를 보충하세요. 마사지로 활력을 회복한 후 전남의 특별한 맛을 즐기시면 더욱 완벽한 하루가 됩니다.
            </p>

{food_html.rstrip()}"""

def generate_reviews(region_name, theme_name=None):
    """후기 생성 (테마별 다양한 후기)"""
    display_name = '전남' if region_name == '전남' else region_name
    title_prefix = '전남' if region_name == '전남' else f'전남 {region_name}'
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
    display_name = '전남' if region_name == '전남' else region_name
    title_prefix = '전남' if region_name == '전남' else f'전남 {region_name}'
    
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
    display_name = '전남' if region_name == '전남' else region_name
    title_prefix = '전남' if region_name == '전남' else f'전남 {region_name}'
    
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
              <strong>{title_prefix} {theme_info['name']} 업체</strong>에서는 {display_name if display_name else '전남'}만의 특별한 {theme_info['name']} 서비스와 상품을 제공하여 고객님들의 만족도를 극대화하고 있습니다.
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
              <strong>{title_prefix} 마사지 업체</strong>에서는 {display_name if display_name else '전남'}만의 특별한 마사지 서비스와 상품을 제공하여 고객님들의 만족도를 극대화하고 있습니다.
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
    
    # 상세지역 파일들 (테마 없음)
    detail_regions = ['mokpo', 'yeosu', 'suncheon', 'naju', 'gwangyang', 'damyang', 
                     'gokseong', 'gurye', 'goheung', 'boseong', 'hwasun', 'jangheung', 
                     'gangjin', 'haenam', 'yeongam', 'muan', 'hampyeong', 'yeonggwang', 
                     'jangseong', 'wando', 'jindo', 'sinan']
    
    # 테마 목록
    themes = ['waxing', 'thai', 'swedish', 'aroma', 'massage', 'foot', 'chinese', 'outcall']
    
    # 지역명 매핑
    region_name_map = {
        'mokpo': '목포',
        'yeosu': '여수',
        'suncheon': '순천',
        'naju': '나주',
        'gwangyang': '광양',
        'damyang': '담양',
        'gokseong': '곡성',
        'gurye': '구례',
        'goheung': '고흥',
        'boseong': '보성',
        'hwasun': '화순',
        'jangheung': '장흥',
        'gangjin': '강진',
        'haenam': '해남',
        'yeongam': '영암',
        'muan': '무안',
        'hampyeong': '함평',
        'yeonggwang': '영광',
        'jangseong': '장성',
        'wando': '완도',
        'jindo': '진도',
        'sinan': '신안'
    }
    
    updated_count = 0
    
    # 1. 전남 전체 파일 업데이트
    print("=== 전남 전체 파일 업데이트 시작 ===")
    file_path = public_dir / 'jeonnam.html'
    if file_path.exists():
        if update_file(file_path, '전남', None):
            updated_count += 1
    
    # 2. 전남 + 필터테마 파일들 업데이트
    print("\n=== 전남 + 필터테마 파일 업데이트 시작 ===")
    for theme in themes:
        file_path = public_dir / f'jeonnam-{theme}.html'
        if file_path.exists():
            if update_file(file_path, '전남', theme):
                updated_count += 1
    
    # 3. 전남 + 상세지역 파일들 업데이트
    print("\n=== 전남 + 상세지역 파일 업데이트 시작 ===")
    for region in detail_regions:
        file_path = public_dir / f'jeonnam-{region}.html'
        if file_path.exists():
            region_name = region_name_map.get(region, region)
            if update_file(file_path, region_name, None):
                updated_count += 1
    
    # 4. 전남 + 상세지역 + 테마 파일들 업데이트
    print("\n=== 전남 + 상세지역 + 테마 파일 업데이트 시작 ===")
    for region in detail_regions:
        for theme in themes:
            file_path = public_dir / f'jeonnam-{region}-{theme}.html'
            if file_path.exists():
                region_name = region_name_map.get(region, region)
                if update_file(file_path, region_name, theme):
                    updated_count += 1
    
    print(f"\n[완료] 총 {updated_count}개 파일 업데이트 완료!")

if __name__ == '__main__':
    main()

