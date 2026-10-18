import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { newsArticles } from '@/data/newsData';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Orion Technik',
    };
  }

  return {
    title: `${article.title} | Orion Technik News`,
    description: article.summary,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://oriontechnik.com/news/${article.slug}`,
      type: 'article',
      publishedTime: article.isoDate,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    image: [`https://oriontechnik.com${article.image}`],
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://oriontechnik.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Orion Technik Maintenance & Engineering',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oriontechnik.com/logos/orion-technik-logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://oriontechnik.com/news/${article.slug}`,
    },
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
        name: 'News & Recognition',
        item: 'https://oriontechnik.com/news',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://oriontechnik.com/news/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <ArticleView article={article} relatedArticles={relatedArticles} />
    </>
  );
}
