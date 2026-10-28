import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificationsViewer from '@/components/CertificationsViewer';
import styles from './QualityPage.module.css';

export const metadata: Metadata = {
  title: 'Quality & Certifications | EASA & EMAR Part 145 Approved Station',
  description:
    'Explore Orion Technik airworthiness credentials: EASA Part 145, EMAR Part 145 military approval, EN 9120 quality standards, component traceability, and OEM distributor compliance.',
  alternates: {
    canonical: '/quality',
  },
  openGraph: {
    title: 'Quality & Certifications | Orion Technik Maintenance & Engineering',
    description:
      'Airworthiness compliance, dual civil-military accreditations, and zero-defect aerospace engineering standards.',
    url: 'https://oriontechnik.com/quality',
    type: 'website',
  },
};

export default function QualityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Quality & Certifications | Orion Technik',
    description:
      'EASA & EMAR Part 145 civil and military aviation quality certifications, component traceability, and aerospace standards.',
    url: 'https://oriontechnik.com/quality',
    mainEntity: {
      '@type': 'Organization',
      name: 'Orion Technik Maintenance & Engineering',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'EASA Part 145 Approved Maintenance Organisation',
          credentialCategory: 'Civil Aviation Airworthiness Approval',
          recognizedBy: {
            '@type': 'Organization',
            name: 'European Union Aviation Safety Agency',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'EMAR Part 145 Military Maintenance Organisation',
          credentialCategory: 'Military Airworthiness Approval',
          recognizedBy: {
            '@type': 'Organization',
            name: 'European Military Airworthiness Authorities',
          },
        },
      ],
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
        name: 'Quality & Certifications',
        item: 'https://oriontechnik.com/quality',
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
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Page Hero Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <div className={styles.headerTitleWrap}>
              <h1 className={styles.pageTitle}>We pay attention to the detail</h1>
              <p className={styles.pageLead}>
                Orion Technik Maintenance and Engineering is registered as a Portuguese Ministry of Defense and NATO supplier (CAGE Code: P3457) and manages operations according to the Aerospace Industry Quality Management System AS/EN 9100, ISO 9001, NATO AQAP 2110, the European Aerospace Authority (EASA) PART-145 and the European Military Authority (EMAR) PMAR-145.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Certifications & Documents Catalog */}
        <CertificationsViewer />

        {/* Audit & Compliance Verification CTA */}
        <section className={styles.auditCtaSection} aria-label="Request Quality Documentation">
          <div className="container">
            <div className={styles.auditCtaCard}>
              <div className={styles.auditCtaText}>
                <h3 className={styles.auditCtaHeading}>
                  Need certificates or planning an audit?
                </h3>
                <p className={styles.auditCtaLead}>
                  Our quality team can provide official documentation and help you schedule a facility audit.
                </p>
              </div>

              <div className={styles.auditCtaActions}>
                <Link href="/contacts" className={styles.ctaPrimaryBtn}>
                  <span>Request Quality Manual</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:quality@oriontechnik.com"
                  className={styles.ctaSecondaryBtn}
                >
                  Email Quality Division
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
