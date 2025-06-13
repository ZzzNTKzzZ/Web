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
  const isButton = typeId === "button";
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const localRef = useRef(null);
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(content);

  const mergedStyle = {
    ...baseStyle,
    ...typography,
  };

  const sharedStyle = {
    ...mergedStyle,
    width: "100%",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    lineHeight: mergedStyle.lineHeight || "normal",
    fontSize: mergedStyle.fontSize || "16px",
    fontFamily: mergedStyle.fontFamily || "Arial",
    fontWeight: mergedStyle.fontWeight || "400",
    fontStyle: mergedStyle.fontStyle || "normal",
    textDecoration: mergedStyle.textDecoration || "none",
    textAlign: mergedStyle.textAlign || "left",
    backgroundColor: mergedStyle.backgroundColor,
  };

  const handleMouseDown = () => {
    if (typeof setMenuItem === "function") {
      const formatTypeLabel = (type) =>
        type?.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";

      setMenuItem({
        id,
        styleItem: {
          ...baseStyle,
          typography: {
            ...typography,
            fontStyle: "normal",
            textDecoration: "none",
          },
          fontType: formatTypeLabel(typeId),
        },
      });
    }

    if (typeof setMenuType === "function") setMenuType(typeId);
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
        backgroundColor: baseStyle.backgroundColor,
        width: typeId === "button" ? "max-content" : undefined,
        ...(baseStyle.width ? { width: baseStyle.width } : {}),
      }}
      onMouseDownCapture={handleMouseDown}
      {...(!isFocused ? { ...attributes, ...listeners } : {})}
    >
      {isButton ? (
        <button
          onDoubleClick={() => setIsFocused(true)}
          style={{
            ...sharedStyle,
            padding: baseStyle.padding || "14px 16px",
            border: baseStyle.border || "1px solid #ccc",
            borderRadius: baseStyle.borderRadius || "6px",
            backgroundColor: baseStyle.backgroundColor || "#f5f5f5",
            userSelect: "none",
            pointerEvents: "auto",
            width: "max-content",
          }}
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
                ...sharedStyle,
                border: "none",
                borderRadius: "none",
                outline: "none",
                resize: "none",
                overflow: "hidden",
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
                textAlign: sharedStyle.textAlign,
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
          ) : (
            content || "Button"
          )}
        </button>
      ) : isFocused ? (
        <textarea
          ref={inputRef}
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputBlur}
          rows={1}
          style={{
            ...sharedStyle,
            border: "none",
            outline: "none",
            resize: "none",
            overflow: "hidden",
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
            ...sharedStyle,
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
