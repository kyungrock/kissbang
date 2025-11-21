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
  seoul: {
    regionName: '서울',
    regionEng: 'seoul',
    districts: {
      gangnam: '강남',
      gangdong: '강동',
      gangbuk: '강북',
      gangseo: '강서',
      gwanak: '관악',
      gwangjin: '광진',
      guro: '구로',
      geumcheon: '금천',
      nowon: '노원',
      dobong: '도봉',
      dongdaemun: '동대문',
      dongjak: '동작',
      mapo: '마포',
      seodaemun: '서대문',
      seocho: '서초',
      seongdong: '성동',
      seongbuk: '성북',
      songpa: '송파',
      yangcheon: '양천',
      yeongdeungpo: '영등포',
      yongsan: '용산',
      eunpyeong: '은평',
      jongno: '종로',
      junggu: '중구',
      jungnang: '중랑',
    },
  },
  busan: {
    regionName: '부산',
    regionEng: 'busan',
    districts: {
      junggu: '중구',
      seogu: '서구',
      donggu: '동구',
      yeongdo: '영도',
      busanjin: '부산진',
      dongnae: '동래',
      namgu: '남구',
      bukgu: '북구',
      haeundae: '해운대',
      saha: '사하',
      geumjeong: '금정',
      gangseo: '강서',
      yeonje: '연제',
      suyeong: '수영',
      sasang: '사상',
      gijang: '기장',
    },
  },
  daegu: {
    regionName: '대구',
    regionEng: 'daegu',
    districts: {
      junggu: '중구',
      donggu: '동구',
      seogu: '서구',
      namgu: '남구',
      bukgu: '북구',
      suseong: '수성구',
      dalseo: '달서구',
      dalsung: '달성군',
    },
  },
  incheon: {
    regionName: '인천',
    regionEng: 'incheon',
    districts: {
      junggu: '중구',
      donggu: '동구',
      michuhol: '미추홀',
      yeonsu: '연수',
      namdong: '남동',
      bupyeong: '부평',
      gyeyang: '계양',
      seogu: '서구',
      ganghwa: '강화',
      ongjin: '옹진',
    },
  },
  gwangju: {
    regionName: '광주',
    regionEng: 'gwangju',
    districts: {
      donggu: '동구',
      seogu: '서구',
      namgu: '남구',
      bukgu: '북구',
      gwangsan: '광산',
    },
  },
  daejeon: {
    regionName: '대전',
    regionEng: 'daejeon',
    districts: {
      donggu: '동구',
      junggu: '중구',
      seogu: '서구',
      yuseong: '유성',
      daedeok: '대덕',
    },
  },
  sejong: {
    regionName: '세종',
    regionEng: 'sejong',
    districts: {
      sejong: '세종특별자치시',
    },
  },
  gyeonggi: {
    regionName: '경기',
    regionEng: 'gyeonggi',
    districts: {
      suwon: '수원',
      seongnam: '성남',
      uijeongbu: '의정부',
      anyang: '안양',
      bucheon: '부천',
      gwangmyeong: '광명',
      pyeongtaek: '평택',
      gwacheon: '과천',
      osan: '오산',
      siheung: '시흥',
      gunpo: '군포',
      uiwang: '의왕',
      hanam: '하남',
      yongin: '용인',
      paju: '파주',
      icheon: '이천',
      anseong: '안성',
      gimpo: '김포',
      hwaseong: '화성',
      gwangju: '광주',
      yeoju: '여주',
      yangpyeong: '양평',
      goyang: '고양',
      dongducheon: '동두천',
      gapyeong: '가평',
      yeoncheon: '연천',
    },
  },
  gangwon: {
    regionName: '강원',
    regionEng: 'gangwon',
    districts: {
      chuncheon: '춘천',
      wonju: '원주',
      gangneung: '강릉',
      donghae: '동해',
      taebaek: '태백',
      sokcho: '속초',
      samcheok: '삼척',
      hongcheon: '홍천',
      hoengseong: '횡성',
      yeongwol: '영월',
      pyeongchang: '평창',
      jeongseon: '정선',
      cheorwon: '철원',
      hwacheon: '화천',
      yanggu: '양구',
      inje: '인제',
      goseong: '고성',
      yangyang: '양양',
    },
  },
  chungbuk: {
    regionName: '충북',
    regionEng: 'chungbuk',
    districts: {
      cheongju: '청주',
      chungju: '충주',
      jecheon: '제천',
      boeun: '보은',
      okcheon: '옥천',
      yeongdong: '영동',
      jeungpyeong: '증평',
      jincheon: '진천',
      goesan: '괴산',
      eumseong: '음성',
      danyang: '단양',
    },
  },
  chungnam: {
    regionName: '충남',
    regionEng: 'chungnam',
    districts: {
      cheonan: '천안',
      gongju: '공주',
      boryeong: '보령',
      asan: '아산',
      seosan: '서산',
      nonsan: '논산',
      gyeryong: '계룡',
      dangjin: '당진',
      geumsan: '금산',
      buyeo: '부여',
      seocheon: '서천',
      cheongyang: '청양',
      hongseong: '홍성',
      yesan: '예산',
      taean: '태안',
    },
  },
  jeonbuk: {
    regionName: '전북',
    regionEng: 'jeonbuk',
    districts: {
      jeonju: '전주',
      gunsan: '군산',
      iksan: '익산',
      jeongeup: '정읍',
      namwon: '남원',
      gimje: '김제',
      wanju: '완주',
      jinan: '진안',
      muju: '무주',
      jangsu: '장수',
      imsil: '임실',
      sunchang: '순창',
      gochang: '고창',
      buan: '부안',
    },
  },
  jeonnam: {
    regionName: '전남',
    regionEng: 'jeonnam',
    districts: {
      mokpo: '목포',
      yeosu: '여수',
      suncheon: '순천',
      naju: '나주',
      gwangyang: '광양',
      damyang: '담양',
      gokseong: '곡성',
      gurye: '구례',
      goheung: '고흥',
      boseong: '보성',
      hwasun: '화순',
      jangheung: '장흥',
      gangjin: '강진',
      haenam: '해남',
      yeongam: '영암',
      muan: '무안',
      hampyeong: '함평',
      yeonggwang: '영광',
      jangseong: '장성',
      wando: '완도',
      jindo: '진도',
      sinan: '신안',
    },
  },
  gyeongbuk: {
    regionName: '경북',
    regionEng: 'gyeongbuk',
    districts: {
      pohang: '포항',
      gyeongju: '경주',
      gimcheon: '김천',
      andong: '안동',
      gumi: '구미',
      yeongju: '영주',
      yeongcheon: '영천',
      sangju: '상주',
      mungyeong: '문경',
      gyeongsan: '경산',
      gunwi: '군위',
      uiseong: '의성',
      cheongsong: '청송',
      yeongyang: '영양',
      yeongdeok: '영덕',
      cheongdo: '청도',
      goryeong: '고령',
      seongju: '성주',
      chilgok: '칠곡',
      yecheon: '예천',
      bonghwa: '봉화',
      uljin: '울진',
      ulleung: '울릉',
    },
  },
  gyeongnam: {
    regionName: '경남',
    regionEng: 'gyeongnam',
    districts: {
      changwon: '창원',
      jinju: '진주',
      tongyeong: '통영',
      sacheon: '사천',
      gimhae: '김해',
      miryang: '밀양',
      geoje: '거제',
      yangsan: '양산',
      uiryeong: '의령',
      haman: '함안',
      changnyeong: '창녕',
      goseong: '고성',
      namhae: '남해',
      hadong: '하동',
      sancheong: '산청',
      hamyang: '함양',
      geochang: '거창',
      hapcheon: '합천',
    },
  },
};

