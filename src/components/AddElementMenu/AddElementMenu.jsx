import { useState } from "react";
import style from "./AddElementMenu.module.css";

import CloseIcon from "../../assets/icon/Close.svg";

export default function AddElementMenu({contents ,onClick }) {
 

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
          {contents.map((content, index) => (
            <li
              key={index}
              className={`${style.element} ${
                activeElement === content.text ? style.active : ""
              }`}
              onClick={() => setActiveElement(content.text)}
            >
              {content.text}
            </li>
          ))}
        </ul>

        <div className={style.popupMenu}>
          {contents.find((el) => el.text === activeElement)?.menu}
        </div>
      </div>
    </div>
  );
}
