import { DndContext } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import Droppable from "../../EditComponent/Droppable/Droppable";
import DraggAble from "../../EditComponent/DraggAble/DraggAble";
import TiptapEditor from "../../EditComponent/TiptapEditor/TiptapEditor";

import style from "./HeroBannerPortfolio.module.css";
import Image from "../../../assets/Img/DemoUser.jpg";
import ContextMenu from "../../EditComponent/ContextMenu/ContextMenu";

export default function HeroBannerPortfolio({
  herobannerStyle,
  setEditMenu,
  setColumnStyle,
  columnHeroBannerStyle,
  textStyle,
  setTextStyle,
}) {
  const bannerRef = useRef();
  const menuRef = useRef();

  const [activeId, setActiveId] = useState(null);
  const [menuContent, setMenuContent] = useState();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [activeStyle, setActiveStyle] = useState(null);
  const contextStyle = {
    applyPosition: {
      fontFamily: "'Arial', sans-serif",
      fontSize: "16px",
      fontColor: "#000000",
      backgroundColor: "transparent",
      listStyle: "none",
      path: "",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
      lineHeight: "1.5",
      fontType: "h2",
    },
    introductions: {
      fontFamily: "'Arial', sans-serif",
      fontSize: "14px",
      fontColor: "#333333",
      backgroundColor: "transparent",
      listStyle: "none",
      path: "",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
      lineHeight: "1.4",
      fontType: "h3",
    },
    mainContent: {
      fontFamily: "'Arial', sans-serif",
      fontSize: "18px",
      fontColor: "#000000",
      backgroundColor: "transparent",
      listStyle: "none",
      path: "",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
      lineHeight: "1.6",
      fontType: "paragraph",
    },
  };

  // Containers state with array content and individual styles per content item
  const [containers, setContainers] = useState([
    {
      id: "image",
      item: "image",
      label: "",
      // image: Image,
    },
    {
      id: "bannerContent",
      item: "bannerContent",
      content: [
        {
          id: "applyPosition-1",
          type: "applyPosition",
          text: "WEB DESIGNER",
          style: {
            ...contextStyle.applyPosition,
            typography: { ...contextStyle.applyPosition.typography },
          },
        },
        {
          id: "applyPosition-2",
          type: "applyPosition",
          text: "FULL STACK DEVELOPER",
          style: {
            ...contextStyle.applyPosition,
            typography: { ...contextStyle.applyPosition.typography },
          },
        },
        {
          id: "introductions-1",
          type: "introductions",
          text: "Admin",
          style: {
            ...contextStyle.introductions,
            typography: { ...contextStyle.introductions.typography },
          },
        },
        {
          id: "mainContent-1",
          type: "mainContent",
          text:
            "Welcome to the heart of my portfolio, where I present a comprehensive collection of my projects, skills, and professional experience.",
          style: {
            ...contextStyle.mainContent,
            typography: { ...contextStyle.mainContent.typography },
          },
        },
      ],
      // Keep track of content order by id
      contentOrder: [
        "applyPosition-1",
        "applyPosition-2",
        "introductions-1",
        "mainContent-1",
      ],
    },
  ]);

useEffect(() => {
  if (!activeId) return; // Guard clause

  console.log("Active ID:", activeId);

  const [containerItem, contentId] = activeId.split("::");
  const container = containers.find(c => c.item === containerItem);
  const contentItem = container.content.find(c => c.id === contentId);
  
  setActiveStyle(contentItem.style)
}, [activeId, containers]);

  const columnStyle = {
    width: "max-content",
    backgroundColor: "rgba(255, 255, 255, 1)",
    backgroundImage: "",
    border: "0px none #000",
  };

  const colStyle = columnHeroBannerStyle || columnStyle;

  useEffect(() => {
    setColumnStyle(columnStyle);
  }, []);

  const handleRightClickColumn = (e) => {
    e.preventDefault();
    setEditMenu("column-section");
    setMenuPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedInsideBanner =
        bannerRef.current && bannerRef.current.contains(event.target);
      const clickedInsideMenu =
        menuRef.current && menuRef.current.contains(event.target);

      if (!clickedInsideBanner) {
        setActiveId(null);
      }
      if (!clickedInsideMenu) {
        setMenuContent(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update content text by container item and content id
  const handleUpdateContent = (containerItem, contentId, newContent) => {
    setContainers((prev) =>
      prev.map((container) => {
        if (container.item !== containerItem) return container;

        const updatedContent = container.content.map((contentItem) =>
          contentItem.id === contentId
            ? { ...contentItem, text: newContent }
            : contentItem
        );

        return { ...container, content: updatedContent };
      })
    );
  };

  // Update style for a given content item id
  const handleUpdateContentStyle = (containerItem, contentId, newStyle) => {
    setContainers((prev) =>
      prev.map((container) => {
        if (container.item !== containerItem) return container;

        const updatedContent = container.content.map((contentItem) => {
          if (contentItem.id === contentId) {
            return {
              ...contentItem,
              style: {
                ...contentItem.style,
                ...newStyle,
                typography: {
                  ...contentItem.style.typography,
                  ...(newStyle.typography || {}),
                },
              },
            };
          }
          return contentItem;
        });

        return { ...container, content: updatedContent };
      })
    );
  };

  // Drag handlers
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const [containerItem, activeIdPart] = active.id.split("::");
    const [_, overIdPart] = over.id.split("::");

    setContainers((prev) =>
      prev.map((container) => {
        if (container.item !== containerItem || !container.contentOrder) return container;

        const oldIndex = container.contentOrder.indexOf(activeIdPart);
        const newIndex = container.contentOrder.indexOf(overIdPart);
        if (oldIndex === -1 || newIndex === -1) return container;

        const updatedOrder = [...container.contentOrder];
        const [moved] = updatedOrder.splice(oldIndex, 1);
        updatedOrder.splice(newIndex, 0, moved);

        return { ...container, contentOrder: updatedOrder };
      })
    );

    setActiveId(null);
  };

  // Check if background image is a valid image URL string
  const isImage =
    typeof colStyle.backgroundImage === "string" &&
    (colStyle.backgroundImage.startsWith("http") ||
      colStyle.backgroundImage.startsWith("blob:") ||
      colStyle.backgroundImage.startsWith("data:image"));

  const backgroundStyle = isImage
    ? {
        backgroundImage: `url(${colStyle.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: undefined,
      }
    : {
        backgroundImage: "none",
        backgroundColor: colStyle.backgroundColor,
      };

  const handleUpdateLabel = (itemId, newLabel) => {
    setContainers((prev) =>
      prev.map((c) => (c.item === itemId ? { ...c, label: newLabel } : c))
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className={style.containerWrapper} ref={bannerRef}>
        <div
          className={style.contentGroup}
          onContextMenu={handleRightClickColumn}
          style={{
            justifyContent: herobannerStyle?.justify || "flex-start",
            width: `${colStyle.width}%`,
            border: colStyle.border,
            ...backgroundStyle,
          }}
        >
          {containers.map((container) => {
            if (container.item === "bannerContent") {
              // Map contentOrder to actual content object
              return container.contentOrder.map((contentId) => {
                const contentItem = container.content.find(
                  (c) => c.id === contentId
                );
                if (!contentItem) return null;

                return (
                  <Droppable
                    key={`${container.item}::${contentItem.id}`}
                    id={`${container.item}::${contentItem.id}`}
                    className={style.droppable}
                  >
                    <DraggAble
                      id={`${container.item}::${contentItem.id}`}
                      label={contentItem.text}
                      activeId={activeId}
                      editStyle={contentItem.style}
                      setActiveId={setActiveId}
                      setMenuContent={setMenuContent}
                      setMenuPosition={setMenuPosition}
                      className={style.draggable}
                      herobannerStyle={herobannerStyle}
                    >
                      <TiptapEditor
                        content={contentItem.text}
                        onChange={(newContent) =>
                          handleUpdateContent(
                            container.item,
                            contentItem.id,
                            newContent
                          )
                        }
                        editable={true}
                        className={style.editorContent}
                        style={{
                          fontFamily: contentItem.style.fontFamily,
                          fontSize: contentItem.style.fontSize,
                          color: contentItem.style.fontColor,
                          fontWeight: contentItem.style.typography.fontWeight,
                          fontStyle: contentItem.style.typography.fontStyle,
                          textDecoration:
                            contentItem.style.typography.textDecoration,
                          lineHeight: contentItem.style.lineHeight,
                        }}
                      />
                    </DraggAble>
                  </Droppable>
                );
              });
            }
            return null;
          })}
        </div>

        {/* Image Group */}
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
                    herobannerStyle={herobannerStyle}
                    image={container?.image}
                    setMenuPosition={setMenuPosition}
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

        {menuContent && activeId && (
          <div
            className={style.menuContentPopup}
            ref={menuRef}
            style={{
              position: "fixed",
              top: menuPosition.y,
              left: menuPosition.x,
              zIndex: 9999,
            }}
          >
            <ContextMenu
              setEditMenu={setEditMenu}
              setTextStyle={setTextStyle}
              activeId={activeId}
              activeStyle={activeStyle}
            />
          </div>
        )}
      </div>
    </DndContext>
  );
}
