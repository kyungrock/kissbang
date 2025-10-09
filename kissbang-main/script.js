// 지역별 구 데이터
const districtData = {
  서울: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  부산: [
    '중구',
    '서구',
    '동구',
    '영도구',
    '부산진구',
    '동래구',
    '남구',
    '북구',
    '해운대구',
    '사하구',
    '금정구',
    '강서구',
    '연제구',
    '수영구',
    '사상구',
    '기장군',
  ],
  대구: ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
  인천: [
    '중구',
    '동구',
    '미추홀구',
    '연수구',
    '남동구',
    '부평구',
    '계양구',
    '서구',
    '강화군',
    '옹진군',
  ],
  광주: ['동구', '서구', '남구', '북구', '광산구'],
  대전: ['동구', '중구', '서구', '유성구', '대덕구'],
  울산: ['중구', '남구', '동구', '북구', '울주군'],
  세종: ['세종특별자치시'],
  경기: [
    '수원시',
    '성남시',
    '의정부시',
    '안양시',
    '부천시',
    '광명시',
    '평택시',
    '과천시',
    '오산시',
    '시흥시',
    '군포시',
    '의왕시',
    '하남시',
    '용인시',
    '파주시',
    '이천시',
    '안성시',
    '김포시',
    '화성시',
    '광주시',
    '여주시',
    '양평군',
    '고양시',
    '동두천시',
    '가평군',
    '연천군',
  ],
  강원: [
    '춘천시',
    '원주시',
    '강릉시',
    '동해시',
    '태백시',
    '속초시',
    '삼척시',
    '홍천군',
    '횡성군',
    '영월군',
    '평창군',
    '정선군',
    '철원군',
    '화천군',
    '양구군',
    '인제군',
    '고성군',
    '양양군',
  ],
  충북: [
    '청주시',
    '충주시',
    '제천시',
    '보은군',
    '옥천군',
    '영동군',
    '증평군',
    '진천군',
    '괴산군',
    '음성군',
    '단양군',
  ],
  충남: [
    '천안시',
    '공주시',
    '보령시',
    '아산시',
    '서산시',
    '논산시',
    '계룡시',
    '당진시',
    '금산군',
    '부여군',
    '서천군',
    '청양군',
    '홍성군',
    '예산군',
    '태안군',
  ],
  전북: [
    '전주시',
    '군산시',
    '익산시',
    '정읍시',
    '남원시',
    '김제시',
    '완주군',
    '진안군',
    '무주군',
    '장수군',
    '임실군',
    '순창군',
    '고창군',
    '부안군',
  ],
  전남: [
    '목포시',
    '여수시',
    '순천시',
    '나주시',
    '광양시',
    '담양군',
    '곡성군',
    '구례군',
    '고흥군',
    '보성군',
    '화순군',
    '장흥군',
    '강진군',
    '해남군',
    '영암군',
    '무안군',
    '함평군',
    '영광군',
    '장성군',
    '완도군',
    '진도군',
    '신안군',
  ],
  경북: [
    '포항시',
    '경주시',
    '김천시',
    '안동시',
    '구미시',
    '영주시',
    '영천시',
    '상주시',
    '문경시',
    '경산시',
    '군위군',
    '의성군',
    '청송군',
    '영양군',
    '영덕군',
    '청도군',
    '고령군',
    '성주군',
    '칠곡군',
    '예천군',
    '봉화군',
    '울진군',
    '울릉군',
  ],
  경남: [
    '창원시',
    '진주시',
    '통영시',
    '사천시',
    '김해시',
    '밀양시',
    '거제시',
    '양산시',
    '의령군',
    '함안군',
    '창녕군',
    '고성군',
    '남해군',
    '하동군',
    '산청군',
    '함양군',
    '거창군',
    '합천군',
  ],
  제주: ['제주시', '서귀포시'],
};

