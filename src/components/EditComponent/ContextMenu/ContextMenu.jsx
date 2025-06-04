import React, { useEffect } from "react";
import style from "./ContextMenu.module.css";

import CloseButton from "../../Common/CloseButton/CloseButton";
import FontColorIcon from "../../../assets/icon/FontColor.svg";

const ContextMenu = React.forwardRef(
  ({ position, setContextMenu, editStyle, setEditStyle }, ref) => {

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setContextMenu((prev) => ({ ...prev, visible: false }));
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setContextMenu]);

    const handleFontChange = (e) => {
      const newFont = e.target.value;
      setEditStyle((prev) => ({ ...prev, fontFamily: newFont }));
    };

    return (
      <div
        ref={ref}
        className={style.contextMenu}
        style={{ position: "fixed", top: position.y, left: position.x }}
      >
        <div className={style.header}>
          <p>Text Setting</p>
          <CloseButton
            onClick={() =>
              setContextMenu((prev) => ({ ...prev, visible: false }))
            }
          />
        </div>

        <ul className={style.menu}>
          <li>
            <div className={style.fontType}>
              <select
                name="font"
                id="font"
                value={editStyle.fontFamily}
                onChange={handleFontChange}
              >
                <option value="Times New Roman">Times New Roman</option>
                <option value="monospace">monospace</option>
              </select>

              <div className={style.fontColor}>
                <img src={FontColorIcon} alt="Font color icon" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
);

export default ContextMenu;
