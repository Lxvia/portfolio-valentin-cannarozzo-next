import "./globals.scss";
import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Valentin Cannarozzo - Portfolio",
  description: "Portfolio d'artiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}