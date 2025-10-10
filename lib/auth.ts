import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET =
  process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface User {
  _id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: 'user' | 'admin';
  profileImage?: string;
  createdAt: Date;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  profileImage?: string;
}

// 비밀번호 해시
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// 비밀번호 검증
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// JWT 토큰 생성
export function generateToken(
  userId: string,
  email: string,
  role: string
): string {
  return jwt.sign({ userId, email, role }, JWT_SECRET, { expiresIn: '7d' });
}

// JWT 토큰 검증
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// 사용자 정보를 안전하게 반환 (비밀번호 제외)
export function sanitizeUser(user: any): UserResponse {
  return {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
    phone: user.phone,
    role: user.role,
    profileImage: user.profileImage || '',
  };
}
