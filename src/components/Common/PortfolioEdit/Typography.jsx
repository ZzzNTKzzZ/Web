import { ReactComponent as Bold } from "../../../assets/icon/Bold.svg";
import { ReactComponent as Italic } from "../../../assets/icon/Italic.svg";
import { ReactComponent as Underline } from "../../../assets/icon/Underline.svg";

import style from "./Typography.module.css";

export default function Typography({ value, onChange }) {
  const toggleStyle = (property, activeValue, inactiveValue = "normal") => {
    onChange((prev) => ({
      ...prev,
      typography: {
        ...prev.typography,
        [property]:
          prev.typography?.[property] === activeValue
            ? inactiveValue
            : activeValue,
      },
    }));
  };

  return (
    <div className={style.control}>
      <p>Menu</p>
      <div className={style.option}>
        <button
          className={value.fontWeight === "bold" ? style.active : ""}
          onClick={() => toggleStyle("fontWeight", "bold")}
        >
          <Bold />
        </button>
        <button
          className={value.fontStyle === "italic" ? style.active : ""}
          onClick={() => toggleStyle("fontStyle", "italic")}
        >
          <Italic />
        </button>
        <button
          className={value.textDecoration === "underline" ? style.active : ""}
          onClick={() => toggleStyle("textDecoration", "underline", "none")}
        >
          <Underline />
        </button>
      </div>
    </div>
  );
}
