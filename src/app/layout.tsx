import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VoltKeep: Solar Fleet Battery Maintenance',
    template: '%s | VoltKeep',
  },
  description:
    'VoltKeep eliminates dead auxiliary batteries across commercial fleets with solar-powered trickle charging. Zero downtime. 3–5× battery lifespan. Real-time monitoring.',
  keywords: [
    'fleet battery maintenance',
    'solar panel van',
    'auxiliary battery solar charger',
    'fleet management',
    'vehicle battery health',
    'solar fleet solution',
    'battery trickle charger',
    'fleet uptime',
  ],
  authors: [{ name: 'VoltKeep BV' }],
  creator: 'VoltKeep BV',
  publisher: 'VoltKeep BV',
  openGraph: {
    type: 'website',
    locale: 'en_EU',
    url: 'https://voltkeep.eu',
    siteName: 'VoltKeep',
    title: 'VoltKeep: Your Fleet Never Fails',
    description:
      'Solar-powered auxiliary battery maintenance for commercial fleets. Eliminate dead batteries, reduce maintenance costs, and get real-time health monitoring for every vehicle.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltKeep: Solar Fleet Battery Maintenance',
    description: 'Eliminate dead fleet batteries. Permanently.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
