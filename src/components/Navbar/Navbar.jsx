import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./navbar.module.css";
import useScrollDirection from "../../Hooks/Navbar/useScrollDirection";
import BtnLogin from "../Button/BtnLogin";

function Navbar() {
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();

  const handleLoginAccountClick = () => {
    // Chuyển hướng kèm state để hiển thị tab login
    navigate("/loginForm", { state: { tab: "login" } });
  };

  return (
    <div
      className={`${style.navbar} ${
        scrollDirection === "down" ? style.hide : style.show
      }`}
    >
      <div className={style.itemLeft}>
        <div className={style.logo}></div>
        <p>Portlify</p>
      </div>
      <div className={style.navbarMenu}>
        <a href="/" className={style.navbarItem}>Home</a>
        <a href="/portfolio" className={style.navbarItem}>Portfolio</a>
        <a href="/about" className={style.navbarItem}>About</a>
        <a href="/contact" className={style.navbarItem}>Contact</a>
      </div>
      <BtnLogin Content={"Login"} onClick={handleLoginAccountClick} />
    </div>
  );
}

export default Navbar;
