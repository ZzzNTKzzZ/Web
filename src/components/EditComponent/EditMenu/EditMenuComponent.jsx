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
import { ReactComponent as Upload } from "../../../assets/icon/Upload.svg";
import { ReactComponent as Line } from "../../../assets/icon/Line.svg";
import { ReactComponent as Dashed } from "../../../assets/icon/Dashed.svg";
import { ReactComponent as Dot } from "../../../assets/icon/Dot.svg";
import { ReactComponent as Trash } from "../../../assets/icon/Trash.svg";
import { ReactComponent as JustifyTop } from "../../../assets/icon/JustifyTop.svg";
import { ReactComponent as JustifyBottom } from "../../../assets/icon/JustifyBottom.svg";
import { ReactComponent as JustifyCenter } from "../../../assets/icon/JustifyCenter.svg";
import { SketchPicker } from "react-color";
import CloseButton from "../../Common/CloseButton/CloseButton";

// --- Common Controls ---
function ToggleSet({ label, onChange, value }) {
  return (
    <div className={editMenuComponent.control}>
      <p>{label}</p>
      <ToggleButton on={value} onChange={onChange} />
    </div>
  );
}

function ProgressSet({
  label,
  min = 0,
  max = 64,
  value,
  onChange,
  step = 1,
  unit = "px",
}) {
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
          <div className={editMenuComponent.controlProgessUntil}>{unit}</div>
        </div>
      </div>
    </div>
  );
}

