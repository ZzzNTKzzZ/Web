export default function FooterItem({
  content = {},
  styleSection = {},
  sectionId,
  setMenuItem,
  setMenuType,
  setSectionActive,
}) {
  const handleClick = () => {
    setMenuItem({ ...content, id: sectionId });
    setMenuType("footer");
    setSectionActive(sectionId);
  };

  const footerStyle = {
    ...styleSection,
    cursor: "pointer",
    textAlign: "center",
  };

  const linkStyle = {
    color: styleSection?.color || "#fff",
    textDecoration: "underline",
    margin: "0 8px",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle} onClick={handleClick}>
      <p style={{ marginBottom: "10px" }}>{content.text}</p>
      <div>
        {content.links?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            style={linkStyle}
            onClick={(e) => e.preventDefault()} // prevent navigation on editor
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
