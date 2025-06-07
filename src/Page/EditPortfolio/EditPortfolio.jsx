import React, { useEffect, useState } from "react";

import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EditZone from "../../components/EditZone/EditZone";
import EditMenu from "../../components/EditComponent/EditMenu/EditMenu";

import style from "./EditPortfolio.module.css";

export default function EditPortfolio() {
  const [editMenu, setEditMenu] = useState(false);
  const [menu, setMenu] = useState();

  const [styleNavbarSection, setStyleNavbarSection] = useState({
  backgroundColor: "rgba(255, 255, 255, 1)",
  color: "rgb(0, 0, 0)",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSize: 22.464, // number is good here
  gap: "16px",
  paddingBottom: "20px",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "20px",
  boxShadow: "-65px -81px 10px 0px rgba(0, 0, 0, 0.2)",
  hoverColor: "rgba(255, 255, 255, 0.5)",
  typography: {
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
  },
  shadowOpen: true,
  position: "relative",
  displayLogo: "block",
  justifyContent: "right",
  
  // ADD THESE:
  menuOpen: false,     // controls menu dropdown open
  logoOpen: false,     // controls logo dropdown open
  logo: false,         // if logo is shown
  align: "left",       // or "center" or "right"
});

  useEffect(() => {
    switch (editMenu) {
      case "navbar-section":
        setMenu(
          <EditMenu.NavbarSection
            styleNavbar={styleNavbarSection}
            setStyleNavbar={setStyleNavbarSection}
          />
        );
        break;
      case "content-section":
        setMenu(<EditMenu.ContentSection />);
        break;
      default:
        setMenu(null);
        break;
    }
  }, [editMenu, styleNavbarSection]);

  return (
    <div className={style.editPortfolio}>
      <Topbar />
      <SideBar />
      <EditZone
        setEditMenu={setEditMenu}
        editMenu={editMenu}
        setNavbarStyle={setStyleNavbarSection}
        navbarStyle={styleNavbarSection}
      />
      {editMenu && menu}
    </div>
  );
}
