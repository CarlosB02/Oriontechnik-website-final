import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersPageClient from '@/components/CareersPageClient';
import { jobOpenings } from '@/data/careersData';

export const metadata: Metadata = {
  title: 'Careers & Recruitment | Orion Technik Maintenance & Engineering',
  description:
    'Build your career where precision matters. Join a team of engineers, technicians and specialists keeping defense and commercial aircraft mission-ready around the world.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers & Recruitment | Orion Technik Aerospace Team',
    description:
      'Build your career where precision matters. Join a team of engineers, technicians and specialists keeping defense and commercial aircraft mission-ready around the world.',
    url: 'https://oriontechnik.com/careers',
    type: 'website',
  },
};

export default function CareersPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Careers & Recruitment at Orion Technik',
    description:
      'Aerospace career opportunities, job vacancies, and spontaneous applications at Orion Technik Maintenance & Engineering in Portugal.',
    url: 'https://oriontechnik.com/careers',
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://oriontechnik.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Careers & Recruitment',
        item: 'https://oriontechnik.com/careers',
      },
    ],
  };

  // Structured JobPosting schemas for Google Jobs / Rich Search Results
  const jobsJsonLd = jobOpenings.map((job) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.summary,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Orion Technik',
      value: job.id,
    },
    datePosted: '2026-10-01',
    validThrough: '2027-10-01',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Orion Technik Maintenance & Engineering',
      sameAs: 'https://oriontechnik.com',
      logo: 'https://oriontechnik.com/logos/orion-technik-logo.svg',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Caminho do Parrau 10, Zona Industrial das Corredoras',
        addressLocality: 'Arruda dos Vinhos',
        postalCode: '2630-369',
        addressCountry: 'PT',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'EUR',
      value: {
        '@type': 'QuantitativeValue',
        unitText: 'MONTH',
      },
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsJsonLd) }}
      />
      <Header />
      <main id="main-content">
        <CareersPageClient />
      </main>
      <Footer />
    </>
  );
}
