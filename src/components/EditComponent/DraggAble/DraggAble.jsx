import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export default function DraggAble({ id, label, children, activeId, onRightClick }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const [isEditing, setIsEditing] = useState(false);

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    border: activeId === id ? "2px solid blue" : "1px solid gray",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    background: "#f4f4f4",
    minWidth: 150,
    userSelect: "none",
    cursor: "grab",
  };

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
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <div
        style={{ pointerEvents: "auto", userSelect: "text", cursor: "text" }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {isEditing
          ? React.cloneElement(children, { editable: true })
          : <div>{label}</div>
        }
      </div>
    </div>
  );
}
