'use client';

import { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number; // duration in ms
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
  className?: string;
}

export default function StatCounter({
  end,
  duration = 1600,
  prefix = '',
  suffix = '',
  formatter,
  className = '',
}: StatCounterProps) {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasAnimated, end, duration]);

  const displayVal = formatter
    ? formatter(count)
    : count.toLocaleString('en-US');

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayVal}
      {suffix}
    </span>
  );
}
