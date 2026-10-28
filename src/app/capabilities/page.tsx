import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Disc,
  Cpu,
  Zap,
  Radio,
  Wifi,
  Cog,
  CircuitBoard,
  Coffee,
  Droplets,
  Gauge,
  Radar,
  Wind,
  ShieldCheck,
  Check,
  Plane,
  Boxes,
  Wrench,
  Clock,
  Layers,
  Building2,
  Globe,
  ExternalLink,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnicalProjectsAccordion from '@/components/TechnicalProjectsAccordion';
import StatCounter from '@/components/StatCounter';
import styles from './CapabilitiesPage.module.css';

export const metadata: Metadata = {
  title: 'Engineering & Capabilities | EASA & EMAR 145 MRO, Supply Chain & CAMO',
  description:
    'Explore Orion Technik capabilities: EASA & EMAR Part 145 component MRO (PT.145.037), 29+ years global aerospace supply chain, CAMO approval (MT.CAMO.0107), special defense projects, and supported civil & military fleet.',
  alternates: {
    canonical: '/capabilities',
  },
  openGraph: {
    title: 'Aviation Capabilities & MRO | Orion Technik Maintenance & Engineering',
    description:
      'EASA & EMAR Part 145 component repair station, aerospace supply chain distribution, CAMO airworthiness engineering, and supported fleets.',
    url: 'https://oriontechnik.com/capabilities',
    type: 'website',
  },
};

interface MroDomain {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

const mroDomains: MroDomain[] = [
  {
    id: 'wheels-brakes',
    name: 'Wheels & Brakes',
    desc: 'Main and nose wheel overhauls, brake units, heat packs, and NDT inspections.',
    icon: <Disc size={20} />,
  },
  {
    id: 'electro-mechanical',
    name: 'Electro-Mechanical',
    desc: 'Linear and rotary actuators, electrical motors, valves, and drive assemblies.',
    icon: <Cpu size={20} />,
  },
  {
    id: 'lighting',
    name: 'Lighting & Optical',
    desc: 'Anti-collision strobes, navigation, taxi, landing lights, and flight deck indicators.',
    icon: <Zap size={20} />,
  },
  {
    id: 'avionics',
    name: 'Avionics',
    desc: 'Navigation computers, VHF/HF communications, autopilots, and control units.',
    icon: <Radio size={20} />,
  },
  {
    id: 'antennas',
    name: 'Antennas',
    desc: 'VHF, UHF, VOR/ILS, marker beacon, and specialized tactical blade antennas.',
    icon: <Wifi size={20} />,
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    desc: 'Flight control mechanisms, gearboxes, linkage assemblies, and mechanical drives.',
    icon: <Cog size={20} />,
  },
  {
    id: 'electronics',
    name: 'Electronics',
    desc: 'Static inverters, power regulators, control panels, circuit cards, and modules.',
    icon: <CircuitBoard size={20} />,
  },
  {
    id: 'galley',
    name: 'Galley Equipment',
    desc: 'Convection ovens, water boilers, coffee makers, chillers, and electro-mechanics.',
    icon: <Coffee size={20} />,
  },
  {
    id: 'hydraulic',
    name: 'Hydraulic Systems',
    desc: 'Hydraulic actuators, pressure control valves, pumps, accumulators, and reservoirs.',
    icon: <Droplets size={20} />,
  },
  {
    id: 'indicators',
    name: 'Indicators & Displays',
    desc: 'Altimeters, airspeed indicators, engine instrumentation, and tachometers.',
    icon: <Gauge size={20} />,
  },
  {
    id: 'radar',
    name: 'Radar & Sensors',
    desc: 'Weather radar systems, sensor arrays, transceivers, and radome maintenance.',
    icon: <Radar size={20} />,
  },
  {
    id: 'pneumatic',
    name: 'Pneumatic Systems',
    desc: 'Air cycle machines, bleed air regulators, temperature valves, and duct components.',
    icon: <Wind size={20} />,
  },
];

interface FleetItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
}

