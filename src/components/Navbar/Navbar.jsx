import React from "react";
import { useNavigate, Link } from "react-router-dom";

import style from "./navbar.module.css";
import useScrollDirection from "../../Hooks/Navbar/useScrollDirection";
import BtnLogin from "../Button/BtnLogin";

function Navbar({ user, handleSignOut }) {
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();

  const handleLoginAccountClick = () => {
    navigate("/loginForm", { state: { tab: "login" } });
  };

  // Reset trang web to vị trí đầu tiên
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`${style.navbar} ${
        scrollDirection === "down" ? style.hide : style.show
      }`}
    >
      <div className={style.itemLeft} onClick={handleScrollToTop}>
        <div className={style.logo}></div>
        <p>Portlify</p>
      </div>

      {user ? (
        // Nếu người dùng đã đăng nhập
        <div className={style.loggedInUserContainer}>
          {user.photoURL && (
            <img src={user.photoURL} alt="User Avatar" className={style.userAvatar} />
          )}
          {/* Email của người dùng */}
          <span className={style.userEmail}>{user.email || user.displayName}</span>
          <button onClick={handleSignOut} className={style.signOutButton}>
            Log Out
          </button>
        </div>
      ) : (
        // Nếu chưa đăng nhập
        <>
          <div className={style.navbarMenu}>
            <a href="/" className={style.navbarItem}>Home</a>
            <a href="/portfolio" className={style.navbarItem}>Portfolio</a>
            <a href="/about" className={style.navbarItem}>About</a>
            <a href="/contact" className={style.navbarItem}>Contact</a>
          </div>
          <BtnLogin Content={"Sign In"} onClick={handleLoginAccountClick} />
        </>
      )}
    </div>
  );
}

export default Navbar;
