import { useState } from "react";
import style from "./TextConfiguration.module.css";

export default function TextConfiguration({ value, onChange, open, handleToggle }) {
  const fonts = ["Arial", "Georgia", "Helvetica", "Times New Roman", "Courier New", "Verdana"];
  const fontsSize = [12, 14, 16, 18, 24, 32, 48, 64, 72];
  const fontType = ["Heading 1", "Heading 2", "Heading 3", "Heading 4"];
  const fontWeights = [
    "100 (Thin)",
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
      onChange(key, val);
    setOpenDropdown(null);
  };

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
              style={{ fontFamily: value.fontFamily }}
            >
              {value.fontFamily}
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
              {value.fontSize}
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

        {/* Font Type
        <div className={style.section}>
          <p className={style.label}>Font Type</p>
          <div className={style.dropdownWrapper}>
            <div className={style.box} onClick={() => toggleDropdown("fontType")}>
              {value.fontType}
            </div>
            <div className={`${style.dropdownList} ${openDropdown === "fontType" ? style.show : ""}`}>
              {fontType.map((type) => (
                <div
                  key={type}
                  className={style.valueText}
                  onClick={() => handleChange("fontType", type)}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Font Weight */}
        <div className={style.section}>
          <p className={style.label}>Font Weight</p>
          <div className={style.dropdownWrapper}>
            <div className={style.box} onClick={() => toggleDropdown("fontWeight")}>
              {value.typography.fontWeight}
            </div>
            <div className={`${style.dropdownList} ${openDropdown === "fontWeight" ? style.show : ""}`}>
              {fontWeights.map((weight) => (
                <div
                  key={weight}
                  className={style.valueText}
                  onClick={() => handleChange("typography.fontWeight", weight.split(" ")[0])}
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
