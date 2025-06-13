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
import { use, useEffect, useState } from "react";
import SortableItem from "../SortableItem";
import matchingTypeHeading from "../../../Utils/matchingTypeHeading";

export default function HerobannerItem({
  Image,
  contents,
  menuItem,
  setMenuItem,
  setMenuType,
  setSectionActive,
  sectionId,
}) {
  const [items, setItems] = useState(
    contents.map((item, index) => {
      return {
        id: `item-${index}`,
        content: item.content || "",
        type: item.type || "paragraph",
        style: {
          fontSize: matchingTypeHeading(item.type)?.fontSize,
          fontFamily: "Arial",
          typography: {
            textAlign: "left",
            fontWeight: matchingTypeHeading(item.type)?.fontWeight,
            lineHeight: matchingTypeHeading(item.type)?.lineHeight,
          },
        },
      };
    })
  );

  useEffect(() => {
  setItems(
    contents.map((item, index) => ({
      id: `item-${index}-${sectionId}`,
      content: item.content || "",
      type: item.type || "paragraph",
      style: {
        fontSize: matchingTypeHeading(item.type)?.fontSize,
        fontFamily: "Arial",
        typography: {
          textAlign: "left",
          fontWeight: matchingTypeHeading(item.type)?.fontWeight,
          lineHeight: matchingTypeHeading(item.type)?.lineHeight,
        },
      },
    }))
  );
}, [contents]);

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
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
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

  const handleUpdateContent = (id, newContent) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, content: newContent } : item
      )
    );
  };

  useEffect(() => {
    if (menuItem === undefined) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === menuItem.id
          ? { ...item, style: { ...menuItem.styleItem } }
          : item
      )
    );
  }, [menuItem]);
  return (
    <>
      {Image && (
        <div>
          <img src={Image} alt="Hero banner" style={{ height: "400px" }} />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", width: "100%",gap : 4}}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={items.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {items.map((item) => {
              {
                return (
                  <SortableItem
                    key={item.id}
                    id={item.id}
                    typeId={item.type}
                    content={item.content}
                    style={item.style}
                    onChange={handleUpdateContent}
                    onStyleChange={handleUpdateStyle}
                    menuItem={menuItem}
                    setMenuItem={setMenuItem}
                    setMenuType={setMenuType}
                    setSectionActive={setSectionActive}
                    sectionId={sectionId}
                    active={
                      menuItem ? items.find((i) => i.id === menuItem.id) : null
                    }
                  />
                );
              }
            })}
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
}
