import React from "react";
import style from "../../Contact/Bar/Bar.module.css";

const stats = [
    { number: "3+", Label: "Team Members" },
    { number: "1000+", Label: "Users" },
    { number: "100+", Label: "Projects" },
    { number: "12+", Label: "Awards" },
]
function Bar() {
    return (
        <div className={style.bar}>
            <div className={style.statsContainer}>
                {stats.map((item, index) => (
                    <div key={index} className={style.statsItem}>
                        <h2>{item.number}</h2>
                        <p>{item.Label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Bar;