import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { Footer } from '@/components/footer';
import  Off  from "@/components/off";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LMLFix',
  description: 'LMLFix',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className} >
        <Off />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
