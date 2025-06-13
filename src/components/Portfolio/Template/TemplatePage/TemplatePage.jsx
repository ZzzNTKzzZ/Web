import React, { useState } from "react";
import style from "../../Template/TemplatePage/TemplatePage.module.css";
import Sidebar from "../Sidebar/Sidebar";
import TemplateGrid from "../TemplateGrid/TemplateGrid";
import Pagination from "../../Template/Pagination/Pagination";

function TemplatePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <div className={style.templatePage}>
            {/* <Sidebar /> */}
            <div className={style.mainContent}>
                <h2 className={style.title}>Quickly create websites from professional templates</h2>
                <TemplateGrid page={currentPage} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}

export default TemplatePage;
