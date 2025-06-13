

export default function FaqItem({
  content,
  styleSection,
  sectionId,
  setMenuItem,
  setMenuType,
  setSectionActive,
}) {
  return (
    <div style={styleSection}>
      {content.map((faq, index) => (
        <div key={index} onClick={() => {
          setMenuItem({ ...faq, id: sectionId, index });
          setMenuType("faq");
          setSectionActive(sectionId);
        }}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