// 마사지 업체 데이터
const massageShops = [
  {
    id: 1,
    name: '연동 프라이빗',
    type: '마사지, 왁싱, 스웨디시',
    country: 'korea, china',
    region: '제주',
    district: '제주시',
    address: '제주특별자치도 제주시 연동 261-18',
    detailAddress: '제원 시내 부근 (정확한 위치는 예약 시 안내)',
    phone: '0507-1859-7062',
    rating: 4.9,
    reviewCount: 142,
    price: '120,000원~',
    description:
      '제주도 프라이빗 마사지샵. 20대 전문 힐링 관리사들이 정성스럽게 맞이해드리며, 스웨디시·아로마·로미로미·슈얼 등 다양한 프로그램으로 최상의 힐링을 제공합니다. 전원 한국인 여성 관리사, 프라이빗 1인샵 운영, 주차 가능.',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop&crop=center',
    services: [
      '스웨디시',
      '아로마',
      '로미로미',
      '슈얼 마사지',
      '프리미엄 왁싱',
      '전문 힐링 케어',
    ],
    subway: '제원 시내',
    operatingHours: '오전 10시 ~ 새벽 6시 (폰 꺼진 경우 마감, 랜덤 휴무)',
    staffInfo:
      '전원 20대~30대 초반 한국인 여성 관리사 (예: 소율(24), 제니(20), 연우(25), 지우(25), 서아(23), 세나(29), 다엘(22), 꽃님(27), 유주(25), 예리(21) 등)',
    features: [
      '전원 한국인 여성 관리사',
      '프라이빗 1인샵 운영',
      '주차 가능',
      '무향·무취 최고급 수용성 바디 오일 사용',
    ],
    keywords:
      '제주도건마, 제주도마사지, 제주도1인샵, 제주도스웨디시, 제주도아로마마사지, 제주도로미로미, 제주도슈얼마사지',
    courses: [
      {
        category: '스웨디시 프로그램',
        items: [
          {
            name: 'A코스',
            duration: '40분',
            price: '120,000원',
            description: '스웨디시 + 센슈얼 + HP',
          },
          {
            name: 'B코스',
            duration: '60분',
            price: '150,000원',
            description: '스웨디시 + 비디슈얼 + HP',
          },
          {
            name: 'C코스',
            duration: '70분',
            price: '180,000원',
            description: '스웨디시 + 비디슈얼 + HP',
          },
        ],
      },
      {
        category: '프리미엄 왁싱',
        items: [
          {
            name: 'A코스',
            duration: '상담',
            price: '상담 문의',
            description: '고급 브라질리언',
          },
          {
            name: 'B코스',
            duration: '상담',
            price: '상담 문의',
            description: '고급 브라질리언 +@',
          },
        ],
      },
    ],
    membershipInfo:
      '기존가 130,000원 → 회원가 120,000원 (사전 예약 및 현금 결제 시 적용)',
    reviews: [
      {
        name: '김**',
        date: '2024-09-20',
        rating: 5,
        comment:
          '제주에서 이런 곳을 찾다니! 관리사님들이 너무 친절하시고 실력도 최고예요. 스웨디시 받았는데 몸이 정말 가벼워졌어요.',
      },
      {
        name: '박**',
        date: '2024-09-15',
        rating: 5,
        comment:
          '프라이빗 1인샵이라 편안하게 받을 수 있었어요. 무향 오일이라 샤워 후에도 깔끔하고 좋았습니다. 강추!',
      },
      {
        name: '이**',
        date: '2024-09-10',
        rating: 5,
        comment:
          '20대 관리사분들이 정말 전문적이에요. 제주 여행 올 때마다 들릴 예정입니다. 주차도 편리해요.',
      },
      {
        name: '최**',
        date: '2024-09-05',
        rating: 5,
        comment:
          '소율님께 받았는데 정말 실력이 대단해요! 아로마 마사지 받고 나서 스트레스가 완전히 사라졌어요. 제주도 여행의 하이라이트였습니다.',
      },
      {
        name: '정**',
        date: '2024-08-28',
        rating: 5,
        comment:
          '연우님과 지우님이 정말 친절하시고 전문적이에요. 프리미엄 왁싱도 받았는데 무향이라 샤워 후에도 깔끔했어요. 다음에도 꼭 올게요!',
      },
      {
        name: '한**',
        date: '2024-08-20',
        rating: 5,
        comment:
          '제주도 여행 중 우연히 발견한 곳인데 정말 대박이에요! 서아님께 받은 로미로미 마사지가 너무 좋았어요. 회원가도 적용해주셔서 감사했습니다.',
      },
      {
        name: '윤**',
        date: '2024-08-15',
        rating: 5,
        comment:
          '세나님과 다엘님이 정말 예쁘고 실력도 좋아요! 슈얼 마사지 받았는데 몸이 정말 편해졌어요. 제주도에서 가장 좋은 마사지샵이에요.',
      },
      {
        name: '강**',
        date: '2024-08-10',
        rating: 5,
        comment:
          '꽃님님께 받은 스웨디시가 정말 최고예요! 20대 관리사분들이라 대화도 잘 통하고 편안했어요. 제주도 여행 필수 코스입니다.',
      },
      {
        name: '조**',
        date: '2024-08-05',
        rating: 5,
        comment:
          '유주님과 예리님이 정말 친절하시고 실력도 대단해요! 아로마 마사지 받고 나서 피부도 좋아지고 몸도 가벼워졌어요. 강력 추천합니다!',
      },
      {
        name: '임**',
        date: '2024-07-30',
        rating: 5,
        comment:
          '제이님께 받은 프리미엄 왁싱이 정말 만족스러웠어요! 무향 오일이라 샤워 후에도 깔끔하고 좋았습니다. 제주도 여행 중 최고의 선택이었어요.',
      },
    ],
  },
  {
    id: 2,
    name: '연동 MZ',
    type: '마사지, 스웨디시',
    country: 'korea',
    region: '제주',
    district: '제주시',
    address: '제주특별자치도 제주시 연동10길 16',
    detailAddress: '돔나이트 부근 (주차 문의)',
    phone: '0507-1859-6671',
    rating: 4.9,
    reviewCount: 8,
    price: '150,000원~',
    description:
      '제주 연동 최고의 서비스를 보장하는 MZ입니다. 깨끗하고 쾌적한 시설로 고객님의 지친일상에 활력과 행복으로 보답드리겠습니다. 고객님을 힐링으로 모시겠습니다.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&crop=center',
    services: [
      '스웨디시',
      '왁싱',
      '스파',
      '커플마사지',
      '아로마마사지',
      '로미로미',
      '슈얼마사지',
    ],
    subway: '돔나이트 부근',
    operatingHours: '24시간 (랜덤휴무 or 폰OFF)',
    staffInfo:
      '전원 한국인 여 쌤들 (예: 유현(24), 서우(23), 체이(25), 지우(27) 등)',
    features: [
      '전원 한국인 여성 관리사',
      '1인샵 운영',
      '주차 문의',
      '24시간 운영',
    ],
    keywords:
      '제주1인샵, 제주건마, 제주스웨디시, 제주타이마사지, 제주왁싱, 제주스파, 제주커플마사지, 제주아로마마사지, 제주로미로미, 제주슈얼마사지',
    courses: [
      {
        category: '감성 스웨디시',
        items: [
          {
            name: 'A코스',
            duration: '60분',
            price: '150,000원',
            description: '스페셜스웨디시+림프+감성',
          },
          {
            name: 'B코스',
            duration: '70분',
            price: '180,000원',
            description: '스페셜스웨디시+슈+림프+감성',
          },
        ],
      },
    ],
    membershipInfo:
      '기존가 140,000원 → 회원가 150,000원 (사전 예약 및 현금 결제 시 적용)',
    reviews: [
      {
        name: '김**',
        date: '2024-09-25',
        rating: 5,
        comment:
          'MZ에서 유현님께 받은 스웨디시가 정말 최고예요! 24시간 운영이라 늦은 시간에도 편하게 이용할 수 있었어요. 돔나이트 부근이라 위치도 좋고 주차도 편리해요.',
      },
      {
        name: '박**',
        date: '2024-09-20',
        rating: 5,
        comment:
          '서우님과 체이님이 정말 친절하시고 실력도 대단해요! 감성 스웨디시 A코스 받았는데 림프 마사지까지 해주셔서 몸이 정말 가벼워졌어요. 제주 여행의 하이라이트였습니다.',
      },
      {
        name: '이**',
        date: '2024-09-15',
        rating: 5,
        comment:
          '지우님께 받은 타이마사지가 너무 좋았어요! 20대 관리사분들이라 대화도 잘 통하고 편안했어요. 회원가도 적용해주셔서 감사했습니다. 강력 추천!',
      },
      {
        name: '최**',
        date: '2024-09-10',
        rating: 5,
        comment:
          'MZ는 정말 깔끔하고 쾌적한 시설이에요. 아로마마사지와 로미로미를 받았는데 정말 힐링되는 시간이었어요. 24시간 운영이라 언제든 이용할 수 있어서 좋아요.',
      },
      {
        name: '정**',
        date: '2024-09-05',
        rating: 5,
        comment:
          '체이님께 받은 슈얼마사지가 정말 만족스러웠어요! 1인샵이라 프라이빗하게 받을 수 있어서 더 좋았어요. 제주도에서 가장 좋은 마사지샵이에요.',
      },
      {
        name: '한**',
        date: '2024-08-30',
        rating: 5,
        comment:
          '유현님과 서우님이 정말 예쁘고 실력도 좋아요! 커플마사지 받았는데 둘 다 만족했어요. 돔나이트 근처라 숙소에서 가깝고 주차도 편리해요.',
      },
      {
        name: '윤**',
        date: '2024-08-25',
        rating: 5,
        comment:
          'MZ에서 왁싱도 받았는데 정말 깔끔하게 해주셨어요! 지우님께 받은 서비스가 너무 만족스러웠어요. 제주도 여행 중 최고의 선택이었어요.',
      },
      {
        name: '강**',
        date: '2024-08-20',
        rating: 5,
        comment:
          '24시간 운영이라 새벽에 갔는데도 친절하게 맞아주셨어요! 체이님께 받은 스파 서비스가 정말 좋았어요. 제주도 여행 필수 코스입니다.',
      },
    ],
  },
  {
    id: 3,
    name: '제주시 이쁘니출장',
    type: '출장마사지',
    country: 'korea, japan',
    region: '제주',
    district: '제주시',
    address: '제주도 전지역',
    detailAddress: '제주시 30분 이내 신속방문',
    phone: '0507-1859-6960',
    rating: 4.8,
    reviewCount: 16,
    price: '110,000원~',
    description:
      '제주도 전지역 출장마사지 최고의 서비스를 보장하는 이쁘니 출장입니다. 제주도 놀러오신 분들 또는 현지분들께 신속하고 빠른 힐링을 전달해 드립니다. 20대~30대 고퀄리티 관리사가 24시간 서비스합니다.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
    services: [
      '스웨디시',
      '아로마마사지',
      '타이마사지',
      '로미로미',
      '슈얼마사지',
      '출장마사지',
      '홈타이',
    ],
    subway: '제주도 전지역',
    operatingHours: '24시간 (폰이 꺼진 경우: 마감, 랜덤휴무)',
    staffInfo: '전원 한국인&일본 여 쌤 (20대 & 힐링샵)',
    features: [
      '제주도 전지역 출장 서비스',
      '20대~30대 고퀄리티 관리사',
      '제주시 30분 이내 신속방문',
      '24시간 운영',
      '천연 수용성 오일 사용',
      '현금 결제 시 할인 적용',
    ],
    keywords:
      '제주출장마사지, 제주도출장마사지, 제주홈타이, 제주도홈타이, 이쁘니출장, 제주출장, 제주도출장',
    courses: [
      {
        category: '힐링 테라피',
        items: [
          {
            name: 'A코스',
            duration: '60분',
            price: '110,000원',
            description: '힐링 테라피',
          },
          {
            name: 'B코스',
            duration: '80분',
            price: '130,000원',
            description: '힐링 테라피',
          },
          {
            name: 'C코스',
            duration: '100분',
            price: '160,000원',
            description: '힐링 테라피',
          },
        ],
      },
    ],
    membershipInfo:
      '기존가 130,000원 → 회원가 110,000원 (현금 결제 시 적용, 건마시티 회원임을 말씀하셔야 할인가 적용)',
    reviews: [
      {
        name: '김**',
        date: '2024-09-28',
        rating: 5,
        comment:
          '이쁘니출장에서 받은 출장마사지가 정말 최고예요! 제주시에서 30분 만에 도착해서 놀랐어요. 20대 관리사분께서 정말 부드럽고 실력 좋게 해주셨습니다.',
      },
      {
        name: '박**',
        date: '2024-09-25',
        rating: 5,
        comment:
          '제주도 여행 중 호텔에서 출장마사지를 받았는데 정말 편했어요! 24시간 운영이라 늦은 시간에도 이용할 수 있었고, 천연 오일 사용해서 피부에도 좋았어요.',
      },
      {
        name: '이**',
        date: '2024-09-22',
        rating: 5,
        comment:
          '홈타이 서비스가 정말 좋았어요! 제주도 전지역 출장 가능하다고 해서 서귀포시에서도 신청했는데 정말 와주셨어요. 힐링 테라피 C코스 받았는데 100분 동안 정말 힐링되는 시간이었어요.',
      },
      {
        name: '최**',
        date: '2024-09-20',
        rating: 5,
        comment:
          '일본인 관리사분께서 해주신 타이마사지가 너무 좋았어요! 출장마사지인데도 실내 마사지샵 못지않게 전문적이었어요. 회원가도 적용해주셔서 감사했습니다.',
      },
      {
        name: '정**',
        date: '2024-09-18',
        rating: 5,
        comment:
          '이쁘니출장은 정말 믿을만해요! 제주도 현지인인데 여러 번 이용했는데 항상 만족스러워요. 20대~30대 관리사분들이라 대화도 잘 통하고 편안했어요.',
      },
    ],
  },
  {
    id: 4,
    name: '연동 A+스웨디시',
    type: '마사지, 스웨디시',
    country: 'korea',
    region: '제주',
    district: '제주시',
    address: '제주특별자치도 제주시 연동 293-102',
    detailAddress: '송월타월 2층',
    phone: '0507-1859-6407',
    rating: 4.8,
    reviewCount: 85581,
    price: '90,000원~',
    description:
      '제주도연동 A+스웨디시 인사 드립니다! 저희 샵은 철저한 관리사 교육으로 실력 및 마인드가 정말 좋습니다. 샵으로 육체적 힐링은 물론 심신의 안정과 내적치유도 도와드리도록 하겠습니다. 감사합니다. ❤',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
    services: ['A+ 스웨디시', '감성 테라피', '스페셜 스웨디시', '림프 관리'],
    subway: '송월타월 2층',
    operatingHours: '24시간 (랜덤휴무 or 폰OFF)',
    staffInfo:
      '전원 한국인 여성 힐러 | 20대 & 힐링샵 | 모두 상기 종목 코스 수료 | 은채(20대), 소희(20대), 유미(20대), 겨울(20대), 구름(20대)',
    features: [
      '24시간 운영',
      '전원 한국인 여성 관리사',
      '20대 전문 관리사',
      '주차 가능',
      '건마시티 회원 할인',
      '송월타월 2층 위치',
    ],
    keywords:
      '제주연동마사지, A+스웨디시, 연동마사지, 제주마사지, 24시간마사지, 건마시티, 송월타월',
    courses: [
      {
        category: 'A+ 코스',
        items: [
          {
            name: 'A 주간',
            duration: '40분',
            price: '90,000원',
            description: 'A+ 스웨디시',
          },
          {
            name: 'A 야간',
            duration: '40분',
            price: '100,000원',
            description: 'A+ 스웨디시',
          },
        ],
      },
      {
        category: '감성 테라피',
        items: [
          {
            name: 'B 주간',
            duration: '60분',
            price: '140,000원',
            description: '스페셜 스웨디시 + 림프관리 + 감성',
          },
          {
            name: 'B 야간',
            duration: '60분',
            price: '150,000원',
            description: '스페셜 스웨디시 + 림프관리 + 감성',
          },
        ],
      },
      {
        category: '프리미엄 코스',
        items: [
          {
            name: 'C 주간',
            duration: '70분',
            price: '170,000원',
            description: '스페셜 스웨디시 + 슈 + 림프관리 + 감성',
          },
          {
            name: 'C 야간',
            duration: '70분',
            price: '180,000원',
            description: '스페셜 스웨디시 + 슈 + 림프관리 + 감성',
          },
        ],
      },
    ],
    membershipInfo:
      '기존가 120,000원 → 회원가 90,000원 (건마시티 회원임을 말씀하셔야 할인가 적용)',
    reviews: [
      {
        name: '건마시티 회원',
        date: '2024-12-19',
        rating: 5,
        comment:
          '철저한 관리사 교육으로 실력과 마인드가 정말 좋습니다. 24시간 운영이라 언제든 이용 가능해서 편리해요.',
      },
      {
        name: '김**',
        date: '2024-12-15',
        rating: 5,
        comment:
          'A+ 스웨디시 정말 좋았어요! 20대 관리사분들이 정말 전문적이고 친절하세요. 송월타월 2층 위치도 찾기 쉬웠어요.',
      },
      {
        name: '박**',
        date: '2024-12-10',
        rating: 5,
        comment:
          '감성 테라피 B코스 받았는데 정말 힐링되는 시간이었어요. 림프관리까지 해주셔서 몸이 정말 가벼워졌어요.',
      },
      {
        name: '이**',
        date: '2024-12-05',
        rating: 5,
        comment:
          '24시간 운영이라 새벽에 갔는데도 친절하게 맞아주셨어요! 건마시티 회원 할인도 적용해주셔서 감사했습니다.',
      },
      {
        name: '최**',
        date: '2024-11-28',
        rating: 5,
        comment:
          '프리미엄 코스 C코스 받았는데 정말 최고예요! 스페셜 스웨디시에 슈까지 해주셔서 완전 힐링되었어요.',
      },
    ],
  },
];

