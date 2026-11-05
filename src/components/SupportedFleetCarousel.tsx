'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './SupportedFleetCarousel.module.css';

export interface FleetItem {
  id: string;
  name: string;
  image: string;
}

interface SupportedFleetCarouselProps {
  items: FleetItem[];
}

export default function SupportedFleetCarousel({ items }: SupportedFleetCarouselProps) {
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
      const nextIndex = (index + 1) % items.length;
      scrollToSlide(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
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
    <div className={styles.carouselWrapper}>
      <div
        ref={carouselRef}
        className={styles.fleetGrid}
        onScroll={handleScroll}
      >
        {items.map((fleet) => (
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
                <h3 className={styles.fleetCardTitle}>{fleet.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators (dots) visible only on mobile */}
      <div
        className={styles.dotsContainer}
        role="tablist"
        aria-label="Supported fleet carousel dots"
      >
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            aria-label={`Go to slide ${idx + 1}: ${item.name}`}
            className={`${styles.dot} ${activeIndex === idx ? styles.activeDot : ''}`}
            onClick={() => scrollToSlide(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>
    </div>
  );
}

