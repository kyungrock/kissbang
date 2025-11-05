// 중앙화된 지역 매핑 데이터 (전역 변수)
// 모든 지역 정보는 여기서만 관리합니다
window.districtMap = {
  jeju: {
    regionName: '제주',
    regionEng: 'jeju',
    districts: {
      si: '제주시',
      seogwipo: '서귀포',
    },
  },
  ulsan: {
    regionName: '울산',
    regionEng: 'ulsan',
    districts: {
      junggu: '중구',
      namgu: '남구',
      donggu: '동구',
      bukgu: '북구',
      ulju: '울주',
    },
  },
  // 추가 지역들 (필요시 확장)
  seoul: { regionName: '서울', regionEng: 'seoul', districts: {} },
  busan: { regionName: '부산', regionEng: 'busan', districts: {} },
  daegu: { regionName: '대구', regionEng: 'daegu', districts: {} },
  incheon: { regionName: '인천', regionEng: 'incheon', districts: {} },
  gwangju: { regionName: '광주', regionEng: 'gwangju', districts: {} },
  daejeon: { regionName: '대전', regionEng: 'daejeon', districts: {} },
  sejong: { regionName: '세종', regionEng: 'sejong', districts: {} },
  gyeonggi: { regionName: '경기', regionEng: 'gyeonggi', districts: {} },
  gangwon: { regionName: '강원', regionEng: 'gangwon', districts: {} },
  chungbuk: { regionName: '충북', regionEng: 'chungbuk', districts: {} },
  chungnam: { regionName: '충남', regionEng: 'chungnam', districts: {} },
  jeonbuk: { regionName: '전북', regionEng: 'jeonbuk', districts: {} },
  jeonnam: { regionName: '전남', regionEng: 'jeonnam', districts: {} },
  gyeongbuk: { regionName: '경북', regionEng: 'gyeongbuk', districts: {} },
  gyeongnam: { regionName: '경남', regionEng: 'gyeongnam', districts: {} },
};

// 지역별 구 데이터
const districtData = {
  서울: [
    '강남',
    '강동',
    '강북',
    '강서',
    '관악',
    '광진',
    '구로',
    '금천',
    '노원',
    '도봉',
    '동대문',
    '동작',
    '마포',
    '서대문',
    '서초',
    '성동',
    '성북',
    '송파',
    '양천',
    '영등포',
    '용산',
    '은평',
    '종로',
    '중구',
    '중랑',
  ],
  부산: [
    '중구',
    '서구',
    '동구',
    '영도',
    '부산진',
    '동래',
    '남구',
    '북구',
    '해운대',
    '사하',
    '금정',
    '강서',
    '연제',
    '수영',
    '사상',
    '기장',
  ],
  대구: ['중구', '동구', '서구', '남구', '북구', '수성', '달서', '달성'],
  인천: [
    '중구',
    '동구',
    '미추홀',
    '연수',
    '남동',
    '부평',
    '계양',
    '서구',
    '강화',
    '옹진',
  ],
  광주: ['동구', '서구', '남구', '북구', '광산'],
  대전: ['동구', '중구', '서구', '유성', '대덕'],
  울산: ['중구', '남구', '동구', '북구', '울주'],
  세종: ['세종특별자치시'],
  경기: [
    '수원',
    '성남',
    '의정부',
    '안양',
    '부천',
    '광명',
    '평택',
    '과천',
    '오산',
    '시흥',
    '군포',
    '의왕',
    '하남',
    '용인',
    '파주',
    '이천',
    '안성',
    '김포',
    '화성',
    '광주',
    '여주',
    '양평',
    '고양',
    '동두천',
    '가평',
    '연천',
  ],
  강원: [
    '춘천',
    '원주',
    '강릉',
    '동해',
    '태백',
    '속초',
    '삼척',
    '홍천',
    '횡성',
    '영월',
    '평창',
    '정선',
    '철원',
    '화천',
    '양구',
    '인제',
    '고성',
    '양양',
  ],
  충북: [
    '청주',
    '충주',
    '제천',
    '보은',
    '옥천',
    '영동',
    '증평',
    '진천',
    '괴산',
    '음성',
    '단양',
  ],
  충남: [
    '천안',
    '공주',
    '보령',
    '아산',
    '서산',
    '논산',
    '계룡',
    '당진',
    '금산',
    '부여',
    '서천',
    '청양',
    '홍성',
    '예산',
    '태안',
  ],
  전북: [
    '전주',
    '군산',
    '익산',
    '정읍',
    '남원',
    '김제',
    '완주',
    '진안',
    '무주',
    '장수',
    '임실',
    '순창',
    '고창',
    '부안',
  ],
  전남: [
    '목포',
    '여수',
    '순천',
    '나주',
    '광양',
    '담양',
    '곡성',
    '구례',
    '고흥',
    '보성',
    '화순',
    '장흥',
    '강진',
    '해남',
    '영암',
    '무안',
    '함평',
    '영광',
    '장성',
    '완도',
    '진도',
    '신안',
  ],
  경북: [
    '포항',
    '경주',
    '김천',
    '안동',
    '구미',
    '영주',
    '영천',
    '상주',
    '문경',
    '경산',
    '군위',
    '의성',
    '청송',
    '영양',
    '영덕',
    '청도',
    '고령',
    '성주',
    '칠곡',
    '예천',
    '봉화',
    '울진',
    '울릉',
  ],
  경남: [
    '창원',
    '진주',
    '통영',
    '사천',
    '김해',
    '밀양',
    '거제',
    '양산',
    '의령',
    '함안',
    '창녕',
    '고성',
    '남해',
    '하동',
    '산청',
    '함양',
    '거창',
    '합천',
  ],
  제주: ['제주시', '서귀포'],
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
const filterBtns = document.querySelectorAll('.filter-btn');
const massageList = document.getElementById('massageList');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');

// 현재 필터 상태
let currentFilter = 'all';
let currentRegion = '';
let currentDistrict = '';
let currentSearchQuery = ''; // 검색어 저장
let currentCountry = 'overall';

// 검색 디바운싱을 위한 타이머
// 성인 인증 관련 함수 제거됨

// 페이지 로드 시 초기화 (아래 3088라인에서 실행됨)

// 지역 선택 옵션 초기화
function initializeRegionOptions() {
  console.log('initializeRegionOptions 호출');
  const regionSelect = document.getElementById('regionSelect');
  console.log('regionSelect:', regionSelect);
  if (!regionSelect) {
    console.log('regionSelect 없음 - 종료');
    return;
  }

  console.log(
    'regionSelect 찾음, 초기 옵션 개수:',
    regionSelect.children.length
  );

  // 기존 옵션 제거 (첫 번째 옵션 "지역을 선택하세요" 제외)
  while (regionSelect.children.length > 1) {
    regionSelect.removeChild(regionSelect.lastChild);
  }

  console.log('기존 옵션 제거 후:', regionSelect.children.length);

  // districtData의 키들을 커스텀 정렬하여 옵션으로 추가
  const customOrder = [
    '서울',
    '경기',
    '인천',
    '강원',
    '충북',
    '충남',
    '대전',
    '세종',
    '전북',
    '전남',
    '광주',
    '경북',
    '경남',
    '대구',
    '울산',
    '부산',
    '제주',
  ];

  console.log('districtData:', districtData);
  const regions = Object.keys(districtData).sort((a, b) => {
    const indexA = customOrder.indexOf(a);
    const indexB = customOrder.indexOf(b);
    return indexA - indexB;
  });
  console.log('정렬된 지역들:', regions);

  regions.forEach((region) => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  });

  console.log('옵션 추가 완료, 최종 옵션 개수:', regionSelect.children.length);
}

