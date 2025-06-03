import { DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Droppable from "../../EditComponent/Droppable/Droppable";
import DraggAble from "../../EditComponent/DraggAble/DraggAble";
import TiptapEditor from "../../EditComponent/TiptapEditor/TiptapEditor";

let countContainer = 3;

export default function NavbarPortfolio({ onCreate }) {
  const [containers, setContainers] = useState([
    { id: "droppable1", item: "home", label: "Home" },
    { id: "droppable2", item: "about", label: "About" },
    { id: "droppable3", item: "contact", label: "Contact" },
  ]);

  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (onCreate) {
      countContainer += 1;
      const newId = `droppable${countContainer}`;
      const newItemId = `newItem${countContainer}`;
      const newLabel = `New ${countContainer - 3}`;
      setContainers((prev) => [
        ...prev,
        { id: newId, item: newItemId, label: newLabel },
      ]);
    }
  }, [onCreate]);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const draggedId = active.id;
    const targetDroppableId = over.id;

    const sourceIndex = containers.findIndex((c) => c.item === draggedId);
    const targetIndex = containers.findIndex((c) => c.id === targetDroppableId);

    if (sourceIndex === -1 || targetIndex === -1) return;
    if (containers[targetIndex].item === draggedId) return;

    setContainers((prev) => {
      const updated = [...prev];
      const tempItem = updated[targetIndex].item;
      const tempLabel = updated[targetIndex].label;

      updated[targetIndex].item = updated[sourceIndex].item;
      updated[targetIndex].label = updated[sourceIndex].label;

      updated[sourceIndex].item = tempItem;
      updated[sourceIndex].label = tempLabel;

      return updated;
    });

    setActiveId(null);
  };

  // ✅ FIXED: Update label using `item` as key (not index)
  const handleUpdateLabel = (itemId, newLabel) => {
    setContainers((prev) =>
      prev.map((container) =>
        container.item === itemId ? { ...container, label: newLabel } : container
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        flexWrap: "wrap",
        maxWidth: "100%",
      }}
    >
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {containers.map((container) => (
          <Droppable key={container.id} id={container.id}>
            <DraggAble
              id={container.item}
              label={container.label}
              activeId={activeId}
            >
              <TiptapEditor
                content={container.label}
                onChange={(newContent) =>
                  handleUpdateLabel(container.item, newContent)
                }
              />
            </DraggAble>
          </Droppable>
        ))}
      </DndContext>
    </div>
  );
}
