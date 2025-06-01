import style from "./TextElement.module.css";
import ThemedText from "./ThemedText/ThemedText";
import Titles from "./Titles/Titles";
import { useState } from "react";

export default function TextElement() {
  const types = [
    { text: "Themed Text", tag: ThemedText },
    { text: "Title", tag: Titles },
    { text: "Paragraphs", tag: () => <div>Paragraph Settings</div> },
    { text: "Collapsible Text", tag: () => <div>Collapsible Text Settings</div> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.container}>
      <ul className={style.listType}>
        {types.map((type, index) => (
          <li
            className={`${style.type} ${index === activeIndex ? style.active : ""}`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {type.text}
          </li>
        ))}
      </ul>

      <div className={style.typeMenu}>
        {types.map(({ tag: Tag }, index) => (
          <Tag key={index} />
        ))}
      </div>
    </div>
  );
}