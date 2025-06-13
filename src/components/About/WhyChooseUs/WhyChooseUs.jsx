import React from "react";
import styles from "./WhyChooseUs.module.css";
import { ShieldCheck, Rocket, Headphones } from "lucide-react"; // icon minh họa

function WhyChooseUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Why Choose Me</h2>
      <p className={styles.subtitle}>Delivering Modern, Responsive & High-Performance Web Solutions</p>
      
      <div className={styles.cards}>
        <div className={styles.card}>
          <ShieldCheck className={styles.icon} />
          <div className={styles.cardTitle}>Clean & Secure Code</div>
          <div className={styles.cardDesc}>
            I write clean, well-documented, and secure code following best practices to ensure your project is safe and scalable.
          </div>
        </div>

        <div className={styles.card}>
          <Rocket className={styles.icon} />
          <div className={styles.cardTitle}>Performance Optimized</div>
          <div className={styles.cardDesc}>
            My websites are optimized for speed and performance, delivering smooth user experiences across all devices.
          </div>
        </div>

        <div className={styles.card}>
          <Headphones className={styles.icon} />
          <div className={styles.cardTitle}>Ongoing Support</div>
          <div className={styles.cardDesc}>
            I provide continuous support and updates, ensuring your website stays fresh and functional as your needs grow.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
