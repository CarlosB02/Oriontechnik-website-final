'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Award,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Building,
  Mail,
  Phone,
  Plane,
  HeartHandshake,
} from 'lucide-react';
import { jobOpenings, departmentFilters, JobOpening } from '@/data/careersData';
import CareersApplicationForm from '@/components/CareersApplicationForm';
import styles from './CareersPageClient.module.css';

export default function CareersPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(jobOpenings[0]?.id || null);
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
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
            <Link href="/" className={styles.breadcrumbLink}>
              <ArrowLeft size={14} />
              <span>Home</span>
            </Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbCurrent}>Careers &amp; Recruitment</span>
          </nav>

          <div className={styles.headerTitleWrap}>
            <div className={styles.headerBadge}>
              <Sparkles size={14} />
              <span>AEROSPACE TALENT ACQUISITION • ARRUDA DOS VINHOS</span>
            </div>
            <h1 className={styles.pageTitle}>CAREERS AT ORION TECHNIK</h1>
            <p className={styles.pageLead}>
              Elevate your career at an approved European EASA &amp; EMAR Part 145 repair
              station. We are assembling top-tier maintenance engineers, workshop
              technicians, airworthiness specialists, and logistics coordinators to sustain
              critical defense and commercial aviation fleets worldwide.
            </p>
          </div>

          {/* Quick Stats / Highlights */}
          <div className={styles.heroHighlights}>
            <div className={styles.highlightCard}>
              <Award className={styles.highlightIcon} size={22} />
              <div className={styles.highlightText}>
                <strong>EASA &amp; EMAR Part 145</strong>
                <span>Certified European repair station standard (PT.145.037)</span>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <Wrench className={styles.highlightIcon} size={22} />
              <div className={styles.highlightText}>
                <strong>Precision Workshop</strong>
                <span>Advanced calibrated test benches &amp; component tooling</span>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <GraduationCap className={styles.highlightIcon} size={22} />
              <div className={styles.highlightText}>
                <strong>Continuous Training</strong>
                <span>Part 66 module support &amp; ongoing OEM certifications</span>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <Plane className={styles.highlightIcon} size={22} />
              <div className={styles.highlightText}>
                <strong>25 Min from Lisbon</strong>
                <span>Arruda dos Vinhos facility near LIS Airport Cargo Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container">
        {/* Section 1: Open Vacancies (Vagas Disponíveis) */}
        <section className={styles.vacanciesSection} id="vagas-disponiveis" aria-label="Available Positions">
          <div className={styles.sectionHeadingWrap}>
            <div className={styles.sectionTitleBlock}>
              <span className={styles.sectionTag}>OPPORTUNITIES IN ARRUDA DOS VINHOS</span>
              <h2 className={styles.sectionTitle}>Available Job Openings</h2>
              <p className={styles.sectionSubtitle}>
                Explore current engineering, MRO, quality, and supply chain opportunities.
                Select a position to view full technical requirements or apply directly.
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
                    {/* Top Meta Header */}
                    <div className={styles.jobCardTop}>
                      <div className={styles.jobBadgeGroup}>
                        <span className={styles.deptBadge}>{job.department}</span>
                        <span className={styles.locationBadge}>
                          <MapPin size={13} /> {job.location}
                        </span>
                        <span className={styles.workplaceBadge}>
                          {job.workplaceType}
                        </span>
                        {job.urgentHiring && (
                          <span className={styles.urgentBadge}>Urgent Hiring</span>
                        )}
                      </div>
                      <span className={styles.postedDate}>{job.postedDate}</span>
                    </div>

                    {/* Job Title & Summary */}
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobSummary}>{job.summary}</p>

                    {/* Quick Specs Pill Row */}
                    <div className={styles.specPillRow}>
                      <span className={styles.specPill}>
                        <Clock size={13} /> {job.contractType}
                      </span>
                      <span className={styles.specPill}>
                        <Award size={13} /> {job.experienceLevel}
                      </span>
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

                      <button
                        type="button"
                        onClick={() => toggleExpand(job.id)}
                        className={styles.expandToggleBtn}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Specifications' : 'View Full Details'}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
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
                <span className={styles.sideCardTag}>CANDIDATURA ESPONTÂNEA</span>
                <h3 className={styles.sideCardTitle}>Don&apos;t See the Right Fit?</h3>
                <p className={styles.sideCardText}>
                  We are continuously seeking certified aeronautical mechanics, structural
                  engineers, avionics experts, and defense supply coordinators. Send us
                  your spontaneous application and our HR department will keep your resume in
                  our priority candidate pool.
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

              {/* Recruitment Journey Steps */}
              <div className={styles.processCard}>
                <h3 className={styles.processTitle}>Our Recruitment Process</h3>
                <ol className={styles.processSteps}>
                  <li className={styles.processStepItem}>
                    <span className={styles.stepNum}>01</span>
                    <div className={styles.stepContent}>
                      <strong>Application &amp; Credentials Screening</strong>
                      <p>Our engineering leads evaluate your CV, certifications (Part 66 / degrees), and technical background within 48 hours.</p>
                    </div>
                  </li>

                  <li className={styles.processStepItem}>
                    <span className={styles.stepNum}>02</span>
                    <div className={styles.stepContent}>
                      <strong>Discovery Call with Talent Team</strong>
                      <p>A 20-minute conversation to align expectations, practical experience, career aspirations, and project interests.</p>
                    </div>
                  </li>

                  <li className={styles.processStepItem}>
                    <span className={styles.stepNum}>03</span>
                    <div className={styles.stepContent}>
                      <strong>Technical Interview &amp; Workshop Tour</strong>
                      <p>Visit our Arruda dos Vinhos facility, inspect our test benches and workshops, and meet your prospective engineering team.</p>
                    </div>
                  </li>

                  <li className={styles.processStepItem}>
                    <span className={styles.stepNum}>04</span>
                    <div className={styles.stepContent}>
                      <strong>Contract Proposal &amp; Onboarding</strong>
                      <p>Receive your formal offer, safety training plan, and customized certification advancement path.</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Facility Environment Note */}
              <div className={styles.facilityCard}>
                <div className={styles.facilityCardHeader}>
                  <Building size={20} className={styles.facilityIcon} />
                  <div>
                    <h4 className={styles.facilityTitle}>Arruda dos Vinhos Aerospace Facility</h4>
                    <span className={styles.facilityLoc}>Lisbon Metropolitan Area, Portugal</span>
                  </div>
                </div>
                <p className={styles.facilityDesc}>
                  Located just 25 minutes from Lisbon Airport Cargo Hub (LIS), our facility
                  provides free employee parking, modern air-conditioned work areas, and
                  calibrated tooling according to global aviation standards.
                </p>
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
