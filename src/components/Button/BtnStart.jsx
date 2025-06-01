import React from "react";
import style from "./button.module.css";

function BtnStart({Content}) {
  return (
    <div className={style.btnStart}>
      <p>{Content}</p>
</div>
  );
}

export default BtnStart;
