// 상세 페이지 JavaScript

// 성인 인증 관련 함수 제거됨

// 로딩 상태 관리
let isPageLoaded = false;

// URL에서 업체 ID 가져오기
function getShopIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// 업체 데이터 가져오기
function getShopData(shopId) {
  // script.js에서 정의된 massageShops 배열 사용
  if (typeof massageShops !== 'undefined') {
    return massageShops.find((shop) => shop.id == shopId);
  }
  return null;
}

// 상세 페이지 데이터 로드 (중복 방지)
function loadShopDetail() {
  // 이미 로드된 경우 중복 실행 방지
  if (isPageLoaded) {
    console.log('페이지가 이미 로드되었습니다.');
    return;
  }

  const shopId = getShopIdFromUrl();
  if (!shopId) {
    alert('잘못된 접근입니다.');
    goBack();
    return;
  }

  const shop = getShopData(shopId);
  if (!shop) {
    alert('업체 정보를 찾을 수 없습니다.');
    goBack();
    return;
  }

  // 로딩 상태 설정
  isPageLoaded = true;

  // 모든 정보를 즉시 로드 (성능 최적화)
  displayShopInfo(shop);
  displayStaffInfo(shop);
  displayShopCourses(shop);
  displayShopReviews(shop);
  displayNearbyShops(shop);
  updateSEOMetaTags(shop);
  console.log('업체 상세 페이지 로드 완료');
}

// 업체 정보 표시 (최적화됨)
function displayShopInfo(shop) {
  // DOM 요소들을 한 번에 가져오기 (성능 최적화)
  const elements = {
    shopName: document.getElementById('shopName'),
    shopDescription: document.getElementById('shopDescription'),
    shopAddress: document.getElementById('shopAddress'),
    shopPhone: document.getElementById('shopPhone'),
    shopPrice: document.getElementById('shopPrice'),
    shopHours: document.getElementById('shopHours'),
    shopImage: document.getElementById('shopImage'),
    shopType: document.getElementById('shopType'),
    shopStars: document.getElementById('shopStars'),
    shopRatingText: document.getElementById('shopRatingText'),
    overallRating: document.getElementById('overallRating'),
    overallStars: document.getElementById('overallStars'),
    totalReviews: document.getElementById('totalReviews'),
    shopCountryFlags: document.getElementById('shopCountryFlags'),
    shopDistrict: document.getElementById('shopDistrict'),
  };

  // 모든 정보를 즉시 표시 (성능 최적화)

  // shop name 표시 (이미 동이 포함된 경우 중복 추가 방지)
  elements.shopName.textContent = createShopDisplayName(shop);

  elements.shopPrice.textContent = shop.price;

  // 지역 정보 표시 (구/시 + 동)
  const locationInfo = extractLocationInfo(shop.address);
  if (elements.shopDistrict) {
    elements.shopDistrict.textContent = locationInfo;
  }

  // 나머지 정보 표시
  elements.shopDescription.textContent = shop.description;
  elements.shopPhone.textContent = shop.phone;

  // 운영시간 표시 (operatingHours가 있으면 사용, 없으면 기본값)
  if (elements.shopHours) {
    elements.shopHours.textContent =
      shop.operatingHours || '09:00 - 22:00 (연중무휴)';
  }

  // 타입 배지
  elements.shopType.textContent = getTypeName(shop.type);

  // 평점 계산
  const stars =
    '★'.repeat(Math.floor(shop.rating)) +
    '☆'.repeat(5 - Math.floor(shop.rating));
  elements.shopStars.textContent = stars;
  elements.shopRatingText.textContent = `${shop.rating} (${shop.reviewCount}개 리뷰)`;
  elements.overallRating.textContent = shop.rating;
  elements.overallStars.textContent = stars;
  elements.totalReviews.textContent = `총 ${shop.reviewCount}개 리뷰`;

  // 주소 설정
  setupAddressSection(elements.shopAddress, shop);

  // 이미지 로드
  elements.shopImage.src =
    shop.image ||
    'https://via.placeholder.com/400x250?text=' + encodeURIComponent(shop.name);
  elements.shopImage.alt = shop.name + ' 이미지';
  elements.shopImage.loading = 'lazy';
}

