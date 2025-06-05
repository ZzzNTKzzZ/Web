import React from "react";

import style from "./button.module.css";

function BtnStepStart({ Content, onClick }) {
  return (
    <div className={style.btnStepStartContainer}>
      <button
        type="button"
        className={style.btnStepStart}
        role="button"
        onClick={onClick}
      >
        <p>{Content}</p>
      </button>
    </div>
  );
}

export default BtnStepStart;
