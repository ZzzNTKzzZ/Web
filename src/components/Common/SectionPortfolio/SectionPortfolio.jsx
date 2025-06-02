import { useRef, useState, forwardRef } from "react";
import style from "./SectionPortfolio.module.css";

const SectionPortfolio = forwardRef(function SectionPortfolio(props, ref) {
  const [isActive, setIsActive] = useState(false);
  const nodeRef = useRef(null);

  const handleMouseOver = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);

  
  return (
    <div
      ref={ref || nodeRef}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`${isActive ? "active" : ""} ${style.sectionPortfolio}`}
      style={{
        outline: isActive ? "2px dashed #000" : "",
      }}
    >
      {props.children}

      {isActive && (
        <button
          className={style.new}
          onClick={() => props.onCreate?.(props.sectionKey, Date.now())}
        >
          new
        </button>
      )}
    </div>
  );
});

export default SectionPortfolio;
