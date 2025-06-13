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
      justifyContent: "center",
      flexDirection: "row",
      gap: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: 14,
      backgroundColor: "#fff",
      color: "#62e2cf",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: ["Home", "Projects", "Services", "Testimonials", "Contact"],
  },
  {
    id: "section-2",
    type: "herobanner",
    image: "", // có thể dùng hình đại diện bạn
    styleSection: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
      gap: 20,
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#f0fbfc",
      color: "#222",
      backgroundImage: "",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      { type: "heading_1", content: "Hi, I'm Khánh Nguyễn" },
      { type: "heading_2", content: "Full Stack Web Developer" },
      {
        type: "paragraph",
        content:
          "I design and build modern, responsive websites that deliver great user experiences.",
      },
      { type: "button", content: "View My Work", path: "#projects" },
    ],
  },
  {
    id: "section-3",
    type: "content",
    styleSection: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#ffffff",
      color: "#333",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my web development skills.",
        image: "https://example.com/portfolio1.jpg",
      },
      {
        title: "E-Commerce Platform",
        description: "Fully functional e-commerce website built with React and Node.js.",
        image: "https://example.com/portfolio2.jpg",
      },
      {
        title: "Company Landing Page",
        description: "Clean and responsive landing page for startups.",
        image: "https://example.com/portfolio3.jpg",
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
      gap: 20,
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#e0f7fa",
      color: "#000",
      typography: {
        fontWeight: "bold",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      { type: "heading_2", content: "Let's Work Together!" },
      {
        type: "paragraph",
        content: "Interested in working on a project together? I’d love to hear from you.",
      },
      { type: "button", content: "Contact Me", path: "/contact" },
    ],
  },
  {
    id: "section-6",
    type: "faq",
    styleSection: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: "#f9f9f9",
      color: "#000",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: [
      {
        question: "What services do you offer?",
        answer: "I offer web development, UI/UX design, and website optimization.",
      },
      {
        question: "What technologies do you use?",
        answer: "React, Next.js, Node.js, Express, MongoDB, and more.",
      },
      {
        question: "How can I contact you?",
        answer: "Just click the Contact button above or email me directly.",
      },
    ],
  },
  {
    id: "section-7",
    type: "testimonial",
    styleSection: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: "#ffffff",
      color: "#333",
      typography: {
        fontWeight: "normal",
        fontStyle: "italic",
        textDecoration: "none",
      },
    },
    content: [
      {
        name: "Linh Tran",
        feedback:
          "Khánh delivered a fantastic website for our startup. He’s fast, professional, and creative.",
        avatar: "https://example.com/avatar1.jpg",
      },
      {
        name: "Minh Vu",
        feedback: "Reliable developer with excellent communication and problem-solving skills.",
        avatar: "https://example.com/avatar2.jpg",
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
      gap: 10,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: "#222",
      color: "#fff",
      typography: {
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
      },
    },
    content: {
      text: "© 2025 Khánh Nguyễn. All rights reserved.",
      links: [
        { label: "GitHub", url: "https://github.com/yourusername" },
        { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
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
              onChangeItem={(updatedItem) => {
                setSections((prevSections) =>
                  prevSections.map((section) => {
                    if (section.id !== updatedItem.id) return section;
                    const newContent = [...section.content];
                    newContent[updatedItem.index] = updatedItem;
                    return { ...section, content: newContent };
                  })
                );
              }}
            />
          );
        })()}
    </div>
  );
}
