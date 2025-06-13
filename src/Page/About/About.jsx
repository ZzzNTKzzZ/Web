import react from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeaderAbout from "../../components/About/HeaderAbout/HeaderAbout";
import PortAbout from "../../components/About/PortAbout/PortAbout";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <div className="contact">
            <Navbar />
            <HeaderAbout />
            <PortAbout />
            <Footer/>
        </div>
    )
}

export default About;