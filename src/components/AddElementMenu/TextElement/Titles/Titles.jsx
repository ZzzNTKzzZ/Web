import TitleType from "../../../Common/TitleType";
import style from "./Titles.module.css";

export default function Titles() {
  const titles = [
    { text: "Big Title", style: { fontSize: "36px", fontWeight: "700" } },
    { text: "Caps Title", style: { textTransform: "uppercase", fontWeight: "600" } },
    { text: "Small Title", style: { fontSize: "14px", fontWeight: "500", color: "#555" } },
    { text: "Business Title", style: { fontSize: "24px", fontWeight: "600", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" } },
    { text: "Huge Title", style: { fontSize: "48px", fontWeight: "800" } },
    { text: "Bold Title", style: { fontWeight: "900" } },
    { text: "Elegant Title", style: { fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "28px" } },
    { text: "Classic Title", style: { fontFamily: "'Times New Roman', Times, serif", fontSize: "22px" } },
    { text: "Magazine Title", style: { fontWeight: "600", letterSpacing: "2px", fontSize: "26px" } },
    { text: "Tall Title", style: { fontSize: "32px", lineHeight: "1.2", fontWeight: "700" } },
    { text: "Small Running Title", style: { fontSize: "12px", fontWeight: "400", color: "#888", fontStyle: "italic" } },
    { text: "Fashion Title", style: { fontFamily: "'Courier New', Courier, monospace", fontSize: "30px", fontWeight: "600", letterSpacing: "1.5px" } },
    { text: "Thin Title", style: { fontWeight: "300", fontSize: "24px" } }
  ];

  return (
    <div className={style.container}>
      <TitleType content={"Title"}/>      
      <ul className={style.listTitle}>
        {titles.map((title) => (
          <li key={title.text} style={{ ...title.style }}>
            {title.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
