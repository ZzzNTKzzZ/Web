import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactHeader from "../../components/Contact/ContactHeader/ContactHeader";
import ContactFromSection from "../../components/Contact/ContactFormSection/ContactFormSection";
import MapSection from "../../components/Contact/MapSection/MapSection";
import PortfolioFAQ from "../../components/Contact/PortfolioFAQ/PortfolioFAQ";
import PortfolioServices from "../../components/Contact/PortfolioServices/PortfolioServices";
import Footer from "../../components/Footer/Footer";

function Contact() {
    return (
        <div>
            <Navbar/>
            <ContactHeader />
            <ContactFromSection />
            <MapSection />
            <PortfolioFAQ />
            <PortfolioServices/>
            <Footer />
        </div>
    );
}

export default Contact;