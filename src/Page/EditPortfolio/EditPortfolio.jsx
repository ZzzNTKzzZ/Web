import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar"
import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EditZone from "../../components/EditZone/EditZone";

import style from "./EditPortfolio.module.css";
import { useParams } from "react-router-dom";

export default function EditPortfolio() {
  const navigate = useNavigate();
  // Check responsive: nếu nhỏ hơn 1024 thì chuyển hướng
  useEffect(() => {
    if (window.innerWidth < 1024) {
      alert("Editing is not available on mobile devices. Please use a computer to continue.");
      navigate("");
    }
  }, [navigate]);

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
     
    shadowOpen: false,
    position: "relative",
    displayLogo: "block",
    justifyContent: "right",
     typography: {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
    },
  });
  const [herobannerStyle, setHerobannerStyle] = useState({
    backgroundColor: "rgba(255,255,255,1)",
    backgroundImage: "",
    justify: "center",
    border: "0px none #000",
  });

  const [columnHeroBannerStyle, setColumnHeroBannerStyle ] = useState();
  const [textStyle, setTextStyle] = useState();
  const [styleContentSection, setStyleContentSection] = useState();
  
  const { id } = useParams(); 
  console.log("Editor ID:", id);
  return (
    <div className={style.editPortfolio}>
      <Topbar />
      {/* <Navbar /> */}
      <SideBar />
      <EditZone
        idPortfolio={id}
        editMenu={editMenu}
        
      />
    </div>
  );
}
