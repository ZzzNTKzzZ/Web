import React from "react";
import style from "../../Template/TemplateGrid/TemplateGrid.module.css";
import image from "../../Template/TemplateGrid/TemplateGridImg";

function TemplateGrid() {
    return (
        <div className={style.templateGrid}>
            {image.map((imgSrc, idx) => (
                <div key={idx} className={style.templateCard}>
                    <img src={imgSrc} alt={`Template ${idx + 1}`} className={style.image} />
                </div>
            ))}
        </div>
    );
}

export default TemplateGrid;