// 지역별 테마 페이지 URL 생성 함수는 initializeApp 함수 내부로 이동되었습니다.
// 전역에서 접근하려면 window.getThemePageUrl을 사용하세요.

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

  // 파일명에서 지역과 세부지역 자동 감지 (효율적인 중앙화된 로직)
  const currentPath = window.location.pathname;
  const currentFileName = currentPath.split('/').pop();
  const detectedInfo = detectRegionAndDistrictFromFilename(currentFileName);

  if (detectedInfo.region) {
    currentRegion = detectedInfo.region;
    currentDistrict = detectedInfo.district || '';
    if (detectedInfo.filter) {
      currentFilter = detectedInfo.filter;
    }

    // 구 선택 활성화 (세부지역이 있는 경우)
    if (detectedInfo.district) {
      const districtSelect = document.getElementById('districtSelect');
      if (districtSelect) {
        districtSelect.disabled = false;
        districtSelect.style.opacity = '1';
      }
    }
  }

  // 검색 버튼 이벤트 리스너 (searchBtn이 존재할 때만)
  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault(); // 기본 동작 방지
      performSearch();
    });
  }

  // 필터 버튼 이벤트 리스너는 initializeApp 함수에서 처리됩니다

  // 타입 필터 드롭다운 기능
  const typeFilterBtn = document.getElementById('typeFilterBtn');
  const typeDropdownMenu = document.getElementById('typeDropdownMenu');
  const typeDropdownItems = document.querySelectorAll('.type-dropdown-item');

  // 타입 드롭다운 아이템 클릭 이벤트
  typeDropdownItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const selectedTheme = this.dataset.type;

      // 중앙화된 함수로 테마 페이지 URL 생성
      const targetPage = window.getThemePageUrl
        ? window.getThemePageUrl(selectedTheme, currentRegion, currentDistrict)
        : null;
      if (targetPage) {
        window.location.href = targetPage;
        return;
      }
    });
  });

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

        // 테마 필터 섹션이 보여질 때 필터 섹션 바로 아래에 고정되도록 위치 조정
        if (!isVisible) {
          // 필터 섹션의 실제 높이를 계산하여 위치 조정
          const filterSection = document.querySelector('.filter-section');
          if (filterSection) {
            // 약간의 지연을 두고 계산하여 DOM 업데이트 완료 후 위치 계산
            setTimeout(() => {
              // 필터 섹션의 실제 높이 (offsetHeight 사용)
              const filterSectionHeight = filterSection.offsetHeight;
              // 필터 섹션의 getBoundingClientRect로 현재 viewport에서의 위치 확인
              const filterSectionRect = filterSection.getBoundingClientRect();

              // 필터 섹션이 sticky로 고정되어 있는지 확인 (top이 1px 근처인지)
              const isFilterSticky = filterSectionRect.top <= 10;

              if (isFilterSticky) {
                // 필터 섹션이 sticky로 고정되어 있으면: 헤더 높이(80px) + 필터 섹션 높이 - 여백 조정
                const headerHeight = 80;
                const topOffset = -60; // 위쪽 여백 줄이기
                themeFilterSection.style.top = `${
                  headerHeight + filterSectionHeight + topOffset
                }px`;
              } else {
                // 필터 섹션이 sticky가 아니면: 필터 섹션의 viewport 기준 bottom 위치 - 여백 조정
                const filterSectionBottom =
                  filterSectionRect.top + filterSectionHeight;
                const topOffset = -60; // 위쪽 여백 줄이기
                themeFilterSection.style.top = `${
                  filterSectionBottom + topOffset
                }px`;
              }
            }, 10);
          } else {
            // 필터 섹션을 찾을 수 없는 경우 기본값 사용 (여백 조정)
            themeFilterSection.style.top = '80px';
          }
        }

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
    // onclick 속성 제거를 위해 기존 이벤트 리스너만 사용
    box.addEventListener('click', function (e) {
      // onclick 속성이 있으면 기본 동작 방지
      if (this.onclick || this.getAttribute('onclick')) {
        e.preventDefault();
        e.stopPropagation();
        // onclick 제거
        this.removeAttribute('onclick');
        this.onclick = null;
      }

      e.preventDefault();
      e.stopPropagation();

      // 모든 테마 박스에서 active 클래스 제거
      themeBoxes.forEach((b) => {
        b.classList.remove('active');
        // 다른 박스의 onclick도 제거
        if (b !== this) {
          b.removeAttribute('onclick');
          b.onclick = null;
        }
      });
      // 클릭된 박스에 active 클래스 추가
      this.classList.add('active');

      // 선택된 테마로 필터링
      const selectedTheme = this.dataset.theme;

      // 제주 지역에서 테마 클릭 시 해당 페이지로 이동 (기존 로직 유지)
      if (currentRegion === '제주') {
        if (selectedTheme === 'all') {
          // 제주시가 선택된 경우 jeju-si.html로 이동
          if (currentDistrict === '제주시') {
            window.location.href = 'jeju-si.html';
            return;
          }
          // 서귀포가 선택된 경우 jeju-seogwipo.html로 이동
          if (currentDistrict === '서귀포') {
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
          // 서귀포가 선택된 경우 jeju-seogwipo-massage.html로 이동
          if (currentDistrict === '서귀포') {
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
          // 서귀포가 선택된 경우 jeju-seogwipo-outcall.html로 이동
          if (currentDistrict === '서귀포') {
            window.location.href = 'jeju-seogwipo-outcall.html';
            return;
          }
          // 다른 구의 경우 jeju-outcall.html로 이동
          window.location.href = 'jeju-outcall.html';
          return;
        }
      }

      // 테마별 페이지로 이동 (전체 제외)
      if (selectedTheme !== 'all') {
        const themePages = {
          swedish: 'swedish.html',
          thai: 'thai.html',
          aroma: 'aroma.html',
          chinese: 'chinese.html',
          foot: 'foot.html',
          waxing: 'waxing.html',
        };

        const targetPage = themePages[selectedTheme];
        if (targetPage) {
          window.location.href = targetPage;
          return;
        }
      }

      // 전체 선택 시 필터 적용
      currentFilter = selectedTheme;
      displayFilteredResults();

      // 테마 필터 섹션 숨기기
      const themeFilterSection = document.getElementById('themeFilterSection');
      if (themeFilterSection) {
        themeFilterSection.style.display = 'none';
      }

      // 테마보기 버튼 눌러진 표시 유지 (제거하지 않음)
    });
  });

  // 테마박스 외부 터치/스크롤 시 숨김 기능
  document.addEventListener('click', function (e) {
    const themeFilterSection = document.getElementById('themeFilterSection');
    const typeFilterBtn = document.querySelector('.type-filter-btn');

    if (themeFilterSection && themeFilterSection.style.display === 'block') {
      // 테마박스나 테마보기 버튼이 아닌 곳을 클릭한 경우
      if (
        !themeFilterSection.contains(e.target) &&
        !typeFilterBtn.contains(e.target)
      ) {
        themeFilterSection.style.display = 'none';
        typeFilterBtn.classList.remove('active');
      }
    }
  });

  // 스크롤 시 테마박스 숨김
  document.addEventListener('scroll', function () {
    const themeFilterSection = document.getElementById('themeFilterSection');
    const typeFilterBtn = document.querySelector('.type-filter-btn');

    if (themeFilterSection && themeFilterSection.style.display === 'block') {
      themeFilterSection.style.display = 'none';
      typeFilterBtn.classList.remove('active');
    }
  });

  // 마우스 휠 스크롤 감지
  document.addEventListener('wheel', function (e) {
    const themeFilterSection = document.getElementById('themeFilterSection');
    const typeFilterBtn = document.querySelector('.type-filter-btn');

    if (themeFilterSection && themeFilterSection.style.display === 'block') {
      themeFilterSection.style.display = 'none';
      typeFilterBtn.classList.remove('active');
    }
  });

  // 터치 이벤트로 스크롤 감지
  let touchStartY = 0;
  let isScrolling = false;

  document.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
    isScrolling = false;
  });

  document.addEventListener('touchmove', function (e) {
    const themeFilterSection = document.getElementById('themeFilterSection');
    const typeFilterBtn = document.querySelector('.type-filter-btn');

    if (themeFilterSection && themeFilterSection.style.display === 'block') {
      const currentY = e.touches[0].clientY;
      const diffY = Math.abs(currentY - touchStartY);

      // 세로 스크롤이 감지되면 테마박스 숨김
      if (diffY > 10) {
        isScrolling = true;
        themeFilterSection.style.display = 'none';
        typeFilterBtn.classList.remove('active');
      }
    }
  });

  document.addEventListener('touchend', function (e) {
    const themeFilterSection = document.getElementById('themeFilterSection');
    const typeFilterBtn = document.querySelector('.type-filter-btn');

    if (
      isScrolling &&
      themeFilterSection &&
      themeFilterSection.style.display === 'block'
    ) {
      themeFilterSection.style.display = 'none';
      typeFilterBtn.classList.remove('active');
    }
    isScrolling = false;
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
  console.log('updateDistrictOptions called with region:', region);

  // 현재 값 저장
  const currentValue = districtSelect.value;

  // 옵션만 업데이트 (아이콘 보존)
  districtSelect.innerHTML = '<option value="">세부 지역을 선택하세요</option>';

  if (region && districtData[region]) {
    console.log('District data for', region, ':', districtData[region]);
    districtData[region].forEach((district) => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
      console.log('Added district option:', district);
      console.log('Option value:', option.value);
      console.log('Option text:', option.textContent);
      console.log('Option element:', option);
    });
  } else {
    console.log('No district data found for region:', region);
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

// 지역 선택 시 페이지 이동 함수
function handleRegionChange() {
  const selectedRegion = regionSelect.value;
  const selectedDistrict = districtSelect.value;

  if (!selectedRegion) return;

  // 지역 선택 시 구 옵션 업데이트
  updateDistrictOptions(selectedRegion);

  // 구가 선택된 경우 해당 구의 업체들을 필터링해서 표시
  if (selectedDistrict) {
    currentRegion = selectedRegion;
    currentDistrict = selectedDistrict;
    displayFilteredResults();
    return;
  }

  // 지역만 선택된 경우 해당 지역의 모든 업체들을 표시
  if (selectedRegion) {
    currentRegion = selectedRegion;
    currentDistrict = ''; // 구 선택 초기화

    // districtMap을 활용한 페이지 이동 로직
    for (const [key, value] of Object.entries(districtMap)) {
      if (value.regionName === selectedRegion) {
        // 해당 지역 페이지로 이동
        window.location.href = `${key}.html`;
        return;
      }
    }

    // 구 옵션이 로드된 후 결과 표시 (fallback)
    setTimeout(() => {
      displayFilteredResults();
    }, 100);
    return;
  }
}

// 필터 버튼은 HTML에서 직접 링크로 처리됩니다
// 필터링된 결과 표시
function displayFilteredResults() {
  let filteredShops = massageShops;

  // window.currentFilter가 설정되어 있으면 우선 사용
  if (window.currentFilter && typeof window.currentFilter !== 'undefined') {
    currentFilter = window.currentFilter;
  }

  // 현재 필터 값 로그 출력 (디버깅용)
  console.log('displayFilteredResults - currentFilter:', currentFilter);
  console.log(
    'displayFilteredResults - window.currentFilter:',
    window.currentFilter
  );

  // footer-links 텍스트 업데이트
  updateFooterLinkText();

  // 지역 필터 적용
  if (currentRegion) {
    filteredShops = filteredShops.filter(
      (shop) => shop.region === currentRegion
    );
  }

  // 구 필터 적용 (출장마사지는 구를 무시하고 지역만으로 검색)
  if (currentDistrict && currentFilter !== 'outcall') {
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
      if (shop.type && shop.type.toLowerCase().includes('왁싱')) {
        return true;
      }
      // services에 왁싱이 포함된 경우
      if (
        shop.services &&
        shop.services.some((service) => {
          const serviceLower = service.toLowerCase();
          return (
            serviceLower.includes('왁싱') ||
            serviceLower.includes('waxing') ||
            serviceLower.includes('브라질리언')
          );
        })
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
  } else if (currentFilter === 'thai') {
    // 타이마사지 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 타이마사지가 포함된 경우
      if (
        shop.type &&
        (shop.type.includes('타이') || shop.type.includes('thai'))
      ) {
        return true;
      }
      // services에 타이마사지가 포함된 경우
      if (
        shop.services &&
        shop.services.some(
          (service) => service.includes('타이') || service.includes('태국')
        )
      ) {
        return true;
      }
      return false;
    });
  } else if (currentFilter === 'aroma') {
    // 아로마마사지 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 아로마가 포함된 경우
      if (shop.type && shop.type.includes('아로마')) {
        return true;
      }
      // services에 아로마가 포함된 경우
      if (
        shop.services &&
        shop.services.some(
          (service) => service.includes('아로마') || service.includes('에센셜')
        )
      ) {
        return true;
      }
      return false;
    });
  } else if (currentFilter === 'chinese') {
    // 중국마사지 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 중국마사지가 포함된 경우
      if (shop.type && shop.type.includes('중국')) {
        return true;
      }
      // services에 중국마사지가 포함된 경우
      if (
        shop.services &&
        shop.services.some(
          (service) =>
            service.includes('중국') ||
            service.includes('지압') ||
            service.includes('경락')
        )
      ) {
        return true;
      }
      return false;
    });
  } else if (currentFilter === 'foot') {
    // 발마사지 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 발마사지가 포함된 경우
      if (shop.type && (shop.type.includes('발') || shop.type === 'foot')) {
        return true;
      }
      // services에 발마사지가 포함된 경우
      if (
        shop.services &&
        shop.services.some(
          (service) =>
            service.includes('발') ||
            service.includes('족욕') ||
            service.includes('풋')
        )
      ) {
        return true;
      }
      return false;
    });
  } else if (currentFilter !== 'all') {
    filteredShops = filteredShops.filter((shop) => shop.type === currentFilter);
  }

  // 지역/구 필터 적용 (지역이 선택된 경우에만)
  // 출장마사지는 구를 무시하고 지역만으로 필터링
  if (currentRegion) {
    if (currentDistrict && currentFilter !== 'outcall') {
      // 일반 마사지: 지역과 구 모두 필터링
      filteredShops = filteredShops.filter(
        (shop) =>
          shop.region === currentRegion && shop.district === currentDistrict
      );
    } else {
      // 출장마사지 또는 구가 없는 경우: 지역만 필터링
      filteredShops = filteredShops.filter(
        (shop) => shop.region === currentRegion
      );
    }
  }

  // 검색어 필터 적용 (2글자 이상인 경우)
  if (currentSearchQuery && currentSearchQuery.trim().length >= 2) {
    const searchTerm = currentSearchQuery.trim().toLowerCase();
    filteredShops = filteredShops.filter((shop) => {
      // 업체명 검색
      if (shop.name && shop.name.toLowerCase().includes(searchTerm)) {
        return true;
      }
      // 설명 검색
      if (
        shop.description &&
        shop.description.toLowerCase().includes(searchTerm)
      ) {
        return true;
      }
      // 서비스 검색
      if (shop.services && Array.isArray(shop.services)) {
        if (
          shop.services.some((service) =>
            service.toLowerCase().includes(searchTerm)
          )
        ) {
          return true;
        }
      }
      // 주소 검색
      if (shop.address && shop.address.toLowerCase().includes(searchTerm)) {
        return true;
      }
      if (
        shop.detailAddress &&
        shop.detailAddress.toLowerCase().includes(searchTerm)
      ) {
        return true;
      }
      // 지역/구 검색
      if (shop.region && shop.region.toLowerCase().includes(searchTerm)) {
        return true;
      }
      if (shop.district && shop.district.toLowerCase().includes(searchTerm)) {
        return true;
      }
      // 태그 검색
      if (shop.tags && Array.isArray(shop.tags)) {
        if (shop.tags.some((tag) => tag.toLowerCase().includes(searchTerm))) {
          return true;
        }
      }
      // 키워드 검색
      if (shop.keywords && shop.keywords.toLowerCase().includes(searchTerm)) {
        return true;
      }
      return false;
    });
  }

  displayMassageShops(filteredShops);

  // 결과 헤더 업데이트
  // 메인 페이지가 아닌 경우 "마사지"로 표시
  const isMainPage =
    window.location.pathname.includes('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '';
  let title = isMainPage ? '전체 마사지사이트 업체' : '전체 마사지 업체';

  // 검색어가 있으면 제목에 검색어 표시
  if (currentSearchQuery && currentSearchQuery.trim().length >= 2) {
    title = `"${currentSearchQuery}" 검색 결과`;
  }

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
    title = '왁싱 업체';
  } else if (currentFilter === 'swedish') {
    title = '스웨디시 업체';
  } else if (currentFilter === 'thai') {
    title = '타이마사지 업체';
  } else if (currentFilter === 'aroma') {
    title = '아로마마사지 업체';
  } else if (currentFilter === 'chinese') {
    title = '중국마사지 업체';
  } else if (currentFilter === 'foot') {
    title = '발마사지 업체';
  }

  // 테마 필터는 지역 정보 없이 제목만 표시, 다른 필터는 지역 정보 추가
  const themeFilters = [
    'waxing',
    'swedish',
    'thai',
    'aroma',
    'chinese',
    'foot',
  ];
  if (!themeFilters.includes(currentFilter)) {
    // 지역과 구 정보 추가
    if (currentRegion && currentDistrict) {
      title = `${currentRegion} ${currentDistrict} ${title}`;
    } else if (currentRegion) {
      title = `${currentRegion} ${title}`;
    }
  }

  // updateResultsHeader(title, filteredShops.length);
  updateResultsTitle();
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
  // 출장마사지의 경우 지역(구 제외) + 업체명 표시
  if (shop.type === '출장마사지') {
    // 지역만 사용 (상세지역 제외)
    const region = shop.region || '출장마사지';

    // 업체명에서 지역 부분 제거하고 순수 업체명만 추출
    let shopName = shop.name;
    if (shopName.includes('제주시')) {
      shopName = shopName.replace('제주시', '').trim();
    }
    if (shopName.includes('제주도')) {
      shopName = shopName.replace('제주도', '').trim();
    }
    // 지역명도 제거 (예: "제주"가 업체명에 포함된 경우)
    if (region && shopName.includes(region)) {
      shopName = shopName.replace(region, '').trim();
    }

    return `${region} ${shopName}`;
  }

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
  // 출장마사지의 경우 지역명만 표시
  const locationInfo =
    shop.type === '출장마사지'
      ? extractDongFromAddress(shop.address) || shop.region || '출장마사지'
      : extractLocationInfo(shop.address);
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
                    <div class="info-item greeting">
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
  // 특정 업체(이쁘니출장) 전용 인사말 오버라이드
  if (shop && shop.name && shop.name.includes('이쁘니출장')) {
    return '20대, 30대 관리사 힐링으로 모시겠습니다. 편하게 문의주세요';
  }
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
      `안녕하세요. 저희는 사랑하는 고객님을 위한 서비스를 제공합니다.`,
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
    foot: '발마사지',
  };

  const resultsTitle = document.getElementById('resultsTitle');
  if (resultsTitle) {
    const themeName = themeNames[selectedTheme] || selectedTheme;

    if (selectedTheme === 'all') {
      // 전체 선택 시 기본 제목
      const isMainPage =
        window.location.pathname.includes('index.html') ||
        window.location.pathname === '/' ||
        window.location.pathname === '';
      resultsTitle.textContent = isMainPage
        ? '전체 마사지사이트 업체'
        : '전체 마사지 업체';
    } else {
      // 테마 선택 시 "스웨디시 업체" 형식
      resultsTitle.textContent = `${themeName} 업체`;
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

// footer-links 상세정보 텍스트 업데이트 (districtMap 활용)
function updateFooterLinkText() {
  const footerLink = document.querySelector(
    '.footer-link[onclick*="openDetailsModal"]'
  );
  if (!footerLink) return;

  let titleText = '상세정보';

  // currentRegion, currentDistrict, currentFilter 변수 활용
  const themeNames = {
    swedish: '스웨디시',
    thai: '타이마사지',
    aroma: '아로마마사지',
    waxing: '왁싱',
    chinese: '중국마사지',
    foot: '발마사지',
  };

  if (currentRegion) {
    let filterType = '마사지사이트';

    // 테마 필터 확인
    if (themeNames[currentFilter]) {
      filterType = themeNames[currentFilter];
    } else if (currentFilter === 'massage') {
      filterType = '마사지';
    } else if (currentFilter === 'outcall') {
      filterType = '출장마사지';
    }

    // 지역과 구가 모두 있으면 "지역 구" 형식으로 표시, 구만 있으면 "지역 구" 형식, 지역만 있으면 "지역" 형식
    if (currentRegion && currentDistrict) {
      titleText = `${currentRegion} ${currentDistrict}${filterType}정보`;
    } else if (currentDistrict) {
      titleText = `${currentDistrict} ${filterType}정보`;
    } else if (currentRegion) {
      titleText = `${currentRegion} ${filterType}정보`;
    } else {
      titleText = `${filterType}정보`;
    }
  } else {
    // 지역 정보가 없는 경우
    if (themeNames[currentFilter]) {
      titleText = `${themeNames[currentFilter]}정보`;
    } else if (currentFilter === 'massage') {
      titleText = '마사지정보';
    } else if (currentFilter === 'outcall') {
      titleText = '출장마사지정보';
    } else {
      titleText = '마사지사이트정보';
    }
  }

  footerLink.textContent = titleText;
}

// 파일명에서 지역, 세부지역, 필터 자동 감지 함수
function detectRegionAndDistrictFromFilename(filename) {
  try {
    const result = { region: '', district: '', filter: '' };

    if (!filename) return result;

    // .html 제거
    const nameWithoutExt = filename.replace('.html', '');
    const parts = nameWithoutExt.split('-');

    // window.districtMap 사용 (중앙화된 지역 매핑)
    const districtMap = window.districtMap || {};

    // 필터 키워드
    const filterKeywords = [
      'massage',
      'outcall',
      'swedish',
      'thai',
      'aroma',
      'waxing',
      'chinese',
      'foot',
    ];

    // 첫 번째 부분이 지역 키인지 확인
    if (districtMap[parts[0]]) {
      const regionData = districtMap[parts[0]];
      result.region = regionData.regionName;

      // 두 번째 부분이 세부지역인지 필터인지 확인
      if (parts.length >= 2) {
        if (regionData.districts[parts[1]]) {
          // 세부지역인 경우
          result.district = regionData.districts[parts[1]];

          // 세 번째 부분이 필터인지 확인
          if (parts.length >= 3 && filterKeywords.includes(parts[2])) {
            result.filter = parts[2];
          }
        } else if (filterKeywords.includes(parts[1])) {
          // 필터인 경우 (세부지역 없음)
          result.filter = parts[1];
        }
      }
    } else {
      // 기본 테마 페이지인 경우 (예: swedish.html, thai.html 등)
      if (filterKeywords.includes(parts[0])) {
        result.filter = parts[0];
      }
    }

    return result;
  } catch (error) {
    console.error('detectRegionAndDistrictFromFilename 오류:', error);
    return { region: '', district: '', filter: '' };
  }
}

// 상세정보 모달 열기
function openDetailsModal(event) {
  try {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('openDetailsModal 함수 호출됨');

    const modal = document.getElementById('detailsModal');
    if (!modal) {
      console.error('detailsModal을 찾을 수 없습니다.');
      alert('모달을 찾을 수 없습니다. 페이지를 새로고침해주세요.');
      return;
    }

    console.log('모달 요소 찾음:', modal);

    // 현재 페이지의 지역과 마사지 타입 정보 가져오기
    let currentFilter = 'all';

    // 파일명에서 필터 정보 추출
    const currentPage = window.location.pathname
      .split('/')
      .pop()
      .replace('.html', '');
    const themeFilters = {
      swedish: 'swedish',
      thai: 'thai',
      aroma: 'aroma',
      waxing: 'waxing',
      chinese: 'chinese',
      foot: 'foot',
      massage: 'massage',
      outcall: 'outcall',
    };

    if (themeFilters[currentPage]) {
      currentFilter = themeFilters[currentPage];
    } else {
      try {
        currentFilter = getCurrentFilter ? getCurrentFilter() : 'all';
      } catch (e) {
        console.warn('getCurrentFilter 오류:', e);
        currentFilter = 'all';
      }
    }

    // 전역 변수에서도 확인
    if (typeof window.currentFilter !== 'undefined' && window.currentFilter) {
      currentFilter = window.currentFilter;
    }

    // 파일명에서 지역과 세부지역 자동 감지
    const currentFileName = window.location.pathname.split('/').pop();
    const detectedInfo = detectRegionAndDistrictFromFilename(currentFileName);

    // 현재 지역과 세부지역 정보 가져오기 (우선순위: 감지된 정보 > 전역 변수 > 선택 박스)
    let region =
      detectedInfo.region ||
      (typeof currentRegion !== 'undefined' ? currentRegion : '');
    let district =
      detectedInfo.district ||
      (typeof currentDistrict !== 'undefined' ? currentDistrict : '');

    const regionSelect = document.getElementById('regionSelect');
    const districtSelect = document.getElementById('districtSelect');

    // 감지된 정보가 없으면 선택 박스에서 가져오기
    if (!region && regionSelect) {
      region =
        regionSelect.value ||
        regionSelect.options[regionSelect.selectedIndex]?.text ||
        '';
    }
    if (!district && districtSelect) {
      district =
        districtSelect.value ||
        districtSelect.options[districtSelect.selectedIndex]?.text ||
        '';
      if (district === '세부 지역을 선택하세요') district = '';
    }

    // 감지된 필터가 있으면 사용
    if (detectedInfo.filter) {
      currentFilter = detectedInfo.filter;
    }

    // 모달 제목 설정
    const modalHeader = modal.querySelector('.modal-header h2');
    if (modalHeader) {
      modalHeader.textContent = '서비스 필터 전체 보기';
    }

    // 필터 링크 생성
    let filterLinks = '';
    try {
      if (typeof generateFilterLinks === 'function') {
        filterLinks = generateFilterLinks(currentFilter, region, district);
      } else {
        console.error('generateFilterLinks 함수를 찾을 수 없습니다.');
        filterLinks = '<p>필터 링크를 생성할 수 없습니다.</p>';
      }
    } catch (e) {
      console.error('generateFilterLinks 오류:', e);
      filterLinks = '<p>필터 링크 생성 중 오류가 발생했습니다.</p>';
    }

    // 모달 본문 업데이트
    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
      modalBody.innerHTML = `
        <div class="terms-section">
          <h3>서비스 필터 전체 보기</h3>
          <div class="filter-links-container" style="margin-top: 20px;">
            ${filterLinks}
          </div>
        </div>
      `;
    }

    // 모달 표시 - 여러 방법으로 시도
    modal.classList.add('active');
    modal.style.display = 'flex';
    modal.style.alignItems = 'flex-start';
    modal.style.justifyContent = 'center';
    modal.style.padding = '20px';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.6)';
    modal.style.zIndex = '10000';
    document.body.style.overflow = 'hidden';

    console.log('모달 표시 완료:', {
      modal: modal,
      hasActiveClass: modal.classList.contains('active'),
      display: window.getComputedStyle(modal).display,
      zIndex: window.getComputedStyle(modal).zIndex,
    });
  } catch (error) {
    console.error('openDetailsModal 오류:', error);
    alert('모달을 열 수 없습니다: ' + error.message);
  }
}

