import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

// Simple EditableBox component (draggable box)
import EditZone from "../../components/EditZone/EditZone";

import style from "./EditPortfolio.module.css";


export default function EditPortfolio() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.editPortfolio}>
        <Topbar />
        <SideBar />
        <EditZone />
      </div>
    </DndProvider>
  );
}
