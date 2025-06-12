import React from "react";
import style from "../ContactFormSection/ContactFormSection.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function ContactFormSection() {
      return (
    <section className={style.contactSection}>
      <div className={style.formContainer}>
        <h2>Get in Touch with Us</h2>
        <div className={style.inputsRow}>
            <input type="text" placeholder="Input your name" />
            <input type="email" placeholder="Input your email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Submit your message request" />
        <button className={style.button}>Send message</button>
      </div>

      <div className={style.detailsContainer}>
        <h2>Contact Details</h2>
        <p>
          Feel free to reach out to us anytime. We're available and ready to help
          you with your questions.
        </p>

        <div className={style.infoGrid}>
          <div className={style.infoBox}>
            <FaMapMarkerAlt className={style.icon} />
            <div>
              <strong>Address</strong>
              <p>Tran Dai Nghia No. 470</p>
            </div>
          </div>

          <div className={style.infoBox}>
            <FaPhoneAlt className={style.icon} />
            <div>
              <strong>Mobile</strong>
              <p>(+84) 917 363 528</p>
            </div>
          </div>

          <div className={style.infoBox}>
            <FaClock className={style.icon} />
            <div>
              <strong>Availability</strong>
              <p>Daily 09 am - 05 pm</p>
            </div>
          </div>

          <div className={style.infoBox}>
            <FaEnvelope className={style.icon} />
            <div>
              <strong>Email</strong>
              <p>support@portlify.com</p>
            </div>
          </div>
        </div>

        <div className={style.socials}>
          <span>Social Media:</span>
          <div className={style.icons}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;