import React from "react";
import style from "./termsOfUse.module.css"; // Import CSS Module riêng cho Terms of Use
import Navbar from "../../Navbar/Navbar";

const termsOfUseContent = [
  {
    title: "1. Your relationship to Portlify",
    paragraphs: [
      "Your use of Portlify's products, software, services, and websites ('Services'), such as allowing, submitting, posting, obtaining, emailing or transmitting information, including text, graphics, pictures, video, links, addresses, data, functionality and other materials ('Content') to the Services, is subject to the terms of a legal agreement between You and Portlify ('Portlify') as laid in these General Terms (hereafter 'Agreement'). You must fully agree to the General Terms and any other applicable terms. It is important that You read and understand the terms before using the Services to ensure that You are aware of Your rights and obligations. By accessing or registering for Portlify Services, You signify that you have read, understood, and agree to this Agreement.",
    ],
  },
  {
    title: "2. Accepting the Terms",
    paragraphs: [
      "By using the Services or by agreeing to this Agreement by any user interface made available to You by Portlify, You agree to be bound by the terms and conditions in this Agreement and attest that You have all necessary right, power and authority to enter into this Agreement and to perform the acts required of You under this Agreement. If You do not agree to these terms, You must immediately leave the Portlify website and avoid or discontinue all use of the Portlify Services.",
    ],
  },
  {
    title: "3. Registration",
    listItems: [
      "3.1 You shall provide Portlify with accurate, complete, and updated registration information, including Your valid e-mail address.",
      "3.2 You shall be responsible for keeping the confidentiality of Your password, and agree to notify Portlify immediately of any actual or suspected loss, theft, or unauthorized use of Your Content or password. You are solely responsible for any use of or action taken under Your password and accepts full responsibility for all such activity.",
      "3.3 You accept that Portlify sends You information concerning Your account.",
      "3.4. You accept that Portlify sends You newsletter emails. If You do not want to receive the newsletters You can unsubscribe at any time.",
    ],
  },
  {
    title: "4. Accessing the Services",
    listItems: [
      "4.1 You agree and acknowledge that the Services that are subject to the terms and conditions herein are solely for Your own use.",
      "4.2 Portlify may modify, suspend or discontinue the Services at any time, including the availability of any feature, database, or Content. Use of the Services by You following such modification constitutes Your acceptance of the terms and conditions in the Agreement as modified.",
      "4.3 Portlify will use reasonable efforts to ensure that Services are available at all times. Where it is under Portlify’ control, Portlify will take reasonable steps to minimize disruption of the availability of the Services caused by maintenance, upgrades and repairs or due to failure of telecommunications links and equipment or due to unavailability of third-party services used by Portlify.",
      "4.4 Portlify will not in any event be liable to You or any other party for any suspension, modification, discontinuance or lack of availability of the Services.",
    ],
  },
  {
    title: "5. Your Rights to Use the Services",
    listItems: [
      "5.1 You acknowledge and agree that the Services contain proprietary and confidential information that is Portlify property and/or property of Portlify’s licensors and is protected by law. Subject to the terms and conditions in this Agreement, Portlify grants You a non-exclusive, non-transferable and terminable license to use the Services. You understand and agree that rights granted to You are provided on the condition that You do not transfer or sub-license the Services or any part thereof or likewise attempt to discover any source code, modify the Services in any manner or form, or use unauthorized modified versions of the Services.",
      "5.2 By using Portlify's services, You acknowledge that the company does not offer legal advice or recommendations regarding laws or requirements applicable to Your use or any of Your visitors, customers and users (“End Users”), nor does it guarantee compliance with such laws or requirements. It is Your responsibility to ensure that Your use of the Services complies with all applicable laws and regulations.",
      "5.3 You agree not to access the Services by any means other than the interfaces that Portlify provides to You.",
      "5.4 You agree that You are responsible for all Content that You allow, submit, post, obtain, email or transmit to the Services. Portlify does not guarantee the accuracy, integrity or the usefulness of the Content available via the Services.",
      "5.5 Portlify does not control Your Content nor does Portlify have any obligation to review, refuse, or remove any Content available via the Services (unless ordered to by non-reviewable decision from a competent court); however, Portlify reserves the right to, at its own discretion, remove any Content available via the Services at any time. Portlify may remove Your Content due to e.g. violation of this Agreement, abuse of the Services, notification of possible infringement of another’s rights, privacy concerns, compliance with laws and in the assistance of law enforcement.",
      "5.6 Portlify reserves the right to offer different pricing plans for its Services, each of which may impose different restrictions on the upload, storage, download, and use of the Services. These restrictions may include limitations on network traffic and bandwidth, the size and/or length of content, the quality and/or format of content, the sources of content, the volume of storage, and other factors.\n\nPortlify also reserves the right, at its sole discretion, to modify, replace, discontinue, or introduce any pricing plans, including but not limited to introducing new free or paid plans, or discontinuing existing plans. Changes may include adjustments to prices, quotas, features, or the availability of specific service plans, and may apply to both current and new users.\n\nNotice of material changes will be provided via email, platform announcements, or updates to these Terms of Use. Continued use of the Services after such changes constitutes acceptance of the updated terms.",
      "5.7 The Service is limited to transfer of Content up to 100 GB per month. Portlify may temporarily disable Your account if You use more than 100 GB/transfer per month. Portlify reserves the right to adjust the limitation at any time with 30 days notice to You. You acknowledge that if You downgrade features in the Services, You may lose part of Your Content and agree that Portlify will have no liability to You of any kind or nature arising out of or related to loss of Your Content.",
      "5.8 You are responsible to backup the Content that you upload to the Services. Portlify can never be held responsible in case Content is damaged or lost.",
      "5.9 Portlify has no obligation to continue offering any specific plan or service, including free or promotional plans, and reserves the right to terminate or modify such offerings at any time, without liability or obligation to users. This includes, but is not limited to, discontinuation of free or paid plans, adjustment of quotas, features, and pricing structures. Notice of such changes will be provided as described in Clause 5.6, and continued use of the Services after such changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "6. Your Content",
    listItems: [
      "6.1 The transfer of Content that You contribute to the Services does not change the ownership of the Content. However, Portlify reserves the right to use print-screens (screen shots) of the Content for commercial purposes. Such use shall be deemed permitted under this Agreement.",
      "6.2 Upon termination of Your use of the Services, You recognize and agree that caching of or references to Your Content may not be immediately removed. Portlify is in addition allowed to keep a back-up copy of Your Content for archival purposes.",
    ],
  },
  {
    title: "7. Content and Obligations",
    listItems: [
      "7.1 Portlify reserves the right to modify, suspend or discontinue the Services at anytime without further notice to You.",
      "7.2 Portlify may, without previous notice, access, preserve, remove and disclose Your Content if required to do so by law, or if, in Portlify’s reasonable judgment, such measure is necessary in order to:\n(a) comply with Your requests for assistance with the Services,\n(b) comply with legal process,\n(c) address claims from third parties that Your Content violates their rights, or\n(d) supervise that no use of the Services to transfer or store threatening, obscene and/or illegal material takes place",
      "7.3 Portlify will take reasonable security precautions when transporting or storing data or other communications, but expressly disclaims liability for the accessing of any such data communications by unauthorized persons or entities.",
      "7.4 You agree to provide accurate, current and complete information and to use commercially reasonable efforts to maintain and promptly update the information to keep it accurate, current and complete.",
      "7.5 You agree that Portlify has the right to suspend or terminate Your use of the Services or any portion thereof if You provide information that is intentionally inaccurate, not current or incomplete in a material way, or Portlify has reasonable grounds to believe that such information is untrue, inaccurate, not current or incomplete in a material way.",
      "7.6 You authorize Portlify to:\n(a) disclose the password that is used to access Your Content in the Services to those persons to whom You have authorized Portlify in writing to disclose to; and\n(b) send electronic and other transmissions of any current and future Content to those persons to whom You have authorized Portlify in writing to disclose to.",
      "7.7 By participating in the Community, you grant Portlify the right to use your cover images provided by you for your profile, projects, or posts for promotional purposes on our official social media accounts. You will receive attribution whenever we utilize your images for promotional purposes. You retain all ownership rights to your content, and this permission is limited to promotional use by Portlify.",
    ],
  },
  {
    title: "8. Third-party services",
    listItems: [
      "8.1 The Services can be integrated with various third-party services and applications ('Third Party Services'). Some of the Third Party Services include analytics tools, social media platforms, ecommerce payment processors, etc. All Third Party Services have their own terms and policies, and Your use of them will be subject to those terms and policies. Any Information that a Third Party Service collects, stores, and processes from You or Your Content will be subject to the Third Party Service's terms of service, privacy notice, or similar terms, and will not be governed by our Privacy Policy. It is important to carefully review the terms and policies of any Third Party Services that You use in connection with Your Content to understand how they collect, use, and share Your information.",
      "8.2 Third Party Services are solely responsible for providing support, maintenance, and technical assistance for their services. As a user of these services, it is Your responsibility to ensure the security of Your information and transactions. We do not control Third Party Services, and we are not liable for their actions or for any transactions You may enter into with them. It is important to carefully review the terms and policies of any Third Party Services that You use to understand Your rights and obligations.",
      "8.3 You agree that we may, at any time and without notice to You, suspend, disable access to, or remove any Third Party Services at our sole discretion. We are not liable for any loss of profits, revenue, data, goodwill, or other intangible losses, or business disruption, costs, or expenses you may incur as a result of any such suspension, disabling, or removal (except where prohibited by applicable law). Please be aware that we reserve the right to make these changes at any time and without prior notice.",
    ],
  },
  {
    title: "9. Restrictions",
    listItems: [
      "9.1 You are responsible for all of Your activity in connection with the Services. Any fraudulent, abusive, or otherwise illegal activity or any use of the Services or Content in violation of this Agreement may be grounds for termination of Your right to Services.",
      "9.2 Use of the Services to transfer or store threatening or obscene material is expressly prohibited.",
    ],
  },
  {
    title: "10. Domains",
    listItems: [
      "10.1 When You enter into this Agreement, Portlify may provide You with an internet domain name ('Domain') which belongs to Portlify for the duration of Your use of the Services.",
      "10.2 If you hold a Domain and wish to use it in connection to the Services, Portlify will use reasonable efforts to assist in using that Domain.",
      "10.3 Should applicable fees not be paid by You in time, the Domain will be deregistered. Portlify is not responsible for any third party take over of the Domain following deregistration.",
      "10.4 If or when Your use of the Services is terminated Portlify can provide You with a transfer key, if requested by You in writing, to enable Your transfer of the Domain to a new host. Transfer must be initiated at least 45 days before termination of Services. A transfer fee will be charged for the transfer of the domain.",
      "10.5 Should Your Domain upon deregistration be put in quarantine by the host and You wish to reclaim it, Portlify has the right to charge You for its assistance in the matter.",
      "10.6 Portlify will not in any event be liable to You or any other party for failure to transfer Your Domain, lost renewal etc. (see article 18).",
    ],
  },
  {
    title: "11. E-mail",
    listItems: [
      "11.1 Portlify may offer email accounts as part of the Services on certain plans. We utilize the services of OpenSRS (legal name Tucows.com Co.) for managing user emails at this level. By agreeing to these Terms of Use and subscribing to a plan where email accounts are provided, you acknowledge that the processing of your personal data, including but not limited to email addresses and related information, will be handled by OpenSRS in accordance with their Data Processing Addendum.",
      "11.2 GDPR Compliance: OpenSRS is committed to maintaining compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. As a data processor, OpenSRS ensures the security and confidentiality of your personal data.",
      "11.3 User Consent: By using our email services included in eligible plans, you consent to the processing of your personal data by OpenSRS as described in their Data Processing Addendum.",
      "11.4 Data Processing Addendum: The Data Processing Addendum provided by OpenSRS outlines their obligations regarding the processing of personal data and the measures taken to ensure compliance with data protection laws, including GDPR. You can review the Data Processing Addendum by accessing the following link: OpenSRS Data Processing Addendum.",
      "11.5 Email Usage Restrictions: The email service provided by Portlify is intended for personal use and for transactional operations only. It is strictly prohibited to use the email service for sending newsletters or bulk emails. Failure to comply with these usage restrictions may result in the suspension or termination of your email service.",
      "11.6 Daily Sending Limit: Portlify maintains a daily limit on the number of emails that can be sent using the email service. This limit is in place to ensure fair usage of the service and prevent abuse.",
      "11.7 Contact Forms: Contact forms may be provided as part of the Services. Portlify will not be responsible for delivery failure or wrong delivery connected to the contact forms.",
      "11.8 Liability: While we have taken steps to ensure the compliance of our service providers, including OpenSRS, with data protection laws, we cannot be held liable for any breaches or non-compliance by our service providers. However, we will cooperate fully with any investigations or inquiries related to the processing of personal data.",
      "11.9 Updates: We reserve the right to update this section to reflect any changes in our service providers or their compliance status. Any material changes will be communicated to users in accordance with our Terms of Use.",
    ],
  },
  {
    title: "12. Protecting Certain Personally-Identifying Information",
    listItems: [
      "12.1 Portlify gathers personally-identifying information. You can refuse to supply personally-identifying information, but it may prevent you from engaging in the Services, in part or in whole.",
      "12.2 Portlify stores information that:\n(a) you provide us with; and\n(b) we gather from your use of the Services. Portlify does not disclose such information other than as described below.",
      "12.3 Portlify can disclose such information for the purpose of the functionality of the Services.",
      "12.4 Portlify has the right to disclose such information to employees, contractors and affiliates that need to know that information in order to process it on Portlify’s behalf, and that have agreed not to disclose it to others. Should any of the above entities be located outside of Your home country, You consent to the transfer of such information to them by using the Services.",
      "12.5 Portlify reserves the right to disclose potentially personally-identifying and personally-identifying information when required to do so by law, or when disclosure is necessary to protect the property or rights of Portlify or any third party.",
      "12.6 Portlify may use and/or disclose such information in order to operate, improve and optimize the Services.",
    ],
  },
  {
    title: "13. Indemnification",
    listItems: [
      "You agree to defend, indemnify and hold harmless Portlify, its officers, directors, shareholders, employees, affiliates and agents, from any liabilities, damages, and costs, including, but not limited to, attorneys’ fees and settlement costs, resulting from claims from third parties:\n\n(a) regarding Your Content;\n(b) regarding Your infringement or misappropriation of any patent, copyright, trade secret or trademark of any third party; or\n(c) regarding Your use of the Services in violation of the terms and conditions in this Agreement.\n(d) any other type of claim that Your Content caused damage to a third party. You acknowledge that Your actions may result in legal liability for You and agree to indemnify Portlify for any such liability arising from Your use of the Services.",
    ],
  },
  {
    title: "14. Class action",
    paragraphs: [
      "Subject to any applicable law, You may only resolve disputes with us on an individual basis, and You shall not have the right to bring any claim against Portlify as a plaintiff or a member of a class, consolidated or representative actions. Class-action lawsuits, class arbitration, collective legal actions, private attorney general actions, and consolidation with other arbitrations are not allowed under this Agreement.",
    ],
  },
  {
    title: "15. Warranty Disclaimer",
    paragraphs: [
      "The Services are provided on an 'as is” and 'as available' basis, without any warranties of any kind. This includes any implied warranties or conditions of warranties of merchantability, fitness for a particular purpose and non-infringement. We do not represent or warrant that the Services are complete, of any certain quality, reliable, accurate or secure in any way, suitable for or compatible with any of Your (or your End Users) contemplated activities, devices, operating systems, browsers, software, or tools (or that they will remain as such at any time), or comply with any laws applicable to You or Your End Users (including in any jurisdiction in which You operate), or that their operation will be free of any viruses, bugs, or other harmful components or program limitations.",
    ],
  },
  {
    title: "16. Liability",
    paragraphs: [
      "Portlify accepts liability only in accordance with the legal provisions for damage caused by a grossly negligent or intentional violation of essential contractual duties.",
    ],
  },
  {
    title: "17. Limitation of liability",
    listItems: [
      "You acknowledge and agree that to the fullest extent permitted by applicable law, You will not hold Portlify or its affiliates, directors, officers, employees, or agents liable for any claims arising from or related to the Services or this Agreement. This includes any damages that may be incurred as a result of:\n\n(a) any indirect, special, incidental, exemplary, punitive, or consequential damages,\n(b) any loss of profits, revenue, data, goodwill, or other intangible losses,\n(c) any losses related to your access to, use of, or inability to access or use any part of the Services,\n(d) any losses related to the unavailability, degradation, loss, corruption, theft, unauthorized access, or unauthorized alteration of any content, information, or data, including Your Content,\n(e) any of Your Content or other conduct or content of any user or third party using the Services, or\n(f) any Third Party Services or third party sites accessed via the Services.",
    ],
  },
  {
    title: "18. General Information",
    listItems: [
      "18.1 This Agreement constitutes the entire agreement between Portlify and You and governs Your use of the Services. It replaces and supersedes any prior agreements between Portlify and You with respect to the Services.",
      "18.2 Nothing in this Agreement will be construed to constitute either party as a partner, employee or agent of the other party.",
      "18.3 Portlify’s failure to exercise or enforce any right or provision of this Agreement shall not constitute a waiver.",
    ],
  },
  {
    title: "19. Applicable Law and Jurisdiction",
    paragraphs: [
      "The Agreement shall be governed by and construed in accordance with the laws of Sweden. You agree that all conflicts relating to the Agreement shall exclusively be deferred to the competent district court of Stockholm, Sweden.",
    ],
  },
  {
    title: "20. Waiver & Severability",
    paragraphs: [
      "If any part of this Agreement is deemed unenforceable, the remaining provisions will still be in full effect. An enforceable term will be put in its place to reflect our original intent as closely as possible.",
    ],
  },
  {
    title: "21. Privacy",
    listItems: [
      "Our Privacy Policy explains the way we handle and protect your personal data and privacy in relation to your use of the Service and your Browse of the Portlify.net web site. By agreeing to the present Terms of Use and to be able to use the Service, you also agree to our Privacy Policy. To the extent that Portlify processes any personal data that is subject to the EU General Data Protection Regulation (GDPR), on the user’s behalf, in the provision of the Service, the terms of the Portlify Data Processing Agreement, which are hereby incorporated by reference, shall apply.",
    ],
  },
];

const TermsOfUse = () => {
  return (
    <div className={style.termsOfUseContainer}>
      <Navbar />
      <h1 className={style.mainTitle}>GENERAL TERMS</h1>

      {termsOfUseContent.map((section, index) => (
        <div key={index} className={style.section}>
          <h2 className={style.sectionTitle}>{section.title}</h2>
          {section.paragraphs &&
            section.paragraphs.map((paragraph, pIndex) =>
              paragraph.split("\n\n").map((subParagraph, spIndex) => (
                <p key={`${pIndex}-${spIndex}`} className={style.paragraph}>
                  {subParagraph.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < subParagraph.split("\n").length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  ))}
                </p>
              ))
            )}
          {section.listItems && (
            <ul className={style.principleList}>
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex} className={style.principleItem}>
                  {item.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < item.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
