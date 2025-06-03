import React from "react";

import style from "./register.module.css";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

function Register() {
  return (
    <div className={style.registerContainer}>
      <div className={style.socialLogin}>
        <span>Register new account</span>
        <div className={style.socialIcons}>
          <FaFacebook style={{ color: "#1877F2" }} className={style.icon} />{" "}
          <FaGoogle style={{ color: "#DB4437" }} className={style.icon} />{" "}
          <FaGithub style={{ color: "#333" }} className={style.icon} />{" "}
        </div>
        <div className={style.divider}>Or</div>
      </div>
      <div className={style.form}>
        <input type="text" placeholder="Username" className={style.input} />
        <input type="email" placeholder="Email" className={style.input} />
        <input type="password" placeholder="Password" className={style.input} />
        <div className={style.agreement}>
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">
            I agree to the privacy policy of the developer CodeAlg
          </label>
        </div>
        <button className={style.registerButton}>Sign Up</button>
      </div>
    </div>
  );
}

export default Register;
