// 인증 관리 시스템
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
      // LocalStorage에서 사용자 데이터 로드
      const storedUsers = localStorage.getItem(this.storageKey);
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      } else {
        // 초기 admin 계정 설정
        this.users = [
          {
            id: 'admin-001',
            username: 'admin',
            email: 'admin@kissbang.com',
            password: 'admin123!', // 실제로는 해시화되어야 함
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

      // 비밀번호 확인 (실제로는 bcrypt로 비교해야 함)
      if (user.password !== password) {
        throw new Error('비밀번호가 올바르지 않습니다.');
      }

      // 로그인 성공
      user.lastLogin = new Date().toISOString();
      this.currentUser = user;

      // 세션 저장
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
      // 유효성 검사
      this.validateSignupData(userData);

      // 중복 확인
      const existingUser = this.users.find(
        (u) => u.username === userData.username || u.email === userData.email
      );

      if (existingUser) {
        throw new Error('이미 사용 중인 아이디 또는 이메일입니다.');
      }

      // 새 사용자 생성
      const newUser = {
        id: `user-${Date.now()}`,
        username: userData.username,
        email: userData.email,
        password: userData.password, // 실제로는 해시화해야 함
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

  // 모든 사용자 목록 가져오기 (관리자 전용)
  getAllUsers() {
    if (!this.isAdmin()) {
      throw new Error('관리자 권한이 필요합니다.');
    }
    return this.users.map((user) => this.getSafeUser(user));
  }

  // 사용자 정보 수정 (관리자 전용)
  updateUser(userId, updates) {
    if (!this.isAdmin()) {
      throw new Error('관리자 권한이 필요합니다.');
    }

    const userIndex = this.users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    // 비밀번호가 변경되는 경우
    if (updates.password) {
      // 실제로는 해시화해야 함
      this.users[userIndex].password = updates.password;
    }

    // 다른 필드 업데이트
    Object.keys(updates).forEach((key) => {
      if (key !== 'password' && key !== 'id' && key !== 'createdAt') {
        this.users[userIndex][key] = updates[key];
      }
    });

    this.users[userIndex].updatedAt = new Date().toISOString();
    this.saveUsers();

    return { success: true, user: this.getSafeUser(this.users[userIndex]) };
  }

  // 사용자 삭제 (관리자 전용)
  deleteUser(userId) {
    if (!this.isAdmin()) {
      throw new Error('관리자 권한이 필요합니다.');
    }

    // admin 계정은 삭제할 수 없음
    const user = this.users.find((u) => u.id === userId);
    if (user && user.role === 'admin') {
      throw new Error('관리자 계정은 삭제할 수 없습니다.');
    }

    const initialLength = this.users.length;
    this.users = this.users.filter((u) => u.id !== userId);

    if (this.users.length === initialLength) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    this.saveUsers();
    return { success: true };
  }

  // 사용자 활성/비활성 토글 (관리자 전용)
  toggleUserStatus(userId) {
    if (!this.isAdmin()) {
      throw new Error('관리자 권한이 필요합니다.');
    }

    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    // admin 계정은 비활성화할 수 없음
    if (user.role === 'admin') {
      throw new Error('관리자 계정은 비활성화할 수 없습니다.');
    }

    user.isActive = !user.isActive;
    user.updatedAt = new Date().toISOString();
    this.saveUsers();

    return { success: true, user: this.getSafeUser(user) };
  }

  // 통계 정보 가져오기 (관리자 전용)
  getStatistics() {
    if (!this.isAdmin()) {
      throw new Error('관리자 권한이 필요합니다.');
    }

    const totalUsers = this.users.length;
    const activeUsers = this.users.filter((u) => u.isActive).length;
    const adminUsers = this.users.filter((u) => u.role === 'admin').length;
    const regularUsers = this.users.filter((u) => u.role === 'user').length;

    // 최근 가입자 (최근 7일)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentUsers = this.users.filter(
      (u) => new Date(u.createdAt) > sevenDaysAgo
    ).length;

    // 최근 로그인 사용자
    const recentLogins = this.users.filter(
      (u) => u.lastLogin && new Date(u.lastLogin) > sevenDaysAgo
    ).length;

    return {
      totalUsers,
      activeUsers,
      inactiveUsers: totalUsers - activeUsers,
      adminUsers,
      regularUsers,
      recentUsers,
      recentLogins,
    };
  }
}

// 전역 인스턴스 생성
const authManager = new AuthManager();
