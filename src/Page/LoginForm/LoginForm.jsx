import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from "./loginForm.module.css";

import Login from "./Login/Login";
import Register from "./Register/Register";

function LoginForm() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("register");

  useEffect(() => {
    // Nếu route gửi kèm state tab (vd: "login") thì chuyển tab tương ứng
    if (location.state?.tab === "login") {
      setActiveTab("login");
    }
  }, [location.state]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.container}>
      <div className={style.authContainer}>
        <div className={style.tabContainer}>
          <div
            className={`${style.tab} ${activeTab === "register" ? style.active : ""}`}
            onClick={() => handleTabClick("register")}
          >
            Sign Up
          </div>
          <div
            className={`${style.tab} ${activeTab === "login" ? style.active : ""}`}
            onClick={() => handleTabClick("login")}
          >
            Sign In
          </div>
        </div>

        <div className={style.contentContainer}>
          {activeTab === "register" && <Register />}
          {activeTab === "login" && <Login />}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
