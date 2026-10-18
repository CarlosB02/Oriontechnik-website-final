export interface JobOpening {
  id: string;
  title: string;
  department: string;
  departmentCategory: 'mro' | 'engineering' | 'supply-chain' | 'quality';
  location: string;
  workplaceType: 'On-site' | 'Hybrid';
  contractType: string;
  experienceLevel: string;
  summary: string;
  keyResponsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
  postedDate: string;
  urgentHiring?: boolean;
}

export const departmentFilters = [
  { id: 'all', label: 'All Openings' },
  { id: 'mro', label: 'MRO & Workshop' },
  { id: 'engineering', label: 'Engineering & CAMO' },
  { id: 'supply-chain', label: 'Supply Chain & AOG' },
  { id: 'quality', label: 'Quality & Compliance' },
] as const;

export const jobOpenings: JobOpening[] = [
  {
    id: 'b1-b2-licensed-engineer',
    title: 'Licensed Aircraft Maintenance Engineer (EASA Part 66 B1 / B2)',
    department: 'MRO & Component Workshop',
    departmentCategory: 'mro',
    location: 'Arruda dos Vinhos, Portugal',
    workplaceType: 'On-site',
    contractType: 'Full-time • Permanent',
    experienceLevel: 'Senior (5+ years)',
    summary:
      'Lead certifying and hands-on maintenance activities for dynamic assemblies, electrical components, and structural sub-systems in compliance with EASA & EMAR Part 145 standards.',
    keyResponsibilities: [
      'Perform scheduled and unscheduled maintenance, component repair, and overhaul in accordance with approved manufacturer CMMs and engineering data.',
      'Certify release to service (EASA Form 1 / Dual Release) for maintained aviation components within scope of approval.',
      'Troubleshoot electrical, mechanical, and avionics faults on test benches with calibrated diagnostic equipment.',
      'Mentor and oversee apprentice technicians and workshop specialists, enforcing strict foreign object damage (FOD) prevention.',
      'Maintain rigorous workshop logs, work order records, and regulatory airworthiness documentation.'
    ],
    requirements: [
      'Valid EASA Part 66 Aircraft Maintenance License (Category B1.1, B1.2, or B2).',
      'Minimum 5 years of verifiable experience in an approved Part 145 maintenance environment or component repair workshop.',
      'Proficiency with Component Maintenance Manuals (CMM), Illustrated Parts Catalogs (IPC), and Standard Operating Procedures (SOP).',
      'Solid working knowledge of European airworthiness regulations (EASA and/or EMAR).',
      'Fluency in English (technical level required); Portuguese proficiency is a distinct advantage.'
    ],
    whatWeOffer: [
      'Attractive remuneration package commensurate with certifying experience and ratings.',
      'Continuous type-rating and specialized technical training funded by the company.',
      'Comprehensive health insurance and meal subsidies.',
      'Permanent contract with stable career progression inside an expanding international aerospace player.',
      'Modern, air-conditioned workshop environment equipped with calibrated precision test benches.'
    ],
    postedDate: 'OCTOBER 2026',
    urgentHiring: true,
  },
  {
    id: 'component-overhaul-tech',
    title: 'Aviation Component Overhaul Technician (Mechanical / Hydraulics)',
    department: 'MRO & Component Workshop',
    departmentCategory: 'mro',
    location: 'Arruda dos Vinhos, Portugal',
    workplaceType: 'On-site',
    contractType: 'Full-time • Permanent',
    experienceLevel: 'Mid-Level (3+ years)',
    summary:
      'Execute precision disassembly, chemical cleaning, dimensional inspection, and bench assembly of aeronautical wheels, brakes, and hydraulic actuators.',
    keyResponsibilities: [
      'Disassemble, inspect, and overhaul landing gear assemblies, main wheels, brakes, and mechanical sub-components.',
      'Operate calibrated measuring instruments (micrometers, vernier calipers, dial gauges, torque wrenches) within aerospace tolerances.',
      'Execute chemical stripping, bead blasting, ultrasonic cleaning, and protective anti-corrosion treatments according to CMM specifications.',
      'Assist certifying staff in functional pressure testing and hydrostatic bench evaluations.',
      'Ensure complete component traceability, lot tracking, and cleanliness protocols across every assembly stage.'
    ],
    requirements: [
      'Technical diploma or certified vocational training in Mechanical, Aeronautical, or Automotive Maintenance.',
      '3+ years of practical experience in mechanical maintenance (aviation or high-precision automotive/industrial machinery).',
      'Rigorous attention to detail and ability to interpret technical engineering drawings and manuals in English.',
      'Strong safety and tool-control discipline.'
    ],
    whatWeOffer: [
      'Competitive salary with structured annual progression reviews.',
      'Direct pathway toward EASA Part 66 certification modules and practical experience logbook.',
      'Health insurance coverage and company perks.',
      'Team environment with seasoned master engineers and supportive leadership.'
    ],
    postedDate: 'OCTOBER 2026',
    urgentHiring: true,
  },
  {
    id: 'supply-chain-aog-specialist',
    title: 'Aerospace Supply Chain & AOG Expediting Specialist',
    department: 'Supply Chain & Logistics',
    departmentCategory: 'supply-chain',
    location: 'Arruda dos Vinhos, Portugal',
    workplaceType: 'On-site',
    contractType: 'Full-time • Permanent',
    experienceLevel: 'Mid to Senior (3-5 years)',
    summary:
      'Coordinate global procurement, OEM vendor relations, critical customs clearance, and 24/7 Aircraft On Ground (AOG) rapid dispatch logistics.',
    keyResponsibilities: [
      'Manage end-to-end procurement cycle for aerospace consumables, rotables, raw materials, and specialized tooling from authorized OEM distributors.',
      'Coordinate emergency AOG dispatch and express courier routing to minimize airline and military fleet ground downtime.',
      'Verify incoming airworthiness documentation (EASA Form 1, FAA 8130-3, Certificate of Conformity, trace documents).',
      'Liaise with Portuguese Customs, freight forwarders, and logistics partners for swift import/export clearance.',
      'Maintain inventory accuracy, shelf-life expiry tracking, and temperature-controlled storage compliance.'
    ],
    requirements: [
      'Degree in Logistics, Supply Chain Management, Business Administration, or equivalent aerospace logistics track record.',
      '3+ years of experience in aviation supply chain, airline material management, or aerospace distribution.',
      'Thorough understanding of airworthiness traceability documents (EASA Form 1, FAA 8130-3, CoC).',
      'Fluency in English (written and verbal); Portuguese is required for local customs and authority interactions.',
      'High responsiveness, proactive problem-solving, and resilience under deadline pressure.'
    ],
    whatWeOffer: [
      'Competitive compensation package with performance incentives.',
      'Exposure to global defense, airline, and governmental aerospace accounts.',
      'Career growth within our international supply chain and distribution division.',
      'Comprehensive health insurance and benefits.'
    ],
    postedDate: 'SEPTEMBER 2026',
  },
  {
    id: 'camo-airworthiness-engineer',
    title: 'CAMO & Technical Airworthiness Engineer',
    department: 'Engineering & Technical Services',
    departmentCategory: 'engineering',
    location: 'Arruda dos Vinhos, Portugal',
    workplaceType: 'Hybrid',
    contractType: 'Full-time • Permanent',
    experienceLevel: 'Mid to Senior (3+ years)',
    summary:
      'Oversee continuing airworthiness management (MT.CAMO.0107), maintenance program optimization, Airworthiness Directives (AD/SB) review, and operator technical records.',
    keyResponsibilities: [
      'Evaluate manufacturer Service Bulletins (SB), Airworthiness Directives (AD), and regulatory modifications for assigned fixed and rotary-wing fleets.',
      'Draft and update Aircraft Maintenance Programmes (AMP) and reliability monitoring reports in accordance with Part-CAMO regulations.',
      'Manage technical records, life-limited parts (LLP) status, engine logs, and modification history.',
      'Coordinate airworthiness reviews (ARC) and liaison with civil aviation authorities (ANAC) and military airworthiness bodies.',
      'Provide engineering liaison support for structural repairs, concession requests, and design engineering approvals.'
    ],
    requirements: [
      'Degree in Aerospace, Aeronautical, or Mechanical Engineering.',
      '3+ years experience within a certified CAMO organization or airline engineering department.',
      'In-depth knowledge of EASA Part-CAMO, Part-M, Part-ML, and Part-21 regulatory frameworks.',
      'Proficiency in aviation maintenance management software and technical data analysis.',
      'Excellent analytical skills and fluent command of professional English.'
    ],
    whatWeOffer: [
      'Hybrid work flexibility (Arruda dos Vinhos facility & remote engineering days).',
      'Competitive salary aligned with engineering expertise.',
      'Direct participation in high-visibility military and commercial aircraft sustainment projects.',
      'Health insurance and professional development sponsorships.'
    ],
    postedDate: 'SEPTEMBER 2026',
  },
  {
    id: 'quality-compliance-inspector',
    title: 'Quality Assurance & Airworthiness Inspector (Part 145 / EMAR 145)',
    department: 'Quality & Regulatory Affairs',
    departmentCategory: 'quality',
    location: 'Arruda dos Vinhos, Portugal',
    workplaceType: 'On-site',
    contractType: 'Full-time • Permanent',
    experienceLevel: 'Senior (4+ years)',
    summary:
      'Maintain and elevate Orion Technik’s quality management system, conducting internal audits, compliance oversight, and supplier surveillance under EASA & EMAR Part 145.',
    keyResponsibilities: [
      'Conduct planned internal audits across maintenance workshops, logistics stores, and engineering offices to guarantee 100% regulatory compliance.',
      'Manage the company occurrence reporting system, conducting root cause analysis and implementing corrective & preventive actions (CAPA).',
      'Perform incoming conformity audits on critical components, standard hardware, and subcontractors.',
      'Prepare the organization for external audits by civil aviation authorities (EASA / ANAC), military directorates (EMAR), and international OEM partners.',
      'Deliver internal quality and human factors training to certifying staff and workshop technicians.'
    ],
    requirements: [
      'Extensive background in aviation Quality Management Systems (EASA Part 145, EN 9100 / AS 9100, EMAR 145).',
      'Recognized Quality Auditor qualification or significant audit experience in the aerospace sector.',
      'Strong understanding of human factors, safety management systems (SMS), and aviation legislation.',
      'Flawless integrity, objectivity, and communication skills in English and Portuguese.'
    ],
    whatWeOffer: [
      'Key leadership position directly reporting to the Quality & Safety Director.',
      'Competitive salary reflecting high regulatory responsibility.',
      'Ongoing training in updated EASA / NATO / EMAR quality standards.',
      'Full health benefits package and company meal subsidy.'
    ],
    postedDate: 'AUGUST 2026',
  },
  {
    id: 'ndt-level-2-inspector',
    title: 'Non-Destructive Testing (NDT) Inspector (Level II - EN 4179 / NAS 410)',
    department: 'MRO & Component Workshop',
    departmentCategory: 'mro',
    location: 'Arruda dos Vinhos, Portugal',
    workplaceType: 'On-site',
    contractType: 'Full-time • Permanent',
    experienceLevel: 'Specialist (3+ years)',
    summary:
      'Conduct aerospace non-destructive testing (Eddy Current, Magnetic Particle, Liquid Penetrant, and Ultrasonic) on critical airframe structural parts and rotating assemblies.',
    keyResponsibilities: [
      'Perform NDT inspections in accordance with approved engineering procedures, technical orders, and client specifications.',
      'Prepare and certify written inspection reports detailing examination results, defect indications, and acceptance/rejection criteria.',
      'Calibrate and maintain NDT equipment, reference standards, and testing chemistries within required limits.',
      'Collaborate closely with repair engineers to evaluate structural fatigue, subsurface cracks, and corrosion wear.'
    ],
    requirements: [
      'Current Level II Certification in accordance with EN 4179 / NAS 410 in at least two methods (ET, MT, PT, or UT).',
      'Minimum 3 years aerospace NDT experience on aircraft components or metallic structures.',
      'Acute visual acuity and color perception (verified to aerospace standards).',
      'Knowledge of aerospace materials, heat treatments, and manufacturing processes.'
    ],
    whatWeOffer: [
      'High-tier compensation for certified aerospace NDT specialists.',
      'State-of-the-art dark room and inspection booths with calibrated instrumentation.',
      'Support for Level III qualification and multi-method certifications.',
      'Health insurance and full company benefits.'
    ],
    postedDate: 'OCTOBER 2026',
  },
];
