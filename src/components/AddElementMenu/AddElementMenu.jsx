import { useState } from "react";
import style from "./AddElementMenu.module.css";
import CloseButton from "../Common/CloseButton/CloseButton";


export default function AddElementMenu({contents ,onClick }) {
 

  const [activeElement, setActiveElement] = useState("Text");

  return (
    <div className={style.menu}>
      {/* Header */}
      <div>
        <p>Add new element</p>
        <CloseButton onClick={onClick}/>
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
