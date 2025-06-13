export default function FooterItem({
  content = {},
  styleSection = {},
  sectionId,
  setMenuItem,
  setMenuType,
  setSectionActive,
}) {
  const handleClick = () => {
    setMenuItem({
      id: sectionId,
      content,
      styleItem: styleSection,
    });
    setMenuType("footer");
    setSectionActive(sectionId);
  };

  const footerStyle = {
    ...styleSection,
    cursor: "pointer",
    textAlign: "center",
    padding: "20px",
    backgroundColor: styleSection?.backgroundColor || "#111",
    color: styleSection?.color || "#fff",
  };

  const textStyle = {
    marginBottom: "10px",
    fontSize: "14px",
    color: styleSection?.color || "#fff",
  };

  const linkStyle = {
    color: styleSection?.color || "#fff",
    textDecoration: "underline",
    margin: "0 8px",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle} onClick={handleClick}>
      <p style={textStyle}>{content.text || "© 2025 Your Company"}</p>
      <div>
        {content.links?.map((link, index) => (
          <a
            key={index}
            href={link.url || "#"}
            style={linkStyle}
            onClick={(e) => e.preventDefault()}
          >
            {link.label || "Link"}
          </a>
        ))}
      </div>
    </footer>
  );
}
