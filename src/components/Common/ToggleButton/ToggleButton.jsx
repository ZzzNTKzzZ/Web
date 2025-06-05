import { useState } from "react";
import style from "./ToggleButton.module.css";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className={`${style.button} ${isOn ? style.on : style.off}`}
      onClick={() => setIsOn((prev) => !prev)}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