function ColorPickerSet({ label, value, onChange }) {
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

    // Handle rgba(), rgb() with optional spaces
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

    // Handle hex colors like #ffffff
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

    // fallback to black
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
        <CloseButton
          onClick={() => {
            const transparent = { r: 0, g: 0, b: 0, a: 0 };
            setColor(transparent);
            onChange?.(toRgbaString(transparent));
            setShowPicker(false);
          }}
        />
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

function TextSet({ value, onChange, open, handleToggle }) {
  const fonts = [
    "Arial",
    "Georgia",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
  ];
  const fontsSize = [12, 14, 16, 18, 24, 32, 48, 64, 72];
  const [fontFamilyOpen, setFontFamilyOpen] = useState(false);
  const [fontSizeOpen, setFontSizeOpen] = useState(false);
  const [fontTypeOpen, setFontTypeOpen] = useState(false);
  const [fontWeightOpen, setFontWeightOpen] = useState(false);

  const toggleFontFamilyOpen = () => {
    setFontFamilyOpen((prev) => {
      if (!prev) {
        setFontSizeOpen(false);
        setFontTypeOpen(false);
        setFontWeightOpen(false);
      }
      return !prev;
    });
  };

  const toggleFontSizeOpen = () => {
    setFontSizeOpen((prev) => {
      if (!prev) {
        setFontFamilyOpen(false);
        setFontTypeOpen(false);
        setFontWeightOpen(false);
      }
      return !prev;
    });
  };

  const toggleFontTypeOpen = () => {
    setFontTypeOpen((prev) => {
      if (!prev) {
        setFontFamilyOpen(false);
        setFontSizeOpen(false);
        setFontWeightOpen(false);
      }
      return !prev;
    });
  };

  const toggleFontWeightOpen = () => {
    setFontWeightOpen((prev) => {
      if (!prev) {
        setFontFamilyOpen(false);
        setFontSizeOpen(false);
        setFontTypeOpen(false);
      }
      return !prev;
    });
  };

  const handleFontFamily = (val) => {
    onChange({ ...value, fontFamily: val });
    setFontFamilyOpen(false);
  };

  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Text configuration
      </div>

      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <div className={editMenuComponent.control}>
          <div className={editMenuComponent.textGroup}>
            <div className={editMenuComponent.dropdownWrapper}>
              <div
                className={editMenuComponent.boxFontFamily}
                onClick={toggleFontFamilyOpen}
                style={{ fontFamily: value.fontFamily }}
              >
                {value.fontFamily}
              </div>

              <div
                className={`${editMenuComponent.dropdownList} ${
                  fontFamilyOpen ? editMenuComponent.show : ""
                }`}
              >
                {fonts.map((font) => (
                  <div
                    key={font}
                    className={editMenuComponent.fontFamily}
                    onClick={() => handleFontFamily(font)}
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </div>
                ))}
              </div>
            </div>
            <div className={editMenuComponent.dropdownWrapper}>
              <div
                className={editMenuComponent.boxFontFamily}
                onClick={toggleFontSizeOpen}
              >
                {value.fontSize}
              </div>

              <div
                className={`${editMenuComponent.dropdownList} ${
                  fontSizeOpen ? editMenuComponent.show : ""
                }`}
              >
                {fontsSize.map((size) => (
                  <div
                    key={size}
                    className={editMenuComponent.fontFamily}
                    onClick={() => handleFontFamily(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>
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

  const [enabled, setEnabled] = useState(open);
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
          <ProgressSet
            label="X-axis"
            min={-100}
            max={100}
            value={parseInt(x)}
            onChange={(val) => setX(pxify(val))}
          />
          <ProgressSet
            label="Y-axis"
            min={-100}
            max={100}
            value={parseInt(y)}
            onChange={(val) => setY(pxify(val))}
          />
          <ProgressSet
            label="Blur"
            min={0}
            max={100}
            value={parseInt(blur)}
            onChange={(val) => setBlur(pxify(val))}
          />
          <ProgressSet
            label="Spread"
            min={-100}
            max={100}
            value={parseInt(spread)}
            onChange={(val) => setSpread(pxify(val))}
          />
          <ProgressSet
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
function MenuSet({
  open,
  handleToggle,
  paddingX,
  setPaddingX,
  gap,
  setGap,
  justifyContent,
  setJustify,
}) {
  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Menu
      </div>
      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <div className={editMenuComponent.control}>
          <p>Location menu</p>
          <div className={editMenuComponent.controlSelect}>
            <div
              className={
                justifyContent === "left" ? editMenuComponent.active : ""
              }
              onClick={() => setJustify("left")}
            >
              <AlignLeft />
            </div>
            <div
              className={
                justifyContent === "center" ? editMenuComponent.active : ""
              }
              onClick={() => setJustify("center")}
            >
              <AlignCenter />
            </div>
            <div
              className={
                justifyContent === "right" ? editMenuComponent.active : ""
              }
              onClick={() => setJustify("right")}
            >
              <AlignRight />
            </div>
          </div>
        </div>

        <ProgressSet
          label="Spacing between menus"
          value={gap}
          onChange={setGap}
        />

        <ProgressSet
          label="Left & Right padding"
          value={paddingX}
          onChange={setPaddingX}
        />
      </div>
    </div>
  );
}

function AlignSet({ value, onChange }) {
  return (
    <div className={editMenuComponent.control}>
      <p>Align content vertically</p>
      <div className={editMenuComponent.controlSelect}>
        <div
          className={`${editMenuComponent.align}
                ${value === "start" ? editMenuComponent.active : ""}`}
          onClick={() => onChange("start")}
        >
          <JustifyTop />
        </div>
        <div
          className={`${editMenuComponent.align}
                ${value === "center" ? editMenuComponent.active : ""}`}
          onClick={() => onChange("center")}
        >
          <JustifyCenter />
        </div>
        <div
          className={`${editMenuComponent.align}
                ${value === "end" ? editMenuComponent.active : ""}`}
          onClick={() => onChange("end")}
        >
          <JustifyBottom />
        </div>
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

function ImageSet({ open, handleToggle, value, onChange }) {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      onChange?.(imageURL);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = (e) => {
    e.stopPropagation();
    onChange(""); // Clear the image
  };

  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Background Image
      </div>
      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <div className={menuSet.downLoadImage} onClick={triggerFileInput}>
          {value ? (
            <div className={menuSet.imagePreviewWrapper}>
              <img
                src={value}
                alt="Uploaded preview"
                className={menuSet.imagePreview}
              />
              <button
                className={menuSet.deleteButton}
                onClick={handleDeleteImage}
              >
                <Trash />
              </button>
            </div>
          ) : (
            <>
              <Upload />
              Upload photo
            </>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

function BorderSet({ open, handleToggle, value = "", onChange }) {
  // Parse border value into width, style, color
  const match = value.match(
    /^(\d+)px\s+(solid|dashed|dotted)\s+(rgba?\(.+\))$/
  );
  const [width, setWidth] = useState(match?.[1] ? parseInt(match[1]) : 1);
  const [style, setStyle] = useState(match?.[2] || "solid");
  const [color, setColor] = useState(match?.[3] || "rgba(0,0,0,1)");

  const updateBorder = (
    newWidth = width,
    newStyle = style,
    newColor = color
  ) => {
    const border = `${newWidth}px ${newStyle} ${newColor}`;
    onChange?.(border);
  };

  const handleWidthChange = (val) => {
    setWidth(val);
    updateBorder(val, style, color);
  };

  const handleStyleChange = (val) => {
    setStyle(val);
    updateBorder(width, val, color);
  };

  const handleColorChange = (val) => {
    setColor(val);
    updateBorder(width, style, val);
  };

  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Border
      </div>
      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <ProgressSet
          label="Border Width"
          min={0}
          max={20}
          value={width}
          onChange={handleWidthChange}
        />

        <div className={editMenuComponent.control}>
          <p>Border Style</p>
          <div className={editMenuComponent.controlSelect}>
            <div
              className={style === "solid" ? editMenuComponent.active : ""}
              onClick={() => handleStyleChange("solid")}
            >
              <Line />
            </div>
            <div
              className={style === "dashed" ? editMenuComponent.active : ""}
              onClick={() => handleStyleChange("dashed")}
            >
              <Dashed />
            </div>
            <div
              className={style === "dotted" ? editMenuComponent.active : ""}
              onClick={() => handleStyleChange("dotted")}
            >
              <Dot />
            </div>
          </div>
        </div>

        <ColorPickerSet
          label="Border Color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

function MenuDesignNavbar({ value, onChange }) {
  const {
    position,
    paddingLeft,
    paddingRight,
    gap,
    justifyContent,
    menuOpen,
    logoOpen,
    logo,
  } = value;

  const fixed = position === "fixed";

  const toggleFixed = () => {
    onChange({ ...value, position: fixed ? "relative" : "fixed" });
  };

  const setVal = (key, val) => {
    if (value[key] !== val) {
      onChange({ ...value, [key]: val });
    }
  };

  const toggleMenuOpen = () => {
    onChange({ ...value, menuOpen: !menuOpen, logoOpen: false });
  };

  const toggleLogoOpen = () => {
    onChange({ ...value, logoOpen: !logoOpen, menuOpen: false });
  };

  const handlePaddingX = (val) => {
    if (paddingLeft !== val || paddingRight !== val) {
      onChange({ ...value, paddingLeft: val, paddingRight: val });
    }
  };

  return (
    <div>
      <ToggleSet label="Fixed" value={fixed} onChange={toggleFixed} />

      <MenuSet
        open={menuOpen}
        handleToggle={toggleMenuOpen}
        paddingX={paddingLeft} // assuming both sides are same
        gap={gap}
        justifyContent={justifyContent}
        setPaddingX={handlePaddingX}
        setGap={(val) => setVal("gap", val)}
        setJustify={(val) => setVal("justifyContent", val)}
      />
    </div>
  );
}

function MenuTextNavbar({ value, onChange }) {
  const {
    backgroundColor,
    color,
    fontSize,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    boxShadow,
    hoverColor,
    typography,
    shadowOpen,
  } = value;
  // Helper to update value
  const setVal = (key, val) => {
    if (value[key] !== val) {
      onChange({ ...value, [key]: val });
    }
  };

  // Combined setters for padding Y (top + bottom) and padding X (left + right)
  const setPaddingY = (val) => {
    if (paddingTop !== val || paddingBottom !== val) {
      onChange({ ...value, paddingTop: val, paddingBottom: val });
    }
  };

  const setPaddingX = (val) => {
    if (paddingLeft !== val || paddingRight !== val) {
      onChange({ ...value, paddingLeft: val, paddingRight: val });
    }
  };

  // Calculate current combined padding values for sliders
  // If they are different, fallback to 0 or paddingTop/paddingLeft
  const paddingY = paddingTop === paddingBottom ? paddingTop : 0;
  const paddingX = paddingLeft === paddingRight ? paddingLeft : 0;

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
      <ProgressSet
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

      {/* Combined vertical padding */}
      <ProgressSet
        label="Padding Top & Bottom"
        max={128}
        value={paddingY}
        onChange={setPaddingY}
      />
    </div>
  );
}

function MenuBanner({ value, onChange }) {
  const { backgroundColor, backgroundImage, justify, border } = value;
  const [imageOpen, setImageOpen] = useState(false);
  const [borderOpen, setBorderOpen] = useState(false);
  console.log(value);
  const setVal = (key, val) => {
    if (value[key] !== val) {
      onChange({ ...value, [key]: val });
    }
  };

  const toggleImageOpen = () => {
    setImageOpen((prev) => {
      if (!prev) setBorderOpen(false); // Close border when opening image
      return !prev;
    });
  };

  const toggleBorderOpen = () => {
    setBorderOpen((prev) => {
      if (!prev) setImageOpen(false); // Close image when opening border
      return !prev;
    });
  };

  return (
    <div>
      <ColorPickerSet
        label="Background Color"
        value={backgroundColor}
        onChange={(val) => setVal("backgroundColor", val)}
      />
      <ImageSet
        open={imageOpen}
        handleToggle={toggleImageOpen}
        value={backgroundImage}
        onChange={(val) => setVal("backgroundImage", val)}
      />
      <BorderSet
        open={borderOpen}
        handleToggle={toggleBorderOpen}
        value={border}
        onChange={(val) => setVal("border", val)}
      />
      <AlignSet value={justify} onChange={(val) => setVal("justify", val)} />
    </div>
  );
}

function MenuColumn({ value, onChange }) {
  const { width, backgroundColor, backgroundImage, border } = value;
  const [imageOpen, setImageOpen] = useState(false);
  const [borderOpen, setBorderOpen] = useState(false);

  const setVal = (key, val) => {
    if (value[key] !== val) {
      onChange({ ...value, [key]: val });
    }
  };

  const toggleImageOpen = () => {
    setImageOpen((prev) => {
      if (!prev) setBorderOpen(false); // Close border when image opens
      return !prev;
    });
  };

  const toggleBorderOpen = () => {
    setBorderOpen((prev) => {
      if (!prev) setImageOpen(false); // Close image when border opens
      return !prev;
    });
  };

  return (
    <div>
      <ProgressSet
        label="Width"
        value={width || 0}
        onChange={(val) => setVal("width", val)}
        max={100}
      />

      <ColorPickerSet
        label="Background Color"
        value={backgroundColor}
        onChange={(val) => setVal("backgroundColor", val)}
      />

      <ImageSet
        open={imageOpen}
        handleToggle={toggleImageOpen}
        value={backgroundImage}
        onChange={(val) => setVal("backgroundImage", val)}
      />

      <BorderSet
        open={borderOpen}
        handleToggle={toggleBorderOpen}
        value={border}
        onChange={(val) => setVal("border", val)}
      />
    </div>
  );
}

function MenuContext({ value, onChange }) {
  const [textOpen, setTextOpen] = useState(true);

  const toggleTextOpen = () => {
    setTextOpen((prev) => !prev);
  };

  const setVal = (key, val) => {
    if (value[key] !== val) {
      onChange({ ...value, [key]: val });
    }
  };

  return (
    <div>
      <TextSet
        value={value}
        handleToggle={toggleTextOpen}
        open={textOpen}
        onChange={setVal}
      />
    </div>
  );
}

const EditMenuComponent = {
  MenuDesignNavbar,
  MenuTextNavbar,
  MenuBanner,
  MenuColumn,
  MenuContext,
};

export default EditMenuComponent;
