import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeaderAbout from "../../components/About/HeaderAbout/HeaderAbout";
import PortAbout from "../../components/About/PortAbout/PortAbout";
import CounterSection from "../../components/About/CounterSection/CounterSection";
import TeamSection from "../../components/About/TeamSection/TeamSection";
import WhyChooseUs from "../../components/About/WhyChooseUs/WhyChooseUs";
import HowItWorks from "../../components/About/HowItWork/HowItWork";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <div className="contact">
            <Navbar />
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