// 전역 스코프에서 접근 가능하도록 window 객체에 할당
if (typeof window !== 'undefined') {
  window.openDetailsModal = openDetailsModal;
}

// 필터 링크 생성 함수
function generateFilterLinks(excludeFilter, region, district) {
  try {
    // 모든 필터 정의 (총 8개)
    const allFilters = [
      { key: 'massage', name: '마사지' },
      { key: 'outcall', name: '출장마사지' },
      { key: 'swedish', name: '스웨디시' },
      { key: 'thai', name: '타이마사지' },
      { key: 'aroma', name: '아로마마사지' },
      { key: 'waxing', name: '왁싱' },
      { key: 'chinese', name: '중국마사지' },
      { key: 'foot', name: '발마사지' },
    ];

    // all 필터인 경우: 전체 8개를 모두 표시 (index.html 또는 지역 페이지)
    const currentPage = window.location.pathname.split('/').pop();
    let filtersToShow;

    if (excludeFilter === 'all' || !excludeFilter || excludeFilter === '') {
      // all 필터인 경우: 전체 8개 표시 (모든 페이지에서)
      filtersToShow = allFilters;
    } else {
      // 현재 필터를 제외한 나머지 필터들 (7개)
      filtersToShow = allFilters.filter(
        (filter) => filter.key !== excludeFilter && filter.key !== 'all'
      );
    }

    // 링크 HTML 생성
    let linksHTML =
      '<div style="display: flex; flex-direction: column; gap: 12px;">';

    filtersToShow.forEach((filter) => {
      let url = '#';
      try {
        if (typeof generateFilterLinkUrl === 'function') {
          url = generateFilterLinkUrl(filter.key, region, district);
        } else {
          // generateFilterLinkUrl 함수가 없으면 기본 URL 생성
          if (filter.key === 'massage') {
            url = 'massage.html';
          } else if (filter.key === 'outcall') {
            url = 'outcall.html';
          } else {
            url = `${filter.key}.html`;
          }
        }
      } catch (e) {
        console.warn('generateFilterLinkUrl 오류:', e);
        // 기본 URL 사용
        if (filter.key === 'massage') {
          url = 'massage.html';
        } else if (filter.key === 'outcall') {
          url = 'outcall.html';
        } else {
          url = `${filter.key}.html`;
        }
      }

      // 기본 페이지 목록 (지역/세부지역 정보 없음)
      const basePages = [
        'index.html',
        'massage.html',
        'outcall.html',
        'swedish.html',
        'thai.html',
        'aroma.html',
        'waxing.html',
        'chinese.html',
        'foot.html',
      ];

      const currentPage = window.location.pathname.split('/').pop();
      const isBasePage = basePages.includes(currentPage);

      // 지역과 세부지역 정보를 앞에 붙이기 (기본 페이지가 아닐 때만)
      let displayName = filter.name;
      if (!isBasePage && region) {
        if (district) {
          // 세부지역까지 있는 경우: "제주 제주시 마사지"
          displayName = `${region} ${district} ${filter.name}`;
        } else {
          // 지역만 있는 경우: "제주 마사지"
          displayName = `${region} ${filter.name}`;
        }
      }

      linksHTML += `
        <a href="${url}" style="
          display: block;
          padding: 12px 16px;
          background-color: #f5f5f5;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease;
        " onmouseover="this.style.backgroundColor='#e0e0e0'; this.style.color='#007bff';" 
           onmouseout="this.style.backgroundColor='#f5f5f5'; this.style.color='#333';">
          ${displayName}
        </a>
      `;
    });

    linksHTML += '</div>';
    return linksHTML;
  } catch (error) {
    console.error('generateFilterLinks 오류:', error);
    return '<p>필터 링크 생성 중 오류가 발생했습니다.</p>';
  }
}