// DOM 요소들
const regionSelect = document.getElementById('regionSelect');
const districtSelect = document.getElementById('districtSelect');
const searchBtn = document.getElementById('searchBtn');
const mainSearchInput = document.getElementById('mainSearchInput');
const mainSearchBtn = document.getElementById('mainSearchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const massageList = document.getElementById('massageList');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');

// 현재 필터 상태
let currentFilter = 'all';
let currentRegion = '';
let currentDistrict = '';
let currentCountry = 'overall';

// 검색 디바운싱을 위한 타이머
let searchTimeout = null;

// 성인 인증 관련 함수
function checkAgeVerification() {
  const ageVerified = localStorage.getItem('ageVerified');
  const verifiedTime = localStorage.getItem('ageVerifiedTime');
  
  // 인증 유효 기간: 24시간
  const expirationTime = 24 * 60 * 60 * 1000; // 24시간 (밀리초)
  const currentTime = new Date().getTime();
  
  if (ageVerified === 'true' && verifiedTime) {
    const timeDiff = currentTime - parseInt(verifiedTime);
    if (timeDiff < expirationTime) {
      // 인증 유효
      return true;
    } else {
      // 인증 만료
      localStorage.removeItem('ageVerified');
      localStorage.removeItem('ageVerifiedTime');
      return false;
    }
  }
  
  return false;
}

function showAgeVerificationModal() {
  const modal = document.getElementById('ageVerificationModal');
  if (modal) {
    modal.classList.add('active');
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
  }
}

function hideAgeVerificationModal() {
  const modal = document.getElementById('ageVerificationModal');
  if (modal) {
    modal.classList.remove('active');
    // 스크롤 복원
    document.body.style.overflow = '';
  }
}

function confirmAge() {
  // 성인 인증 완료
  const currentTime = new Date().getTime();
  localStorage.setItem('ageVerified', 'true');
  localStorage.setItem('ageVerifiedTime', currentTime.toString());
  
  // 모달 닫기
  hideAgeVerificationModal();
}

function denyAge() {
  // 미성년자 선택 시 경고 후 다른 페이지로 리디렉션
  alert('만 19세 미만은 이용하실 수 없습니다.\n청소년 보호법에 의거하여 접근이 제한됩니다.');
  
  // 구글 홈페이지로 리디렉션 (또는 원하는 다른 페이지)
  window.location.href = 'https://www.google.com';
}

// 인증 탭 전환
function switchVerificationTab(tabName) {
  // 모든 탭 버튼 비활성화
  const tabs = document.querySelectorAll('.verification-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // 모든 인증 콘텐츠 숨기기
  const contents = document.querySelectorAll('.verification-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // 선택된 탭 활성화
  const selectedTab = Array.from(tabs).find(tab => {
    const tabText = tab.textContent.trim();
    if (tabName === 'simple' && tabText === '간편인증') return true;
    if (tabName === 'phone' && tabText === '휴대폰') return true;
    if (tabName === 'jumin' && tabText === '주민번호') return true;
    return false;
  });
  
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  
  // 선택된 콘텐츠 표시
  const contentMap = {
    'simple': 'simpleVerification',
    'phone': 'phoneVerification',
    'jumin': 'juminVerification'
  };
  
  const selectedContent = document.getElementById(contentMap[tabName]);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
}

// 휴대폰 번호 포맷팅
function formatPhoneNumber(input) {
  let value = input.value.replace(/[^0-9]/g, '');
  
  if (value.length <= 3) {
    input.value = value;
  } else if (value.length <= 7) {
    input.value = value.slice(0, 3) + '-' + value.slice(3);
  } else {
    input.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
  }
}

// 인증번호 발송 (데모용 - 실제 SMS는 발송되지 않음)
let verificationTimer;
let correctCode;

function sendVerificationCode() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const phoneError = document.getElementById('phoneError');
  
  // 휴대폰 번호 유효성 검사
  const phoneRegex = /^010-\d{4}-\d{4}$/;
  if (!phoneRegex.test(phoneNumber)) {
    phoneError.textContent = '올바른 휴대폰 번호를 입력해주세요. (010-0000-0000)';
    phoneError.classList.add('show');
    return;
  }
  
  phoneError.classList.remove('show');
  
  // 인증번호 생성 (6자리 랜덤)
  correctCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  // 실제 운영 시에는 여기서 백엔드 API 호출
  // await fetch('/api/send-verification-code', { ... });
  
  // 데모용: 콘솔에 인증번호 표시
  console.log('인증번호:', correctCode);
  alert(`[데모] 인증번호가 발송되었습니다.\n데모 인증번호: ${correctCode}\n\n* 실제 서비스에서는 SMS로 발송됩니다.`);
  
  // 인증번호 입력 필드 표시
  document.getElementById('verificationCodeGroup').style.display = 'block';
  document.getElementById('phoneVerifyBtn').style.display = 'block';
  
  // 타이머 시작 (3분)
  startTimer(180);
}

// 타이머 시작
function startTimer(seconds) {
  const timerElement = document.getElementById('timer');
  let remainingTime = seconds;
  
  // 기존 타이머 클리어
  if (verificationTimer) {
    clearInterval(verificationTimer);
  }
  
  verificationTimer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;
    
    timerElement.textContent = `${minutes}:${secs.toString().padStart(2, '0')}`;
    
    if (remainingTime <= 0) {
      clearInterval(verificationTimer);
      timerElement.textContent = '인증시간이 만료되었습니다.';
      correctCode = null;
    }
    
    remainingTime--;
  }, 1000);
}

// 휴대폰 인증 완료
function verifyPhoneCode() {
  const inputCode = document.getElementById('verificationCode').value;
  const codeError = document.getElementById('codeError');
  
  if (!inputCode) {
    codeError.textContent = '인증번호를 입력해주세요.';
    codeError.classList.add('show');
    return;
  }
  
  if (inputCode !== correctCode) {
    codeError.textContent = '인증번호가 일치하지 않습니다.';
    codeError.classList.add('show');
    return;
  }
  
  // 인증 성공
  codeError.classList.remove('show');
  clearInterval(verificationTimer);
  
  alert('휴대폰 인증이 완료되었습니다!');
  confirmAge();
}

// 주민번호 앞자리 체크 (생년월일 검증)
function checkJuminFront(input) {
  const juminError = document.getElementById('juminError');
  
  if (input.value.length === 6) {
    // 생년월일 유효성 검사
    const year = parseInt(input.value.substring(0, 2));
    const month = parseInt(input.value.substring(2, 4));
    const day = parseInt(input.value.substring(4, 6));
    
    if (month < 1 || month > 12) {
      juminError.textContent = '올바른 월을 입력해주세요. (01-12)';
      juminError.classList.add('show');
      return;
    }
    
    if (day < 1 || day > 31) {
      juminError.textContent = '올바른 일을 입력해주세요. (01-31)';
      juminError.classList.add('show');
      return;
    }
    
    juminError.classList.remove('show');
  }
}

// 주민번호 인증
function verifyJumin() {
  const juminFront = document.getElementById('juminFront').value;
  const juminBack = document.getElementById('juminBack').value;
  const juminError = document.getElementById('juminError');
  
  // 앞자리 검증
  if (juminFront.length !== 6) {
    juminError.textContent = '생년월일 6자리를 입력해주세요.';
    juminError.classList.add('show');
    return;
  }
  
  // 뒷자리 첫 번째 숫자 검증
  if (juminBack.length !== 1) {
    juminError.textContent = '주민등록번호 뒷자리 첫 번째 숫자를 입력해주세요.';
    juminError.classList.add('show');
    return;
  }
  
  // 성별 숫자 검증 (1, 2, 3, 4만 허용)
  const genderDigit = parseInt(juminBack);
  if (![1, 2, 3, 4].includes(genderDigit)) {
    juminError.textContent = '올바른 주민등록번호 뒷자리를 입력해주세요.';
    juminError.classList.add('show');
    return;
  }
  
  // 생년월일로 만 19세 이상 확인
  const year = parseInt(juminFront.substring(0, 2));
  const month = parseInt(juminFront.substring(2, 4));
  const day = parseInt(juminFront.substring(4, 6));
  
  // 세기 판별 (1, 2: 1900년대, 3, 4: 2000년대)
  let fullYear;
  if (genderDigit === 1 || genderDigit === 2) {
    fullYear = 1900 + year;
  } else {
    fullYear = 2000 + year;
  }
  
  // 만 19세 확인
  const birthDate = new Date(fullYear, month - 1, day);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  
  let actualAge = age;
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    actualAge--;
  }
  
  if (actualAge < 19) {
    juminError.textContent = '만 19세 미만은 이용할 수 없습니다.';
    juminError.classList.add('show');
    setTimeout(() => {
      denyAge();
    }, 1500);
    return;
  }
  
  // 인증 성공
  juminError.classList.remove('show');
  alert('주민번호 인증이 완료되었습니다!');
  confirmAge();
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
  // 성인 인증 확인
  if (!checkAgeVerification()) {
    showAgeVerificationModal();
  }
  
  initializeApp();
});

