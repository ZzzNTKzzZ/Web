import { ReactComponent as Bold } from "../../../assets/icon/Bold.svg";
import { ReactComponent as Italic } from "../../../assets/icon/Italic.svg";
import { ReactComponent as Underline } from "../../../assets/icon/Underline.svg";

import style from "./Typography.module.css";

export default function Typography({ value, onChange }) {
  const handleChange = (key, val) => {
      onChange(key, val);
  };

  const toggleStyle = (key, onValue, offValue ) => {
    const currentValue = value?.typography?.[key.split(".")[1]];
    const nextValue = currentValue === onValue ? offValue : onValue;
    handleChange(key, nextValue);
  };

  return (
    <div className={style.control}>
      <p className={style.label}>Typography</p>
      <div className={style.option}>
        <button
          className={value.typography.fontWeight === "bold" ? style.active : ""}
          onClick={() => toggleStyle("typography.fontWeight", "bold", "normal")}
        >
          <Bold />
        </button>
        <button
          className={value.typography.fontStyle === "italic" ? style.active : ""}
          onClick={() => toggleStyle("typography.fontStyle", "italic", "normal")}
        >
          <Italic />
        </button>
        <button
          className={value.typography.textDecoration === "underline" ? style.active : ""}
          onClick={() => toggleStyle("typography.textDecoration", "underline", "none")}
        >
          <Underline />
        </button>
      </div>
    </div>
  );
}


