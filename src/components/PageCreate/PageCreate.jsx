import { useEffect, useState } from "react";
import style from "./PageCreate.module.css";
import SectionPortfolio from "../Common/SectionPortfolio/SectionPortfolio";
import menuEdit from "../MenuEdit/MenuEdit";
import NavbarItem from "../ItemPorfolio/NavbarItem/NavbarItem";
import HerobannerItem from "../ItemPorfolio/HerobannerItem/HerobannerItem";
import Image from "../../assets/Img/DemoUser.jpg";
import ContentItem from "../ItemPorfolio/ContentItem/ContentItem";
import FaqItem from "../ItemPorfolio/FaqItem/FaqItem";
import TestimonialItem from "../ItemPorfolio/TestimonialItem/TestimonialItem";
import FooterItem from "../ItemPorfolio/FooterItem/FooterItem";

const menu = [
  { type: "navbar", menuEdit: menuEdit.menuEditNavbar },
  { type: "herobanner", menuEdit: menuEdit.menuEditHerobanner },
  { type: "item", menuEdit: menuEdit.menuEditItem },
  { type: "button", menuEdit: menuEdit.menuEditButton },
  { type: "add", menuEdit: menuEdit.menuEditAdd },
  { type: "faq", menuEdit: menuEdit.menuEditFaq },
  { type: "testimonial", menuEdit: menuEdit.menuEditTestimonial },
  { type: "footer", menuEdit: menuEdit.menuEditFooter },
];

