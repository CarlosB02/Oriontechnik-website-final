'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="Facebook"
              >
                <span className={styles.socialLetter}>f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="Instagram"
              >
                <span className={styles.socialLetter}>ig</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="LinkedIn"
              >
                <span className={styles.socialLetter}>in</span>
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

            {/* Legal Links */}
            <div className={styles.legalGroup}>
              <Link href="/careers" className={styles.legalLink}>
                Careers
              </Link>
              <span className={styles.legalDivider}>&nbsp;•&nbsp;</span>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.legalDivider}>&nbsp;•&nbsp;</span>
              <Link href="/cookies-declaration" className={styles.legalLink}>
                Cookies Declaration
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Orion Technik - Maintenance &amp; Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
