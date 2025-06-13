import style from "./SectionPortfolio.module.css";
import { ReactComponent as SettingIcon } from "../../../assets/icon/Setting.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icon/Trash.svg";
import { ReactComponent as AddIcon } from "../../../assets/icon/Add.svg";
import { useEffect, useState } from "react";

export default function SectionPortfolio({
  id,
  type,
  styleSection,
  setMenuType,
  children,
  setSectionActive,
  handleAddContent,
}) {
  const [activeSection, setActiveSection] = useState(false);

  const handleMouseEnter = () => {
    setActiveSection(true);
  };

  const handleMouseLeave = () => {
    setActiveSection(false);
  };

  const handleClick = () => {
    setMenuType(type);
    setSectionActive(id);
  };
  const handleAddNew = () => {
    setSectionActive(id);
    setMenuType("add")
  };

  return (
    <div
      className={`${style.container} ${activeSection ? style.active : ""}`}
      style={{
        zIndex: `${activeSection ? "999" : ""}`,
        ...styleSection,
        paddingTop: `${styleSection?.paddingTop}px`,
        paddingBottom: `${styleSection?.paddingBottom}px`,
        paddingLeft: `${styleSection?.paddingLeft}px`,
        paddingRight: `${styleSection?.paddingRight}px`,
        gap: `${styleSection?.gap}px`,
        fontSize: `${styleSection?.fontSize}px`,
        ...styleSection?.typography,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {activeSection && (
        <div className={style.control}>
          <button onClick={handleAddNew}>
            <AddIcon />
          </button>
          <button onClick={handleClick}>
            <SettingIcon />
          </button>
          <button className={style.trash}>
            <TrashIcon />
          </button>
        </div>
      )}
    </div>
  );
}
