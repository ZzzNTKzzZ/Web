import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core"; // ✅ correct import

import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EditZone from "../../components/EditZone/EditZone";

import style from "./EditPortfolio.module.css";

export default function EditPortfolio() {
  const [parent, setParent] = useState(null); // <- you were missing this state

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={style.editPortfolio}>
        <Topbar />
        <SideBar />
        <EditZone parent={parent} /> 
      </div>
    </DndContext>
  );
}
