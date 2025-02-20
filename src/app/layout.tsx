import type { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '태관영',
  description: '배우 태관영의 프로필 입니다. 영화, 드라마, 광고 등 다양한 작품 활동을 소개합니다.',
  keywords: ["태관영", "서울예술대학교", "해병대 배우", "해병대 출신 배우", "연참", "독립영화 배우", "광고배우", "해병대 연기자", "단역배우", "조연배우", "주연배우", "이미지 좋은 배우", "수염 배우", "장발 배우"],
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
    description: '배우 태관영의 프로필 입니다. 영화, 드라마, 광고 등 다양한 작품 활동을 소개합니다.',
    url: 'https://taegwanyoung.com',
    siteName: '태관영',
    images: [
      {
        url: '/images/gallery/4.webp',
        width: 800,
        height: 1200,
        alt: '배우 태관영',
        type: 'image/webp',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '태관영 | Actor Portfolio',
    description: '배우 태관영의 프로필',
    images: ['/images/gallery/4.webp'],
    creator: '@taegwanyoung',
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
  verification: {
    other: {
      'naver-site-verification': '7ce28398976d92521663a92488cd1e2a'
    }
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
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
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