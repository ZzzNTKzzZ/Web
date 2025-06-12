import { useState } from 'react';
import styles from "../PortfolioFAQ/PortfolioFAQ.module.css";
import faqImage from "../../../assets/Img/faq_img.jpg"; 

const faqData = [
  {
    question: "What technologies were used to build Portify?",
    answer: "Portify is built using React, Tailwind CSS, and modern web development practices including animations and responsive layout."
  },
  {
    question: "Can I customize the template for my own portfolio?",
    answer: "Yes! Portify is fully customizable. You can easily change content, colors, and layout to match your personal branding."
  },
  {
    question: "Is Portify mobile-friendly?",
    answer: "Absolutely. Portify is fully responsive, ensuring a seamless experience on phones, tablets, and desktops."
  },
  {
    question: "Does Portify support animations or interactive elements?",
    answer: "Yes, it includes smooth scroll, animated transitions, hover effects, and more to keep it engaging."
  },
  {
    question: "Can I showcase both frontend and backend projects?",
    answer: "Definitely! Portify supports multi-section layout, letting you showcase any kind of project or skill."
  }
];

export default function PortfolioFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContent}>
        <h2 className={styles.title}>Your Portfolio Questions Answered</h2>
        <p className={styles.faqIntro}>
          Here are some common questions about the Portify project and how you can benefit from it.
        </p>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button onClick={() => toggle(index)} className={styles.faqQuestion}>
                {item.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && <p className={styles.faqAnswer}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.faqImageContainer}>
        <img src={faqImage} alt="FAQ support" className={styles.faqImage} />
      </div>
    </section>
  );
}
