import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useRef, useState, useEffect } from "react";

export default function SortableItem({
  section,
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
  const isContentObject =
    content && typeof content === "object" && "title" in content && "description" in content;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const localRef = useRef(null);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const stringifyContentObject = (obj) =>
    [obj.title, obj.description, obj.image].filter(Boolean).join("\n");

  const parseContentObject = (str) => {
    const [title = "", description = "", image = ""] = str.split("\n");
    return { title, description, image };
  };

  const [inputValue, setInputValue] = useState(
    isContentObject
      ? stringifyContentObject(content)
      : typeof content === "string"
      ? content
      : ""
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [inputValue, isFocused]);

  const mergedStyle = {
    ...baseStyle,
    ...typography,
    fontSize:
      section === "navbar"
        ? "inherit"
        : typography?.fontSize ?? baseStyle.fontSize,
    fontWeight:
      section === "navbar"
        ? "inherit"
        : typography?.fontWeight ?? baseStyle.fontWeight,
    fontStyle:
      section === "navbar"
        ? "inherit"
        : typography?.fontStyle ?? baseStyle.fontStyle,
    textDecoration:
      section === "navbar"
        ? "inherit"
        : typography?.textDecoration ?? baseStyle.textDecoration,
    paddingLeft: section === "navbar" ? "inherit" : baseStyle.paddingLeft,
    paddingRight: section === "navbar" ? "inherit" : baseStyle.paddingRight,
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
    const typeItem = typeId === "button" ? "button" : "item";
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

    if (typeof setMenuType === "function") setMenuType(typeItem);
    if (typeof setSectionActive === "function") setSectionActive(sectionId);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    if (isContentObject) {
      onChange(id, parseContentObject(inputValue));
    } else {
      onChange(id, inputValue);
    }
  };

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
        width: isButton ? "max-content" : undefined,
        ...(baseStyle.width ? { width: baseStyle.width } : {}),
      }}
      onMouseDownCapture={handleMouseDown}
      {...(!isFocused ? { ...attributes, ...listeners } : {})}
    >
      {isButton ? (
        <div
          onDoubleClick={() => setIsFocused(true)}
          style={{
            ...sharedStyle,
            display: "inline-block",
            padding: baseStyle.padding || "8px 16px",
            border: baseStyle.border || "1px solid #ccc",
            borderRadius: baseStyle.borderRadius || "6px",
            backgroundColor:
              baseStyle.backgroundColor && baseStyle.backgroundColor !== "transparent"
                ? baseStyle.backgroundColor
                : "#f5f5f5",
            cursor: isFocused ? "text" : "grab",
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
        </div>
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
          {isContentObject
            ? stringifyContentObject(content)
            : content || "Text"}
        </div>
      )}
    </div>
  );
}
