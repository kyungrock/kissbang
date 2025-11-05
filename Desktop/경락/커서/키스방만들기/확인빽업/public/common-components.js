// 공통 컴포넌트 관리 시스템
// 이 파일 하나로 헤더, 햄버거 메뉴, 인증을 모두 관리합니다

// ===========================================
// 인증 관리 시스템
// ===========================================
class AuthManager {
  constructor() {
    this.users = [];
    this.currentUser = null;
    this.storageKey = 'kissbang_users';
    this.sessionKey = 'kissbang_session';
    this.init();
  }

  // 초기화
  async init() {
    await this.loadUsers();
    this.checkSession();
  }

  // 사용자 데이터 로드
  async loadUsers() {
    try {
      const storedUsers = localStorage.getItem(this.storageKey);
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      } else {
        this.users = [
          {
            id: 'admin-001',
            username: 'admin',
            email: 'admin@kissbang.com',
            password: 'admin123!',
            role: 'admin',
            name: '관리자',
            phone: '010-0000-0000',
            profileImage: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isActive: true,
            lastLogin: null,
          },
        ];
        this.saveUsers();
      }
    } catch (error) {
      console.error('사용자 데이터 로드 실패:', error);
      this.users = [];
    }
  }

  // 사용자 데이터 저장
  saveUsers() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.users));
    } catch (error) {
      console.error('사용자 데이터 저장 실패:', error);
    }
  }

  // 세션 확인
  checkSession() {
    try {
      const session = localStorage.getItem(this.sessionKey);
      if (session) {
        const sessionData = JSON.parse(session);
        const user = this.users.find((u) => u.id === sessionData.userId);
        if (user && user.isActive) {
          this.currentUser = user;
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('세션 확인 실패:', error);
      return false;
    }
  }

  // 로그인
  login(username, password) {
    try {
      const user = this.users.find(
        (u) => (u.username === username || u.email === username) && u.isActive
      );

      if (!user) {
        throw new Error('사용자를 찾을 수 없습니다.');
      }

      if (user.password !== password) {
        throw new Error('비밀번호가 올바르지 않습니다.');
      }

      user.lastLogin = new Date().toISOString();
      this.currentUser = user;

      localStorage.setItem(
        this.sessionKey,
        JSON.stringify({
          userId: user.id,
          username: user.username,
          role: user.role,
          loginTime: new Date().toISOString(),
        })
      );

      this.saveUsers();
      return { success: true, user: this.getSafeUser(user) };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // 회원가입
  signup(userData) {
    try {
      this.validateSignupData(userData);

      const existingUser = this.users.find(
        (u) => u.username === userData.username || u.email === userData.email
      );

      if (existingUser) {
        throw new Error('이미 사용 중인 아이디 또는 이메일입니다.');
      }

      const newUser = {
        id: `user-${Date.now()}`,
        username: userData.username,
        email: userData.email,
        password: userData.password,
        role: 'user',
        name: userData.name,
        phone: userData.phone,
        profileImage: userData.profileImage || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true,
        lastLogin: null,
      };

      this.users.push(newUser);
      this.saveUsers();

      return { success: true, user: this.getSafeUser(newUser) };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // 로그아웃
  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.sessionKey);
  }

  // 현재 사용자 정보 가져오기
  getCurrentUser() {
    return this.currentUser ? this.getSafeUser(this.currentUser) : null;
  }

  // 안전한 사용자 정보 (비밀번호 제외)
  getSafeUser(user) {
    const { password, ...safeUser } = user;
    return safeUser;
  }

  // 회원가입 데이터 유효성 검사
  validateSignupData(data) {
    if (!data.username || data.username.length < 4) {
      throw new Error('아이디는 4자 이상이어야 합니다.');
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      throw new Error('올바른 이메일 형식이 아닙니다.');
    }

    if (!data.password || data.password.length < 6) {
      throw new Error('비밀번호는 6자 이상이어야 합니다.');
    }

    if (!data.name || data.name.length < 2) {
      throw new Error('이름은 2자 이상이어야 합니다.');
    }

    if (!data.phone || !this.isValidPhone(data.phone)) {
      throw new Error('올바른 전화번호 형식이 아닙니다.');
    }

    return true;
  }

  // 이메일 형식 검사
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 전화번호 형식 검사
  isValidPhone(phone) {
    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    return phoneRegex.test(phone.replace(/-/g, ''));
  }

  // 관리자 권한 확인
  isAdmin() {
    return this.currentUser && this.currentUser.role === 'admin';
  }

  // 로그인 상태 확인
  isLoggedIn() {
    return this.currentUser !== null;
  }
}

// 전역 인스턴스 생성
const authManager = new AuthManager();

// ===========================================
// 헤더 컴포넌트 관리
// ===========================================

// 헤더 컴포넌트 로드 함수
function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    // 헤더 CSS 스타일 추가
    const headerStyle = document.createElement('style');
    headerStyle.textContent = `
      /* 헤더 스타일 */
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .header-content {
        max-width: 490px;
        margin: 0 auto;
        padding: 5px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
      }

      @media (max-width: 480px) {
        .header-content {
          padding: 5px 15px;
        }
      }

      @media (max-width: 320px) {
        .header-content {
          padding: 5px 10px;
        }
      }

      .logo {
        font-size: 24px;
        font-weight: 700;
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .logo:hover {
        transform: scale(1.05);
      }

      .logo i {
        font-size: 28px;
        color: #ffd700;
      }

      .search-toggle {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid white;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
      }

      .search-toggle:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.05);
      }

      /* 스크롤 시 헤더 스타일 변경 */
      .header.scrolled {
        background: rgba(102, 126, 234, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
      }

      /* body에 패딩 추가하여 헤더 높이만큼 공간 확보 */
      body {
        padding-top: 75px;
      }
    `;
    document.head.appendChild(headerStyle);

    // 헤더 HTML 직접 삽입
    headerContainer.innerHTML = `
      <header class="header" id="mainHeader">
        <div class="header-content">
          <div
            class="logo"
            onclick="window.location.href='index.html'"
            style="cursor: pointer"
          >
            <i class="fas fa-spa"></i>
            마사지천국
          </div>
          <div style="display: flex; align-items: center; gap: 15px">
            <div id="userInfoSection" style="display: none">
              <span
                id="userName"
                style="color: white; font-weight: 600; margin-right: 10px"
              ></span>
              <button
                onclick="logout()"
                style="
                  background: rgba(255, 255, 255, 0.2);
                  color: white;
                  border: 1px solid white;
                  padding: 8px 16px;
                  border-radius: 6px;
                  cursor: pointer;
                  font-weight: 600;
                "
              >
                <i class="fas fa-sign-out-alt"></i> 로그아웃
              </button>
            </div>
            <!-- 햄버거 메뉴 버튼 -->
            <button
              class="hamburger-btn"
              onclick="toggleSideMenu()"
              style="margin-left: 10px"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="search-toggle" id="searchToggle">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </header>
    `;

    // 스크롤 이벤트 리스너 추가
    window.addEventListener(
      'scroll',
      function () {
        const header = document.getElementById('mainHeader');
        if (header) {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }

        // 가로 스크롤 방지
        if (window.scrollX !== 0) {
          window.scrollTo(0, window.scrollY);
        }

        // 310px 이하에서 search-section 위치 고정
        const isVerySmallScreen = window.innerWidth <= 310;
        if (isVerySmallScreen) {
          const searchSection = document.querySelector('.search-section');
          if (searchSection) {
            searchSection.style.left = '0';
            searchSection.style.right = '0';
            searchSection.style.width = '100%';
            searchSection.style.maxWidth = '100%';
            searchSection.style.minWidth = '100%';
            searchSection.style.transform = 'translateX(0)';
            searchSection.style.marginLeft = '0';
            searchSection.style.marginRight = '0';
            searchSection.style.boxSizing = 'border-box';
            searchSection.style.position = 'relative';

            const searchContainer =
              searchSection.querySelector('.search-container');
            if (searchContainer) {
              searchContainer.style.left = '0';
              searchContainer.style.right = '0';
              searchContainer.style.width = '100%';
              searchContainer.style.maxWidth = '100%';
              searchContainer.style.minWidth = '100%';
              searchContainer.style.transform = 'translateX(0)';
              searchContainer.style.marginLeft = '0';
              searchContainer.style.marginRight = '0';
              searchContainer.style.boxSizing = 'border-box';
            }
          }
        }
      },
      { passive: true }
    );

    // 검색 토글 버튼 이벤트 리스너 추가
    const searchToggle = document.getElementById('searchToggle');
    const searchSection = document.querySelector('.search-section');
    const shopSearchInput = document.getElementById('shopSearchInput');

    if (searchToggle) {
      searchToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // 가로 스크롤 방지
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';

        // 검색 섹션이 있으면 스크롤
        if (searchSection) {
          // 헤더 높이를 고려하여 스크롤 위치 계산
          const header = document.getElementById('mainHeader');
          const headerHeight = header ? header.offsetHeight : 75;

          // 현재 스크롤 위치와 viewport 정보 가져오기
          const currentScrollY =
            window.pageYOffset || document.documentElement.scrollTop;
          const searchSectionRect = searchSection.getBoundingClientRect();

          // 검색 섹션의 절대 위치 계산
          const searchSectionTop = searchSectionRect.top + currentScrollY;

          // 목표 스크롤 위치 (헤더 높이 + 여백 고려)
          let targetScrollTop = searchSectionTop - headerHeight - 10;

          // 음수 값 방지 (최소값: 0)
          targetScrollTop = Math.max(0, targetScrollTop);

          // 작은 화면에서는 더 여유 있게 계산
          const isSmallScreen = window.innerWidth <= 480;
          const isVerySmallScreen = window.innerWidth <= 310;

          if (isVerySmallScreen) {
            // 310px 이하에서는 스크롤 위치를 최소화하고 강제로 왼쪽 정렬
            targetScrollTop = Math.max(0, searchSectionTop - headerHeight);

            // search-section 강제 위치 고정
            if (searchSection) {
              searchSection.style.left = '0';
              searchSection.style.right = '0';
              searchSection.style.width = '100%';
              searchSection.style.maxWidth = '100%';
              searchSection.style.minWidth = '100%';
              searchSection.style.transform = 'translateX(0)';
              searchSection.style.margin = '0';
              searchSection.style.marginLeft = '0';
              searchSection.style.marginRight = '0';
              searchSection.style.paddingLeft = '8px';
              searchSection.style.paddingRight = '8px';
              searchSection.style.boxSizing = 'border-box';
              searchSection.style.position = 'relative';

              // search-container도 함께 고정
              const searchContainer =
                searchSection.querySelector('.search-container');
              if (searchContainer) {
                searchContainer.style.left = '0';
                searchContainer.style.right = '0';
                searchContainer.style.width = '100%';
                searchContainer.style.maxWidth = '100%';
                searchContainer.style.minWidth = '100%';
                searchContainer.style.transform = 'translateX(0)';
                searchContainer.style.marginLeft = '0';
                searchContainer.style.marginRight = '0';
                searchContainer.style.boxSizing = 'border-box';
              }
            }
          } else if (isSmallScreen) {
            targetScrollTop = Math.max(0, searchSectionTop - headerHeight - 5);
          }

          // 스크롤 실행 (가로 스크롤 방지)
          window.scrollTo({
            top: targetScrollTop,
            left: 0,
            behavior: 'smooth',
          });

          // 스크롤 완료 후 확인 및 가로 스크롤 재방지
          setTimeout(() => {
            // 가로 스크롤 강제로 0으로 고정
            if (window.scrollX !== 0) {
              window.scrollTo(0, window.scrollY);
            }
            document.body.scrollLeft = 0;
            document.documentElement.scrollLeft = 0;

            // 310px 이하에서 추가 위치 고정
            const isVerySmallScreen = window.innerWidth <= 310;
            if (isVerySmallScreen && searchSection) {
              searchSection.style.left = '0';
              searchSection.style.right = '0';
              searchSection.style.width = '100%';
              searchSection.style.maxWidth = '100%';
              searchSection.style.minWidth = '100%';
              searchSection.style.transform = 'translateX(0)';
              searchSection.style.marginLeft = '0';
              searchSection.style.marginRight = '0';
              searchSection.style.boxSizing = 'border-box';
              searchSection.style.position = 'relative';

              // 모든 자식 요소도 위치 고정
              const searchContainer =
                searchSection.querySelector('.search-container');
              if (searchContainer) {
                searchContainer.style.left = '0';
                searchContainer.style.right = '0';
                searchContainer.style.width = '100%';
                searchContainer.style.maxWidth = '100%';
                searchContainer.style.minWidth = '100%';
                searchContainer.style.transform = 'translateX(0)';
                searchContainer.style.marginLeft = '0';
                searchContainer.style.marginRight = '0';
                searchContainer.style.boxSizing = 'border-box';
              }

              // text-search-box도 고정
              const textSearchBox =
                searchSection.querySelector('.text-search-box');
              if (textSearchBox) {
                textSearchBox.style.width = '100%';
                textSearchBox.style.maxWidth = '100%';
                textSearchBox.style.transform = 'translateX(0)';
                textSearchBox.style.marginLeft = '0';
                textSearchBox.style.marginRight = '0';
                textSearchBox.style.boxSizing = 'border-box';
              }
            }

            // 입력창에 포커스
            if (shopSearchInput) {
              shopSearchInput.focus();
            }
          }, 600);
        } else {
          // 검색 섹션이 없으면 바로 포커스
          if (shopSearchInput) {
            shopSearchInput.focus();
          }
        }
      });
    }

    initializeAuth();
    console.log('헤더 컴포넌트 로드 완료');
  }
}

