import { useState } from "react";
import style from "./ToggleButton.module.css";

export default function ToggleButton({ on, onChange }) {

  return (
    <button
      className={`${style.button} ${on ? style.on : style.off}`}
      onClick={() => onChange((prev) => !prev)}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
}
