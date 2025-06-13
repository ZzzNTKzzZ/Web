import React, { useEffect, useState } from "react";
import styles from "./PortAbout.module.css";
import portfolioImage from "../../../assets/Img/Person/person1.jpg"; // Thay bằng ảnh của bạn nếu cần

function PortAbout() {
  const [progress, setProgress] = useState({
    frontend: 0,
    uiux: 0,
    performance: 0,
    api: 0
  });

  useEffect(() => {
    // Tạo animation khi component mount
    setTimeout(() => {
      setProgress({
        frontend: 90,
        uiux: 80,
        performance: 85,
        api: 75
      });
    }, 100);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.subtitle}>WORKING WITH ME</div>
        <div className={styles.title}>Creative Portfolio Development</div>
        <div className={styles.description}>
          I build modern, responsive websites and web applications with clean code and innovative design.
          My approach combines creativity with functionality to deliver unique digital experiences.
        </div>

        <div className={styles.progressItem}>
          <div className={styles.progressLabel}>
            <span>Front-End Development</span><span>{progress.frontend}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress.frontend}%` }}></div>
          </div>
        </div>

        <div className={styles.progressItem}>
          <div className={styles.progressLabel}>
            <span>UI/UX Design</span><span>{progress.uiux}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress.uiux}%` }}></div>
          </div>
        </div>

        <div className={styles.progressItem}>
          <div className={styles.progressLabel}>
            <span>Performance Optimization</span><span>{progress.performance}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress.performance}%` }}></div>
          </div>
        </div>

        <div className={styles.progressItem}>
          <div className={styles.progressLabel}>
            <span>API Integration</span><span>{progress.api}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress.api}%` }}></div>
          </div>
        </div>

        <button className={styles.button}>Discover More →</button>
      </div>

      <div className={styles.imageSection}>
        <img src={portfolioImage} alt="Portfolio" className={styles.image} />
      </div>
    </div>
  );
}

export default PortAbout;
