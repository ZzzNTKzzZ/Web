import React from "react";
import style from "../Header/header.module.css";
import ShowCase from "../ShowCase/ShowCase";

const Header2 = ({ scrollY }) => {
  const maxScroll = 100;
  const startScale = 5;

  const scale =
    scrollY < maxScroll
      ? startScale - (scrollY / maxScroll) * (startScale - 1)
      : 1;

  return (
    <div
      className={style.header2}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.2s ease-out",
      }}
    >
    </div>
  );
};

export default Header2;
