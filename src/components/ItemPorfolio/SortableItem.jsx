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
  active,
}) {
  const { typography = {}, ...baseStyle } = style || {};
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const localRef = useRef(null);
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(content);

  const itemStyle = {
    ...baseStyle,
    lineHeight: `${baseStyle.lineHeight}px`,
    ...typography,
  };

  const handleMouseDown = () => {
    if (typeof setMenuItem === "function") {
      const formatTypeLabel = (type) =>
        type?.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";

      setMenuItem({
        id,
        styleItem: {
          ...baseStyle,
          typography,
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [inputValue, isFocused]);

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        localRef.current = node;
      }}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: isFocused ? "text" : "grab",
        border: active?.id === id ? "1px solid red" : "",
        display: "inline-block",
        ...(baseStyle.width ? { width: baseStyle.width } : {}), // ← use width only if it exists
      }}
      onMouseDownCapture={handleMouseDown}
      {...(!isFocused ? { ...attributes, ...listeners } : {})}
    >
      {isFocused ? (
        <textarea
          ref={inputRef}
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputBlur}
          rows={1}
          style={{
            ...itemStyle,
            width: "100%",
            border: "none",
            background: "transparent",
            outline: "none",
            padding: 0,
            margin: 0,
            resize: "none",
            overflow: "hidden",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
      ) : (
        <div
          onDoubleClick={() => setIsFocused(true)}
          style={{
            ...itemStyle,
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            width: "100%", // matches textarea
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