// 필터 링크 URL 생성 함수
function generateFilterLinkUrl(filter, region, district) {
  try {
    // 기본 페이지 목록 (지역/세부지역 정보 없음)
    const basePages = [
      'index.html',
      'massage.html',
      'outcall.html',
      'swedish.html',
      'thai.html',
      'aroma.html',
      'waxing.html',
      'chinese.html',
      'foot.html',
    ];

    const currentPage = window.location.pathname.split('/').pop();
    const isBasePage = basePages.includes(currentPage);

    // 기본 페이지인 경우: 지역/세부지역 정보 없이 기본 URL 반환
    if (isBasePage) {
      if (filter === 'massage') {
        return 'massage.html';
      } else if (filter === 'outcall') {
        return 'outcall.html';
      } else {
        return `${filter}.html`;
      }
    }

    // window.districtMap 사용 (중앙화된 지역 매핑)
    const districtMap = window.districtMap || {};

    // 지역과 세부지역이 모두 있는 경우
    if (region && district) {
      // districtMap에서 지역 키 찾기
      let regionKey = '';
      let districtKey = '';

      for (const [key, value] of Object.entries(districtMap)) {
        if (value.regionName === region) {
          regionKey = key;
          // 구 찾기
          for (const [dKey, dName] of Object.entries(value.districts)) {
            if (dName === district) {
              districtKey = dKey;
              break;
            }
          }
          break;
        }
      }

      if (regionKey && districtKey) {
        // 테마 필터인 경우
        if (
          filter === 'swedish' ||
          filter === 'thai' ||
          filter === 'aroma' ||
          filter === 'chinese' ||
          filter === 'foot' ||
          filter === 'waxing'
        ) {
          if (
            window.getThemePageUrl &&
            typeof window.getThemePageUrl === 'function'
          ) {
            const themePage = window.getThemePageUrl(filter, region, district);
            if (themePage) return themePage;
          }
          return `${regionKey}-${districtKey}-${filter}.html`;
        } else if (filter === 'massage') {
          return `${regionKey}-${districtKey}-massage.html`;
        } else if (filter === 'outcall') {
          return `${regionKey}-${districtKey}-outcall.html`;
        }
      }
    }

    // 지역만 있는 경우
    if (region) {
      // districtMap에서 지역 키 찾기
      let regionKey = '';
      for (const [key, value] of Object.entries(districtMap)) {
        if (value.regionName === region) {
          regionKey = key;
          break;
        }
      }

      if (regionKey) {
        // 테마 필터인 경우
        if (
          filter === 'swedish' ||
          filter === 'thai' ||
          filter === 'aroma' ||
          filter === 'chinese' ||
          filter === 'foot' ||
          filter === 'waxing'
        ) {
          if (typeof getThemePageUrl === 'function') {
            const themePage = getThemePageUrl(filter, region, '');
            if (themePage) return themePage;
          }
          return `${regionKey}-${filter}.html`;
        } else if (filter === 'massage') {
          return `${regionKey}-massage.html`;
        } else if (filter === 'outcall') {
          return `${regionKey}-outcall.html`;
        }
      }
    }

    // 지역 정보가 없는 경우 (index.html 등)
    if (filter === 'massage') {
      return 'massage.html';
    } else if (filter === 'outcall') {
      return 'outcall.html';
    } else if (
      filter === 'swedish' ||
      filter === 'thai' ||
      filter === 'aroma' ||
      filter === 'chinese' ||
      filter === 'foot' ||
      filter === 'waxing'
    ) {
      return `${filter}.html`;
    }

    return '#';
  } catch (error) {
    console.error('generateFilterLinkUrl 오류:', error);
    // 기본 URL 반환
    if (filter === 'massage') {
      return 'massage.html';
    } else if (filter === 'outcall') {
      return 'outcall.html';
    } else {
      return `${filter}.html`;
    }
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
  try {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      // 인라인 스타일 제거 (openDetailsModal에서 설정한 스타일)
      modal.style.display = '';
      modal.style.alignItems = '';
      modal.style.justifyContent = '';
      modal.style.padding = '';
      modal.style.position = '';
      modal.style.top = '';
      modal.style.left = '';
      modal.style.width = '';
      modal.style.height = '';
      modal.style.background = '';
      modal.style.zIndex = '';
      document.body.style.overflow = ''; // 스크롤 복원

      console.log('모달 닫기 완료:', modalId);
    } else {
      console.warn('모달을 찾을 수 없습니다:', modalId);
    }
  } catch (error) {
    console.error('closeModal 오류:', error);
  }
}

