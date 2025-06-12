import style from "./DisplayEdit.module.css";

import { ReactComponent as JustifyLeft } from "../../../assets/icon/JustifyLeft.svg";
import { ReactComponent as JustifyRight } from "../../../assets/icon/JustifyRight.svg";
import { ReactComponent as JustifyCenter } from "../../../assets/icon/JustifyCenter.svg";

export default function DisplayEdit({ value, onChange }) {
  return (
    <div className={style.container}>
      <div className={style.control}>
        <p>Location Menu</p>
        <div className={style.option}>
          <button
            className={value === "flex-start" ? style.active : ""}
            onClick={() =>
              onChange((prev) => ({
                ...prev,
                justifyContent: "flex-start",
              }))
            }
          >
            <JustifyLeft />
          </button>
          <button
            className={value === "center" ? style.active : ""}
            onClick={() =>
              onChange((prev) => ({
                ...prev,
                justifyContent: "center",
              }))
            }
          >
            <JustifyCenter />
          </button>
          <button
            className={value === "flex-end" ? style.active : ""}
            onClick={() =>
              onChange((prev) => ({
                ...prev,
                justifyContent: "flex-end",
              }))
            }
          >
            <JustifyRight />
          </button>
        </div>
      </div>
    </div>
  );
}
