import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

import style from "./ContextMenu.module.css";
import CloseButton from "../../Common/CloseButton/CloseButton";
import FontColorIcon from "../../../assets/icon/FontColor.svg";
import { ReactComponent as BoldIcon } from "../../../assets/icon/Bold.svg";
import { ReactComponent as ItalicIcon } from "../../../assets/icon/Italic.svg";
import { ReactComponent as UnderlineIcon } from "../../../assets/icon/Underline.svg";

const ContextMenu = React.forwardRef(
  ({ position, setContextMenu, editStyle, setEditStyle }, ref) => {
    const [showPicker, setShowPicker] = useState(false);
    const [fontColor, setFontColor] = useState(editStyle.fontColor || "#000");

    const fonts = [
      "Times New Roman",
      "Arial",
      "Helvetica",
      "Georgia",
      "Calibri",
    ];

    useEffect(() => {
      setFontColor(editStyle.fontColor);
    }, [editStyle.fontColor]);

    const togglePicker = () => {
      setShowPicker(!showPicker);
    };

    const handleFontChange = (e) => {
      const newFont = e.target.value;
      setEditStyle({ fontFamily: newFont });
    };

    const handleColorChange = (newColor) => {
      setFontColor(newColor.hex);
    };

    useEffect(() => {
      const timeout = setTimeout(() => {
        setEditStyle({ color: fontColor });
      }, 300);

      return () => clearTimeout(timeout);
    }, [fontColor]);

    // Close context menu when clicking outside
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
                {fonts.map((font) => (
                  <option value={font} key={font}>
                    {font}
                  </option>
                ))}
              </select>

              <div className={style.fontColor}>
                <img
                  src={FontColorIcon}
                  alt="Font color icon"
                  onClick={togglePicker}
                  style={{ cursor: "pointer" }}
                />
                {showPicker && (
                  <div style={{ position: "absolute", zIndex: 2 }}>
                    <SketchPicker
                      color={fontColor}
                      onChange={handleColorChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </li>

          <li className={style.fontStyle}>
            {/* Bold Button */}
            <div
              className={`${style.styleBtn} ${
                editStyle.style.fontWeight === "bold" ? style.active : ""
              }`}
              onClick={() => {
                setEditStyle({
                  fontWeight:
                    editStyle.style.fontWeight === "bold" ? "normal" : "bold",
                });
              }}
              style={{ fontWeight: "bold" }}
            >
              <BoldIcon />
            </div>

            {/* Italic Button */}
            <div
              className={`${style.styleBtn} ${
                editStyle.style.fontStyle === "italic" ? style.active : ""
              }`}
              onClick={() =>
                setEditStyle({
                  fontStyle:
                    editStyle.style.fontStyle === "italic"
                      ? "normal"
                      : "italic",
                })
              }
              style={{ fontStyle: "italic" }}
            >
              <ItalicIcon />
            </div>

            {/* Underline Button */}
            <div
              className={`${style.styleBtn} ${
                editStyle.style.textDecoration === "underline"
                  ? style.active
                  : ""
              }`}
              onClick={() =>
                setEditStyle({
                  textDecoration:
                    editStyle.style.textDecoration === "underline"
                      ? "none"
                      : "underline",
                })
              }
              style={{ textDecoration: "underline" }}
            >
              <UnderlineIcon />
            </div>
          </li>
        </ul>
      </div>
    );
  }
);

export default ContextMenu;
