import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

import style from "./DraggAble.module.css";
export default function DraggAble({
  id,
  label,
  children,
  activeId,
  onRightClick,
  editStyle,
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const [isEditing, setIsEditing] = useState(false);


  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsEditing(true);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the browser’s default context menu
    e.stopPropagation();
    if (onRightClick) {
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
      }}
      {...listeners}
      {...attributes}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <div
        style={{ pointerEvents: "auto", userSelect: "text", cursor: "text", 
          fontFamily: activeId === id ? editStyle.fontFamily: "initial"

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
