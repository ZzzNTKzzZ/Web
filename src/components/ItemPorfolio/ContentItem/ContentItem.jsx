import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import SortableItem from "../SortableItem";

export default function ContentItem({
  contents,
  menuItem,
  setMenuItem,
  setMenuType,
  setSectionActive,
  sectionId,
}) {
  const [items, setItems] = useState(
    contents.map((item, index) => ({
      id: `item-${index}`,
      content: {
        title: item.title,
        description: item.description,
        image: item.image,
      },
      style: {
        fontSize: "16px",
        fontFamily: "Arial",
        typography: {
          textAlign: "left",
          fontWeight: "normal",
          lineHeight: "1.5",
        },
      },
    }))
  );

  useEffect(() => {
    setItems(
      contents.map((item, index) => ({
        id: `item-${index}-${sectionId}`,
        content: {
          title: item.title,
          description: item.description,
          image: item.image,
        },
        style: {
          fontSize: "16px",
          fontFamily: "Arial",
          typography: {
            textAlign: "left",
            fontWeight: "normal",
            lineHeight: "1.5",
          },
        },
      }))
    );
  }, [contents]);

  const handleUpdateContent = (id, newContent) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, content: { ...item.content, ...newContent } }
          : item
      )
    );
  };

  const handleUpdateStyle = (id, newStyle) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, style: { ...item.style, ...newStyle } }
          : item
      )
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      setItems((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    if (!menuItem) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === menuItem.id
          ? { ...item, style: { ...menuItem.styleItem } }
          : item
      )
    );
  }, [menuItem]);

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              content={item.content}
              style={item.style}
              onChange={handleUpdateContent}
              onStyleChange={handleUpdateStyle}
              menuItem={menuItem}
              setMenuItem={setMenuItem}
              setMenuType={setMenuType}
              setSectionActive={setSectionActive}
              sectionId={sectionId}
              active={menuItem?.id === item.id}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