// 지역 선택 옵션 초기화
function initializeRegionOptions() {
  const regionSelect = document.getElementById('regionSelect');
  if (!regionSelect) return;

  // 기존 옵션 제거 (첫 번째 옵션 "지역을 선택하세요" 제외)
  while (regionSelect.children.length > 1) {
    regionSelect.removeChild(regionSelect.lastChild);
  }

  // districtData의 키들을 정렬하여 옵션으로 추가
  const regions = Object.keys(districtData).sort();
  regions.forEach((region) => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  });
}

// 앱 초기화
function initializeApp() {
  // 지역 선택 옵션 동적 생성
  initializeRegionOptions();

  // 초기 상태 설정 - 전체 필터 버튼 활성화
  const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allFilterBtn) {
    allFilterBtn.classList.add('active');
  }
  
  // footer-links 텍스트 초기 업데이트
  updateFooterLinkText();
  
  // jeju-si.html 페이지에서 구 정보 유지
  const currentPath = window.location.pathname;
  const currentFileName = currentPath.split('/').pop();
  if (currentFileName === 'jeju-si.html') {
    // 제주시로 설정
    currentRegion = '제주';
    currentDistrict = '제주시';
    currentFilter = 'all';
    
    // 구 선택 활성화
    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
    }
  } else if (currentFileName === 'jeju-si-massage.html') {
    // 제주시 마사지로 설정
    currentRegion = '제주';
    currentDistrict = '제주시';
    currentFilter = 'massage';
    
    // 구 선택 활성화
    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
    }
  } else if (currentFileName === 'jeju-si-outcall.html') {
    // 제주시 출장마사지로 설정
    currentRegion = '제주';
    currentDistrict = '제주시';
    currentFilter = 'outcall';
    
    // 구 선택 활성화
    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
    }
  } else if (currentFileName === 'jeju-seogwipo.html') {
    // 서귀포시로 설정
    currentRegion = '제주';
    currentDistrict = '서귀포시';
    currentFilter = 'all';
    
    // 구 선택 활성화
    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
    }
  } else if (currentFileName === 'jeju-seogwipo-massage.html') {
    // 서귀포시 마사지로 설정
    currentRegion = '제주';
    currentDistrict = '서귀포시';
    currentFilter = 'massage';
    
    // 구 선택 활성화
    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
    }
  } else if (currentFileName === 'jeju-seogwipo-outcall.html') {
    // 서귀포시 출장마사지로 설정
    currentRegion = '제주';
    currentDistrict = '서귀포시';
    currentFilter = 'outcall';
    
    // 구 선택 활성화
    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
    }
  }

  // 검색 토글 버튼 이벤트 리스너 (검색창으로 스크롤)
  const searchToggle = document.getElementById('searchToggle');
  const searchSection = document.querySelector('.search-section');
  const mainSearchInput = document.getElementById('mainSearchInput');

  if (searchToggle && searchSection && mainSearchInput) {
    searchToggle.addEventListener('click', function () {
      // 검색창으로 부드럽게 스크롤
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // 검색 입력창에 포커스
      setTimeout(() => {
        mainSearchInput.focus();
      }, 500);
    });
  }

  // 지역 선택 이벤트 리스너 (즉각 반응)
  regionSelect.addEventListener('change', function () {
    const selectedRegion = this.value;

    if (!selectedRegion) {
      // 지역 선택 해제 시 전체로 초기화
      currentRegion = '';
      currentDistrict = '';
      districtSelect.innerHTML = '<option value="">구를 선택하세요</option>';
      districtSelect.disabled = true;
      districtSelect.style.opacity = '0.5';

      // 필터링된 결과 표시
      displayFilteredResults();
      return;
    }

    // 제주 선택 시 현재 필터에 따라 해당 페이지로 이동
    if (selectedRegion === '제주') {
      if (currentFilter === 'massage') {
        window.location.href = 'jeju-massage.html';
        return;
      } else if (currentFilter === 'outcall') {
        window.location.href = 'jeju-outcall.html';
        return;
      } else {
        window.location.href = 'jeju.html';
        return;
      }
    }

    // 현재 지역 설정
    currentRegion = selectedRegion;

    // 구 선택 옵션 업데이트
    updateDistrictOptions(selectedRegion);

    // 구 선택 활성화
    districtSelect.disabled = false;
    districtSelect.style.opacity = '1';

    // 필터링된 결과 표시
    displayFilteredResults();
  });

  // 구 선택 이벤트 리스너
  districtSelect.addEventListener('change', function () {
    const selectedDistrict = this.value;

    if (!selectedDistrict || !currentRegion) {
      // 구를 선택하지 않으면 지역만으로 필터링
      currentDistrict = '';
      displayFilteredResults();
      return;
    }

    // 현재 구 설정
    currentDistrict = selectedDistrict;

    // 제주 + 제주시 + 전체(all)일 때 jeju-si.html로 이동
    if (currentRegion === '제주' && selectedDistrict === '제주시' && currentFilter === 'all') {
      window.location.href = 'jeju-si.html';
      return;
    }
    
    // 제주 + 제주시 + 마사지일 때 jeju-si-massage.html로 이동
    if (currentRegion === '제주' && selectedDistrict === '제주시' && currentFilter === 'massage') {
      window.location.href = 'jeju-si-massage.html';
      return;
    }
    
    // 제주 + 제주시 + 출장마사지일 때 jeju-si-outcall.html로 이동
    if (currentRegion === '제주' && selectedDistrict === '제주시' && currentFilter === 'outcall') {
      window.location.href = 'jeju-si-outcall.html';
      return;
    }
    
    // 제주 + 서귀포시 + 전체(all)일 때 jeju-seogwipo.html로 이동
    if (currentRegion === '제주' && selectedDistrict === '서귀포시' && currentFilter === 'all') {
      window.location.href = 'jeju-seogwipo.html';
      return;
    }
    
    // 제주 + 서귀포시 + 마사지일 때 jeju-seogwipo-massage.html로 이동
    if (currentRegion === '제주' && selectedDistrict === '서귀포시' && currentFilter === 'massage') {
      window.location.href = 'jeju-seogwipo-massage.html';
      return;
    }
    
    // 제주 + 서귀포시 + 출장마사지일 때 jeju-seogwipo-outcall.html로 이동
    if (currentRegion === '제주' && selectedDistrict === '서귀포시' && currentFilter === 'outcall') {
      window.location.href = 'jeju-seogwipo-outcall.html';
      return;
    }

    // 필터링된 결과 표시
    displayFilteredResults();
  });

  // 검색 버튼 이벤트 리스너 (searchBtn이 존재할 때만)
  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault(); // 기본 동작 방지
      performSearch();
    });
  }

  // 통합 검색 이벤트 리스너
  mainSearchBtn.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 동작 방지
    // 기존 타이머 클리어
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    performMainSearch();
  });

  // 통합 검색 입력창 엔터키 이벤트
  mainSearchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 동작 방지
      // 기존 타이머 클리어
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      performMainSearch();
    }
  });

  // 통합 검색 실시간 검색 (디바운싱 적용)
  mainSearchInput.addEventListener('input', function () {
    // 기존 타이머 클리어
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // 300ms 후에 검색 실행
    searchTimeout = setTimeout(() => {
      if (this.value.length >= 2) {
        performMainSearch();
      } else if (this.value.length === 0) {
        // 검색어가 없으면 전체 표시
        displayMassageShops(massageShops);
        // 메인 페이지가 아닌 경우 "마사지"로 표시
        const isMainPage =
          window.location.pathname.includes('index.html') ||
          window.location.pathname === '/' ||
          window.location.pathname === '';
        const title = isMainPage
          ? '전체 마사지사이트 업체'
          : '전체 마사지 업체';
        updateResultsHeader(title, massageShops.length);
      }
    }, 300);
  });

  // 필터 버튼 이벤트 리스너 (관련정보 버튼 제외)
  filterBtns.forEach((btn) => {
    // 관련정보 버튼은 필터 이벤트에서 제외
    if (btn.classList.contains('info-btn')) {
      return;
    }
    
    btn.addEventListener('click', function (e) {
      e.preventDefault(); // 기본 동작 방지
      
      // jeju.html에서 all 필터 클릭 시 메인 페이지로 이동
      const resultsTitle = document.getElementById('resultsTitle');
      if (resultsTitle && resultsTitle.textContent.includes('제주 마사지사이트 업체') && this.getAttribute('data-filter') === 'all') {
        window.location.href = 'index.html';
        return;
      }
      
      // 모든 필터 버튼에서 active 클래스 제거 (관련정보 버튼 제외)
      filterBtns.forEach((b) => {
        if (!b.classList.contains('info-btn')) {
          b.classList.remove('active');
        }
      });
      // 클릭된 버튼에 active 클래스 추가
      this.classList.add('active');
      // 현재 필터 업데이트
      currentFilter = this.dataset.filter;

      // all, 마사지, 출장마사지 클릭 시 해당 HTML 페이지로 이동
      if (currentFilter === 'all') {
        // 제주 지역이 선택된 경우
        if (currentRegion === '제주') {
          // 제주시가 선택된 경우 jeju-si.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si.html';
            return;
          }
          // 서귀포시가 선택된 경우 jeju-seogwipo.html로 이동
          if (currentDistrict === '서귀포시') {
            window.location.href = 'jeju-seogwipo.html';
            return;
          }
          // 다른 구의 경우 jeju.html로 이동
          window.location.href = 'jeju.html';
          return;
        }
        // 다른 지역의 경우 index.html로 이동
        window.location.href = 'index.html';
        return;
      } else if (currentFilter === 'massage') {
        // 제주 지역이 선택된 경우
        if (currentRegion === '제주') {
          // 제주시가 선택된 경우 jeju-si-massage.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si-massage.html';
            return;
          }
          // 서귀포시가 선택된 경우 jeju-seogwipo-massage.html로 이동
          if (currentDistrict === '서귀포시') {
            window.location.href = 'jeju-seogwipo-massage.html';
            return;
          }
          // 다른 구의 경우 jeju-massage.html로 이동
          window.location.href = 'jeju-massage.html';
          return;
        }
        // 다른 지역의 경우 massage.html로 이동
        window.location.href = 'massage.html';
        return;
      } else if (currentFilter === 'outcall') {
        // 제주 지역이 선택된 경우
        if (currentRegion === '제주') {
          // 제주시가 선택된 경우 jeju-si-outcall.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si-outcall.html';
            return;
          }
          // 서귀포시가 선택된 경우 jeju-seogwipo-outcall.html로 이동
          if (currentDistrict === '서귀포시') {
            window.location.href = 'jeju-seogwipo-outcall.html';
            return;
          }
          // 다른 구의 경우 jeju-outcall.html로 이동
          window.location.href = 'jeju-outcall.html';
          return;
        }
        // 다른 지역의 경우 outcall.html로 이동
        window.location.href = 'outcall.html';
        return;
      }

      // 필터별 국가 박스 표시/숨김 (마사지, 출장마사지는 별도 페이지로 이동하므로 제거)
      if (currentFilter === 'all') {
        document.getElementById('massageCountryFilterSection').style.display =
          'none';
        document.getElementById('outcallCountryFilterSection').style.display =
          'none';
        document.getElementById('themeFilterSection').style.display = 'none';
        currentCountry = '';
        // 구 선택 활성화
        districtSelect.disabled = false;
        districtSelect.style.opacity = '1';
      }

      // 필터링된 결과 표시
      displayFilteredResults();
    });
  });

  // 타입 필터 드롭다운 기능
  const typeFilterBtn = document.getElementById('typeFilterBtn');
  const typeDropdownMenu = document.getElementById('typeDropdownMenu');
  const typeDropdownItems = document.querySelectorAll('.type-dropdown-item');

  // 타입보기 버튼 클릭 이벤트
  if (typeFilterBtn && typeDropdownMenu) {
    typeFilterBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // 테마 필터 섹션 토글
      const themeFilterSection = document.getElementById('themeFilterSection');
      if (themeFilterSection) {
        const isVisible = themeFilterSection.style.display !== 'none';
        themeFilterSection.style.display = isVisible ? 'none' : 'block';
        
        // 버튼 눌러진 표시 토글
        typeFilterBtn.classList.toggle('active', !isVisible);

        // 테마 필터 섹션이 보여질 때 전체 보기 버튼 활성화 (눌림표시 없이)
        if (!isVisible) {
          // 전체 보기 버튼은 기능적으로만 활성화 (눌림표시 없이)
          const allFilterBtn = document.querySelector(
            '.filter-btn[data-filter="all"]'
          );
          if (allFilterBtn) {
            allFilterBtn.classList.remove('active'); // 눌림표시 제거
          }

          // 다른 필터 버튼들 비활성화 (테마보기 버튼은 제외)
          document.querySelectorAll('.filter-btn').forEach((btn) => {
            if (!btn.classList.contains('type-filter-btn')) {
              btn.classList.remove('active');
            }
          });

          // 테마 박스 중 전체 활성화
          const themeBoxes = document.querySelectorAll('.theme-box');
          themeBoxes.forEach((box) => box.classList.remove('active'));
          const allThemeBox = document.querySelector(
            '.theme-box[data-theme="all"]'
          );
          if (allThemeBox) {
            allThemeBox.classList.add('active');
          }

          // 현재 필터를 'all'로 설정하고 모든 업체 표시
          currentFilter = 'all';
          displayFilteredResults();
        }
      }
    });
  }

  // 테마 박스 클릭 이벤트
  const themeBoxes = document.querySelectorAll('.theme-box');
  themeBoxes.forEach((box) => {
    box.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // 모든 테마 박스에서 active 클래스 제거
      themeBoxes.forEach((b) => b.classList.remove('active'));
      // 클릭된 박스에 active 클래스 추가
      this.classList.add('active');

      // 선택된 테마로 필터링
      const selectedTheme = this.dataset.theme;

      // 제주 지역에서 테마 클릭 시 해당 페이지로 이동
      if (currentRegion === '제주') {
        if (selectedTheme === 'all') {
          // 제주시가 선택된 경우 jeju-si.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si.html';
            return;
          }
          // 서귀포시가 선택된 경우 jeju-seogwipo.html로 이동
          if (currentDistrict === '서귀포시') {
            window.location.href = 'jeju-seogwipo.html';
            return;
          }
          // 다른 구의 경우 jeju.html로 이동
          window.location.href = 'jeju.html';
          return;
        } else if (selectedTheme === 'massage') {
          // 제주시가 선택된 경우 jeju-si-massage.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si-massage.html';
            return;
          }
          // 서귀포시가 선택된 경우 jeju-seogwipo-massage.html로 이동
          if (currentDistrict === '서귀포시') {
            window.location.href = 'jeju-seogwipo-massage.html';
            return;
          }
          // 다른 구의 경우 jeju-massage.html로 이동
          window.location.href = 'jeju-massage.html';
          return;
        } else if (selectedTheme === 'outcall') {
          // 제주시가 선택된 경우 jeju-si-outcall.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si-outcall.html';
            return;
          }
          // 서귀포시가 선택된 경우 jeju-seogwipo-outcall.html로 이동
          if (currentDistrict === '서귀포시') {
            window.location.href = 'jeju-seogwipo-outcall.html';
            return;
          }
          // 다른 구의 경우 jeju-outcall.html로 이동
          window.location.href = 'jeju-outcall.html';
          return;
        }
      }

      filterByType(selectedTheme);
      
      // resultsTitle 업데이트
      updateResultsTitleByTheme(selectedTheme);

      // 테마 필터 섹션 숨기기
      const themeFilterSection = document.getElementById('themeFilterSection');
      if (themeFilterSection) {
        themeFilterSection.style.display = 'none';
      }
      
      // 테마보기 버튼 눌러진 표시 유지 (제거하지 않음)
    });
  });

  // 마사지 국가별 박스 이벤트 리스너
  const massageCountryBoxes = document.querySelectorAll(
    '#massageCountryFilterSection .country-box'
  );
  const massageCountryFilterSection = document.getElementById(
    'massageCountryFilterSection'
  );

  massageCountryBoxes.forEach((box) => {
    box.addEventListener('click', function (e) {
      e.preventDefault(); // 기본 동작 방지
      // 마사지 국가 박스에서 active 클래스 제거
      massageCountryBoxes.forEach((b) => b.classList.remove('active'));
      // 클릭된 박스에 active 클래스 추가
      this.classList.add('active');
      // 현재 국가 업데이트
      currentCountry = this.dataset.country;
      // 필터링된 결과 표시
      displayFilteredResults();
      // 국가 필터 섹션 숨기기
      if (massageCountryFilterSection) {
        massageCountryFilterSection.style.display = 'none';
      }
    });
  });

  // 출장마사지 국가별 박스 이벤트 리스너
  const outcallCountryBoxes = document.querySelectorAll(
    '#outcallCountryFilterSection .country-box'
  );
  const outcallCountryFilterSection = document.getElementById(
    'outcallCountryFilterSection'
  );

  outcallCountryBoxes.forEach((box) => {
    box.addEventListener('click', function (e) {
      e.preventDefault(); // 기본 동작 방지
      // 출장마사지 국가 박스에서 active 클래스 제거
      outcallCountryBoxes.forEach((b) => b.classList.remove('active'));
      // 클릭된 박스에 active 클래스 추가
      this.classList.add('active');
      // 현재 국가 업데이트
      currentCountry = this.dataset.country;
      // 필터링된 결과 표시
      displayFilteredResults();
      // 국가 필터 섹션 숨기기
      if (outcallCountryFilterSection) {
        outcallCountryFilterSection.style.display = 'none';
      }
    });
  });

  // 초기에는 전체 업체 표시
  displayFilteredResults();
}