// 전역 스코프에서 접근 가능하도록 window 객체에 할당
if (typeof window !== 'undefined') {
  window.closeModal = closeModal;
}

// 모달 배경 클릭 시 닫기
window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    const modal = event.target;
    const modalId = modal.id;
    if (modalId) {
      closeModal(modalId);
    } else {
      // ID가 없는 경우 직접 닫기
      modal.classList.remove('active');
      modal.style.display = '';
      modal.style.alignItems = '';
      modal.style.justifyContent = '';
      modal.style.padding = '';
      modal.style.position = '';
      modal.style.top = '';
      modal.style.left = '';
      modal.style.width = '';
      modal.style.height = '';
      modal.style.background = '';
      modal.style.zIndex = '';
      document.body.style.overflow = '';
    }
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

  filterContainer.addEventListener(
    'touchstart',
    (e) => {
      isDown = true;
      touchHasMoved = false;
      filterContainer.classList.add('active');
      startTouchX = e.touches[0].pageX;
      startScrollLeft = filterContainer.scrollLeft;
    },
    { passive: false }
  );

  filterContainer.addEventListener('touchend', (e) => {
    if (isDown && touchHasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
    isDown = false;
    filterContainer.classList.remove('active');
  });

  filterContainer.addEventListener(
    'touchmove',
    (e) => {
      if (!isDown) return;
      e.preventDefault();
      touchHasMoved = true;
      const touchX = e.touches[0].pageX;
      const walk = (startTouchX - touchX) * 2; // 스크롤 속도 조절
      filterContainer.scrollLeft = startScrollLeft + walk;
    },
    { passive: false }
  );

  // 휠 이벤트 (마우스 휠로 좌우 스크롤)
  filterContainer.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      filterContainer.scrollLeft += e.deltaY;
    },
    { passive: false }
  );

  // 필터 버튼 클릭 이벤트 방지 (드래그 중일 때)
  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (hasMoved || touchHasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
}

// ✅ 간단한 중앙화된 초기화 함수
function initializeApp() {
  console.log('initializeApp 시작');
  initializeRegionOptions();
  console.log('initializeRegionOptions 완료');

  // window.districtMap 사용 (중앙화된 지역 매핑)
  const districtMap = window.districtMap || {};

  // 지역별 테마 페이지 URL 생성 함수 (중앙화) - initializeApp 내부로 통합
  function getThemePageUrl(theme, region, district) {
    // 기본 테마 페이지 매핑
    const baseThemePages = {
      swedish: 'swedish.html',
      thai: 'thai.html',
      aroma: 'aroma.html',
      chinese: 'chinese.html',
      foot: 'foot.html',
      waxing: 'waxing.html',
    };

    // 테마가 유효한지 확인
    if (!baseThemePages[theme]) {
      return null;
    }

    // districtMap에서 지역 키 찾기
    let regionKey = '';
    let districtKey = '';

    for (const [key, value] of Object.entries(districtMap)) {
      if (value.regionName === region) {
        regionKey = key;

        // 세부지역이 있으면 세부지역 키도 찾기
        if (district && district !== '' && district !== '전체') {
          for (const [dKey, dName] of Object.entries(value.districts)) {
            if (dName === district) {
              districtKey = dKey;
              break;
            }
          }
        }
        break;
      }
    }

    // 지역과 세부지역이 모두 있는 경우
    if (regionKey && districtKey) {
      return `${regionKey}-${districtKey}-${theme}.html`;
    }

    // 지역만 있는 경우 (세부지역 없음)
    if (regionKey && region && region !== '' && region !== '전체') {
      return `${regionKey}-${theme}.html`;
    }

    // 기본 테마 페이지 반환
    return baseThemePages[theme] || null;
  }

  // getThemePageUrl을 전역에서 접근 가능하도록 설정 (다른 함수에서도 사용)
  window.getThemePageUrl = getThemePageUrl;

  // 지역/구 선택 이벤트 리스너 (districtMap 활용)
  const regionSelect = document.getElementById('regionSelect');
  const districtSelect = document.getElementById('districtSelect');

  if (regionSelect) {
    regionSelect.addEventListener('change', function () {
      const selectedRegion = regionSelect.value;

      // 현재 페이지 파일명 가져오기
      const currentPath = window.location.pathname;
      const currentFileName = currentPath.split('/').pop();

      // districtMap에서 해당 지역 찾기
      for (const [regionKey, regionData] of Object.entries(districtMap)) {
        if (regionData.regionName === selectedRegion) {
          // 구 옵션 업데이트
          updateDistrictOptions(selectedRegion);
          // 구 선택 활성화
          if (districtSelect) {
            districtSelect.disabled = false;
            districtSelect.style.opacity = '1';
          }

          // 이동할 페이지 결정
          let targetPage = '';
          if (currentFilter === 'massage') {
            targetPage = `${regionKey}-massage.html`;
          } else if (currentFilter === 'outcall') {
            targetPage = `${regionKey}-outcall.html`;
          } else if (
            currentFilter === 'swedish' ||
            currentFilter === 'thai' ||
            currentFilter === 'aroma' ||
            currentFilter === 'chinese' ||
            currentFilter === 'foot' ||
            currentFilter === 'waxing'
          ) {
            // 중앙화된 함수로 테마 페이지 URL 생성
            targetPage = window.getThemePageUrl
              ? window.getThemePageUrl(currentFilter, selectedRegion, '')
              : null;
            if (!targetPage) {
              // 함수가 null을 반환하면 기본 패턴 사용
              targetPage = `${regionKey}-${currentFilter}.html`;
            }
          } else {
            targetPage = `${regionKey}.html`;
          }

          // 현재 페이지와 같으면 이동하지 않음
          if (currentFileName !== targetPage) {
            window.location.href = targetPage;
          } else {
            // 같은 페이지면 필터만 업데이트
            if (typeof displayFilteredResults === 'function') {
              displayFilteredResults();
            }
          }
          return;
        }
      }
    });
  }

  if (districtSelect) {
    districtSelect.addEventListener('change', function () {
      const selectedRegion = regionSelect.value;
      const selectedDistrict = districtSelect.value;

      // 현재 페이지 파일명 가져오기
      const currentPath = window.location.pathname;
      const currentFileName = currentPath.split('/').pop();

      // districtMap에서 해당 지역과 구 찾기
      for (const [regionKey, regionData] of Object.entries(districtMap)) {
        if (regionData.regionName === selectedRegion) {
          // 구 키 찾기
          for (const [districtKey, districtName] of Object.entries(
            regionData.districts
          )) {
            if (districtName === selectedDistrict) {
              // 이동할 페이지 결정
              let targetPage = '';

              if (currentFilter === 'massage') {
                targetPage = `${regionKey}-${districtKey}-massage.html`;
              } else if (currentFilter === 'outcall') {
                targetPage = `${regionKey}-${districtKey}-outcall.html`;
              } else if (
                currentFilter === 'swedish' ||
                currentFilter === 'thai' ||
                currentFilter === 'aroma' ||
                currentFilter === 'chinese' ||
                currentFilter === 'foot' ||
                currentFilter === 'waxing'
              ) {
                // 중앙화된 함수로 테마 페이지 URL 생성 (구는 고려하지 않음)
                targetPage = window.getThemePageUrl
                  ? window.getThemePageUrl(
                      currentFilter,
                      selectedRegion,
                      selectedDistrict
                    )
                  : null;
                if (!targetPage) {
                  // 함수가 null을 반환하면 기본 패턴 사용
                  targetPage = `${regionKey}-${districtKey}-${currentFilter}.html`;
                }
              } else {
                targetPage = `${regionKey}-${districtKey}.html`;
              }

              // 현재 페이지와 같으면 이동하지 않음
              if (currentFileName !== targetPage) {
                window.location.href = targetPage;
              } else {
                // 같은 페이지면 필터만 업데이트
                if (typeof displayFilteredResults === 'function') {
                  displayFilteredResults();
                }
              }
              return;
            }
          }
          break;
        }
      }
    });
  }

  // 필터 버튼 이벤트 리스너 추가 (페이지 이동)
  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter');
      if (filter) {
        // 현재 페이지 분석
        const currentPath = window.location.pathname;
        const currentFileName = currentPath
          .split('/')
          .pop()
          .replace('.html', '');
        const parts = currentFileName.split('-');

        // districtMap에서 현재 지역과 구 찾기
        let regionKey = '';
        let districtKey = '';

        for (const [key, value] of Object.entries(districtMap)) {
          if (value.regionName === currentRegion) {
            regionKey = key;
            // 구 찾기
            for (const [dKey, dName] of Object.entries(value.districts)) {
              if (dName === currentDistrict) {
                districtKey = dKey;
                break;
              }
            }
            break;
          }
        }

        // 필터에 따른 페이지 이동
        if (regionKey) {
          if (filter === 'all') {
            if (districtKey) {
              window.location.href = `${regionKey}-${districtKey}.html`;
            } else {
              window.location.href = `${regionKey}.html`;
            }
          } else if (filter === 'massage' || filter === 'outcall') {
            if (districtKey) {
              window.location.href = `${regionKey}-${districtKey}-${filter}.html`;
            } else {
              window.location.href = `${regionKey}-${filter}.html`;
            }
          } else if (
            filter === 'swedish' ||
            filter === 'thai' ||
            filter === 'aroma' ||
            filter === 'chinese' ||
            filter === 'foot' ||
            filter === 'waxing'
          ) {
            // 중앙화된 함수로 테마 페이지 URL 생성
            const targetThemePage = window.getThemePageUrl
              ? window.getThemePageUrl(filter, currentRegion, currentDistrict)
              : null;
            if (targetThemePage) {
              window.location.href = targetThemePage;
              return;
            }
            // 함수가 null을 반환하면 기본 패턴 사용
            if (districtKey) {
              window.location.href = `${regionKey}-${districtKey}-${filter}.html`;
            } else {
              window.location.href = `${regionKey}-${filter}.html`;
            }
          }
        } else {
          // districtMap에 없는 지역의 경우 (테마 페이지들: swedish, thai, aroma 등)
          if (filter === 'all') {
            // 전체 필터 클릭 시 index.html로 이동
            window.location.href = 'index.html';
            return;
          } else if (filter === 'massage') {
            window.location.href = 'massage.html';
          } else if (filter === 'outcall') {
            window.location.href = 'outcall.html';
          } else if (
            filter === 'swedish' ||
            filter === 'thai' ||
            filter === 'aroma' ||
            filter === 'chinese' ||
            filter === 'foot' ||
            filter === 'waxing'
          ) {
            // 중앙화된 함수로 테마 페이지 URL 생성
            const targetThemePage = window.getThemePageUrl
              ? window.getThemePageUrl(filter, currentRegion, currentDistrict)
              : null;
            if (targetThemePage) {
              window.location.href = targetThemePage;
              return;
            }
            // 함수가 null을 반환하면 기본 테마 페이지로 이동
            const defaultThemePages = {
              swedish: 'swedish.html',
              thai: 'thai.html',
              aroma: 'aroma.html',
              chinese: 'chinese.html',
              foot: 'foot.html',
              waxing: 'waxing.html',
            };
            if (defaultThemePages[filter]) {
              window.location.href = defaultThemePages[filter];
            }
          }
        }
      }
    });
  });

  // footer-links 텍스트 업데이트
  if (typeof updateFooterLinkText === 'function') {
    updateFooterLinkText();
  }

  // 파일명 분석
  const currentPath = window.location.pathname;
  const currentFileName = currentPath.split('/').pop().replace('.html', '');
  const parts = currentFileName.split('-');

  // index.html, massage.html, outcall.html 처리
  if (
    currentFileName === 'index' ||
    currentFileName === '' ||
    currentFileName === 'massage' ||
    currentFileName === 'outcall' ||
    currentFileName === 'swedish' ||
    currentFileName === 'thai' ||
    currentFileName === 'aroma' ||
    currentFileName === 'chinese' ||
    currentFileName === 'foot' ||
    currentFileName === 'waxing'
  ) {
    // 필터 설정
    if (currentFileName === 'massage') {
      currentFilter = 'massage';
    } else if (currentFileName === 'outcall') {
      currentFilter = 'outcall';
    } else if (currentFileName === 'swedish') {
      currentFilter = 'swedish';
    } else if (currentFileName === 'thai') {
      currentFilter = 'thai';
    } else if (currentFileName === 'aroma') {
      currentFilter = 'aroma';
    } else if (currentFileName === 'chinese') {
      currentFilter = 'chinese';
    } else if (currentFileName === 'foot') {
      currentFilter = 'foot';
    } else if (currentFileName === 'waxing') {
      currentFilter = 'waxing';
    } else {
      currentFilter = 'all';
    }

    console.log('Current filter set to:', currentFilter);

    // 필터 버튼 활성화 상태 설정
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
      if (btn.dataset.filter === currentFilter) {
        btn.classList.add('active');
      }
    });
  }
  // districtMap은 함수 상단에서 이미 정의되었습니다.

  // ------------------------------------
  // 메인 처리 로직
  // ------------------------------------
  if (districtMap[parts[0]]) {
    const regionData = districtMap[parts[0]];
    currentRegion = regionData.regionName;

    console.log(`${currentRegion} parts:`, parts);
    console.log('Parts[1]:', parts[1]);
    console.log('Parts length:', parts.length);

    // 구 설정 (파일명에서)
    currentDistrict = regionData.districts[parts[1]] || '';

    // URL 파라미터에서 district 읽기 (표시용)
    // 출장마사지 페이지인 경우에는 district를 필터링에 사용하지 않음
    const urlParams = new URLSearchParams(window.location.search);
    const urlDistrict = urlParams.get('district');

    // 출장마사지 페이지 여부 확인
    const isOutcallPage =
      parts.includes('outcall') || window.location.pathname.includes('outcall');

    if (urlDistrict && !currentDistrict) {
      // 출장마사지 페이지가 아니면 district 설정
      if (!isOutcallPage) {
        currentDistrict = urlDistrict;
      }
      // 출장마사지 페이지는 district를 표시용으로만 사용 (필터링에는 사용 안 함)
    }

    console.log('Current district set to:', currentDistrict || '(empty)');

    // 필터 감지 (공통 로직)
    let detectedFilter = 'all';
    if (parts.length >= 2) {
      if (
        parts[1] === 'massage' ||
        parts[1] === 'outcall' ||
        parts[1] === 'swedish' ||
        parts[1] === 'thai' ||
        parts[1] === 'aroma' ||
        parts[1] === 'chinese' ||
        parts[1] === 'foot' ||
        parts[1] === 'waxing'
      ) {
        detectedFilter = parts[1];
      } else if (
        parts.length >= 3 &&
        (parts[2] === 'massage' ||
          parts[2] === 'outcall' ||
          parts[2] === 'swedish' ||
          parts[2] === 'thai' ||
          parts[2] === 'aroma' ||
          parts[2] === 'chinese' ||
          parts[2] === 'foot' ||
          parts[2] === 'waxing')
      ) {
        detectedFilter = parts[2];
      }
    }
    currentFilter = detectedFilter;

    // 출장마사지 페이지인 경우 currentDistrict는 표시용으로만 사용 (필터링에는 사용 안 함)
    // 이미 위에서 구 필터 적용 시 currentFilter !== 'outcall' 조건으로 처리됨

    // UI 업데이트
    if (regionSelect) {
      regionSelect.value = currentRegion;
      console.log('Region select updated to:', regionSelect.value);
    }

    // 구 선택 옵션 업데이트
    if (districtSelect) {
      districtSelect.disabled = false;
      districtSelect.style.opacity = '1';
      console.log('District select activated immediately');
    }

    if (typeof updateDistrictOptions === 'function') {
      updateDistrictOptions(currentRegion);
    }

    // 구 선택 값 설정 (약간의 지연)
    setTimeout(() => {
      if (districtSelect) {
        const options = districtSelect.querySelectorAll('option');
        console.log(
          'Available district options:',
          Array.from(options).map((opt) => opt.value)
        );

        districtSelect.value = currentDistrict;
        districtSelect.disabled = false;
        districtSelect.style.opacity = '1';
        console.log('District select updated to:', districtSelect.value);
      }
    }, 300);
  }

  // 필터 버튼 자동 링크 생성 및 활성화
  setupFilterButtons();

  // 결과 제목 업데이트
  updateResultsTitle();

  // 테마 페이지별 currentFilter 자동 설정
  const themePath = window.location.pathname;
  const themeFileName = themePath.split('/').pop();
  const themeFileMap = {
    'swedish.html': 'swedish',
    'thai.html': 'thai',
    'aroma.html': 'aroma',
    'chinese.html': 'chinese',
    'foot.html': 'foot',
    'waxing.html': 'waxing',
  };

  if (themeFileMap[themeFileName]) {
    currentFilter = themeFileMap[themeFileName];
  }

  // window.currentFilter가 설정되어 있으면 우선 사용
  if (window.currentFilter && typeof window.currentFilter !== 'undefined') {
    currentFilter = window.currentFilter;
  }

  // 필터링된 결과 표시
  if (typeof displayFilteredResults === 'function') {
    displayFilteredResults();
  }

  // 타입 필터 버튼 초기화
  initializeTypeFilter();
}

