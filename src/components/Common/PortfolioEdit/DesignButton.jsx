import styles from "./DesignButton.module.css";

function TypeButton({ label, styleType, onClick }) {
  return (
    <button className={styles.button} style={{...styleType}} onClick={onClick}>
      {label}
    </button>
  );
}

export default function DesignButton({ onChange }) {
  const types = [
    {
      label: "Primary",
      style: {
        backgroundColor: "#f14504",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "8px 16px",
      },
    },
    {
      label: "Primary Round",
      style: {
        backgroundColor: "#f14504",
        color: "#fff",
        border: "1px solid #f14504",
        borderRadius: "20px",
        padding: "8px 16px",
      },
    },
    {
      label: "Outline",
      style: {
        backgroundColor: "transparent",
        color: "#f14504",
        border: "1px solid #f14504",
        borderRadius: "4px",
        padding: "8px 16px",
      },
    },
    {
      label: "Outline Round",
      style: {
        backgroundColor: "transparent",
        color: "#f14504",
        border: "1px solid #f14504",
        borderRadius: "20px",
        padding: "8px 16px",
      },
    },
    {
      label: "Link",
      style: {
        backgroundColor: "transparent",
        color: "#f14504",
        border: "none",
        textDecoration: "underline",
        padding: "8px 16px",
      },
    },
    {
      label: "Link",
      style: {
        backgroundColor: "transparent",
        color: "#f14504",
        border: "none",
        textDecoration: "none",
        padding: "8px 16px",
      },
    },
  ];

  const handleClick = (style) => {
    onChange(style);
  };

  return (
    <div className={styles.container}>
      <p>Design button</p>
      <div className={styles.types}>
        {types.map(({ label, style }, index) => (
          <TypeButton
            key={index}
            label={label}
            styleType={style}
            onClick={() => handleClick(style)}
          />
        ))}
      </div>
    </div>
  );
}