const supportedFleet: FleetItem[] = [
  {
    id: 'fixed-wing-military',
    name: 'Fixed Wing – Military',
    icon: <Plane size={36} />,
    image: '/images/fleet/fixed-wing-military.png',
  },
  {
    id: 'fixed-wing-civil',
    name: 'Fixed Wing – Civil',
    icon: <Plane size={36} />,
    image: '/images/fleet/fixed-wing-civil.png',
  },
  {
    id: 'rotary-wing',
    name: 'Rotary Wing',
    icon: <Plane size={36} />,
    image: '/images/fleet/rotary-wing.png',
  },
  {
    id: 'engine-propulsion',
    name: 'Engine & Propulsion',
    icon: <Cog size={36} />,
    image: '/images/fleet/engine-propulsion.png',
  },
];

export default function CapabilitiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Aviation Capabilities | Orion Technik',
    description:
      'EASA & EMAR Part 145 component maintenance station, 24/7 global supply chain solutions, CAMO approval, and specialized aerospace projects.',
    url: 'https://oriontechnik.com/capabilities',
    mainEntity: {
      '@type': 'Organization',
      name: 'Orion Technik Maintenance & Engineering',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'EASA & EMAR Part 145 Approval',
          credentialCategory: 'PT.145.037',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Transport Malta CAMO Approval',
          credentialCategory: 'MT.CAMO.0107',
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
        name: 'Capabilities',
        item: 'https://oriontechnik.com/capabilities',
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
              <h1 className={styles.pageTitle}>Engineering &amp; Operational Capabilities</h1>
              <p className={styles.pageLead}>
                Based in Lisbon, Portugal, Orion Technik provides high-precision component MRO,
                global chemical and spare parts distribution, continuing airworthiness management (CAMO),
                and defense engineering support for civil operators and armed forces worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Anchor Navigation Bar */}
        <nav className={styles.navPillsBar} aria-label="Section Quick Jump">
          <div className="container">
            <div className={styles.navPillsList}>
              <a href="#repair-capabilities" className={styles.navPill}>
                <span className={styles.pillIndex}>01.</span>
                <span>MRO Repair Station</span>
              </a>
              <a href="#supply-chain" className={styles.navPill}>
                <span className={styles.pillIndex}>02.</span>
                <span>Supply Chain</span>
              </a>
              <a href="#technical-engineering" className={styles.navPill}>
                <span className={styles.pillIndex}>03.</span>
                <span>Technical, CAMO &amp; Projects</span>
              </a>
              <a href="#supported-fleet" className={styles.navPill}>
                <span className={styles.pillIndex}>04.</span>
                <span>Supported Fleet</span>
              </a>
            </div>
          </div>
        </nav>

        {/* 01. REPAIR CAPABILITIES (MRO) */}
        <section id="repair-capabilities" className={`${styles.sectionBlock} ${styles.repairSection}`}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <span className={styles.sectionCategory}>01. Component Maintenance</span>
              <h2 className={styles.sectionTitle}>Repair Capabilities &amp; MRO List</h2>
              <p className={styles.sectionDesc}>
                Our Lisbon workshop is approved for both civil and military work, covering repair, testing, calibration and full overhaul across a wide range of aircraft components.
              </p>
            </header>

            {/* 12-Domain MRO Capability Grid */}
            <div className={styles.mroGrid}>
              {mroDomains.map((item) => (
                <div key={item.id} className={styles.mroItem}>
                  <div className={styles.mroIconWrap}>{item.icon}</div>
                  <h4 className={styles.mroItemTitle}>{item.name}</h4>
                  <p className={styles.mroItemDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02. SUPPLY CHAIN */}
        <section id="supply-chain" className={`${styles.sectionBlock} ${styles.topographicSection}`}>
          <div className="container">
            <div className={styles.supplyHeaderRow}>
              <div className={styles.supplyTitleCol}>
                <span className={styles.sectionCategory}>02. Global Distribution</span>
                <h2 className={styles.sectionTitle}>Supply Chain Solutions</h2>
              </div>

              {/* Free-floating Metrics Bar with Animated Counters */}
              <div className={styles.supplyMetricsBar}>
                <div className={styles.supplyMetric}>
                  <span className={styles.metricVal}>
                    <StatCounter end={29} suffix="+" />
                  </span>
                  <span className={styles.metricLbl}>Years Experience</span>
                </div>
                <div className={styles.supplyMetricDivider} />
                <div className={styles.supplyMetric}>
                  <span className={styles.metricVal}>
                    <StatCounter end={1000} suffix="+" />
                  </span>
                  <span className={styles.metricLbl}>In-Stock Chemicals</span>
                </div>
                <div className={styles.supplyMetricDivider} />
                <div className={styles.supplyMetric}>
                  <span className={styles.metricVal}>
                    <StatCounter end={24} suffix="/7" />
                  </span>
                  <span className={styles.metricLbl}>AOG Dispatch &amp; Kits</span>
                </div>
                <div className={styles.supplyMetricDivider} />
                <div className={styles.supplyMetric}>
                  <span className={styles.metricVal}>Rotable Pool</span>
                  <span className={styles.metricLbl}>&amp; Equipment Leasing</span>
                </div>
                <div className={styles.supplyMetricDivider} />
                <div className={styles.supplyMetric}>
                  <span className={styles.metricVal}>
                    <StatCounter end={100} suffix="%" />
                  </span>
                  <span className={styles.metricLbl}>OEM CoC Traceability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. TECHNICAL, CAMO & SPECIAL PROJECTS */}
        <section id="technical-engineering" className={styles.sectionBlock}>
          <div id="special-projects" />
          <div className="container">
            <header className={styles.sectionHeader}>
              <span className={styles.sectionCategory}>03. Technical &amp; Operational Excellence</span>
              <h2 className={styles.sectionTitle}>Technical, CAMO &amp; Special Projects</h2>
              <p className={styles.sectionDesc}>
                Comprehensive aerospace engineering across our Dubai hub, Transport Malta continuing airworthiness (CAMO), and proven execution in complex defense programs.
              </p>
            </header>

            <TechnicalProjectsAccordion />
          </div>
        </section>

        {/* 04. SUPPORTED FLEET */}
        <section id="supported-fleet" className={styles.sectionBlock}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <span className={styles.sectionCategory}>04. Fleet Expertise</span>
              <h2 className={styles.sectionTitle}>Supported Fleet</h2>
              <p className={styles.sectionDesc}>
                With decades of relationship with leading repair stations combined with our in-house capabilities, Orion Technik delivers worldwide repair and supply solutions across military and civil fixed and rotary wing aircraft.
              </p>
            </header>

            <div className={styles.fleetGrid}>
              {supportedFleet.map((fleet) => (
                <div key={fleet.id} className={styles.fleetCard}>
                  <div className={styles.fleetCardInner}>
                    <Image
                      src={fleet.image}
                      alt={fleet.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className={styles.fleetBgImage}
                      priority
                    />
                    <div className={styles.fleetOverlay} aria-hidden="true" />

                    <div className={styles.fleetContent}>
                      <div className={styles.fleetIconWrap}>
                        {fleet.icon}
                      </div>
                      <h3 className={styles.fleetCardTitle}>{fleet.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA: RFQ & AUDIT */}
        <section className={styles.ctaSection} aria-label="Request Capability Information">
          <div className="container">
            <div className={styles.ctaCard}>
              <div className={styles.ctaText}>
                <h3 className={styles.ctaHeading}>
                  Require MRO Support or Global Spare Parts Provisioning?
                </h3>
                <p className={styles.ctaLead}>
                  Our engineering division and 24/7 AOG supply team are ready to review your component specifications, overhaul requirements, or fleet consignment program.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link href="/contacts" className={styles.ctaPrimaryBtn}>
                  <span>Request RFQ / Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:info@oriontechnik.com"
                  className={styles.ctaSecondaryBtn}
                >
                  Email Technical Sales
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
