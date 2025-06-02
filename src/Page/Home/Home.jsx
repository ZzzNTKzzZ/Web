import React, { useState, useEffect } from "react";

import Header from "./Header/Header";
import Header2 from "./Header2/Header2";
import Navbar from "../../components/Navbar/Navbar";
import ShowCase from "./ShowCase/ShowCase";

import style from "./home.module.css";

import useScrollY from "../../Hooks/useScrollY";

function Home() {
  const { scrollY, shrink } = useScrollY();

  return (
    <div className={style.home}>
      <Navbar />
      <Header2 scrollY={scrollY} />

      <Header scrollY={scrollY} shrink={shrink} />
      <div style={{ height: "200vh", backgroundColor: "#f0f0f0" }}></div>
      <ShowCase />
    </div>
  );
}

export default Home;
