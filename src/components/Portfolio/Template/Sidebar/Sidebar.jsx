import React, { useState } from "react";
import style from "../../Template/Sidebar/Sidebar.module.css";

function Sidebar() {
    const [activeCategory, setActiveCategory] = useState("All categories");

    const categories = [
        "All categories",
        "Business",
        "Sell",
        "Service",
        "Individual",
        "Other"
    ];

    return (
        <div className={style.sidebar}>
            <input
                type="text"
                placeholder="Search"
                className={style.searchBox}
            />
            <ul className={style.categoryList}>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={
                            activeCategory === category
                                ? `${style.categoryItem} ${style.active}`
                                : style.categoryItem
                        }
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
