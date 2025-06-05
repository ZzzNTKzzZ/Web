import React, { useEffect, useState } from "react";

import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EditZone from "../../components/EditZone/EditZone";

import style from "./EditPortfolio.module.css";
import EditMenu from "../../components/EditComponent/EditMenu/EditMenu";

export default function EditPortfolio() {
  const [editMenu, setEditMenu] = useState(false);
  const [menu, setMenu] = useState();
  useEffect(() => {
    switch (editMenu) {
      case "navbar-section":
        setMenu(<EditMenu.NavbarSection />);
        break;
      case "content-section":
        setMenu(<EditMenu.ContentSection />);
        break;
      default:
        break;
    }
  }, [editMenu]);
  return (
    <div className={style.editPortfolio}>
      <Topbar />
      <SideBar />
      <EditZone setEditMenu={setEditMenu} editMenu={editMenu} />
      {editMenu ? menu : ""}
    </div>
  );
}
