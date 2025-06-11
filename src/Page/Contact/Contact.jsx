import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/Contact/HeroSection/HeroSection";
import Bar from "../../components/Contact/Bar/Bar";
import TeamSection from "../../components/Contact/TeamSection/TeamSection";
import Footer from "../../components/Footer/Footer";

function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <HeroSection />
            <Bar/>
            <TeamSection/>
            <Footer/>
        </div>
    )
}

export default Contact;