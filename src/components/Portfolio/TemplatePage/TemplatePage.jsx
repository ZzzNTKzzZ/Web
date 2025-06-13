import React from "react";
import styles from "./TemplatePage.module.css";
import TemplateGrid from "../TemplateGrid/TemplateGrid";

function TemplatePage() {
  return (
    <div className={styles.container} id="services">
      <h2 className={styles.title}>
        Quickly create websites from professional templates
      </h2>
      <TemplateGrid />
    </div>
  );
}

export default TemplatePage;
