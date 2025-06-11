import React from "react";
import style from "../HighlightSection/HighlightSection.module.css";
import person1 from "../../../assets/Img/Person/person1.jpg";
import person2 from "../../../assets/Img/Person//person2.jpg";

function HighlightSection() {
    return (
        <div className={style.container}>
            <div className={style.imageSection}>
                <img src={person1} alt="Main" className={style.mainImage}/>
                <img src={person2} alt="Secondary" className={style.secondaryImage}/>
            </div>
            <div className={style.textSection}>
                <p className={style.subTitle}>Why Choose Us?</p>
                <h2 className={style.title}>Make a Unique Impression with a Stunning Portfolio</h2>
                <div className={style.feature}>
                    <span className={style.number}>01</span>
                    <div>
                        <h3>Professional Design</h3>
                        <p>Modern layout, easily customizable to showcase yourself or your projects.</p>
                    </div>
                </div>
                <div className={style.feature}>
                    <span className={style.number}>02</span>
                    <div>
                        <h3>Responsive & Fast</h3>
                        <p>Compatible with all devices, fast loading speed, smooth user experience.</p>
                    </div>
                </div>
                <div className={style.feature}>
                    <span className={style.number}>03</span>
                    <div>
                        <h3>Easy to Update</h3>
                        <p>Simple content management, quickly add or edit your work and experience.</p>
                    </div>
                </div>
            </div>   
        </div>
    );
}
export default HighlightSection;