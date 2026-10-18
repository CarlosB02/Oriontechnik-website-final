import React from 'react';
import Image from 'next/image';
import styles from './WhereWeAreSection.module.css';

interface StatItem {
  id: string;
  value: string;
  description: string;
}

const stats: StatItem[] = [
  {
    id: 'stat-hubs',
    value: '8',
    description:
      'Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment.',
  },
  {
    id: 'stat-partners',
    value: '90',
    description:
      'Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment.',
  },
  {
    id: 'stat-fleets',
    value: '123',
    description:
      'Orion Technik is a Global Distributor of Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment.',
  },
];

export default function WhereWeAreSection() {
  return (
    <section id="where-we-are" className={styles.whereSection} aria-label="Where We Are">
      {/* Background SVG World Map */}
      <div className={styles.mapBackground} aria-hidden="true">
        <Image
          src="/images/world-map-dots.svg"
          alt=""
          fill
          className={styles.mapImage}
          priority={false}
        />
        <div className={styles.mapOverlay} />
      </div>

      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.sectionLayout}>
          {/* Section Title */}
          <div className={styles.titleColumn}>
            <h2 className={styles.sectionTitle}>
              WHERE<br />
              WE ARE
            </h2>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
