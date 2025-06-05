import style from "./EditMenu.module.css";
import { useState } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";

function ContentEdit() {
  return (
    <div className={style.editMenu}>
      <div className={style.control}>Content Edit Panel</div>
    </div>
  );
}

function NavbarEdit() {
  const [textActive, setTextActive] = useState(false);
  const [designActive, setDesignActive] = useState(false);

  return (
    <div className={style.editMenu}>
      <div className={style.control}>
        <div
          className={`${style.controlDesign} ${designActive ? style.active : ""}`}
          onClick={() => {
            setDesignActive(true);
            setTextActive(false);
          }}
        >
          Design
        </div>
        <div
          className={`${style.controlText} ${textActive ? style.active : ""}`}
          onClick={() => {
            setTextActive(true);
            setDesignActive(false);
          }}
        >
          Text
        </div>

        {textActive && <ContextMenu />}
      </div>
    </div>
  );
}

const EditMenu = {
  NavbarSection: NavbarEdit,
  ContentSection: ContentEdit,
};

export default EditMenu;
