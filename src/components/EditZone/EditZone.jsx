import PageCreate from "../PageCreate/PageCreate";
import style from "./EditZone.module.css";

export default function EditZone({editMenu, setEditMenu, navbarStyle ,setNavbarStyle, setHerobannerStyle, herobannerStyle}) {
  return (
    <div
      className={`${style.editZone} ${editMenu ?  style.menuOpen : ''} `}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <PageCreate setEditMenu={setEditMenu} setNavbarStyle={setNavbarStyle} navbarStyle={navbarStyle} setHerobannerStyle={setHerobannerStyle} herobannerStyle={herobannerStyle}/>
    </div>
  );
}
