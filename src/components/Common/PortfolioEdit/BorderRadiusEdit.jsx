import style from "./BorderRadiusEdit.module.css";
import { ReactComponent as BorderRadiusRect } from "../../../assets/icon/BorderRadiusRect.svg";
import { ReactComponent as BorderRadiusSetting } from "../../../assets/icon/BorderRadiusSetting.svg";
import { ReactComponent as BorderTopLeft } from "../../../assets/icon/BorderTopLeft.svg";
import { ReactComponent as BorderTopRight } from "../../../assets/icon/BorderTopRight.svg";
import { ReactComponent as BorderBottomRight } from "../../../assets/icon/BorderBottomRight.svg";
import { ReactComponent as BorderBottomLeft } from "../../../assets/icon/BorderBottomLeft.svg";
import { useEffect, useState } from "react";

const CORNER_CONTROLS = [
  { key: "topLeft", icon: <BorderTopLeft />, label: "Top Left" },
  { key: "topRight", icon: <BorderTopRight />, label: "Top Right" },
  { key: "bottomRight", icon: <BorderBottomRight />, label: "Bottom Right" },
  { key: "bottomLeft", icon: <BorderBottomLeft />, label: "Bottom Left" },
];

export default function BorderRadiusEdit({ value = "0px", onChange }) {
  const [editType, setEditType] = useState("auto");

  const [autoRadius, setAutoRadius] = useState(parseInt(value));
  const [handmadeRadius, setHandmadeRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
  });

  useEffect(() => {
    if (editType === "auto") {
      const all = `${autoRadius}px`;
      onChange(`${all} ${all} ${all} ${all}`);
    } else {
      const { topLeft, topRight, bottomRight, bottomLeft } = handmadeRadius;
      onChange(
        `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
      );
    }
  }, [autoRadius, handmadeRadius, editType, onChange]);

  return (
    <div className={style.container}>
      <div className={style.options}>
        <p className={style.label}>Border Radius</p>
        <div className={style.optionBox}>
          <div
            className={`${style.icon} ${editType === "auto" ? style.active : ""}`}
            onClick={() => setEditType("auto")}
          >
            <BorderRadiusRect />
          </div>
          <div
            className={`${style.icon} ${editType === "handmade" ? style.active : ""}`}
            onClick={() => setEditType("handmade")}
          >
            <BorderRadiusSetting />
          </div>
        </div>
      </div>

      {editType === "auto" && (
        <div className={style.options}>
          <div className={style.wrapper}>
            <input
              type="range"
              min={0}
              max={128}
              value={autoRadius}
              step={1}
              onChange={(e) => setAutoRadius(Number(e.target.value))}
              className={style.input}
            />
            <div className={style.box}>{autoRadius}px</div>
          </div>
        </div>
      )}

      {editType === "handmade" && (
        <div className={style.options}>
          {CORNER_CONTROLS.map(({ key, icon, label }) => (
            <div className={style.wrapper} key={key}>
              <div className={style.cornerIcon} title={label}>
                {icon}
              </div>
              <input
                type="range"
                min={0}
                max={128}
                step={1}
                value={handmadeRadius[key]}
                onChange={(e) =>
                  setHandmadeRadius((prev) => ({
                    ...prev,
                    [key]: Number(e.target.value),
                  }))
                }
                className={style.input}
              />
              <div className={style.box}>{handmadeRadius[key]}px</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
