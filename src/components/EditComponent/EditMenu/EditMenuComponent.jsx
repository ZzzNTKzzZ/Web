import { useState } from "react";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import fixedSet from "./EditMenuComponentStyle/fixedSet.module.css";
import menuSet from "./EditMenuComponentStyle/menuSet.module.css";
import editMenuComponent from "./editMenuComponent.module.css";

import { ReactComponent as AlignLeft } from "../../../assets/icon/AlignLeft.svg";
import { ReactComponent as AlignRight } from "../../../assets/icon/AlignRight.svg";
import { ReactComponent as AlignCenter } from "../../../assets/icon/AlignCenter.svg";
const EditMenuComponent = {
  MenuDesignNavbar: MenuDesignNavbar,
};
function FixedSet({ onChange }) {
  return (
    <div>
      <div className={editMenuComponent.control}>
        <p>Stick to header</p>
        <div>
          <ToggleButton />
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
        <div className={editMenuComponent.control} style={{ display: "block" }}>
          <p style={{ marginBottom: 12 }}>Spacing between menus</p>
          <div className={editMenuComponent.controlProgess}>
            <input
              type="range"
              min="0"
              max="64"
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
              style={{ width: "100%" }}
            />
            <div className={editMenuComponent.controlProgessValue}>
              {spacing} | px
            </div>
          </div>
        </div>
        <div className={editMenuComponent.control} style={{ display: "block" }}>
          <p style={{ marginBottom: 12 }}>Top/bottom menu spacing</p>
          <div className={editMenuComponent.controlProgess}>
            <input
              type="range"
              min="0"
              max="64"
              value={spacingTB}
              onChange={(e) => setSpacingTB(e.target.value)}
              style={{ width: "100%" }}
            />
            <div className={editMenuComponent.controlProgessValue}>
              {spacingTB} | px
            </div>
          </div>
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
          <p>Logo</p>
          <div>
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuDesignNavbar({ style }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setLogoOpen(false); // close others
  };

  const toggleLogo = () => {
    setLogoOpen((prev) => !prev);
    setMenuOpen(false); // close others
  };
  return (
    <div>
      <FixedSet />
      <MenuSet open={menuOpen} handleToggle={toggleMenu} />
      <LogoSet open={logoOpen} handleToggle={toggleLogo} />
    </div>
  );
}

export default EditMenuComponent;
