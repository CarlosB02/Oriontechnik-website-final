import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CapabilitiesGrid.module.css';

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: 'repair-capabilities',
    title: 'REPAIR\nCAPABILITIES',
    description:
      'Orion Technik Maintenance & Engineering is an EASA & EMAR Part 145 approved Repair Station and comprehensive component maintenance provider.',
    href: '/capabilities#repair-capabilities',
  },
  {
    id: 'supply-chain',
    title: 'SUPPLY\nCHAIN',
    description:
      'Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment for the Aerospace industry.',
    href: '/capabilities#supply-chain',
  },
  {
    id: 'technical-engineering',
    title: 'TECHNICAL AND\nENGINEERING\nSUPPORT',
    description:
      'Through its multidisciplinary team, Orion Technik provides you a wide range of multidisciplinary engineering and consulting services.',
    href: '/capabilities#technical-engineering',
  },
  {
    id: 'supported-fleet',
    title: 'SUPPORTED\nFLEET',
    description:
      'From Military to Civil aviation, Orion Technik can provide support and services for various rotary and fixed-wing aircraft.',
    href: '/capabilities#supported-fleet',
  },
];

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className={styles.capabilitiesSection} aria-label="Core Capabilities">
      <div className={`container ${styles.gridContainer}`}>
        <div className={styles.cardsGrid}>
          {capabilities.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <Link
                  href={item.href}
                  className={`circle-action-btn light ${styles.actionBtn}`}
                  aria-label={`Learn more about ${item.title.replace('\n', ' ')}`}
                >
                  <ArrowRight size={18} strokeWidth={1.75} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
