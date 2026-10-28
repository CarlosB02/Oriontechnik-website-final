import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Cookie, ShieldCheck, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './CookiesPage.module.css';

export const metadata: Metadata = {
  title: 'Cookies Declaration | Orion Technik Maintenance & Engineering',
  description:
    'Detailed disclosure of cookies and local storage items used on oriontechnik.com, including technical, performance, and consent management cookies in compliance with the ePrivacy Directive and GDPR.',
  alternates: {
    canonical: '/cookies-declaration',
  },
  openGraph: {
    title: 'Cookies Declaration | Orion Technik',
    description:
      'Explore active cookies, purpose, and management options on the Orion Technik website.',
    url: 'https://oriontechnik.com/cookies-declaration',
    type: 'website',
  },
};

interface CookieItem {
  name: string;
  category: 'Technical / Necessary' | 'Preference / Consent' | 'Performance / Analytics';
  purpose: string;
  expiry: string;
  exampleValue?: string;
}

const cookiesInventory: CookieItem[] = [
  {
    name: '_dd_s',
    category: 'Performance / Analytics',
    purpose:
      'Used by Real User Monitoring (RUM) and application telemetry to collect aggregated session performance and error logs without identifying individual visitors.',
    expiry: 'Session (15–30 min inactivity)',
    exampleValue: 'logs=1&id=...&created=...&expire=...',
  },
  {
    name: 'cookieconsent_status',
    category: 'Preference / Consent',
    purpose:
      'Stores the visitor’s overall response to the cookie consent notice banner (e.g. savesettings, allow, or dismiss).',
    expiry: '12 Months',
    exampleValue: 'savesettings',
  },
  {
    name: 'cookieconsent_status_tech',
    category: 'Technical / Necessary',
    purpose:
      'Records explicit permission for strictly necessary and operational technical cookies required for the website to function correctly.',
    expiry: '12 Months',
    exampleValue: 'allow',
  },
  {
    name: 'cookieconsent_status_marketing',
    category: 'Preference / Consent',
    purpose:
      'Stores the visitor’s preference regarding optional third-party marketing or advertising tracking. Defaults to denied.',
    expiry: '12 Months',
    exampleValue: 'deny',
  },
  {
    name: 'nsc_bar_cs_done',
    category: 'Technical / Necessary',
    purpose:
      'Indicates that the user has acknowledged or configured the cookie banner prompt, preventing repetitive banner pop-ups.',
    expiry: 'Persistent / 12 Months',
    exampleValue: 'cookieconsent_status---_---1822930240',
  },
];

