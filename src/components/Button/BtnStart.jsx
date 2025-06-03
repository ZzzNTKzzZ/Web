import React from "react";
import style from "./button.module.css";

function BtnStart({ Content, onClick }) {
  return (
    <div className={style.btnStart}>
      <button
        type="button"
        className={style.btnStart}
        role="button"
        onClick={onClick}
      >
        <p>{Content}</p>
      </button>
    </div>
  );
}

export default BtnStart;
