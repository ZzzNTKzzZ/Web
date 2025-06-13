import { useEffect, useState } from "react";
import style from "./PageCreate.module.css";
import SectionPortfolio from "../Common/SectionPortfolio/SectionPortfolio";
import menuEdit from "../MenuEdit/MenuEdit";
import NavbarItem from "../ItemPorfolio/NavbarItem/NavbarItem";
import HerobannerItem from "../ItemPorfolio/HerobannerItem/HerobannerItem";
import Image from "../../assets/Img/DemoUser.jpg";

const menu = [
  { type: "navbar", menuEdit: menuEdit.menuEditNavbar },
  { type: "herobanner", menuEdit: menuEdit.menuEditHerobanner },
  { type: "item", menuEdit: menuEdit.menuEditItem },
  { type: "button", menuEdit: menuEdit.menuEditButton },
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
        color: "#62e2cfff",
        typography: {
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
        },
      },
      content: ["Home", "About", "Contact"],
    },
    {
      id: "section-2",
      type: "herobanner",
      styleSection: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#fff",
        color: "#62e2cfff",
        backgroundImage: "",
        typography: {
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
        },
      },
      content: [
        { type: "heading_1", content: "Admin" },
        { type: "heading_2", content: "Web dev" },
        { type: "heading_3", content: "Full stack dev" },
        {
          type: "paragraph",
          content: "Hi everyone, I am best dev you ever seen",
        },
        { type: "button", content: "Contact me", path: "" },
      ],
    },
    // {
    //   id: "section-3",
    //   type: "herobanner",
    //   styleSection: {
    //     display: "flex",
    //     flexDirection: "row",
    //     gap: 20,
    //     paddingTop: 20,
    //     paddingBottom: 20,
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     backgroundColor: "#f9f9f9",
    //     color: "#333",
    //     typography: {
    //       fontWeight: "normal",
    //       fontStyle: "normal",
    //       textDecoration: "none",
    //     },
    //   },
    //   content: [
    //     {
    //       title: "Web Design",
    //       description: "Beautiful UI/UX design for your website",
    //       image: "https://example.com/image1.jpg",
    //     },
    //     {
    //       title: "Development",
    //       description: "Robust and scalable web development",
    //       image: "https://example.com/image2.jpg",
    //     },
    //     {
    //       title: "SEO",
    //       description: "Improve your site's visibility on search engines",
    //       image: "https://example.com/image3.jpg",
    //     },
    //   ],
    // },
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

        const prevStyle = section.styleSection;
        const newStyle =
          typeof updateStyle === "function"
            ? updateStyle(prevStyle)
            : { ...prevStyle, ...updateStyle };

        return { ...section, styleSection: newStyle };
      })
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
                      Image={Image}
                      contents={section.content}
                      menuItem={menuItem}
                      setMenuItem={setMenuItem}
                      setMenuType={setMenuType}
                      setSectionActive={setSectionActive}
                      sectionId={section.id}
                    />
                  );
                default:
                  break;
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
              onChangeItem={setMenuItem}
              styleSection={currentSection.styleSection}
              onChange={(newStyle) =>
                handleStyleChange(currentSection.id, newStyle)
              }
            />
          );
        })()}
    </div>
  );
}
