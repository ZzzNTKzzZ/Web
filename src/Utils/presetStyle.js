// Utils/presetStyle.js
export function getPresetStyle(type) {
  switch (type) {
    case "faq":
      return {
        backgroundColor: "#ffffff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        fontFamily: "Inter, sans-serif",
        typography: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.6",
          textAlign: "left",
        },
      };
    case "testimonial":
      return {
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Georgia, serif",
        typography: {
          fontSize: "15px",
          fontStyle: "italic",
          textAlign: "center",
          lineHeight: "1.5",
        },
      };
    case "button":
      return {
        padding: "10px 24px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "6px",
        border: "none",
        fontFamily: "Arial, sans-serif",
        typography: {
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
        },
      };
    case "navbar":
      return {
        paddingLeft: "16px",
        paddingRight: "16px",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        typography: {
          fontWeight: "500",
          textAlign: "center",
        },
      };
    case "content":
    default:
      return {
        fontFamily: "Helvetica, sans-serif",
        fontSize: "16px",
        lineHeight: "1.5",
        typography: {
          textAlign: "left",
          fontWeight: "400",
        },
      };
  }
}
