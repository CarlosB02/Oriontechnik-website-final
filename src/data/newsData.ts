export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  summary: string;
  content: string[];
  keyHighlights: string[];
  image: string;
  author: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'swedish-defense-contract',
    title:
      'Orion Technik has been awarded a three years maintenance contract by the swedish defense material administration',
    date: 'MAY 29, 2026',
    isoDate: '2026-05-29',
    category: 'Contracts & Defense',
    summary:
      'The multi-year agreement reinforces Orion Technik as a trusted defense aviation partner for scheduled MRO, component overhauls, and mission-critical supply logistics.',
    content: [
      'Orion Technik Maintenance & Engineering is proud to announce the signing of a strategic three-year comprehensive maintenance contract with the Swedish Defence Materiel Administration (FMV). This high-profile award covers scheduled maintenance, dynamic component repair, and tactical lifecycle sustainment for frontline aerial defense assets.',
      'Under the terms of the agreement, Orion Technik will provide turnkey depot-level engineering support, calibrated test bench evaluations, and guaranteed turn-around times (TAT) for critical aerospace assemblies out of its certified European facilities.',
      'Our team is deeply honored by the trust demonstrated by the Swedish Defence Materiel Administration. This contract validates our unwavering focus on technical precision, EMAR Part 145 military compliance, and agile supply chain logistics.',
      'The operations will commence immediately, with dedicated technical liaisons stationed between Portugal and the Nordic operational bases to ensure uninterrupted fleet readiness.'
    ],
    keyHighlights: [
      '3-Year Depot Level Sustainment Agreement',
      'Full compliance with EMAR Part 145 military airworthiness standards',
      'Fast-track AOG parts availability and dynamic component overhaul',
      'Guaranteed operational availability metrics for defense aviation fleets'
    ],
    image: '/images/news-swedish-contract.jpg',
    author: 'Orion Technik Defense Division',
    readTime: '4 min read',
  },
  {
    slug: 'indonesian-air-force-approval',
    title:
      'Orion Technik - Maintenance & Engineering is now approved by the Indonesian Air Force Airworthiness and Aviation Safety Center',
    date: 'MAY 29, 2026',
    isoDate: '2026-05-29',
    category: 'Airworthiness & Approvals',
    summary:
      'Official foreign repair station certification expands Orion Technik’s international military airworthiness accreditation across the Asia-Pacific region.',
    content: [
      'Orion Technik has received formal accreditation from the Indonesian Air Force Airworthiness and Aviation Safety Center (Puslaiklambangjaau). Following rigorous facility inspections, quality system evaluations, and engineering process audits, Orion Technik has been granted approved foreign repair station status.',
      'The accreditation authorizes Orion Technik to perform scheduled component repairs, avionics overhauls, and hydraulic subsystem testing for aircraft operated by the Indonesian Armed Forces.',
      'This landmark milestone signifies an important step in Orion Technik’s international expansion, bringing high European engineering benchmarks to military and government operators worldwide.',
      'With existing approvals from European EASA and EMAR authorities, adding the Indonesian Air Force airworthiness validation solidifies our reputation for uncompromised safety and global compliance.'
    ],
    keyHighlights: [
      'Certified Foreign Repair Station status by Puslaiklambangjaau',
      'Comprehensive authorization for avionics, hydraulics, and mechanical subsystems',
      'Enhanced logistical bridge between Europe and Asia-Pacific defense operators',
      'Full traceability and dual-release documentation conformity'
    ],
    image: '/images/news-indonesian-approval.jpg',
    author: 'Quality & Regulatory Affairs',
    readTime: '3 min read',
  },
  {
    slug: 'tecnico-lisbon-sponsorship',
    title:
      'Orion Technik is a proud sponsor of the Instituto Superior Técnico of Lisbon University Olissipo Air Team',
    date: 'MAY 29, 2026',
    isoDate: '2026-05-29',
    category: 'Community & Aerospace Education',
    summary:
      'Fostering the next generation of aerospace engineers through technical mentorship, wind-tunnel resources, and flight competition sponsorship.',
    content: [
      'Orion Technik is delighted to renew and expand its partnership with the Instituto Superior Técnico (IST) of Lisbon University, officially sponsoring the acclaimed Olissipo Air Team for international aeronautical design competitions.',
      'The sponsorship combines financial backing with hands-on technical guidance, giving aerospace engineering students access to Orion Technik’s state-of-the-art testing equipment, composite material advice, and structural repair methodologies.',
      'Investing in emerging engineering talent is fundamental to the future of Portuguese and European aerospace. The innovation, dedication, and technical rigor displayed by the Olissipo Air Team reflect the exact values we champion every day at Orion Technik.',
      'Throughout the 2026 academic calendar, Orion Technik senior avionics and mechanical engineers will conduct specialized workshops on airworthiness certification, structural integrity, and MRO best practices for university researchers.'
    ],
    keyHighlights: [
      'Mentorship program with Orion Technik licensed Part 66 engineers',
      'Access to advanced composite evaluation labs and CAD simulation tools',
      'Sponsorship for international collegiate design-build-fly competitions',
      'Direct pathway for engineering internships and technical apprenticeships'
    ],
    image: '/images/hero-aircraft.jpg',
    author: 'Corporate Social Responsibility',
    readTime: '3 min read',
  },
  {
    slug: 'easa-emar-part-145-recertification',
    title:
      'Orion Technik successfully concludes annual EASA & EMAR Part 145 quality audit with zero non-conformities',
    date: 'APR 14, 2026',
    isoDate: '2026-04-14',
    category: 'Quality & Compliance',
    summary:
      'Exemplary audit results underscore Orion Technik’s uncompromising commitment to safety, continuous improvement, and regulatory excellence.',
    content: [
      'Following a comprehensive four-day audit conducted by civil and military aviation safety authorities, Orion Technik Maintenance & Engineering has successfully renewed its EASA Part 145 and EMAR Part 145 certifications without a single non-conformity or finding.',
      'The audit reviewed our Quality Management System (QMS), tooling calibration records, Part 66 technician qualification matrices, and bonded warehouse climate control logs in Arruda dos Vinhos.',
      'Zero findings on an integrated civil-military audit is a testament to the discipline, culture, and precision that our entire team upholds on every work order.'
    ],
    keyHighlights: [
      'Clean audit with 100% compliance across all tested vectors',
      'Civil EASA Part 145 and military EMAR Part 145 co-validated',
      'Continuous calibration verification of specialized diagnostic equipment',
      'Expanded scope of work approval for modern composite flight control surfaces'
    ],
    image: '/images/news-indonesian-approval.jpg',
    author: 'Quality Management Team',
    readTime: '2 min read',
  },
  {
    slug: 'rotary-wing-component-expansion',
    title:
      'Orion Technik expands component test bench capabilities for rotary-wing dynamic systems',
    date: 'MAR 02, 2026',
    isoDate: '2026-03-02',
    category: 'Maintenance & Engineering',
    summary:
      'Investment in state-of-the-art dynamic balance benches accelerates overhaul turn-around times for helicopter rotor assemblies and gearboxes.',
    content: [
      'To meet surging demand from search-and-rescue (SAR), maritime surveillance, and military rotary-wing operators, Orion Technik has commissioned a high-capacity dynamic balancing and test bench for helicopter rotor heads and transmission shafts.',
      'The new testing installation allows real-time vibration analysis, hydraulic actuator frequency response verification, and micro-strain measurement under simulated aerodynamic load conditions.',
      'By bringing these specialized diagnostics in-house, Orion Technik reduces rotor-wing component turn-around time by more than 40%, keeping vital rotary assets mission-ready.'
    ],
    keyHighlights: [
      'High-capacity dynamic test rig for light, medium, and heavy rotary platforms',
      '40% reduction in typical component overhaul turn-around time (TAT)',
      'Digital vibration spectrum logging with dual-sensor telemetry',
      'Direct integration with military and civil fleet maintenance tracking systems'
    ],
    image: '/images/news-swedish-contract.jpg',
    author: 'Rotary Fleet Technical Support',
    readTime: '4 min read',
  },
  {
    slug: 'global-logistics-hub-expansion',
    title:
      'Orion Technik inaugurates enhanced climate-controlled aerospace storage facility in Arruda dos Vinhos',
    date: 'JAN 18, 2026',
    isoDate: '2026-01-18',
    category: 'Supply Chain & Operations',
    summary:
      'A 2,500 square meter expansion dedicated to temperature-sensitive composites, avionics LRUs, and 24/7 global AOG response.',
    content: [
      'Orion Technik has completed the expansion of its central aerospace logistics hub in Arruda dos Vinhos, Portugal. The facility adds 2,500 square meters of specialized climate-controlled bonded storage designed for high-value rotables, line replaceable units (LRUs), and sensitive consumable chemistry.',
      'The center features real-time digital RFID inventory tracking, automated shelf-life expiration alerts, and an accelerated AOG (Aircraft On Ground) dispatch cell operational 24/7/365.',
      'This expansion positions Orion Technik at the forefront of European aerospace logistics, ensuring immediate customs clearance and same-day dispatch across Europe, the Americas, and global partner hubs.'
    ],
    keyHighlights: [
      '2,500 m² climate and humidity-controlled bonded warehouse',
      'Dedicated 24/7/365 AOG global emergency dispatch team',
      'Automated shelf-life surveillance for pre-pregs, sealants, and elastomeric seals',
      'Direct highway and airport transit links to Lisbon International Airport'
    ],
    image: '/images/hero-aircraft.jpg',
    author: 'Supply Chain Operations',
    readTime: '3 min read',
  },
];
