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

  // Check if background is an image (URL or blob)
  const isImage =
    typeof props.background === "string" &&
    (props.background.startsWith("http") ||
      props.background.startsWith("blob:") ||
      props.background.startsWith("data:image"));

  const backgroundStyle = isImage
    ? {
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background: props.background,
      };

  return (
    <div
      ref={ref || nodeRef}
      className={`${props.active ? style.active : ""} ${
        style.sectionPortfolio
      }`}
      style={{
        ...backgroundStyle,
        border: props.border,
      }}
      onClick={props.setIsActive}
    >
      {props.children}
      <div className={style.settingMenu}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSettingsClick();
          }}
        >
          <SettingIcon />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            props.handleDelete();
          }}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
});

export default SectionPortfolio;
