// components/FaqItem.jsx

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import SortableItem from "../SortableItem";
import { getPresetStyle } from "../../../Utils/presetStyle"; // đường dẫn tùy bạn

export default function FaqItem({
  content = [],
  styleSection = {},
  sectionId,
  setMenuItem,
  setMenuType,
  setSectionActive,
  menuItem,
}) {
  const [items, setItems] = useState([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const preset = getPresetStyle("faq");

    const mapped = content.map((faq, index) => ({
      id: `faq-${index}-${sectionId}`,
      question: faq.question || "Untitled Question",
      answer: faq.answer || "Untitled Answer",
      style: {
        ...preset,
      },
    }));

    setItems(mapped);
  }, [content, sectionId]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      setItems((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const handleClick = (item, index) => {
    setMenuItem({
      id: item.id,
      index,
      sectionId,
      type: "faq",
      content: {
        question: item.question,
        answer: item.answer,
      },
      styleItem: item.style,
    });
    setMenuType("faq");
    setSectionActive(sectionId);
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

  const handleUpdateContent = (id, newContent) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newContent } : item))
    );
  };

  return (
    <div style={styleSection}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item, index) => (
            <SortableItem
              key={item.id}
              id={item.id}
              content={
                <div
                  style={item.style.container}
                  // onClick={() => handleClick(item, index)}
                >
                  <h4 style={item.style.question}>{item.question}</h4>
                  <p style={item.style.answer}>{item.answer}</p>
                </div>
              }
              onStyleChange={handleUpdateStyle}
              onChange={handleUpdateContent}
              active={menuItem?.id === item.id}
              setMenuItem={setMenuItem}
              setMenuType={setMenuType}
              setSectionActive={setSectionActive}
              sectionId={sectionId}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
