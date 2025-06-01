import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

import "./App.css"
import EditPortfolio from "./Page/EditPortfolio/EditPortfolio";
import Home from "./Page/Home/Home";

export default function App() {
  return (
    <div className="app">
      <Home />
    </div>
  )
}
