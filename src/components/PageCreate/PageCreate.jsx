import { useRef, useState, useEffect } from "react";
import SectionPortfolio from "../Common/SectionPortfolio/SectionPortfolio";
import NavbarPortfolio from "../componentsPortfolio/NavbarPortfolio/NavbarPortfolio";
import style from "./PageCreate.module.css";

export default function PageCreate({ setEditMenu, setNavbarStyle, navbarStyle }) {
  const sectionRef = useRef(null);
  const [onCreate, setOnCreate] = useState(null);

  // activeSection holds the key of the active SectionPortfolio
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (onCreate) {
      const timer = setTimeout(() => setOnCreate(null), 200);
      return () => clearTimeout(timer);
    }
  }, [onCreate]);

  return (
    <div className={style.pageCreate}>
      <SectionPortfolio
        ref={sectionRef}
        sectionKey="navbar-section"
        setEditMenu={setEditMenu}
        active={activeSection === "navbar-section"}
        setIsActive={() => setActiveSection("navbar-section")}
      >
        <NavbarPortfolio onCreate={onCreate} setStyle={setNavbarStyle} navbarStyle={navbarStyle}/>
      </SectionPortfolio>
      <SectionPortfolio
        ref={sectionRef}
        sectionKey="content-section"
        setEditMenu={setEditMenu}
        active={activeSection === "content-section"}
        setIsActive={() => setActiveSection("content-section")}
      >
        <NavbarPortfolio onCreate={onCreate} />
      </SectionPortfolio>
    </div>
  );
}
