import { ReactComponent as AlignTop } from "../../../assets/icon/AlignTop.svg";
import { ReactComponent as AlignCenter } from "../../../assets/icon/AlignCenter.svg";
import { ReactComponent as AlignBottom } from "../../../assets/icon/AlignBottom.svg";
import style from "./AlignEdit.module.css";

export default function AlignEdit({ value, onChange }) {
  return (
    <div className={style.control}>
      <p>Align Items</p>
      <div className={style.option}>
        <button
          className={value === "flex-start" ? style.active : ""}
          onClick={() =>
            onChange((prev) => {
              console.log("prev styleSection:", prev); // See full current state
              return {
                ...prev,
                alignItems: "flex-start",
              };
            })
          }
        >
          <AlignTop />
        </button>
        <button
          className={value === "center" ? style.active : ""}
          onClick={() =>
            onChange((prev) => ({
              ...prev,
              alignItems: "center",
            }))
          }
        >
          <AlignCenter />
        </button>
        <button
          className={value === "flex-end" ? style.active : ""}
          onClick={() =>
            onChange((prev) => ({
              ...prev,
              alignItems: "flex-end",
            }))
          }
        >
          <AlignBottom />
        </button>
      </div>
    </div>
  );
}
