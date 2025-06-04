import { DndContext } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import Droppable from "../../EditComponent/Droppable/Droppable";
import DraggAble from "../../EditComponent/DraggAble/DraggAble";
import TiptapEditor from "../../EditComponent/TiptapEditor/TiptapEditor";
import ContextMenu from "../../EditComponent/ContextMenu/ContextMenu";

let countContainer = 3;

export default function NavbarPortfolio({ onCreate }) {
  const [containers, setContainers] = useState([
    { id: "droppable1", item: "home", label: "Home", style: { fontFamily: "Times New Roman" } },
    { id: "droppable2", item: "about", label: "About", style: { fontFamily: "Times New Roman" } },
    { id: "droppable3", item: "contact", label: "Contact", style: { fontFamily: "Times New Roman" } },
  ]);
  const [editStyle, setEditStyle] = useState({
    fontFamily: "Times New Romand",
    fontSize: "inherit",
    fontStyle: "normal",
    fontWeight: "normal",
    textDecoration: "none",
    backgroundColor: "#fff"
  });
  const menuRef = useRef();
  const [activeId, setActiveId] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    targetId: null,
  });

  useEffect(() => {
    if (onCreate) {
      countContainer += 1;
      const newId =`droppable${countContainer}`;
      const newItemId = `newItem${countContainer}`;
      const newLabel = `new${countContainer - 3}`;
      setContainers((prev) => [
        ...prev,
        { id: newId, item: newItemId, label: newLabel },
      ]);
    }
  }, [onCreate]);

  const handleRightClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setContextMenu({
      visible: true,
      x: rect.right + 4,
      y: rect.top,
      targetId: id,
    });
  };

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

  const handleUpdateLabel = (itemId, newLabel) => {
    setContainers((prev) =>
      prev.map((container) =>
        container.item === itemId
          ? { ...container, label: newLabel }
          : container
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
        position: "relative",
      }}
    >
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {containers.map((container) => (
          <Droppable key={container.id} id={container.id}>
            <DraggAble
              id={container.item}
              label={container.label}
              activeId={activeId}
              onRightClick={handleRightClick}
              editStyle={editStyle}
              setActiveId={setActiveId}
            >
              <TiptapEditor
                content={container.label}
                onChange={(newContent) =>
                  handleUpdateLabel(container.item, newContent)
                }
                editable={true}
              />
            </DraggAble>
          </Droppable>
        ))}
      </DndContext>
      {contextMenu.visible && (
        <ContextMenu
          ref={menuRef}
          position={contextMenu}
          setContextMenu={setContextMenu}
          editor
          editStyle={editStyle}
          setEditStyle={setEditStyle}
        />
      )}
    </div>
  );
}