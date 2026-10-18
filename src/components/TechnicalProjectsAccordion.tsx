'use client';

import { useState } from 'react';
import {
  Globe,
  ShieldCheck,
  Boxes,
  Wrench,
  Clock,
  Building2,
  Plane,
  ChevronDown,
  Layers,
} from 'lucide-react';
import StatCounter from '@/components/StatCounter';
import styles from './TechnicalProjectsAccordion.module.css';

export default function TechnicalProjectsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={styles.accordionWrap}>
      {/* 01. DUBAI HUB - TECHNICAL & ENGINEERING */}
      <div className={`${styles.accordionItem} ${openIndex === 0 ? styles.itemOpen : ''}`}>
        <button
          type="button"
          className={styles.accordionHeader}
          onClick={() => toggleItem(0)}
          aria-expanded={openIndex === 0}
        >
          <div className={styles.headerLeft}>
            <span className={styles.indexNumber}>01</span>
            <div className={styles.headerTextWrap}>
              <div className={styles.titleRow}>
                <h3 className={styles.itemTitle}>Global Services (Dubai Hub)</h3>
              </div>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={`${styles.chevronWrap} ${openIndex === 0 ? styles.chevronOpen : ''}`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </button>

        {openIndex === 0 && (
          <div className={styles.accordionBody}>
            <p className={styles.bodyLead}>
              <strong>Orion Technik Global Services</strong> is our independent engineering hub in Dubai, delivering customized structural solutions, material planning, and technical oversight to commercial airlines and defense operators worldwide.
            </p>

            <div className={styles.capabilitiesGrid}>
              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <Wrench size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Structural Repair Solutions</h4>
                </div>
                <p className={styles.capDesc}>
                  Airline structural damage evaluations, engineered repair schemes, and on-wing modification management.
                </p>
              </div>

              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <ShieldCheck size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Maintenance Quality Auditing</h4>
                </div>
                <p className={styles.capDesc}>
                  Comprehensive oversight of in-house and third-party MRO facilities, quality control, and safety audits.
                </p>
              </div>

              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <Boxes size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Material Planning &amp; Provisioning</h4>
                </div>
                <p className={styles.capDesc}>
                  Turnkey spare parts logistics, rotable exchange coordination, and strategic inventory forecasting.
                </p>
              </div>

              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <Layers size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Technical Records &amp; Software</h4>
                </div>
                <p className={styles.capDesc}>
                  MRO software deployment, airworthiness records auditing, and fleet reliability monitoring programs.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 02. MALTA HUB - CAMO & AIRWORTHINESS */}
      <div className={`${styles.accordionItem} ${openIndex === 1 ? styles.itemOpen : ''}`}>
        <button
          type="button"
          className={styles.accordionHeader}
          onClick={() => toggleItem(1)}
          aria-expanded={openIndex === 1}
        >
          <div className={styles.headerLeft}>
            <span className={styles.indexNumber}>02</span>
            <div className={styles.headerTextWrap}>
              <div className={styles.titleRow}>
                <h3 className={styles.itemTitle}>CAMO &amp; Airworthiness (Orion Aviation)</h3>
              </div>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={`${styles.chevronWrap} ${openIndex === 1 ? styles.chevronOpen : ''}`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </button>

        {openIndex === 1 && (
          <div className={styles.accordionBody}>
            <p className={styles.bodyLead}>
              With over <StatCounter end={40} suffix=" years" /> of combined civil and military aviation experience, <strong>Orion Aviation</strong> provides full airworthiness management under Transport Malta Civil Aviation Directorate (TM-CAD) accreditation.
            </p>

            <div className={styles.capabilitiesGrid}>
              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <Plane size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Continuing Airworthiness (CAMO)</h4>
                </div>
                <p className={styles.capDesc}>
                  Full continuing airworthiness management for commercial airliners, executive business jets, and military platforms.
                </p>
              </div>

              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <ShieldCheck size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Safety &amp; Compliance Audits</h4>
                </div>
                <p className={styles.capDesc}>
                  Rigorous flight operations safety auditing, CAMO quality systems, and civil aviation authority compliance.
                </p>
              </div>

              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <Clock size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Pre-Purchase &amp; Transition Inspections</h4>
                </div>
                <p className={styles.capDesc}>
                  Physical aircraft transition audits, lease returns, mid-lease inspections, and asset protection.
                </p>
              </div>

              <div className={styles.capabilityCard}>
                <div className={styles.capCardHeader}>
                  <Building2 size={18} className={styles.capIcon} />
                  <h4 className={styles.capTitle}>Lessor &amp; Airline Consultancy</h4>
                </div>
                <p className={styles.capDesc}>
                  Technical and financial advisory for aircraft lessors, financing institutions, airlines, and repair stations.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 03. SPECIAL PROJECTS & DEFENSE LOGISTICS */}
      <div className={`${styles.accordionItem} ${openIndex === 2 ? styles.itemOpen : ''}`}>
        <button
          type="button"
          className={styles.accordionHeader}
          onClick={() => toggleItem(2)}
          aria-expanded={openIndex === 2}
        >
          <div className={styles.headerLeft}>
            <span className={styles.indexNumber}>03</span>
            <div className={styles.headerTextWrap}>
              <div className={styles.titleRow}>
                <h3 className={styles.itemTitle}>Special Projects &amp; Defense Logistics</h3>
              </div>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={`${styles.chevronWrap} ${openIndex === 2 ? styles.chevronOpen : ''}`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </button>

        {openIndex === 2 && (
          <div className={styles.accordionBody}>
            <p className={styles.bodyLead}>
              Proven execution in complex aerospace logistics, tactical platform decommissioning, and high-readiness spare parts consignment programs supporting military and defense operators.
            </p>

            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <h4 className={styles.projectTitle}>Lockheed P-3 Orion Dismantling &amp; Shipping</h4>
                <p className={styles.projectDesc}>
                  Complete structural disassembly, serial identification, precision packing, crating, and transatlantic shipment of two (2) P-3 Orion maritime patrol aircraft from Portugal to the United States.
                </p>
              </div>

              <div className={styles.projectCard}>
                <h4 className={styles.projectTitle}>Spare Parts Consignment &amp; Exchange Pool</h4>
                <p className={styles.projectDesc}>
                  Full turnkey management of Allison T-56 engine spares and Lockheed C-130 Hercules / P-3 Orion exchange pool supporting an authorized Service Center 24/7, 365 days a year with high readiness SLA.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
