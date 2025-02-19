import type { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '태관영 | Actor Portfolio',
  description: '배우 태관영의 포트폴리오 웹사이트입니다. 영화, 드라마, 광고 등 다양한 작품 활동을 소개합니다.',
  keywords: ["태관영", "서울예술대학교", "해병대", "군필", "연참", "독립영화", "광고", "소속사", "배우", "연기자", "광고", "영화", "드라마", "단역", "조연", "주연", "이미지", "단역", "수염", "장발"],
  authors: [{ name: '태관영' }],
  creator: '태관영',
  publisher: '태관영',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '태관영 | Actor Portfolio',
    description: '배우 태관영의 포트폴리오 웹사이트입니다.',
    url: 'https://taegwanyoung.com',
    siteName: '태관영 포트폴리오',
    images: [
      {
        url: '/images/og-image.jpg', // Open Graph 이미지 추가 필요
        width: 1200,
        height: 630,
        alt: '태관영 포트폴리오',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link rel="canonical" href="https://taegwanyoung.com" />
      </head>
      <body className="min-h-screen bg-background text-text-primary">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
} 