import style from "./TextAlign.module.css";

import { ReactComponent as TextAlignLeft } from "../../../assets/icon/TextAlignLeft.svg";
import { ReactComponent as TextAlignCenter } from "../../../assets/icon/TextAlignCenter.svg";
import { ReactComponent as TextAlignRight } from "../../../assets/icon/TextAlignRight.svg";
import { ReactComponent as TextAlignArround } from "../../../assets/icon/TextAlignArround.svg"; // justify

export default function TextAlign({ value, onChange }) {
  const options = [
    { icon: <TextAlignLeft />, key: "left" },
    { icon: <TextAlignCenter />, key: "center" },
    { icon: <TextAlignRight />, key: "right" },
    { icon: <TextAlignArround />, key: "justify" },
  ];

  const handleClick = (alignment) => {
    const current = value.typography?.textAlign;
    const next = current === alignment ? "left" : alignment;
    onChange("typography.textAlign", next);
  };

  return (
    <div className={style.container}>
      <p className={style.label}>Text Align</p>
      <div className={style.options}>
        {options.map(({ icon, key }) => (
          <button
            key={key}
            className={`${style.button} ${
              value?.typography?.textAlign === key ? style.active : ""
            }`}
            onClick={() => handleClick(key)}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
