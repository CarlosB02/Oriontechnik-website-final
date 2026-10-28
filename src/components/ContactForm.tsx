'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

interface FormState {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  division: string;
  partNumber: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: '',
  email: '',
  organization: '',
  phone: '',
  division: 'Repair Capabilities & MRO',
  partNumber: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setIsSubmitted(false);
    setErrorMessage('');
  };

  if (isSubmitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIconWrap}>
          <CheckCircle2 size={54} className={styles.successIcon} />
        </div>
        <h3 className={styles.successTitle}>Inquiry Successfully Received</h3>
        <p className={styles.successText}>
          Thank you for contacting Orion Technik. Your message has been routed to our specialized engineering and support team in Arruda dos Vinhos.
        </p>
        <p className={styles.successNotice}>
          A technical liaison will review your requirements and respond within standard operational hours (or immediately if classified as AOG).
        </p>
        <button
          type="button"
          onClick={handleReset}
          className={styles.resetBtn}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Transmit Your Requirements</h2>
        <p className={styles.formSubtitle}>
          Complete the form below to reach our maintenance engineers, supply chain specialists, or technical representatives.
        </p>
      </div>

      {errorMessage && (
        <div className={styles.errorAlert} role="alert">
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Full Name & Corporate Email */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Capt. Carlos Santos"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Corporate Email <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="carlos.santos@operator.com"
              className={styles.input}
            />
          </div>
        </div>

        {/* Organization & Telephone */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="organization" className={styles.label}>
              Organization / Airline / Military Entity
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Carrier or Defense Force"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="phone" className={styles.label}>
              Telephone / Direct Line
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+351 912 345 678"
              className={styles.input}
            />
          </div>
        </div>

        {/* Detailed Message / Work Scope */}
        <div className={styles.fieldGroup}>
          <label htmlFor="message" className={styles.label}>
            Scope of Work or Inquired Services <span className={styles.requiredMark}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your repair scope, turnaround requirements, quantity, or technical inquiries..."
            className={styles.textarea}
          />
        </div>

        {/* Submit Button */}
        <div className={styles.submitRow}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitBtn}
          >
            {isSubmitting ? (
              <span>Transmitting...</span>
            ) : (
              <>
                <span>Send Technical Inquiry</span>
                <Send size={16} />
              </>
            )}
          </button>
          <span className={styles.confidentialNote}>
            All transmissions are treated with confidentiality.
          </span>
        </div>
      </form>
    </div>
  );
}
