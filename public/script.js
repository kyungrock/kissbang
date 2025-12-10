// 중앙화된 지역 매핑 데이터 (전역 변수)
// 모든 지역 정보는 여기서만 관리합니다
window.districtMap = {
  jeju: {
    regionName: '제주',
    regionEng: 'jeju',
    districts: {
      si: {
        districtsname: '제주시',
        districtseng: 'jeju-si',
        dongStations: {
          'geonip-dong': '건입동',
          'nohyeong-dong': '노형동',
          'dodu-dong': '도두동',
          'bonggae-dong': '봉개동',
          'samdo1-dong': '삼도1동',
          'samdo2-dong': '삼도2동',
          'samyang-dong': '삼양동',
          'ara-dong': '아라동',
          'yeon-dong': '연동',
          'ora-dong': '오라동',
          'oedo-dong': '외도동',
          'yongdam1-dong': '용담1동',
          'yongdam2-dong': '용담2동',
          'yongdam3-dong': '용담3동',
          'ido1-dong': '이도1동',
          'ido2-dong': '이도2동',
          'ildo1-dong': '일도1동',
          'ildo2-dong': '일도2동',
          'jocheon-eup': '조천읍',
          'chuja-myeon': '추자면',
          'hangyeong-myeon': '한경면',
          'hallim-eup': '한림읍',
          'hwabuk-dong': '화북동',
          'hoecheon-dong': '회천동',
        },
      },
      seogwipo: {
        districtsname: '서귀포',
        districtseng: 'jeju-seogwipo',
        dongStations: {
          'daejeong-eup': '대정읍',
          'donghong-dong': '동홍동',
          'seohong-dong': '서홍동',
          'seongsan-eup': '성산읍',
          'andeok-myeon': '안덕면',
          'yeongcheon-dong': '영천동',
          'jungmun-dong': '중문동',
          'jungang-dong': '중앙동',
          'pyoseon-myeon': '표선면',
          'hyodon-dong': '효돈동',
        },
      },
    },
  },
  ulsan: {
    regionName: '울산',
    regionEng: 'ulsan',
    districts: {
      junggu: {
        districtsname: '중구',
        districtseng: 'ulsan-junggu',
        dongStations: {
          'seongnam-dong': '성남동',
          'haksung-dong': '학성동',
          'ujeong-dong': '우정동',
          'daehyeon-dong': '대현동',
          'bangeojin-dong': '방어진동',
          'jwa-dong': '좌동',
          'jungang-dong': '중앙동',
          'namsan-dong': '남산동',
          'dal-dong': '달동',
          'muryong-dong': '무룡동',
          'sangnam-dong': '상남동',
          'seongnam1-dong': '성남1동',
          'seongnam2-dong': '성남2동',
          'okpo-dong': '옥포동',
          'taehwa-dong': '태화동',
        },
      },
      namgu: {
        districtsname: '남구',
        districtseng: 'ulsan-namgu',
        dongStations: {
          'sinjeong-dong': '신정동',
          'ok-dong': '옥동',
          'dal-dong': '달동',
          'samnam-dong': '삼남동',
          'munhwa-dong': '문현동',
          'samsan-dong': '삼산동',
          'yongjeong-dong': '용정동',
          'sangbuk-dong': '상북동',
          'jungang-dong': '중앙동',
          'hwasan-dong': '화산동',
          'yeongnam-dong': '영남동',
          'unam-dong': '운암동',
        },
      },
      donggu: {
        districtsname: '동구',
        districtseng: 'ulsan-donggu',
        dongStations: {
          'jeonha-dong': '전하동',
          'ilsan-dong': '일산동',
          'hwajeong-dong': '화정동',
          'bangojin-dong': '방어진동',
          'dongbu-dong': '동부동',
          'nam-gu-dong': '남구동',
          'seobu-dong': '서부동',
          'jungang-dong': '중앙동',
          'hyomun-dong': '효문동',
          'sangbuk-dong': '상북동',
        },
      },
      bukgu: {
        districtsname: '북구',
        districtseng: 'ulsan-bukgu',
        dongStations: {
          'jinjang-dong': '진장동',
          'nongso-dong': '농소동',
          'songjeong-dong': '송정동',
          'yeompo-dong': '염포동',
          'yangjeong-dong': '양정동',
          'gonghang-dong': '공항동',
          'hwasan-dong': '화산동',
          'sangbuk-dong': '상북동',
          'jungang-dong': '중앙동',
          'dongbu-dong': '동부동',
          'seobu-dong': '서부동',
        },
      },
      ulju: {
        districtsname: '울주',
        districtseng: 'ulsan-ulju',
        dongStations: {
          'beomseo-eup': '범서읍',
          'eonyang-eup': '언양읍',
          'onyang-eup': '온양읍',
          'unjang-eup': '운장읍',
          'jangan-eup': '장안읍',
          'sangbuk-myeon': '상북면',
          'samnam-myeon': '삼남면',
          'seosaeng-myeon': '서생면',
          'wondong-myeon': '원동면',
          'jungdong-myeon': '중동면',
        },
      },
    },
  },
  // 추가 지역들 (필요시 확장)
  seoul: {
    regionName: '서울',
    regionEng: 'seoul',
    districts: {
      gangnam: {
        districtsname: '강남',
        districtseng: 'seoul-gangnam',
        dongStations: {
          'yeoksam-dong': '역삼동',
          'nonhyeon-dong': '논현동',
          'sinsa-dong': '신사동',
          'apgujeong-dong': '압구정동',
          'cheongdam-dong': '청담동',
          'samseong-dong': '삼성동',
          'daechi-dong': '대치동',
          'dokok-dong': '도곡동',
          'gaepo-dong': '개포동',
          'ilwon-dong': '일원동',
          'suseo-dong': '수서동',
          'segyeok-dong': '세곡동',
          'gangnam-station': '강남역',
          'yeoksam-station': '역삼역',
          'seolleung-station': '선릉역',
          'samseong-station': '삼성역',
          'sports-complex-station': '종합운동장역',
          'olympic-park-station': '올림픽공원역',
          'gaepo-station': '개포동역',
          'daechi-station': '대치역',
          'dokok-station': '도곡역',
          'hanti-station': '한티역',
          'guryong-station': '구룡역',
        },
      },
      gangdong: {
        districtsname: '강동',
        districtseng: 'seoul-gangdong',
        dongStations: {
          'gildong-dong': '길동',
          'gwangjang-dong': '광장동',
          'gubeundong-dong': '구반동',
          'godeok-dong': '고덕동',
          'dunchon-dong': '둔촌동',
          'myeongil-dong': '명일동',
          'sangil-dong': '상일동',
          'seongnae-dong': '성내동',
          'amseo-dong': '암서동',
          'cheonho-dong': '천호동',
          'pungnap-dong': '풍납동',
          'gildong-station': '길동역',
          'gwangjang-station': '광장역',
          'godeok-station': '고덕역',
          'dunchon-station': '둔촌동역',
          'myeongil-station': '명일역',
          'sangil-station': '상일동역',
          'cheonho-station': '천호역',
          'pungnap-station': '풍납토성역',
        },
      },
      gangbuk: {
        districtsname: '강북',
        districtseng: 'seoul-gangbuk',
        dongStations: {
          'miari-dong': '미아동',
          'suyu-dong': '수유동',
          'beon-dong': '번동',
          'samseon-dong': '삼선동',
          'sungsan-dong': '성산동',
          'ui-dong': '우이동',
          'inheon-dong': '인헌동',
          'miari-station': '미아역',
          'suyu-station': '수유역',
          'beon-station': '번동역',
          'samsong-station': '삼송역',
        },
      },
      gangseo: {
        districtsname: '강서',
        districtseng: 'seoul-gangseo',
        dongStations: {
          'gayang-dong': '가양동',
          'gonghang-dong': '공항동',
          'gwahae-dong': '과해동',
          'deungchon-dong': '등촌동',
          'magok-dong': '마곡동',
          'banghwa-dong': '방화동',
          'songjeong-dong': '송정동',
          'ujung-dong': '우장동',
          'hwagok-dong': '화곡동',
          'gayang-station': '가양역',
          'gonghang-station': '김포공항역',
          'magok-station': '마곡나루역',
          'banghwa-station': '방화역',
          'songjeong-station': '송정역',
          'hwagok-station': '화곡역',
        },
      },
      gwanak: {
        districtsname: '관악',
        districtseng: 'seoul-gwanak',
        dongStations: {
          'nakseongdae-dong': '낙성대동',
          'nangok-dong': '난곡동',
          'daehak-dong': '대학동',
          'miseong-dong': '미성동',
          'bongcheon-dong': '봉천동',
          'sangdo-dong': '상도동',
          'seorim-dong': '서림동',
          'seowon-dong': '서원동',
          'sinlim-dong': '신림동',
          'euncheon-dong': '은천동',
          'inheon-dong': '인헌동',
          'jeongneung-dong': '정릉동',
          'cheongnyangni-station': '청량리역',
          'nakseongdae-station': '낙성대역',
          'seoul-nat-univ-station': '서울대입구역',
          'bongcheon-station': '봉천역',
          'sangdo-station': '상도역',
          'sinlim-station': '신림역',
        },
      },
      gwangjin: {
        districtsname: '광진',
        districtseng: 'seoul-gwangjin',
        dongStations: {
          'gwangjang-dong': '광장동',
          'gujung-dong': '구의동',
          'gunja-dong': '군자동',
          'neung-dong': '능동',
          'jayang-dong': '자양동',
          'hwayang-dong': '화양동',
          'gwangjang-station': '광장역',
          'gujung-station': '구의역',
          'gunja-station': '군자역',
          'neung-station': '어린이대공원역',
          'jayang-station': '자양역',
          'hwayang-station': '화양역',
        },
      },
      guro: {
        districtsname: '구로',
        districtseng: 'seoul-guro',
        dongStations: {
          'guro-dong': '구로동',
          'gaebong-dong': '개봉동',
          'gasan-dong': '가산동',
          'oryu-dong': '오류동',
          'cheolsan-dong': '철산동',
          'guro-station': '구로역',
          'gaebong-station': '개봉역',
          'gasan-digital-station': '가산디지털단지역',
          'oryu-station': '오류동역',
          'cheolsan-station': '철산역',
        },
      },
      geumcheon: {
        districtsname: '금천',
        districtseng: 'seoul-geumcheon',
        dongStations: {
          'gaebong-dong': '개봉동',
          'gasan-dong': '가산동',
          'siheung-dong': '시흥동',
          'yeongdeung-dong': '영등동',
          'gasan-digital-station': '가산디지털단지역',
          'siheung-station': '시흥역',
          'geumcheon-gu-office-station': '금천구청역',
        },
      },
      nowon: {
        districtsname: '노원',
        districtseng: 'seoul-nowon',
        dongStations: {
          'gongneung-dong': '공릉동',
          'danggogae-dong': '당고개동',
          'dangjung-dong': '당중동',
          'maebong-dong': '매봉동',
          'sanggye-dong': '상계동',
          'wolgok-dong': '월계동',
          'junggye-dong': '중계동',
          'haengdang-dong': '행당동',
          'gongneung-station': '공릉역',
          'danggogae-station': '당고개역',
          'sanggye-station': '상계역',
          'wolgok-station': '월계역',
          'junggye-station': '중계역',
        },
      },
      dobong: {
        districtsname: '도봉',
        districtseng: 'seoul-dobong',
        dongStations: {
          'banghak-dong': '방학동',
          'sanggye-dong': '상계동',
          'dobong-dong': '도봉동',
          'chang-dong': '창동',
          'banghak-station': '방학역',
          'dobong-station': '도봉역',
          'chang-dong-station': '창동역',
        },
      },
      dongdaemun: {
        districtsname: '동대문',
        districtseng: 'seoul-dongdaemun',
        dongStations: {
          'jegi-dong': '제기동',
          'jeonnong-dong': '전농동',
          'dapsimni-dong': '답십리동',
          'yongdu-dong': '용두동',
          'imun-dong': '이문동',
          'hoegi-dong': '회기동',
          'jegi-station': '제기동역',
          'jeonnong-station': '전농역',
          'dapsimni-station': '답십리역',
          'yongdu-station': '용두역',
          'imun-station': '이문역',
          'hoegi-station': '회기역',
        },
      },
      dongjak: {
        districtsname: '동작',
        districtseng: 'seoul-dongjak',
        dongStations: {
          'noryangjin-dong': '노량진동',
          'sangdo-dong': '상도동',
          'sadang-dong': '사당동',
          'heukseok-dong': '흑석동',
          'noryangjin-station': '노량진역',
          'sangdo-station': '상도역',
          'sadang-station': '사당역',
          'heukseok-station': '흑석역',
        },
      },
      mapo: {
        districtsname: '마포',
        districtseng: 'seoul-mapo',
        dongStations: {
          'gongdeok-dong': '공덕동',
          'dohwa-dong': '도화동',
          'mangwon-dong': '망원동',
          'seogyo-dong': '서교동',
          'seongmisan-dong': '성미산동',
          'ahyeon-dong': '아현동',
          'yeonnam-dong': '연남동',
          'yongsan-dong': '용산동',
          'hapjeong-dong': '합정동',
          'hongdae-dong': '홍대동',
          'gongdeok-station': '공덕역',
          'mangwon-station': '망원역',
          'seogyo-station': '서강대역',
          'ahyeon-station': '아현역',
          'hapjeong-station': '합정역',
          'hongik-univ-station': '홍대입구역',
        },
      },
      seodaemun: {
        districtsname: '서대문',
        districtseng: 'seoul-seodaemun',
        dongStations: {
          'gongdeok-dong': '공덕동',
          'dohwa-dong': '도화동',
          'mangwon-dong': '망원동',
          'seogyo-dong': '서교동',
          'ahyeon-dong': '아현동',
          'yeonhui-dong': '연희동',
          'euljiro-dong': '을지로동',
          'chungjeongno-dong': '충정로동',
          'hongje-dong': '홍제동',
          'gongdeok-station': '공덕역',
          'ahyeon-station': '아현역',
          'chungjeongno-station': '충정로역',
          'hongje-station': '홍제역',
        },
      },
      seocho: {
        districtsname: '서초',
        districtseng: 'seoul-seocho',
        dongStations: {
          'bangbae-dong': '방배동',
          'seorae-dong': '서래동',
          'seocho-dong': '서초동',
          'yangjae-dong': '양재동',
          'yeoksam-dong': '역삼동',
          'jamwon-dong': '잠원동',
          'bangbae-station': '방배역',
          'seocho-station': '서초역',
          'yangjae-station': '양재역',
          'yeoksam-station': '역삼역',
          'jamwon-station': '잠원역',
        },
      },
      seongdong: {
        districtsname: '성동',
        districtseng: 'seoul-seongdong',
        dongStations: {
          'wangsimni-dong': '왕십리동',
          'seongsu-dong': '성수동',
          'sangwangsimni-dong': '상왕십리동',
          'haengdang-dong': '행당동',
          'hongik-dong': '홍익동',
          'wangsimni-station': '왕십리역',
          'seongsu-station': '성수역',
          'haengdang-station': '행당역',
        },
      },
      seongbuk: {
        districtsname: '성북',
        districtseng: 'seoul-seongbuk',
        dongStations: {
          'ansan-dong': '안암동',
          'jeongneung-dong': '정릉동',
          'samseon-dong': '삼선동',
          'seongbuk-dong': '성북동',
          'sungsan-dong': '성산동',
          'ansan-station': '안암역',
          'jeongneung-station': '정릉역',
          'seongbuk-station': '성신여대입구역',
        },
      },
      songpa: {
        districtsname: '송파',
        districtseng: 'seoul-songpa',
        dongStations: {
          'bang-i-dong': '방이동',
          'gasan-dong': '가산동',
          'geoyeo-dong': '거여동',
          'macheon-dong': '마천동',
          'munjeong-dong': '문정동',
          'sangok-dong': '상옥동',
          'seokchon-dong': '석촌동',
          'songpa-dong': '송파동',
          'jangji-dong': '장지동',
          'jamsil-dong': '잠실동',
          'bang-i-station': '방이역',
          'geoyeo-station': '거여역',
          'macheon-station': '마천역',
          'munjeong-station': '문정역',
          'seokchon-station': '석촌역',
          'songpa-station': '송파역',
          'jangji-station': '장지역',
          'jamsil-station': '잠실역',
          'sports-complex-station': '종합운동장역',
        },
      },
      yangcheon: {
        districtsname: '양천',
        districtseng: 'seoul-yangcheon',
        dongStations: {
          'mok-dong': '목동',
          'sinjeong-dong': '신정동',
          'yeomchang-dong': '염창동',
          'mok-dong-station': '목동역',
          'sinjeong-station': '신정역',
          'yeomchang-station': '염창역',
        },
      },
      yeongdeungpo: {
        districtsname: '영등포',
        districtseng: 'seoul-yeongdeungpo',
        dongStations: {
          'yeongdeungpo-dong': '영등포동',
          'yeouido-dong': '여의도동',
          'dangsan-dong': '당산동',
          'mullae-dong': '문래동',
          'singil-dong': '신길동',
          'yeongdeungpo-station': '영등포역',
          'yeouido-station': '여의도역',
          'dangsan-station': '당산역',
          'mullae-station': '문래역',
          'singil-station': '신길역',
        },
      },
      yongsan: {
        districtsname: '용산',
        districtseng: 'seoul-yongsan',
        dongStations: {
          'yongsan-dong': '용산동',
          'hannam-dong': '한남동',
          'itawon-dong': '이태원동',
          'seobinggo-dong': '서빙고동',
          'wonhyoro-dong': '원효로동',
          'yongsan-station': '용산역',
          'hannam-station': '한남역',
          'itawon-station': '이태원역',
          'seobinggo-station': '서빙고역',
          'wonhyoro-station': '원효로역',
        },
      },
      eunpyeong: {
        districtsname: '은평',
        districtseng: 'seoul-eunpyeong',
        dongStations: {
          'bulgwang-dong': '불광동',
          'eungam-dong': '응암동',
          'jinhwa-dong': '진흥동',
          'bulgwang-station': '불광역',
          'eungam-station': '응암역',
          'jinhwa-station': '진흥역',
        },
      },
      jongno: {
        districtsname: '종로',
        districtseng: 'seoul-jongno',
        dongStations: {
          'gwanghwamun-dong': '광화문동',
          'jongno-dong': '종로동',
          'myeong-dong': '명동',
          'samcheong-dong': '삼청동',
          'sejongno-dong': '세종로동',
          'anguk-dong': '안국동',
          'insa-dong': '인사동',
          'jonggak-dong': '종각동',
          'gwanghwamun-station': '광화문역',
          'jongno-3ga-station': '종로3가역',
          'jongno-5ga-station': '종로5가역',
          'myeong-dong-station': '명동역',
          'anguk-station': '안국역',
          'jonggak-station': '종각역',
        },
      },
      junggu: {
        districtsname: '중구',
        districtseng: 'seoul-junggu',
        dongStations: {
          'myeong-dong': '명동',
          'euljiro-dong': '을지로동',
          'jung-dong': '중동',
          'hwanghak-dong': '황학동',
          'pil-dong': '필동',
          'myeong-dong-station': '명동역',
          'euljiro-1ga-station': '을지로입구역',
          'euljiro-3ga-station': '을지로3가역',
          'euljiro-4ga-station': '을지로4가역',
          'dongdaemun-station': '동대문역',
          'hwanghak-station': '황학역',
        },
      },
      jungnang: {
        districtsname: '중랑',
        districtseng: 'seoul-jungnang',
        dongStations: {
          'mangu-dong': '면목동',
          'sangbong-dong': '상봉동',
          'jungnang-dong': '중랑동',
          'mangu-station': '면목역',
          'sangbong-station': '상봉역',
          'jungnang-station': '중랑역',
        },
      },
    },
  },
  busan: {
    regionName: '부산',
    regionEng: 'busan',
    districts: {
      junggu: {
        districtsname: '중구',
        districtseng: 'busan-junggu',
        dongStations: {
          'jungang-dong': '중앙동',
          'donggwang-dong': '동광동',
          'daesin-dong': '대신동',
          'bosu-dong': '보수동',
          'bupyeong-dong': '부평동',
          'nampo-dong': '남포동',
          'yeongju-dong': '영주동',
          'jungang-station': '중앙역',
          'nampo-dong-station': '남포역',
          'bupyeong-station': '부평역',
        },
      },
      seogu: {
        districtsname: '서구',
        districtseng: 'busan-seogu',
        dongStations: {
          'amnam-dong': '암남동',
          'amgok-dong': '암곡동',
          'chungmu-dong': '충무동',
          'dongam-dong': '동암동',
          'saha-dong': '사하동',
          'seo-dong': '서동',
          'amnam-station': '암남역',
          'chungmu-station': '충무역',
        },
      },
      donggu: {
        districtsname: '동구',
        districtseng: 'busan-donggu',
        dongStations: {
          'choryang-dong': '초량동',
          'suam-dong': '수암동',
          'jwa-dong': '좌천동',
          'jungang-dong': '중앙동',
          'choryang-station': '초량역',
          'busan-station': '부산역',
        },
      },
      yeongdo: {
        districtsname: '영도',
        districtseng: 'busan-yeongdo',
        dongStations: {
          'yeongseon-dong': '영선동',
          'dongsam-dong': '동삼동',
          'bongrae-dong': '봉래동',
          'taejong-dong': '태종동',
          'cheonghak-dong': '청학동',
          'yeongseon-station': '영선역',
        },
      },
      busanjin: {
        districtsname: '부산진',
        districtseng: 'busan-busanjin',
        dongStations: {
          'yangjeong-dong': '양정동',
          'jeonpo-dong': '전포동',
          'bujeon-dong': '부전동',
          'gaegeum-dong': '개금동',
          'gaya-dong': '가야동',
          'danggam-dong': '당감동',
          'yangjeong-station': '양정역',
          'jeonpo-station': '전포역',
          'bujeon-station': '부전역',
          'gaegeum-station': '개금역',
          'gaya-station': '가야역',
        },
      },
      dongnae: {
        districtsname: '동래',
        districtseng: 'busan-dongnae',
        dongStations: {
          'myeongnyun-dong': '명륜동',
          'oncheon-dong': '온천동',
          'sajeong-dong': '사직동',
          'ansan-dong': '안산동',
          'chungnyeol-dong': '충렬동',
          'myeongnyun-station': '명륜역',
          'oncheon-station': '온천역',
          'sajeong-station': '사직역',
          'dongnae-station': '동래역',
        },
      },
      namgu: {
        districtsname: '남구',
        districtseng: 'busan-namgu',
        dongStations: {
          'daeyeon-dong': '대연동',
          'yongho-dong': '용호동',
          'yongdang-dong': '용당동',
          'gamman-dong': '감만동',
          'uam-dong': '우암동',
          'munhyeon-dong': '문현동',
          'daeyeon-station': '대연역',
          'yongho-station': '용호역',
          'gamman-station': '감만역',
          'munhyeon-station': '문현역',
        },
      },
      bukgu: {
        districtsname: '북구',
        districtseng: 'busan-bukgu',
        dongStations: {
          'gupo-dong': '구포동',
          'deokcheon-dong': '덕천동',
          'hwaam-dong': '화명동',
          'geumgok-dong': '금곡동',
          'gupo-station': '구포역',
          'deokcheon-station': '덕천역',
          'hwaam-station': '화명역',
          'geumgok-station': '금곡역',
        },
      },
      haeundae: {
        districtsname: '해운대',
        districtseng: 'busan-haeundae',
        dongStations: {
          'jung-dong': '중동',
          'seongjeong-dong': '송정동',
          'jwa-dong': '좌동',
          'u-dong': '우동',
          'jangsan-dong': '장산동',
          'banyeo-dong': '반여동',
          'haeundae-station': '해운대역',
          'dongbaek-station': '동백역',
          'seongjeong-station': '송정역',
          'jangsan-station': '장산역',
          'banyeo-station': '반여역',
        },
      },
      saha: {
        districtsname: '사하',
        districtseng: 'busan-saha',
        dongStations: {
          'gudok-dong': '구덕동',
          'hadan-dong': '하단동',
          'dangni-dong': '당리동',
          'sinpyeong-dong': '신평동',
          'jangnim-dong': '장림동',
          'gudok-station': '구덕역',
          'hadan-station': '하단역',
          'dangni-station': '당리역',
          'sinpyeong-station': '신평역',
        },
      },
      geumjeong: {
        districtsname: '금정',
        districtseng: 'busan-geumjeong',
        dongStations: {
          'seomyeon-dong': '서면동',
          'geumjeong-dong': '금정동',
          'durae-dong': '두구동',
          'namsan-dong': '남산동',
          'seomyeon-station': '서면역',
          'geumjeong-station': '금정역',
          'durae-station': '두구역',
        },
      },
      gangseo: {
        districtsname: '강서',
        districtseng: 'busan-gangseo',
        dongStations: {
          'myeongji-dong': '명지동',
          'gadeok-dong': '가덕동',
          'jinhae-dong': '진해동',
          'myeongji-station': '명지역',
          'gadeok-station': '가덕역',
        },
      },
      yeonje: {
        districtsname: '연제',
        districtseng: 'busan-yeonje',
        dongStations: {
          'yeonsan-dong': '연산동',
          'munhyeon-dong': '문현동',
          'yeonsan-station': '연산역',
          'munhyeon-station': '문현역',
        },
      },
      suyeong: {
        districtsname: '수영',
        districtseng: 'busan-suyeong',
        dongStations: {
          'suyeong-dong': '수영동',
          'mangmi-dong': '망미동',
          'gwangan-dong': '광안동',
          'namcheon-dong': '남천동',
          'suyeong-station': '수영역',
          'mangmi-station': '망미역',
          'gwangan-station': '광안역',
          'namcheon-station': '남천역',
        },
      },
      sasang: {
        districtsname: '사상',
        districtseng: 'busan-sasang',
        dongStations: {
          'sasang-dong': '사상동',
          'gupo-dong': '구포동',
          'deokcheon-dong': '덕천동',
          'sasang-station': '사상역',
          'gupo-station': '구포역',
          'deokcheon-station': '덕천역',
        },
      },
      gijang: {
        districtsname: '기장',
        districtseng: 'busan-gijang',
        dongStations: {
          'gijang-eup': '기장읍',
          'jangan-eup': '장안읍',
          'ilgwang-myeon': '일광면',
          'jeonggwan-myeon': '정관면',
          'songjeong-myeon': '송정면',
          'gijang-station': '기장역',
          'jangan-station': '장안역',
          'ilgwang-station': '일광역',
        },
      },
    },
  },
  daegu: {
    regionName: '대구',
    regionEng: 'daegu',
    districts: {
      junggu: {
        districtsname: '중구',
        districtseng: 'daegu-junggu',
        dongStations: {
          'dongseongno-dong': '동성로동',
          'jungang-dong': '중앙동',
          'namseong-dong': '남성로동',
          'seomun-dong': '서문동',
          'dongseongno-station': '동성로역',
          'jungangno-station': '중앙로역',
          'seomun-market-station': '서문시장역',
        },
      },
      donggu: {
        districtsname: '동구',
        districtseng: 'daegu-donggu',
        dongStations: {
          'dongchon-dong': '동촌동',
          'bangchon-dong': '방촌동',
          'haean-dong': '해안동',
          'sinam-dong': '신암동',
          'dongchon-station': '동촌역',
          'bangchon-station': '방촌역',
          'haean-station': '해안역',
        },
      },
      seogu: {
        districtsname: '서구',
        districtseng: 'daegu-seogu',
        dongStations: {
          'naedang-dong': '내당동',
          'pyeongni-dong': '평리동',
          'isan-dong': '이현동',
          'seongdang-dong': '성당동',
          'naedang-station': '내당역',
          'pyeongni-station': '평리역',
          'isan-station': '이현역',
        },
      },
      namgu: {
        districtsname: '남구',
        districtseng: 'daegu-namgu',
        dongStations: {
          'daemyeong-dong': '대명동',
          'eunhye-dong': '은해동',
          'sangin-dong': '상인동',
          'yongji-dong': '용지동',
          'daemyeong-station': '대명역',
          'eunhye-station': '은해역',
          'sangin-station': '상인역',
          'yongji-station': '용지역',
        },
      },
      bukgu: {
        districtsname: '북구',
        districtseng: 'daegu-bukgu',
        dongStations: {
          'gongpyeong-dong': '공평동',
          'gwaneum-dong': '관음동',
          'dongbu-dong': '동부동',
          'taejeon-dong': '태전동',
          'gongpyeong-station': '공평역',
          'gwaneum-station': '관음역',
          'taejeon-station': '태전역',
        },
      },
      suseong: {
        districtsname: '수성구',
        districtseng: 'daegu-suseong',
        dongStations: {
          'manchon-dong': '만촌동',
          'hwawon-dong': '화원동',
          'jisan-dong': '지산동',
          'rangeum-dong': '범어동',
          'manchon-station': '만촌역',
          'hwawon-station': '화원역',
          'jisan-station': '지산역',
          'rangeum-station': '범어역',
        },
      },
      dalseo: {
        districtsname: '달서구',
        districtseng: 'daegu-dalseo',
        dongStations: {
          'wolseong-dong': '월성동',
          'seongseo-dong': '성서동',
          'yongsan-dong': '용산동',
          'ipyeong-dong': '이평동',
          'wolseong-station': '월성역',
          'seongseo-station': '성서역',
          'yongsan-station': '용산역',
        },
      },
      dalsung: {
        districtsname: '달성군',
        districtseng: 'daegu-dalsung',
        dongStations: {
          'hyeonpung-eup': '현풍읍',
          'gachang-myeon': '가창면',
          'habin-myeon': '하빈면',
          'yonggye-myeon': '옥계면',
          'hyeonpung-station': '현풍역',
          'gachang-station': '가창역',
        },
      },
    },
  },
  incheon: {
    regionName: '인천',
    regionEng: 'incheon',
    districts: {
      junggu: {
        districtsname: '중구',
        districtseng: 'incheon-junggu',
        dongStations: {
          'sinpo-dong': '신포동',
          'yonghyeon-dong': '용현동',
          'dohwa-dong': '도화동',
          'jungang-dong': '중앙동',
          'sinpo-station': '신포역',
          'yonghyeon-station': '용현역',
          'dohwa-station': '도화역',
        },
      },
      donggu: {
        districtsname: '동구',
        districtseng: 'incheon-donggu',
        dongStations: {
          'songhyeon-dong': '송현동',
          'wolmi-dong': '월미동',
          'hwasu-dong': '화수동',
          'songhyeon-station': '송현역',
          'wolmi-station': '월미역',
          'hwasu-station': '화수역',
        },
      },
      michuhol: {
        districtsname: '미추홀',
        districtseng: 'incheon-michuhol',
        dongStations: {
          'munhak-dong': '문학동',
          'gongchon-dong': '공촌동',
          'galsan-dong': '갈산동',
          'yonghyeon-dong': '용현동',
          'munhak-station': '문학역',
          'gongchon-station': '공촌역',
          'galsan-station': '갈산역',
        },
      },
      yeonsu: {
        districtsname: '연수',
        districtseng: 'incheon-yeonsu',
        dongStations: {
          'songdo-dong': '송도동',
          'yeonsu-dong': '연수동',
          'dongchun-dong': '동춘동',
          'songdo-station': '송도역',
          'yeonsu-station': '연수역',
          'dongchun-station': '동춘역',
          'incheon-grand-park-station': '인천대공원역',
        },
      },
      namdong: {
        districtsname: '남동',
        districtseng: 'incheon-namdong',
        dongStations: {
          'guyeong-dong': '구영동',
          'namdong-dong': '남동동',
          'nonhyeon-dong': '논현동',
          'mansu-dong': '만수동',
          'guyeong-station': '구영역',
          'namdong-station': '남동역',
          'nonhyeon-station': '논현역',
          'mansu-station': '만수역',
        },
      },
      bupyeong: {
        districtsname: '부평',
        districtseng: 'incheon-bupyeong',
        dongStations: {
          'bupyeong-dong': '부평동',
          'galsan-dong': '갈산동',
          'samsan-dong': '삼산동',
          'cheongna-dong': '청라동',
          'bupyeong-station': '부평역',
          'galsan-station': '갈산역',
          'samsan-station': '삼산역',
          'cheongna-station': '청라역',
        },
      },
      gyeyang: {
        districtsname: '계양',
        districtseng: 'incheon-gyeyang',
        dongStations: {
          'gyeyang-dong': '계양동',
          'galsan-dong': '갈산동',
          'bupyeong-dong': '부평동',
          'gyeyang-station': '계양역',
          'galsan-station': '갈산역',
          'bupyeong-station': '부평역',
        },
      },
      seogu: {
        districtsname: '서구',
        districtseng: 'incheon-seogu',
        dongStations: {
          'geomsan-dong': '검산동',
          'gajeong-dong': '가정동',
          'seoknam-dong': '석남동',
          'geomsan-station': '검산역',
          'gajeong-station': '가정역',
          'seoknam-station': '석남역',
        },
      },
      ganghwa: {
        districtsname: '강화',
        districtseng: 'incheon-ganghwa',
        dongStations: {
          'ganghwa-eup': '강화읍',
          'gyodong-myeon': '교동면',
          'samsan-myeon': '삼산면',
          'seonwon-myeon': '선원면',
          'ganghwa-station': '강화역',
        },
      },
      ongjin: {
        districtsname: '옹진',
        districtseng: 'incheon-ongjin',
        dongStations: {
          'yeongheung-myeon': '영흥면',
          'baengnyeong-myeon': '백령면',
          'deokjeok-myeon': '덕적면',
          'yeongheung-station': '영흥역',
        },
      },
    },
  },
  gwangju: {
    regionName: '광주',
    regionEng: 'gwangju',
    districts: {
      donggu: {
        districtsname: '동구',
        districtseng: 'gwangju-donggu',
        dongStations: {
          'jisan-dong': '지산동',
          'daein-dong': '대인동',
          'janggyo-dong': '장교동',
          'yongbong-dong': '용봉동',
          'jisan-station': '지산역',
          'daein-station': '대인역',
          'janggyo-station': '장교역',
        },
      },
      seogu: {
        districtsname: '서구',
        districtseng: 'gwangju-seogu',
        dongStations: {
          'yangrim-dong': '양림동',
          'pungam-dong': '풍암동',
          'sangmu-dong': '상무동',
          'gwangsan-dong': '광산동',
          'yangrim-station': '양림역',
          'pungam-station': '풍암역',
          'sangmu-station': '상무역',
        },
      },
      namgu: {
        districtsname: '남구',
        districtseng: 'gwangju-namgu',
        dongStations: {
          'chungjang-dong': '충장동',
          'geumnam-dong': '금남동',
          'yangdong-dong': '양동',
          'bongseon-dong': '봉선동',
          'chungjang-station': '충장역',
          'geumnam-station': '금남역',
          'yangdong-station': '양동역',
        },
      },
      bukgu: {
        districtsname: '북구',
        districtseng: 'gwangju-bukgu',
        dongStations: {
          'munheung-dong': '문흥동',
          'yongbong-dong': '용봉동',
          'ilgok-dong': '일곡동',
          'imdong-dong': '임동',
          'munheung-station': '문흥역',
          'yongbong-station': '용봉역',
          'ilgok-station': '일곡역',
        },
      },
      gwangsan: {
        districtsname: '광산',
        districtseng: 'gwangju-gwangsan',
        dongStations: {
          'gwangsan-dong': '광산동',
          'songjeong-dong': '송정동',
          'nokdong-dong': '녹동',
          'suwan-dong': '수완동',
          'gwangsan-station': '광산역',
          'songjeong-station': '송정역',
          'nokdong-station': '녹동역',
          'suwan-station': '수완역',
        },
      },
    },
  },
  daejeon: {
    regionName: '대전',
    regionEng: 'daejeon',
    districts: {
      donggu: {
        districtsname: '동구',
        districtseng: 'daejeon-donggu',
        dongStations: {
          'panam-dong': '판암동',
          'sindae-dong': '신대동',
          'jangan-dong': '장안동',
          'yongun-dong': '용운동',
          'panam-station': '판암역',
          'sindae-station': '신대역',
          'jangan-station': '장안역',
        },
      },
      junggu: {
        districtsname: '중구',
        districtseng: 'daejeon-junggu',
        dongStations: {
          'jungang-dong': '중앙동',
          'daeseong-dong': '대성동',
          'inheon-dong': '인헌동',
          'seonhwa-dong': '선화동',
          'jungang-station': '중앙역',
          'daeseong-station': '대성역',
          'inheon-station': '인헌역',
        },
      },
      seogu: {
        districtsname: '서구',
        districtseng: 'daejeon-seogu',
        dongStations: {
          'tanbang-dong': '탄방동',
          'gwanpyeong-dong': '관평동',
          'dunsan-dong': '둔산동',
          'jeonmin-dong': '전민동',
          'tanbang-station': '탄방역',
          'gwanpyeong-station': '관평역',
          'dunsan-station': '둔산역',
          'jeonmin-station': '전민역',
        },
      },
      yuseong: {
        districtsname: '유성',
        districtseng: 'daejeon-yuseong',
        dongStations: {
          'yuseong-dong': '유성동',
          'jijeong-dong': '지정동',
          'noeun-dong': '노은동',
          'guseong-dong': '구성동',
          'yuseong-station': '유성역',
          'jijeong-station': '지정역',
          'noeun-station': '노은역',
          'guseong-station': '구성역',
        },
      },
      daedeok: {
        districtsname: '대덕',
        districtseng: 'daejeon-daedeok',
        dongStations: {
          'daedeok-dong': '대덕동',
          'hoedeok-dong': '회덕동',
          'songjeong-dong': '송정동',
          'jangdae-dong': '장대동',
          'daedeok-station': '대덕역',
          'hoedeok-station': '회덕역',
          'songjeong-station': '송정역',
        },
      },
    },
  },
  sejong: {
    regionName: '세종',
    regionEng: 'sejong',
    districts: {
      sejong: {
        districtsname: '세종특별자치시',
        districtseng: 'sejong',
        dongStations: {
          'jochiwon-eup': '조치원읍',
          'sejong-dong': '세종동',
          'boram-dong': '보람동',
          'areum-dong': '아름동',
          'goun-dong': '고운동',
          'dodam-dong': '도담동',
          'hanbat-dong': '한밭동',
          'jochiwon-station': '조치원역',
          'sejong-station': '세종역',
          'boram-station': '보람역',
          'areum-station': '아름역',
        },
      },
    },
  },
  gyeonggi: {
    regionName: '경기',
    regionEng: 'gyeonggi',
    districts: {
      suwon: {
        districtsname: '수원',
        districtseng: 'gyeonggi-suwon',
        dongStations: {
          'paldal-dong': '팔달동',
          'yeongtong-dong': '영통동',
          'gwonseon-dong': '권선동',
          'ingye-dong': '인계동',
          'maetan-dong': '매탄동',
          'paldal-station': '팔달역',
          'yeongtong-station': '영통역',
          'gwonseon-station': '권선역',
          'maetan-station': '매탄역',
        },
      },
      seongnam: {
        districtsname: '성남',
        districtseng: 'gyeonggi-seongnam',
        dongStations: {
          'bundang-dong': '분당동',
          'jungja-dong': '정자동',
          'pangyo-dong': '판교동',
          'seohyeon-dong': '서현동',
          'bundang-station': '분당역',
          'jungja-station': '정자역',
          'pangyo-station': '판교역',
          'seohyeon-station': '서현역',
        },
      },
      uijeongbu: {
        districtsname: '의정부',
        districtseng: 'gyeonggi-uijeongbu',
        dongStations: {
          'uijeongbu-dong': '의정부동',
          'howon-dong': '호원동',
          'jangam-dong': '장암동',
          'uijeongbu-station': '의정부역',
          'howon-station': '호원역',
          'jangam-station': '장암역',
        },
      },
      anyang: {
        districtsname: '안양',
        districtseng: 'gyeonggi-anyang',
        dongStations: {
          'manan-dong': '만안동',
          'dongan-dong': '동안동',
          'bisan-dong': '비산동',
          'anyang-station': '안양역',
          'manan-station': '만안역',
          'bisan-station': '비산역',
        },
      },
      bucheon: {
        districtsname: '부천',
        districtseng: 'gyeonggi-bucheon',
        dongStations: {
          'sosa-dong': '소사동',
          'oyeon-dong': '오정동',
          'wongok-dong': '원곡동',
          'sosa-station': '소사역',
          'oyeon-station': '오정역',
          'wongok-station': '원곡역',
        },
      },
      gwangmyeong: {
        districtsname: '광명',
        districtseng: 'gyeonggi-gwangmyeong',
        dongStations: {
          'gwangmyeong-dong': '광명동',
          'cheolsan-dong': '철산동',
          'haeryong-dong': '해룡동',
          'gwangmyeong-station': '광명역',
          'cheolsan-station': '철산역',
        },
      },
      pyeongtaek: {
        districtsname: '평택',
        districtseng: 'gyeonggi-pyeongtaek',
        dongStations: {
          'pyeongtaek-dong': '평택동',
          'songtan-dong': '송탄동',
          'jijeong-dong': '지정동',
          'pyeongtaek-station': '평택역',
          'songtan-station': '송탄역',
        },
      },
      gwacheon: {
        districtsname: '과천',
        districtseng: 'gyeonggi-gwacheon',
        dongStations: {
          'gwacheon-dong': '과천동',
          'munwon-dong': '문원동',
          'gwacheon-station': '과천역',
          'munwon-station': '문원역',
        },
      },
      osan: {
        districtsname: '오산',
        districtseng: 'gyeonggi-osan',
        dongStations: {
          'osan-dong': '오산동',
          'seongnam-dong': '성남동',
          'osan-station': '오산역',
          'seongnam-station': '성남역',
        },
      },
      siheung: {
        districtsname: '시흥',
        districtseng: 'gyeonggi-siheung',
        dongStations: {
          'siheung-dong': '시흥동',
          'jeongwang-dong': '정왕동',
          'daeya-dong': '대야동',
          'siheung-station': '시흥역',
          'jeongwang-station': '정왕역',
        },
      },
      gunpo: {
        districtsname: '군포',
        districtseng: 'gyeonggi-gunpo',
        dongStations: {
          'gunpo-dong': '군포동',
          'sanbon-dong': '산본동',
          'gunpo-station': '군포역',
          'sanbon-station': '산본역',
        },
      },
      uiwang: {
        districtsname: '의왕',
        districtseng: 'gyeonggi-uiwang',
        dongStations: {
          'uiwang-dong': '의왕동',
          'poil-dong': '포일동',
          'uiwang-station': '의왕역',
        },
      },
      hanam: {
        districtsname: '하남',
        districtseng: 'gyeonggi-hanam',
        dongStations: {
          'hanam-dong': '하남동',
          'chunghyeon-dong': '중현동',
          'hanam-station': '하남역',
        },
      },
      yongin: {
        districtsname: '용인',
        districtseng: 'gyeonggi-yongin',
        dongStations: {
          'giheung-dong': '기흥동',
          'suji-dong': '수지동',
          'cheoin-dong': '처인동',
          'giheung-station': '기흥역',
          'suji-station': '수지역',
          'cheoin-station': '처인역',
        },
      },
      paju: {
        districtsname: '파주',
        districtseng: 'gyeonggi-paju',
        dongStations: {
          'munsan-eup': '문산읍',
          'jeokseong-myeon': '적성면',
          'tanhyeon-myeon': '탄현면',
          'munsan-station': '문산역',
        },
      },
      icheon: {
        districtsname: '이천',
        districtseng: 'gyeonggi-icheon',
        dongStations: {
          'icheon-dong': '이천동',
          'buk-myeon': '북면',
          'icheon-station': '이천역',
        },
      },
      anseong: {
        districtsname: '안성',
        districtseng: 'gyeonggi-anseong',
        dongStations: {
          'anseong-dong': '안성동',
          'gongdo-myeon': '공도면',
          'anseong-station': '안성역',
        },
      },
      gimpo: {
        districtsname: '김포',
        districtseng: 'gyeonggi-gimpo',
        dongStations: {
          'gimpo-dong': '김포동',
          'tongjin-eup': '통진읍',
          'gimpo-station': '김포역',
          'tongjin-station': '통진역',
        },
      },
      hwaseong: {
        districtsname: '화성',
        districtseng: 'gyeonggi-hwaseong',
        dongStations: {
          'hwaseong-dong': '화성동',
          'bongdam-eup': '봉담읍',
          'hwaseong-station': '화성역',
          'bongdam-station': '봉담역',
        },
      },
      gwangju: {
        districtsname: '광주',
        districtseng: 'gyeonggi-gwangju',
        dongStations: {
          'gwangju-dong': '광주동',
          'ochang-eup': '오창읍',
          'gwangju-station': '광주역',
        },
      },
      yeoju: {
        districtsname: '여주',
        districtseng: 'gyeonggi-yeoju',
        dongStations: {
          'yeoju-eup': '여주읍',
          'gangcheon-myeon': '강천면',
          'yeoju-station': '여주역',
        },
      },
      yangpyeong: {
        districtsname: '양평',
        districtseng: 'gyeonggi-yangpyeong',
        dongStations: {
          'yangpyeong-eup': '양평읍',
          'yongmun-myeon': '용문면',
          'yangpyeong-station': '양평역',
        },
      },
      goyang: {
        districtsname: '고양',
        districtseng: 'gyeonggi-goyang',
        dongStations: {
          'ilsan-dong': '일산동',
          'wondang-dong': '원당동',
          'deokyang-dong': '덕양동',
          'ilsan-station': '일산역',
          'wondang-station': '원당역',
          'deokyang-station': '덕양역',
        },
      },
      dongducheon: {
        districtsname: '동두천',
        districtseng: 'gyeonggi-dongducheon',
        dongStations: {
          'dongducheon-dong': '동두천동',
          'sangbong-dong': '상봉동',
          'dongducheon-station': '동두천역',
        },
      },
      gapyeong: {
        districtsname: '가평',
        districtseng: 'gyeonggi-gapyeong',
        dongStations: {
          'gapyeong-eup': '가평읍',
          'cheongpyeong-myeon': '청평면',
          'gapyeong-station': '가평역',
        },
      },
      yeoncheon: {
        districtsname: '연천',
        districtseng: 'gyeonggi-yeoncheon',
        dongStations: {
          'yeoncheon-eup': '연천읍',
          'jeongok-myeon': '전곡면',
          'yeoncheon-station': '연천역',
        },
      },
    },
  },
  gangwon: {
    regionName: '강원',
    regionEng: 'gangwon',
    districts: {
      chuncheon: {
        districtsname: '춘천',
        districtseng: 'gangwon-chuncheon',
        dongStations: {
          'chuncheon-dong': '춘천동',
          'seoksa-dong': '석사동',
          'sinbuk-dong': '신북동',
          'chuncheon-station': '춘천역',
          'seoksa-station': '석사역',
          'sinbuk-station': '신북역',
        },
      },
      wonju: {
        districtsname: '원주',
        districtseng: 'gangwon-wonju',
        dongStations: {
          'wonju-dong': '원주동',
          'pyeonghwa-dong': '평화동',
          'munmak-dong': '문막동',
          'wonju-station': '원주역',
          'pyeonghwa-station': '평화역',
        },
      },
      gangneung: {
        districtsname: '강릉',
        districtseng: 'gangwon-gangneung',
        dongStations: {
          'gangneung-dong': '강릉동',
          'okgye-dong': '옥계동',
          'jangsan-dong': '장산동',
          'gangneung-station': '강릉역',
          'okgye-station': '옥계역',
        },
      },
      donghae: {
        districtsname: '동해',
        districtseng: 'gangwon-donghae',
        dongStations: {
          'donghae-dong': '동해동',
          'mukho-dong': '묵호동',
          'donghae-station': '동해역',
          'mukho-station': '묵호역',
        },
      },
      taebaek: {
        districtsname: '태백',
        districtseng: 'gangwon-taebaek',
        dongStations: {
          'taebaek-dong': '태백동',
          'hambaeksan-dong': '함백산동',
          'taebaek-station': '태백역',
        },
      },
      sokcho: {
        districtsname: '속초',
        districtseng: 'gangwon-sokcho',
        dongStations: {
          'sokcho-dong': '속초동',
          'yeongnang-dong': '영랑동',
          'daecheong-dong': '대청동',
          'sokcho-station': '속초역',
          'yeongnang-station': '영랑역',
        },
      },
      samcheok: {
        districtsname: '삼척',
        districtseng: 'gangwon-samcheok',
        dongStations: {
          'samcheok-dong': '삼척동',
          'dogye-dong': '도계동',
          'samcheok-station': '삼척역',
          'dogye-station': '도계역',
        },
      },
      hongcheon: {
        districtsname: '홍천',
        districtseng: 'gangwon-hongcheon',
        dongStations: {
          'hongcheon-eup': '홍천읍',
          'nam-myeon': '남면',
          'hongcheon-station': '홍천역',
        },
      },
      hoengseong: {
        districtsname: '횡성',
        districtseng: 'gangwon-hoengseong',
        dongStations: {
          'hoengseong-eup': '횡성읍',
          'woenam-myeon': '원남면',
          'hoengseong-station': '횡성역',
        },
      },
      yeongwol: {
        districtsname: '영월',
        districtseng: 'gangwon-yeongwol',
        dongStations: {
          'yeongwol-eup': '영월읍',
          'sangdong-myeon': '상동면',
          'yeongwol-station': '영월역',
        },
      },
      pyeongchang: {
        districtsname: '평창',
        districtseng: 'gangwon-pyeongchang',
        dongStations: {
          'pyeongchang-eup': '평창읍',
          'daegwallyeong-myeon': '대관령면',
          'pyeongchang-station': '평창역',
        },
      },
      jeongseon: {
        districtsname: '정선',
        districtseng: 'gangwon-jeongseon',
        dongStations: {
          'jeongseon-eup': '정선읍',
          'gohan-myeon': '고한면',
          'jeongseon-station': '정선역',
        },
      },
      cheorwon: {
        districtsname: '철원',
        districtseng: 'gangwon-cheorwon',
        dongStations: {
          'cheorwon-eup': '철원읍',
          'gimhwa-eup': '김화읍',
          'cheorwon-station': '철원역',
        },
      },
      hwacheon: {
        districtsname: '화천',
        districtseng: 'gangwon-hwacheon',
        dongStations: {
          'hwacheon-eup': '화천읍',
          'sangnam-myeon': '상남면',
          'hwacheon-station': '화천역',
        },
      },
      yanggu: {
        districtsname: '양구',
        districtseng: 'gangwon-yanggu',
        dongStations: {
          'yanggu-eup': '양구읍',
          'dong-myeon': '동면',
          'yanggu-station': '양구역',
        },
      },
      inje: {
        districtsname: '인제',
        districtseng: 'gangwon-inje',
        dongStations: {
          'inje-eup': '인제읍',
          'sangnam-myeon': '상남면',
          'inje-station': '인제역',
        },
      },
      goseong: {
        districtsname: '고성',
        districtseng: 'gangwon-goseong',
        dongStations: {
          'goseong-eup': '고성읍',
          'tongcheon-myeon': '통천면',
          'goseong-station': '고성역',
        },
      },
      yangyang: {
        districtsname: '양양',
        districtseng: 'gangwon-yangyang',
        dongStations: {
          'yangyang-eup': '양양읍',
          'seohwa-myeon': '서화면',
          'yangyang-station': '양양역',
        },
      },
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
function getDistrictData() {
  const districtData = {};
  const districtMap = window.districtMap || {};

  for (const [key, value] of Object.entries(districtMap)) {
    if (value.regionName && value.districts) {
      // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
      const districtNames = Object.values(value.districts).map((district) => {
        if (typeof district === 'string') {
          // 기존 구조 (하위 호환성)
          return district;
        } else if (district && district.districtsname) {
          // 새 구조
          return district.districtsname;
        }
        return district;
      });
      districtData[value.regionName] = districtNames;
    }
  }

  return districtData;
}

// shop-card-data.js에서 업체 데이터 로드
async function loadShopCardsFromDataFile() {
  // shop-card-data.js가 이미 로드되어 있다면 window.shopCardData 사용
  if (window.shopCardData) {
    return window.shopCardData;
  }

  // 동적으로 스크립트 로드
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'shop-card-data.js';
    script.onload = () => {
      resolve(window.shopCardData || []);
    };
    script.onerror = () => {
      console.warn('shop-card-data.js 로드 실패, 빈 배열 반환');
      resolve([]);
    };
    document.head.appendChild(script);
  });
}

// company- HTML 파일에서 업체 데이터 추출
async function loadShopDataFromHTMLFiles() {
  try {
    // company- 접두사가 붙은 HTML 파일 목록 가져오기
    const companyFiles = await getCompanyHTMLFiles();
    const shops = [];

    // 각 HTML 파일에서 데이터 추출 (최대 100개씩 배치로 처리)
    const batchSize = 100;
    for (let i = 0; i < companyFiles.length; i += batchSize) {
      const batch = companyFiles.slice(i, i + batchSize);
      const batchShops = await Promise.all(
        batch.map((file) => extractShopDataFromHTML(file))
      );
      shops.push(...batchShops.filter((shop) => shop !== null));
    }

    return shops;
  } catch (error) {
    console.error('HTML 파일에서 업체 데이터 로드 중 오류:', error);
    return [];
  }
}

// company- 접두사가 붙은 HTML 파일 목록 가져오기
async function getCompanyHTMLFiles() {
  try {
    // sitemap.xml이나 파일 목록 API가 있다면 사용
    // 없으면 현재 페이지에서 company- 파일 목록을 추론
    // 실제 구현에서는 서버에서 파일 목록을 제공해야 함
    const response = await fetch('sitemap.xml');
    if (response.ok) {
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      const urls = xmlDoc.querySelectorAll('url loc');
      const companyFiles = [];
      urls.forEach((url) => {
        const href = url.textContent;
        if (href && href.includes('company-') && href.endsWith('.html')) {
          const fileName = href.split('/').pop();
          companyFiles.push(fileName);
        }
      });
      return companyFiles;
    }
  } catch (error) {
    console.warn('sitemap.xml을 찾을 수 없습니다. 기본 파일 목록 사용:', error);
  }

  // 기본 파일 목록 (shop-card-data.js에서 가져오기)
  if (window.shopCardData) {
    return window.shopCardData.map((shop) => shop.file);
  }

  return [];
}

// HTML 파일에서 JSON-LD 스키마를 파싱하여 업체 데이터 추출
async function extractShopDataFromHTML(fileName) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) return null;

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // JSON-LD 스키마 찾기
    const jsonLdScripts = doc.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    let shopData = null;

    for (const script of jsonLdScripts) {
      try {
        const data = JSON.parse(script.textContent);
        if (data['@type'] === 'HealthAndBeautyBusiness') {
          shopData = data;
          break;
        }
      } catch (e) {
        continue;
      }
    }

    if (!shopData) return null;

    // shop-card-data.js에서 추가 정보 가져오기
    const shopCardData = window.shopCardData?.find((s) => s.file === fileName);

    // 업체 데이터 구성
    const shop = {
      id: shopCardData?.id || parseInt(fileName.match(/\d+/)?.[0] || '0'),
      name: shopData.name || '',
      type: shopCardData?.type || '마사지',
      country: shopCardData?.country || 'korea',
      region:
        shopData.address?.addressRegion
          ?.replace('특별자치도', '')
          .replace('광역시', '')
          .replace('시', '')
          .trim() || '',
      district: shopData.address?.addressLocality || '',
      address:
        shopData.address?.streetAddress ||
        shopData.address?.addressLocality ||
        '',
      detailAddress: shopCardData?.detailAddress || '',
      phone: shopData.telephone?.replace(/[^0-9]/g, '') || '',
      rating: parseFloat(shopData.aggregateRating?.ratingValue || 0),
      reviewCount: parseInt(shopData.aggregateRating?.reviewCount || 0),
      price: shopData.priceRange || '',
      description: shopData.description || '',
      image: shopData.image || '',
      services: shopCardData?.services || [],
      operatingHours: shopData.openingHoursSpecification
        ? `${shopData.openingHoursSpecification.opens} ~ ${shopData.openingHoursSpecification.closes}`
        : '',
      file: fileName,
      showHealingShop:
        shopCardData?.showHealingShop !== undefined
          ? shopCardData.showHealingShop
          : true,
      greeting: shopCardData?.greeting,
    };

    return shop;
  } catch (error) {
    console.error(`파일 ${fileName}에서 데이터 추출 중 오류:`, error);
    return null;
  }
}

