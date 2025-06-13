import React, { useEffect, useRef } from "react";
import styles from "../../../components/About/HowItWork/HowItWork.module.css";
import img from "../../../assets/Img/Person/person2.jpg";
import gsap from "gsap";

function HowItWorks() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      number: "1",
      title: "Contact & Discuss Ideas",
      desc: "Start by reaching out and sharing your project requirements and ideas."
    },
    {
      number: "2",
      title: "Analysis & Planning",
      desc: "I will analyze your needs, suggest solutions, and create a clear plan."
    },
    {
      number: "3",
      title: "Design & Development",
      desc: "UI/UX design and coding will be executed according to the agreed plan."
    },
    {
      number: "4",
      title: "Delivery & Support",
      desc: "Deliver the final product with post-launch support and maintenance."
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
    
    tl.from(imageRef.current, { opacity: 0, x: -50 })
      .from(contentRef.current, { opacity: 0, x: 50 }, "-=0.8")
      .from(stepsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2
      }, "-=0.8");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img ref={imageRef} src={img} alt="How it works" className={styles.image} />
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.subtitle}>HOW IT WORKS</div>
        <h2 className={styles.title}>Only 4 Easy Steps</h2>
        <p className={styles.description}>
          Turn your ideas into reality with my professional and streamlined process.
        </p>

        {steps.map((step, index) => (
          <div
            className={styles.step}
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
          >
            <div className={styles.circle}>{step.number}</div>
            <div className={styles.text}>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </div>
          </div>
        ))}

        <button className={styles.button}>Contact Now →</button>
      </div>
    </div>
  );
}

export default HowItWorks;
