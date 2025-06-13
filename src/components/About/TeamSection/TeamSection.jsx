import React from "react";
import styles from "./TeamSection.module.css";
import person1 from "../../../assets/Img/team/member1.jpg";
import person2 from "../../../assets/Img/team/member2.jpg";
import person3 from "../../../assets/Img/team/member3.png";

function TeamMember({ image, name, role }) {
  return (
    <div className={styles.member}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.subtitle}>OUR EXPERT TEAM</div>
        <div className={styles.title}>Meet Our Team</div>
        <div className={styles.description}>
          Our passionate team combines creativity and technology to build amazing portfolio projects. Let’s collaborate and make something extraordinary together.
        </div>
        <button className={styles.button}>See All Team →</button>
      </div>
      <div className={styles.right}>
        <TeamMember image={person1} name="The Anh" role="Front-End Developer" />
        <TeamMember image={person2} name="Quoc Anh" role="Front-End Developer" />
        <TeamMember image={person3} name="Tuan Khanh" role="Backend Developer" />
      </div>
    </div>
  );
}

export default TeamSection;
