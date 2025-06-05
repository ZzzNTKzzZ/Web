import PageCreate from "../PageCreate/PageCreate";
import style from "./EditZone.module.css";

export default function EditZone({editMenu, setEditMenu}) {
  return (
    <div
      className={`${style.editZone} ${editMenu ?  style.menuOpen : ''} `}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <PageCreate setEditMenu={setEditMenu}/>
    </div>
  );
}
