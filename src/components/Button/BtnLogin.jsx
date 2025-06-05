import React from "react";
import style from "./button.module.css";

function BtnLogin({ Content, onClick }) {
  return (
    <div className={style.btnLoginContainer}>
      <button
        type="button"
        className={style.btnLogin}
        role="button"
        onClick={onClick}
      >
        <p>{Content}</p>
      </button>
    </div>
  );
}

export default BtnLogin;
