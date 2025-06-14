import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/Portfolio/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import TemplatePage from "../../components/Portfolio/TemplatePage/TemplatePage";

import useScrollDirection from "../../Hooks/useScrollY";
import useScreenWidth from "../../Hooks/useScreenWidth";

import NavbarResponsive from "../../components/Navbar/NavbarResponsive";

function PortfolioHome(){
    const scrollDirection = useScrollDirection();
    const currentScreenWidth = useScreenWidth();

    const MOBILE_BREAKPOINT = 1024; // px
    return(
        <div>
            {currentScreenWidth < MOBILE_BREAKPOINT ? (
        // Nếu chiều rộng màn hình nhỏ hơn 768px, hiển thị NavbarResponsive
        <NavbarResponsive/>
      ) : (
        // Nếu chiều rộng màn hình lớn hơn hoặc bằng 768px, hiển thị Navbar
        <Navbar scrollDirection={scrollDirection} />
      )}
            <Navbar/>
            <HeroSection/>
            <TemplatePage/>
            <Footer/>
        </div>
    );
}
export default PortfolioHome;