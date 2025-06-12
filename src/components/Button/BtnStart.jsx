import React from "react";
import style from "./button.module.css";

function BtnStart({ Content, onClick }) {
  return (
    <div className={style.btnStartContainer}>
      <button className={style.blobBtn} onClick={onClick}>
        {Content}
        <span className={style.blobBtnInner}>
          <span className={style.blobBtnBlobs}>
            <span className={style.blob}></span>
            <span className={style.blob}></span>
            <span className={style.blob}></span>
            <span className={style.blob}></span>
          </span>
        </span>
      </button>

      {/* Filter blob SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default BtnStart;
