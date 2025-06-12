import style from './progressbar.module.css';

export default function ProgressBar({ label, step = 1, min = 0, max, value, unit = "px", onChange, id = "progressInput", keyName }) {
  return (
    <div className={style.container}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <div className={style.wrapper}>
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => onChange((prev) => ({
            ...prev,
            [keyName] : e.target.value
          }))}
          className={style.input}
        />
        <div className={style.box}>
          {value} {unit}
        </div>
      </div>
    </div>
  );
}

