import React from "react";
import style from "../../Template/TemplatePage/TemplatePage.module.css";
import Sidebar from "../Sidebar/Sidebar";
import TemplateGrid from "../TemplateGrid/TemplateGrid";
import Pagination from "../../Template/Pagination/Pagination";
function TemplatePage(){
    return (
        <div className={style.templatePage}>
            <Sidebar/>
            <div className={style.mainContent}>
                <h2 className={style.title}>Tạo nhanh các website từ các template chuyên nghiệp</h2>                
                <TemplateGrid/>
                <Pagination/>
            </div>
        </div>
    );
}
export default TemplatePage;