// 주소 섹션 설정 (다른 info-item들과 동일한 형태)
function setupAddressSection(addressElement, shop) {
  // 다른 info-item들과 동일한 구조로 렌더링
  let html = `<div class="address-container">
        <span>${shop.address}</span>
    </div>`;

  // 상세주소 (있는 경우에만 표시)
  if (shop.detailAddress) {
    html += `<div class="address-container">
            <span>${shop.detailAddress}</span>
        </div>`;
  }

  addressElement.innerHTML = html;
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

// 지도보기 함수 - 지도 선택 모달 열기
function openMap() {
  // 주소 가져오기
  const addressContainer = document.querySelector('.address-container span');
  let destinationAddress = '';

  if (addressContainer) {
    destinationAddress = addressContainer.textContent.trim();
  } else {
    // fallback: shop 데이터에서 주소 가져오기
    const shopId = getShopIdFromUrl();
    const shop = massageShops.find((s) => s.id == shopId);
    if (shop) {
      destinationAddress = shop.address;
      if (shop.detailAddress) {
        destinationAddress += ` ${shop.detailAddress}`;
      }
    }
  }

  if (!destinationAddress) {
    alert('주소 정보를 찾을 수 없습니다.');
    return;
  }

  // 지도 선택 모달 열기
  openMapSelectModal(destinationAddress);
}

// 지도 선택 모달 열기
function openMapSelectModal(address) {
  // 기존 모달이 있으면 제거
  const existingModal = document.getElementById('mapSelectModal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 생성
  const modal = document.createElement('div');
  modal.id = 'mapSelectModal';
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 400px;">
      <div class="modal-header">
        <h2>지도 선택</h2>
        <button class="modal-close" onclick="closeMapSelectModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p style="margin-bottom: 20px; color: #666; font-size: 0.9rem;">원하는 지도 앱을 선택하세요</p>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <button class="map-select-btn" onclick="openNaverMap('${address.replace(
            /'/g,
            "\\'"
          )}')" style="background: #03C75A; color: white;">
            <i class="fas fa-map-marked-alt"></i> 네이버지도
          </button>
          <button class="map-select-btn" onclick="openKakaoMap('${address.replace(
            /'/g,
            "\\'"
          )}')" style="background: #FEE500; color: #000;">
            <i class="fas fa-map-marked-alt"></i> 카카오지도
          </button>
          <button class="map-select-btn" onclick="openTmap('${address.replace(
            /'/g,
            "\\'"
          )}')" style="background: #FF6B6B; color: white;">
            <i class="fas fa-map-marked-alt"></i> 티맵
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // 배경 클릭 시 닫기
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeMapSelectModal();
    }
  });
}

// 지도 선택 모달 닫기
function closeMapSelectModal() {
  const modal = document.getElementById('mapSelectModal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

// 네이버지도 열기
function openNaverMap(address) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://map.naver.com/v5/search/${encodedAddress}`;
  window.open(mapUrl, '_blank');
  closeMapSelectModal();
}

// 카카오지도 열기
function openKakaoMap(address) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://map.kakao.com/link/search/${encodedAddress}`;
  window.open(mapUrl, '_blank');
  closeMapSelectModal();
}

// 티맵 열기
function openTmap(address) {
  const encodedAddress = encodeURIComponent(address);
  // 티맵 앱 스킴 시도
  const tmapAppUrl = `tmap://search?name=${encodedAddress}`;
  const tmapWebUrl = `https://tmapapi.sktelecom.com/main/map.html?search=${encodedAddress}`;

  // 앱이 설치되어 있으면 앱으로, 없으면 웹으로
  const link = document.createElement('a');
  link.href = tmapAppUrl;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // 1초 후 웹으로 fallback
  setTimeout(() => {
    window.open(tmapWebUrl, '_blank');
  }, 1000);

  closeMapSelectModal();
}

