import React, { useEffect, useRef } from "react";
import style from "./showCase.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ImageCarousel from "../../../Hooks/ShowCase/ImageCarousel";

gsap.registerPlugin(ScrollTrigger);

function ShowCase() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Tiêu đề
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Đoạn văn
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className={style.showCase}>
      <div className={style.content}>
        <div ref={titleRef}>
          <h2>
            Make your digital mark with a professional <br />
            and impressive portfolio
          </h2>
        </div>
        <p ref={paragraphRef}>
          Create a unique online space to showcase your software development
          projects, skills, and experience. <br />
          Thousands of developers and IT professionals are using Portlify to
          create their own portfolios, <br />
          giving each website a unique personality and capabilities.
        </p>
      </div>

      <div className={style.carousel}>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default ShowCase;
