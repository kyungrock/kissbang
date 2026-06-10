import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { hashPassword, sanitizeUser, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, phone, profileImage } = await request.json();

    // 입력 검증
    if (!email || !password || !name || !phone) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    // 비밀번호 길이 검증
    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 최소 6자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const usersCollection = db.collection('users');

    // 이메일 중복 확인
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: '이미 사용 중인 이메일입니다.' },
        { status: 409 }
      );
    }

    // 비밀번호 해시
    const hashedPassword = await hashPassword(password);

    // 새 사용자 생성
    const newUser = {
      email,
      password: hashedPassword,
      name,
      phone,
      role: 'user',
      profileImage: profileImage || '',
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    // 토큰 생성
    const token = generateToken(result.insertedId.toString(), email, 'user');

    // 사용자 정보 반환 (비밀번호 제외)
    const userResponse = sanitizeUser({
      _id: result.insertedId,
      ...newUser,
    });

    const response = NextResponse.json(
      {
        message: '회원가입이 완료되었습니다.',
        user: userResponse,
      },
      { status: 201 }
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
    console.error('회원가입 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
