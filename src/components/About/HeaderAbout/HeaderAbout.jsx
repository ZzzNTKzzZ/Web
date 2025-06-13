import React, { useRef, useEffect } from "react";
import styles from "./HeaderAbout.module.css";
import aboutImage from "../../../assets/Img/Person/person2.jpg";
import { gsap } from "gsap";

function HeaderAbout() {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const newTitleRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1 }
    )
      .from(titleRef.current, { y: -80, opacity: 0 }, "-=0.5")
      .from(newTitleRef.current, { y: 80, opacity: 0 }, "-=0.7")
      .from(breadcrumbRef.current, { opacity: 0, y: 30 }, "-=0.7")
      .from(descriptionRef.current, { opacity: 0, y: 30 }, "-=0.7");
  }, []);

  return (
    <div className={styles.container}>
      <img src={aboutImage} alt="About Us" className={styles.image} />
      <div className={styles.textOverlay} ref={overlayRef}>
        <h1 className={styles.title} ref={titleRef}>About Us</h1>
        <h2 className={styles.newTitle} ref={newTitleRef}>Our Mission</h2>
        <p className={styles.breadcrumb} ref={breadcrumbRef}>
          Home <span className={styles.breadcrumbArrow}>&gt;</span>
          <span className={styles.current}>About Us</span>
        </p>
        <p className={styles.description} ref={descriptionRef}>
          I am passionate about crafting clean, user-friendly designs and building responsive web applications.
        </p>
      </div>
    </div>
  );
}

export default HeaderAbout;
