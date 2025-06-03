import PageCreate from "../PageCreate/PageCreate";
import style from "./EditZone.module.css";

export default function EditZone() {
  return (
    <div
      className={style.editZone}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <PageCreate />
    </div>
  );
}
