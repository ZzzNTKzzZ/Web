import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TemplateCard.module.css";

function TemplateCard({ template }) {
  const navigate = useNavigate();

  const handleUseNow = () => {
      navigate(`/editor/${template.id}`);
  };

  return (
    <div className={styles.card}>
      <img src={template.image} alt={`Template ${template.id}`} className={styles.image} />
      <div className={styles.overlay}>
        <button className={styles.useBtn} onClick={handleUseNow}>
          Sử dụng ngay
        </button>
        <button className={styles.previewBtn}>Xem trước</button>
      </div>
    </div>
  );
}

export default TemplateCard;