export default function PageCreate({ idPortfolio }) {
  const [sections, setSections] = useState([
    {
    id: "section-1",
    type: "navbar",
    styleSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      gap: 24,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#0d1117",
      color: "#ffffff",
      fontSize: 16,
      typography: {
        fontWeight: "500",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: ["Home", "About", "Projects", "Contact"],
  },
  {
    id: "section-2",
    type: "herobanner",
    image: "",
    styleSection: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
      gap: 20,
      paddingTop: 100,
      paddingBottom: 100,
      paddingLeft: 60,
      paddingRight: 60,
      backgroundColor: "#161b22",
      color: "#c9d1d9",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      { type: "heading_1", content: "Hi, I'm Khánh Nguyễn" },
      { type: "heading_2", content: "Crafting clean & modern web apps." },
      {
        type: "paragraph",
        content:
          "I'm a full stack developer who builds responsive, fast, and accessible websites using modern technologies.",
      },
      { type: "button", content: "Explore My Work", path: "#projects" },
    ],
  },
  {
    id: "section-3",
    type: "content",
    styleSection: {
      display: "flex",
      flexDirection: "row",
      gap: 24,
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#f9fafb",
      color: "#1f2937",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      {
        title: "Startup Landing Page",
        description: "Elegant landing page for a fintech startup using Next.js.",
        image: "https://example.com/portfolio4.jpg",
      },
      {
        title: "Admin Dashboard",
        description: "Custom dashboard with charts and management tools.",
        image: "https://example.com/portfolio5.jpg",
      },
      {
        title: "Blog Platform",
        description: "Markdown-based blog with SEO and light/dark mode.",
        image: "https://example.com/portfolio6.jpg",
      },
    ],
  },
  {
    id: "section-4",
    type: "herobanner",
    image: "",
    styleSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 24,
      paddingTop: 80,
      paddingBottom: 80,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#e0f2f1",
      color: "#004d40",
      typography: {
        fontWeight: "bold",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      { type: "heading_2", content: "Have a project in mind?" },
      {
        type: "paragraph",
        content: "Let’s work together to bring your ideas to life!",
      },
      { type: "button", content: "Contact Me", path: "/contact" },
    ],
  },
  {
    id: "section-5",
    type: "faq",
    styleSection: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: "#fefefe",
      color: "#333",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      {
        question: "Do you offer freelance services?",
        answer: "Yes, I’m open to freelance or contract-based work.",
      },
      {
        question: "What tech stack do you use?",
        answer: "React, TypeScript, Tailwind, Next.js, Node.js, MongoDB.",
      },
      {
        question: "How long does a project take?",
        answer:
          "It depends on the scope, but small projects usually take 1–2 weeks.",
      },
    ],
  },
  {
    id: "section-6",
    type: "testimonial",
    styleSection: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#f8fafc",
      color: "#1e293b",
      typography: {
        fontWeight: "normal",
        fontStyle: "italic",
        textDecoration: "none",
      },
    },
    content: [
      {
        name: "Trung Le",
        feedback:
          "Khánh is the kind of developer every team wants. Professional, fast, and always goes the extra mile.",
        avatar: "https://example.com/avatar3.jpg",
      },
      {
        name: "Anna Nguyen",
        feedback: "His design-to-code skills are unmatched. Highly recommended!",
        avatar: "https://example.com/avatar4.jpg",
      },
    ],
  },
  {
    id: "section-7",
    type: "content",
    styleSection: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#fffbea",
      color: "#3e2723",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      {
        title: "UI Components",
        description: "Reusable component library built with Storybook.",
        image: "https://example.com/ui.jpg",
      },
      {
        title: "Portfolio CMS",
        description: "Custom CMS to manage portfolio content easily.",
        image: "https://example.com/cms.jpg",
      },
      {
        title: "Design Systems",
        description: "Created scalable design systems for consistent branding.",
        image: "https://example.com/designsystem.jpg",
      },
    ],
  },
  {
    id: "section-8",
    type: "footer",
    styleSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 12,
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: "#0d1117",
      color: "#ffffff",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: {
      text: "© 2025 Khánh Nguyễn — Full Stack Developer",
      links: [
        { label: "GitHub", url: "https://github.com/yourusername" },
        { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
        { label: "Twitter", url: "https://twitter.com/yourhandle" },
      ],
    },
  },
  ]);
  const [menuItem, setMenuItem] = useState();
  const [menuType, setMenuType] = useState(null);
  const [sectionActive, setSectionActive] = useState(null);
  const [matchMenu, setMatchMenu] = useState(null);

  useEffect(() => {
    const match = menu.find((item) => item.type === menuType);
    setMatchMenu(match);
  }, [menuType]);

  const handleStyleChange = (id, updateStyle) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== id) return section;
        const newStyle =
          typeof updateStyle === "function"
            ? updateStyle(section.styleSection)
            : { ...section.styleSection, ...updateStyle };
        return { ...section, styleSection: newStyle };
      })
    );
  };

  const handleAddContent = (sectionId, newContent) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, content: [...section.content, newContent] }
          : section
      )
    );
  };

  const handleDeleteContent = (sectionId, indexToDelete) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              content: section.content.filter((_, i) => i !== indexToDelete),
            }
          : section
      )
    );
  };

  return (
    <div className={style.wrapper}>
      <div
        className={`${style.pageCreate} ${matchMenu ? style.pageShrink : ""}`}
      >
        {sections.map((section) => (
          <SectionPortfolio
            key={section.id}
            id={section.id}
            type={section.type}
            handleAddContent={handleAddContent}
            styleSection={{
              ...section.styleSection,
              ...(section.styleSection.backgroundImage && {
                backgroundImage: `url(${section.styleSection.backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }),
            }}
            setMenuType={setMenuType}
            setSectionActive={setSectionActive}
          >
            {(() => {
              switch (section.type) {
                case "navbar":
                  return <NavbarItem labels={section.content} />;
                case "herobanner":
                  return (
                    <HerobannerItem
                      Image={section.image}
                      contents={section.content}
                      menuItem={menuItem}
                      setMenuItem={setMenuItem}
                      setMenuType={setMenuType}
                      setSectionActive={setSectionActive}
                      sectionId={section.id}
                    />
                  );
                case "content":
                  return (
                    <ContentItem
                      contents={section.content}
                      menuItem={menuItem}
                      setMenuItem={setMenuItem}
                      setMenuType={setMenuType}
                      setSectionActive={setSectionActive}
                      sectionId={section.id}
                    />
                  );
                case "faq":
                  return (
                    <FaqItem
                      content={section.content}
                      styleSection={section.styleSection}
                      sectionId={section.id}
                      setMenuItem={(item, index) =>
                        setMenuItem({ ...item, index, id: section.id })
                      }
                      setMenuType={setMenuType}
                      setSectionActive={setSectionActive}
                    />
                  );
                case "testimonial":
                  return (
                    <TestimonialItem
                      content={section.content}
                      styleSection={section.styleSection}
                      sectionId={section.id}
                      setMenuItem={(item, index) =>
                        setMenuItem({ ...item, index, id: section.id })
                      }
                      setMenuType={setMenuType}
                      setSectionActive={setSectionActive}
                    />
                  );
                case "footer":
                  return (
                    <FooterItem
                      content={section.content}
                      styleSection={section.styleSection}
                      sectionId={section.id}
                      setMenuItem={(item) =>
                        setMenuItem({ ...item, id: section.id })
                      }
                      setMenuType={setMenuType}
                      setSectionActive={setSectionActive}
                    />
                  );
                default:
                  return null;
              }
            })()}
          </SectionPortfolio>
        ))}
      </div>

      {matchMenu &&
        sectionActive &&
        (() => {
          const currentSection = sections.find((s) => s.id === sectionActive);
          if (!currentSection) return null;
          const MenuEditComponent = matchMenu.menuEdit;

          return (
            <MenuEditComponent
              setMenuType={setMenuType}
              styleItem={menuItem}
              contentItem={menuItem}
              styleSection={currentSection.styleSection}
              onChange={(newStyle) =>
                handleStyleChange(currentSection.id, newStyle)
              }
              onAdd={handleAddContent}
              section={sectionActive}
              onChangeItem={setMenuItem}
            />
          );
        })()}
    </div>
  );
}
