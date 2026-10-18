import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3D5E6B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://oriontechnik.com'),
  title: {
    default: 'Orion Technik | Maintenance & Engineering | EASA & EMAR Part 145',
    template: '%s | Orion Technik',
  },
  description:
    'Orion Technik is an EASA & EMAR Part 145 approved Repair Station and global distributor of aerospace parts, consumables, tools, engineering, and fleet maintenance support.',
  applicationName: 'Orion Technik',
  authors: [{ name: 'Orion Technik Maintenance & Engineering' }],
  generator: 'Next.js',
  keywords: [
    'Orion Technik',
    'Aerospace Maintenance',
    'EASA Part 145',
    'EMAR Part 145',
    'Aircraft Repair Station',
    'Aviation Supply Chain',
    'Rotary and Fixed-wing Fleet Support',
    'Engineering Support Portugal',
    'Aerospace Parts Distributor',
  ],
  creator: 'Orion Technik',
  publisher: 'Orion Technik',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-PT': '/pt',
    },
  },
  openGraph: {
    title: 'Orion Technik | Your Security? Our Priority!',
    description:
      'EASA & EMAR Part 145 approved Repair Station and global distributor of parts, consumables, tools, and technical aerospace services.',
    url: 'https://oriontechnik.com',
    siteName: 'Orion Technik',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-aircraft.jpg',
        width: 1920,
        height: 1080,
        alt: 'Orion Technik Aerospace Maintenance and Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orion Technik | Your Security? Our Priority!',
    description:
      'EASA & EMAR Part 145 approved Repair Station providing global aerospace maintenance, fleet support, and supply chain solutions.',
    images: ['/images/hero-aircraft.jpg'],
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://oriontechnik.com/#organization',
        name: 'Orion Technik',
        legalName: 'Orion Technik Maintenance & Engineering',
        url: 'https://oriontechnik.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://oriontechnik.com/logos/orion-technik-logo.svg',
          caption: 'Orion Technik Logo',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Caminho do Parrau 10, Zona Industrial das Corredoras',
          postalCode: '2630-369',
          addressLocality: 'Arruda dos Vinhos',
          addressCountry: 'PT',
        },
        telephone: '+351210987098',
        email: 'info@oriontechnik.com',
        sameAs: [
          'https://www.linkedin.com/company/orion-technik',
          'https://www.instagram.com/oriontechnik',
          'https://www.facebook.com/oriontechnik',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://oriontechnik.com/#website',
        url: 'https://oriontechnik.com',
        name: 'Orion Technik',
        publisher: {
          '@id': 'https://oriontechnik.com/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
