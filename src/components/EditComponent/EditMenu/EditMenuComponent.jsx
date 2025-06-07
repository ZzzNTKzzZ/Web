import { useEffect, useMemo, useRef, useState } from "react";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import menuSet from "./EditMenuComponentStyle/menuSet.module.css";
import editMenuComponent from "./EditMenuComponent.module.css";
import debounceUtils from "../../../Utils/debounceUtils";

import { ReactComponent as Bold } from "../../../assets/icon/Bold.svg";
import { ReactComponent as Italic } from "../../../assets/icon/Italic.svg";
import { ReactComponent as Underline } from "../../../assets/icon/Underline.svg";
import { ReactComponent as AlignLeft } from "../../../assets/icon/AlignLeft.svg";
import { ReactComponent as AlignRight } from "../../../assets/icon/AlignRight.svg";
import { ReactComponent as AlignCenter } from "../../../assets/icon/AlignCenter.svg";
import { SketchPicker } from "react-color";

// --- Common Controls ---
function ToggleSet({ label, onChange, value }) {
  return (
    <div className={editMenuComponent.control}>
      <p>{label}</p>
      <ToggleButton on={value} onChange={onChange} />
    </div>
  );
}

function ProgessSet({ label, min = 0, max = 64, value, onChange, step = 1 }) {
  return (
    <div className={editMenuComponent.control} style={{ display: "block" }}>
      <p style={{ marginBottom: 12 }}>{label}</p>
      <div className={editMenuComponent.controlProgess}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ width: "100%" }}
          step={step}
        />
        <div className={editMenuComponent.controlProgessValue}>
          <input
            type="number"
            className={editMenuComponent.controlProgessInput}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
          <div className={editMenuComponent.controlProgessUntil}>px</div>
        </div>
      </div>
    </div>
  );
}

function ColorPickerSet({ label, value = "#000000", onChange }) {
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
    const match = rgba.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/
    );
    return match
      ? {
          r: parseInt(match[1], 10),
          g: parseInt(match[2], 10),
          b: parseInt(match[3], 10),
          a: match[4] !== undefined ? parseFloat(match[4]) : 1,
        }
      : { r: 0, g: 0, b: 0, a: 1 };
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
    <div className={editMenuComponent.control}>
      <p>{label}</p>
      <div className={editMenuComponent.controlColor} ref={wrapperRef}>
        <div
          className={editMenuComponent.boxColor}
          style={{ backgroundColor: toRgbaString(color) }}
          onClick={() => setShowPicker(!showPicker)}
        />
        <span className={editMenuComponent.colorValue}>
          {toRgbaString(color)}
        </span>
        {showPicker && (
          <div
            className={editMenuComponent.colorPickerPopup}
            style={{ position: "absolute", zIndex: 999 }}
          >
            <SketchPicker color={color} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </div>
  );
}

// --- Typography ---
function TypographySet({ value, onChange }) {
  const toggle = (key, expected) => {
    onChange({
      ...value,
      [key]: value[key] === expected ? "normal" : expected,
    });
  };

  return (
    <div className={editMenuComponent.control}>
      <p>Menu typography</p>
      <div className={editMenuComponent.controlSelect}>
        <div
          className={
            value.fontWeight === "bold" ? editMenuComponent.active : ""
          }
          onClick={() => toggle("fontWeight", "bold")}
          style={{ cursor: "pointer" }}
          title="Bold"
        >
          <Bold />
        </div>
        <div
          className={
            value.fontStyle === "italic" ? editMenuComponent.active : ""
          }
          onClick={() => toggle("fontStyle", "italic")}
          style={{ cursor: "pointer" }}
          title="Italic"
        >
          <Italic />
        </div>
        <div
          className={
            value.textDecoration === "underline" ? editMenuComponent.active : ""
          }
          onClick={() => toggle("textDecoration", "underline")}
          style={{ cursor: "pointer" }}
          title="Underline"
        >
          <Underline />
        </div>
      </div>
    </div>
  );
}

// --- Shadow Settings ---
function ShadowSet({
  label = "Cast shadow",
  value,
  onChange,
  open,
  handleToggle,
}) {
  const match = value.match(
    /(-?\d+px)\s+(-?\d+px)\s+(\d+px)\s+(-?\d+px)\s+(rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\))/i
  );

  const [enabled, setEnabled] = useState(value !== "none");
  const [x, setX] = useState(match?.[1] || "0px");
  const [y, setY] = useState(match?.[2] || "0px");
  const [blur, setBlur] = useState(match?.[3] || "0px");
  const [spread, setSpread] = useState(match?.[4] || "0px");
  const [r, g, b] = [match?.[6] || 0, match?.[7] || 0, match?.[8] || 0];
  const [opacity, setOpacity] = useState(parseFloat(match?.[9]) || 0.2);

  const pxify = (val) =>
    typeof val === "string" && val.endsWith("px") ? val : `${val}px`;

  useEffect(() => {
    if (enabled) {
      const newShadow = `${x} ${y} ${blur} ${spread} rgba(${r}, ${g}, ${b}, ${opacity})`;
      onChange(newShadow);
    } else {
      onChange("none");
    }
  }, [enabled, x, y, blur, spread, r, g, b, opacity, onChange]);

  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        <ToggleSet label={label} value={enabled} onChange={setEnabled} />
      </div>
      {enabled && (
        <div className={`${menuSet.dropdown} ${enabled ? menuSet.open : ""}`}>
          <ProgessSet
            label="X-axis"
            min={-100}
            max={100}
            value={parseInt(x)}
            onChange={(val) => setX(pxify(val))}
          />
          <ProgessSet
            label="Y-axis"
            min={-100}
            max={100}
            value={parseInt(y)}
            onChange={(val) => setY(pxify(val))}
          />
          <ProgessSet
            label="Blur"
            min={0}
            max={100}
            value={parseInt(blur)}
            onChange={(val) => setBlur(pxify(val))}
          />
          <ProgessSet
            label="Spread"
            min={-100}
            max={100}
            value={parseInt(spread)}
            onChange={(val) => setSpread(pxify(val))}
          />
          <ProgessSet
            label="Opacity"
            min={0}
            max={1}
            step={0.05}
            value={opacity}
            onChange={(val) => setOpacity(parseFloat(val))}
          />
        </div>
      )}
    </div>
  );
}

