import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactHeader from "../../components/Contact/ContactHeader/ContactHeader";
import ContactFromSection from "../../components/Contact/ContactFormSection/ContactFormSection";
import MapSection from "../../components/Contact/MapSection/MapSection";

function Contact() {
    return (
        <div>
            <Navbar/>
            <ContactHeader />
            <ContactFromSection />
            <MapSection />
        </div>
    );
}

export default Contact;