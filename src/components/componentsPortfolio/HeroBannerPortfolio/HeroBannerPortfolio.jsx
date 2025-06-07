import { DndContext } from "@dnd-kit/core";
import { useRef, useState } from "react";
import Droppable from "../../EditComponent/Droppable/Droppable";
import DraggAble from "../../EditComponent/DraggAble/DraggAble";
import TiptapEditor from "../../EditComponent/TiptapEditor/TiptapEditor";

import style from "./HeroBannerPortfolio.module.css";
import Image from "../../../assets/Img/DemoUser.jpg";

export default function HeroBannerPortfolio({ setStyle, navbarStyle }) {
  const bannerRef = useRef();

  const [activeId, setActiveId] = useState(null);

  const [containers, setContainers] = useState([
    {
      id: "image",
      item: "image",
      image: Image,
      label: "",
    },
    {
      id: "bannerContent",
      item: "bannerContent",
      content: {
        applyPosition: "WEB DESIGNER",
        introductions: "Admin",
        mainContent:
          "Welcome to the heart of my portfolio, where I present a comprehensive collection of my projects, skills, and professional experience.",
      },
      contentOrder: ["applyPosition", "introductions", "mainContent"], // track order
    },
  ]);

  const handleUpdateContent = (containerItem, key, newContent) => {
    setContainers((prev) =>
      prev.map((c) =>
        c.item === containerItem
          ? {
              ...c,
              content: {
                ...c.content,
                [key]: newContent,
              },
            }
          : c
      )
    );
  };

  const handleUpdateLabel = (itemId, newLabel) => {
    setContainers((prev) =>
      prev.map((c) => (c.item === itemId ? { ...c, label: newLabel } : c))
    );
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const [containerItem, activeKey] = active.id.split("::");
    const [_, overKey] = over.id.split("::");

    setContainers((prev) =>
      prev.map((c) => {
        if (c.item !== containerItem || !c.contentOrder) return c;

        const oldIndex = c.contentOrder.indexOf(activeKey);
        const newIndex = c.contentOrder.indexOf(overKey);
        if (oldIndex === -1 || newIndex === -1) return c;

        const updatedOrder = [...c.contentOrder];
        const [moved] = updatedOrder.splice(oldIndex, 1);
        updatedOrder.splice(newIndex, 0, moved);

        return { ...c, contentOrder: updatedOrder };
      })
    );

    setActiveId(null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className={style.containerWrapper} ref={bannerRef}>
        {/* 👉 Banner Content Group */}
        <div className={style.contentGroup}>
          {containers.map((container) => {
            if (container.item === "bannerContent") {
              return container.contentOrder.map((key) => (
                <Droppable
                  key={`${container.item}::${key}`}
                  id={`${container.item}::${key}`}
                  className={style.droppable}
                >
                  <DraggAble
                    id={`${container.item}::${key}`}
                    label={container.content[key]}
                    activeId={activeId}
                    editStyle={container.style}
                    setActiveId={setActiveId}
                    className={style.draggable}
                    navbarStyle={navbarStyle}
                  >
                    <TiptapEditor
                      content={container.content[key]}
                      onChange={(newContent) =>
                        handleUpdateContent(container.item, key, newContent)
                      }
                      editable={true}
                      className={style.editorContent}
                    />
                  </DraggAble>
                </Droppable>
              ));
            }
            return null;
          })}
        </div>

        {/* 👉 Image Container Group */}
        <div className={style.imageGroup}>
          {containers.map((container) => {
            if (container.item !== "bannerContent") {
              return (
                <Droppable
                  key={container.id}
                  id={container.id}
                  className={style.droppable}
                >
                  <DraggAble
                    id={container.item}
                    label={container.label}
                    activeId={activeId}
                    editStyle={container.style}
                    setActiveId={setActiveId}
                    className={style.draggable}
                    navbarStyle={navbarStyle}
                    image={container?.image}
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
              );
            }
            return null;
          })}
        </div>
      </div>
    </DndContext>
  );
}
