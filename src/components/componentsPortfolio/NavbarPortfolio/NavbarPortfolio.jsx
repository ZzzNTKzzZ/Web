import { DndContext } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import Droppable from "../../EditComponent/Droppable/Droppable";
import DraggAble from "../../EditComponent/DraggAble/DraggAble";
import TiptapEditor from "../../EditComponent/TiptapEditor/TiptapEditor";

import style from "./NavbarPortfolio.module.css";
let countContainer = 3;

export default function NavbarPortfolio({ onCreate, setStyle, navbarStyle }) {
  const navbarRef = useRef(null);
  const [containers, setContainers] = useState([
    {
      id: "home",
      item: "home",
      label: "Home",
      style: {
        fontFamily: "Times New Roman",
        fontSize: "inherit",
        fontStyle: "normal",
        fontWeight: "normal",
        textDecoration: "none",
        backgroundColor: "#000",
      },
    },
    {
      id: "about",
      item: "about",
      label: "About",
      style: {
        fontFamily: "Times New Roman",
        fontSize: "inherit",
        fontStyle: "normal",
        fontWeight: "normal",
        textDecoration: "none",
        backgroundColor: "#000",
      },
    },
    {
      id: "contact",
      item: "contact",
      label: "Contact",
      style: {
        fontFamily: "Times New Roman",
        fontSize: "inherit",
        fontStyle: "normal",
        fontWeight: "normal",
        textDecoration: "none",
        backgroundColor: "#000",
      },
    },
  ]);

  const [activeId, setActiveId] = useState(containers[0]?.id || null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    targetId: null,
  });

  useEffect(() => {
    if (navbarRef.current) {
      const computedStyles = window.getComputedStyle(navbarRef.current);
      // same as your code...

      const filteredStyles = {
        backgroundColor: computedStyles.getPropertyValue("background-color"),
        color: computedStyles.getPropertyValue("color"),
        fontSize: computedStyles.getPropertyValue("font-size"),
        fontFamily: computedStyles.getPropertyValue("font-family"),
        textShadow: computedStyles.getPropertyValue("text-shadow"),
        paddingLeft: computedStyles.getPropertyValue("padding-left"),
        paddingRight: computedStyles.getPropertyValue("padding-right"),
        paddingTop: computedStyles.getPropertyValue("padding-top"),
        paddingBottom: computedStyles.getPropertyValue("padding-bottom"),
        display: computedStyles.getPropertyValue("display"),
        gap: computedStyles.getPropertyValue("gap"),
      };

    }
  }, [setStyle, navbarStyle]);

  // Các hàm xử lý drag, update label... giữ nguyên như cũ
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
      className={style.containerWrapper}
      ref={navbarRef}
      style={{ ...navbarStyle }}
    >
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {containers.map((container) => (
          <Droppable
            key={container.id}
            id={container.id}
            className={style.droppable}
          >
            <DraggAble
              id={container.item}
              label={container.label}
              activeId={activeId}
              onRightClick={handleRightClick}
              editStyle={container.style}
              setActiveId={setActiveId}
              className={style.draggable}
            >
              <TiptapEditor
                content={container.label}
                onChange={(newContent) =>
                  handleUpdateLabel(container.item, newContent)
                }
                editable={true}
                className={style.editorContent}
              />
            </DraggAble>
          </Droppable>
        ))}
      </DndContext>
    </div>
  );
}