// 구 옵션 업데이트
function updateDistrictOptions(region) {
  // 현재 값 저장
  const currentValue = districtSelect.value;

  // 옵션만 업데이트 (아이콘 보존)
  districtSelect.innerHTML = '<option value="">구를 선택하세요</option>';

  if (region && districtData[region]) {
    districtData[region].forEach((district) => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }

  // 아이콘 강제 표시 유지
  const districtBox = districtSelect.closest('.search-box');
  if (districtBox) {
    const icon = districtBox.querySelector('i');
    if (icon) {
      icon.style.display = 'inline-block';
      icon.style.visibility = 'visible';
      icon.style.opacity = '1';
    }
  }
}

// 통합 검색 수행
function performMainSearch() {
  const searchTerm = mainSearchInput.value.trim().toLowerCase();

  if (searchTerm.length < 2) {
    return;
  }

  // 검색어로 필터링
  const filteredShops = massageShops.filter((shop) => {
    return (
      shop.name.toLowerCase().includes(searchTerm) ||
      shop.address.toLowerCase().includes(searchTerm) ||
      shop.region.toLowerCase().includes(searchTerm) ||
      shop.district.toLowerCase().includes(searchTerm) ||
      shop.description.toLowerCase().includes(searchTerm) ||
      getTypeName(shop).toLowerCase().includes(searchTerm) ||
      (shop.subway && shop.subway.toLowerCase().includes(searchTerm))
    );
  });

  // 결과 표시
  displayMassageShops(filteredShops);
  updateResultsHeader(`"${searchTerm}" 검색 결과`, filteredShops.length);
}

// 지역별 검색 수행 (즉각 반응용)
function performLocationSearch() {
  if (!currentRegion) {
    // 지역이 선택되지 않은 경우 전체 표시
    displayMassageShops(massageShops);
    // 메인 페이지가 아닌 경우 "마사지"로 표시
    const isMainPage =
      window.location.pathname.includes('index.html') ||
      window.location.pathname === '/' ||
      window.location.pathname === '';
    const title = isMainPage ? '전체 마사지사이트 업체' : '전체 마사지 업체';
    updateResultsHeader(title, massageShops.length);
    return;
  }

  // 검색 결과 필터링
  let filteredShops;

  // 출장마사지는 구를 무시하고 지역만으로 검색
  if (currentFilter === 'outcall') {
    filteredShops = massageShops.filter(
      (shop) => shop.region === currentRegion && shop.type === 'outcall'
    );
    // 출장마사지 선택 시 구 선택 초기화
    currentDistrict = '';
    districtSelect.value = '';
  } else if (currentDistrict) {
    // 지역과 구 모두 선택된 경우
    filteredShops = massageShops.filter(
      (shop) =>
        shop.region === currentRegion && shop.district === currentDistrict
    );
  } else {
    // 지역만 선택된 경우
    filteredShops = massageShops.filter(
      (shop) => shop.region === currentRegion
    );
  }

  // 결과 표시
  displayMassageShops(filteredShops);

  // 결과 헤더 업데이트
  let title;
  if (currentFilter === 'outcall') {
    title = `${currentRegion} 출장마사지`;
  } else {
    title = currentDistrict
      ? `${currentRegion} ${currentDistrict}`
      : currentRegion;
  }
  updateResultsHeader(title, filteredShops.length);
}

// 지역별 검색 수행
function performSearch() {
  const selectedRegion = regionSelect.value;
  const selectedDistrict = districtSelect.value;

  if (!selectedRegion) {
    alert('지역을 선택해주세요.');
    return;
  }

  currentRegion = selectedRegion;
  currentDistrict = selectedDistrict;

  // 검색 결과 필터링
  let filteredShops;
  if (selectedDistrict) {
    // 지역과 구 모두 선택된 경우
    filteredShops = massageShops.filter(
      (shop) =>
        shop.region === selectedRegion && shop.district === selectedDistrict
    );
  } else {
    // 지역만 선택된 경우
    filteredShops = massageShops.filter(
      (shop) => shop.region === selectedRegion
    );
  }

  // 결과 표시
  displayMassageShops(filteredShops);

  // 결과 헤더 업데이트
  let title = selectedDistrict
    ? `${selectedRegion} ${selectedDistrict}`
    : selectedRegion;
  updateResultsHeader(title, filteredShops.length);
}

// 필터링된 결과 표시
function displayFilteredResults() {
  let filteredShops = massageShops;
  
  // footer-links 텍스트 업데이트
  updateFooterLinkText();

  // 지역 필터 적용
  if (currentRegion) {
    filteredShops = filteredShops.filter(
      (shop) => shop.region === currentRegion
    );
  }

  // 구 필터 적용
  if (currentDistrict) {
    filteredShops = filteredShops.filter(
      (shop) => shop.district === currentDistrict
    );
  }

  // 타입 필터 적용
  if (currentFilter === 'massage') {
    // 마사지 타입들 (기존 타입 + 새로운 타입들, 출장마사지 제외)
    filteredShops = filteredShops.filter((shop) => {
      // 출장마사지는 제외
      if (shop.type === '출장마사지') {
        return false;
      }
      // 기존 타입들
      if (['thai', 'korean', 'foot', 'spa'].includes(shop.type)) {
        return true;
      }
      // 새로운 타입들 (마사지 관련 서비스가 있는 경우)
      if (shop.type && shop.type.includes('마사지')) {
        return true;
      }
      // services 배열에 마사지 관련 서비스가 있는 경우
      if (
        shop.services &&
        shop.services.some(
          (service) =>
            service.includes('마사지') || service.includes('스웨디시')
        )
      ) {
        return true;
      }
      return false;
    });

    // 국가별 필터 적용
    if (currentCountry && currentCountry !== 'overall') {
      filteredShops = filteredShops.filter((shop) => {
        if (shop.country) {
          return shop.country.includes(currentCountry);
        }
        // 기존 로직 유지 (하위 호환성)
        const countryMap = {
          korea: [
            'korean',
            'foot',
            '출장마사지',
            '마사지, 스웨디시',
            '마사지, 왁싱, 스웨디시',
          ],
          thai: ['thai'],
          china: ['foot', '마사지, 왁싱, 스웨디시'],
          russia: ['spa'],
          japan: ['spa', '출장마사지'],
        };
        return countryMap[currentCountry]?.includes(shop.type) || false;
      });
    }
  } else if (currentFilter === 'outcall') {
    // 출장마사지 타입
    filteredShops = filteredShops.filter((shop) => shop.type === '출장마사지');
  } else if (currentFilter === 'waxing') {
    // 왁싱 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 왁싱이 포함된 경우
      if (shop.type && shop.type.includes('왁싱')) {
        return true;
      }
      // services에 왁싱이 포함된 경우
      if (
        shop.services &&
        shop.services.some((service) => service.includes('왁싱'))
      ) {
        return true;
      }
      return false;
    });
  } else if (currentFilter === 'swedish') {
    // 스웨디시 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 스웨디시가 포함된 경우
      if (shop.type && shop.type.includes('스웨디시')) {
        return true;
      }
      // services에 스웨디시가 포함된 경우
      if (
        shop.services &&
        shop.services.some((service) => service.includes('스웨디시'))
      ) {
        return true;
      }
      return false;
    });

    // 국가별 필터 적용 (출장마사지는 한국, 일본에서 제공)
    if (currentCountry && currentCountry !== 'overall') {
      filteredShops = filteredShops.filter((shop) => {
        if (shop.country) {
          return shop.country.includes(currentCountry);
        }
        // 기존 로직 유지 (하위 호환성)
        const countryMap = {
          korea: [
            'korean',
            'foot',
            '출장마사지',
            '마사지, 스웨디시',
            '마사지, 왁싱, 스웨디시',
          ],
          thai: ['thai'],
          china: ['foot', '마사지, 왁싱, 스웨디시'],
          russia: ['spa'],
          japan: ['spa', '출장마사지'],
        };
        return countryMap[currentCountry]?.includes(shop.type) || false;
      });
    }
  } else if (currentFilter === 'waxing') {
    // 왁싱 타입 - services에 '왁싱' 관련 키워드가 있는 업체들
    filteredShops = filteredShops.filter(
      (shop) =>
        shop.services &&
        shop.services.some(
          (service) =>
            service.toLowerCase().includes('왁싱') ||
            service.toLowerCase().includes('waxing') ||
            service.toLowerCase().includes('브라질리언')
        )
    );
  } else if (currentFilter !== 'all') {
    filteredShops = filteredShops.filter((shop) => shop.type === currentFilter);
  }

  // 지역/구 필터 적용 (지역이 선택된 경우에만)
  if (currentRegion) {
    if (currentDistrict) {
      filteredShops = filteredShops.filter(
        (shop) =>
          shop.region === currentRegion && shop.district === currentDistrict
      );
    } else {
      filteredShops = filteredShops.filter(
        (shop) => shop.region === currentRegion
      );
    }
  }

  displayMassageShops(filteredShops);

  // 결과 헤더 업데이트
  // 메인 페이지가 아닌 경우 "마사지"로 표시
  const isMainPage =
    window.location.pathname.includes('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '';
  let title = isMainPage ? '전체 마사지사이트 업체' : '전체 마사지 업체';

  // 필터별 제목 설정
  if (currentFilter === 'massage') {
    if (currentCountry && currentCountry !== 'overall') {
      const countryNames = {
        korea: '한국',
        thai: '태국',
        china: '중국',
        russia: '러시아',
        japan: '일본',
      };
      title = `${countryNames[currentCountry]} 마사지`;
    } else {
      title = '마사지';
    }
  } else if (currentFilter === 'outcall') {
    if (currentCountry && currentCountry !== 'overall') {
      const countryNames = {
        korea: '한국',
        thai: '태국',
        china: '중국',
        russia: '러시아',
        japan: '일본',
      };
      title = `${countryNames[currentCountry]} 출장마사지`;
    } else {
      title = '출장마사지';
    }
  } else if (currentFilter === 'waxing') {
    title = '왁싱';
  } else if (currentFilter === 'swedish') {
    title = '스웨디시';
  } else if (currentFilter === 'thai') {
    title = '타이마사지';
  } else if (currentFilter === 'aroma') {
    title = '아로마마사지';
  } else if (currentFilter === 'chinese') {
    title = '중국마사지';
  } else if (currentFilter === 'foot') {
    title = '발마사지';
  }

  // 지역과 구 정보 추가
  if (currentRegion && currentDistrict) {
    title = `${currentRegion} ${currentDistrict} ${title}`;
  } else if (currentRegion) {
    title = `${currentRegion} ${title}`;
  }

  updateResultsHeader(title, filteredShops.length);
}

