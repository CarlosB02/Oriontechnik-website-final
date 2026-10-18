import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Hero Section">
      {/* Background Image with Overlay */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero-aircraft.jpg"
          alt="Airliner aircraft cockpit at airport runway during dusk - Orion Technik aerospace security and maintenance"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          quality={90}
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Content */}
      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLineTop}>YOUR SECURITY?</span>
            <span className={styles.titleLineBottom}>OUR PRIORITY!</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