// 업체 데이터 초기화 및 병합
async function initializeShopData() {
  try {
    // shop-card-data.js에서 기본 데이터 로드
    const loadedShops = await loadShopCardsFromDataFile();

    // company- HTML 파일에서 상세 데이터 로드
    const htmlShops = await loadShopDataFromHTMLFiles();

    // 두 데이터 소스 병합
    const allShops = [];

    // shop-card-data.js의 데이터를 기준으로 병합
    loadedShops.forEach((cardData) => {
      const htmlShop = htmlShops.find((s) => s.file === cardData.file);
      if (htmlShop) {
        // HTML에서 가져온 상세 데이터와 카드 데이터 병합
        allShops.push({ ...htmlShop, ...cardData });
      } else {
        // HTML 파일이 없으면 카드 데이터만 사용
        allShops.push(cardData);
      }
    });

    // HTML에만 있는 업체 추가
    htmlShops.forEach((htmlShop) => {
      if (!allShops.find((s) => s.file === htmlShop.file)) {
        allShops.push(htmlShop);
      }
    });

    // massageShops 배열에 저장 (showHealingShop 기준 정렬 및 랜덤 적용)
    massageShops = sortShops(allShops);
  } catch (error) {
    console.error('업체 데이터 초기화 중 오류:', error);
    // 에러 시 shop-card-data.js만 사용 (showHealingShop 기준 정렬 및 랜덤 적용)
    const loadedShops = await loadShopCardsFromDataFile();
    massageShops = sortShops(loadedShops);
  }
}

