'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './MroCapabilitiesCarousel.module.css';

export interface MroDomain {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

interface MroCapabilitiesCarouselProps {
  items: MroDomain[];
}

export default function MroCapabilitiesCarousel({ items }: MroCapabilitiesCarouselProps) {
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
        className={styles.mroGrid}
        onScroll={handleScroll}
      >
        {items.map((item) => (
          <div key={item.id} className={styles.mroItem}>
            <div className={styles.mroIconWrap}>{item.icon}</div>
            <h4 className={styles.mroItemTitle}>{item.name}</h4>
            <p className={styles.mroItemDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Carousel indicators (dots) visible only on mobile */}
      <div
        className={styles.dotsContainer}
        role="tablist"
        aria-label="MRO capabilities carousel dots"
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

