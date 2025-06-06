import React from "react";

import style from "../../Template/Sidebar/Sidebar.module.css";

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <input type="text" placeholder="Search" className={style.searchBox} />
            <ul className={style.categoryList}>
                <li className={style.active}>Tất cả danh mục</li>
                <li>Doanh nghiệp</li>
                <li>Bán Hàng</li>
                <li>Dịch vụ</li>
                <li>Cá nhân</li>
                <li>Khác</li>
            </ul>
        </div>
    );
}

export default Sidebar;