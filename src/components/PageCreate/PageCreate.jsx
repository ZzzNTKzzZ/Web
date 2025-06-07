import { useRef, useState, useEffect } from "react";
import SectionPortfolio from "../Common/SectionPortfolio/SectionPortfolio";
import NavbarPortfolio from "../componentsPortfolio/NavbarPortfolio/NavbarPortfolio";
import style from "./PageCreate.module.css";

export default function PageCreate({ setEditMenu, setNavbarStyle, navbarStyle }) {
  const sectionRef = useRef(null);
  const [onCreate, setOnCreate] = useState(null);

  const [activeSection, setActiveSection] = useState(null);

  // Track which sections are visible
  const [visibleSections, setVisibleSections] = useState({
    navbar: true,
    content: true,
  });

  const handleDelete = (sectionKey) => {
    if (sectionKey === "navbar-section") {
      setVisibleSections((prev) => ({ ...prev, navbar: false }));
    }
    if (sectionKey === "content-section") {
      setVisibleSections((prev) => ({ ...prev, content: false }));
    }
    setActiveSection(null);
  };

  useEffect(() => {
    if (onCreate) {
      const timer = setTimeout(() => setOnCreate(null), 200);
      return () => clearTimeout(timer);
    }
  }, [onCreate]);

  return (
    <div className={style.pageCreate}>
      {visibleSections.navbar && (
        <SectionPortfolio
          ref={sectionRef}
          sectionKey="navbar-section"
          setEditMenu={setEditMenu}
          active={activeSection === "navbar-section"}
          setIsActive={() => setActiveSection("navbar-section")}
          backgroundColor={navbarStyle.backgroundColor}
          handleDelete={() => handleDelete("navbar-section")}
        >
          <NavbarPortfolio onCreate={onCreate} setStyle={setNavbarStyle} navbarStyle={navbarStyle} />
        </SectionPortfolio>
      )}

      {visibleSections.content && (
        <SectionPortfolio
          ref={sectionRef}
          sectionKey="content-section"
          setEditMenu={setEditMenu}
          active={activeSection === "content-section"}
          setIsActive={() => setActiveSection("content-section")}
          handleDelete={() => handleDelete("content-section")}
        >
          {/* Your content here */}
          <div>Content Section</div>
        </SectionPortfolio>
      )}
    </div>
  );
}