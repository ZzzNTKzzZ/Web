import style from "./CloseButton.module.css"
import CloseIcon from "../../../assets/icon/Close.svg"

export default function CloseButton({ onClick }) {
  return (
    <div className={style.close} onClick={onClick}>
      <img src={CloseIcon} alt="Close" />
    </div>
  );
}
