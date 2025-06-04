import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

import style from "./DraggAble.module.css";
export default function DraggAble({
  id,
  label,
  children,
  activeId,
  setActiveId,
  onRightClick,
  editStyle,
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setActiveId(id);
    setIsEditing(true);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the browser’s default context menu
    e.stopPropagation();
    if (onRightClick) {
      setActiveId(id);
      onRightClick(e, id); // Pass both the event and id for flexibility
    }
  };

  return (
    <div
      className={style.draggAble}
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
        border: activeId === id ? "2px solid blue" : "1px solid gray",
        backgroundColor:
          activeId === id ? editStyle.backgroundColor : "inherit",
      }}
      {...listeners}
      {...attributes}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <div
        style={{
          pointerEvents: "auto",
          userSelect: "text",
          cursor: "text",
          fontFamily: activeId === id ? editStyle.fontFamily : "initial",
          fontWeight: activeId === id ? editStyle.fontWeight : "normal",
          fontStyle: activeId === id ? editStyle.fontStyle : "normal",
          textDecoration: activeId === id ? editStyle.textDecoration : "none",
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {isEditing ? (
          React.cloneElement(children, { editable: true })
        ) : (
          <div>{label}</div>
        )}
      </div>
    </div>
  );
}
