import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Plane,
  ExternalLink,
  Wrench,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import styles from './ContactsPage.module.css';

export const metadata: Metadata = {
  title: 'Contacts & Facility Locations | Orion Technik Maintenance & Engineering',
  description:
    'Contact Orion Technik headquarters in Arruda dos Vinhos, Portugal. Direct channels for EASA & EMAR Part 145 repair capabilities, aerospace supply chain, engineering support, and 24/7 AOG response.',
  alternates: {
    canonical: '/contacts',
  },
  openGraph: {
    title: 'Contacts & Facility Locations | Orion Technik',
    description:
      'Direct technical contact channels, facility location, and 24/7 AOG response for Orion Technik Maintenance & Engineering.',
    url: 'https://oriontechnik.com/contacts',
    type: 'website',
  },
};

export default function ContactsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Orion Technik Contacts & Headquarters',
    description:
      'Direct contact information and aerospace facilities for Orion Technik Maintenance & Engineering in Portugal.',
    url: 'https://oriontechnik.com/contacts',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Orion Technik Maintenance & Engineering',
      image: 'https://oriontechnik.com/logos/orion-technik-logo.svg',
      telephone: '+351210987098',
      email: 'info@oriontechnik.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Caminho do Parrau 10, Zona Industrial das Corredoras',
        addressLocality: 'Arruda dos Vinhos',
        postalCode: '2630-369',
        addressCountry: 'PT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.982,
        longitude: -9.077,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '08:00',
          closes: '18:00',
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
        name: 'Contacts & Locations',
        item: 'https://oriontechnik.com/contacts',
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
              <span className={styles.breadcrumbCurrent}>Contacts &amp; Locations</span>
            </nav>

            <div className={styles.headerTitleWrap}>
              <h1 className={styles.pageTitle}>CONTACTS &amp; LOCATIONS</h1>
              <p className={styles.pageLead}>
                Connect directly with Orion Technik headquarters, department divisions, or our dedicated 24/7 global Aircraft On Ground (AOG) logistics cell.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section: Info Columns + Form */}
        <div className="container">
          <div className={styles.contactsGrid}>
            {/* Left Column: Direct Channels & Location Info */}
            <div className={styles.infoColumn}>
              {/* Headquarters Facility Card */}
              <div className={styles.infoCard}>
                <span className={styles.cardTag}>PRIMARY AEROSPACE HUB</span>
                <h2 className={styles.facilityName}>Arruda dos Vinhos Facility</h2>
                
                <address className={styles.facilityAddress}>
                  <MapPin size={18} className={styles.infoIcon} />
                  <div>
                    <span className={styles.addressLine}>Caminho do Parrau 10</span>
                    <span className={styles.addressLine}>Zona Industrial das Corredoras</span>
                    <span className={styles.addressLine}>2630-369 Arruda dos Vinhos, Portugal</span>
                  </div>
                </address>

                <div className={styles.facilityDirect}>
                  <div className={styles.directItem}>
                    <Phone size={18} className={styles.infoIcon} />
                    <div>
                      <span className={styles.directLabel}>MAIN TELEPHONE</span>
                      <a href="tel:+351210987098" className={styles.directLink}>
                        +351 210 987 098
                      </a>
                    </div>
                  </div>

                  <div className={styles.directItem}>
                    <Mail size={18} className={styles.infoIcon} />
                    <div>
                      <span className={styles.directLabel}>GENERAL INQUIRIES</span>
                      <a href="mailto:info@oriontechnik.com" className={styles.directLink}>
                        info@oriontechnik.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.transitBox}>
                  <Plane size={16} className={styles.transitIcon} />
                  <span>25 minutes from Lisbon Humberto Delgado Airport (LIS) Cargo Terminal</span>
                </div>
              </div>

              {/* Department Direct Email Directory */}
              <div className={styles.infoCard}>
                <h3 className={styles.deptCardTitle}>Specialized Department Channels</h3>
                <ul className={styles.deptList}>
                  <li className={styles.deptItem}>
                    <div className={styles.deptText}>
                      <span className={styles.deptTitle}>Component MRO &amp; Repair Station</span>
                      <span className={styles.deptDesc}>Scheduled maintenance, component overhauls, test bench evaluations</span>
                    </div>
                    <a href="mailto:mro@oriontechnik.com" className={styles.deptLink}>
                      mro@oriontechnik.com
                    </a>
                  </li>

                  <li className={styles.deptItem}>
                    <div className={styles.deptText}>
                      <span className={styles.deptTitle}>Supply Chain &amp; Parts Distribution</span>
                      <span className={styles.deptDesc}>OEM brand consumables, rotables, tooling, export documentation</span>
                    </div>
                    <a href="mailto:info@oriontechnik.com" className={styles.deptLink}>
                      info@oriontechnik.com
                    </a>
                  </li>

                  <li className={styles.deptItem}>
                    <div className={styles.deptText}>
                      <span className={styles.deptTitle}>Technical &amp; Engineering Consulting</span>
                      <span className={styles.deptDesc}>Structural engineering, design modifications, airworthiness audits</span>
                    </div>
                    <a href="mailto:engineering@oriontechnik.com" className={styles.deptLink}>
                      engineering@oriontechnik.com
                    </a>
                  </li>

                  <li className={styles.deptItem}>
                    <div className={styles.deptText}>
                      <span className={styles.deptTitle}>Quality Management &amp; Regulatory Affairs</span>
                      <span className={styles.deptDesc}>EASA &amp; EMAR Part 145 certificates, quality audits, dual-release queries</span>
                    </div>
                    <a href="mailto:quality@oriontechnik.com" className={styles.deptLink}>
                      quality@oriontechnik.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Operating Hours & 24/7 AOG Card */}
              <div className={styles.aogCard}>
                <div className={styles.aogHeader}>
                  <Clock size={20} className={styles.aogIcon} />
                  <div>
                    <h3 className={styles.aogTitle}>Facility Hours &amp; 24/7 AOG Readiness</h3>
                    <p className={styles.aogHours}>
                      Facility Hours: Mon – Fri, 08:00 – 18:00 WET (GMT+0)
                    </p>
                  </div>
                </div>

                <div className={styles.aogDivider} />

                <div className={styles.aogNotice}>
                  <ShieldCheck size={18} className={styles.aogNoticeIcon} />
                  <div>
                    <strong>Aircraft On Ground (AOG) Emergency Desk:</strong>
                    <p>
                      Our critical dispatch unit operates 24/7/365 for urgent airworthiness parts and mission-critical engineering intervention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions / Map Link Card */}
              <div className={styles.mapLinkCard}>
                <div className={styles.mapLinkText}>
                  <h4>Navigation Coordinates</h4>
                  <p>38°58&apos;55.4&quot;N 9°04&apos;38.2&quot;W • Arruda dos Vinhos Industrial Zone</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Caminho+do+Parrau+10+2630-369+Arruda+dos+Vinhos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapBtn}
                  aria-label="Open location in Google Maps"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Contact & RFQ Form */}
            <div className={styles.formColumn}>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
