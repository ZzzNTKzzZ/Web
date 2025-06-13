import React, { useState } from "react";
import styles from "./TemplateGrid.module.css";
import TemplateCard from "../TemplateCard/TemplateCard";
import templates from "../../Portfolio/TemplateGrid/TemplateData";

const ITEMS_PER_PAGE = 9;

function TemplateGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(templates.length / ITEMS_PER_PAGE);

  const currentTemplates = templates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {currentTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? styles.activePage : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateGrid;
