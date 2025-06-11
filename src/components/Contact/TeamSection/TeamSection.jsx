import React from "react";
import style from "../../Contact/TeamSection/TeamSection.module.css";
import member1 from "../../../assets/Img/team/member1.jpg";
import member2 from "../../../assets/Img/team/member2.jpg";
import member3 from "../../../assets/Img/team/member3.png";

function TeamSection(){
    return (
        <div className={style.teamSection}>
            <div className={style.left}>
                <p className={style.subtitle}>-- Our Export Team</p>
                <h2 className={style.title}>Meet Our Team</h2>
                <p className={style.descripyion}>
                    We are information technology students at <br />
                    Vietnam - Korea University of Information <br />
                    Technology and Communications.
                </p>
                <button className={style.btn} onClick={() => window.open("https://vku.udn.vn/vi/", "_blank")}>
                    Learn More
                </button>
            </div>
            <div className={style.right}>
                <img src={member1} alt="Team Member 1" className={style.avatar} />
                <img src={member2} alt="Team Member 2" className={style.avatar} />
                <img src={member3} alt="Team Member 3" className={style.avatar} />
            </div>
        </div>
    );
}
export default TeamSection;