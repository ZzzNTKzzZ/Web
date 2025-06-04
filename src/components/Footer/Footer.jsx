import React from "react";

import {ReactComponent as IconFacebook} from "../../assets/icon/IconFacebook.svg";
import {ReactComponent as IconGithub} from "../../assets/icon/IconGithub.svg";
import {ReactComponent as IconIg} from "../../assets/icon/IconIg.svg";
import {ReactComponent as IconYoutube} from "../../assets/icon/IconYoutube.svg";



import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.itemLeft}>
          <div className={style.logoFooterContainer}>
            <div className={style.logoFooter}></div>
            <p>Portlify</p>
          </div>
          <p>Provision</p>
          <p>Privacy policy</p>
        </div>
        <div className={style.itemCenter}>
          <h4>Contact information</h4>
          <div className={style.titleSupport}>Supported usage:</div>
          <p>
            0917 363 528 <br />
            0899 714 487 <br />
            0396 297 075
          </p>
          <div className={style.titleEmail}>Contact email:</div>
          <p>
            anhnt.24ite@vku.udn.vn <br />
            khanhnt.24ite@vku.udn.vn <br />
            anhvq.24ite@vku.udn.vn
          </p>
        </div>
        <div className={style.itemRight}>
          <h4>AKA Team From VKU</h4>
          <div className={style.address}>
            470 Tran Dai Nghia, Hoa Quy Ward, <br />
            Ngu Hanh Son District, Da Nang City, Vietnam
          </div>
          <div className={style.icon}>
            <IconFacebook />
            <IconGithub />
            <IconIg />
            <IconYoutube />
          </div>
        </div>
      </div>
      <div className={style.lineCopyRight}>
        Copyrighted by Portlify development team
      </div>
    </div>
  );
}

export default Footer;
