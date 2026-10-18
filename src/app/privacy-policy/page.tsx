import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, FileText, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './PrivacyPolicyPage.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Orion Technik Maintenance & Engineering',
  description:
    'Read the official Privacy Policy for Orion Technik. Learn how we collect, process, protect, and retain personal information in compliance with the General Data Protection Regulation (GDPR).',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Orion Technik',
    description:
      'Learn how Orion Technik processes and protects personal information in accordance with European GDPR requirements.',
    url: 'https://oriontechnik.com/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://oriontechnik.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Privacy Policy',
        item: 'https://oriontechnik.com/privacy-policy',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <div className="container">
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
              <Link href="/" className={styles.breadcrumbLink}>
                <ArrowLeft size={14} />
                <span>Home</span>
              </Link>
              <span className={styles.breadcrumbDivider}>/</span>
              <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
            </nav>

            <div className={styles.headerMeta}>
              <span className={styles.gdprTag}>
                <ShieldCheck size={14} />
                <span>GDPR Compliant</span>
              </span>
              <span className={styles.updatedDate}>Last updated: November 17, 2021</span>
            </div>

            <h1 className={styles.pageTitle}>Privacy Policy</h1>
            <p className={styles.pageLead}>
              We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes how Orion Technik collects, uses, maintains, and discloses personal information through oriontechnik.com.
            </p>
          </div>
        </section>

        {/* Content with Sticky Table of Contents */}
        <div className="container">
          <div className={styles.contentShell}>
            {/* Sidebar TOC */}
            <aside className={styles.tocSidebar} aria-label="Table of Contents">
              <h2 className={styles.tocTitle}>Contents</h2>
              <ul className={styles.tocList}>
                <li><a href="#intro" className={styles.tocLink}>1. Scope &amp; Agreement</a></li>
                <li><a href="#collection" className={styles.tocLink}>2. Collection of Information</a></li>
                <li><a href="#children" className={styles.tocLink}>3. Privacy of Children</a></li>
                <li><a href="#processing" className={styles.tocLink}>4. Processing under GDPR</a></li>
                <li><a href="#disclosure" className={styles.tocLink}>5. Disclosure of Information</a></li>
                <li><a href="#retention" className={styles.tocLink}>6. Retention of Data</a></li>
                <li><a href="#transfers" className={styles.tocLink}>7. Transfer of Information</a></li>
                <li><a href="#rights" className={styles.tocLink}>8. GDPR Data Rights</a></li>
                <li><a href="#exercise-rights" className={styles.tocLink}>9. Exercising Your Rights</a></li>
                <li><a href="#cookies" className={styles.tocLink}>10. Cookies Policy</a></li>
                <li><a href="#dnt" className={styles.tocLink}>11. Do Not Track Signals</a></li>
                <li><a href="#security" className={styles.tocLink}>12. Information Security</a></li>
                <li><a href="#breach" className={styles.tocLink}>13. Data Breach Protocol</a></li>
                <li><a href="#changes" className={styles.tocLink}>14. Policy Updates</a></li>
                <li><a href="#contacts" className={styles.tocLink}>15. Contact Details</a></li>
              </ul>
            </aside>

            {/* Main Policy Body */}
            <article className={styles.legalBody}>
              {/* Section 1 */}
              <section id="intro" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>01.</span>
                  <span>Scope and Legal Agreement</span>
                </h2>
                <p className={styles.paragraph}>
                  We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”). This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) on the <a href="https://www.oriontechnik.com" className={styles.linkInline}>oriontechnik.com</a> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.
                </p>
                <p className={styles.paragraph}>
                  This Policy is a legally binding agreement between you (“User”, “you” or “your”) and this Website operator (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
                </p>
              </section>

              {/* Section 2 */}
              <section id="collection" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>02.</span>
                  <span>Collection of Personal Information</span>
                </h2>
                <p className={styles.paragraph}>
                  You can access and use the Website and Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the Website, you may be asked to provide certain Personal Information (for example, your name and e-mail address).
                </p>
                <p className={styles.paragraph}>
                  We receive and store any information you knowingly provide to us when you fill any forms on the Website. When required, this information may include the following:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>Contact information (such as email address, phone number, company name)</li>
                  <li className={styles.legalListItem}>Basic personal information (such as name, country of residence, position)</li>
                </ul>
                <p className={styles.paragraph}>
                  You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Website (such as submitting Requests for Quotation or contacting technical support). Users who are uncertain about what information is mandatory are welcome to contact us.
                </p>
              </section>

              {/* Section 3 */}
              <section id="children" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>03.</span>
                  <span>Privacy of Children</span>
                </h2>
                <p className={styles.paragraph}>
                  We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us to request that we delete that child’s Personal Information from our Services.
                </p>
                <p className={styles.paragraph}>
                  We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Website and Services without their permission.
                </p>
              </section>

              {/* Section 4 */}
              <section id="processing" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>04.</span>
                  <span>Use and Processing of Collected Information</span>
                </h2>
                <p className={styles.paragraph}>
                  We act as a data controller and a data processor in terms of the GDPR when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor.
                </p>
                <p className={styles.paragraph}>
                  Our role may also differ depending on the specific situation involving Personal Information:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>
                    <strong>Data Controller:</strong> We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Website and Services. In such instances, we determine the purposes and means of the processing of Personal Information and comply with data controllers’ obligations set forth in the GDPR.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Data Processor:</strong> We act in the capacity of a data processor in situations when you submit Personal Information through the Website and Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller in terms of the GDPR.
                  </li>
                </ul>
                <p className={styles.paragraph}>
                  Any of the information we collect from you may be used for the following purposes:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>Respond to technical inquiries, RFQs, and offer customer support;</li>
                  <li className={styles.legalListItem}>Run and operate the Website and Services;</li>
                  <li className={styles.legalListItem}>Improve customer service and platform reliability.</li>
                </ul>
                <div className={styles.calloutBox}>
                  <p className={styles.calloutText}>
                    <strong>Legal Bases for Processing (GDPR Art. 6):</strong> Processing depends on how you interact with the Website, where you are located, and whether one of the following applies: (i) you have given your consent; (ii) provision of information is necessary for the performance of an agreement with you and/or pre-contractual obligations; (iii) processing is necessary for compliance with a legal obligation; (iv) processing is related to a task carried out in the public interest; (v) processing is necessary for legitimate business interests pursued by us or a third party.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="disclosure" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>05.</span>
                  <span>Disclosure of Information</span>
                </h2>
                <p className={styles.paragraph}>
                  Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our affiliates, contracted companies, and service providers (collectively, “Service Providers”) we rely upon to assist in the operation of the Website and Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any personally identifiable information with third parties and will not share any information with unaffiliated third parties.
                </p>
                <p className={styles.paragraph}>
                  Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes.
                </p>
                <p className={styles.paragraph}>
                  We may also disclose any Personal Information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                </p>
              </section>

              {/* Section 6 */}
              <section id="retention" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>06.</span>
                  <span>Retention of Information</span>
                </h2>
                <p className={styles.paragraph}>
                  We will retain and use your Personal Information for the period necessary to enforce our agreements, resolve disputes, and unless a longer retention period is required or permitted by law up to a maximum of <strong>60 months</strong>.
                </p>
                <p className={styles.paragraph}>
                  We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period.
                </p>
              </section>

              {/* Section 7 */}
              <section id="transfers" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>07.</span>
                  <span>Transfer of Information</span>
                </h2>
                <p className={styles.paragraph}>
                  Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. However, this will not include countries outside the European Union (EU) and European Economic Area (EEA). If any such transfer takes place, you can find out more by checking the relevant sections of this Policy or inquire with us using the contact details provided below.
                </p>
              </section>

              {/* Section 8 */}
              <section id="rights" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>08.</span>
                  <span>Data Protection Rights under the GDPR</span>
                </h2>
                <p className={styles.paragraph}>
                  If you are a resident of the European Economic Area (“EEA”), you have certain data protection rights and we aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information:
                </p>

                <div className={styles.rightsCardGrid}>
                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(i) Right to Withdraw Consent</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to withdraw consent where you have previously given your consent to the processing of your Personal Information at any time.
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(ii) Right to Access</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to learn if your Personal Information is being processed by us, obtain disclosure regarding the processing, and obtain a copy of your Personal Information.
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(iii) Right to Rectification</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to verify the accuracy of your information and ask for it to be updated, corrected, or completed.
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(iv) Right to Object</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to object to the processing of your information if carried out on a legal basis other than consent (such as legitimate interests or direct marketing).
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(v) Right to Restriction of Processing</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right, under certain statutory circumstances, to restrict the processing of your Personal Information pending verification or dispute resolution.
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(vi) Right to Erasure ("Right to be Forgotten")</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to obtain the erasure of your Personal Information when it is no longer necessary for the purposes collected or when consent has been withdrawn.
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(vii) Right to Data Portability</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to receive your Personal Information in a structured, commonly used, and machine-readable format and transmit it to another controller.
                    </p>
                  </div>

                  <div className={styles.rightCard}>
                    <h3 className={styles.rightCardTitle}>
                      <CheckCircle2 size={16} />
                      <span>(viii) Right to Lodge a Complaint</span>
                    </h3>
                    <p className={styles.rightCardDesc}>
                      You have the right to lodge a complaint with your competent data protection supervisory authority (such as the CNPD in Portugal or your local EEA authority).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="exercise-rights" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>09.</span>
                  <span>How to Exercise Your Rights</span>
                </h2>
                <p className={styles.paragraph}>
                  Any requests to exercise your rights can be directed to us through the contact details provided in this document. Please note that we may ask you to verify your identity before responding to such requests. Your request must provide sufficient information that allows us to verify that you are the person you are claiming to be or that you are the authorized representative of such person.
                </p>
                <p className={styles.paragraph}>
                  If we receive your request from an authorized representative, we may request evidence that you have provided such an authorized representative with power of attorney or that the authorized representative otherwise has valid written authority to submit requests on your behalf. We will respond within the timescales provided by applicable data protection laws.
                </p>
              </section>

              {/* Section 10 */}
              <section id="cookies" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>10.</span>
                  <span>Cookies and Tracking Technologies</span>
                </h2>
                <p className={styles.paragraph}>
                  Our Website and Services use “cookies” to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
                </p>
                <p className={styles.paragraph}>
                  We use cookies for security, personalization, and statistical purposes. For a full inventory and technical explanation of active cookies, please visit our dedicated <Link href="/cookies-declaration" className={styles.linkInline}>Cookies Declaration</Link>.
                </p>
              </section>

              {/* Section 11 */}
              <section id="dnt" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>11.</span>
                  <span>Do Not Track Signals &amp; External Links</span>
                </h2>
                <p className={styles.paragraph}>
                  Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. The Website and Services do not track its visitors over time and across third-party websites.
                </p>
                <p className={styles.paragraph}>
                  Our Website may include social media features and links to other websites. Please be aware that we are not responsible for the privacy practices of other resources or third parties, and we encourage you to read their respective privacy statements.
                </p>
              </section>

              {/* Section 12 */}
              <section id="security" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>12.</span>
                  <span>Information Security</span>
                </h2>
                <p className={styles.paragraph}>
                  We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody.
                </p>
                <p className={styles.paragraph}>
                  However, no data transmission over the Internet or wireless network can be 100% guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that security and privacy limitations of the Internet exist beyond our reasonable control.
                </p>
              </section>

              {/* Section 13 */}
              <section id="breach" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>13.</span>
                  <span>Data Breach Notification</span>
                </h2>
                <p className={styles.paragraph}>
                  In the event we become aware that the security of the Website and Services has been compromised or Users’ Personal Information has been disclosed to unrelated third parties as a result of external activity, including security attacks or fraud, we reserve the right to take reasonably appropriate measures, including investigation, reporting, and notification to law enforcement authorities.
                </p>
                <p className={styles.paragraph}>
                  In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will send an email notification.
                </p>
              </section>

              {/* Section 14 */}
              <section id="changes" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>14.</span>
                  <span>Changes and Amendments</span>
                </h2>
                <p className={styles.paragraph}>
                  We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the top and bottom of this page. An updated version of this Policy will be effective immediately upon posting. Your continued use of the Website and Services after the effective date of the revised Policy will constitute your consent to those changes.
                </p>
              </section>

              {/* Section 15 */}
              <section id="contacts" className={styles.legalSection}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>15.</span>
                  <span>Contacting Us</span>
                </h2>
                <p className={styles.paragraph}>
                  If you have any questions, concerns, or complaints regarding this Policy, the information we hold about you, or if you wish to exercise your statutory rights under GDPR, please contact our Data Protection desk:
                </p>

                <div className={styles.contactCard}>
                  <h3 className={styles.contactTitle}>Orion Technik Maintenance &amp; Engineering</h3>
                  <ul className={styles.contactInfoList}>
                    <li><strong>Address:</strong> Caminho do Parrau 10, Zona Industrial das Corredoras, 2630-369 Arruda dos Vinhos, Portugal</li>
                    <li><strong>Phone:</strong> +351 210 987 098</li>
                    <li><strong>Online:</strong> <Link href="/contacts" className={styles.linkInline}>https://oriontechnik.com/contacts</Link></li>
                    <li><strong>Email:</strong> <a href="mailto:info@oriontechnik.com" className={styles.linkInline}>info@oriontechnik.com</a></li>
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
