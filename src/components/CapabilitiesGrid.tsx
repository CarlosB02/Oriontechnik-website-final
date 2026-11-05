'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    requestAnimationFrame(() => {
      isScrollingRef.current = false;
      const scrollLeft = container.scrollLeft;
      const containerCenter = scrollLeft + container.clientWidth / 2;
      const children = Array.from(container.children) as HTMLElement[];

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    });
  }, []);

  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % capabilities.length;
      scrollToSlide(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + capabilities.length) % capabilities.length;
      scrollToSlide(prevIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleScroll]);

  return (
    <section id="capabilities" className={styles.capabilitiesSection} aria-label="Core Capabilities">
      <div className={`container ${styles.gridContainer}`}>
        <div
          ref={carouselRef}
          className={styles.cardsGrid}
          onScroll={handleScroll}
        >
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

        {/* Carousel indicators (dots) visible only on mobile */}
        <div
          className={styles.dotsContainer}
          role="tablist"
          aria-label="Capabilities carousel dots"
        >
          {capabilities.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`Go to slide ${idx + 1}: ${item.title.replace('\n', ' ')}`}
              className={`${styles.dot} ${activeIndex === idx ? styles.activeDot : ''}`}
              onClick={() => scrollToSlide(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
