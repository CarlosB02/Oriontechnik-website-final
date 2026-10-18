import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveMapSection from '@/components/InteractiveMapSection';
import styles from './WhereWeArePage.module.css';

export const metadata: Metadata = {
  title: 'Where We Are | Orion Technik Global Footprint',
  description:
    'Discover Orion Technik global presence: European EASA & EMAR Part 145 maintenance facilities and strategic aerospace operations.',
  alternates: {
    canonical: '/where-we-are',
  },
  openGraph: {
    title: 'Where We Are | Orion Technik Maintenance & Engineering',
    description:
      'Global aerospace logistics hubs, certified MRO facilities, and international fleet sustainment locations.',
    url: 'https://oriontechnik.com/where-we-are',
    type: 'website',
  },
};

export default function WhereWeArePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Where We Are | Orion Technik Global Footprint',
    description:
      'Global aerospace logistics hubs, MRO facilities, and regional desks for Orion Technik.',
    url: 'https://oriontechnik.com/where-we-are',
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
        name: 'Where We Are',
        item: 'https://oriontechnik.com/where-we-are',
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
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
              <Link href="/" className={styles.breadcrumbLink}>
                <ArrowLeft size={14} />
                <span>Home</span>
              </Link>
              <span className={styles.breadcrumbDivider}>/</span>
              <span className={styles.breadcrumbCurrent}>Where We Are</span>
            </nav>

            <div className={styles.headerTitleWrap}>
              <h1 className={styles.pageTitle}>WHERE WE ARE</h1>
              <p className={styles.pageLead}>
                A global aerospace footprint anchored by our European EASA &amp; EMAR Part 145 maintenance facility in Portugal, supported by strategic operational reach worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Global & NATO Maps + Live Flag Marquee */}
        <InteractiveMapSection />

        {/* Global Key Metrics Section with Vector Map Overlay */}
        <section className={styles.metricsSection} aria-label="Key Metrics">
          <div className={styles.mapBackground} aria-hidden="true">
            <Image
              src="/images/world-map-dots.svg"
              alt=""
              fill
              className={styles.mapImage}
            />
            <div className={styles.mapOverlay} />
          </div>

          <div className={`container ${styles.metricsContainer}`}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>8</span>
                <span className={styles.metricLabel}>STRATEGIC HUBS</span>
                <p className={styles.metricDesc}>
                  Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment.
                </p>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricValue}>90</span>
                <span className={styles.metricLabel}>OEM PARTNERS</span>
                <p className={styles.metricDesc}>
                  Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment.
                </p>
              </div>

              <div className={styles.metricCard}>
                <span className={styles.metricValue}>123</span>
                <span className={styles.metricLabel}>SUPPORTED PLATFORMS</span>
                <p className={styles.metricDesc}>
                  Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Contact CTA */}
        <section className={styles.facilityCtaSection} aria-label="Contact Facility">
          <div className="container">
            <div className={styles.ctaCard}>
              <div className={styles.ctaText}>
                <h3 className={styles.ctaHeading}>Planning a Visit or Need Immediate AOG Support?</h3>
                <p className={styles.ctaLead}>
                  Our operations team in Arruda dos Vinhos is ready to coordinate facility walkthroughs, technical audits, or emergency parts procurement.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link href="/contacts" className={styles.ctaBtn}>
                  <span>Get In Touch</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
