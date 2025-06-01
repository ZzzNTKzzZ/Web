import React from "react";
import { useDrag } from "react-dnd";

export default function EditableBox({ id, type, component }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id, type]);

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        border: "1px solid gray",
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: "#f9f9f9",
        userSelect: "none",
      }}
    >
      {component}
    </div>
  );
}
