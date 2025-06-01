import React from "react";
import { useDrop } from "react-dnd";

export default function DropZone({ accepted, children, onDrop }) {
  const [, dropRef] = useDrop({
    accept: accepted,
    drop: (item) => onDrop(item.id),
  });

  return (
    <div
      ref={dropRef}
      style={{
        minHeight: "200px",
        padding: "16px",
        margin: "16px",
        backgroundColor: "#eee",
        border: "2px dashed #aaa",
      }}
    >
      {children}
    </div>
  );
}
