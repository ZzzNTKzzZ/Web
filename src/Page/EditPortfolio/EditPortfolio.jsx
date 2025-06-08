import React, { useState } from "react";

import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EditZone from "../../components/EditZone/EditZone";
import EditMenu from "../../components/EditComponent/EditMenu/EditMenu";

import style from "./EditPortfolio.module.css";

export default function EditPortfolio() {
  const [editMenu, setEditMenu] = useState(null);
  const [styleNavbarSection, setStyleNavbarSection] = useState({
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "rgb(0, 0, 0)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSize: 24,
    gap: "16",
    paddingBottom: "20",
    paddingLeft: "20",
    paddingRight: "20",
    paddingTop: "20",
    boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)",
    hoverColor: "rgb(0, 0, 0)",
    typography: {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
    },
    shadowOpen: false,
    position: "relative",
    displayLogo: "block",
    justifyContent: "right",
  });
  const [herobannerStyle, setHerobannerStyle] = useState({
    backgroundColor: "rgba(255,255,255,1)",
    backgroundImage: "",
    justify: "center",
    border: "0px none #000",
  });
  const [columnHeroBannerStyle, setColumnHeroBannerStyle ] = useState();
  const [styleContentSection, setStyleContentSection] = useState();
  function renderMenu() {
    switch (editMenu) {
      case "navbar-section":
        return (
          <EditMenu.NavbarSection
            styleNavbar={styleNavbarSection}
            setStyleNavbar={setStyleNavbarSection}
            setMenu={setEditMenu} // toggle editMenu state to close menu
          />
        );
      case "content-section":
        return <EditMenu.ContentSection />;
      case "herobanner-section":
        return (
          <EditMenu.HeroBannerSection
            setStyleHeroBanner={setHerobannerStyle}
            styleHeroBanner={herobannerStyle}
            setMenu={setEditMenu}
          />
        );
      case "column-section" :
        return (
          <EditMenu.ColumnSection 
            setStyleColumn={setColumnHeroBannerStyle}
            styleColumn={columnHeroBannerStyle}
            setMenu={setEditMenu}
          />
        )
      default:
        return null;
    }
  }

  return (
    <div className={style.editPortfolio}>
      <Topbar />
      <SideBar />
      <EditZone
        setEditMenu={setEditMenu}
        editMenu={editMenu}
        setNavbarStyle={setStyleNavbarSection}
        navbarStyle={styleNavbarSection}
        setHerobannerStyle={setHerobannerStyle}
        herobannerStyle={herobannerStyle}
        columnHeroBannerStyle={columnHeroBannerStyle}
        setColumnHeroBannerStyle={setColumnHeroBannerStyle}
      />
      {editMenu && renderMenu()}
    </div>
  );
}
