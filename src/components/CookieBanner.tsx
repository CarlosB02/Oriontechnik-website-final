'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, SlidersHorizontal, Check, X, ArrowLeft } from 'lucide-react';
import styles from './CookieBanner.module.css';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: string;
}

const STORAGE_KEY = 'orion_cookie_consent';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [lang, setLang] = useState<'PT' | 'EN'>('EN');

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  // Check language & existing consent on mount
  useEffect(() => {
    try {
      // 1. Language sync
      const savedLang = localStorage.getItem('orion_preferred_lang');
      if (savedLang === 'PT' || savedLang === 'EN') {
        setLang(savedLang);
      }

      // 2. Consent check
      const savedConsent = localStorage.getItem(STORAGE_KEY);
      if (!savedConsent) {
        // Show after a subtle delay for smooth entrance
        const timer = setTimeout(() => setIsOpen(true), 600);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(savedConsent) as CookiePreferences;
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
      }
    } catch {
      // Fallback
      setIsOpen(true);
    }
  }, []);

  // Listen for language changes and external triggers to open banner
  useEffect(() => {
    const handleLangChange = (e: CustomEvent<'PT' | 'EN'>) => {
      if (e.detail === 'PT' || e.detail === 'EN') {
        setLang(e.detail);
      }
    };

    const handleOpenBanner = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener('orionLanguageChange' as any, handleLangChange);
    window.addEventListener('orionOpenCookieBanner' as any, handleOpenBanner);

    return () => {
      window.removeEventListener('orionLanguageChange' as any, handleLangChange);
      window.removeEventListener('orionOpenCookieBanner' as any, handleOpenBanner);
    };
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    const payload: CookiePreferences = {
      ...prefs,
      necessary: true,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

      // Set standard compliance cookies
      const expiry = '; max-age=31536000; path=/; SameSite=Lax';
      const status =
        prefs.analytics && prefs.marketing
          ? 'allow'
          : !prefs.analytics && !prefs.marketing
            ? 'deny'
            : 'savesettings';

      document.cookie = `cookieconsent_status=${status}${expiry}`;
      document.cookie = `cookieconsent_status_tech=allow${expiry}`;
      document.cookie = `cookieconsent_status_marketing=${prefs.marketing ? 'allow' : 'deny'}${expiry}`;
      document.cookie = `nsc_bar_cs_done=done${expiry}`;

      window.dispatchEvent(new CustomEvent('orionCookieConsentChange', { detail: payload }));
    } catch {
      // Storage unavailable
    }

    setPreferences(payload);
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isOpen) return null;

  const isPT = lang === 'PT';

  return (
    <aside
      className={styles.bannerOverlay}
      role="region"
      aria-label={isPT ? 'Consentimento de Cookies' : 'Cookie Consent Banner'}
    >
      <div className={styles.bannerCard}>
        {!showPreferences ? (
          /* =========================================
             COMPACT BANNER VIEW
             ========================================= */
          <div className={styles.compactContainer}>
            <div className={styles.textSide}>
              <div className={styles.metaRow}>
                <h2 className={styles.bannerTitle}>
                  <Cookie size={14} className={styles.cookieTitleIcon} />
                  <span>{isPT ? 'Privacidade & Cookies' : 'Privacy & Cookies'}</span>
                </h2>
              </div>

              <p className={styles.bannerText}>
                {isPT ? (
                  <>
                    A Orion Technik utiliza cookies estritamente necessários para garantir a operação segura e fiável
                    da plataforma. Com o seu consentimento, usamos também cookies de desempenho para otimizar os nossos
                    serviços aeroespaciais. Saiba mais na nossa{' '}
                    <Link href="/cookies-declaration" className={styles.policyLink}>
                      Declaração de Cookies
                    </Link>{' '}
                    ou{' '}
                    <Link href="/privacy-policy" className={styles.policyLink}>
                      Política de Privacidade
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Orion Technik uses strictly necessary cookies to ensure secure and reliable operation of our
                    platform. With your consent, we also utilize performance cookies to enhance our aerospace services.
                    Learn more in our{' '}
                    <Link href="/cookies-declaration" className={styles.policyLink}>
                      Cookies Declaration
                    </Link>{' '}
                    or{' '}
                    <Link href="/privacy-policy" className={styles.policyLink}>
                      Privacy Policy
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>

            <div className={styles.actionsRow}>
              <button
                type="button"
                className={styles.btnCustomize}
                onClick={() => setShowPreferences(true)}
              >
                <SlidersHorizontal size={14} />
                <span>{isPT ? 'Personalizar' : 'Customize'}</span>
              </button>

              <button
                type="button"
                className={styles.btnReject}
                onClick={handleRejectNonEssential}
              >
                <span>{isPT ? 'Recusar Opcionais' : 'Decline Optional'}</span>
              </button>

              <button
                type="button"
                className={styles.btnAcceptAll}
                onClick={handleAcceptAll}
              >
                <Check size={15} />
                <span>{isPT ? 'Aceitar Todos' : 'Accept All'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* =========================================
             DETAILED PREFERENCES VIEW
             ========================================= */
          <div className={styles.preferencesContainer}>
            <div className={styles.prefHeader}>
              <div className={styles.prefTitleCol}>
                <span className={styles.badge}>
                  <ShieldCheck size={13} />
                  <span>{isPT ? 'Gestão de Consentimento' : 'Consent Management'}</span>
                </span>
                <h3 className={styles.prefTitle}>
                  {isPT ? 'Configuração de Preferências de Cookies' : 'Cookie & Privacy Preferences'}
                </h3>
                <p className={styles.prefSubtitle}>
                  {isPT
                    ? 'Ajuste os tipos de cookies que autoriza durante a sua navegação. Os cookies estritamente necessários mantêm-se sempre ativos.'
                    : 'Configure the categories of cookies you authorize during your visit. Strictly necessary cookies remain active to provide core functions.'}
                </p>
              </div>

              <button
                type="button"
                className={styles.closePrefBtn}
                onClick={() => setShowPreferences(false)}
                aria-label={isPT ? 'Voltar' : 'Back'}
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.categoryList}>
              {/* Category 1: Strictly Necessary */}
              <div className={styles.categoryCard}>
                <div className={styles.categoryInfo}>
                  <div className={styles.categoryTitleRow}>
                    <h4 className={styles.categoryName}>
                      {isPT ? 'Estritamente Necessários & Técnicos' : 'Strictly Necessary & Technical'}
                    </h4>
                    <span className={styles.statusAlwaysActive}>
                      {isPT ? 'Sempre Ativo' : 'Always Active'}
                    </span>
                  </div>
                  <p className={styles.categoryDesc}>
                    {isPT
                      ? 'Fundamentais para navegação segura, balanceamento de carga, formulários e memorização das suas escolhas de privacidade.'
                      : 'Essential for secure navigation, load balancing, contact forms, and recording your privacy preferences.'}
                  </p>
                </div>
                <label className={styles.toggleSwitch} aria-label="Strictly necessary cookies locked on">
                  <input type="checkbox" className={styles.toggleInput} checked disabled />
                  <span className={styles.toggleSlider} />
                </label>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className={styles.categoryCard}>
                <div className={styles.categoryInfo}>
                  <div className={styles.categoryTitleRow}>
                    <h4 className={styles.categoryName}>
                      {isPT ? 'Desempenho & Analítica' : 'Performance & Telemetry'}
                    </h4>
                  </div>
                  <p className={styles.categoryDesc}>
                    {isPT
                      ? 'Permitem recolher métricas anónimas e taxas de erro para melhoria contínua da rapidez e estabilidade do portal.'
                      : 'Allows aggregated anonymous metrics and telemetry to continuously optimize portal speed and responsiveness.'}
                  </p>
                </div>
                <label className={styles.toggleSwitch} aria-label="Toggle performance cookies">
                  <input
                    type="checkbox"
                    className={styles.toggleInput}
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                    }
                  />
                  <span className={styles.toggleSlider} />
                </label>
              </div>

              {/* Category 3: Marketing & Preferences */}
              <div className={styles.categoryCard}>
                <div className={styles.categoryInfo}>
                  <div className={styles.categoryTitleRow}>
                    <h4 className={styles.categoryName}>
                      {isPT ? 'Marketing & Personalização' : 'Marketing & Preferences'}
                    </h4>
                  </div>
                  <p className={styles.categoryDesc}>
                    {isPT
                      ? 'Guardam preferências regionais avançadas e ajudam a avaliar o impacto das nossas comunicações institucionais aeroespaciais.'
                      : 'Stores advanced regional preferences and helps evaluate engagement with our aerospace fleet communications.'}
                  </p>
                </div>
                <label className={styles.toggleSwitch} aria-label="Toggle marketing cookies">
                  <input
                    type="checkbox"
                    className={styles.toggleInput}
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                    }
                  />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
            </div>

            <div className={styles.prefFooter}>
              <button
                type="button"
                className={styles.btnCustomize}
                onClick={() => setShowPreferences(false)}
              >
                <ArrowLeft size={14} />
                <span>{isPT ? 'Voltar' : 'Back'}</span>
              </button>

              <button
                type="button"
                className={styles.btnReject}
                onClick={handleRejectNonEssential}
              >
                <span>{isPT ? 'Recusar Opcionais' : 'Decline Optional'}</span>
              </button>

              <button
                type="button"
                className={styles.btnAcceptAll}
                onClick={handleSaveCustom}
              >
                <Check size={15} />
                <span>{isPT ? 'Guardar Preferências' : 'Save Preferences'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

