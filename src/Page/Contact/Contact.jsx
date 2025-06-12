import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/Contact/HeroSection/HeroSection";
import Bar from "../../components/Contact/Bar/Bar";
import HighlightSection from "../../components/Contact/HighlightSection/HighlightSection";
import TeamSection from "../../components/Contact/TeamSection/TeamSection";
import ValueSection from "../../components/Contact/ValueSection/ValueSection";
import Footer from "../../components/Footer/Footer";

function Contact() {
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

export default Contact;