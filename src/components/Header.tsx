'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<'PT' | 'EN'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'CAPABILITIES', href: '/capabilities' },
    { label: 'QUALITY', href: '/quality' },
    { label: 'NEWS', href: '/news' },
    { label: 'WHERE WE ARE', href: '/where-we-are' },
    { label: 'CONTACTS', href: '/contacts' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Orion Technik Homepage">
          <div className={styles.logoWrapper}>
            <Image
              src="/logos/orion-technik-logo-white.svg"
              alt="Orion Technik Maintenance & Engineering"
              width={260}
              height={44}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className={styles.langSelector} role="group" aria-label="Language selection">
            <button
              type="button"
              className={`${styles.langFlagBtn} ${activeLang === 'PT' ? styles.langFlagActive : ''}`}
              onClick={() => setActiveLang('PT')}
              aria-pressed={activeLang === 'PT'}
              title="Português"
            >
              <Image
                src="/images/flag-pt.png"
                alt="Português"
                width={24}
                height={16}
                className={styles.flagImg}
              />
            </button>
            <button
              type="button"
              className={`${styles.langFlagBtn} ${activeLang === 'EN' ? styles.langFlagActive : ''}`}
              onClick={() => setActiveLang('EN')}
              aria-pressed={activeLang === 'EN'}
              title="English"
            >
              <Image
                src="/images/flag-en.png"
                alt="English"
                width={24}
                height={16}
                className={styles.flagImg}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={styles.hamburgerBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileDrawerContent}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.mobileNavItem}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={handleNavClick}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className={styles.mobileNavIcon} />
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileDrawerFooter}>
            <div className={styles.mobileLangSelector}>
              <Globe size={18} />
              <span>Language:</span>
              <button
                type="button"
                className={`${styles.langFlagBtn} ${activeLang === 'PT' ? styles.langFlagActive : ''}`}
                onClick={() => setActiveLang('PT')}
                title="Português"
              >
                <Image
                  src="/images/flag-pt.png"
                  alt="Português"
                  width={24}
                  height={16}
                  className={styles.flagImg}
                />
              </button>
              <button
                type="button"
                className={`${styles.langFlagBtn} ${activeLang === 'EN' ? styles.langFlagActive : ''}`}
                onClick={() => setActiveLang('EN')}
                title="English"
              >
                <Image
                  src="/images/flag-en.png"
                  alt="English"
                  width={24}
                  height={16}
                  className={styles.flagImg}
                />
              </button>
            </div>
            <p className={styles.mobileHqInfo}>Arruda dos Vinhos, Portugal</p>
          </div>
        </div>
      </div>
    </header>
  );
}