// 사용자 인증 상태 초기화
function initializeAuth() {
  if (typeof authManager !== 'undefined' && authManager.isLoggedIn()) {
    const user = authManager.getCurrentUser();
    const userInfoSection = document.getElementById('userInfoSection');
    const userName = document.getElementById('userName');

    if (userInfoSection && userName) {
      userInfoSection.style.display = 'flex';
      userName.textContent = user.name + '님';

      if (user.role === 'admin') {
        const adminBtn = document.createElement('button');
        adminBtn.innerHTML = '<i class="fas fa-cog"></i> 관리자';
        adminBtn.onclick = () => (window.location.href = 'admin.html');
        adminBtn.style.cssText =
          'background: rgba(255,255,255,0.2); color: white; border: 1px solid white; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; margin-right: 10px;';
        userInfoSection.insertBefore(adminBtn, userInfoSection.firstChild);
      }
    }
  } else {
    const userInfoSection = document.getElementById('userInfoSection');
    if (userInfoSection) {
      userInfoSection.style.display = 'none';
    }
  }
}

// 로그아웃 함수
function logout() {
  if (confirm('로그아웃 하시겠습니까?')) {
    if (typeof authManager !== 'undefined') {
      authManager.logout();
    }
    location.reload();
  }
}

// ===========================================
// 햄버거 메뉴 컴포넌트 관리
// ===========================================

