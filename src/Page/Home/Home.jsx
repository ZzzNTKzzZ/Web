import React, { useState, useEffect } from "react";


import Navbar from "../../components/Navbar/Navbar";
import Header from "./Header/Header";
import Header2 from "./Header2/Header2";
import ShowCase from "./ShowCase/ShowCase";
import StartSteps from "./StartSteps/StartSteps";
import Footer from "../../components/Footer/Footer";

import style from "./home.module.css";

import useScrollY from "../../Hooks/useScrollY";
import useScrollDirection from "../../Hooks/Navbar/useScrollDirection"



function Home() {
  const { scrollY, shrink } = useScrollY();
  const scrollDirection = useScrollDirection();

  return (
    <div className={style.home}>
      <Navbar scrollDirection={scrollDirection} />
      <Header2 scrollY={scrollY} />

      <Header scrollY={scrollY} shrink={shrink} />
      <ShowCase />
      <StartSteps />
      <Footer />
      
    </div>
  );
}

export default Home;