// 카카오맵 URL 방식 (API 키 없이 사용)
function openKakaoMapWithURL(destinationAddress) {
  // 중복 실행 방지
  if (window.mapLoading) {
    console.log('지도 로딩 중입니다.');
    return;
  }

  try {
    window.mapLoading = true;

    // 간단한 카카오맵 검색 URL 생성
    const mapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(
      destinationAddress
    )}`;

    console.log('카카오맵 URL:', mapUrl);

    // 새 창에서 카카오맵 열기
    window.open(mapUrl, '_blank');

    // 로딩 상태 해제 (즉시)
    window.mapLoading = false;
  } catch (error) {
    console.error('지도 열기 오류:', error);
    window.mapLoading = false;
    alert('지도를 열 수 없습니다. 주소를 확인해주세요.');
  }
}

// 관리사 정보 표시
function displayStaffInfo(shop) {
  const staffInfo = document.getElementById('staffInfo');

  if (!staffInfo) return;

  let html = '';

  if (shop.staffInfo) {
    // shop.staffInfo가 있으면 예쁘게 포맷팅
    html = formatStaffInfo(shop.staffInfo);
  } else {
    // 기본 관리사 정보 생성
    const defaultStaffInfo = getDefaultStaffInfo(shop.type);
    html = `<h3>관리사 정보</h3><p>${defaultStaffInfo}</p>`;
  }

  staffInfo.innerHTML = html;
}

// 관리사 정보를 예쁘게 포맷팅
function formatStaffInfo(staffText) {
  // 기본 구조
  let html = `
        <h3>관리사 정보</h3>
        <div class="staff-intro">
            <p class="staff-main-title">전원 한국인 여 쌤들</p>
            <p class="staff-subtitle">❤ 20대 & 힐링샵 ❤</p>
            <p class="staff-certification">【 상기종목 테라피 수료 】</p>
        </div>
        <div class="staff-list">
    `;

  // 관리사 목록 파싱 및 포맷팅 (이름(나이) 패턴 일반화)
  const genericPattern = /([가-힣A-Za-z]+)\((\d{2})\)/g;
  const parsedStaff = [];
  let match;
  while ((match = genericPattern.exec(staffText)) !== null) {
    parsedStaff.push({ name: match[1], age: match[2] });
  }

  if (parsedStaff.length > 0) {
    parsedStaff.forEach(({ name, age }) => {
      html += `
                <div class="staff-item">
                    <span class="staff-heart">❤</span>
                    <span class="staff-name">${name}</span>
                    <span class="staff-age">/ ${age}</span>
                </div>
            `;
    });
  } else {
    // 기본 관리사 정보 표시
    html += `<p class="staff-default">${staffText}</p>`;
  }

  html += '</div>';
  return html;
}

// 타입별 기본 관리사 정보 반환
function getDefaultStaffInfo(type) {
  const staffInfoMap = {
    korean: '전문 한국인 관리사들이 정성스럽게 서비스해드립니다.',
    thai: '태국 현지에서 수련한 전문 관리사들이 진정한 태국 전통 마사지를 제공합니다.',
    foot: '발마사지 전문 관리사들이 경락과 혈자리를 정확히 파악하여 서비스합니다.',
    spa: '스파 테라피 전문 관리사들이 프리미엄 힐링 서비스를 제공합니다.',
    outcall:
      '출장 전문 관리사들이 고객님의 공간에서 편안하게 서비스해드립니다.',
    waxing: '왁싱 전문 관리사들이 안전하고 정확한 서비스를 제공합니다.',
  };

  return staffInfoMap[type] || '전문 관리사들이 정성스럽게 서비스해드립니다.';
}

// 서비스 목록 표시 (최적화됨)
function displayShopServices(shop) {
  const servicesList = document.getElementById('servicesList');

  const services =
    shop.services && shop.services.length > 0
      ? shop.services
      : getDefaultServices(shop.type);

  // innerHTML 사용으로 빠른 렌더링 (성능 최적화)
  if (servicesList) {
    const html = services
      .map((service) => `<div class="service-item">${service}</div>`)
      .join('');
    servicesList.innerHTML = html;
  }
}

// 코스 정보 표시 (최적화됨)
function displayShopCourses(shop) {
  const coursesList = document.getElementById('coursesList');

  // shop.courses가 있으면 사용, 없으면 기본 코스 사용
  const courses = shop.courses || getCoursesByType(shop.type);

  // innerHTML 사용으로 빠른 렌더링 (성능 최적화)
  let html = '';
  courses.forEach((category) => {
    html += `<div class="course-category">
            <div class="course-category-title">${
              category.category || category.name
            }</div>`;

    const courseItems = category.items || category.courses;
    courseItems.forEach((course) => {
      html += `<div class="course-item">
                <div class="course-header">
                    <span class="course-name">${course.name}</span>
                    <div class="course-duration">${course.duration}</div>
                    <span class="course-price">${course.price}</span>
                </div>
                <div class="course-description">${course.description}</div>
            </div>`;
    });

    html += '</div>';
  });

  if (coursesList) {
    coursesList.innerHTML = html;
  }
}

// 타입별 코스 정보 반환
function getCoursesByType(type) {
  const courseMap = {
    thai: [
      {
        name: '태국 전통 마사지',
        courses: [
          {
            name: 'A 코스',
            price: '60,000원',
            duration: '60분',
            description:
              '태국 전통 마사지 60분 - 몸의 긴장을 완전히 풀어드립니다',
          },
          {
            name: 'B 코스',
            price: '80,000원',
            duration: '90분',
            description:
              '태국 전통 마사지 90분 - 더 깊은 힐링과 휴식을 제공합니다',
          },
        ],
      },
    ],
    outcall: [
      {
        name: '출장마사지',
        courses: [
          {
            name: 'A 코스',
            price: '100,000원',
            duration: '60분',
            description: '출장마사지 60분 - 집에서 편안하게 받는 마사지',
          },
          {
            name: 'B 코스',
            price: '150,000원',
            duration: '90분',
            description: '출장마사지 90분 - 더 긴 시간의 완전한 힐링',
          },
          {
            name: 'C 코스',
            price: '200,000원',
            duration: '120분',
            description: '출장마사지 120분 - 프리미엄 홈케어 서비스',
          },
        ],
      },
    ],
    waxing: [
      {
        name: '왁싱 서비스',
        courses: [
          {
            name: 'A 코스',
            price: '50,000원',
            duration: '30분',
            description: '기본 왁싱 30분 - 깔끔한 제모 서비스',
          },
          {
            name: 'B 코스',
            price: '80,000원',
            duration: '60분',
            description: '전신 왁싱 60분 - 완전한 제모 케어',
          },
          {
            name: 'C 코스',
            price: '120,000원',
            duration: '90분',
            description: '프리미엄 왁싱 90분 - 왁싱 + 스킨케어',
          },
        ],
      },
    ],
    korean: [
      {
        name: '한국 전통 찜질방',
        courses: [
          {
            name: 'A 코스',
            price: '45,000원',
            duration: '60분',
            description: '찜질방 + 한국 전통 마사지 60분 - 전통적인 힐링 경험',
          },
          {
            name: 'B 코스',
            price: '65,000원',
            duration: '90분',
            description: '찜질방 + 한국 전통 마사지 90분 - 완전한 휴식과 힐링',
          },
        ],
      },
    ],
    foot: [
      {
        name: '발마사지 전문',
        courses: [
          {
            name: 'A 코스',
            price: '35,000원',
            duration: '60분',
            description: '발마사지 60분 - 발의 피로를 완전히 풀어드립니다',
          },
          {
            name: 'B 코스',
            price: '50,000원',
            duration: '90분',
            description: '발마사지 + 족욕 90분 - 발과 다리 전체의 힐링',
          },
        ],
      },
    ],
    spa: [
      {
        name: '스웨디시 마사지',
        courses: [
          {
            name: 'A 코스',
            price: '80,000원',
            duration: '60분',
            description:
              '스웨디시 30분 + 힐링 30분 - 근육의 긴장을 완화하고 마음을 편안하게',
          },
          {
            name: 'B 코스',
            price: '100,000원',
            duration: '90분',
            description:
              '스웨디시 60분 + 힐링 30분 - 더 깊은 근육 이완과 완전한 휴식',
          },
        ],
      },
      {
        name: '아로마 마사지',
        courses: [
          {
            name: 'A 코스',
            price: '80,000원',
            duration: '60분',
            description:
              '힐링 10분 + 아로마 50분 - 천연 에센셜 오일로 깊은 힐링',
          },
          {
            name: 'B 코스',
            price: '100,000원',
            duration: '90분',
            description: '힐링 20분 + 아로마 70분 - 프리미엄 아로마 테라피',
          },
          {
            name: 'C 코스',
            price: '150,000원',
            duration: '120분',
            description:
              '힐링 30분 + 아로마 90분 - 최고급 아로마 마사지 패키지',
          },
        ],
      },
    ],
  };

  return (
    courseMap[type] || [
      {
        name: '기본 마사지',
        courses: [
          {
            name: 'A 코스',
            price: '50,000원',
            duration: '60분',
            description: '기본 마사지 60분 - 몸과 마음의 휴식을 제공합니다',
          },
        ],
      },
    ]
  );
}

// 타입별 기본 서비스 목록
function getDefaultServices(type) {
  const serviceMap = {
    thai: ['태국 전통 마사지', '오일 마사지', '발마사지', '경락 마사지'],
    korean: ['한국 전통 마사지', '찜질방', '족욕', '경락 마사지'],
    foot: ['발마사지', '족욕', '경락 마사지', '지압 마사지'],
    spa: ['아로마테라피', '바디 마사지', '스톤 마사지', '바디 스크럽'],
  };
  return serviceMap[type] || ['마사지', '힐링 서비스', '휴식 공간'];
}

// 리뷰 목록 표시
function displayShopReviews(shop) {
  const reviewsList = document.getElementById('reviewsList');

  // shop.reviews가 있으면 사용, 없으면 샘플 리뷰 생성
  const sampleReviews = shop.reviews || generateSampleReviews(shop);

  // innerHTML 사용으로 빠른 렌더링 (성능 최적화)
  let html = '';
  sampleReviews.forEach((review) => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    html += `<div class="review-item">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">${stars}</div>
            <div class="review-text">${review.comment}</div>
        </div>`;
  });

  if (reviewsList) {
    reviewsList.innerHTML = html;
  }
}

// 샘플 리뷰 생성
function generateSampleReviews(shop) {
  const reviewTemplates = [
    {
      name: '김○○',
      rating: 5,
      date: '2024.01.15',
      comment:
        '정말 만족스러운 서비스였습니다. 직원분들도 친절하시고 시설도 깔끔해요. 다음에도 꼭 이용하고 싶어요!',
    },
    {
      name: '이○○',
      rating: 4,
      date: '2024.01.10',
      comment:
        '가격 대비 좋은 서비스를 받았습니다. 마사지 기술도 훌륭하고 분위기도 좋았어요. 추천합니다.',
    },
    {
      name: '박○○',
      rating: 5,
      date: '2024.01.08',
      comment:
        '스트레스가 많이 풀렸어요. 전문적인 마사지로 몸이 한결 가벼워진 느낌입니다. 감사합니다.',
    },
    {
      name: '최○○',
      rating: 4,
      date: '2024.01.05',
      comment:
        '예약하기 쉽고 직원분들이 친절하세요. 시설도 깔끔하고 편안한 분위기였습니다.',
    },
    {
      name: '정○○',
      rating: 5,
      date: '2024.01.02',
      comment:
        '정말 힐링되는 시간이었어요. 마사지 기술이 뛰어나고 시설도 최고입니다. 강력 추천!',
    },
  ];

  // 업체 평점에 따라 리뷰 개수 조정
  const reviewCount = Math.min(Math.floor(shop.rating), 5);
  return reviewTemplates.slice(0, reviewCount);
}

// 뒤로 가기
function goBack() {
  if (document.referrer && document.referrer.includes('index.html')) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}

// 공유하기
function shareShop() {
  const shopName = document.getElementById('shopName').textContent;
  const shopAddress = document.getElementById('shopAddress').textContent;
  const shareText = `${shopName} - ${shopAddress}`;

  if (navigator.share) {
    navigator.share({
      title: shopName,
      text: shareText,
      url: window.location.href,
    });
  } else {
    // 클립보드에 복사
    navigator.clipboard
      .writeText(shareText + '\n' + window.location.href)
      .then(() => {
        alert('업체 정보가 클립보드에 복사되었습니다.');
      });
  }
}

// 지도 모달 열기 (API 키 없이 간단한 방식)
function openMapModal() {
  // 간단한 URL 방식으로 바로 열기
  openMap();
}

// 지도 모달 창 닫기 (사용하지 않음)
function closeMapModal() {
  // API 키 없이 URL 방식 사용으로 모달 불필요
  console.log('모달 기능은 사용하지 않습니다.');
}

// 전화 걸기
function callShop() {
  const phoneNumber = document.getElementById('shopPhone').textContent;
  if (confirm(`전화를 걸까요?\n${phoneNumber}`)) {
    window.location.href = `tel:${phoneNumber}`;
  }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function () {
  loadShopDetail();
});

// 이미지 로드 실패 시 기본 이미지로 대체
document.addEventListener('DOMContentLoaded', function () {
  const shopImage = document.getElementById('shopImage');
  if (shopImage) {
    shopImage.addEventListener('error', function () {
      this.src = 'https://via.placeholder.com/400x250?text=이미지+준비중';
    });
  }
});

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

// 모달 닫기
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
  }
}

// SEO 메타태그 동적 업데이트
function updateSEOMetaTags(shop) {
  // 지역키워드 생성
  const regionKeyword = getRegionKeyword(shop.region);
  const districtKeyword = shop.district ? `${shop.district}마사지` : '';

  // 제목 업데이트
  const title = `${shop.name} - ${regionKeyword} 상세정보 | 마사지천국`;
  document.getElementById('pageTitle').textContent = title;
  document.title = title;

  // 메타 설명 업데이트
  const description = `${shop.name} ${regionKeyword} 상세정보. ${shop.price}부터, ${shop.operatingHours}. ${shop.address}. 전화예약 ${shop.phone}. 마사지천국에서 확인하세요.`;
  document
    .getElementById('pageDescription')
    .setAttribute('content', description);

  // 키워드 업데이트
  const keywords = `${regionKeyword}, ${districtKeyword}, ${shop.name}, 마사지상세, 마사지예약, 마사지가격, 마사지코스, 마사지리뷰, 마사지천국`;
  document.getElementById('pageKeywords').setAttribute('content', keywords);

  // Open Graph 메타태그 업데이트
  updateOpenGraphTags(shop, regionKeyword);
}

// 지역별 키워드 생성
function getRegionKeyword(region) {
  const regionMap = {
    서울: '서울마사지',
    부산: '부산마사지',
    대구: '대구마사지',
    인천: '인천마사지',
    광주: '광주마사지',
    대전: '대전마사지',
    울산: '울산마사지',
    세종: '세종마사지',
    경기: '경기마사지',
    강원: '강원마사지',
    충북: '충북마사지',
    충남: '충남마사지',
    전북: '전북마사지',
    전남: '전남마사지',
    경북: '경북마사지',
    경남: '경남마사지',
    제주: '제주도마사지',
  };
  return regionMap[region] || `${region}마사지`;
}

// 업체명에 지역키워드 자동 적용 함수
function generateShopNameWithRegion(originalName, region) {
  const regionKeyword = getRegionKeyword(region);

  // 이미 지역키워드가 포함되어 있는지 확인
  if (originalName.includes('마사지') || originalName.includes(region)) {
    return originalName;
  }

  // 지역키워드 + 원래 이름 형태로 생성
  return `${regionKeyword} ${originalName}`;
}

// Open Graph 메타태그 업데이트
function updateOpenGraphTags(shop, regionKeyword) {
  const title = `${shop.name} - ${regionKeyword} 상세정보 | 마사지천국`;
  const description = `${shop.name} ${regionKeyword} 상세정보. ${shop.price}부터, ${shop.operatingHours}. ${shop.address}. 전화예약 ${shop.phone}.`;

  // 기존 Open Graph 메타태그 업데이트
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );

  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDescription) ogDescription.setAttribute('content', description);
}

// 주변 업체 표시 함수
function displayNearbyShops(currentShop) {
  const nearbyShopsDistrict = document.getElementById('nearbyShopsDistrict');
  const nearbyShopsTitle = document.getElementById('nearbyShopsTitle');
  const nearbyShopsTitleClickable = document.getElementById(
    'nearbyShopsTitleClickable'
  );

  if (!nearbyShopsDistrict || !nearbyShopsTitle || !nearbyShopsTitleClickable)
    return;

  // 제목 업데이트
  nearbyShopsDistrict.textContent = currentShop.district;
  nearbyShopsTitle.textContent = '다른샵보기';

  // 제목 클릭 이벤트 추가
  // 출장마사지 업체인 경우 테마 필터를 출장마사지로 지정
  if (currentShop.type && currentShop.type.includes('출장마사지')) {
    nearbyShopsTitleClickable.onclick = () => {
      // 중앙화된 함수 사용 (script.js에 정의됨)
      if (typeof window.goToRegionPageWithTheme === 'function') {
        window.goToRegionPageWithTheme(
          currentShop.region,
          currentShop.district,
          'outcall'
        );
      } else {
        // fallback: 기존 함수 사용
        goToRegionPage(currentShop.region, currentShop.district);
      }
    };
  } else {
    // 일반 업체는 해당 지역 + 마사지 필터로 이동
    nearbyShopsTitleClickable.onclick = () => {
      // 중앙화된 함수 사용 (script.js에 정의됨)
      if (typeof window.goToRegionPageWithTheme === 'function') {
        window.goToRegionPageWithTheme(
          currentShop.region,
          currentShop.district,
          'massage'
        );
      } else {
        // fallback: 기존 함수 사용
        goToRegionPage(currentShop.region, currentShop.district);
      }
    };
  }
}

// 주변 업체 클릭 시 상세 페이지로 이동
function goToNearbyShop(shopId) {
  window.location.href = `detail.html?id=${shopId}`;
}

// 해당 지역+구로 이동
function goToRegionPage(region, district) {
  // 지역별 페이지 매핑
  const regionPages = {
    제주: 'jeju-massage.html',
    서울: 'seoul-massage.html',
    부산: 'busan-massage.html',
    대구: 'daegu-massage.html',
    인천: 'incheon-massage.html',
    광주: 'gwangju-massage.html',
    대전: 'daejeon-massage.html',
    울산: 'ulsan-massage.html',
    세종: 'sejong-massage.html',
    경기: 'gyeonggi-massage.html',
    강원: 'gangwon-massage.html',
    충북: 'chungbuk-massage.html',
    충남: 'chungnam-massage.html',
    전북: 'jeonbuk-massage.html',
    전남: 'jeonnam-massage.html',
    경북: 'gyeongbuk-massage.html',
    경남: 'gyeongnam-massage.html',
  };

  const pageUrl = regionPages[region];
  if (pageUrl) {
    // 지역 페이지로 이동하고 구 정보를 URL 파라미터로 전달
    window.location.href = `${pageUrl}?district=${encodeURIComponent(
      district
    )}`;
  } else {
    // 해당 지역 페이지가 없으면 메인 페이지로 이동
    window.location.href = 'index.html';
  }
}

// 주소에서 동 이름 추출
function extractDongFromAddress(address) {
  const match = address.match(/(\S+동)/);
  return match ? match[1] : '';
}

// 주소에서 지역 정보 추출 (구/시 + 동)
function extractLocationInfo(address) {
  const parts = address.split(' ');
  if (parts.length >= 3) {
    return `${parts[1]} ${parts[2]}`;
  }
  return address;
}

// 업체명에서 동 추출하여 새로운 이름 생성
function createShopDisplayName(shop) {
  const dong = extractDongFromAddress(shop.address);
  if (dong) {
    return `${dong} ${shop.name}`;
  }
  return shop.name;
}

// 타입 이름 반환
function getTypeName(type) {
  return '힐링샵';
}

// 모달 배경 클릭 시 닫기
window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});
