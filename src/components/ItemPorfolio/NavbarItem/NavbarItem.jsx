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
import { useState } from "react";
import SortableItem from "../SortableItem"; // ✅ Ensure this component uses useSortable and Tiptap

export default function NavbarItem({ labels }) {
  const [items, setItems] = useState(
    labels.map((label, index) => ({
      id: `item-${index}`,
      label,
    }))
  );
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

    setItems((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const handleUpdateLabel = (id, newLabel) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, label: newLabel } : item))
    );
  };

  return (
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
            content={item.label}
            onChange={handleUpdateLabel}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}
