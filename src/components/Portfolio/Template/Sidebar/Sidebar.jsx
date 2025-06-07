import React, { useState } from "react";
import style from "../../Template/Sidebar/Sidebar.module.css";
import { FaChevronRight } from "react-icons/fa";

function Sidebar(){
    const [activeCategory, setActiveCategory] = useState("All categories");
    const [expanded, setExpanded] = useState(null);

    const categories = [
        { name: "All categories" },
        {
            name: "Business",
            children: ["Technology and Electronics", "Real Estate", "Architecture and Construction", "Transportation and Logistics", "Agriculture and Livestock"]
        },
        {
            name: "Sell",
            children: ["Fashion & Accessories", "Cosmetics, Retail", "Cars and Motorcycles", "Flowers and Plants", "Mother and Baby", "Books and Documents"]
        },
        {
            name: "Service",
            children: ["Restaurants", "Travel & Leisure", "Education", "Events", "Marketing Communications", "Finance & Law", "Consulting & Coaching", "Health & Beauty", "Pet Services"]
        },
        {
            name: "Individual",
            children: ["Portfolio" , "Wedding Invitations", "Personal Profile"]
        },
        {
            name: "Other",
            children: ["Carbon Projects", "Non-Profit"]
        }
    ];

    const toggleExpand = (category) => {
        setExpanded(expanded === category ? null : category);
    };

    return (
        <div className={style.sidebar}>
            <input
                type="text"
                placeholder="Search"
                className={style.searchBox}
            />
            <ul className={style.categoryList}>
                {categories.map((cat) => (
                    <li key={cat.name}>
                        <div
                            className={`${style.categoryItem} ${activeCategory === cat.name ? style.active : ""} ${expanded === cat.name ? style.expanded : ""}`}
                            onClick={() => {
                                setActiveCategory(cat.name);
                                if (cat.children) toggleExpand(cat.name);
                            }}
                        >
                            <span>{cat.name}</span>
                            {cat.children && (
                                <FaChevronRight className={style.arrow} />
                            )}
                        </div>
                        {cat.children && expanded === cat.name && (
                            <ul className={style.submenu}>
                                {cat.children.map((child) => (
                                    <li
                                        key={child}
                                        className={
                                            activeCategory === child ? `${style.categoryItem} ${style.active}` : style.categoryItem
                                        }
                                        onClick={() => setActiveCategory(child)}
                                    >
                                        {child}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;