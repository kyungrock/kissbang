# MongoDB 동기화 완전 해결 가이드

## 🎯 목표

PC, 모바일, 모든 브라우저에서 완전히 동기화되는 회원가입/로그인 시스템

---

## ✅ Step 1: Vercel 환경 변수 설정 (가장 중요!)

### 1-1. Vercel 대시보드 접속

1. https://vercel.com 로그인
2. 프로젝트 선택
3. **Settings** 탭 클릭
4. **Environment Variables** 메뉴 클릭

### 1-2. 다음 4개 변수가 **정확히** 있는지 확인:

#### ① MONGODB_URI

```
mongodb+srv://kissbang:kissbang123@cluster0.hm0r95n.mongodb.net/kissbang?retryWrites=true&w=majority&appName=Cluster0
```

- Environment: `Production`, `Preview`, `Development` **모두 체크**

#### ② JWT_SECRET

```
kissbang-jwt-secret-key-2024-production-safe-key-12345678
```

- Environment: `Production`, `Preview`, `Development` **모두 체크**

#### ③ NEXTAUTH_SECRET

```
kissbang-nextauth-secret-key-2024-production-safe-key-12345678
```

- Environment: `Production`, `Preview`, `Development` **모두 체크**

#### ④ NEXTAUTH_URL

```
https://4kissyou.com
```

- Environment: `Production`, `Preview`, `Development` **모두 체크**

### 1-3. 저장 후 Redeploy

- **Deployments** 탭
- 최신 배포 우측 **⋯** 메뉴
- **"Redeploy"** 클릭

---

## ✅ Step 2: MongoDB Atlas 네트워크 접근 설정

### 2-1. MongoDB Atlas 접속

1. https://cloud.mongodb.com 로그인
2. 왼쪽 메뉴 **"Network Access"** 클릭

### 2-2. IP Access List 확인

**반드시 다음 항목이 있어야 함:**

```
IP Address: 0.0.0.0/0
Comment: Allow from anywhere
Status: ACTIVE
```

**없다면 추가:**

1. **"ADD IP ADDRESS"** 버튼 클릭
2. **"ALLOW ACCESS FROM ANYWHERE"** 선택
3. **"Confirm"** 클릭

### 2-3. Database User 확인

1. 왼쪽 메뉴 **"Database Access"** 클릭
2. 사용자 `kissbang`가 있는지 확인
3. 비밀번호: `kissbang123`

**없다면 생성:**

1. **"ADD NEW DATABASE USER"** 클릭
2. Username: `kissbang`
3. Password: `kissbang123`
4. Database User Privileges: **"Atlas admin"** 선택
5. **"Add User"** 클릭

---

## ✅ Step 3: 테스트 방법

### 3-1. API 테스트 (필수!)

```
https://4kissyou.com/test-api.html
```

**"엔드포인트 테스트" 버튼 클릭:**

**성공 예시:**

```
✓ /api/auth/signup - Status: 400 (정상)
✓ /api/auth/login - Status: 400 (정상)
✓ /api/auth/logout - Status: 200 (정상)
✓ /api/auth/me - Status: 401 (정상)
```

**실패 예시:**

```
✗ /api/auth/signup - Error: Failed to fetch
✗ /api/auth/login - Error: Failed to fetch
```

### 3-2. 회원가입 테스트

```
https://4kissyou.com/signup.html
```

**페이지 상단 배너 확인:**

**✅ 성공:**

```
✅ MongoDB 백엔드 연결됨 - 계정이 모든 기기에서 동기화됩니다
```

**❌ 실패:**

```
⚠️ MongoDB 연결 실패 - localStorage로 저장됩니다 (기기별 분리)
```

### 3-3. 동기화 테스트

1. **모바일**에서 회원가입:

   - 아이디: `synctest`
   - 비밀번호: `test1234`

2. **PC**에서 로그인:

   - 같은 아이디/비밀번호로 로그인 시도

3. **양쪽에서 debug-storage.html 확인:**
   ```
   https://4kissyou.com/debug-storage.html
   ```
   - "🔄 MongoDB 확인" 버튼 클릭
   - `synctest` 계정이 **양쪽 모두** 나타나야 함!

---

## 🔧 문제 해결 (Troubleshooting)

### Case 1: "Failed to fetch" 에러

**원인:** API 엔드포인트가 배포되지 않음

**해결:**

1. 프로젝트 폴더에 `app/api/auth/` 경로가 있는지 확인
2. GitHub에 푸시했는지 확인
3. Vercel에서 자동 배포되었는지 확인

### Case 2: "MongoDB 연결 실패" 배너

**원인:** 환경 변수가 제대로 설정되지 않음

**해결:**

1. Vercel Environment Variables 재확인
2. **모든 환경** (Production, Preview, Development) 체크했는지 확인
3. Redeploy 실행

### Case 3: "Status: 500" 에러

**원인:** MongoDB URI가 잘못되었거나 네트워크 차단

**해결:**

1. MongoDB Atlas Network Access에서 `0.0.0.0/0` 설정
2. MongoDB URI 복사해서 다시 붙여넣기
3. Database User 비밀번호 확인

### Case 4: PC/모바일 동기화 안 됨

**원인:** localStorage만 사용 중 (MongoDB 작동 안 함)

**해결:**

1. `test-api.html`에서 API 작동 확인
2. `signup.html`에서 배너 색상 확인 (녹색이어야 함)
3. F12 콘솔에서 "✅ API 회원가입 성공" 메시지 확인

---

## 📊 최종 확인 체크리스트

- [ ] Vercel 환경 변수 4개 모두 설정됨
- [ ] 모든 환경 (Production, Preview, Development) 체크됨
- [ ] Redeploy 완료
- [ ] MongoDB Atlas Network Access: `0.0.0.0/0` 설정됨
- [ ] MongoDB Atlas Database User: `kissbang` 존재
- [ ] `test-api.html`: 모든 엔드포인트 Status 200/400/401 (정상)
- [ ] `signup.html`: 녹색 배너 표시됨
- [ ] 모바일 회원가입 → PC 로그인 성공
- [ ] `debug-storage.html`: MongoDB 확인 버튼에 동일한 사용자 표시됨

---

## 🎯 다음 단계

**모든 체크리스트 완료 후:**

1. 기존 localStorage 데이터 삭제:

   ```
   https://4kissyou.com/debug-storage.html
   → "🗑️ 모두 삭제" 버튼 클릭
   ```

2. 새로 회원가입 (MongoDB에 저장됨):

   ```
   https://4kissyou.com/signup.html
   ```

3. PC/모바일 양쪽에서 로그인 테스트

4. `debug-storage.html`에서 동기화 확인

---

## ❓ 여전히 안 되면?

다음 정보를 알려주세요:

1. `test-api.html`의 "엔드포인트 테스트" 결과 (스크린샷)
2. `signup.html`의 상단 배너 색상 (녹색/노란색?)
3. F12 콘솔의 에러 메시지
4. Vercel Environment Variables 스크린샷

이 정보로 정확히 진단하겠습니다!
