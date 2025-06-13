import React, { useEffect, useRef } from 'react';
import style from "../ContactHeader/ContactHeader.module.css";
import { gsap } from "gsap";

const ContactHeader = () => {
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.from(headingRef.current, { opacity: 0, y: -40 })
      .from(descRef.current, { opacity: 0, y: 40 }, "-=0.5");
  }, []);

  return (
    <section className={style.headerSection}>
      <div className={style.container}>
        <h1 className={style.heading} ref={headingRef}>
          <span className={style.highlighted}>Connect</span> with Our Team
        </h1>
        <p className={style.description} ref={descRef}>
          Have a question or need support? Our team is here to help you every step of the way.
        </p>
      </div>
    </section>
  );
}

export default ContactHeader;
