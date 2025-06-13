export default function matchingTypeHeading(type) {
  switch (type) {
    case "heading_1":
    case "Heading 1":
      return {
        fontSize: "32px",
        lineHeight: "40px",
        fontWeight: "700",
      };
    case "heading_2":
    case "Heading 2":
      return {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "600",
      };
    case "heading_3":
    case "Heading 3":
      return {
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: "500",
      };
    case "paragraph":
    case "Paragraph":
      return {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "400",
      };
    case "button":
    case "Button":
      return {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "600",
      };
    default:
      return {};
  }
}
