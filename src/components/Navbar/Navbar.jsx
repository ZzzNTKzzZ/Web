import React from "react";
import style from "./navbar.module.css";
import useScrollDirection from "../../Hooks/Navbar/useScrollDirection";

function Navbar() {
  const scrollDirection = useScrollDirection();

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
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className={style.ItemLogin}>Login</div>
    </div>
  );
}

export default Navbar;
