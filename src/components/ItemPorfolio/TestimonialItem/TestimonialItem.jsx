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
import SortableItem from "../SortableItem"; // Import component đã có sẵn

export default function TestimonialItem({
  content = [],
  styleSection = {},
  sectionId,
  setMenuItem,
  setMenuType,
  setSectionActive,
  menuItem,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      content.map((item, index) => ({
        id: `testimonial-${index}-${sectionId}`,
        name: item.name || "",
        feedback: item.feedback || "",
        avatar: item.avatar || "",
        style: {
          container: {
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            cursor: "pointer",
          },
          avatar: {
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "12px",
          },
          feedback: {
            fontStyle: "italic",
            marginBottom: "8px",
          },
          name: {
            fontWeight: "bold",
          },
        },
      }))
    );
  }, [content, sectionId]);

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

  const handleClick = (item) => {
    setMenuItem({
      id: item.id,
      sectionId,
      type: "testimonial",
      content: {
        name: item.name,
        feedback: item.feedback,
        avatar: item.avatar,
      },
      styleItem: item.style,
    });
    setMenuType("testimonial");
    setSectionActive(sectionId);
  };

  const handleUpdateStyle = (id, newStyle) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, style: { ...item.style, ...newStyle } } : item
      )
    );
  };

  const handleUpdateContent = (id, newContent) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...newContent } : item
      )
    );
  };

  return (
    <section style={styleSection}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              content={
                <div style={item.style.container}
                //  onClick={() => handleClick(item)}
                 >
                  <img src={item.avatar} alt={item.name} style={item.style.avatar} />
                  <p style={item.style.feedback}>"{item.feedback}"</p>
                  <p style={item.style.name}>– {item.name}</p>
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
    </section>
  );
}
