import style from "./Topbar.module.css";

import UndoIcon from "../../assets/icon/Undo.svg";
import RedoIcon from "../../assets/icon/Redo.svg";
export default function Topbar() {
  return (
    <div className={style.topbar}>
      <div>
        <label htmlFor="page">Page</label>
        <select name="" id="page">
          <option value="Home">Home</option>
          <option value="About">About</option>
        </select>
      </div>
      <p className={style.domain}>http://www.myweb</p>
      <div className={style.undoRedo}>
        <button>
          <img src={UndoIcon} />
        </button>
        <button>
          <img src={RedoIcon} />
        </button>
      </div>
    </div>
  );
}
