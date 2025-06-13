import { ReactComponent as Bold } from "../../../assets/icon/Bold.svg";
import { ReactComponent as Italic } from "../../../assets/icon/Italic.svg";
import { ReactComponent as Underline } from "../../../assets/icon/Underline.svg";

import style from "./Typography.module.css";

export default function Typography({ value, onChange}) {
  const current = value?.typography || {};

  const options = [
    {
      key: "fontWeight",
      onValue: "bold",
      offValue: "normal",
      icon: <Bold />,
    },
    {
      key: "fontStyle",
      onValue: "italic",
      offValue: "normal",
      icon: <Italic />,
    },
    {
      key: "textDecoration",
      onValue: "underline",
      offValue: "none",
      icon: <Underline />,
    },
  ];

  const handleClick = ({ key, onValue, offValue }) => {
    const currentValue = current[key];
    const nextValue = currentValue === onValue ? offValue : onValue;
    onChange(`typography.${key}`, nextValue);
  };

  return (
    <div className={style.container}>
      <p className={style.label}>Typography</p>
      <div className={style.options}>
        {options.map((option) => (
          <button
            key={option.key}
            className={`${style.button} ${
              current[option.key] === option.onValue ? style.active : ""
            }`}
            onClick={() => handleClick(option)}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
