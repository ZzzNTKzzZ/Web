import React, { useState, useEffect } from "react";


import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/Navbar/NavbarResponsive";
import Header from "./Header/Header";
import Header2 from "./Header2/Header2";
import ShowCase from "./ShowCase/ShowCase";
import StartSteps from "./StartSteps/StartSteps";
import Footer from "../../components/Footer/Footer";

import style from "./home.module.css";

import useScrollY from "../../Hooks/useScrollY";
import useScrollDirection from "../../Hooks/Navbar/useScrollDirection";
import useScreenWidth from "../../Hooks/useScreenWidth";



function Home() {
  const { scrollY, shrink } = useScrollY();
  const scrollDirection = useScrollDirection();
  const currentScreenWidth = useScreenWidth();

  const MOBILE_BREAKPOINT = 768; // px

  return (
    <div className={style.home}>
      {currentScreenWidth < MOBILE_BREAKPOINT ? (
        // Nếu chiều rộng màn hình nhỏ hơn 768px, hiển thị NavbarResponsive
        <NavbarResponsive scrollDirection={scrollDirection} />
      ) : (
        // Nếu chiều rộng màn hình lớn hơn hoặc bằng 768px, hiển thị Navbar
        <Navbar scrollDirection={scrollDirection} />
      )}

      <Header2 scrollY={scrollY} />

      <Header scrollY={scrollY} shrink={shrink} />
      <ShowCase />
      <StartSteps />
      <Footer />
      
    </div>
  );
}

export default Home;