export default function CookiesPage() {
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
        name: 'Cookies Declaration',
        item: 'https://oriontechnik.com/cookies-declaration',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <div className={styles.headerMeta}>
              <span className={styles.cookiesTag}>
                <Cookie size={14} />
                <span>ePrivacy &amp; GDPR</span>
              </span>
              <span className={styles.updatedDate}>Last updated: November 17, 2021</span>
            </div>

            <h1 className={styles.pageTitle}>Cookies Declaration</h1>
            <p className={styles.pageLead}>
              This Cookies Declaration explains how Orion Technik uses cookies and similar tracking technologies on oriontechnik.com, what information is stored, and how you can manage your preferences.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <div className="container">
          <div className={styles.contentWrap}>
            {/* What are Cookies */}
            <section className={styles.legalSection}>
              <h2 className={styles.sectionHeading}>What Are Cookies?</h2>
              <p className={styles.paragraph}>
                Our Website and Services use “cookies” to help personalize your online experience. A cookie is a small text file that is placed on your device by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
              </p>
              <p className={styles.paragraph}>
                We may use cookies to collect, store, and track information for security and personalization, and for statistical purposes. Most web browsers automatically accept cookies by default, but you can modify your browser settings to decline cookies if you prefer.
              </p>
            </section>

            {/* Cookie Categories */}
            <section className={styles.legalSection}>
              <h2 className={styles.sectionHeading}>Categories of Cookies Used</h2>
              <p className={styles.paragraph}>
                We classify the cookies used on our website into specific categories to ensure transparency and give you full control over non-essential data collection:
              </p>

              <div className={styles.categoryGrid}>
                <div className={styles.categoryCard}>
                  <div className={styles.categoryTitle}>
                    <span>Strictly Necessary &amp; Technical</span>
                    <span className={styles.statusPillRequired}>Always Active</span>
                  </div>
                  <p className={styles.categoryDesc}>
                    Essential for the website to function securely and load properly. They remember your session, load balancer routing, and your cookie consent settings.
                  </p>
                </div>

                <div className={styles.categoryCard}>
                  <div className={styles.categoryTitle}>
                    <span>Preferences &amp; Consent</span>
                    <span className={styles.statusPillRequired}>Always Active</span>
                  </div>
                  <p className={styles.categoryDesc}>
                    Store your language selection, contact modal status, and specific consent choices (such as whether you have approved or denied marketing trackers).
                  </p>
                </div>

                <div className={styles.categoryCard}>
                  <div className={styles.categoryTitle}>
                    <span>Performance &amp; Telemetry</span>
                    <span className={styles.statusPillOptional}>Controlled</span>
                  </div>
                  <p className={styles.categoryDesc}>
                    Help us understand platform performance and technical errors through aggregated, anonymized logs without identifying you personally.
                  </p>
                </div>

                <div className={styles.categoryCard}>
                  <div className={styles.categoryTitle}>
                    <span>Marketing &amp; Advertising</span>
                    <span className={styles.statusPillOptional}>Blocked by Default</span>
                  </div>
                  <p className={styles.categoryDesc}>
                    Used to track visitors across websites for advertising. Orion Technik sets marketing tracking status to <em>deny</em> by default.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies Inventory Table */}
            <section className={styles.legalSection}>
              <h2 className={styles.sectionHeading}>List of Active Cookies</h2>
              <p className={styles.paragraph}>
                The following table outlines the cookies currently utilized on <strong>oriontechnik.com</strong>:
              </p>

              <div className={styles.tableWrap}>
                <table className={styles.cookiesTable}>
                  <thead className={styles.tableHeader}>
                    <tr>
                      <th className={styles.tableTh}>Cookie Name</th>
                      <th className={styles.tableTh}>Category</th>
                      <th className={styles.tableTh}>Purpose</th>
                      <th className={styles.tableTh}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookiesInventory.map((cookie) => (
                      <tr key={cookie.name} className={styles.tableRow}>
                        <td className={styles.tableTd}>
                          <span className={styles.cookieName}>{cookie.name}</span>
                        </td>
                        <td className={styles.tableTd}>
                          <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>
                            {cookie.category}
                          </span>
                        </td>
                        <td className={styles.tableTd}>
                          <p className={styles.cookiePurpose}>{cookie.purpose}</p>
                        </td>
                        <td className={styles.tableTd}>
                          <span className={styles.cookieExpiry}>{cookie.expiry}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Browser Management */}
            <section className={styles.legalSection}>
              <h2 className={styles.sectionHeading}>How to Control and Delete Cookies</h2>
              <p className={styles.paragraph}>
                You have the ability to accept or decline cookies at any time. In addition to our consent mechanisms, most modern web browsers allow you to manage your cookie preferences, delete existing cookies, or block cookies altogether:
              </p>

              <div className={styles.browserGrid}>
                <div className={styles.browserCard}>
                  <span className={styles.browserName}>Google Chrome</span>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    <span>Manage Settings</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className={styles.browserCard}>
                  <span className={styles.browserName}>Mozilla Firefox</span>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    <span>Manage Settings</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className={styles.browserCard}>
                  <span className={styles.browserName}>Apple Safari</span>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    <span>Manage Settings</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className={styles.browserCard}>
                  <span className={styles.browserName}>Microsoft Edge</span>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    <span>Manage Settings</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className={styles.calloutBox}>
                <p className={styles.calloutText}>
                  <strong>Please Note:</strong> If you choose to disable all cookies via your browser settings, some features of the Website (such as form submission status and remembering your language selection) may not function as intended.
                </p>
              </div>
            </section>

            {/* Do Not Track */}
            <section className={styles.legalSection}>
              <h2 className={styles.sectionHeading}>Do Not Track (DNT) Signals</h2>
              <p className={styles.paragraph}>
                Some browsers incorporate a “Do Not Track” (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Orion Technik does not track visitors over time and across third-party websites, and we respect your privacy choices.
              </p>
            </section>

            {/* Cross-Link Card to Privacy Policy */}
            <div className={styles.crossLinkCard}>
              <div className={styles.crossLinkText}>
                <h3 className={styles.crossLinkTitle}>Have Questions About Your Personal Data?</h3>
                <p className={styles.crossLinkDesc}>
                  Learn more about your rights under the GDPR, data retention, and how we safeguard your information in our complete Privacy Policy.
                </p>
              </div>
              <Link href="/privacy-policy" className={styles.crossLinkBtn}>
                <span>View Privacy Policy</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
