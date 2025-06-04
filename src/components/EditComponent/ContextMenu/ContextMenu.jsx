import style from "./ContextMenu.module.css";

export default function ContextMenu({ position, setContextMenu, editor}) {
  const style = {};

  return (
    <div
      className={style.contextMenu}
      style={{ position: "fixed", top: position.y, left: position.x }}
    >
      <p>Text Setting</p>
      <div
        onClick={() => {
          setContextMenu({ ...position, visible: false });
        }}
      >
        X
      </div>
      <ul className={style.menu}>
        <li
          style={{ padding: "8px 12px", cursor: "pointer" }}
          onClick={() => {
            setContextMenu({ ...position, visible: false });
          }}
        >
          <select name="font" id="font">
            <option value="Times New Romand">Times New Romand</option>
            <option value="Arial">Arial</option>
            <option value="Sans Srief">Sans Srief</option>
          </select>
        </li>
        <li
          style={{ padding: "8px 12px", cursor: "pointer" }}
          onClick={() => {
            setContextMenu({ ...position, visible: false });
          }}
        >
          Delete
        </li>
      </ul>
    </div>
  );
}