// districtData는 window.districtMap에서 자동 생성 (중앙화)
// window.districtMap을 기반으로 districtData를 동적으로 생성하는 함수
function getDistrictData() {
  const districtData = {};
  const districtMap = window.districtMap || {};

  for (const [key, value] of Object.entries(districtMap)) {
    if (value.regionName && value.districts) {
      // districts 객체의 값들을 배열로 변환
      districtData[value.regionName] = Object.values(value.districts);
    }
  }

  return districtData;
}

// districtData를 동적으로 생성 (중앙화된 window.districtMap 사용)
const districtData = getDistrictData();

// shop-card-data.js 파일에서 카드 데이터 로드 함수
async function loadShopCardsFromDataFile() {
  console.log('loadShopCardsFromDataFile 시작');

  try {
    // shop-card-data.js 파일이 이미 로드되어 있는지 확인
    if (window.shopCardData && Array.isArray(window.shopCardData)) {
      console.log(
        `✅ shop-card-data.js에서 ${window.shopCardData.length}개 업체 로드됨`
      );
      return window.shopCardData;
    }

    // shop-card-data.js 파일이 아직 로드되지 않은 경우 동적으로 로드
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'shop-card-data.js';
      script.async = true;
      script.onload = () => {
        if (window.shopCardData && Array.isArray(window.shopCardData)) {
          console.log(
            `✅ shop-card-data.js 동적 로드 완료, ${window.shopCardData.length}개 업체`
          );
          resolve(window.shopCardData);
        } else {
          console.warn(
            '⚠️ shop-card-data.js는 로드되었지만 데이터가 없습니다.'
          );
          resolve([]);
        }
      };
      script.onerror = () => {
        console.error('❌ shop-card-data.js 파일을 로드할 수 없습니다.');
        resolve([]);
      };
      document.head.appendChild(script);
    });
  } catch (error) {
    console.error('❌ shop-card-data.js 로드 중 오류:', error);
    return [];
  }
}

