import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '키스방 - 전국 마사지 정보',
  description: '전국의 마사지 업체 정보를 확인하세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
