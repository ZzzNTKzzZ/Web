import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import "./App.css"
import EditPortfolio from "./Page/EditPortfolio/EditPortfolio";
export default function App() {
  return (
    <div className="app">
      <EditPortfolio />
    </div>
  )
}
