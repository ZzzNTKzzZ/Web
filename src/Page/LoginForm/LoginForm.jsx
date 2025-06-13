
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../../Config/firebaseConfig"; 

import Login from "./Login/Login";
import Register from "./Register/Register";
import Navbar from "../../components/Navbar/Navbar"; 

import style from "./loginForm.module.css"; 

function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Bạn đã đăng xuất.');
      setUser(null);
      setActiveTab("login");
      navigate('/login');
    } catch (err) {
      console.error("Lỗi đăng xuất:", err.message);
      alert('Không thể đăng xuất.');
    }
  };

  return (
    <div className={style.container}>
      <Navbar user={user} handleSignOut={handleSignOut} />

      <div className={style.authContainer}>
        <div className={style.decorativeBorderTopLeft}></div>
        <div className={style.decorativeBorderTopRight}></div>

        {user ? (
          <div className={style.signedInInfo}>
            <p>Đang chuyển hướng...</p>
          </div>
        ) : (
          <>
            <div className={style.tabContainer}>
              <button
                className={`${style.tabButton} ${activeTab === "register" ? style.activeTab : ""}`}
                onClick={() => handleTabClick("register")}
              >
                Sign Up
              </button>
              <button
                className={`${style.tabButton} ${activeTab === "login" ? style.activeTab : ""}`}
                onClick={() => handleTabClick("login")}
              >
                Sign In
              </button>
            </div>

            <div className={style.contentContainer}>
              {activeTab === "register" && <Register setActiveTab={setActiveTab} />}
              {activeTab === "login" && <Login setActiveTab={setActiveTab} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
