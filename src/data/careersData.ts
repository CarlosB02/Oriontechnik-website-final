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
  { id: 'supply-chain', label: 'Supply Chain & Logistics' },
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
];
