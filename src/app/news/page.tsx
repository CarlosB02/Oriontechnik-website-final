import type { Metadata } from 'next';
import NewsPageClient from '@/components/NewsPageClient';
import { newsArticles } from '@/data/newsData';

export const metadata: Metadata = {
  title: 'News & Recognition | Aerospace Maintenance Contracts & Announcements',
  description:
    'Explore the latest press releases, military defense contracts, airworthiness approvals, and operational milestones from Orion Technik Maintenance & Engineering.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'News & Recognition | Orion Technik Maintenance & Engineering',
    description:
      'Official announcements, defense contracts, and airworthiness certifications from Orion Technik.',
    url: 'https://oriontechnik.com/news',
    type: 'website',
  },
};

export default function NewsPage() {
  const breadcrumbJsonLd = {
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
        name: 'News & Recognition',
        item: 'https://oriontechnik.com/news',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NewsPageClient articles={newsArticles} />
    </>
  );
}
