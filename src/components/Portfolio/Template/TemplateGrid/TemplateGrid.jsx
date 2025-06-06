import react from "react";

import style from "../../Template/TemplateGrid/TemplateGrid.module.css";

function TemplateGrid() {
    const placeholder = Array.from({ length: 18 });

    return (
        <div className={style.templateGrid}>
            {placeholder.map((_, idx) => (
            <div key={idx} className={style.templateCard}/>
            ))}
        </div>
    );
}

export default TemplateGrid;