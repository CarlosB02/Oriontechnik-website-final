'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const handleCtaClick = (e: React.MouseEvent) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <footer id="contacts" className={styles.footer} aria-label="Footer and Contact Information">
      <div className={`container ${styles.footerContainer}`}>
        {/* Top CTA Row */}
        <div className={styles.ctaRow}>
          <Link
            href="/contacts"
            onClick={handleCtaClick}
            className={styles.ctaButton}
            aria-label="Get in touch with Orion Technik"
          >
            <span className={styles.ctaText}>GET IN TOUCH WITH US</span>
            <div className={`circle-action-btn dark ${styles.ctaCircle}`}>
              <ArrowUpRight size={22} strokeWidth={2} />
            </div>
          </Link>
        </div>

        {/* Info Grid */}
        <div className={styles.infoGrid}>
          {/* Address Column */}
          <div className={styles.infoCol}>
            <h3 className={styles.colHeading}>ADDRESS</h3>
            <address className={styles.addressBlock}>
              Caminho do Parrau 10<br />
              Zona Industrial das Corredoras<br />
              2630-369 Arruda dos Vinhos<br />
              Portugal
            </address>
          </div>

          {/* Contact Details Column */}
          <div className={styles.infoCol}>
            <div className={styles.contactSubGroup}>
              <h3 className={styles.colHeading}>PHONE</h3>
              <a href="tel:+351210987098" className={styles.contactLink}>
                +351 210 987 098
              </a>
            </div>

            <div className={styles.contactSubGroup}>
              <h3 className={styles.colHeading}>EMAIL ADDRESS</h3>
              <a href="mailto:info@oriontechnik.com" className={styles.contactLink}>
                info@oriontechnik.com
              </a>
            </div>
          </div>

          {/* Social & Legal Column */}
          <div className={`${styles.infoCol} ${styles.socialLegalCol}`}>
            {/* Social Icons */}
            <div className={styles.socialGroup} aria-label="Social media links">
              <a
                href="https://www.instagram.com/oriontechnik/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="Instagram"
              >
                <Instagram size={17} strokeWidth={1.8} />
              </a>
              <a
                href="https://www.linkedin.com/company/oriontechnik/home/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="LinkedIn"
              >
                <Linkedin size={17} strokeWidth={1.8} />
              </a>
            </div>

            {/* Careers Block */}
            <div className={styles.careersBlock}>
              <span className={styles.careersHeading}>CAREERS &amp; RECRUITMENT</span>
              <Link href="/careers" className={styles.careersActionLink} aria-label="Explore Careers and Job Openings">
                <span>Join Our Team (Vagas &amp; Candidaturas)</span>
                <ArrowUpRight size={15} className={styles.careersArrow} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice, credits & legal links */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Orion Technik - Maintenance &amp; Engineering. All rights reserved.
            </p>
            <span className={styles.bottomDivider}>•</span>
            <p className={styles.madeBy}>
              Engineered with precision by{' '}
              <a
                href="https://enimble.pt"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.madeByLink}
              >
                Enimble
              </a>
            </p>
          </div>

          <div className={styles.bottomRight}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.legalDivider}>•</span>
            <Link href="/cookies-declaration" className={styles.legalLink}>
              Cookies Declaration
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
