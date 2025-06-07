import { useRef, forwardRef } from "react";
import style from "./SectionPortfolio.module.css";

import { ReactComponent as SettingIcon } from "../../../assets/icon/Setting.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icon/Trash.svg";

const SectionPortfolio = forwardRef(function SectionPortfolio(props, ref) {
  const nodeRef = useRef(null);

  const handleSettingsClick = () => {
    props.setEditMenu(props.sectionKey);
    props.setIsActive(); // Notify parent this section is active
  };

  return (
    <div
      ref={ref || nodeRef}
      className={`${props.active ? style.active : ""} ${style.sectionPortfolio}`}
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.setIsActive}
    >
      {props.children}
      <div className={style.settingMenu}>
        <button onClick={(e) => {
          e.stopPropagation();
          handleSettingsClick();
        }}>
          <SettingIcon />
        </button>

        <button onClick={(e) => {
          e.stopPropagation();
          props.handleDelete();
        }}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
});

export default SectionPortfolio;
