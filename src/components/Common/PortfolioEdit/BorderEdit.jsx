import { ReactComponent as Line } from "../../../assets/icon/Line.svg";
import { ReactComponent as Dashed } from "../../../assets/icon/Dashed.svg";
import { ReactComponent as Dot } from "../../../assets/icon/Dot.svg";

import style from "./Boder.module.css";
import PickerColor from "./PickerColor";
import { useState, useEffect } from "react";

export default function BorderEdit({ value = "", onChange }) {
  const typeBorder = [
    { icon: <Line />, onValue: "solid", offValue: "none" },
    { icon: <Dashed />, onValue: "dashed", offValue: "none" },
    { icon: <Dot />, onValue: "dotted", offValue: "none" }
  ];

  const sizeBorder = ["1px", "2px", "3px"];

  // Parse initial value
  const parseBorder = (borderStr) => {
    const parts = borderStr.split(" ");
    return {
      borderWidth: parts[0] || "1px",
      borderStyle: parts[1] || "solid",
      borderColor: parts.slice(2).join(" ") || "rgba(0, 0, 0, 1)",
    };
  };

  const [borderProps, setBorderProps] = useState(parseBorder(value));

  // Sync external value changes
  useEffect(() => {
    setBorderProps(parseBorder(value));
  }, [value]);

  // Merge and send to parent
  const updateBorder = (changes) => {
    const newProps = { ...borderProps, ...changes };
    setBorderProps(newProps);
    const borderString = `${newProps.borderWidth} ${newProps.borderStyle} ${newProps.borderColor}`;
    onChange(borderString);
  };

  return (
    <div className={style.container}>
      <p className={style.label} style={{ fontSize: 18 }}>Border</p>

      {/* Type Border */}
      <div className={style.optionGroup}>
        <p className={style.label}>Type border</p>
        <div className={style.optionBox}>
          {typeBorder.map((type, index) => (
            <button
              key={index}
              className={`${style.button} ${style.option} ${borderProps.borderStyle === type.onValue ? style.active : ""}`}
              onClick={() =>
                updateBorder({
                  borderStyle: borderProps.borderStyle === type.onValue ? "none" : type.onValue
                })
              }
            >
              {type.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Size Border */}
      <div className={style.optionGroup}>
        <p className={style.label}>Size border</p>
        <div className={style.optionBox}>
          {sizeBorder.map((size, index) => (
            <button
              key={index}
              className={`${style.button} ${borderProps.borderWidth === size ? style.active : ""}`}
              onClick={() =>
                updateBorder({
                  borderWidth: borderProps.borderWidth === size ? "0px" : size
                })
              }
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Picker */}
      <div className={style.optionGroup}>
        <PickerColor
          value={borderProps.borderColor}
          label={"Border Color"}
          onChange={(color) => updateBorder({ borderColor: color })}
        />
      </div>
    </div>
  );
}
