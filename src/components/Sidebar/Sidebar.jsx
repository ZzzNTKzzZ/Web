import { useState } from "react";

import style from "./SideBar.module.css";

import AddIcon from "../../assets/icon/Add.svg";
import PageSectionIcon from "../../assets/icon/PageSection.svg";

import AddElementMenu from "../AddElementMenu/AddElementMenu";

export default function SideBar() {
  const buttons = [
    { id: "add", icon: AddIcon },
    { id: "pageSection", icon: PageSectionIcon },
  ];

  const [menu, setMenu] = useState();
  const [activeId, setActiveId] = useState(null);

  const handleCloseClick = () => {
    setMenu(null);
    setActiveId(null);
  };

  const handleClick = (e) => {
    const type = e.currentTarget.id;
    setActiveId(type);

    switch (type) {
      case "add":
        setMenu(<AddElementMenu onClick={handleCloseClick} />);
        break;
      default:
        setMenu(null);
        break;
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
      {menu ? 
      <div className={style.sideMenu}>{menu}</div>
        : ""
    }
    </div>
  );
}
