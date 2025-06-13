export default function TestimonialItem({
  content = [],
  styleSection = {},
  sectionId,
  setMenuItem,
  setMenuType,
  setSectionActive,
}) {
  const handleClick = (item, index) => {
    setMenuItem({ ...item, index, id: sectionId });
    setMenuType("testimonial");
    setSectionActive(sectionId);
  };

  return (
    <section style={styleSection}>
      {content.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => handleClick(item, index)}
        >
          <img
            src={item.avatar}
            alt={item.name}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "12px",
            }}
          />
          <p style={{ fontStyle: "italic", marginBottom: "8px" }}>
            "{item.feedback}"
          </p>
          <p style={{ fontWeight: "bold" }}>– {item.name}</p>
        </div>
      ))}
    </section>
  );
}
