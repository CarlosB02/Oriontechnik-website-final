import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { newsArticles } from '@/data/newsData';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  // Show first 3 top articles on home page
  const featuredNews = newsArticles.slice(0, 3);

  return (
    <section id="news" className={styles.newsSection} aria-label="News and Recognition">
      <div className={`container ${styles.newsContainer}`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerTitleRow}>
            <h2 className={styles.sectionTitle}>NEWS &amp; RECOGNITION</h2>
            <Link href="/news" className={styles.viewAllLink}>
              <span>View All News</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Two Column Content */}
        <div className={styles.newsContentLayout}>
          {/* Left Column: "Latest" */}
          <div className={styles.leftCol}>
            <span className={styles.latestBadge}>Latest</span>
          </div>

          {/* Right Column: News Articles List */}
          <div className={styles.rightCol}>
            <ul className={styles.newsList}>
              {featuredNews.map((item) => (
                <li key={item.slug} className={styles.newsItem}>
                  <Link href={`/news/${item.slug}`} className={styles.newsLink}>
                    <div className={styles.newsTextContent}>
                      <time dateTime={item.isoDate} className={styles.newsDate}>
                        {item.date}
                      </time>
                      <h3 className={styles.newsHeadline}>{item.title}</h3>
                    </div>
                    <div className={`circle-action-btn light ${styles.actionBtn}`}>
                      <ArrowRight size={18} strokeWidth={1.75} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
