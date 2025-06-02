import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ id, children, label }) {
  const { setNodeRef } = useDroppable({ id });

  const style = {
    
  };

  return (
    <div ref={setNodeRef} style={style}>
      <strong>{label}</strong>
      {children}
    </div>
  );
}