// 타입 필터 버튼 초기화 함수
function initializeTypeFilter() {
  const typeFilterBtn = document.getElementById('typeFilterBtn');
  const typeDropdownMenu = document.getElementById('typeDropdownMenu');
  const themeFilterSection = document.getElementById('themeFilterSection');

  if (typeFilterBtn && themeFilterSection) {
    // 기존 이벤트 리스너 제거
    typeFilterBtn.removeEventListener('click', handleTypeFilterClick);

    // 새로운 이벤트 리스너 추가
    typeFilterBtn.addEventListener('click', handleTypeFilterClick);
  }
}

// 타입 필터 버튼 클릭 핸들러
function handleTypeFilterClick(e) {
  e.preventDefault();
  e.stopPropagation();

  const themeFilterSection = document.getElementById('themeFilterSection');
  const typeFilterBtn = document.getElementById('typeFilterBtn');

  if (themeFilterSection && typeFilterBtn) {
    const isVisible = themeFilterSection.style.display !== 'none';
    themeFilterSection.style.display = isVisible ? 'none' : 'block';

    // 버튼 활성화 상태 토글
    typeFilterBtn.classList.toggle('active', !isVisible);

    // 테마 필터 섹션이 보여질 때 필터 섹션 바로 아래에 고정되도록 위치 조정
    if (!isVisible) {
      // 필터 섹션의 실제 높이를 계산하여 위치 조정
      const filterSection = document.querySelector('.filter-section');
      if (filterSection) {
        // 약간의 지연을 두고 계산하여 DOM 업데이트 완료 후 위치 계산
        setTimeout(() => {
          // 필터 섹션의 실제 높이 (offsetHeight 사용)
          const filterSectionHeight = filterSection.offsetHeight;
          // 필터 섹션의 getBoundingClientRect로 현재 viewport에서의 위치 확인
          const filterSectionRect = filterSection.getBoundingClientRect();

          // 필터 섹션이 sticky로 고정되어 있는지 확인 (top이 1px 근처인지)
          const isFilterSticky = filterSectionRect.top <= 10;

          if (isFilterSticky) {
            // 필터 섹션이 sticky로 고정되어 있으면: 헤더 높이(80px) + 필터 섹션 높이 - 여백 조정
            const headerHeight = 80;
            const topOffset = -85; // 위쪽 여백 줄이기
            themeFilterSection.style.top = `${
              headerHeight + filterSectionHeight + topOffset
            }px`;
          } else {
            // 필터 섹션이 sticky가 아니면: 필터 섹션의 viewport 기준 bottom 위치 - 여백 조정
            const filterSectionBottom =
              filterSectionRect.top + filterSectionHeight;
            const topOffset = -85; // 위쪽 여백 줄이기
            themeFilterSection.style.top = `${
              filterSectionBottom + topOffset
            }px`;
          }
        }, 10);
      } else {
        // 필터 섹션을 찾을 수 없는 경우 기본값 사용 (여백 조정)
        themeFilterSection.style.top = '80px';
      }
    }

    console.log('Type filter toggled:', !isVisible);
  }
}

// 필터 버튼 자동 설정 함수
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
  const currentPage = window.location.pathname
    .split('/')
    .pop()
    .replace('.html', '');

  filterButtons.forEach((btn) => {
    const filter = btn.dataset.filter;
    const href = generateFilterLink(filter);

    // 링크 설정
    btn.href = href;
    btn.classList.remove('active');

    // 현재 페이지와 일치하면 활성화
    const targetPage = href.replace('.html', '');
    if (currentPage === targetPage) {
      btn.classList.add('active');
    }
  });
}