// 주소에서 동 이름 추출
function extractDongFromAddress(address) {
  if (!address) return '';

  // 동 패턴 매칭 (예: 서귀동, 중문동, 한림동 등)
  const dongPatterns = [/([가-힣]+동)/, /([가-힣]+리)/, /([가-힣]+가)/];

  for (const pattern of dongPatterns) {
    const match = address.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return '';
}

// 주소에서 지역 정보 추출 (구/시 + 동)
function extractLocationInfo(address) {
  if (!address) return '';

  // 구/시 패턴 매칭
  const guPattern = /([가-힣]+구)/;
  const siPattern = /([가-힣]+시)/;

  let location = '';

  // 구가 있는 경우
  const guMatch = address.match(guPattern);
  if (guMatch) {
    location = guMatch[1];
  }

  // 시가 있는 경우 (구가 없는 경우)
  const siMatch = address.match(siPattern);
  if (!location && siMatch) {
    location = siMatch[1];
  }

  // 동 정보 추가
  const dongName = extractDongFromAddress(address);
  if (dongName) {
    location = location ? `${location} ${dongName}` : dongName;
  }

  return location;
}

// 랜덤 거리 생성 (0.5km ~ 15km)
function generateRandomDistance() {
  const min = 0.5;
  const max = 15;
  const distance = Math.random() * (max - min) + min;
  return Math.round(distance * 10) / 10; // 소수점 첫째자리까지
}

// 업체명에서 동 추출하여 새로운 이름 생성
function createShopDisplayName(shop) {
  // 이미 동이 포함된 이름인지 확인
  const dongName = extractDongFromAddress(shop.address);
  if (dongName && !shop.name.includes(dongName)) {
    // 기존 업체명에서 "제주마사지", "제주도마사지" 등을 제거하고 간단하게
    let simpleName = shop.name
      .replace(/제주도?마사지\s*/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // MZ, 프라이빗 등 간단한 이름만 남기기
    if (simpleName.includes('MZ')) {
      return `${dongName} MZ`;
    } else if (simpleName.includes('프라이빗')) {
      return `${dongName} 프라이빗`;
    } else {
      return `${dongName} ${simpleName}`;
    }
  }
  return shop.name;
}

// 업체 카드 생성
function createShopCard(shop) {
  const displayName = createShopDisplayName(shop);
  const locationInfo = extractLocationInfo(shop.address);
  const distance = generateRandomDistance();

  return `
        <div class="massage-card" data-type="${
          shop.type
        }" onclick="goToDetail(${shop.id})">
            <div class="card-image">
                <img src="${
                  shop.image
                }" alt="${displayName}" class="shop-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOazleWKoOi9vTwvdGV4dD48L3N2Zz4='; this.style.display='block';"
                     loading="lazy">
                <div class="image-overlay">
                    ${
                      getTypeName(shop)
                        ? `<div class="shop-type">${getTypeName(shop)}</div>`
                        : ''
                    }
                </div>
            </div>
            
            <div class="card-content">
                <div class="card-header">
                    <div class="shop-name-container">
                        <div class="shop-name">${displayName}</div>
                        <div class="shop-location-info">
                            <span class="shop-district">${locationInfo}</span>
                            <div class="location-flag">
                                <img src="https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/한국.jpg" 
                                     alt="한국 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇰🇷'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                ${
                                  shop.name.includes('이쁘니출장')
                                    ? `
                                <img src="https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/일본.jpg" 
                                     alt="일본 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇯🇵'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                `
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-info">
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${shop.address}</span>
                    </div>
                    <div class="info-item greeting">
                        <i class="fas fa-heart"></i>
                        <span>${getGreeting(shop)}</span>
                    </div>
                </div>
                
                <div class="card-footer">
                    <div class="price-container">
                        <div class="price"><span class="price-label">최저가</span> ${
                          shop.price
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 타입 이름 반환
function getTypeName(shop) {
  // 프라이빗 업체(id: 1)는 "힐링샵" 표시하지 않음
  if (shop.id === 1) {
    return '';
  }
  // 나머지 업체는 "힐링샵"으로 표시
  return '힐링샵';
}

// 테마별 필터링 함수
function filterByType(selectedType) {
  // 모든 업체를 가져와서 선택된 테마와 일치하는 것만 필터링
  let filteredShops = massageShops;

  if (selectedType && selectedType !== 'all') {
    // 제주 지역에서 마사지/출장마사지 테마 클릭 시 해당 페이지로 이동
    if (selectedType === 'massage' && currentRegion === '제주') {
      window.location.href = 'jeju-massage.html';
      return;
    } else if (selectedType === 'outcall' && currentRegion === '제주') {
      window.location.href = 'jeju-outcall.html';
      return;
    }

    // 테마별 서비스 키워드 매핑
    const themeKeywords = {
      swedish: ['스웨디시', '스웨덴'],
      thai: ['타이마사지', '타이', '태국'],
      aroma: ['아로마', '아로마마사지', '에센셜오일'],
      waxing: ['왁싱', '제모'],
      chinese: ['중국마사지', '중국', '지압'],
      foot: ['발마사지', '족욕', '풋케어', '발'],
    };

    const keywords = themeKeywords[selectedType];
    if (keywords) {
      filteredShops = massageShops.filter((shop) => {
        // 서비스 배열에서 키워드 검색
        if (shop.services && Array.isArray(shop.services)) {
          return shop.services.some((service) =>
            keywords.some((keyword) =>
              service.toLowerCase().includes(keyword.toLowerCase())
            )
          );
        }

        // 설명에서도 키워드 검색
        if (shop.description) {
          return keywords.some((keyword) =>
            shop.description.toLowerCase().includes(keyword.toLowerCase())
          );
        }

        return false;
      });
    }
  }

  // 현재 지역/구 필터 적용
  if (currentRegion) {
    if (currentDistrict) {
      filteredShops = filteredShops.filter(
        (shop) =>
          shop.region === currentRegion && shop.district === currentDistrict
      );
    } else {
      filteredShops = filteredShops.filter(
        (shop) => shop.region === currentRegion
      );
    }
  }

  // 결과 표시
  displayMassageShops(filteredShops);
  updateResultsHeader('테마별 업체', filteredShops.length);
}

// 인사말 반환 (업체별 동적 생성)
function getGreeting(shop) {
  // 관리사 나이 정보 추출
  let ageGroup = '20대';
  if (shop.staffInfo) {
    const ageMatches = shop.staffInfo.match(/\((\d+)\)/g);
    if (ageMatches && ageMatches.length > 0) {
      const ages = ageMatches.map((match) =>
        parseInt(match.replace(/[()]/g, ''))
      );
      const minAge = Math.min(...ages);
      const maxAge = Math.max(...ages);

      if (minAge >= 20 && maxAge <= 25) {
        ageGroup = '20대 초반';
      } else if (minAge >= 20 && maxAge <= 29) {
        ageGroup = '20대';
      } else if (minAge >= 30 && maxAge <= 39) {
        ageGroup = '30대';
      } else if (minAge >= 20 && maxAge <= 39) {
        ageGroup = '20~30대';
      }
    }
  }

  // 업체 타입별 다양한 인사글 템플릿
  const greetingTemplates = {
    korean: [
      `${ageGroup} 전문 관리사의 정성 케어`,
      `${ageGroup} 숙련된 힐링 터치`,
      `프리미엄 ${ageGroup} 관리사 대기`,
      `${ageGroup} 전문가의 맞춤 힐링`,
      `${ageGroup} 관리사의 감성 케어`,
    ],
    thai: [
      `${ageGroup} 타이 전문가의 특별한 케어`,
      `정통 타이마사지 ${ageGroup} 전문가`,
      `${ageGroup} 타이 마스터의 섬세한 터치`,
      `프리미엄 타이 ${ageGroup} 관리사`,
      `${ageGroup} 타이 전문가가 함께합니다`,
    ],
    foot: [
      `${ageGroup} 발 전문가의 시원한 케어`,
      `발 건강 ${ageGroup} 전문 관리사`,
      `${ageGroup} 발마사지 전문가 대기`,
      `시원한 발 케어 ${ageGroup} 전문가`,
      `${ageGroup} 발 관리 전문가의 손길`,
    ],
    spa: [
      `${ageGroup} 스파 전문가의 럭셔리 케어`,
      `프리미엄 스파 ${ageGroup} 전문 관리사`,
      `${ageGroup} 스파 마스터의 특별한 힐링`,
      `럭셔리 스파 ${ageGroup} 전문가`,
      `${ageGroup} 관리사의 프리미엄 스파`,
    ],
    outcall: [
      `${ageGroup} 전문가가 방문해 드립니다`,
      `${ageGroup} 출장 전문 관리사 대기`,
      `편안한 공간에서 ${ageGroup} 관리사 서비스`,
      `${ageGroup} 프리미엄 출장 케어`,
      `${ageGroup} 관리사 신속 방문 가능`,
    ],
    waxing: [
      `${ageGroup} 왁싱 전문가의 세심한 케어`,
      `프리미엄 왁싱 ${ageGroup} 전문가`,
      `${ageGroup} 왁싱 마스터의 꼼꼼한 관리`,
      `${ageGroup} 전문가의 위생적인 왁싱`,
      `${ageGroup} 왁싱 전문 관리사 대기`,
    ],
  };

  // 업체 타입에 맞는 인사글 선택
  const templates = greetingTemplates[shop.type] || greetingTemplates['korean'];

  // 업체 ID를 기반으로 일관된 인사글 선택 (랜덤처럼 보이지만 고정)
  const index = shop.id % templates.length;
  return templates[index];
}

// 결과 헤더 업데이트
function updateResultsHeader(title, count) {
  // "전체" 문자 제거
  title = title.replace(/\s*전체\s*/g, '');
  resultsTitle.textContent = title;
  resultsCount.textContent = `총 ${count}개`;
}

// 테마별 resultsTitle 업데이트
function updateResultsTitleByTheme(selectedTheme) {
  const themeNames = {
    all: '전체',
    swedish: '스웨디시',
    thai: '타이마사지',
    aroma: '아로마마사지',
    waxing: '왁싱',
    chinese: '중국마사지',
    foot: '발마사지'
  };
  
  if (resultsTitle) {
    const regionName = currentRegion || '';
    const themeName = themeNames[selectedTheme] || selectedTheme;
    const filterType = currentFilter === 'massage' ? '마사지' : 
                      currentFilter === 'outcall' ? '출장마사지' : '';
    
    if (selectedTheme === 'all') {
      resultsTitle.textContent = `${regionName}${filterType} 전체 업체`;
    } else {
      resultsTitle.textContent = `${regionName}${themeName}${filterType} 업체`;
    }
  }
}

// 전화 걸기
function callShop(phoneNumber) {
  if (confirm(`전화를 걸까요?\n${phoneNumber}`)) {
    window.location.href = `tel:${phoneNumber}`;
  }
}

// 상세 페이지로 이동
function goToDetail(shopId) {
  // SEO 친화적인 URL로 이동
  const urlMap = {
    1: 'jeju-massage-private.html',
    2: 'jeju-massage-mz.html',
    3: 'jeju-massage-yeppuni.html',
    4: 'jeju-yeondong-massage.html',
  };
  window.location.href = urlMap[shopId] || `shop-${shopId}.html`;
}

// 스크롤 애니메이션
function observeCards() {
  const cards = document.querySelectorAll('.massage-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// 검색 결과 표시 후 애니메이션 적용 (최적화됨)
function displayMassageShopsWithAnimation(shops) {
  displayMassageShops(shops);
  // 즉시 애니메이션 적용 (setTimeout 제거)
  observeCards();
}

// 빈 상태 표시
function displayEmptyState() {
  massageList.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-map-marker-alt"></i>
            <h3>지역을 선택해주세요</h3>
            <p>원하는 지역과 구를 선택하여<br>마사지 업체를 검색해보세요.</p>
        </div>
    `;
  updateResultsHeader('마사지 업체 검색', 0);
}

// 업체 정렬 함수
function sortShops(shops) {
  return shops.sort((a, b) => {
    // 1순위: "힐링샵" 업체를 위로
    const aIsHealing = getTypeName(a) === '힐링샵';
    const bIsHealing = getTypeName(b) === '힐링샵';

    if (aIsHealing && !bIsHealing) return -1;
    if (!aIsHealing && bIsHealing) return 1;

    // 2순위: "힐링샵"이 아닌 경우 거리순으로 정렬
    if (!aIsHealing && !bIsHealing) {
      // 거리 정보를 추출하여 비교 (더 가까운 거리가 위로)
      const aDistance = parseFloat(extractDistanceFromCard(a));
      const bDistance = parseFloat(extractDistanceFromCard(b));
      return aDistance - bDistance;
    }

    // "힐링샵"끼리는 기존 순서 유지
    return 0;
  });
}

// 카드에서 거리 정보 추출 (업체 ID 기반으로 일관된 거리 반환)
function extractDistanceFromCard(shop) {
  // 업체 ID를 기반으로 일관된 거리 생성 (시드 기반)
  const seed = shop.id * 123.456; // 시드 값
  const distance = 0.5 + (seed % 14.5); // 0.5 ~ 15km 범위
  return Math.round(distance * 10) / 10; // 소수점 첫째자리까지
}

// 업체 목록 표시 (애니메이션 포함)
function displayMassageShops(shops) {
  if (shops.length === 0) {
    massageList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>검색 결과가 없습니다</h3>
                <p>다른 지역이나 필터를 선택해보세요.</p>
            </div>
        `;
    return;
  }

  // 업체 정렬 적용
  const sortedShops = sortShops([...shops]);

  massageList.innerHTML = sortedShops
    .map((shop) => createShopCard(shop))
    .join('');

  // 카드 애니메이션 적용 (즉시 실행)
  observeCards();

  // 스크롤 이벤트 리스너 - 국가별 마사지 섹션 숨기기
  let scrollTimeout;
  window.addEventListener('scroll', function () {
    // 스크롤이 발생하면 국가별 마사지 섹션들을 숨김
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      const massageCountryFilterSection = document.getElementById(
        'massageCountryFilterSection'
      );
      const outcallCountryFilterSection = document.getElementById(
        'outcallCountryFilterSection'
      );

      if (
        massageCountryFilterSection &&
        massageCountryFilterSection.style.display !== 'none'
      ) {
        massageCountryFilterSection.style.display = 'none';
      }
      if (
        outcallCountryFilterSection &&
        outcallCountryFilterSection.style.display !== 'none'
      ) {
        outcallCountryFilterSection.style.display = 'none';
      }
    }, 100); // 100ms 지연 후 실행
  });
}

// 회사소개 모달 열기
function openAboutModal(event) {
  event.preventDefault();
  const modal = document.getElementById('aboutModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  }
}

// 이용약관 모달 열기
function openTermsModal(event) {
  event.preventDefault();
  const modal = document.getElementById('termsModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  }
}

// 현재 필터 상태 가져오기
function getCurrentFilter() {
  const activeFilter = document.querySelector('.filter-btn.active');
  return activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
}

// footer-links 상세정보 텍스트 업데이트
function updateFooterLinkText() {
  const footerLink = document.querySelector('.footer-link[onclick*="openDetailsModal"]');
  if (!footerLink) return;
  
  // 현재 페이지 URL에 따른 특별 처리
  const currentPath = window.location.pathname;
  const currentFileName = currentPath.split('/').pop();
  
  let titleText = '상세정보';
  
  // 파일명을 기반으로 자동 생성
  if (currentFileName === 'outcall.html') {
    titleText = '출장마사지정보';
  } else if (currentFileName === 'massage.html') {
    // massage.html의 경우 현재 필터에 따라 결정
    const currentFilter = getCurrentFilter();
    titleText = currentFilter === 'outcall' ? '출장마사지정보' : '마사지정보';
  } else {
    // 파일명에서 지역, 구, 필터 추출하여 자동 생성
    let region = '';
    let district = '';
    let filterType = '마사지사이트';
    
    // jeju 관련 파일인지 확인
    if (currentFileName.includes('jeju')) {
      region = '제주';
      
      // 구 추출
      if (currentFileName.includes('jeju-si')) {
        district = ' 제주시';
      } else if (currentFileName.includes('jeju-seogwipo')) {
        district = ' 서귀포시';
      }
      
      // 필터 타입 추출
      if (currentFileName.includes('-massage.html')) {
        filterType = '마사지';
      } else if (currentFileName.includes('-outcall.html')) {
        filterType = '출장마사지';
      }
      // .html 또는 jeju.html의 경우 '마사지사이트' 유지
    }
    
    // 최종 텍스트 생성
    if (region) {
      titleText = `${region}${district}${filterType}정보`;
    } else {
      // 기존 로직 (동적 생성) - jeju가 아닌 다른 파일들
      const resultsTitle = document.getElementById('resultsTitle');
      const regionSelect = document.getElementById('regionSelect');
      const districtSelect = document.getElementById('districtSelect');
      const currentFilter = getCurrentFilter();
      
      if (resultsTitle) {
        const title = resultsTitle.textContent;
        // "업체"를 "정보"로 변경
        titleText = title.replace('업체', '정보');
      } else if (regionSelect && districtSelect) {
        // resultsTitle이 없을 경우 지역 정보로 구성
        const region = regionSelect.value || regionSelect.options[regionSelect.selectedIndex]?.text || '';
        const district = districtSelect.value || districtSelect.options[districtSelect.selectedIndex]?.text || '';
        const filterType = currentFilter === 'outcall' ? '출장마사지' : '마사지';
        
        if (region && district && district !== '구를 선택하세요') {
          titleText = `${region}${district}${filterType}정보`;
        } else if (region) {
          titleText = `${region}${filterType}정보`;
        } else {
          titleText = `${filterType}정보`;
        }
      }
    }
  }
  
  footerLink.textContent = titleText;
}

// 상세정보 모달 열기
function openDetailsModal(event) {
  event.preventDefault();
  const modal = document.getElementById('detailsModal');
  if (modal) {
    // 현재 페이지의 지역과 마사지 타입 정보 가져오기
    const resultsTitle = document.getElementById('resultsTitle');
    const regionSelect = document.getElementById('regionSelect');
    const districtSelect = document.getElementById('districtSelect');
    const currentFilter = getCurrentFilter();
    
    let titleText = '상세정보';
    
    if (resultsTitle) {
      const title = resultsTitle.textContent;
      // "업체"를 "정보"로 변경
      titleText = title.replace('업체', '정보');
    } else if (regionSelect && districtSelect) {
      // resultsTitle이 없을 경우 지역 정보로 구성
      const region = regionSelect.value || regionSelect.options[regionSelect.selectedIndex]?.text || '';
      const district = districtSelect.value || districtSelect.options[districtSelect.selectedIndex]?.text || '';
      const filterType = currentFilter === 'outcall' ? '출장마사지' : '마사지';
      
      if (region && district && district !== '구를 선택하세요') {
        titleText = `${region}${district}${filterType}정보`;
      } else if (region) {
        titleText = `${region}${filterType}정보`;
      } else {
        titleText = `${filterType}정보`;
      }
    }
    
    // footer-links의 상세정보 텍스트 업데이트
    const footerLink = event.target;
    if (footerLink) {
      footerLink.textContent = titleText;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  }
}

// 관련정보 모달 열기
function openRelatedInfoModal(event) {
  event.preventDefault();
  
  const modal = document.getElementById('relatedInfoModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  }
}

// 모달 닫기
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
  }
}

// 모달 배경 클릭 시 닫기
window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// 필터 컨테이너 드래그 스크롤 기능
function initFilterDragScroll() {
  const filterContainer = document.querySelector('.filter-container');
  if (!filterContainer) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let hasMoved = false; // 드래그 움직임 감지

  // 마우스 이벤트
  filterContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    hasMoved = false;
    filterContainer.classList.add('active');
    startX = e.pageX - filterContainer.offsetLeft;
    scrollLeft = filterContainer.scrollLeft;
    e.preventDefault();
  });

  filterContainer.addEventListener('mouseleave', () => {
    isDown = false;
    filterContainer.classList.remove('active');
  });

  filterContainer.addEventListener('mouseup', (e) => {
    if (isDown && hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
    isDown = false;
    filterContainer.classList.remove('active');
  });

  filterContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    hasMoved = true;
    const x = e.pageX - filterContainer.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    filterContainer.scrollLeft = scrollLeft - walk;
  });

  // 터치 이벤트 (모바일)
  let startTouchX;
  let startScrollLeft;
  let touchHasMoved = false;

  filterContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    touchHasMoved = false;
    filterContainer.classList.add('active');
    startTouchX = e.touches[0].pageX;
    startScrollLeft = filterContainer.scrollLeft;
  }, { passive: false });

  filterContainer.addEventListener('touchend', (e) => {
    if (isDown && touchHasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
    isDown = false;
    filterContainer.classList.remove('active');
  });

  filterContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    touchHasMoved = true;
    const touchX = e.touches[0].pageX;
    const walk = (startTouchX - touchX) * 2; // 스크롤 속도 조절
    filterContainer.scrollLeft = startScrollLeft + walk;
  }, { passive: false });

  // 휠 이벤트 (마우스 휠로 좌우 스크롤)
  filterContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    filterContainer.scrollLeft += e.deltaY;
  }, { passive: false });

  // 필터 버튼 클릭 이벤트 방지 (드래그 중일 때)
  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (hasMoved || touchHasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
}

// 페이지 로드 시 드래그 스크롤 초기화
document.addEventListener('DOMContentLoaded', initFilterDragScroll);