// 마사지 업체 데이터 (동적으로 로드됨)
// 모든 데이터는 company- 접두사가 붙은 HTML 파일에서 동적으로 로드됨
let massageShops = [];

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

  const districtData = getDistrictData();
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
  // header-search-btn 바인딩
  bindHeaderSearchButton();

  // filter-section과 filter-container를 header 아래에 고정
  updateFilterStickyPosition();

  // 스크롤 시 filter 위치 업데이트
  window.addEventListener('scroll', updateFilterStickyPosition);
  window.addEventListener('resize', updateFilterStickyPosition);

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

    // 구 선택 활성화 및 동/역 옵션 업데이트 (세부지역이 있는 경우)
    if (detectedInfo.district) {
      const districtSelect = document.getElementById('districtSelect');
      if (districtSelect) {
        districtSelect.disabled = false;
        districtSelect.style.opacity = '1';

        // regionSelect와 districtSelect 값 설정
        if (regionSelect) {
          regionSelect.value = detectedInfo.region;
          // updateDistrictOptions에 선택된 값도 전달
          updateDistrictOptions(detectedInfo.region, detectedInfo.district);
        }
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

      // 현재 선택된 지역과 세부지역 가져오기 (선택 박스 우선)
      const regionSelect = document.getElementById('regionSelect');
      const districtSelect = document.getElementById('districtSelect');

      let region = currentRegion;
      let district = currentDistrict;

      // 선택 박스에서 값 가져오기 (우선순위)
      if (regionSelect && regionSelect.value) {
        region = regionSelect.value;
      }
      if (districtSelect && districtSelect.value) {
        district = districtSelect.value;
      }

      // 중앙화된 함수로 테마 페이지 URL 생성
      const targetPage = window.getThemePageUrl
        ? window.getThemePageUrl(selectedTheme, region, district)
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
                // 필터 섹션이 sticky로 고정되어 있으면: 헤더 높이 + 필터 섹션 높이
                const header = document.getElementById('mainHeader');
                const headerHeight = header ? header.offsetHeight : 80;
                themeFilterSection.style.top = `${
                  headerHeight + filterSectionHeight
                }px`;
              } else {
                // 필터 섹션이 sticky가 아니면: 필터 섹션의 viewport 기준 bottom 위치
                const filterSectionBottom =
                  filterSectionRect.top + filterSectionHeight;
                themeFilterSection.style.top = `${filterSectionBottom}px`;
              }
            }, 10);
          } else {
            // 필터 섹션을 찾을 수 없는 경우 기본값 사용 (여백 조정)
            const header = document.getElementById('mainHeader');
            const headerHeight = header ? header.offsetHeight : 80;
            const defaultFilterHeight = 60;
            themeFilterSection.style.top = `${
              headerHeight + defaultFilterHeight
            }px`;
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

  // 테마 박스 클릭 이벤트 (중앙화된 로직 사용)
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

      // 중앙화된 함수로 테마 페이지 URL 생성
      if (selectedTheme !== 'all' && window.getThemePageUrl) {
        // 현재 선택된 지역과 세부지역 가져오기 (선택 박스 우선)
        const regionSelect = document.getElementById('regionSelect');
        const districtSelect = document.getElementById('districtSelect');

        let region = currentRegion;
        let district = currentDistrict;

        // 선택 박스에서 값 가져오기 (우선순위)
        if (regionSelect && regionSelect.value) {
          region = regionSelect.value;
        }
        if (districtSelect && districtSelect.value) {
          district = districtSelect.value;
        }

        const targetPage = window.getThemePageUrl(
          selectedTheme,
          region,
          district
        );
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
function updateDistrictOptions(region, selectedDistrictValue = null) {
  console.log(
    'updateDistrictOptions called with region:',
    region,
    'selectedDistrictValue:',
    selectedDistrictValue
  );

  // 현재 값 저장
  const currentValue = districtSelect.value;

  // 옵션만 업데이트 (아이콘 보존)
  districtSelect.innerHTML = '<option value="">세부 지역을 선택하세요</option>';

  const districtData = getDistrictData();
  if (region && districtData[region]) {
    console.log('District data for', region, ':', districtData[region]);
    districtData[region].forEach((district) => {
      // district가 객체인 경우 문자열로 변환
      const districtStr =
        typeof district === 'string'
          ? district
          : district?.districtsname || district || '';

      const option = document.createElement('option');
      option.value = districtStr;
      option.textContent = districtStr;
      districtSelect.appendChild(option);
      console.log('Added district option:', districtStr);
      console.log('Option value:', option.value);
      console.log('Option text:', option.textContent);
      console.log('Option element:', option);
    });

    // 옵션 추가 완료 후 선택된 값 설정
    if (selectedDistrictValue) {
      // 값 설정 함수
      const setValue = () => {
        const optionExists = Array.from(districtSelect.options).some(
          (option) => option.value === selectedDistrictValue
        );
        if (optionExists) {
          districtSelect.value = selectedDistrictValue;
          console.log(
            'District value set to:',
            selectedDistrictValue,
            'current value:',
            districtSelect.value
          );

          // 동/역 옵션 업데이트
          const regionSelect = document.getElementById('regionSelect');
          if (regionSelect && regionSelect.value) {
            updateDongStationOptions(regionSelect.value, selectedDistrictValue);
          }
          return true;
        }
        return false;
      };

      // 1. 옵션 추가 직후 바로 시도
      if (!setValue()) {
        // 2. requestAnimationFrame으로 재시도
        requestAnimationFrame(() => {
          if (!setValue()) {
            // 3. 짧은 지연 후 재시도
            setTimeout(() => {
              if (!setValue()) {
                // 4. 더 긴 지연 후 재시도
                setTimeout(() => {
                  setValue();
                }, 200);
              }
            }, 50);
          }
        });
      }

      // 5. 추가 보장: 여러 번 재시도 (다른 코드가 덮어쓸 수 있으므로)
      let retryCount = 0;
      const maxRetries = 10;
      const ensureValue = () => {
        if (districtSelect.value !== selectedDistrictValue) {
          const optionExists = Array.from(districtSelect.options).some(
            (option) => option.value === selectedDistrictValue
          );
          if (optionExists) {
            districtSelect.value = selectedDistrictValue;
            console.log('District value re-set to:', selectedDistrictValue);
            // 값이 설정되면 동/역 옵션도 업데이트
            const regionSelect = document.getElementById('regionSelect');
            if (regionSelect && regionSelect.value) {
              updateDongStationOptions(
                regionSelect.value,
                selectedDistrictValue
              );
            }
          }
        }
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(ensureValue, 100 * retryCount);
        }
      };
      setTimeout(ensureValue, 100);
    }
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

// 동/역 옵션 업데이트 함수
function updateDongStationOptions(region, district) {
  const dongStationSelect = document.getElementById('dongStationSelect');
  if (!dongStationSelect) return;

  // 옵션 초기화
  dongStationSelect.innerHTML = '<option value="">동, 역 선택</option>';

  if (!region || !district) {
    dongStationSelect.disabled = true;
    dongStationSelect.style.opacity = '0.5';
    return;
  }

  // districtMap에서 동/역 데이터 찾기
  for (const [regionKey, regionData] of Object.entries(districtMap)) {
    if (regionData.regionName === region) {
      for (const [districtKey, districtData] of Object.entries(
        regionData.districts
      )) {
        // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
        const districtName =
          typeof districtData === 'string'
            ? districtData
            : districtData.districtsname;

        if (districtName === district) {
          // 새 구조인 경우 dongStations 사용
          if (typeof districtData === 'object' && districtData.dongStations) {
            for (const [dongKey, dongName] of Object.entries(
              districtData.dongStations
            )) {
              const option = document.createElement('option');
              option.value = dongKey;
              option.textContent = dongName;
              dongStationSelect.appendChild(option);
            }
            // 동/역 선택 활성화
            dongStationSelect.disabled = false;
            dongStationSelect.style.opacity = '1';
            return;
          }
        }
      }
      break;
    }
  }

  // 동/역 데이터가 없으면 비활성화
  dongStationSelect.disabled = true;
  dongStationSelect.style.opacity = '0.5';
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
    filteredShops = massageShops.filter((shop) => {
      // 출장마사지인 경우 district 필터 무시
      if (
        shop.type === '출장마사지' ||
        (shop.services && shop.services.includes('출장마사지'))
      ) {
        return shop.region === selectedRegion;
      }
      // 일반 업체는 district 필터 적용
      return (
        shop.region === selectedRegion && shop.district === selectedDistrict
      );
    });
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
    // 현재 필터 유지
    let targetPage = '';
    for (const [key, value] of Object.entries(districtMap)) {
      if (value.regionName === selectedRegion) {
        // 필터가 있으면 필터 포함 페이지로 이동
        if (currentFilter && currentFilter !== 'all') {
          targetPage = `${key}-${currentFilter}.html`;
        } else {
          targetPage = `${key}.html`;
        }
        window.location.href = targetPage;
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
    filteredShops = filteredShops.filter((shop) => {
      // 출장마사지인 경우 district 필터 무시 (all 필터에서도 적용)
      if (
        shop.type === '출장마사지' ||
        (shop.services && shop.services.includes('출장마사지'))
      ) {
        return true;
      }
      // 일반 업체는 district 필터 적용
      return shop.district === currentDistrict;
    });
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
  } else if (currentFilter === 'spa') {
    // 스파 타입
    filteredShops = filteredShops.filter((shop) => {
      // type에 스파가 포함된 경우
      if (shop.type && (shop.type.includes('스파') || shop.type === 'spa')) {
        return true;
      }
      // services에 스파가 포함된 경우
      if (
        shop.services &&
        shop.services.some(
          (service) =>
            service.includes('스파') ||
            service.includes('SPA') ||
            service.includes('스크럽') ||
            service.includes('VIP케어')
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
  // 주의: 이 부분은 이미 위에서 처리되었으므로 중복 필터링을 방지하기 위해 제거
  // (1194-1207줄에서 이미 district 필터가 적용됨)

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

  // 정적 HTML 카드가 있는지 확인
  const massageList = document.getElementById('massageList');
  const hasStaticCards =
    massageList &&
    massageList.children.length > 0 &&
    Array.from(massageList.children).some(
      (child) =>
        (child.classList && child.classList.contains('massage-card')) ||
        (child.querySelector && child.querySelector('.massage-card')) ||
        (child.tagName === 'A' && child.querySelector('.massage-card'))
    );

  if (hasStaticCards) {
    // 정적 HTML 카드가 있으면 검색 필터링만 적용
    filterStaticCards(currentSearchQuery);
  } else {
    // 동적 생성 카드인 경우 기존 로직 사용
    displayMassageShops(filteredShops);
  }

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
  } else if (currentFilter === 'spa') {
    title = '스파 업체';
  }

  // 테마 필터는 지역 정보 없이 제목만 표시, 다른 필터는 지역 정보 추가
  const themeFilters = [
    'waxing',
    'swedish',
    'thai',
    'aroma',
    'chinese',
    'foot',
    'spa',
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
function extractDongFromAddress(address, detailAddress) {
  if (!address) return '';

  // 동 패턴 매칭 (예: 서귀동, 중문동, 한림동 등)
  const dongPatterns = [/([가-힣]+동)/, /([가-힣]+리)/, /([가-힣]+가)/];

  // 먼저 주소에서 찾기
  for (const pattern of dongPatterns) {
    const match = address.match(pattern);
    if (match) {
      return match[1];
    }
  }

  // 주소에서 못 찾으면 detailAddress에서 찾기
  if (detailAddress) {
    for (const pattern of dongPatterns) {
      const match = detailAddress.match(pattern);
      if (match) {
        return match[1];
      }
    }
  }

  return '';
}

// 주소에서 지역 정보 추출 (구/시 + 동)
function extractLocationInfo(address, detailAddress) {
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

  // 동 정보 추가 (주소와 detailAddress 모두 확인)
  const dongName = extractDongFromAddress(address, detailAddress);
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

  // 동 이름이 있고 업체명에 포함되지 않은 경우 동 이름 추가
  const dongName = extractDongFromAddress(shop.address, shop.detailAddress);
  if (dongName && !shop.name.includes(dongName)) {
    // 기존 업체명에서 "제주마사지", "제주도마사지" 등을 제거하고 간단하게
    let simpleName = shop.name
      .replace(/제주도?마사지\s*/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    return `${dongName} ${simpleName}`;
  }
  return shop.name;
}

// 업체 카드 생성
function createShopCard(shop) {
  const displayName = createShopDisplayName(shop);
  // 출장마사지의 경우 지역명만 표시
  const locationInfo =
    shop.type === '출장마사지'
      ? extractDongFromAddress(shop.address, shop.detailAddress) ||
        shop.region ||
        '출장마사지'
      : extractLocationInfo(shop.address, shop.detailAddress);
  const distance = generateRandomDistance();

  // 주소, 상세주소, 전화번호를 한 줄로 합치기
  const addressParts = [];
  if (shop.address) addressParts.push(shop.address);
  if (shop.detailAddress) addressParts.push(shop.detailAddress);
  if (shop.phone) addressParts.push(shop.phone);
  const addressLine = addressParts.join(' | ');

  // 주소 정보 HTML 생성
  const addressHtml = addressLine
    ? `<div class="shop-address-info" style="font-size: 12px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0;">
                        ${addressLine}
                    </div>`
    : '';

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
                                <img src="https://www.msg1000.com/images/한국.jpg" 
                                     alt="한국 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇰🇷'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                ${
                                  shop.country && shop.country.includes('japan')
                                    ? `
                                <img src="https://www.msg1000.com/images/일본.jpg" 
                                     alt="일본 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇯🇵'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                `
                                    : ''
                                }
                                ${
                                  shop.country &&
                                  shop.country.includes('Thailand')
                                    ? `
                                <img src="https://www.msg1000.com/images/태국.jpg" 
                                     alt="태국 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇹🇭'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                `
                                    : ''
                                }
                                ${
                                  shop.country &&
                                  shop.country.includes('Russia')
                                    ? `
                                <img src="https://www.msg1000.com/images/러시아.jpg" 
                                     alt="러시아 국기" 
                                     class="flag-image"
                                     onerror="this.onerror=null; this.innerHTML='🇷🇺'; this.style.fontSize='16px'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.height='100%'; this.style.background='#f0f0f0'; this.style.borderRadius='3px';">
                                `
                                    : ''
                                }
                                ${
                                  shop.country && shop.country.includes('china')
                                    ? `
                                <img src="https://www.msg1000.com/images/중국.jpg" 
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
                
                <div class="card-footer" style="display: flex; justify-content: flex-start; align-items: center; gap: 12px; flex-wrap: nowrap; overflow: hidden;">
                    <div class="price-container" style="display: flex; align-items: center; gap: 8px; overflow: hidden; width: 100%; flex: 1; min-width: 0;">
                        <div class="price" style="flex-shrink: 0; white-space: nowrap;"><span class="price-label">최저가</span> ${
                          shop.price
                        }</div>
                        ${addressHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 타입 이름 반환
function getTypeName(shop) {
  // shop-card-data.js에서 showHealingShop 필드 확인
  if (shop.showHealingShop === false) return '';
  if (shop.hideHealingShop === true) return '';

  // typeLabel 필드가 있으면 사용
  if (shop.typeLabel !== undefined && shop.typeLabel !== null) {
    return shop.typeLabel || '';
  }

  return '힐링샵'; // 기본값
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
      spa: ['스파', 'SPA', '스크럽', 'VIP케어', '호텔식'],
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
  // shop-card-data.js에서 greeting 필드가 있으면 우선 사용
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
  // title 뒤에 " 추천 BEST 샵" 추가
  if (title && !title.includes('추천 BEST')) {
    resultsTitle.textContent = `${title} 추천 BEST 샵`;
  } else {
    resultsTitle.textContent = title;
  }
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
    spa: '스파',
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
      const baseTitle = isMainPage
        ? '전체 마사지사이트 업체'
        : '전체 마사지 업체';
      resultsTitle.textContent = `${baseTitle} 추천 BEST 샵`;
    } else {
      // 테마 선택 시 "스웨디시 업체 추천 BEST 샵" 형식
      resultsTitle.textContent = `${themeName} 업체 추천 BEST 샵`;
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
  // shop-card-data.js에서 file 필드 가져오기
  let shop =
    window.shopCardData?.find((s) => s.id === shopId) ||
    massageShops.find((s) => s.id === shopId);

  // file 필드에서 파일명 가져오기 (company- 접두사 자동 처리)
  const fileName = shop?.file || `company-shop-${shopId}.html`;
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

// Fisher-Yates 셔플 알고리즘
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 업체 정렬 함수
function sortShops(shops) {
  // showHealingShop 값에 따라 그룹 분리
  const healingShops = shops.filter((shop) => shop.showHealingShop === true);
  const nonHealingShops = shops.filter((shop) => shop.showHealingShop !== true);

  // 각 그룹 내에서 랜덤 정렬
  const shuffledHealing = shuffleArray(healingShops);
  const shuffledNonHealing = shuffleArray(nonHealingShops);

  // true 그룹을 상단에, false 그룹을 하단에 배치
  return [...shuffledHealing, ...shuffledNonHealing];
}

// 정적 HTML 카드 정렬 실행 여부 플래그 (한 번만 실행되도록)
let staticCardsSorted = false;

// 정적 HTML 카드 재정렬 함수
function sortStaticCards() {
  // 이미 정렬되었으면 건너뛰기
  if (staticCardsSorted) {
    return;
  }

  // massageList가 존재하는지 확인 (DOM이 준비되지 않았을 수 있음)
  const massageList = document.getElementById('massageList');
  if (!massageList || massageList.children.length === 0) {
    console.log('sortStaticCards: massageList가 없거나 비어있음');
    return;
  }

  // 초기에 카드를 숨김 (렌더링 전 정렬을 위해) - CSS에서 이미 숨김 처리됨
  massageList.style.opacity = '0';
  massageList.style.visibility = 'hidden';

  // 모든 카드 요소 수집 (<a> 태그 또는 <div> 태그)
  const cards = Array.from(massageList.children).filter((child) => {
    const hasCard =
      (child.classList && child.classList.contains('massage-card')) ||
      (child.querySelector && child.querySelector('.massage-card')) ||
      (child.tagName === 'A' && child.querySelector('.massage-card'));
    return hasCard;
  });

  if (cards.length === 0) {
    console.log('sortStaticCards: 카드를 찾을 수 없음');
    return;
  }

  console.log(`sortStaticCards: ${cards.length}개 카드 발견`);

  // 각 카드의 showHealingShop 값 확인
  const cardData = cards.map((card) => {
    // massage-card 요소 찾기
    const massageCard = card.classList.contains('massage-card')
      ? card
      : card.querySelector('.massage-card');

    if (!massageCard) {
      console.log('sortStaticCards: massage-card 요소를 찾을 수 없음', card);
      return { card, showHealingShop: false };
    }

    // data-show-healing-shop 속성에서 값 확인 (우선순위 1)
    let isHealingShop = false;
    const dataAttr = massageCard.getAttribute('data-show-healing-shop');
    if (dataAttr !== null) {
      isHealingShop = dataAttr === 'true' || dataAttr === 'True';
    } else {
      // data 속성이 없으면 shop-type 요소에서 "힐링샵" 텍스트 확인 (하위 호환성)
      const shopTypeElement = massageCard.querySelector('.shop-type');
      isHealingShop =
        shopTypeElement &&
        shopTypeElement.textContent.trim().includes('힐링샵');
    }

    return { card, showHealingShop: isHealingShop };
  });

  // showHealingShop: true인 항목과 false인 항목 분리
  const healingCards = cardData.filter((item) => item.showHealingShop === true);
  const nonHealingCards = cardData.filter(
    (item) => item.showHealingShop !== true
  );

  console.log(
    `sortStaticCards: 힐링샵 ${healingCards.length}개, 일반 ${nonHealingCards.length}개`
  );

  // 각 그룹 내에서 랜덤 정렬 (새 배열 반환)
  const shuffledHealing = shuffleArray(healingCards);
  const shuffledNonHealing = shuffleArray(nonHealingCards);

  // 카드 제거
  cards.forEach((card) => card.remove());

  // 정렬된 순서로 다시 추가 (true 그룹 먼저, false 그룹 나중)
  const sortedCards = [...shuffledHealing, ...shuffledNonHealing];
  sortedCards.forEach((item) => {
    massageList.appendChild(item.card);
  });

  // 정렬 완료 플래그 설정
  staticCardsSorted = true;

  // 정렬 완료 후 카드 표시 (렌더링 전 정렬 완료)
  massageList.classList.add('sorted');
  massageList.style.opacity = '1';
  massageList.style.visibility = 'visible';

  console.log(
    `✅ 정적 HTML 카드 ${sortedCards.length}개 재정렬 완료 (힐링샵: ${healingCards.length}개, 일반: ${nonHealingCards.length}개)`
  );
}

// 정적 HTML 카드 검색 필터링 함수
function filterStaticCards(searchQuery) {
  const massageList = document.getElementById('massageList');
  if (!massageList) return;

  // 모든 카드 요소 수집
  const cards = Array.from(massageList.children).filter((child) => {
    return (
      (child.classList && child.classList.contains('massage-card')) ||
      (child.querySelector && child.querySelector('.massage-card')) ||
      (child.tagName === 'A' && child.querySelector('.massage-card'))
    );
  });

  if (cards.length === 0) return;

  const searchTerm = searchQuery ? searchQuery.trim().toLowerCase() : '';

  // 검색어가 없으면 모든 카드 표시
  if (!searchTerm || searchTerm.length < 2) {
    cards.forEach((card) => {
      card.style.display = '';
    });
    return;
  }

  // 각 카드의 텍스트 내용 확인
  cards.forEach((card) => {
    const massageCard = card.classList.contains('massage-card')
      ? card
      : card.querySelector('.massage-card');

    if (!massageCard) {
      card.style.display = 'none';
      return;
    }

    // 카드의 모든 텍스트 내용 수집
    const cardText = massageCard.textContent || massageCard.innerText || '';
    const cardTextLower = cardText.toLowerCase();

    // 검색어와 매칭되는지 확인
    const matches = cardTextLower.includes(searchTerm);

    // 매칭되면 표시, 아니면 숨김
    card.style.display = matches ? '' : 'none';
  });
}

// 업체 목록 표시 (애니메이션 포함)
function displayMassageShops(shops) {
  // massageList에 정적 HTML이 이미 있으면 동적 생성 건너뛰고 정렬만 수행
  if (massageList && massageList.children.length > 0) {
    const hasStaticCards = Array.from(massageList.children).some(
      (child) =>
        (child.classList && child.classList.contains('massage-card')) ||
        (child.querySelector && child.querySelector('.massage-card')) ||
        (child.tagName === 'A' && child.querySelector('.massage-card'))
    );
    if (hasStaticCards) {
      console.log('정적 HTML이 이미 존재하므로 동적 생성 건너뜀');
      // 정적 HTML 카드 재정렬 (한 번만 실행)
      if (!staticCardsSorted) {
        sortStaticCards();
      }
      // 정적 HTML 카드 검색 필터링 적용
      filterStaticCards(currentSearchQuery);
      return;
    }
  }

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
    spa: '스파',
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
    // spa.html 같은 경우 파일명으로 확인
    const fileName = window.location.pathname.split('/').pop();
    if (
      fileName === 'spa.html' &&
      (!currentFilter || window.currentFilter === 'spa')
    ) {
      titleText = '스파정보';
    } else if (themeNames[currentFilter]) {
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
          const districtData = regionData.districts[parts[1]];
          // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
          result.district =
            typeof districtData === 'string'
              ? districtData
              : districtData.districtsname || districtData;

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
      spa: 'spa',
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
      if (region === '지역을 선택하세요') region = '';
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
      { key: 'spa', name: '스파' },
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
async function initializeApp() {
  console.log('initializeApp 시작');

  // 업체 데이터 초기화 (shop-card-data.js 로드)
  await initializeShopData();
  console.log('initializeShopData 완료');

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
      spa: 'spa.html',
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
          for (const [dKey, dData] of Object.entries(value.districts)) {
            // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
            const dName =
              typeof dData === 'string' ? dData : dData.districtsname || dData;

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
            currentFilter === 'waxing' ||
            currentFilter === 'spa'
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

      if (!selectedRegion || !selectedDistrict) {
        return;
      }

      // 동/역 옵션 업데이트
      updateDongStationOptions(selectedRegion, selectedDistrict);

      // currentRegion과 currentDistrict 업데이트
      currentRegion = selectedRegion;
      currentDistrict = selectedDistrict;

      // 현재 페이지 파일명 가져오기
      const currentPath = window.location.pathname;
      const currentFileName = currentPath.split('/').pop();

      // districtMap에서 해당 지역과 구 찾기
      for (const [regionKey, regionData] of Object.entries(districtMap)) {
        if (regionData.regionName === selectedRegion) {
          // 구 키 찾기
          for (const [districtKey, districtData] of Object.entries(
            regionData.districts
          )) {
            // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
            const districtName =
              typeof districtData === 'string'
                ? districtData
                : districtData.districtsname;

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
                currentFilter === 'waxing' ||
                currentFilter === 'spa'
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

  // 동/역 선택 이벤트 리스너
  const dongStationSelect = document.getElementById('dongStationSelect');
  if (dongStationSelect) {
    dongStationSelect.addEventListener('change', function () {
      const selectedRegion = regionSelect ? regionSelect.value : '';
      const selectedDistrict = districtSelect ? districtSelect.value : '';
      const selectedDongStation = dongStationSelect.value;

      if (!selectedRegion || !selectedDistrict || !selectedDongStation) {
        return;
      }

      // districtMap에서 지역, 구, 동 키 찾기
      for (const [regionKey, regionData] of Object.entries(districtMap)) {
        if (regionData.regionName === selectedRegion) {
          for (const [districtKey, districtData] of Object.entries(
            regionData.districts
          )) {
            // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
            const districtName =
              typeof districtData === 'string'
                ? districtData
                : districtData.districtsname;

            if (districtName === selectedDistrict) {
              // 새 구조이고 dongStations가 있는 경우
              if (
                typeof districtData === 'object' &&
                districtData.dongStations
              ) {
                if (districtData.dongStations[selectedDongStation]) {
                  // HTML 파일로 이동: 예) jeju-si-nohyeong-dong.html
                  const targetPage = `${regionKey}-${districtKey}-${selectedDongStation}.html`;
                  window.location.href = targetPage;
                  return;
                }
              }
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

        // 현재 선택된 지역과 세부지역 가져오기 (선택 박스 우선)
        const regionSelect = document.getElementById('regionSelect');
        const districtSelect = document.getElementById('districtSelect');

        let region = currentRegion;
        let district = currentDistrict;

        // 선택 박스에서 값 가져오기 (우선순위)
        if (regionSelect && regionSelect.value) {
          region = regionSelect.value;
        }
        if (districtSelect && districtSelect.value) {
          district = districtSelect.value;
        }

        // districtMap에서 현재 지역과 구 찾기
        let regionKey = '';
        let districtKey = '';

        for (const [key, value] of Object.entries(districtMap)) {
          if (value.regionName === region) {
            regionKey = key;
            // 구 찾기
            for (const [dKey, dData] of Object.entries(value.districts)) {
              // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
              const dName =
                typeof dData === 'string'
                  ? dData
                  : dData.districtsname || dData;

              if (dName === district) {
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
            filter === 'waxing' ||
            filter === 'spa'
          ) {
            // 중앙화된 함수로 테마 페이지 URL 생성
            const targetThemePage = window.getThemePageUrl
              ? window.getThemePageUrl(filter, region, district)
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
            filter === 'waxing' ||
            filter === 'spa'
          ) {
            // 현재 선택된 지역과 세부지역 가져오기 (선택 박스 우선)
            const regionSelect = document.getElementById('regionSelect');
            const districtSelect = document.getElementById('districtSelect');

            let region = currentRegion;
            let district = currentDistrict;

            // 선택 박스에서 값 가져오기 (우선순위)
            if (regionSelect && regionSelect.value) {
              region = regionSelect.value;
            }
            if (districtSelect && districtSelect.value) {
              district = districtSelect.value;
            }

            // 중앙화된 함수로 테마 페이지 URL 생성
            const targetThemePage = window.getThemePageUrl
              ? window.getThemePageUrl(filter, region, district)
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
    const districtData = regionData.districts[parts[1]];
    // 새 구조 (객체) 또는 기존 구조 (문자열) 처리
    currentDistrict =
      typeof districtData === 'string'
        ? districtData
        : districtData?.districtsname || districtData || '';

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
        parts[1] === 'waxing' ||
        parts[1] === 'spa'
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
          parts[2] === 'waxing' ||
          parts[2] === 'spa')
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

        // currentDistrict가 객체인 경우 문자열로 변환
        const districtStr =
          typeof currentDistrict === 'string'
            ? currentDistrict
            : currentDistrict?.districtsname || currentDistrict || '';

        const optionExists = Array.from(districtSelect.options).some(
          (option) => option.value === districtStr
        );
        if (optionExists) {
          districtSelect.value = districtStr;
          districtSelect.disabled = false;
          districtSelect.style.opacity = '1';
          console.log('District select updated to:', districtSelect.value);

          // 동/역 옵션 업데이트
          if (regionSelect && regionSelect.value) {
            updateDongStationOptions(regionSelect.value, districtStr);
          }
        }
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
    'spa.html': 'spa',
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

  // nearby-shops-title 자동 설정 (다른 샵 보기 클릭 이벤트)
  if (typeof window.initializeNearbyShopsTitle === 'function') {
    window.initializeNearbyShopsTitle();
  }
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
            // 필터 섹션이 sticky로 고정되어 있으면: 헤더 높이 + 필터 섹션 높이
            const header = document.getElementById('mainHeader');
            const headerHeight = header ? header.offsetHeight : 80;
            themeFilterSection.style.top = `${
              headerHeight + filterSectionHeight
            }px`;
          } else {
            // 필터 섹션이 sticky가 아니면: 필터 섹션의 viewport 기준 bottom 위치
            const filterSectionBottom =
              filterSectionRect.top + filterSectionHeight;
            themeFilterSection.style.top = `${filterSectionBottom}px`;
          }
        }, 10);
      } else {
        // 필터 섹션을 찾을 수 없는 경우 기본값 사용
        const header = document.getElementById('mainHeader');
        const headerHeight = header ? header.offsetHeight : 80;
        const defaultFilterHeight = 60;
        themeFilterSection.style.top = `${
          headerHeight + defaultFilterHeight
        }px`;
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
    currentPage === 'waxing' ||
    currentPage === 'spa'
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
    } else if (filter === 'spa') {
      return 'spa.html';
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
    district === 'waxing' ||
    district === 'spa'
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
    spa: '스파',
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
      title = themeName;
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
      spa: '스파',
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
        title = filterName;
      }
    } else {
      // 일반 마사지: 구가 있으면 구만 표시, 없으면 지역 표시
      if (currentDistrict) {
        title = `${currentDistrict} ${filterName}`;
      } else if (currentRegion) {
        title = `${currentRegion} ${filterName}`;
      } else {
        title = filterName;
      }
    }
  } else {
    // 전체인 경우
    const isMainPage =
      window.location.pathname.includes('index.html') ||
      window.location.pathname === '/' ||
      window.location.pathname === '';

    // spa.html 같은 경우 currentFilter가 설정되지 않았을 수 있으므로 파일명으로 확인
    const fileName = window.location.pathname.split('/').pop();
    if (fileName === 'spa.html') {
      // window.currentFilter도 확인
      if (window.currentFilter === 'spa' || !currentFilter) {
        title = '스파';
      } else if (currentDistrict) {
        title = `${currentDistrict} 마사지사이트`;
      } else if (currentRegion) {
        title = `${currentRegion} 마사지사이트`;
      } else {
        title = '스파';
      }
    } else if (currentDistrict) {
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

  // title 뒤에 " 추천 BEST 샵" 추가
  if (title) {
    resultsTitle.textContent = `${title} 추천 BEST 샵`;
  } else {
    resultsTitle.textContent = title;
  }
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
          // 현재 선택된 지역과 세부지역 가져오기 (선택 박스 우선)
          const regionSelect = document.getElementById('regionSelect');
          const districtSelect = document.getElementById('districtSelect');

          let region = currentRegion;
          let district = currentDistrict;

          // 선택 박스에서 값 가져오기 (우선순위)
          if (regionSelect && regionSelect.value) {
            region = regionSelect.value;
          }
          if (districtSelect && districtSelect.value) {
            district = districtSelect.value;
          }

          // 중앙화된 함수로 테마 페이지 URL 생성
          const targetPage = window.getThemePageUrl
            ? window.getThemePageUrl(selectedTheme, region, district)
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
  let fileName = window.location.pathname.split('/').pop().replace('.html', '');

  // company- 접두사 제거 (company-jeju-massage-mz.html -> jeju-massage-mz)
  if (fileName.startsWith('company-')) {
    fileName = fileName.replace('company-', '');
  }

  const parts = fileName.split('-');

  // window.districtMap 사용 (중앙화된 지역 매핑)
  const districtMap = window.districtMap || {};

  // 지역 추출 (영어 키 -> 한글 지역명)
  let region = '';
  if (parts[0] && districtMap[parts[0]]) {
    region = districtMap[parts[0]].regionName;
  }

  // 백업: JSON-LD 스키마에서 지역 정보 추출 시도
  if (!region) {
    try {
      const jsonLdScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (jsonLdScript) {
        const jsonLd = JSON.parse(jsonLdScript.textContent);
        if (jsonLd.address && jsonLd.address.addressRegion) {
          const addressRegion = jsonLd.address.addressRegion;
          // "제주특별자치도" -> "제주" 매핑
          for (const [key, value] of Object.entries(districtMap)) {
            if (
              value.regionName === addressRegion ||
              addressRegion.includes(value.regionName)
            ) {
              region = value.regionName;
              break;
            }
          }
        }
      }
    } catch (e) {
      console.warn('JSON-LD 파싱 실패:', e);
    }
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

// 정적 HTML 카드 정렬 (페이지 로드 시) - 한 번만 실행
function initStaticCardSorting() {
  // 이미 정렬되었으면 건너뛰기
  if (staticCardsSorted) {
    return;
  }

  // massageList가 있고 정적 카드가 있는지 확인
  const massageList = document.getElementById('massageList');
  if (!massageList) {
    return;
  }

  if (massageList.children.length === 0) {
    return;
  }

  // 정적 카드가 있는지 확인
  const hasStaticCards = Array.from(massageList.children).some(
    (child) =>
      (child.classList && child.classList.contains('massage-card')) ||
      (child.querySelector && child.querySelector('.massage-card')) ||
      (child.tagName === 'A' && child.querySelector('.massage-card'))
  );

  if (hasStaticCards) {
    console.log('정적 HTML 카드 발견, 재정렬 시작...');
    sortStaticCards();
  }
}

// 즉시 실행 (스크립트 로드 시점에 실행) - requestAnimationFrame으로 최대한 빠르게
(function () {
  function runSorting() {
    if (document.readyState === 'loading') {
      // DOM이 아직 로드 중이면 DOMContentLoaded 대기
      document.addEventListener('DOMContentLoaded', function () {
        // requestAnimationFrame으로 즉시 실행 (지연 없이)
        requestAnimationFrame(function () {
          initStaticCardSorting();
        });
      });
    } else {
      // DOM이 이미 로드되었으면 requestAnimationFrame으로 즉시 실행
      requestAnimationFrame(function () {
        initStaticCardSorting();
      });
    }
  }

  // 스크립트 로드 즉시 실행 시도
  runSorting();

  // DOMContentLoaded가 이미 발생했을 수 있으므로 즉시 실행도 시도
  if (document.readyState !== 'loading') {
    requestAnimationFrame(function () {
      initStaticCardSorting();
    });
  }
})();

// DOMContentLoaded에서도 실행 (안전장치) - requestAnimationFrame 사용
document.addEventListener('DOMContentLoaded', function () {
  // 이미 정렬되었으면 건너뛰기
  if (!staticCardsSorted) {
    requestAnimationFrame(function () {
      initStaticCardSorting();
    });
  }
});

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

// header-search-btn 클릭 시 검색 박스로 스크롤 및 포커스
function bindHeaderSearchButton() {
  const button = document.getElementById('header-search-btn');
  if (button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToSearchBox();
    });
  }
}

// 검색 박스로 스크롤하는 함수
function scrollToSearchBox() {
  const searchBox =
    document.getElementById('text-search-box') ||
    document.querySelector('.text-search-box');

  if (searchBox) {
    // 검색 박스 표시
    searchBox.style.display =
      getComputedStyle(searchBox).display === 'none' ? 'flex' : '';

    const searchInput = document.getElementById('shopSearchInput');
    if (searchInput) {
      // 포커스 설정 (스크롤 방지 옵션)
      const focusOptions = { preventScroll: true };
      try {
        searchInput.focus(focusOptions);
      } catch (error) {
        searchInput.focus();
      }

      // 커서를 입력 필드 끝으로 이동
      if (typeof searchInput.setSelectionRange === 'function') {
        const length = searchInput.value.length;
        searchInput.setSelectionRange(length, length);
      }
    }

    // 검색 박스 위치로 스크롤
    requestAnimationFrame(() => {
      const screenWidth = window.innerWidth;
      let headerHeight = 0;
      let searchBoxTop = 0;

      if (screenWidth >= 2500) {
        const header = document.getElementById('mainHeader');
        if (header) {
          headerHeight = header.offsetHeight;
        }
        const rect = searchBox.getBoundingClientRect();
        searchBoxTop = rect.top;
      }

      requestAnimationFrame(() => {
        if (screenWidth >= 2500) {
          const targetTop =
            window.pageYOffset + searchBoxTop - headerHeight - 20;
          window.scrollTo({
            top: targetTop > 0 ? targetTop : 0,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          searchBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }
}

// filter-section과 filter-container를 header 아래에 고정하는 함수
function updateFilterStickyPosition() {
  const header = document.getElementById('mainHeader');
  const filterSection = document.querySelector('.filter-section');
  const filterContainer = document.querySelector('.filter-container');

  if (header) {
    const headerHeight = header.offsetHeight;

    // CSS 변수로 header 높이 설정
    document.documentElement.style.setProperty(
      '--header-height',
      `${headerHeight}px`
    );

    // filter-section을 header 바로 아래에 고정
    if (filterSection) {
      filterSection.style.top = `${headerHeight}px`;

      // filter-section 높이를 CSS 변수로 설정 (theme-filter-section 위치 계산용)
      const filterSectionHeight = filterSection.offsetHeight;
      document.documentElement.style.setProperty(
        '--filter-section-height',
        `${filterSectionHeight}px`
      );
    }

    // filter-container를 header 바로 아래에 고정 (filter-section과 같은 위치)
    if (filterContainer) {
      filterContainer.style.top = `${headerHeight}px`;
    }
  }
}

// DOMContentLoaded 시 header-search-btn 바인딩 및 filter 위치 업데이트
document.addEventListener('DOMContentLoaded', function () {
  bindHeaderSearchButton();
  updateFilterStickyPosition();

  // 스크롤 및 리사이즈 시 filter 위치 업데이트
  window.addEventListener('scroll', updateFilterStickyPosition);
  window.addEventListener('resize', updateFilterStickyPosition);
});
