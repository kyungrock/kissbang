# 도메인 연결 가이드 (Vercel 배포)

## 📋 준비물
- ✅ 도메인 (구매 완료)
- ✅ GitHub 계정
- ✅ Vercel 계정 (무료)
- ✅ MongoDB Atlas 연결 정보

---

## 🚀 1단계: GitHub에 코드 푸시

### 1-1. Git 초기화 및 커밋
```bash
# Git 초기화 (이미 되어있다면 생략)
git init

# 현재 변경사항 확인
git status

# 모든 파일 스테이징
git add .

# 커밋
git commit -m "Initial commit for Vercel deployment"
```

### 1-2. GitHub 저장소 생성 및 푸시
1. GitHub.com에 로그인
2. 새 저장소 생성 (예: `kissbang-app`)
3. 저장소를 **Private**으로 설정 (권장)
4. 아래 명령어로 푸시:

```bash
git remote add origin https://github.com/your-username/kissbang-app.git
git branch -M main
git push -u origin main
```

---

## 🌐 2단계: Vercel에 배포

### 2-1. Vercel 가입 및 프로젝트 연결
1. https://vercel.com 접속
2. **Continue with GitHub** 클릭하여 로그인
3. **Add New Project** 클릭
4. GitHub 저장소 `kissbang-app` 선택
5. **Import** 클릭

### 2-2. 프로젝트 설정
- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (자동 설정됨)

### 2-3. 환경 변수 설정 ⚠️ 중요!
**Environment Variables** 섹션에서 다음 변수들을 추가:

| Name | Value |
|------|-------|
| `MONGODB_URI` | `mongodb+srv://kissbang:kissbang123@cluster0.hm0r95n.mongodb.net/kissbang?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `your-super-secret-jwt-key-change-this-in-production-12345678` |
| `NEXTAUTH_SECRET` | `your-super-secret-nextauth-key-change-this-in-production-12345678` |
| `NEXTAUTH_URL` | `https://your-domain.com` (나중에 도메인으로 변경) |

⚠️ **보안 주의**: 
- `JWT_SECRET`과 `NEXTAUTH_SECRET`은 강력한 랜덤 문자열로 변경하세요.
- 생성 방법: PowerShell에서 `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`

### 2-4. 배포 시작
- **Deploy** 버튼 클릭
- 약 2-3분 소요
- 배포 완료 후 `https://your-project.vercel.app` 주소 생성됨

---

## 🔗 3단계: 도메인 연결

### 3-1. Vercel에서 도메인 추가
1. Vercel 프로젝트 대시보드 → **Settings** 탭
2. 왼쪽 메뉴에서 **Domains** 클릭
3. **Add** 버튼 클릭
4. 구매한 도메인 입력 (예: `yourdomain.com`)
5. **Add** 클릭

### 3-2. DNS 설정 (도메인 제공업체에서)
Vercel이 제공하는 DNS 레코드를 도메인 제공업체(가비아, 후이즈, Namecheap 등)의 DNS 설정에 추가:

#### 옵션 A: A 레코드 (권장)
| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| A | www | `76.76.21.21` |

#### 옵션 B: CNAME 레코드
| Type | Name | Value |
|------|------|-------|
| CNAME | @ | `cname.vercel-dns.com` |
| CNAME | www | `cname.vercel-dns.com` |

### 3-3. DNS 전파 대기
- DNS 설정 후 최대 24-48시간 소요 (보통 10분~1시간)
- 확인: https://dnschecker.org

### 3-4. SSL 인증서 자동 발급
- Vercel이 자동으로 Let's Encrypt SSL 인증서 발급
- HTTPS 자동 활성화

---

## ✅ 4단계: 환경 변수 업데이트

### 4-1. NEXTAUTH_URL 변경
1. Vercel 프로젝트 → **Settings** → **Environment Variables**
2. `NEXTAUTH_URL` 찾기
3. **Edit** 클릭
4. 값을 `https://yourdomain.com`으로 변경
5. **Save** 클릭

### 4-2. 재배포
- Vercel 프로젝트 → **Deployments** 탭
- 최신 배포에서 **⋯** 메뉴 → **Redeploy**
- 또는 GitHub에 새 커밋 푸시하면 자동 배포됨

---

## 🎉 완료!

이제 다음 주소에서 앱에 접속할 수 있습니다:
- ✅ `https://yourdomain.com` (메인 도메인)
- ✅ `https://www.yourdomain.com` (www 서브도메인)

---

## 🔧 문제 해결

### 도메인이 연결되지 않을 때
1. DNS 설정 확인: https://dnschecker.org
2. Vercel 대시보드에서 도메인 상태 확인
3. 도메인 제공업체의 DNS 전파 시간 확인

### MongoDB 연결 오류
1. MongoDB Atlas → **Network Access**
2. IP 주소 `0.0.0.0/0` 추가 (모든 IP 허용)
3. 또는 Vercel IP 범위 추가

### 환경 변수 오류
1. Vercel 대시보드에서 모든 환경 변수 확인
2. 변경 후 반드시 **Redeploy** 실행

---

## 📱 추가 기능

### 서브도메인 추가
- `admin.yourdomain.com`, `api.yourdomain.com` 등
- Vercel Domains 섹션에서 동일하게 추가

### 자동 배포 설정
- GitHub에 푸시할 때마다 자동 배포됨
- `main` 브랜치 → Production
- 다른 브랜치 → Preview 배포

### 성능 최적화
- Vercel Edge Network로 전 세계 빠른 속도
- 자동 이미지 최적화
- CDN 자동 적용

---

## 🛡️ 보안 팁
1. `.env.local` 파일은 절대 GitHub에 커밋하지 마세요
2. JWT_SECRET, NEXTAUTH_SECRET은 강력한 랜덤 문자열 사용
3. MongoDB Atlas는 특정 IP만 허용하도록 설정 (선택사항)
4. Vercel 환경 변수는 Production/Preview 환경별로 다르게 설정 가능

---

## 📞 지원
- Vercel 문서: https://vercel.com/docs
- Next.js 문서: https://nextjs.org/docs
- MongoDB Atlas 문서: https://docs.atlas.mongodb.com/

