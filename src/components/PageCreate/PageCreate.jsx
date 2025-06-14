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
import { getData } from "../../Service/dataService";

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
  const [sections, setSections] = useState([]);
  useEffect(() => {
  const fetchPortfolio = async () => {
    try {
      const data = await getData(idPortfolio);
      console.log("🔥 Loaded portfolio data:", data);

      if (Array.isArray(data.sections)) {
        setSections(data.sections); // ✅ Set the sections properly
      } else {
        console.warn("⚠️ Unexpected sections format:", data.sections);
      }
    } catch (error) {
      console.error("❌ Failed to fetch portfolio data:", error);
    }
  };

  if (idPortfolio) fetchPortfolio();
}, [idPortfolio]);
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

  const handleUpdateContent = (sectionId, newContent) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, content: newContent } : section
      )
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
                      setMenuItem={setMenuItem}
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
