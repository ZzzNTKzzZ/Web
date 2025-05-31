import { useState } from "react";
import style from "./AddElementMenu.module.css";

import CloseIcon from "../../assets/icon/Close.svg";
import TextElement from "./TextElement/TextElement";

export default function AddElementMenu({ onClick }) {
  const elements = [
    { text: "Text", menu: <TextElement /> },
    { text: "Image", menu: <div>Image settings</div> },
    { text: "Button", menu: <div>Button settings</div> },
  ];

  const [activeElement, setActiveElement] = useState("Text");

  return (
    <div className={style.menu}>
      {/* Header */}
      <div>
        <p>Add new element</p>
        <div className={style.close} onClick={onClick}>
          <img src={CloseIcon} alt="Close" />
        </div>
      </div>

      <div className={style.content}>
        <ul className={style.listElement}>
          {elements.map((e, index) => (
            <li
              key={index}
              className={`${style.element} ${
                activeElement === e.text ? style.active : ""
              }`}
              onClick={() => setActiveElement(e.text)}
            >
              {e.text}
            </li>
          ))}
        </ul>

        <div className={style.popupMenu}>
          {elements.find((el) => el.text === activeElement)?.menu}
        </div>
      </div>
    </div>
  );
}
