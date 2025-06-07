import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

import style from "./DraggAble.module.css";

export default function DraggAble({
  id,
  label,
  children,
  activeId,
  setActiveId,
  editStyle,
  hoverColor
}) {
  const [isHover, setIsHover] = useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const [isEditing, setIsEditing] = useState(false);
  const safeStyle = {
    fontFamily: editStyle.fontFamily || "inherit",
    fontWeight: editStyle.fontWeight || "normal",
    fontStyle: editStyle.fontStyle || "normal",
    textDecoration: editStyle.textDecoration || "none",
    color: editStyle.color || "#000",
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setActiveId(id);
    setIsEditing(true);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        cursor: "grab",
        color: isHover ? hoverColor : "inherit",
      }}
      {...listeners}
      {...attributes}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{
          pointerEvents: "auto",
          userSelect: "text",
          cursor: "text",
          fontFamily: safeStyle.fontFamily,
          fontWeight: safeStyle.fontWeight,
          fontStyle: safeStyle.fontStyle,
          textDecoration: safeStyle.textDecoration,
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {isEditing && React.isValidElement(children) ? (
          React.cloneElement(children, { editable: true })
        ) : (
          <div>{label}</div>
        )}
      </div>
    </div>
  );
}
