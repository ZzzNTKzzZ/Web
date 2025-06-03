import { useRef, useState, useEffect } from "react";
import SectionPortfolio from "../Common/SectionPortfolio/SectionPortfolio";
import NavbarPortfolio from "../componentsPortfolio/NavbarPortfolio/NavbarPortfolio";
import style from "./PageCreate.module.css";

export default function PageCreate() {
  const sectionRef = useRef(null);
  const [onCreate, setOnCreate] = useState(null);

  const handleCreate = (sectionKey, event) => {
    if (sectionKey === "navbar-section") {
      setOnCreate(event);
    }
  };

  // Optional: reset trigger to allow future re-creation
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
        onCreate={handleCreate}
      > 
        <NavbarPortfolio onCreate={onCreate} />
      </SectionPortfolio>
    </div>
  );
}
