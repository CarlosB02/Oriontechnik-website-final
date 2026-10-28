'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileText,
  X,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';
import { jobOpenings } from '@/data/careersData';
import styles from './CareersApplicationForm.module.css';

interface CareersApplicationFormProps {
  selectedJobId?: string;
}

interface CareersFormState {
  fullName: string;
  email: string;
  phone: string;
  positionId: string;
  experienceLevel: string;
  certifications: string;
  linkedin: string;
  message: string;
  consent: boolean;
}

const initialFormState: CareersFormState = {
  fullName: '',
  email: '',
  phone: '',
  positionId: 'spontaneous-general',
  experienceLevel: '3-5 years (Mid-Level)',
  certifications: '',
  linkedin: '',
  message: '',
  consent: false,
};

export default function CareersApplicationForm({
  selectedJobId,
}: CareersApplicationFormProps) {
  const [formData, setFormData] = useState<CareersFormState>(initialFormState);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [applicationRef, setApplicationRef] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Synchronize when selectedJobId changes from parent
  useEffect(() => {
    if (selectedJobId) {
      setFormData((prev) => ({
        ...prev,
        positionId: selectedJobId,
      }));
    }
  }, [selectedJobId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const file = e.target.files?.[0];
    if (!file) return;

    validateAndSetFile(file);
  };

  const validateAndSetFile = (file: File) => {
    // 10MB maximum
    const maxSizeBytes = 10 * 1024 * 1024;
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();

    if (!allowedExtensions.includes(fileExt)) {
      setFileError('Please attach a PDF or Word document (.pdf, .docx, .doc).');
      return;
    }

    if (file.size > maxSizeBytes) {
      setFileError('File size exceeds the 10MB maximum limit.');
      return;
    }

    setAttachedFile(file);
    setFileError('');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setErrorMessage('Please fill in all mandatory fields marked with an asterisk (*).');
      return;
    }

    if (!formData.consent) {
      setErrorMessage(
        'Please consent to the processing of personal data for recruitment purposes.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setApplicationRef(`OT-REC-2026-${randomCode}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setAttachedFile(null);
    setFileError('');
    setIsSubmitted(false);
    setErrorMessage('');
    setApplicationRef('');
  };

  // Find human readable label for selected position
  const selectedJob = jobOpenings.find((j) => j.id === formData.positionId);
  const positionLabel = selectedJob
    ? selectedJob.title
    : formData.positionId === 'spontaneous-general'
      ? 'Spontaneous Application - General Aviation'
      : formData.positionId === 'spontaneous-mro'
        ? 'Spontaneous Application - MRO & Workshop'
        : formData.positionId === 'spontaneous-eng'
          ? 'Spontaneous Application - Engineering & CAMO'
          : formData.positionId === 'spontaneous-supply'
            ? 'Spontaneous Application - Supply Chain & Logistics'
            : 'Spontaneous Application';

  if (isSubmitted) {
    return (
      <div className={styles.successCard} id="application-success">
        <div className={styles.successIconWrap}>
          <CheckCircle2 size={56} className={styles.successIcon} />
        </div>
        <span className={styles.successRefTag}>
          REFERENCE: <strong>{applicationRef}</strong>
        </span>
        <h3 className={styles.successTitle}>Application Received Successfully</h3>
        <p className={styles.successText}>
          Thank you, <strong>{formData.fullName}</strong>. Your application for{' '}
          <strong>{positionLabel}</strong> has been transmitted directly to the Orion
          Technik Talent &amp; Engineering Acquisition team in Arruda dos Vinhos.
        </p>

        <div className={styles.timelineBox}>
          <h4 className={styles.timelineTitle}>
            <Clock size={16} /> What Happens Next?
          </h4>
          <ol className={styles.timelineList}>
            <li>
              <strong>Initial Review (Within 48h):</strong> Our HR team and Lead
              Engineers review your credentials and Part 66 / technical background.
            </li>
            <li>
              <strong>Introductory Discussion:</strong> Qualified candidates will be
              contacted for a brief technical phone or video interview.
            </li>
            <li>
              <strong>Arruda dos Vinhos Facility Visit:</strong> Practical evaluation,
              workshop walkthrough, and formal meeting with engineering directors.
            </li>
          </ol>
        </div>

        <p className={styles.successNote}>
          A confirmation email has been dispatched to <strong>{formData.email}</strong>.
          Should you require immediate follow-up, contact our Talent team at{' '}
          <a href="mailto:careers@oriontechnik.com" className={styles.successEmailLink}>
            careers@oriontechnik.com
          </a>
          .
        </p>

        <button type="button" onClick={handleReset} className={styles.resetBtn}>
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formCard} id="candidatura-spot">
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Apply for a Position at Orion Technik</h2>
        <p className={styles.formSubtitle}>
          Complete the form below to apply for an active vacancy or submit a spontaneous
          application.
        </p>
      </div>

      {errorMessage && (
        <div className={styles.errorAlert} role="alert">
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Full Name & Email */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="careers-fullName" className={styles.label}>
              Full Name <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="text"
              id="careers-fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Eng. Pedro Santos"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="careers-email" className={styles.label}>
              Email Address <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="email"
              id="careers-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="pedro.santos@domain.com"
              className={styles.input}
            />
          </div>
        </div>

        {/* Telephone & Position Selection */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="careers-phone" className={styles.label}>
              Contact Number (Phone / WhatsApp){' '}
              <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="tel"
              id="careers-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+351 912 345 678"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="careers-position" className={styles.label}>
              Target Role / Vacancy <span className={styles.requiredMark}>*</span>
            </label>
            <select
              id="careers-position"
              name="positionId"
              value={formData.positionId}
              onChange={handleChange}
              className={styles.select}
            >
              <optgroup label="Available Vacancies (Arruda dos Vinhos)">
                {jobOpenings.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title} ({job.departmentCategory.toUpperCase()})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Spontaneous Applications (Candidatura Espontânea)">
                <option value="spontaneous-general">
                  Spontaneous Application — Any Department
                </option>
                <option value="spontaneous-mro">
                  Spontaneous Application — MRO &amp; Workshop Technicians
                </option>
                <option value="spontaneous-eng">
                  Spontaneous Application — Engineering &amp; CAMO
                </option>
                <option value="spontaneous-supply">
                  Spontaneous Application — Supply Chain &amp; Logistics
                </option>
                <option value="spontaneous-quality">
                  Spontaneous Application — Quality &amp; Regulatory Compliance
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* LinkedIn or Online Profile */}
        <div className={styles.fieldGroup}>
          <label htmlFor="careers-linkedin" className={styles.label}>
            LinkedIn Profile or Online CV (Optional)
          </label>
          <input
            type="url"
            id="careers-linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://www.linkedin.com/in/yourprofile"
            className={styles.input}
          />
        </div>

        {/* Resume / CV Attachment Spot */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Attach Curriculum Vitae (CV / Resume)
          </label>

          <input
            ref={fileInputRef}
            type="file"
            id="careers-cv-file"
            name="cvFile"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className={styles.hiddenFileInput}
          />

          {!attachedFile ? (
            <div
              className={styles.dropZone}
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  fileInputRef.current?.click();
                }
              }}
            >
              <UploadCloud size={32} className={styles.uploadIcon} />
              <div className={styles.dropZoneText}>
                <span className={styles.uploadTitle}>
                  Click to upload or drag &amp; drop your CV
                </span>
                <span className={styles.uploadMeta}>
                  Supported formats: PDF, DOCX, DOC (Maximum file size: 10 MB)
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.fileSelectedBox}>
              <div className={styles.fileInfo}>
                <FileText size={24} className={styles.fileIcon} />
                <div className={styles.fileDetails}>
                  <span className={styles.fileName}>{attachedFile.name}</span>
                  <span className={styles.fileSize}>
                    {(attachedFile.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRemoveFile}
                className={styles.removeFileBtn}
                title="Remove file"
                aria-label="Remove attached file"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {fileError && <span className={styles.fileErrorText}>{fileError}</span>}
        </div>

        {/* Cover Note / Message */}
        <div className={styles.fieldGroup}>
          <label htmlFor="careers-message" className={styles.label}>
            Cover Note &amp; Motivation (Optional)
          </label>
          <textarea
            id="careers-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Introduce yourself, your key aerospace competencies, current availability, and why you wish to join Orion Technik..."
            className={styles.textarea}
          />
        </div>

        {/* GDPR Consent Checkbox */}
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={styles.checkbox}
              required
            />
            <span className={styles.checkboxText}>
              I consent to the collection and processing of my personal data by Orion
              Technik for recruitment and candidate evaluation purposes in accordance with
              the European GDPR and company{' '}
              <a href="/privacy-policy" target="_blank" className={styles.inlineLink}>
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>

        {/* Submit Button & Confidentiality */}
        <div className={styles.submitRow}>
          <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            {isSubmitting ? (
              <span>Transmitting Application...</span>
            ) : (
              <>
                <span>Submit Application</span>
                <Send size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
