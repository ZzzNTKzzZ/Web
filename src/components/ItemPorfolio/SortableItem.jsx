import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useRef, useState, useEffect } from "react";

export default function SortableItem({
  id,
  typeId,
  content,
  style,
  onChange,
  setMenuItem,
  setMenuType,
  setSectionActive,
  sectionId,
  active
}) {
  const { typography = {}, ...baseStyle } = style || {};
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const localRef = useRef(null);
  const mirrorRef = useRef(null);
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(content);

  const itemStyle = {
    ...baseStyle,
    ...typography,
  };

  const handleMouseDown = () => {
    if (typeof setMenuItem === "function") {
      const formatTypeLabel = type => type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

      setMenuItem({
        id,
        styleItem: { ...baseStyle, typography,
          fontType: formatTypeLabel(typeId),

        },
      });
    }
    if (typeof setMenuType === "function") setMenuType("item");
    if (typeof setSectionActive === "function") setSectionActive(sectionId);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    onChange(id, inputValue);
  };

  // Dynamically adjust input width based on mirror span
  useEffect(() => {
    if (mirrorRef.current && inputRef.current) {
      mirrorRef.current.textContent = inputValue || " ";
      inputRef.current.style.width = mirrorRef.current.offsetWidth + "px";
    }
  }, [inputValue, isFocused]);

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        localRef.current = node;
      }}
      style={{
        display: "flex",
        ...itemStyle,
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: isFocused ? "text" : "grab",
        width: "fit-content",
        display: "inline-block",
        border: active?.id === id ? "1px solid red" : "",
      }}
      onMouseDownCapture={handleMouseDown}
      {...(!isFocused ? { ...attributes, ...listeners } : {})}
    >
      {/* Hidden span used to calculate input width */}
      <span
        ref={mirrorRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          height: 0,
          overflow: "hidden",
          whiteSpace: "pre",
          color: "inherit",
          ...itemStyle,
        }}
      />
      {isFocused ? (
        <input
          ref={inputRef}
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputBlur}
          style={{
            ...itemStyle,
            border: "none",
            background: "transparent",
            outline: "none",
            padding: 0,
          }}
        />
      ) : (
        <div
          onDoubleClick={() => setIsFocused(true)}
          style={{
            ...itemStyle,
            userSelect: "none",
            pointerEvents: "auto",
          }}
        >
          {content || "Text"}
        </div>
      )}
    </div>
  );
}
