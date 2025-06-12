import React from 'react';
import style from "../ContactHeader/ContactHeader.module.css";

const ContactHeader = () => {
    return (
        <section className={style.headerSection}>
            <div className={style.container}>
               <h1 className={style.heading}>
                     <span className={style.underlined}>Connect</span> with Our Team
                </h1>
                <p className={style.description}>
                    Have a question or need support? Our team is here to help you every step of tthe way.
                </p>
            </div>
        </section>
    );
}

export default ContactHeader;