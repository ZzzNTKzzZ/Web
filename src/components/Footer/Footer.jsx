import React from "react";

import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.itemLeft}>
          <div className={style.logoFooter}></div>
          <p>Provision</p>
          <p>Privacy policy</p>
        </div>
        <div className={style.itemCenter}>
          <h4>Contact information</h4>
          <p>
            <b>Supported usage:</b>
          </p>
          <p>
            0917 363 528 <br />
            0899 714 487 <br />
            0396 297 075
          </p>
          <p>
            <b>Contact email:</b>
          </p>
          <p>
            anhnt.24ite@vku.udn.vn <br />
            khanhnt.24ite@vku.udn.vn <br />
            anhvq.24ite@vku.udn.vn
          </p>
        </div>
        <div className={style.itemRight}>
          <h4>AKA Team From VKU</h4>
          <p>
            470 Tran Dai Nghia, Hoa Quy Ward, <br />
            Ngu Hanh Son District, Da Nang City, Vietnam
          </p>
        </div>
      </div>
      <div className={style.lineCopyRight}>
        Copyrighted by Portlify development team
      </div>
    </div>
  );
}

export default Footer;