// 현재 페이지에서 카드 데이터 추출 (업체 상세 페이지에서)
function extractShopCardFromCurrentPage() {
  const shopDataScript = document.getElementById('shop-card-data');
  if (shopDataScript) {
    try {
      return JSON.parse(shopDataScript.textContent);
    } catch (e) {
      console.warn('Failed to parse shop card data from current page:', e);
    }
  }
  return null;
}

// 현재 페이지의 파일명 추출 (업체 페이지에서 사용)
function getCurrentPageFileName() {
  const currentPath = window.location.pathname;
  const fileName = currentPath.split('/').pop();

  // "company-" 접두사가 이미 있으면 그대로, 없으면 추가
  if (fileName && !fileName.startsWith('company-')) {
    return `company-${fileName}`;
  }
  return fileName || '';
}

// 마사지 업체 데이터
// 참고: 제주 관련 업체(id: 1, 2, 3, 4)는 각 HTML 파일에서 자동으로 로드됩니다.
let massageShops = [
  // 제주 관련 업체(id: 1, 2, 3, 4)는 HTML 파일에서 자동 로드되므로 여기서 제거됨
  // 다른 지역 업체 데이터는 아래에 추가 가능
  // 기존 제주 업체 데이터는 initializeShopData() 함수에서 자동으로 제거됩니다.
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
                                  shop.country && shop.country.includes('japan')
                                    ? `
                                <img src="https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/일본.jpg" 
                                     alt="일본 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇯🇵'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                `
                                    : ''
                                }
                                ${
                                  shop.country && shop.country.includes('china')
                                    ? `
                                <img src="https://xn--z69au6wh5golr.com/wp-content/uploads/2025/05/중국.jpg" 
                                     alt="중국 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇨🇳'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
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

// 타입 이름 반환 (업체 데이터 기반 자동 처리)
function getTypeName(shop) {
  // shop-card-data에서 showHealingShop 필드가 false로 설정된 경우 "힐링샵" 표시하지 않음
  if (shop.showHealingShop === false) {
    return '';
  }
  // shop-card-data에서 hideHealingShop 필드가 true로 설정된 경우도 "힐링샵" 표시하지 않음
  if (shop.hideHealingShop === true) {
    return '';
  }
  // shop-card-data에서 typeLabel이 명시적으로 설정된 경우 사용
  if (shop.typeLabel !== undefined && shop.typeLabel !== null) {
    return shop.typeLabel || '';
  }
  // 기본값: "힐링샵" 표시
  return '힐링샵';
}

// 테마별 필터링 함수
function filterByType(selectedType) {
  // 모든 업체를 가져와서 선택된 테마와 일치하는 것만 필터링
  let filteredShops = massageShops;

  if (selectedType && selectedType !== 'all') {
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
  // shop-card-data.js에서 greeting 필드가 명시적으로 설정된 경우 우선 사용
  if (shop.greeting) {
    return shop.greeting;
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
  // shop-card-data.js 또는 massageShops 배열에서 해당 업체 찾기
  let shop = null;

  // 먼저 window.shopCardData에서 찾기
  if (window.shopCardData && Array.isArray(window.shopCardData)) {
    shop = window.shopCardData.find((s) => s.id === shopId);
  }

  // 찾지 못한 경우 massageShops 배열에서 찾기
  if (!shop && massageShops && Array.isArray(massageShops)) {
    shop = massageShops.find((s) => s.id === shopId);
  }

  // file 필드 처리: "company-" 접두사 자동 추가
  let fileName = '';
  if (shop && shop.file) {
    // file 필드가 이미 "company-"로 시작하는지 확인
    fileName = shop.file.startsWith('company-')
      ? shop.file
      : `company-${shop.file}`;
  } else {
    // file 필드가 없으면 기본값 사용 (company- 접두사 포함)
    fileName = `company-shop-${shopId}.html`;
  }

  window.location.href = fileName;
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

    // "힐링샵"끼리는 기존 순서 유지
    return 0;
  });
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
// HTML 파일에서 업체 데이터 자동 로드 및 병합
async function initializeShopData() {
  console.log('initializeShopData 시작');
  try {
    const loadedShops = await loadShopCardsFromDataFile();
    console.log(
      'loadShopCardsFromDataFile 완료, 로드된 업체 수:',
      loadedShops.length
    );

    // shop-card-data.js에서 로드한 업체가 있으면 기존 배열과 병합
    if (loadedShops.length > 0) {
      // 기존 배열에서 ID가 중복되는 항목 제거 (shop-card-data.js가 우선)
      const loadedShopIds = new Set(loadedShops.map((shop) => shop.id));
      // 기존 배열에서 중복되는 업체 제거하고 shop-card-data.js에서 로드한 데이터로 대체
      massageShops = [
        ...loadedShops,
        ...massageShops.filter((shop) => !loadedShopIds.has(shop.id)),
      ];
      console.log(
        `✅ shop-card-data.js에서 ${loadedShops.length}개 업체 로드 완료`
      );
      console.log('최종 massageShops 배열:', massageShops);
    } else {
      console.warn('⚠️ shop-card-data.js에서 업체를 로드하지 못했습니다.');
    }
  } catch (error) {
    console.error(
      '❌ shop-card-data.js에서 업체 데이터 로드 실패 (기존 배열 사용):',
      error
    );
  }
  console.log('initializeShopData 완료, 총 업체 수:', massageShops.length);
}

async function initializeApp() {
  console.log('initializeApp 시작');
  initializeRegionOptions();
  console.log('initializeRegionOptions 완료');

  // HTML 파일에서 업체 데이터 자동 로드 (await로 완료 대기)
  await initializeShopData();
  console.log('initializeShopData 완료');

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

  // 필터링된 결과 표시 (데이터 로드 완료 후)
  console.log(
    'displayFilteredResults 호출 전, massageShops 수:',
    massageShops.length
  );
  if (typeof displayFilteredResults === 'function') {
    displayFilteredResults();
  } else {
    console.error('displayFilteredResults 함수를 찾을 수 없습니다!');
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
      title = `${currentDistrict} ${themeName}`;
    } else if (currentRegion) {
      title = `${currentRegion} ${themeName}`;
    } else {
      title = `${themeName}`;
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
        title = `${currentDistrict} ${filterName}`;
      } else if (currentRegion) {
        title = `${currentRegion} ${filterName}`;
      } else {
        title = `${filterName}`;
      }
    } else {
      // 일반 마사지: 구가 있으면 구만 표시, 없으면 지역 표시
      if (currentDistrict) {
        title = `${currentDistrict} ${filterName}`;
      } else if (currentRegion) {
        title = `${currentRegion} ${filterName}`;
      } else {
        title = `${filterName}`;
      }
    }
  } else {
    // 전체인 경우
    const isMainPage =
      window.location.pathname.includes('index.html') ||
      window.location.pathname === '/' ||
      window.location.pathname === '';

    if (currentDistrict) {
      title = `${currentDistrict} 마사지사이트`;
    } else if (currentRegion) {
      title = `${currentRegion} 마사지사이트`;
    } else {
      title = isMainPage ? '전체 마사지사이트' : '전체 마사지';
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
    searchIcon.style.touchAction = 'manipulation';

    // 검색 실행 함수
    function executeSearch() {
      // 입력 필드 포커스 제거 (가상 키보드 숨김)
      if (document.activeElement === searchInput) {
        searchInput.blur();
      }

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
    }

    // 클릭 이벤트 리스너 (데스크톱)
    searchIcon.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // 입력 필드 포커스 제거 (가상 키보드 숨김)
      searchInput.blur();
      executeSearch();
    });

    // 터치 시작 감지 (모바일)
    let touchStartTime = 0;
    let touchMoved = false;

    searchIcon.addEventListener(
      'touchstart',
      function (e) {
        touchStartTime = Date.now();
        touchMoved = false;
        // 터치 시작 시 입력 필드 포커스 제거 (가상 키보드 방지)
        searchInput.blur();
      },
      { passive: true }
    );

    searchIcon.addEventListener(
      'touchmove',
      function (e) {
        touchMoved = true;
      },
      { passive: true }
    );

    // 터치 종료 이벤트 (모바일 지원)
    searchIcon.addEventListener(
      'touchend',
      function (e) {
        // 터치가 움직이지 않았고, 짧은 시간 내에 끝났으면 클릭으로 간주
        if (!touchMoved && Date.now() - touchStartTime < 300) {
          e.preventDefault();
          e.stopPropagation();
          // 입력 필드 포커스 제거 (가상 키보드 숨김)
          searchInput.blur();
          // 약간의 지연 후 검색 실행 (키보드가 완전히 사라진 후)
          setTimeout(function () {
            executeSearch();
          }, 100);
        }
      },
      { passive: false }
    );

    // 마우스 다운 이벤트 (데스크톱)
    searchIcon.addEventListener('mousedown', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
}
