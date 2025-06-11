import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import style from "./DraggAble.module.css";

export default function DraggAble({
  id,
  label,
  children,
  activeId,
  setActiveId,
  styling, // now correctly used
  image,
  setMenuContent,
  setMenuPosition,
}) {
  console.log(styling)
  const [isHover, setIsHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const isActive = activeId === id;

  const handleClick = (e) => {
    e.stopPropagation();
    setActiveId(id);
    setIsEditing(true);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isActive) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMenuPosition({ x: rect.right + 12, y: rect.top });
      setMenuContent(true);
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
        border: isActive ? "2px solid blue" : "1px solid gray",
        cursor: "grab",
        color: isHover ? styling?.hoverColor || "inherit" : "inherit",
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
          fontWeight: styling?.typography?.fontWeight,
          fontStyle: styling?.typography?.fontStyle,
          textDecoration: styling?.typography?.textDecoration,
          fontSize: styling?.fontSize,
          lineHeight: styling?.lineHeight,
          color: styling?.fontColor,
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
          <div style={{
            fontFamily: styling?.typography?.fontFamily
          }}>{label}</div>
        )}
      </div>
    </div>
  );
}
