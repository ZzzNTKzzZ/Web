import React, { useEffect, useRef } from "react";
import style from "../Header/header.module.css";

const Header2 = ({ scrollY }) => {
  const maxScroll = 100;
  const startScale = 8;
  // const bgRef = useRef();

  const scale =
    scrollY < maxScroll
      ? startScale - (scrollY / maxScroll) * (startScale - 1)
      : 1;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const slowScroll = scrollY * 0.4; // tốc độ cuộn nền chậm hơn
  //     const opacity = 1 - scrollY / 600;
  //     const scale = 1 + scrollY / 3000;

  //     if (bgRef.current) {
  //       bgRef.current.style.transform = `translateY(${slowScroll}px) scale(${scale})`;
  //       bgRef.current.style.opacity = opacity > 0 ? opacity : 0;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className={style.header2}
      // ref={bgRef}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.2s ease-out",
      }}
    >
    </div>
  );
};

export default Header2;
