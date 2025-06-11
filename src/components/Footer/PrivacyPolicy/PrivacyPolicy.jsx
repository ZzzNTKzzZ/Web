import React from "react";
import style from "./privacyPolicy.module.css";
import Navbar from "../../Navbar/Navbar";

const principles = [
  "No personal data are collected or processed without a legal basis;",
  "Personal data must be processed lawfully, fairly and in a transparent manner in relation to the data subject;",
  "Personal data may only be collected for specified, explicit and legitimate purposes;",
  "Personal data must not be processed in a manner that is incompatible with those purposes;",
  "Personal data must be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;",
  "The personal data collected must not be processed if they are too old to be relevant for the initial purposes;",
  "Personal data shall be correct and kept up to date;",
  "Personal data must not be stored for longer than is necessary;",
  "Personal data shall be protected, including against unauthorised or unlawful processing and against loss, destruction or damage.",
];

const sections = [
  {
    title: "Incoming emails, chat and communication via Social media",
    content: `If you send emails or in other ways communicate with Portlify the message will be saved in our system. We are of course striving to protect any personal data that is included in the messages, and we will follow the general principles of the data protection regulation in all communication platforms. However, if you want to avoid, please don't send sensitive data to us via email.`,
  },
  {
    title: "Email Service",
    content:
      "Our email service is available for eligible users, learn more about how your data is handled in relation to this service in our full Privacy Policy.",
  },
  {
    title: "Contact us",
    content: (
      <>
        Please contact{" "}
        <a href="mailto:support@portlify.net" className={style.emailLink}>
          support@portlify.net
        </a>{" "}
        with any questions or complaints regarding the use of your data.
      </>
    ),
  },
  {
    title: "Read the complete Privacy policy",
    content: (
      <>
        Please read our privacy policy for a complete documentation of how
        Portlify uses your data.
        <p className={style.paragraph}>
          <a href="#" className={style.privacyLink}>
            Privacy Policy
          </a>
        </p>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className={style.privacyPolicyContainer}>
      <Navbar />
      <h1 className={style.mainTitle}>PRIVACY POLICY FOR PORTLIFY</h1>

      <p className={style.paragraph}>
        Portlify protects your security, privacy and copyrights. The data you
        add to us is used to help your website.
      </p>

      <h2 className={style.sectionTitle}>
        Portlify complies with the following basic principles:
      </h2>
      <ul className={style.principleList}>
        {principles.map((item, index) => (
          <li key={index} className={style.principleItem}>
            {item}
          </li>
        ))}
      </ul>

      {sections.map((section, index) => (
        <div key={index}>
          <h2 className={style.sectionTitle}>{section.title}</h2>
          <p className={style.paragraph}>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