// 필터 링크 자동 생성 함수
function generateFilterLink(filter) {
  const currentPage = window.location.pathname
    .split('/')
    .pop()
    .replace('.html', '');
  const parts = currentPage.split('-');

  // 디버깅용 콘솔
  console.log('Current page:', currentPage);
  console.log('Parts:', parts);
  console.log('Filter:', filter);

  // index.html, massage.html, outcall.html에서의 특별 처리
  if (
    currentPage === 'index' ||
    currentPage === '' ||
    currentPage === 'massage' ||
    currentPage === 'outcall' ||
    currentPage === 'swedish' ||
    currentPage === 'thai' ||
    currentPage === 'aroma' ||
    currentPage === 'chinese' ||
    currentPage === 'foot' ||
    currentPage === 'waxing'
  ) {
    if (filter === 'all') {
      return 'index.html';
    } else if (filter === 'massage') {
      return 'massage.html';
    } else if (filter === 'outcall') {
      return 'outcall.html';
    } else if (filter === 'swedish') {
      return 'swedish.html';
    } else if (filter === 'thai') {
      return 'thai.html';
    } else if (filter === 'aroma') {
      return 'aroma.html';
    } else if (filter === 'chinese') {
      return 'chinese.html';
    } else if (filter === 'foot') {
      return 'foot.html';
    } else if (filter === 'waxing') {
      return 'waxing.html';
    }
  }

  // 기본 구조: [region]-[district]-[filter]
  let region = parts[0] || '';
  let district = parts[1] || '';

  // district가 filter와 같은 경우 (예: jeju-massage에서 massage는 district가 아님)
  if (
    district === 'massage' ||
    district === 'outcall' ||
    district === 'swedish' ||
    district === 'thai' ||
    district === 'aroma' ||
    district === 'chinese' ||
    district === 'foot' ||
    district === 'waxing'
  ) {
    district = '';
  }

  console.log('Region:', region, 'District:', district);

  if (filter === 'all') {
    // 전체: region-district 또는 region
    const result = district ? `${region}-${district}.html` : `${region}.html`;
    console.log('Generated link (all):', result);
    return result;
  } else {
    // 마사지/출장마사지: region-district-filter 또는 region-filter
    const result = district
      ? `${region}-${district}-${filter}.html`
      : `${region}-${filter}.html`;
    console.log('Generated link (filter):', result);
    return result;
  }
}

// 중앙화된 함수: 지역+테마 필터 페이지로 이동
// detail.js와 다른 곳에서 사용 가능
window.goToRegionPageWithTheme = function (region, district, theme) {
  // window.districtMap 사용 (중앙화된 지역 매핑)
  const districtMap = window.districtMap || {};

  // 한글 지역명으로 영어 키 찾기
  let regionEng = '';
  for (const [key, value] of Object.entries(districtMap)) {
    if (value.regionName === region) {
      regionEng = value.regionEng || key;
      break;
    }
  }

  if (!regionEng) {
    console.warn('알 수 없는 지역:', region);
    window.location.href = 'index.html';
    return;
  }

  // 구별 영어 키 찾기
  let districtEng = '';
  if (district) {
    for (const [key, value] of Object.entries(districtMap)) {
      if (value.regionName === region) {
        for (const [dKey, dName] of Object.entries(value.districts || {})) {
          if (dName === district) {
            districtEng = dKey;
            break;
          }
        }
        break;
      }
    }
  }

  let url = '';

  // 출장마사지는 구를 무시하고 지역만으로 이동
  const isOutcall = theme === 'outcall';

  // 테마가 지정된 경우
  if (theme && theme !== 'all') {
    if (isOutcall) {
      // 출장마사지: 구 무시하고 지역-테마 형식만 사용 (jeju-outcall.html)
      url = `${regionEng}-${theme}.html`;
      // district 정보는 URL 파라미터로 추가 (표시용)
      if (district) {
        url += `?district=${encodeURIComponent(district)}`;
      }
    } else if (districtEng) {
      // 일반 마사지: 지역-구-테마 형식 (jeju-si-massage.html)
      url = `${regionEng}-${districtEng}-${theme}.html`;
      // 상세지역이 있으면 항상 URL 파라미터로 추가
      if (district) {
        url += `?district=${encodeURIComponent(district)}`;
      }
    } else {
      // 지역-테마 형식 (jeju-massage.html)
      // 상세지역이 있으면 URL 파라미터로 추가
      url = `${regionEng}-${theme}.html`;
      if (district) {
        url += `?district=${encodeURIComponent(district)}`;
      }
    }
  } else {
    // 테마가 없으면 기본 마사지 페이지
    if (districtEng) {
      url = `${regionEng}-${districtEng}-massage.html`;
      // 상세지역이 있으면 항상 URL 파라미터로 추가
      if (district) {
        url += `?district=${encodeURIComponent(district)}`;
      }
    } else {
      url = `${regionEng}-massage.html`;
      // 상세지역이 있으면 URL 파라미터로 추가
      if (district) {
        url += `?district=${encodeURIComponent(district)}`;
      }
    }
  }

  console.log('페이지 이동:', url);
  window.location.href = url;
};

// 결과 제목 업데이트 함수
function updateResultsTitle() {
  const resultsTitle = document.getElementById('resultsTitle');
  if (!resultsTitle) return;

  let title = '';

  // 테마 필터가 먼저 처리
  const themeNames = {
    swedish: '스웨디시',
    thai: '타이마사지',
    aroma: '아로마마사지',
    waxing: '왁싱',
    chinese: '중국마사지',
    foot: '발마사지',
  };

  if (currentFilter && themeNames[currentFilter]) {
    // 테마 필터인 경우 지역/구 정보 포함
    const themeName = themeNames[currentFilter];
    // 구가 있으면 구만 표시, 없으면 지역 표시
    if (currentDistrict) {
      title = `${currentDistrict} ${themeName} 업체`;
    } else if (currentRegion) {
      title = `${currentRegion} ${themeName} 업체`;
    } else {
      title = `${themeName} 업체`;
    }
  } else if (currentFilter && currentFilter !== 'all') {
    // 다른 필터 (massage, outcall 등)
    const filterNames = {
      massage: '마사지',
      outcall: '출장마사지',
      swedish: '스웨디시',
      thai: '타이마사지',
      aroma: '아로마마사지',
      chinese: '중국마사지',
      foot: '발마사지',
      waxing: '왁싱',
    };
    const filterName = filterNames[currentFilter] || currentFilter;

    // 출장마사지는 구를 표시하되 필터링에는 사용하지 않음 (표시용)
    if (currentFilter === 'outcall') {
      // 출장마사지: 상세지역이 있으면 상세지역만 표시, 없으면 지역만 표시
      if (currentDistrict) {
        title = `${currentDistrict} ${filterName} 업체`;
      } else if (currentRegion) {
        title = `${currentRegion} ${filterName} 업체`;
      } else {
        title = `${filterName} 업체`;
      }
    } else {
      // 일반 마사지: 구가 있으면 구만 표시, 없으면 지역 표시
      if (currentDistrict) {
        title = `${currentDistrict} ${filterName} 업체`;
      } else if (currentRegion) {
        title = `${currentRegion} ${filterName} 업체`;
      } else {
        title = `${filterName} 업체`;
      }
    }
  } else {
    // 전체인 경우
    const isMainPage =
      window.location.pathname.includes('index.html') ||
      window.location.pathname === '/' ||
      window.location.pathname === '';

    if (currentDistrict) {
      title = `${currentDistrict} 마사지사이트 업체`;
    } else if (currentRegion) {
      title = `${currentRegion} 마사지사이트 업체`;
    } else {
      title = isMainPage ? '전체 마사지사이트 업체' : '전체 마사지 업체';
    }
  }

  console.log('Current region:', currentRegion);
  console.log('Current district:', currentDistrict);
  console.log('Current filter:', currentFilter);
  console.log('Generated title:', title);

  resultsTitle.textContent = title;
}

// 테마 필터 초기화 함수
function initializeThemeFilter() {
  const themeBoxes = document.querySelectorAll('.theme-box');
  const themeFilterSection = document.getElementById('themeFilterSection');

  themeBoxes.forEach((box) => {
    // onclick 속성 제거
    if (box.getAttribute('onclick')) {
      box.removeAttribute('onclick');
      box.onclick = null;
    }

    // 기존 이벤트 리스너가 없을 때만 추가
    const hasEventListener = box.getAttribute('data-has-listener');
    if (!hasEventListener) {
      box.setAttribute('data-has-listener', 'true');
      box.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const selectedTheme = this.dataset.theme;
        console.log('Selected theme:', selectedTheme);

        // 모든 테마 박스에서 active 클래스 제거
        themeBoxes.forEach((b) => {
          b.classList.remove('active');
          // 다른 박스의 onclick도 제거
          if (b !== this) {
            b.removeAttribute('onclick');
            b.onclick = null;
          }
        });
        // 클릭된 박스에 active 클래스 추가
        this.classList.add('active');

        // 테마별 페이지로 이동 (전체 제외)
        if (selectedTheme !== 'all') {
          // 중앙화된 함수로 테마 페이지 URL 생성
          const targetPage = window.getThemePageUrl
            ? window.getThemePageUrl(
                selectedTheme,
                currentRegion,
                currentDistrict
              )
            : null;
          if (targetPage) {
            window.location.href = targetPage;
            return;
          }
        }

        // 전체 선택 시 필터 적용
        currentFilter = selectedTheme;
        displayFilteredResults();

        // 드롭다운 숨기기
        const themeFilterSection =
          document.getElementById('themeFilterSection');
        if (themeFilterSection) {
          themeFilterSection.style.display = 'none';
        }

        const typeFilterBtn = document.getElementById('typeFilterBtn');
        if (typeFilterBtn) {
          typeFilterBtn.classList.add('active');
        }
      });
    }
  });
}

