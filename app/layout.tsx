import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const aeonik = localFont({
  src: [
    {
      path: './../public/fonts/Aeonik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aeonik',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Qalzy',
  description: 'The only kitchen scale that auto-tracks calories',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} ${aeonik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