// --- Menu & Logo UI Toggles ---
function MenuSet({ open, handleToggle, aglin }) {
  const [align, setAlign] = useState(aglin);
  const [spacing, setSpacing] = useState(12);
  const [spacingTB, setSpacingTB] = useState(12);

  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Menu
      </div>
      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <div className={editMenuComponent.control}>
          <p>Display</p>
          <div className={editMenuComponent.controlSelect}>
            <div
              className={align === "left" ? editMenuComponent.active : ""}
              onClick={() => setAlign("left")}
            >
              <AlignLeft />
            </div>
            <div
              className={align === "center" ? editMenuComponent.active : ""}
              onClick={() => setAlign("center")}
            >
              <AlignCenter />
            </div>
            <div
              className={align === "right" ? editMenuComponent.active : ""}
              onClick={() => setAlign("right")}
            >
              <AlignRight />
            </div>
          </div>
        </div>
        <ProgessSet
          label="Spacing between menus"
          value={spacing}
          onChange={setSpacing}
        />
        <ProgessSet
          label="Top/bottom menu spacing"
          value={spacingTB}
          onChange={setSpacingTB}
        />
      </div>
    </div>
  );
}

function LogoSet({ open, handleToggle, value, onChange }) {
  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Logo
      </div>
      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <ToggleSet label={"Logo"} value={value} onChange={onChange} />
      </div>
    </div>
  );
}

function MenuDesignNavbar({ value, onChange  }) {
  console.log(value)
  const { position, menuOpen, logoOpen, logo, align } = value;
  const fixed = position === "fixed";

  const toggleFixed = () => {
    onChange({ ...value, position: fixed ? "relative" : "fixed" });
  };

  const toggleMenuOpen = () => {
    onChange({ ...value, menuOpen: !menuOpen, logoOpen: false });
  };

  const toggleLogoOpen = () => {
    onChange({ ...value, logoOpen: !logoOpen, menuOpen: false });
  };

  return (
    <div>
      <ToggleSet label="Fixed" value={fixed} onChange={toggleFixed} />
      <MenuSet open={menuOpen} handleToggle={toggleMenuOpen} align={align} />
      <LogoSet
        open={logoOpen}
        handleToggle={toggleLogoOpen}
        value={logo}
        onChange={(val) => onChange({ ...value, logo: val })}
      />
    </div>
  );
}

function MenuTextNavbar({ value, onChange }) {
  const {
    backgroundColor,
    color,
    fontFamily,
    fontSize,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    boxShadow,
    hoverColor,
    typography,
    shadowOpen,
  } = value;
  const setVal = (key, val) => {
    if (value[key] !== val) {
      onChange({ ...value, [key]: val });
    }
  };

  return (
    <div>
      <ColorPickerSet
        label="Background Color"
        value={backgroundColor}
        onChange={(val) => setVal("backgroundColor", val)}
      />
      <ColorPickerSet
        label="Menu Color"
        value={color}
        onChange={(val) => setVal("color", val)}
      />
      <ColorPickerSet
        label="Hover Color"
        value={hoverColor}
        onChange={(val) => setVal("hoverColor", val)}
      />
      <ProgessSet
        label="Font size menu"
        max={64}
        value={fontSize}
        onChange={(val) => setVal("fontSize", val)}
      />
      <TypographySet
        value={typography}
        onChange={(val) => setVal("typography", val)}
      />
      <ShadowSet
        value={boxShadow}
        open={shadowOpen}
        onChange={(val) => setVal("boxShadow", val)}
        handleToggle={() => setVal("shadowOpen", !shadowOpen)}
      />
      <ProgessSet
        label="Padding Top"
        max={128}
        value={paddingTop}
        onChange={(val) => setVal("paddingTop", val)}
      />
      <ProgessSet
        label="Padding Bottom"
        max={128}
        value={paddingBottom}
        onChange={(val) => setVal("paddingBottom", val)}
      />
      <ProgessSet
        label="Padding Left"
        max={128}
        value={paddingLeft}
        onChange={(val) => setVal("paddingLeft", val)}
      />
      <ProgessSet
        label="Padding Right"
        max={128}
        value={paddingRight}
        onChange={(val) => setVal("paddingRight", val)}
      />
    </div>
  );
}

const EditMenuComponent = {
  MenuDesignNavbar,
  MenuTextNavbar,
};

export default EditMenuComponent;
