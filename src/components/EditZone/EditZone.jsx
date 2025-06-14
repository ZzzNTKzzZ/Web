import PageCreate from "../PageCreate/PageCreate";
import style from "./EditZone.module.css";

export default function EditZone({
  editMenu,
  
  idPortfolio,
}) {
  return (
    <div
      className={`${style.editZone} ${editMenu ? style.menuOpen : ""} `}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <PageCreate
        idPortfolio={idPortfolio}
      />
    </div>
  );
}
