import { useState } from "react";
import style from "./TextConfiguration.module.css";

export default function TextConfiguration({ value, onChange, open, handleToggle }) {
  const fonts = ["Arial", "Georgia", "Helvetica", "Times New Roman", "Courier New", "Verdana"];
  const fontsSize = [12, 14, 16, 18, 24, 32, 48, 64, 72];
  const fontWeights = [
    "100(Thin)",
    "200 (Extra Light)",
    "300 (Light)",
    "400 (Regular)",
    "500 (Medium)",
    "600 (Semi Bold)",
    "700 (Bold)",
    "800 (Extra Bold)",
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleChange = (key, val) => {
    const keys = key.split(".");
    if (keys.length === 2) {
      onChange((prev) => ({
        ...prev,
        [keys[0]]: {
          ...(prev?.[keys[0]] || {}),
          [keys[1]]: val,
        },
      }));
    } else {
      onChange((prev) => ({
        ...prev,
        [key]: val,
      }));
    }
    setOpenDropdown(null);
  };

  const typography = value?.typography || {};

  return (
    <div className={style.container}>
      <div className={style.body}>
        {/* Font Family */}
        <div className={style.section}>
          <p className={style.label}>Font Family</p>
          <div className={style.dropdownWrapper}>
            <div
              className={style.box}
              onClick={() => toggleDropdown("fontFamily")}
              style={{ fontFamily: value?.fontFamily }}
            >
              {value?.fontFamily || "Select"}
            </div>
            <div className={`${style.dropdownList} ${openDropdown === "fontFamily" ? style.show : ""}`}>
              {fonts.map((font) => (
                <div
                  key={font}
                  className={style.valueText}
                  onClick={() => handleChange("fontFamily", font)}
                  style={{ fontFamily: font }}
                >
                  {font}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Font Size */}
        <div className={style.section}>
          <p className={style.label}>Font Size</p>
          <div className={style.dropdownWrapper}>
            <div className={style.box} onClick={() => toggleDropdown("fontSize")}>
              {value?.fontSize || "Select"}
            </div>
            <div className={`${style.dropdownList} ${openDropdown === "fontSize" ? style.show : ""}`}>
              {fontsSize.map((size) => (
                <div
                  key={size}
                  className={style.valueText}
                  onClick={() => handleChange("fontSize", size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Font Weight */}
        <div className={style.section}>
          <p className={style.label}>Font Weight</p>
          <div className={style.dropdownWrapper}>
            <div className={style.box} onClick={() => toggleDropdown("typography.fontWeight")}>
              {typography?.fontWeight || "Select"}
            </div>
            <div className={`${style.dropdownList} ${openDropdown === "typography.fontWeight" ? style.show : ""}`}>
              {fontWeights.map((weight) => (
                <div
                  key={weight}
                  className={style.valueText}
                  onClick={() => handleChange("typography.fontWeight", weight)}
                >
                  {weight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
