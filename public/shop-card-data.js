// 업체 카드 데이터 (자동 렌더링용)
// 각 업체의 카드 정보를 저장하는 중앙화된 데이터 파일

// 업체 카드 데이터 (자동 렌더링용)
// 각 업체의 카드 정보를 저장하는 중앙화된 데이터 파일
// showHealingShop: true인 항목들이 상단에, false인 항목들이 하단에 배치됨
// 새로고침 시 각 그룹 내에서 랜덤 정렬됨
// shopcard 업체 name,address,detailAddress,services 내용 맞춰서 후기글 오늘 날짜로 해서 작성해줘 각 한개식 reviews 리뷰 seo 위해 봇쓴것처럼 아니게해줘 기존 reviews 리뷰 글을 없애는게 아니야 추가하는거야 author 일반적인 닉네임으로 넣어줘
window.shopCardData = [
  // showHealingShop: true 그룹 (상단 배치)
  {
    id: 1,
    name: '연동 프라이빗',
    country: 'korea',
    region: '제주',
    district: '제주시',
    address: '제주특별자치도 제주시 연동 261-18',
    detailAddress: '제원 시내 부근 (정확한 위치는 예약 시 안내)',
    phone: '0507-1859-7062',
    rating: 4.9,
    reviewCount: 142,
    price: '120,000원~',
    description:
      '제주도 프라이빗 마사지샵. 20대 전문 힐링 관리사들이 정성스럽게 맞이해드리며, 스웨디시·아로마·로미로미·슈얼 등 다양한 프로그램으로 최상의 힐링을 제공합니다.',
    image: 'https://msg1000.com/images/연동마사지_프라이빗.jpg',
    alt: '제주 연동 프라이빗 마사지샵 내부 - 20대 전문 힐링 관리사, 스웨디시·아로마·로미로미·슈얼',
    services: ['스웨디시', '왁싱'],
    operatingHours: '오전 10시 ~ 새벽 6시 (폰 꺼진 경우 마감, 랜덤 휴무)',
    file: 'company-jeju-massage-private.html',
    showHealingShop: true,
    greeting: '힐링가득한 스웨디시 와 고급 왁싱 편안한 문의',
    reviews: [
      {
        author: '하늘님',
        rating: 5,
        date: '2025-11-23',
        review: '처음 가봤는데 서비스 최고였습니다. 다음에 또 방문할게요!',
      },
      {
        author: '건물다간님',
        rating: 4,
        date: '2025-11-23',
        review: '마사지가 정말 시원했어요. 시설도 깨끗하고 추천합니다.',
      },
      {
        author: '여행러님',
        rating: 5,
        date: '2025-11-25',
        review:
          '제원 시내 근처에 있어서 찾기 쉬웠어요. 연동 프라이빗에서 스웨디시 받았는데 관리사분이 정말 세심하게 케어해주셔서 몸이 한결 가벼워졌어요. 왁싱도 같이 받았는데 시설이 깨끗하고 프라이빗한 공간이라 편안하게 이용할 수 있었습니다.',
      },
    ],
  },
  {
    id: 2,
    name: '연동 MZ',
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
      '제주 연동 최고의 서비스를 보장하는 MZ입니다. 깨끗하고 쾌적한 시설로 고객님의 지친일상에 활력과 행복으로 보답드리겠습니다.',
    image: 'https://msg1000.com/images/제주마사지_mz.jpg',
    alt: '제주 연동 MZ 마사지샵 내부 - 24시간 영업, 20대 한국인 관리사, 힐링샵',
    services: ['스웨디시', '슈얼마사지'],
    operatingHours: '24시간 (랜덤휴무 or 폰OFF)',
    file: 'company-jeju-massage-mz.html',
    showHealingShop: true,
    greeting: '최고의 관리사 만족도 100% 힐링샵',
    reviews: [
      {
        author: '가가님',
        rating: 4.5,
        date: '2025-11-23',
        review: '슈얼마사지가 정말 끝내줬어요. mz 연동여기 완전 추천!',
      },
      {
        author: '슈자인님',
        rating: 4.3,
        date: '2025-11-23',
        review: '한번가보세요 돔나이트 부근인데 캬~ 주차도 편하고 좋습니다',
      },
      {
        author: '로컬님',
        rating: 5,
        date: '2025-11-25',
        review:
          '돔나이트 근처에 있어서 주차 걱정 없이 갔어요. 연동 MZ에서 슈얼마사지 받았는데 24시간 운영이라 늦은 시간에도 이용 가능해서 좋았습니다. 관리사분이 친절하시고 스웨디시도 받아봤는데 둘 다 만족스러웠어요. 힐링샵답게 분위기도 좋고요.',
      },
    ],
  },
  {
    id: 5,
    name: '모카스파',
    country: 'korea',
    region: '서울',
    district: '송파',
    address: '서울 송파구 올림픽로 지하 383',
    detailAddress: '서울 송파구 방이동, 몽촌토성역 도보 5분',
    phone: '0507-1859-6900',
    rating: 4.8,
    reviewCount: 2,
    price: '80,000원~',
    description:
      '송파마사지 최고의 서비스를 보장하는 모카스파입니다. 아늑하고 포근한 공간에서 여러분의 몸과 마음을 힐링하시기 바랍니다. 찾아오시는 고객님 한분 한분을 최선을 다하여 관리해드리도록 항상 노력하겠습니다.',
    image: 'https://msg1000.com/images/송파마사지_모카스파.jpg',
    alt: '송파 방이동 모카스파 마사지샵 - 몽촌토성역 도보 5분, 힐링샵',
    services: ['스웨디시', 'VIP케어', '스크럽', '스파'],
    operatingHours: '아침 10시 ~ 새벽 5시 (폰이 꺼진 경우: 마감, 랜덤 휴무)',
    file: 'company-seoul-songpa-mokaspa.html',
    showHealingShop: true,
    greeting: '최고 선물을 선사하겠습니다.',
    reviews: [
      {
        author: '러버님',
        rating: 5,
        date: '2025-11-23',
        review:
          '몽촌토성역에서 가까워서 접근성 좋아요! VIP케어 받았는데 정말 힐링되는 시간이었습니다. 힐링샵답게 분위기도 좋고 관리사님들도 친절하세요.',
      },
      {
        author: '주민님',
        rating: 4.5,
        date: '2025-11-23',
        review:
          '스크럽 코스 받았는데 피부가 정말 부드러워졌어요. 아늑한 공간에서 편안하게 받을 수 있어서 좋았습니다. 다음엔 스웨디시도 받아볼 예정이에요!',
      },
      {
        author: '힐링러버님',
        rating: 5,
        date: '2025-11-25',
        review:
          '몽촌토성역에서 도보 5분 거리라 접근성 완벽해요. 모카스파에서 스파와 스크럽 받았는데 피부가 정말 부드러워졌어요. VIP케어도 받아봤는데 아늑한 공간에서 편안하게 힐링할 수 있었습니다. 방이동에 이런 좋은 힐링샵이 있어서 다행이에요.',
      },
    ],
  },
  // showHealingShop: false 그룹 (하단 배치)
  {
    id: 3,
    name: '제주 이쁘니출장',
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
    image: 'https://msg1000.com/images/제주출장마사지_이쁘니출장.jpg',
    alt: '제주도 전지역 출장마사지 이쁘니출장 - 제주시 30분 이내 신속방문, 24시간 운영, 20대~30대 한국인&일본 관리사',
    services: ['출장마사지'],
    operatingHours: '24시간 (폰이 꺼진 경우: 마감, 랜덤휴무)',
    file: 'company-jeju-massage-yeppuni.html',
    showHealingShop: false,
    greeting: '20대 관리사로 최고의 힐링제공',
    reviews: [
      {
        author: '고고학자님',
        rating: 5,
        date: '2025-11-23',
        review:
          '출장마사지 중에 최고라고 생각합니다. 이쁘니출장 여기 가보세요.',
      },
      {
        author: '자전거이슈멘님',
        rating: 5,
        date: '2025-11-23',
        review: '놀러오면 꼭 가는곳이에요 이쁜이 이곳 추천!',
      },
      {
        author: '관광객님',
        rating: 5,
        date: '2025-11-25',
        review:
          '제주도 여행 중에 호텔에서 출장마사지 받았어요. 이쁘니출장이 제주시에서 30분 안에 와주셔서 정말 신속했고, 관리사분이 친절하게 서비스해주셔서 여행 피로가 확 풀렸어요. 24시간 운영이라 늦은 시간에도 가능해서 좋았습니다.',
      },
    ],
  },
  {
    id: 4,
    name: '연동 A+스웨디시',
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
      '제주도연동 A+스웨디시 인사 드립니다! 저희 샵은 철저한 관리사 교육으로 실력 및 마인드가 정말 좋습니다. 샵으로 육체적 힐링은 물론 심신의 안정과 내적치유도 도와드리도록 하겠습니다.',
    image: 'https://msg1000.com/images/제주시마사지_a스웨디시.jpg',
    alt: '제주 연동 A+스웨디시 마사지샵 내부 - 24시 영업, 20대 한국인 관리사',
    services: ['스웨디시'],
    operatingHours: '24시간 (랜덤휴무 or 폰OFF)',
    file: 'company-jeju-yeondong-massage.html',
    showHealingShop: false,
    greeting: '최선을 다해서 모시겠습니다! A',
    reviews: [
      {
        author: '구구님',
        rating: 5,
        date: '2025-11-23',
        review: '스웨디시가 몸에 샤르르 녹아내려요',
      },
      {
        author: '베토맨님',
        rating: 4.6,
        date: '2025-11-23',
        review: '좋은 서비스를 받았습니다. 다음에 또 방문할게요!',
      },
      {
        author: '거주민님',
        rating: 5,
        date: '2025-11-25',
        review:
          '송월타월 2층에 있는 A+스웨디시 다녀왔어요. 연동에 위치해서 접근하기 편했고, 스웨디시 마사지 받았는데 관리사분이 정말 꼼꼼하게 해주셔서 어깨와 허리 통증이 많이 나아졌어요. 24시간 운영이라 시간대 상관없이 이용할 수 있어서 좋습니다.',
      },
    ],
  },
  {
    id: 6,
    name: '바나나 홈케어',
    type: '출장마사지',
    country: 'korea',
    region: '서울',
    district: '서울·경기·인천 전지역',
    address: '서울 경기 인천 전지역',
    detailAddress: '홈케어 - 원하는 장소에서 받을 수 있어요',
    phone: '0507-1859-6725',
    rating: 4.9,
    reviewCount: 28,
    price: '70,000원~',
    description:
      '서울·경기·인천 전지역 출장마사지 최고의 서비스를 보장하는 바나나 홈케어입니다. 전원 20대 긍정 마인드를 갖춘 실력파 관리사들이 감미로운 손길로 감성힐링을 제공합니다. 타이마사지, 건마, 아로마, 오일 테라피, 스웨디시 등 다양한 프로그램으로 최상의 힐링을 선사합니다.',
    image: 'https://msg1000.com/images/바나나홈케어.jpg',
    alt: '서울 경기 인천 전지역 출장마사지 바나나 홈케어 - 20대 힐링관리, 타이마사지, 건마, 아로마, 스웨디시',
    services: ['출장마사지'],
    operatingHours: '24시간 (폰이 꺼진 경우: 마감, 랜덤 휴무)',
    file: 'company-seoul-banana-outcall.html',
    showHealingShop: false,
    greeting:
      '20대 힐링관리 ⭐ 감미로운 손길로 감성힐링이 되는 최고의 출장샵입니다. ⭐',
    reviews: [
      {
        author: '고객님',
        rating: 5,
        date: '2025-11-25',
        review:
          '서울 집에서 출장마사지 받았는데 정말 만족스러웠어요. 바나나 홈케어 관리사분이 친절하게 와주셔서 편안하게 타이마사지 받을 수 있었습니다. 20대 관리사분들이라 분위기도 좋고 실력도 좋아서 다음에도 또 부를 예정이에요. 홈케어라 원하는 장소에서 받을 수 있어서 너무 편했어요.',
      },
    ],
  },
];
