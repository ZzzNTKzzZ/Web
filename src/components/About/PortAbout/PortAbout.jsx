import React from "react";
import styles from "./PortAbout.module.css";
import portfolioImage from "../../../assets/Img/Person/person1.jpg"; // Đổi thành ảnh của bạn

function PortAbout() {
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
        <span>Front-End Development</span><span>90%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '90%' }}></div>
      </div>
    </div>

    <div className={styles.progressItem}>
      <div className={styles.progressLabel}>
        <span>UI/UX Design</span><span>80%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '80%' }}></div>
      </div>
    </div>

    <div className={styles.progressItem}>
      <div className={styles.progressLabel}>
        <span>Performance Optimization</span><span>85%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '85%' }}></div>
      </div>
    </div>

    <div className={styles.progressItem}>
      <div className={styles.progressLabel}>
        <span>API Integration</span><span>75%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '75%' }}></div>
      </div>
    </div>

    <button className={styles.button}>Discover More →</button>
  </div>

  <div className={styles.imageSection}>
    <img src={portfolioImage} alt="Portfolio" className={styles.image}/>
  </div>
</div>

    );
}

export default PortAbout;
