'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Share2,
  Check,
  Building2,
  FileCheck2,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { NewsArticle } from '@/data/newsData';
import styles from './ArticleView.module.css';

interface ArticleViewProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export default function ArticleView({
  article,
  relatedArticles,
}: ArticleViewProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <>
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content" className={styles.main}>
        {/* Header Breadcrumb & Metadata */}
        <section className={styles.headerSection}>
          <div className="container">
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
              <Link href="/news" className={styles.backBtn}>
                <ArrowLeft size={16} />
                <span>Back to News &amp; Recognition</span>
              </Link>
            </nav>

            <div className={styles.metaRow}>
              <span className={styles.categoryBadge}>{article.category}</span>
              <span className={styles.metaDivider}>•</span>
              <span className={styles.metaItem}>
                <Calendar size={14} />
                <time dateTime={article.isoDate}>{article.date}</time>
              </span>
              <span className={styles.metaDivider}>•</span>
              <span className={styles.metaItem}>
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>

            <h1 className={styles.articleTitle}>{article.title}</h1>
            <p className={styles.articleLead}>{article.summary}</p>
          </div>
        </section>

        {/* Editorial Featured Visual */}
        <div className="container">
          <div className={styles.heroImageContainer}>
            <Image
              src={article.image}
              alt={article.title}
              width={1320}
              height={640}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className={`container ${styles.contentWrapper}`}>
          <div className={styles.articleLayout}>
            {/* Article Body */}
            <article className={styles.articleBody}>


              {/* Prose Content */}
              <div className={styles.proseContent}>
                {article.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Share & Division Author Row */}
              <div className={styles.footerInfoRow}>
                <div className={styles.authorBadge}>
                  <div className={styles.authorIcon}>
                    <User size={18} />
                  </div>
                  <div>
                    <span className={styles.authorName}>{article.author}</span>
                    <span className={styles.authorLocation}>
                      Arruda dos Vinhos Facility • Portugal
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleShare}
                  className={styles.shareBtn}
                  aria-label="Copy article link"
                >
                  {isCopied ? (
                    <>
                      <Check size={16} />
                      <span>Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      <span>Share Release</span>
                    </>
                  )}
                </button>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className={styles.sidebarColumn}>
              {/* Press Contact Card */}
              <div className={styles.sidebarCard}>
                <span className={styles.sidebarLabel}>MEDIA &amp; RELATIONS</span>
                <h3 className={styles.sidebarHeading}>Press Communications</h3>
                <p className={styles.sidebarText}>
                  For press inquiries, accreditation, or official quotes regarding this announcement:
                </p>
                <div className={styles.contactLinks}>
                  <a href="mailto:info@oriontechnik.com" className={styles.contactLink}>
                    info@oriontechnik.com
                  </a>
                  <a href="tel:+351210987098" className={styles.contactLink}>
                    +351 210 987 098
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className={styles.inquireBtn}
                >
                  Contact Press Office
                </button>
              </div>

              {/* Accreditation Badge Card */}
              <div className={`${styles.sidebarCard} ${styles.qualityCard}`}>
                <div className={styles.qualityHeader}>
                  <Building2 size={18} />
                  <span className={styles.sidebarLabel}>CERTIFICATIONS</span>
                </div>
                <h4 className={styles.qualityTitle}>EASA &amp; EMAR Part 145</h4>
                <p className={styles.qualityText}>
                  Orion Technik adheres to rigorous European civil and military aviation safety agency standards.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Announcements */}
        {relatedArticles.length > 0 && (
          <section className={styles.relatedSection} aria-label="Related Announcements">
            <div className="container">
              <div className={styles.relatedHeader}>
                <h2 className={styles.relatedTitle}>Related Announcements</h2>
                <Link href="/news" className={styles.viewAllLink}>
                  <span>All Press Releases</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className={styles.relatedGrid}>
                {relatedArticles.map((rel) => (
                  <article key={rel.slug} className={styles.relatedCard}>
                    <div className={styles.relatedImgWrap}>
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        width={400}
                        height={225}
                        className={styles.relatedImg}
                      />
                      <span className={styles.relatedCategoryBadge}>
                        {rel.category}
                      </span>
                    </div>
                    <div className={styles.relatedBody}>
                      <time dateTime={rel.isoDate} className={styles.relatedDate}>
                        {rel.date}
                      </time>
                      <h3 className={styles.relatedHeadline}>
                        <Link href={`/news/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <Link
                        href={`/news/${rel.slug}`}
                        className={`circle-action-btn light ${styles.relatedBtn}`}
                        aria-label={`Read ${rel.title}`}
                      >
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
