import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeaderAbout from "../../components/About/HeaderAbout/HeaderAbout";
import PortAbout from "../../components/About/PortAbout/PortAbout";
import CounterSection from "../../components/About/CounterSection/CounterSection";
import TeamSection from "../../components/About/TeamSection/TeamSection";
import WhyChooseUs from "../../components/About/WhyChooseUs/WhyChooseUs";
import HowItWorks from "../../components/About/HowItWork/HowItWork";
import Footer from "../../components/Footer/Footer";
import NavbarResponsive from "../../components/Navbar/NavbarResponsive";

import useScrollDirection from "../../Hooks/useScrollY";
import useScreenWidth from "../../Hooks/useScreenWidth";

function About() {
    const scrollDirection = useScrollDirection();
    const currentScreenWidth = useScreenWidth();

    const MOBILE_BREAKPOINT = 768; // px

    return (
        <div className="contact">
            {currentScreenWidth < MOBILE_BREAKPOINT ? (
        // Nếu chiều rộng màn hình nhỏ hơn 768px, hiển thị NavbarResponsive
        <NavbarResponsive/>
      ) : (
        // Nếu chiều rộng màn hình lớn hơn hoặc bằng 768px, hiển thị Navbar
        <Navbar scrollDirection={scrollDirection} />
      )}
            <HeaderAbout />
            <PortAbout />
            <CounterSection />
            <TeamSection />
            <WhyChooseUs /> 
            <HowItWorks />
            <Footer/>
        </div>
    )
}

export default About;