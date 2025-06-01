import { useState } from "react";
import style from "./SideBar.module.css";
import AddIcon from "../../assets/icon/Add.svg";
import PageSectionIcon from "../../assets/icon/PageSection.svg";

import AddElementMenu from "../AddElementMenu/AddElementMenu";
import TextElement from "../AddElementMenu/TextElement/TextElement";

export default function SideBar() {
  const buttons = [
    {
      id: "add",
      icon: AddIcon,
      content: [
        { text: "Text", menu: <TextElement /> },
        { text: "Image", menu: <div>Image settings</div> },
        { text: "Button", menu: <div>Button settings</div> },
      ],
    },
    { id: "pageSection", icon: PageSectionIcon },
  ];

  const [menu, setMenu] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const handleCloseClick = () => {
    setMenu(null);
    setActiveId(null);
  };

  const handleClick = (e) => {
    const type = e.currentTarget.id;
    setActiveId(type);

    const button = buttons.find((btn) => btn.id === type);

    if (button?.content) {
      setMenu(
        <AddElementMenu contents={button.content} onClick={handleCloseClick} />
      );
    } else {
      setMenu(null);
    }
  };

  return (
    <div className={style.side}>
      <div className={style.sideBar}>
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`${style.button} ${
              activeId === button.id ? style.active : ""
            }`}
            id={button.id}
            onClick={handleClick}
          >
            <img src={button.icon} alt={button.id} />
          </button>
        ))}
      </div>
      {menu && <div className={style.sideMenu}>{menu}</div>}
    </div>
  );
}
