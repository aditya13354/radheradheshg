import type { Metadata } from 'next';
import { Playfair_Display, Poppins, Noto_Sans_Devanagari } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/lib/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { BackToTop } from '@/components/layout/BackToTop';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { JsonLd } from '@/components/seo/JsonLd';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Radhe Radhe SHG (radheradheshg) | Handmade Clay Karwa & Handicrafts | Saharanpur`,
    template: `%s | Radhe Radhe SHG - radheradheshg.com`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: 'radheradheshg',
  category: 'Handicrafts',
  classification: 'Handicrafts, Clay Products, Women Self Help Group',
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'hi-IN': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    url: siteConfig.url,
    siteName: 'radheradheshg - Radhe Radhe Self Help Group',
    title: `radheradheshg | Handmade Clay Karwa & Handicrafts | Saharanpur, UP`,
    description: siteConfig.description,
    countryName: 'India',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Handcrafted Clay Karwa and Handicrafts by Rural Women of Saharanpur`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Handcrafted Clay Creations by Rural Women`,
    description: siteConfig.description,
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: siteConfig.verification.google || undefined,
    yandex: siteConfig.verification.yandex || undefined,
    other: {
      ...(siteConfig.verification.bing ? { 'msvalidate.01': siteConfig.verification.bing } : {}),
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Saharanpur',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export const viewport = {
  themeColor: '#8B1E3F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${poppins.variable} ${notoDevanagari.variable}`}
    >
      <body className="font-body antialiased">
        <JsonLd />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
