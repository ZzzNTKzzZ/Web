export default function matchingTypeHeading(type) {
  switch (type) {
    case "heading_1" || "Heading 1":
      return {
        fontSize: "32px",
        lineHeight: "40px",
        fontWeight: "700",
      };
    case "heading_2" || "Heading 2":
      return {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "600",
      };
    case "heading_3" || "Heading 3":
      return {
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: "500",
      };
    case "paragraph" :
      return {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "400",
      };
    default:
      return
  }
}
