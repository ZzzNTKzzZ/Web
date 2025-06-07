import { useRef, useState, forwardRef } from "react";
import style from "./SectionPortfolio.module.css";

import { ReactComponent as SettingIcon } from "../../../assets/icon/Setting.svg";

const SectionPortfolio = forwardRef(function SectionPortfolio(props, ref) {
  const nodeRef = useRef(null);

  const handleSettingsClick = () => {
    props.setEditMenu(props.sectionKey);
    props.setIsActive();  // Notify parent this section is active
  };

  return (
    <div
      ref={ref || nodeRef}
      className={`${props.active ? style.active : ""} ${style.sectionPortfolio}`}
      style={{backgroundColor: props.backgroundColor}}
    >
      {props.children}
      <div className={style.settingMenu}>
        <button onClick={handleSettingsClick}>
          <SettingIcon />
        </button>
      </div>
    </div>
  );
});


export default SectionPortfolio;
