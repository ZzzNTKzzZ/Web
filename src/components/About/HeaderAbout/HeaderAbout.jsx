import React from "react";
import styles from "./HeaderAbout.module.css";
import aboutImage from "../../../assets/Img/HeroSection.jpg"; // hoặc URL ảnh nếu có

function HeaderAbout() {
    return (
        <div className={styles.container}>
            <img 
                src={aboutImage} 
                alt="About Us" 
                className={styles.image}
            />
            <div className={styles.textOverlay}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.breadcrumb}>
                    Home <span className={styles.breadcrumbArrow}>&gt;</span> 
                    <span className={styles.current}>About Us</span>
                </p>
                <p className={styles.description}>
                    I am passionate about crafting clean, user-friendly designs and building responsive web applications.
                </p>
            </div>
        </div>
    );
}

export default HeaderAbout;
