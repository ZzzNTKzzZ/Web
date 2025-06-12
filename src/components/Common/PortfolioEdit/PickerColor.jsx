import { useState, useRef, useEffect, useMemo } from "react";
import { SketchPicker } from "react-color";
import CloseButton from "../CloseButton/CloseButton";
import debounceUtils from "../../../Utils/debounceUtils"; // adjust this path as needed
import style from "./PickerColor.module.css";

export default function PickerColor({ label, value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(parseColor(value));
  const wrapperRef = useRef(null);

  const debouncedOnChange = useMemo(
    () =>
      debounceUtils((rgba) => {
        onChange?.(rgba);
      }, 300),
    [onChange]
  );

  function parseColor(colorString) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillStyle = colorString;
    const rgba = ctx.fillStyle;

    const rgbaMatch = rgba.match(
      /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/
    );
    if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[1], 10),
        g: parseInt(rgbaMatch[2], 10),
        b: parseInt(rgbaMatch[3], 10),
        a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1,
      };
    }

    const hexMatch = rgba.match(/^#([a-fA-F0-9]{6})$/);
    if (hexMatch) {
      const hex = hexMatch[1];
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
        a: 1,
      };
    }

    return { r: 0, g: 0, b: 0, a: 1 };
  }

  function toRgbaString({ r, g, b, a }) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  const handleColorChange = (newColor) => {
    setColor(newColor.rgb);
    debouncedOnChange(toRgbaString(newColor.rgb));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.control}>
      <p>{label}</p>
      <div className={style.controlColor} ref={wrapperRef}>
        <div
          className={style.boxColor}
          style={{ backgroundColor: toRgbaString(color) }}
          onClick={() => setShowPicker(!showPicker)}
        />
        
        <span className={style.colorValue}>{toRgbaString(color)}</span>
        {showPicker && (
          <div className={style.colorPickerPopup}>
            <SketchPicker color={color} onChange={handleColorChange} />
          </div>
        )}
        <CloseButton
          onClick={() => {
            const transparent = { r: 255, g: 255, b: 255, a: 1 };
            setColor(transparent);
            onChange?.(toRgbaString(transparent));
            setShowPicker(false);
          }}
        />
      </div>
    </div>
  );
}
