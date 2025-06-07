import React from "react";
import style from "../../Portfolio/HeroSection/HeroSection.module.css";

function HeroSection() {
    return (
        <section className={style.heroSection}>
            <div className={style.overlay}>
                <div className={style.heroContent}>
                    <h1>Creativity without limits</h1>
                    <h2>Connecting the future</h2>
                    <p>
                        Through limitless imagination and collaboration <br />
                        we build meaningful connections that shape the future
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
