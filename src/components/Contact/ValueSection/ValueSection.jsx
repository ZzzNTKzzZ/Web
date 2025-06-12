import React, { useEffect, useRef } from "react";
import styles from "./ValueSection.module.css";
import { FaPaintBrush, FaCode } from "react-icons/fa";

function ValueSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const children = section.querySelectorAll(`.${styles.animate}`);
      children.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.valueSection} ref={sectionRef}>
      <div className={`${styles.valueText} ${styles.animate}`}>
        <p className={styles.subtitle}>- My Values</p>
        <h2 className={styles.title}>Creativity at Heart, Code in Mind</h2>
        <p className={styles.description}>
          As a passionate developer, I value clean design, efficient code, and continuous learning.
        </p>

        <div className={styles.valueBox}>
          <div className={styles.iconWrapper}><FaPaintBrush /></div>
          <div>
            <h3 className={styles.valueTitle}>Design and Usability</h3>
            <p className={styles.valueDescription}>
              User-centered approach with visually appealing interfaces.
            </p>
          </div>
        </div>

        <div className={styles.valueBox}>
          <div className={styles.iconWrapper}><FaCode /></div>
          <div>
            <h3 className={styles.valueTitle}>Code Quality and Innovation</h3>
            <p className={styles.valueDescription}>
              Writing scalable, maintainable code with modern technologies.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.skillBox} ${styles.animate}`}>
        {[
          { label: "Frontend Development", value: 90 },
          { label: "UI/UX Design", value: 80 },
          { label: "Web Performance", value: 75 },
          { label: "SEO Optimization", value: 70 },
        ].map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <span className={styles.skillLabel}>
              {skill.label}<span>{skill.value}%</span>
            </span>
            <div className={styles.skillBar}>
              <div className={styles.skillProgress} style={{ width: `${skill.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ValueSection;
