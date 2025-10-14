import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { verifyPassword, sanitizeUser, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, username, password } = body;
    
    // username 또는 email 중 하나만 있어도 됨
    const loginIdentifier = username || email;

    // 입력 검증
    if (!loginIdentifier || !password) {
      return NextResponse.json(
        { error: '아이디(이메일)와 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const usersCollection = db.collection('users');

    // 사용자 찾기 (email 또는 username으로 검색)
    const user = await usersCollection.findOne({
      $or: [
        { email: loginIdentifier },
        { username: loginIdentifier }
      ]
    });
    
    if (!user) {
      return NextResponse.json(
        { error: '아이디 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 비밀번호 확인
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: '아이디 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 토큰 생성
    const token = generateToken(user._id.toString(), user.email, user.role);

    // 사용자 정보 반환 (비밀번호 제외)
    const userResponse = sanitizeUser(user);

    const response = NextResponse.json(
      {
        message: '로그인 성공',
        user: userResponse,
      },
      { status: 200 }
    );

    // JWT 토큰을 쿠키에 저장
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return response;
  } catch (error) {
    console.error('로그인 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
