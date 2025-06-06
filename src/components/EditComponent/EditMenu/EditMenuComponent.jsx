import { useEffect, useRef, useState } from "react";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import menuSet from "./EditMenuComponentStyle/menuSet.module.css";
import editMenuComponent from "./editMenuComponent.module.css";
import debounceUtils from "../../../Utils/debounceUtils";

import { ReactComponent as Bold} from "../../../assets/icon/Bold.svg"
import { ReactComponent as Italic} from "../../../assets/icon/Italic.svg"
import { ReactComponent as Underline} from "../../../assets/icon/Underline.svg"
import { ReactComponent as AlignLeft } from "../../../assets/icon/AlignLeft.svg";
import { ReactComponent as AlignRight } from "../../../assets/icon/AlignRight.svg";
import { ReactComponent as AlignCenter } from "../../../assets/icon/AlignCenter.svg";
import { SketchPicker } from "react-color";

function ToggleSet({label , onChange, value }) {
  return (
    <div>
      <div className={editMenuComponent.control}>
        <p>{label}</p>
        <div>
          <ToggleButton on={value} onChange={onChange}/>
        </div>
      </div>
    </div>
  );
}

function MenuSet({ open, setOpen, handleToggle }) {
  const [align, setAlign] = useState("left");
  const [spacing, setSpacing] = useState(12);
  const [spacingTB, setSpacingTB] = useState(12); // spacing Top Bottom

  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Menu
      </div>

      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        {/* Display Alignment Section */}
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

        {/* Spacing Between Menus */}
        <ProgessSet
          label="Spacing between menus"
          value={spacing}
          onChange={setSpacing}
        />

        {/* Top/Bottom Menu Spacing */}
        <ProgessSet
          label="Top/bottom menu spacing"
          value={spacingTB}
          onChange={setSpacingTB}
        />
      </div>
    </div>
  );
}

function ProgessSet({ label, min = 0, max = 64, value, onChange }) {
  return (
    <div className={editMenuComponent.control} style={{ display: "block" }}>
      <p style={{ marginBottom: 12 }}>{label}</p>
      <div className={editMenuComponent.controlProgess}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%" }}
        />
        <div className={editMenuComponent.controlProgessValue}>
          <input
            type="number"
            className={editMenuComponent.controlProgessInput}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className={editMenuComponent.controlProgessUntil}>px</div>
        </div>
      </div>
    </div>
  );
}

function LogoSet({ open, setOpen, handleToggle }) {
  return (
    <div className={menuSet.menuWrapper}>
      <div className={menuSet.menuButton} onClick={handleToggle}>
        Logo
      </div>
      <div className={`${menuSet.dropdown} ${open ? menuSet.open : ""}`}>
        <div className={editMenuComponent.control}>
          <p>Show Logo</p>
          <div>
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function TypographySet({value, onChange}) {
  return (
    <div className={editMenuComponent.control}>
      <p>Menu typography</p>
      <div>
        <div className={editMenuComponent.controlSelect}>
            <div
              className={value.fontWeight === "bold" ? editMenuComponent.active : ""}
              onClick={() => onChange("left")}
            >
              <Bold />
            </div>
            <div
              className={value.fontStyle === "center" ? editMenuComponent.active : ""}
              onClick={() => onChange("center")}
            >
              <Italic />
            </div>
            <div
              className={value.textDecoration === "right" ? editMenuComponent.active : ""}
              onClick={() => onChange("right")}
            >
              <Underline />
            </div>
          </div>
      </div>
    </div>
  )
}

function ColorPickerSet({ label, value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleColorChange = (color) => {
    debounceUtils(onChange(color.hex), 300);
  };

  return (
    <div className={editMenuComponent.control}>
      <p>{label}</p>
      <div
        className={editMenuComponent.controlColor}
        onClick={() => setShowPicker(true)}
      >
        <div
          className={editMenuComponent.boxColor}
          style={{ backgroundColor: value }}
          ref={pickerRef}
        >
          {showPicker && (
            <div className={editMenuComponent.colorPickerPopup}>
              <SketchPicker color={value} onChange={handleColorChange} />
            </div>
          )}
        </div>
        <span className={editMenuComponent.colorValue}>{value}</span>
      </div>
    </div>
  );
}

function MenuDesignNavbar({ style }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [logo, setLogo] = useState()
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setLogoOpen(false); 
  };

  const toggleLogo = () => {
    setLogoOpen((prev) => !prev);
    setMenuOpen(false); 
  };
  return (
    <div>
      <ToggleSet label={"Fixed"} value={fixed} onChange={setFixed}/>
      <MenuSet open={menuOpen} handleToggle={toggleMenu} />
      <LogoSet open={logoOpen} handleToggle={toggleLogo} />
    </div>
  );
}
function MenuTextNavbar({ style }) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [menuColor, setMenuColor] = useState("#000000");
  const [hoverColor, setHoverColor] = useState("#ff0000");
  const [fontSize, setFontSize] = useState("12");
  const [typography, setTypography] = useState("")
  return (
    <div>
      <ColorPickerSet
        label="Background Color"
        value={backgroundColor}
        onChange={setBackgroundColor}
      />
      <ColorPickerSet
        label="Menu Color"
        value={menuColor}
        onChange={setMenuColor}
      />
      <ColorPickerSet
        label="Hover Color"
        value={hoverColor}
        onChange={setHoverColor}
      />
      <ProgessSet
        label={"Font size menu"}
        max={64}
        value={fontSize}
        onChange={setFontSize}
      />
      <TypographySet value={typography} onChange={setTypography}/>
    </div>
  );
}

const EditMenuComponent = {
  MenuDesignNavbar: MenuDesignNavbar,
  MenuTextNavbar: MenuTextNavbar,
};

export default EditMenuComponent;
