'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Repair Capabilities & MRO Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: 'Repair Capabilities & MRO Inquiry',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className={styles.modalBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contactModalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalContainer} ref={modalRef}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close Contact Dialog"
        >
          <X size={22} />
        </button>

        <div className={styles.modalGrid}>
          {/* Left Info Panel */}
          <div className={styles.infoSide}>
            <span className={styles.badge}>Get In Touch</span>
            <h2 id="contactModalTitle" className={styles.modalHeading}>
              ORION TECHNIK
            </h2>
            <p className={styles.modalLead}>
              EASA &amp; EMAR Part 145 Approved Maintenance, Repair &amp; Supply Chain Support.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <div>
                  <h4 className={styles.contactLabel}>FACILITY ADDRESS</h4>
                  <p className={styles.contactVal}>
                    Caminho do Parrau 10, 2630-369 Arruda dos Vinhos, Portugal
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <div>
                  <h4 className={styles.contactLabel}>TELEPHONE</h4>
                  <a href="tel:+351210987098" className={styles.contactValLink}>
                    +351 210 987 098
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <div>
                  <h4 className={styles.contactLabel}>EMAIL INQUIRIES</h4>
                  <a href="mailto:info@oriontechnik.com" className={styles.contactValLink}>
                    info@oriontechnik.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className={styles.formSide}>
            {isSubmitted ? (
              <div className={styles.successState}>
                <CheckCircle size={52} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Inquiry Transmitted</h3>
                <p className={styles.successDesc}>
                  Thank you for contacting Orion Technik. Our engineering and technical team will review your requirements and respond shortly.
                </p>
                <button type="button" onClick={handleReset} className={styles.submitBtn}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Request Quotation or Information</h3>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name / Title *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                    placeholder="e.g. Captain Jean Dupont"
                  />
                </div>

                <div className={styles.rowInputs}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Corporate Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input}
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="organization" className={styles.label}>
                      Company / Operator
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={styles.input}
                      placeholder="Air Carrier / Defense Entity"
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Inquiry Division
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={styles.select}
                  >
                    <option value="Repair Capabilities & MRO Inquiry">Repair Capabilities &amp; MRO</option>
                    <option value="Supply Chain & Aerospace Parts">Supply Chain &amp; Parts Distribution</option>
                    <option value="Technical & Engineering Support">Technical &amp; Engineering Consulting</option>
                    <option value="Fleet Maintenance Program">Supported Fleet Program</option>
                    <option value="General Inquiries">General / Administrative</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Requirement Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                    placeholder="Specify part numbers, aircraft model, repair scope, or project specifications..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    'Transmitting...'
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
