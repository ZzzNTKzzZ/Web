import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/Portfolio/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import TemplatePage from "../../components/Portfolio/Template/TemplatePage/TemplatePage";

function PortfolioHome(){
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <TemplatePage/>
            <Footer/>
        </div>
    );
}
export default PortfolioHome;