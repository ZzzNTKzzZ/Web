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
  navbarStyle,
  image,
}) {
  const [isHover, setIsHover] = useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const [isEditing, setIsEditing] = useState(false);

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
        color: isHover ? navbarStyle?.hoverColor : "inherit",
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
          fontFamily: navbarStyle?.fontFamily,
          fontWeight: navbarStyle?.typography?.fontWeight,
          fontStyle: navbarStyle?.typography?.fontStyle,
          textDecoration: navbarStyle?.typography?.textDecoration,
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {image ? (
          <div className={style.image}>
            <img src={image} alt="Preview" className={style.imagePreview} />
          </div>
        ) : isEditing && React.isValidElement(children) ? (
          React.cloneElement(children, { editable: true })
        ) : (
          <div>{label}</div>
        )}
      </div>
    </div>
  );
}
