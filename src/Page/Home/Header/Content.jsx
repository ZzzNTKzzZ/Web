import React from "react";
import style from "./header.module.css";

import TypewriterEffect from "../../../Hooks/Home/Header/TypewriterEffect";

function Content() {
  const dynamicWords = [
    "Portlify"
  ];


  return (
    <div className={style.content}>
      <h2>Showcase your creative vision with</h2>
      <h1>
        <TypewriterEffect
          words={dynamicWords}      // Truyền mảng các từ động
          typingDelay={250}         // Thời gian chờ khi gõ mỗi ký tự (ms)
          deletingDelay={150}        // Thời gian chờ khi xóa mỗi ký tự (ms) - thường nhanh hơn gõ
          pauseDelay={1000}         // Thời gian tạm dừng sau khi gõ xong một từ và trước khi xóa (ms)
          // fixedPrefix="P"           // Tiền tố cố định sẽ luôn hiển thị (chữ 'P')
        />
      </h1>
      <h4>
        Easily create online portfolio icons to highlight your unique products <br />
        and attract new businesses
      </h4>
    </div>
  );
}

export default Content;