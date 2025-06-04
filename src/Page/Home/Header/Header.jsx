import React from "react";
import style from "./header.module.css";
import Content from "./Content";
import BtnStart from "../../../components/Button/BtnStart";

import { useNavigate } from "react-router-dom";

const Header = ({ scrollY }) => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/loginForm");
  };

  const isVisible = scrollY < 50; // chỉ hiển thị nếu chưa cuộn nhiều

  if (!isVisible) return null; // không render gì nếu đã cuộn

  return (
    <div className={style.background}>
      <div className={style.header}>
        <Content />
        <BtnStart
          Content={"Let's get started"}
          onClick={handleCreateAccountClick}
        />
      </div>
    </div>
  );
};

export default Header;
