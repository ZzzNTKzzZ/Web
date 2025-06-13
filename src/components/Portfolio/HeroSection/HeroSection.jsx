import React, { useRef, useEffect } from "react";
import styles from "./HeroSection.module.css";
import bgImage from "../../../assets/Img/HeroSection.jpg"; // Thay bằng đúng path ảnh của bạn
import { gsap } from "gsap";

function HeroSection() {
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1 })
      .from(headingRef.current, { y: -80, opacity: 0 }, "-=0.5")
      .from(subHeadingRef.current, { y: 50, opacity: 0 }, "-=0.7")
      .from(descriptionRef.current, { opacity: 0, y: 30 }, "-=0.7")
      .from(buttonRef.current, { opacity: 0, y: 20 }, "-=0.7");
  }, []);

  return (
    <div className={styles.container}>
      <img src={bgImage} alt="Hero Background" className={styles.image} />
      <div className={styles.textOverlay} ref={overlayRef}>
        <h1 className={styles.heading} ref={headingRef}>
          BRINGING IDEAS TO LIFE THROUGH CODE & DESIGN
        </h1>
        <h2 className={styles.subheading} ref={subHeadingRef}>
          Crafting unique digital experiences with modern web technologies
        </h2>
        <p className={styles.description} ref={descriptionRef}>
          Explore my portfolio to discover how I build intuitive user interfaces,
          optimize performance, and deliver seamless web experiences.
        </p>
        <a href="#services" className={styles.ctaButton} ref={buttonRef}>
          Let's Start Your Project
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
