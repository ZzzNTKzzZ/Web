import { useState } from "react";
import style from "./SwitchButton.module.css";

export default function SwitchButton({ value, onToggle }) {
  const [active, setActive] = useState(value);

  const handleToggle = () => {
    const newValue = !active;
    setActive(newValue);
    onToggle && onToggle(newValue);
  };

  return (
    <div className={style.btn1_container} onClick={handleToggle}>
      <span className={`${style.one} ${!active ? style.inactive1 : ""}`} />
    </div>
  );
}
