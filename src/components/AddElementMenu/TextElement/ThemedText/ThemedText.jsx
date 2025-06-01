import React from "react";
import style from "./ThemedText.module.css";
import TitleType from "../../../Common/TitleType";

export default function ThemedText() {
  const headings = [
    { text: "Add Heading 1", tag: "h1", className: style.h1 },
    { text: "Add Heading 2", tag: "h2", className: style.h2 },
    { text: "Add Heading 3", tag: "h3", className: style.h3 },
    { text: "Add Heading 4", tag: "h4", className: style.h4 },
    { text: "Add Heading 5", tag: "h5", className: style.h5 },
    { text: "Add Heading 6", tag: "h6", className: style.h6 },
  ];

  return (
    <div className={style.container}>
      <TitleType content={"Themed Text"}/>
      {headings.map(({ text, tag: Tag, className }, index) => (
        <Tag key={index} className={`${className} ${style.heading}` }>
          {text}
        </Tag>
          
      ))}
    </div>
  );
}
