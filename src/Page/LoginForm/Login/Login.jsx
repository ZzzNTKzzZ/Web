import React from "react";
import style from "./login.module.css";

import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";


function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.socialLogin}>
        <span>Sign in with account</span>
        <div className={style.socialIcons}>
          <FaGoogle style={{ color: "#DB4437" }} className={style.icon} />{" "}
          <FaGithub style={{ color: "#333" }} className={style.icon} />{" "}
        </div>
        <div className={style.divider}>Or</div>
      </div>
      <div className={style.form}>
        <input type="text" placeholder="Username" className={style.input} />
        <input type="password" placeholder="Password" className={style.input} />
        <button className={style.loginButton}>Sign In</button>
        <a href="#" className={style.forgotPassword}>
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default Login;
