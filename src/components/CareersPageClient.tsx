'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  Award,
  Wrench,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Building,
  Mail,
  Phone,
  Plane,
} from 'lucide-react';
import { jobOpenings, departmentFilters, JobOpening } from '@/data/careersData';
import CareersApplicationForm from '@/components/CareersApplicationForm';
import styles from './CareersPageClient.module.css';

export default function CareersPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [targetJobId, setTargetJobId] = useState<string>('b1-b2-licensed-engineer');

  // Filter job list
  const filteredJobs = jobOpenings.filter((job) => {
    if (selectedCategory === 'all') return true;
    return job.departmentCategory === selectedCategory;
  });

  const handleApplyClick = (jobId: string) => {
    setTargetJobId(jobId);
    // Smooth scroll to application form
    const spotElement = document.getElementById('candidatura-spot');
    if (spotElement) {
      spotElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleExpand = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.headerTitleWrap}>
            <h1 className={styles.pageTitle}>CAREERS AT ORION TECHNIK</h1>
            <p className={styles.pageLead}>
              Build your career where precision matters. Join a team of engineers, technicians and specialists keeping defense and commercial aircraft mission-ready around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container">
        {/* Section 1: Open Vacancies (Vagas Disponíveis) */}
        <section className={styles.vacanciesSection} id="vagas-disponiveis" aria-label="Available Positions">
          <div className={styles.sectionHeadingWrap}>
            <div className={styles.sectionTitleBlock}>
              <h2 className={styles.sectionTitle}>Available Job Openings</h2>
              <p className={styles.sectionSubtitle}>
                Opportunities in engineering, maintenance, quality and supply chain. Select a position that fits you and apply.
              </p>
            </div>

            <div className={styles.openCountBadge}>
              <span className={styles.openCountNumber}>{jobOpenings.length}</span>
              <span className={styles.openCountText}>Active Roles</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className={styles.filterBar} role="tablist" aria-label="Filter vacancies by department">
            {departmentFilters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === tab.id}
                className={`${styles.filterBtn} ${selectedCategory === tab.id ? styles.filterBtnActive : ''}`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Vacancies List */}
          <div className={styles.jobsList}>
            {filteredJobs.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No open positions match this department at the moment.</p>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={styles.resetFilterBtn}
                >
                  View All Openings
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <article key={job.id} className={styles.jobCard}>
                    {/* Job Title & Summary */}
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobSummary}>{job.summary}</p>

                    {/* Quick Specs Pill Row & Expand Toggle */}
                    <div className={styles.specPillRow}>
                      <div className={styles.specPills}>
                        <span className={styles.specPill}>
                          <Clock size={13} /> {job.contractType}
                        </span>
                        <span className={styles.specPill}>
                          <Award size={13} /> {job.experienceLevel}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpand(job.id)}
                        className={styles.expandToggleBtn}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Full Details' : 'View Full Details'}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>

                    {/* Expandable Details Container */}
                    {isExpanded && (
                      <div className={styles.expandedDetails}>
                        <div className={styles.detailBlock}>
                          <h4 className={styles.detailBlockTitle}>Key Responsibilities:</h4>
                          <ul className={styles.detailList}>
                            {job.keyResponsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.detailBlock}>
                          <h4 className={styles.detailBlockTitle}>Candidate Requirements:</h4>
                          <ul className={styles.detailList}>
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.detailBlock}>
                          <h4 className={styles.detailBlockTitle}>What Orion Technik Offers:</h4>
                          <ul className={styles.detailList}>
                            {job.whatWeOffer.map((offer, i) => (
                              <li key={i}>{offer}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Action Footer */}
                    <div className={styles.jobCardActions}>
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.id)}
                        className={styles.applyBtn}
                        aria-label={`Apply for ${job.title}`}
                      >
                        <span>Apply for this Role</span>
                        <ArrowRight size={15} />
                      </button>

                      <span className={styles.postedDate}>
                        {job.postedDate}
                      </span>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>

        {/* Section 2: Application Spot & Spontaneous Submissions */}
        <section className={styles.applicationSection} aria-label="Application Form and Submission Spot">
          <div className={styles.applicationGrid}>
            {/* Left Column: Why Orion Technik & Process */}
            <div className={styles.infoCol}>
              {/* Spontaneous Info Card */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Don&apos;t See the Right Fit?</h3>
                <p className={styles.sideCardText}>
                  We’re always looking for talented people in aviation maintenance, engineering and supply chain. Send us your CV and we’ll get in touch when the right opportunity comes up.
                </p>

                <div className={styles.talentDirectChannels}>
                  <div className={styles.talentChannelItem}>
                    <Mail size={16} className={styles.talentChannelIcon} />
                    <div>
                      <span className={styles.talentChannelLabel}>DIRECT RECRUITMENT EMAIL</span>
                      <a href="mailto:careers@oriontechnik.com" className={styles.talentChannelLink}>
                        careers@oriontechnik.com
                      </a>
                    </div>
                  </div>

                  <div className={styles.talentChannelItem}>
                    <Phone size={16} className={styles.talentChannelIcon} />
                    <div>
                      <span className={styles.talentChannelLabel}>HR DIRECT LINE</span>
                      <a href="tel:+351210987098" className={styles.talentChannelLink}>
                        +351 210 987 098
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Application Form (Spot para se candidatarem) */}
            <div className={styles.formCol}>
              <CareersApplicationForm selectedJobId={targetJobId} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