// 햄버거 메뉴 컴포넌트 로드 함수
function loadHamburgerMenu() {
  const hamburgerContainer = document.getElementById(
    'hamburger-menu-container'
  );
  if (hamburgerContainer) {
    // CSS 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
      /* 햄버거 메뉴 스타일 */
      .hamburger-btn {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid white;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
      }

      .hamburger-btn:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      .side-menu {
        position: fixed;
        top: 0;
        right: -350px;
        width: 350px;
        height: 100vh;
        background: white;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease;
        z-index: 10000;
        overflow-y: auto;
      }

      .side-menu.active {
        right: 0;
      }

      .side-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 9999;
      }

      .side-menu-overlay.active {
        display: block;
      }

      .side-menu-header {
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .side-menu-close {
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 5px;
      }

      .side-menu-section {
        padding: 15px 0;
        border-bottom: 1px solid #eee;
      }

      .side-menu-section-title {
        padding: 0 20px 10px 20px;
        font-size: 12px;
        color: #999;
        font-weight: 600;
        text-transform: uppercase;
      }

      .side-menu-item {
        padding: 12px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: background 0.3s;
        color: #333;
        text-decoration: none;
      }

      .side-menu-item:hover {
        background: #f8f9fa;
      }

      .side-menu-item-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .side-menu-item i {
        width: 20px;
        color: #667eea;
      }
    `;
    document.head.appendChild(style);

    // 햄버거 메뉴 HTML 직접 삽입
    hamburgerContainer.innerHTML = `
      <!-- 햄버거 메뉴 오버레이 -->
      <div
        class="side-menu-overlay"
        id="sideMenuOverlay"
        onclick="toggleSideMenu()"
      ></div>

      <!-- 사이드 메뉴 -->
      <div class="side-menu" id="sideMenu">
        <!-- 메뉴 헤더 -->
        <div class="side-menu-header">
          <h2 style="margin: 0; font-size: 20px"><i class="fas fa-spa"></i> 메뉴</h2>
          <button class="side-menu-close" onclick="toggleSideMenu()">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- 공지사항 / 이벤트 -->
        <div class="side-menu-section">
          <div class="side-menu-section-title">※ 공지사항 / 이벤트</div>
          <div class="side-menu-item" onclick="showNotice()">
            <div class="side-menu-item-left">
              <i class="fas fa-bullhorn"></i>
              <span>공지사항</span>
            </div>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="side-menu-item" onclick="showEvent()">
            <div class="side-menu-item-left">
              <i class="fas fa-gift"></i>
              <span>이벤트</span>
            </div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    `;
    console.log('햄버거 메뉴 컴포넌트 로드 완료');
  }
}

// ===========================================
// 햄버거 메뉴 공통 함수들
// ===========================================

// 햄버거 메뉴 토글
function toggleSideMenu() {
  const menu = document.getElementById('sideMenu');
  const overlay = document.getElementById('sideMenuOverlay');

  if (menu && overlay) {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    console.log('햄버거 메뉴 토글됨');
  } else {
    console.log('메뉴 요소를 찾을 수 없습니다');
  }
}

// 공지사항
function showNotice() {
  console.log('공지사항 클릭');
  window.location.href = 'notice.html';
}

// 이벤트
function showEvent() {
  console.log('이벤트 클릭');
  window.location.href = 'event.html';
}

// 방문후기
function showReviews() {
  window.location.href = 'reviews.html';
}

// 자유게시판
function showFreeBoard() {
  window.location.href = 'freeboard.html';
}

// 제휴문의 폼 표시
function showPartnershipForm() {
  window.location.href = 'partnership.html';
}

// 관심업체 보기
function showFavorites() {
  window.location.href = 'favorites.html';
}

// ===========================================
// 페이지 로드 시 초기화
// ===========================================

document.addEventListener('DOMContentLoaded', function () {
  loadHeader();
  loadHamburgerMenu();
});

// 컴포넌트 업데이트 함수들 (필요시 수동 호출)
function updateHeader() {
  loadHeader();
}

function updateHamburgerMenu() {
  loadHamburgerMenu();
}

console.log('공통 컴포넌트 시스템 로드 완료');
