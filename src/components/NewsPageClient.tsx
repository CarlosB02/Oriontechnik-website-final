'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import NewsDirectory from '@/components/NewsDirectory';
import { NewsArticle } from '@/data/newsData';
import styles from '@/app/news/NewsPage.module.css';

interface NewsPageClientProps {
  articles: NewsArticle[];
}

export default function NewsPageClient({ articles }: NewsPageClientProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content" className={styles.main}>
        {/* News Hero Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <div className={styles.headerTitleWrap}>
              <h1 className={styles.pageTitle}>NEWS &amp; RECOGNITION</h1>
              <p className={styles.pageLead}>
                Follow our latest updates, from new partnerships and capabilities to the milestones that shape our journey.
              </p>
            </div>
          </div>
        </section>

        {/* Directory Section */}
        <section className={styles.contentSection}>
          <div className="container">
            <NewsDirectory initialArticles={articles} />
          </div>
        </section>

        {/* Media & Press Office Box */}
        <section className={styles.pressSection} aria-label="Media Contacts">
          <div className="container">
            <div className={styles.pressCard}>
              <div className={styles.pressText}>
                <span className={styles.pressTag}>PRESS &amp; MEDIA INQUIRIES</span>
                <h3 className={styles.pressHeading}>
                  Orion Technik Communications Office
                </h3>
                <p className={styles.pressDescription}>
                  For accredited journalists, aerospace media publications, and defense industry analysts seeking official statements, high-resolution imagery, or executive interviews.
                </p>
              </div>

              <div className={styles.pressContactGroup}>
                <div className={styles.pressContactItem}>
                  <Mail size={18} className={styles.pressIcon} />
                  <div>
                    <span className={styles.pressItemLabel}>PRESS EMAIL</span>
                    <a href="mailto:info@oriontechnik.com" className={styles.pressItemVal}>
                      info@oriontechnik.com
                    </a>
                  </div>
                </div>

                <div className={styles.pressContactItem}>
                  <Phone size={18} className={styles.pressIcon} />
                  <div>
                    <span className={styles.pressItemLabel}>HEADQUARTERS</span>
                    <a href="tel:+351210987098" className={styles.pressItemVal}>
                      +351 210 987 098
                    </a>
                  </div>
                </div>

                <div className={styles.pressContactItem}>
                  <MapPin size={18} className={styles.pressIcon} />
                  <div>
                    <span className={styles.pressItemLabel}>LOCATION</span>
                    <span className={styles.pressItemVal}>Arruda dos Vinhos, Portugal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
