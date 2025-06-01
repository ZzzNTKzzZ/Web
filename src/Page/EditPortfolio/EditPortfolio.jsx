import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import SideBar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import DropZone from "../../components/DropZone/DropZone";

// Simple EditableBox component (draggable box)
import { useDrag } from "react-dnd";

function EditableBox({ id, text }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "BOX",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "8px",
        margin: "4px",
        backgroundColor: "#cce5ff",
        border: "1px solid #007bff",
        userSelect: "none",
        width: "150px",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}

export default function EditPortfolio() {
  const [outsideItems, setOutsideItems] = useState([
    { id: "box1", text: "Outside Item 1" },
    { id: "box2", text: "Outside Item 2" },
  ]);
  const [zone1Items, setZone1Items] = useState([]);
  const [zone2Items, setZone2Items] = useState([]);

  function handleDropZone1(id) {
    if (zone1Items.find((item) => item.id === id)) return;

    let movedItem =
      outsideItems.find((item) => item.id === id) ||
      zone2Items.find((item) => item.id === id);

    if (movedItem) {
      setOutsideItems(outsideItems.filter((item) => item.id !== id));
      setZone2Items(zone2Items.filter((item) => item.id !== id));
      setZone1Items([...zone1Items, movedItem]);
    }
  }

  function handleDropZone2(id) {
    if (zone2Items.find((item) => item.id === id)) return;

    let movedItem =
      outsideItems.find((item) => item.id === id) ||
      zone1Items.find((item) => item.id === id);

    if (movedItem) {
      setOutsideItems(outsideItems.filter((item) => item.id !== id));
      setZone1Items(zone1Items.filter((item) => item.id !== id));
      setZone2Items([...zone2Items, movedItem]);
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {/* <Topbar />
        <SideBar /> */}

        {/* Outside boxes */}
        <div style={{ padding: "16px" }}>
          <h3>Outside Items (Drag me to drop zones)</h3>
          <div style={{ display: "flex", gap: "12px" }}>
            {outsideItems.map(({ id, text }) => (
              <EditableBox key={id} id={id} text={text} />
            ))}
          </div>
        </div>

        {/* Drop Zones */}
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 32 }}>
          <DropZone accepted={"BOX"} onDrop={handleDropZone1}>
            <h3>Drop Zone 1</h3>
            {zone1Items.map(({ id, text }) => (
              <EditableBox key={id} id={id} text={text} />
            ))}
          </DropZone>

          <DropZone accepted={"BOX"} onDrop={handleDropZone2}>
            <h3>Drop Zone 2</h3>
            {zone2Items.map(({ id, text }) => (
              <EditableBox key={id} id={id} text={text} />
            ))}
          </DropZone>
        </div>
      </div>
    </DndProvider>
  );
}
