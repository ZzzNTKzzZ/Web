import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/About/HeroSection/HeroSection";
import Bar from "../../components/About/Bar/Bar";
import HighlightSection from "../../components/About/HighlightSection/HighlightSection";
import TeamSection from "../../components/About/TeamSection/TeamSection";
import ValueSection from "../../components/About/ValueSection/ValueSection";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <div className="contact">
            <Navbar />
            <HeroSection />
            <Bar/>
            <HighlightSection />
            <TeamSection/>
            <ValueSection/>
            <Footer/>
        </div>
    )
}

export default About;