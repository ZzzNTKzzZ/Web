import { useDraggable } from "@dnd-kit/core";
import TiptapEditor from "../TiptapEditor/TiptapEditor";
import { useState, useRef, useEffect } from "react";

export default function DraggAble({ id, label }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const [edit, setEdit] = useState(false);
  const wrapperRef = useRef(null); // ref for click detection

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : '',
    padding: '10px 20px',
    backgroundColor: '#6366f1',
    color: '#fff',
    margin: '5px',
    borderRadius: '8px',
    cursor: 'grab',
  };

  const handleDoubleClick = () => {
    setEdit(true);
  };

  // Click outside detection
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setEdit(false);
      }
    };

    if (edit) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [edit]);

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        wrapperRef.current = node;
      }}
      style={style}
      {...attributes}
      {...listeners}
      onDoubleClick={handleDoubleClick}
    >
      <TiptapEditor content={label} edit={edit} />
    </div>
  );
}
