'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Download, ExternalLink, ShieldCheck, FileCheck2, Check } from 'lucide-react';
import styles from './CertificationsViewer.module.css';

export interface CertificateDoc {
  id: string;
  label: string;
  img: string;
  pdf: string;
}

export const certificatesData: CertificateDoc[] = [
  {
    id: 'easa-part-145',
    label: 'EASA Part 145 — Maintenance Organization Approval',
    img: '/certificates/EASA Part 145 — Maintenance Organization Approval.pdf',
    pdf: '/certificates/EASA Part 145 — Maintenance Organization Approval.pdf',
  },
  {
    id: 'aan-emar-pmar-145',
    label: 'AAN EMAR/PMAR Part 145 — Military Maintenance Organization Approval',
    img: '/certificates/AAN EMAR PMAR Part 145 Military Maintenance Organization Approval.pdf',
    pdf: '/certificates/AAN EMAR PMAR Part 145 Military Maintenance Organization Approval.pdf',
  },
  {
    id: 'nato-aqap-2110',
    label: 'Certification NATO AQAP 2110',
    img: '/certificates/Certification NATO AQAP 2110.pdf',
    pdf: '/certificates/Certification NATO AQAP 2110.pdf',
  },
  {
    id: 'as9100d-en9100',
    label: 'AS9100:D / JISQ 9100:2016 / EN 9100:2018',
    img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-as-9100-2024-scaled.webp',
    pdf: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-as-9100-2024-scaled.webp',
  },
  {
    id: 'iso-9001-2015',
    label: 'ISO 9001 : 2015',
    img: '/certificates/ISO 9001 2015.pdf',
    pdf: '/certificates/ISO 9001 2015.pdf',
  },
  {
    id: 'artex-programming',
    label: 'ARTex Programming and Battery Replacement Center Certification',
    img: '/certificates/ARTex Programming and Battery Replacement Center Certification.pdf',
    pdf: '/certificates/ARTex Programming and Battery Replacement Center Certification.pdf',
  },
  {
    id: 'kannad-approved',
    label: 'Kannad Approved Battery Replacement Center',
    img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificate-kabrc-scaled.webp',
    pdf: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificate-kabrc-scaled.webp',
  },
  {
    id: 'procurement-policy',
    label: 'Procurement Policy',
    img: '/certificates/Procurement Policy.pdf',
    pdf: '/certificates/Procurement Policy.pdf',
  },
  {
    id: 'confidentiality-policy',
    label: 'Confidentiality Policy',
    img: '/certificates/Confidentiality Policy.pdf',
    pdf: '/certificates/Confidentiality Policy.pdf',
  },
  {
    id: 'general-terms-sale',
    label: 'General Terms and Conditions of Sale',
    img: '/certificates/General Terms and Conditions of Sale.pdf',
    pdf: '/certificates/General Terms and Conditions of Sale.pdf',
  },
  {
    id: 'subcontractor-conditions',
    label: 'Order Conditions to Subcontractor',
    img: '/certificates/Order Conditions to Subcontractor.pdf',
    pdf: '/certificates/Order Conditions to Subcontractor.pdf',
  },
];

const standardsBadges = [
  { label: 'NATO CAGE: P3457', isCage: true },
  { label: 'EASA PART-145' },
  { label: 'EMAR PMAR-145' },
  { label: 'NATO AQAP 2110' },
  { label: 'AS/EN 9100' },
  { label: 'ISO 9001:2015' },
];

export default function CertificationsViewer() {
  const [active, setActive] = useState(0);
  const currentDoc = certificatesData[active];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((index + 1) % certificatesData.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((index - 1 + certificatesData.length) % certificatesData.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(certificatesData.length - 1);
    }
  };

  return (
    <section className={styles.certsSection} aria-label="Interactive Certifications and Standards Catalog">
      <div className="container">

        {/* Tabs & Document View Shell */}
        <div className={styles.tabsShell}>
          {/* Sidebar Tab List */}
          <div
            className={styles.tablist}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Certifications and Policies List"
          >
            <div className={styles.tabHeader}>
              <span className={styles.tabHeaderTitle}>Available Documents</span>
              <span className={styles.tabCount}>{certificatesData.length}</span>
            </div>

            {certificatesData.map((doc, idx) => {
              const isSelected = active === idx;
              return (
                <button
                  key={doc.id}
                  role="tab"
                  id={`tab-${doc.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${doc.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={`${styles.tabBtn} ${isSelected ? styles.tabBtnActive : ''}`}
                  onClick={() => setActive(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                >
                  <span className={styles.tabIndex}>
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <div className={styles.tabTextWrap}>
                    <span className={styles.tabLabel}>{doc.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Document Viewer Panel */}
          <div
            className={styles.viewerPanel}
            key={currentDoc.id}
            role="tabpanel"
            id={`panel-${currentDoc.id}`}
            aria-labelledby={`tab-${currentDoc.id}`}
          >
            <div className={styles.viewerCard}>
              <div className={styles.viewerCardHeader}>
                <div className={styles.viewerMeta}>
                  <h3 className={styles.viewerTitle}>{currentDoc.label}</h3>
                </div>

                <div className={styles.viewerCardActions}>
                  <a
                    href={encodeURI(currentDoc.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadBtn}
                    title="Download Official Certificate PDF"
                    download
                  >
                    <Download size={16} />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href={encodeURI(currentDoc.pdf.endsWith('.pdf') ? currentDoc.pdf : currentDoc.img)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.openLinkBtn}
                    title="Open Full Resolution in New Tab"
                    aria-label="Open document in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Document Scroll Viewport / PDF Viewer */}
              <div className={styles.imageFrame}>
                {currentDoc.pdf.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={`${encodeURI(currentDoc.pdf)}#toolbar=0&navpanes=0`}
                    title={`${currentDoc.label} preview`}
                    className={styles.pdfViewer}
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={currentDoc.img}
                    alt={`${currentDoc.label} certificate documentation`}
                    className={styles.certImage}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
