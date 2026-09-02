import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Ownstay — AI Receptionist for Modern Hotels',
  description: 'Ownstay is an AI receptionist for hotels that answers guest questions, handles requests, and delivers 24/7 multilingual guest support.',
  openGraph: {
    title: 'Ownstay — AI Receptionist for Hotels',
    description: 'Answer guests 24/7 with AI built for hospitality.',
    images: [{ url: '/assets/images/3%20(2).png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ownstay — AI Receptionist for Hotels',
    description: 'Answer guests 24/7 with AI built for hospitality.',
    images: ['/assets/images/3%20(2).png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className={manrope.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fownstay5139back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}