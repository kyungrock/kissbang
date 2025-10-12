// API 기반 인증 시스템 (MongoDB 백엔드 사용)
class ApiAuthManager {
  constructor() {
    this.apiUrl = window.location.origin;
    this.currentUser = null;
    this.init();
  }

  // 초기화
  async init() {
    await this.checkSession();
  }

  // 세션 확인 (쿠키 기반)
  async checkSession() {
    try {
      const response = await fetch(`${this.apiUrl}/api/auth/me`, {
        method: 'GET',
        credentials: 'include', // 쿠키 포함
      });

      if (response.ok) {
        const data = await response.json();
        this.currentUser = data.user;
        return true;
      }
      return false;
    } catch (error) {
      console.error('세션 확인 실패:', error);
      return false;
    }
  }

  // 로그인
  async login(username, password) {
    try {
      const response = await fetch(`${this.apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        this.currentUser = data.user;
        // localStorage에도 저장 (하위 호환성)
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        return { success: true, user: data.user };
      } else {
        return { success: false, error: data.message || '로그인 실패' };
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      // 백엔드 실패 시 localStorage 폴백
      return this.loginLocalStorage(username, password);
    }
  }

  // localStorage 폴백 로그인
  loginLocalStorage(username, password) {
    try {
      const users = JSON.parse(localStorage.getItem('kissbang_users') || '[]');
      const user = users.find(
        (u) =>
          (u.username === username || u.email === username) &&
          u.isActive &&
          u.password === password
      );

      if (user) {
        user.lastLogin = new Date().toISOString();
        localStorage.setItem('kissbang_users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem(
          'kissbang_session',
          JSON.stringify({ userId: user.id, loginTime: Date.now() })
        );
        this.currentUser = user;
        return { success: true, user: user };
      }

      return { success: false, error: '사용자를 찾을 수 없습니다.' };
    } catch (error) {
      return { success: false, error: '로그인 처리 중 오류가 발생했습니다.' };
    }
  }

  // 회원가입
  async register(userData) {
    try {
      const response = await fetch(`${this.apiUrl}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, user: data.user };
      } else {
        return { success: false, error: data.message || '회원가입 실패' };
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      // 백엔드 실패 시 localStorage 폴백
      return this.registerLocalStorage(userData);
    }
  }

  // localStorage 폴백 회원가입
  registerLocalStorage(userData) {
    try {
      const users = JSON.parse(localStorage.getItem('kissbang_users') || '[]');

      // 중복 확인
      if (users.find((u) => u.username === userData.username)) {
        return { success: false, error: '이미 사용 중인 아이디입니다.' };
      }
      if (users.find((u) => u.email === userData.email)) {
        return { success: false, error: '이미 사용 중인 이메일입니다.' };
      }

      const newUser = {
        id: 'user-' + Date.now(),
        username: userData.username,
        email: userData.email,
        password: userData.password,
        name: userData.name,
        phone: userData.phone,
        profileImage: userData.profileImage || '',
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true,
        lastLogin: null,
      };

      users.push(newUser);
      localStorage.setItem('kissbang_users', JSON.stringify(users));

      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: '회원가입 처리 중 오류가 발생했습니다.' };
    }
  }

  // 로그아웃
  async logout() {
    try {
      await fetch(`${this.apiUrl}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }

    // localStorage 정리
    localStorage.removeItem('currentUser');
    localStorage.removeItem('kissbang_session');
    this.currentUser = null;
  }

  // 현재 사용자 가져오기
  getCurrentUser() {
    // 먼저 메모리에서
    if (this.currentUser) {
      return this.currentUser;
    }

    // localStorage에서 (하위 호환성)
    try {
      const user = localStorage.getItem('currentUser');
      if (user) {
        this.currentUser = JSON.parse(user);
        return this.currentUser;
      }
    } catch (error) {
      console.error('사용자 정보 로드 실패:', error);
    }

    return null;
  }

  // 관리자 확인
  isAdmin() {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  }

  // 로그인 확인
  isLoggedIn() {
    return this.getCurrentUser() !== null;
  }

  // 하위 호환성을 위한 기존 메서드들
  getAllUsers() {
    return JSON.parse(localStorage.getItem('kissbang_users') || '[]');
  }

  updateUser(userId, updates) {
    const users = this.getAllUsers();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    users[userIndex] = { ...users[userIndex], ...updates, updatedAt: new Date().toISOString() };
    localStorage.setItem('kissbang_users', JSON.stringify(users));

    // 현재 사용자 업데이트
    if (this.currentUser && this.currentUser.id === userId) {
      this.currentUser = users[userIndex];
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  }

  toggleUserStatus(userId) {
    const users = this.getAllUsers();
    const user = users.find((u) => u.id === userId);

    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    user.isActive = !user.isActive;
    localStorage.setItem('kissbang_users', JSON.stringify(users));
  }

  deleteUser(userId) {
    let users = this.getAllUsers();
    users = users.filter((u) => u.id !== userId);
    localStorage.setItem('kissbang_users', JSON.stringify(users));
  }

  getStatistics() {
    const users = this.getAllUsers();
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

    return {
      totalUsers: users.length,
      activeUsers: users.filter((u) => u.isActive).length,
      recentUsers: users.filter(
        (u) => new Date(u.createdAt).getTime() > sevenDaysAgo
      ).length,
      recentLogins: users.filter(
        (u) => u.lastLogin && new Date(u.lastLogin).getTime() > sevenDaysAgo
      ).length,
    };
  }
}

// 전역 인스턴스 생성
const authManager = new ApiAuthManager();

// 하위 호환성을 위해 전역으로 노출
window.authManager = authManager;

