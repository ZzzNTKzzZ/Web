import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactHeader from "../../components/Contact/ContactHeader/ContactHeader";
import ContactFromSection from "../../components/Contact/ContactFormSection/ContactFormSection";
import MapSection from "../../components/Contact/MapSection/MapSection";
import PortfolioFAQ from "../../components/Contact/PortfolioFAQ/PortfolioFAQ";
import PortfolioServices from "../../components/Contact/PortfolioServices/PortfolioServices";
import Footer from "../../components/Footer/Footer";

import useScrollDirection from "../../Hooks/useScrollY";
import useScreenWidth from "../../Hooks/useScreenWidth";

import NavbarResponsive from "../../components/Navbar/NavbarResponsive";

function Contact() {
    const scrollDirection = useScrollDirection();
    const currentScreenWidth = useScreenWidth();

    const MOBILE_BREAKPOINT = 768; // px

  return (
    <div>
      {currentScreenWidth < MOBILE_BREAKPOINT ? (
        // Nếu chiều rộng màn hình nhỏ hơn 768px, hiển thị NavbarResponsive
        <NavbarResponsive/>
      ) : (
        // Nếu chiều rộng màn hình lớn hơn hoặc bằng 768px, hiển thị Navbar
        <Navbar scrollDirection={scrollDirection} />
      )}
      <ContactHeader />
      <ContactFromSection />
      <MapSection />
      <PortfolioFAQ />
      <PortfolioServices />
      <Footer />
    </div>
  );
}

export default Contact;
