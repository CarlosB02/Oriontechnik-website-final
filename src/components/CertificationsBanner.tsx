import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CertificationsBanner.module.css';

export default function CertificationsBanner() {
  return (
    <section id="quality" className={styles.bannerSection} aria-label="Certifications and OEM Partners">
      <div className={`container ${styles.bannerContainer}`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.bannerTitle}>
            CERTIFICATIONS<br />
            AND OEM PARTNERS
          </h2>
          <Link
            href="/quality"
            className={`circle-action-btn dark ${styles.actionBtn}`}
            aria-label="View Certifications and OEM Partners details"
          >
            <ArrowRight size={22} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
