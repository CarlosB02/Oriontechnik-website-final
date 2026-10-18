'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/data/newsData';
import styles from './NewsDirectory.module.css';

interface NewsDirectoryProps {
  initialArticles: NewsArticle[];
}

export default function NewsDirectory({ initialArticles }: NewsDirectoryProps) {
  return (
    <div className={styles.directoryWrapper}>
      {/* Grid of News Cards */}
      <section className={styles.gridSection} aria-label="News Articles Catalog">
        <div className={styles.newsGrid}>
          {initialArticles.map((article) => (
            <article key={article.slug} className={styles.card}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                />
                <span className={styles.cardCategoryBadge}>{article.category}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <time dateTime={article.isoDate} className={styles.cardDate}>
                    {article.date}
                  </time>
                  <span className={styles.cardReadTime}>{article.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>
                  <Link href={`/news/${article.slug}`} className={styles.cardTitleLink}>
                    {article.title}
                  </Link>
                </h3>

                <p className={styles.cardSummary}>{article.summary}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.authorBadge}>{article.author}</span>
                <Link
                  href={`/news/${article.slug}`}
                  className={`circle-action-btn light ${styles.cardBtn}`}
                  aria-label={`Read article: ${article.title}`}
                >
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
