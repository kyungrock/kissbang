'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('인증 확인 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        setUser(null);
        alert('로그아웃 되었습니다.');
      }
    } catch (error) {
      console.error('로그아웃 오류:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div style={{ fontSize: '18px', color: '#666' }}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* 헤더 */}
      <header
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '20px 0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            키스방 💋
          </h1>

          <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {user ? (
              <>
                <span style={{ color: '#666', fontSize: '15px' }}>
                  환영합니다, <strong>{user.name}</strong>님!
                </span>
                {user.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="btn btn-secondary"
                    style={{ padding: '8px 16px' }}
                  >
                    관리자
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px' }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px' }}
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="btn btn-primary"
                  style={{ padding: '8px 16px' }}
                >
                  회원가입
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main
        className="container"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div
          style={{ textAlign: 'center', color: 'white', marginBottom: '60px' }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            전국 마사지 정보
          </h2>
          <p style={{ fontSize: '20px', opacity: 0.9 }}>
            믿을 수 있는 업체 정보를 한눈에 확인하세요
          </p>
        </div>

        {/* 지역 선택 카드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {[
            { name: '서울', path: '/seoul-massage' },
            { name: '부산', path: '/busan-massage' },
            { name: '인천', path: '/incheon-massage' },
            { name: '대구', path: '/daegu-massage' },
            { name: '대전', path: '/daejeon-massage' },
            { name: '광주', path: '/gwangju-massage' },
            { name: '울산', path: '/ulsan-massage' },
            { name: '세종', path: '/sejong-massage' },
            { name: '경기', path: '/gyeonggi-massage' },
            { name: '강원', path: '/gangwon-massage' },
            { name: '충북', path: '/chungbuk-massage' },
            { name: '충남', path: '/chungnam-massage' },
            { name: '전북', path: '/jeonbuk-massage' },
            { name: '전남', path: '/jeonnam-massage' },
            { name: '경북', path: '/gyeongbuk-massage' },
            { name: '경남', path: '/gyeongnam-massage' },
            { name: '제주', path: '/jeju-massage' },
          ].map((region) => (
            <Link
              key={region.name}
              href={region.path}
              className="card"
              style={{
                textDecoration: 'none',
                color: '#333',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                padding: '40px 20px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow =
                  '0 10px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#667eea',
                }}
              >
                {region.name}
              </h3>
              <p style={{ marginTop: '10px', color: '#666' }}>업체 정보 보기</p>
            </Link>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '30px 0',
          textAlign: 'center',
          color: '#666',
        }}
      >
        <div className="container">
          <p>&copy; 2025 키스방. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