// 테마 필터 적용 함수
function applyThemeFilter(theme) {
  // 현재 페이지의 업체 목록을 필터링
  const massageList = document.getElementById('massageList');
  if (!massageList) return;

  // 모든 업체 카드 가져오기
  const cards = massageList.querySelectorAll('.massage-card');

  cards.forEach((card) => {
    const cardTheme = card.dataset.theme || 'all';

    if (theme === 'all' || cardTheme === theme) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // 결과 개수 업데이트
  const visibleCards = massageList.querySelectorAll(
    '.massage-card[style*="block"], .massage-card:not([style*="none"])'
  );
  const resultsCount = document.getElementById('resultsCount');
  if (resultsCount) {
    resultsCount.textContent = `총 ${visibleCards.length}개`;
  }
}

// 외부 클릭 시 드롭다운 숨기기
function hideThemeDropdownOnOutsideClick() {
  document.addEventListener('click', function (event) {
    const themeFilterSection = document.getElementById('themeFilterSection');
    const typeFilterBtn = document.getElementById('typeFilterBtn');

    if (themeFilterSection && typeFilterBtn) {
      // 테마보기 버튼이나 드롭다운 내부가 아닌 곳을 클릭했을 때
      if (
        !themeFilterSection.contains(event.target) &&
        !typeFilterBtn.contains(event.target)
      ) {
        hideThemeDropdown();
      }
    }
  });
}

// 스크롤 시 드롭다운 숨기기
function hideThemeDropdownOnScroll() {
  let scrollTimeout;

  window.addEventListener(
    'scroll',
    function () {
      const themeFilterSection = document.getElementById('themeFilterSection');

      if (themeFilterSection && themeFilterSection.style.display !== 'none') {
        console.log('Scroll detected, hiding dropdown');
        hideThemeDropdown();
      }
    },
    { passive: true }
  );

  // 휠 이벤트 (마우스 휠)
  window.addEventListener(
    'wheel',
    function () {
      const themeFilterSection = document.getElementById('themeFilterSection');
      if (themeFilterSection && themeFilterSection.style.display !== 'none') {
        console.log('Wheel detected, hiding dropdown');
        hideThemeDropdown();
      }
    },
    { passive: true }
  );

  // 터치 이벤트 (모바일)
  let touchStartY = 0;
  let touchStartTime = 0;

  document.addEventListener(
    'touchstart',
    function (e) {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    },
    { passive: true }
  );

  document.addEventListener(
    'touchmove',
    function (e) {
      const themeFilterSection = document.getElementById('themeFilterSection');
      if (themeFilterSection && themeFilterSection.style.display !== 'none') {
        const touchCurrentY = e.touches[0].clientY;
        const touchDiff = Math.abs(touchCurrentY - touchStartY);
        const timeDiff = Date.now() - touchStartTime;

        // 5px 이상 움직이거나 빠른 움직임이면 드롭다운 숨기기
        if (touchDiff > 5 || (touchDiff > 2 && timeDiff < 100)) {
          console.log('Touch movement detected, hiding dropdown');
          hideThemeDropdown();
        }
      }
    },
    { passive: true }
  );

  // 키보드 이벤트 (Page Up/Down, 화살표 키 등)
  document.addEventListener('keydown', function (e) {
    const themeFilterSection = document.getElementById('themeFilterSection');
    if (themeFilterSection && themeFilterSection.style.display !== 'none') {
      // 스크롤 관련 키들
      if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
        console.log('Scroll key detected, hiding dropdown');
        hideThemeDropdown();
      }
    }
  });

  // 윈도우 리사이즈 이벤트
  window.addEventListener('resize', function () {
    const themeFilterSection = document.getElementById('themeFilterSection');
    if (themeFilterSection && themeFilterSection.style.display !== 'none') {
      console.log('Window resize detected, hiding dropdown');
      hideThemeDropdown();
    }
  });
}

// 드롭다운 숨기기 공통 함수
function hideThemeDropdown() {
  const themeFilterSection = document.getElementById('themeFilterSection');
  const typeFilterBtn = document.getElementById('typeFilterBtn');

  if (themeFilterSection) {
    themeFilterSection.style.display = 'none';
  }

  if (typeFilterBtn) {
    typeFilterBtn.classList.remove('active');
  }
}

// 중앙화된 함수: nearby-shops-title 클릭 이벤트 자동 설정
// 출장마사지 페이지는 해당 지역 + 출장마사지 필터로, 일반 페이지는 해당 지역 + 마사지 필터로 이동
window.initializeNearbyShopsTitle = function () {
  const nearbyShopsTitle =
    document.querySelector('.nearby-shops-title') ||
    document.getElementById('nearbyShopsTitleClickable');
  if (!nearbyShopsTitle) return;

  // 하드코딩된 onclick 제거
  nearbyShopsTitle.removeAttribute('onclick');
  nearbyShopsTitle.onclick = null;

  // 파일명에서 지역 정보 추출
  const fileName = window.location.pathname
    .split('/')
    .pop()
    .replace('.html', '');
  const parts = fileName.split('-');

  // window.districtMap 사용 (중앙화된 지역 매핑)
  const districtMap = window.districtMap || {};

  // 지역 추출 (영어 키 -> 한글 지역명)
  let region = '';
  if (parts[0] && districtMap[parts[0]]) {
    region = districtMap[parts[0]].regionName;
  }

  // 구 추출 (영어 키 -> 한글 구명)
  let district = '';

  // 1. 파일명에서 구 정보 추출 시도
  if (parts[0] && districtMap[parts[0]] && parts[1]) {
    const regionData = districtMap[parts[0]];
    // parts[1]이 테마가 아닌 구 이름인지 확인
    const isTheme = [
      'massage',
      'outcall',
      'swedish',
      'thai',
      'aroma',
      'chinese',
      'foot',
      'waxing',
    ].includes(parts[1]);
    if (!isTheme && regionData.districts && regionData.districts[parts[1]]) {
      district = regionData.districts[parts[1]];
    }
  }

  // 2. HTML에서 구 정보 추출 시도 (여러 방법 시도)
  // 방법 1: nearbyShopsDistrict ID로 찾기 (detail.html에서 사용)
  if (!district) {
    const nearbyShopsDistrict = document.getElementById('nearbyShopsDistrict');
    if (nearbyShopsDistrict && nearbyShopsDistrict.textContent.trim()) {
      district = nearbyShopsDistrict.textContent.trim();
    }
  }

  // 방법 2: shop-district 클래스로 찾기 (업체 HTML 페이지에서 사용)
  if (!district) {
    const shopDistrict = document.querySelector('.shop-district');
    if (shopDistrict && shopDistrict.textContent.trim()) {
      const districtText = shopDistrict.textContent.trim();
      // "제주시 연동" 같은 경우 "제주시"만 추출
      // districtMap에서 매칭되는 구 이름 찾기
      if (region && districtMap[parts[0]]) {
        const regionData = districtMap[parts[0]];
        for (const [dKey, dName] of Object.entries(
          regionData.districts || {}
        )) {
          if (districtText.includes(dName)) {
            district = dName;
            break;
          }
        }
        // 매칭되지 않으면 전체 텍스트 사용하지 않고, 첫 번째 단어만 사용
        if (!district) {
          // "제주시 연동" -> "제주시" 추출
          const words = districtText.split(' ');
          if (words.length > 0) {
            district = words[0];
          }
        }
      } else {
        district = districtText;
      }
    }
  }

  // 방법 3: nearby-title-line1 클래스로 찾기
  if (!district) {
    const nearbyTitleLine1 = document.querySelector('.nearby-title-line1');
    if (nearbyTitleLine1 && nearbyTitleLine1.textContent.trim()) {
      district = nearbyTitleLine1.textContent.trim();
    }
  }

  // 디버깅 로그
  console.log('상세지역 추출 결과:', { district, parts, fileName });

  // 출장마사지 페이지 여부 확인 (HTML 요소에서 자동 판단)
  // .shop-badge 요소의 텍스트 내용을 확인하여 "출장마사지"가 포함되어 있으면 출장마사지 페이지
  const shopBadge = document.querySelector('.shop-badge');
  const isOutcall = shopBadge && shopBadge.textContent.includes('출장마사지');
  const theme = isOutcall ? 'outcall' : 'massage';

  // 출장마사지의 경우 상세지역(district) 무시하고 지역(region)만 사용
  const finalDistrict = isOutcall ? '' : district;

  // 클릭 이벤트 설정
  if (region && window.goToRegionPageWithTheme) {
    nearbyShopsTitle.onclick = function () {
      console.log('다른샵보기 클릭:', {
        region,
        district: finalDistrict,
        theme,
        isOutcall,
      });
      window.goToRegionPageWithTheme(region, finalDistrict, theme);
    };
    // 커서 포인터 스타일 추가
    nearbyShopsTitle.style.cursor = 'pointer';
  } else {
    console.warn('다른샵보기 이벤트 설정 실패:', {
      region,
      districtMap: !!window.districtMap,
      goToRegionPageWithTheme: !!window.goToRegionPageWithTheme,
    });
  }
};

// 페이지 로드 시 드래그 스크롤 초기화
document.addEventListener('DOMContentLoaded', initFilterDragScroll);

// ✅ 새로운 중앙화된 초기화 함수 실행
document.addEventListener('DOMContentLoaded', initializeApp);

// 테마 필터 초기화
document.addEventListener('DOMContentLoaded', function () {
  initializeThemeFilter();
  hideThemeDropdownOnOutsideClick();
  hideThemeDropdownOnScroll();

  // 검색 입력창 이벤트 리스너 추가
  initializeSearchFunctionality();

  // nearby-shops-title 자동 설정
  if (typeof window.initializeNearbyShopsTitle === 'function') {
    window.initializeNearbyShopsTitle();
  }
});

// 검색 기능 초기화
function initializeSearchFunctionality() {
  const searchInput = document.getElementById('shopSearchInput');
  if (!searchInput) return;

  let searchTimeout;

  // 입력 이벤트 리스너 (디바운싱 적용)
  searchInput.addEventListener('input', function (e) {
    const query = e.target.value.trim();
    currentSearchQuery = query;

    // 타이머 클리어
    clearTimeout(searchTimeout);

    // 2글자 이상일 때만 검색 실행
    if (query.length >= 2) {
      searchTimeout = setTimeout(() => {
        displayFilteredResults();
      }, 300); // 300ms 디바운싱
    } else if (query.length === 0) {
      // 검색어가 없으면 필터만 적용
      currentSearchQuery = '';
      displayFilteredResults();
    } else {
      // 1글자일 때는 검색하지 않음 (빈 결과 표시)
      currentSearchQuery = '';
      displayFilteredResults();
    }
  });

  // Enter 키 이벤트
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = e.target.value.trim();
      currentSearchQuery = query;
      if (query.length >= 2) {
        displayFilteredResults();
      }
    }
  });

  // 검색어 지우기 (X 버튼 클릭 시)
  searchInput.addEventListener('search', function () {
    if (this.value === '') {
      currentSearchQuery = '';
      displayFilteredResults();
    }
  });

  // 검색 아이콘 클릭 이벤트
  const searchIcon = document.querySelector('.text-search-box .search-icon');
  if (searchIcon) {
    // 클릭 이벤트를 강제로 활성화
    searchIcon.style.pointerEvents = 'auto';
    searchIcon.style.cursor = 'pointer';
    
    // 클릭 이벤트 리스너
    searchIcon.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const query = searchInput.value.trim();
      currentSearchQuery = query;
      
      // 검색 실행 (1글자 이상이면 검색)
      if (query.length >= 1) {
        displayFilteredResults();
      } else if (query.length === 0) {
        // 검색어가 없으면 필터만 적용
        currentSearchQuery = '';
        displayFilteredResults();
      }
    });
    
    // 마우스 다운 이벤트도 추가 (더 확실한 클릭 감지)
    searchIcon.addEventListener('mousedown', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    
    // 터치 이벤트 추가 (모바일 지원)
    searchIcon.addEventListener('touchend', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const query = searchInput.value.trim();
      currentSearchQuery = query;
      
      if (query.length >= 1) {
        displayFilteredResults();
      } else if (query.length === 0) {
        currentSearchQuery = '';
        displayFilteredResults();
      }
    });
  }
}
