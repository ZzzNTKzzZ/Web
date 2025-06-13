import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";
import { useNavigate } from "react-router-dom";

import style from "./loginAfter.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import TemplateGrid from "../../components/Portfolio/TemplateGrid/TemplateGrid";

function LoginAfter() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Kiểm tra user đăng nhập hay chưa
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // Nếu không đăng nhập thì điều hướng về trang login
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  // Xử lý đăng xuất
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Bạn đã đăng xuất.");
      navigate("/login");
    } catch (err) {
      console.error("Lỗi đăng xuất:", err.message);
      alert("Không thể đăng xuất.");
    }
  };

  // Loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">
          Đang tải trang Dashboard...
        </p>
      </div>
    );
  }

  // Nếu chưa có user (sẽ tự redirect bởi useEffect), hiển thị rỗng
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Navbar user={user} handleSignOut={handleSignOut} />
      <div className={style.loginAfterContainer}>
        <div className={style.templateGrid}>
          <TemplateGrid />
        </div>
        {/* <div className={style.container}>
          <h2 className={style.title}>
            Hoặc bắt đầu xây dựng landing page theo cách của bạn
          </h2>

          <div className={style.cardWrapper}>
            <div className={style.card}>
              <div className={style.icon}></div>
              <h3 className={style.cardTitle}>Trang trắng</h3>
              <p className={style.cardDescription}>Xây dựng trang từ đầu</p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default LoginAfter;
