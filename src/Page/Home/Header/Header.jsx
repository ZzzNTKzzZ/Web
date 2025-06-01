import React from 'react';
import style from './header.module.css';
import Content from './Content';
import BtnStart from '../../../components/Button/BtnStart';

const Header = ({ scrollY }) => {
  const isVisible = scrollY < 50; // chỉ hiển thị nếu chưa cuộn nhiều

  if (!isVisible) return null; // không render gì nếu đã cuộn

  return (
    <div className={style.background}>
      <div className={style.header}>
        <Content />
        <BtnStart Content={"Let's get started"} />
      </div>
    </div>
  );
};

export default Header;
