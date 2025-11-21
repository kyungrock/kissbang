// 업체 카드 데이터 (자동 렌더링용)
// 각 업체의 카드 정보를 저장하는 중앙화된 데이터 파일

window.shopCardData = [
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
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop&crop=center',
    services: ['스웨디시', '왁싱'],
    operatingHours: '오전 10시 ~ 새벽 6시 (폰 꺼진 경우 마감, 랜덤 휴무)',
    file: 'company-jeju-massage-private.html',
    showHealingShop: false,
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
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&crop=center',
    services: ['스웨디시', '슈얼마사지'],
    operatingHours: '24시간 (랜덤휴무 or 폰OFF)',
    file: 'company-jeju-massage-mz.html',
    showHealingShop: false,
  },
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
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop&crop=center',
    services: ['출장마사지'],
    operatingHours: '24시간 (폰이 꺼진 경우: 마감, 랜덤휴무)',
    file: 'company-jeju-massage-yeppuni.html',
    showHealingShop: false,
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
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
    services: ['스웨디시'],
    operatingHours: '24시간 (랜덤휴무 or 폰OFF)',
    file: 'company-jeju-yeondong-massage.html',
  },
];
