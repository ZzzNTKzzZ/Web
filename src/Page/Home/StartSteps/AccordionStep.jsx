import React, { useState } from "react";
import style from "./startSteps.module.css";

import ImgStep1 from "../../../assets/Img/ImgStep1.svg";
import ImgStep2 from "../../../assets/Img/ImgStep2.svg";
import ImgStep3 from "../../../assets/Img/ImgStep3.svg";
import ImgStep4 from "../../../assets/Img/ImgStep4.svg";
import ImgStep5 from "../../../assets/Img/ImgStep5.svg";

const steps = [
  {
    title: "1. Register an account",
    short: "Create an account and log in...",
    full: "Create an account and log in to your dashboard. Here you'll discover powerful tools that will help you get started building your personal portfolio with ease.",
    img: ImgStep1,
  },
  {
    title: "2. Add collections and content pages",
    short: "Build websites from pages like...",
    full: "Build websites from pages like images, posts, projects, or blogs. Choose from a variety of templates to add content quickly and professionally.",
    img: ImgStep2,
  },
  {
    title: "3. Portfolio interface design",
    short: "Customize every element...",
    full: "Customize every element from layout, colors, fonts to images. All changes will be displayed immediately on your website.",
    img: ImgStep3,
  },
  {
    title: "4. Use your own domain name and email",
    short: "Connect your own domain...",
    full: "Connect your own domain and create a professional email address to add credibility to your portfolio. Manage it all easily in settings.",
    img: ImgStep4,
  },
  {
    title: "5. Share your portfolio",
    short: "Once you're done, you can...",
    full: "Once you're done, you can make your portfolio public and share it via Google, social media, or email. You can update and edit the content at any time.",
    img: ImgStep5,
  },
];

function AccordionStep() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={style.wrapper}>
      <div className={style.accordionContainer}>
        {steps.map((step, index) => {
          const isOpenLeft = index >= steps.length - 2;
          return (
            <div
              className={`${style.accordionCard} ${
                activeIndex === index ? style.active : ""
              }`}
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img
                src={step.img}
                alt={`step-${index}`}
                className={style.accordionImage}
              />
              <h4>{step.title}</h4>
              <p>
                {activeIndex === index
                  ? step.full.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))
                  : step.short}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccordionStep;
