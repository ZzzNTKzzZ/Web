import React from 'react';
import style from './header.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Content from './Content';
import BtnStart from '../../../components/Button/BtnStart';


function Header(){
    return(
        <div className={style.background}>
            <div className={style.header}>
            <Navbar />
            <Content />
            <BtnStart Content={"Let's get started"} />
        </div>
        </div>
    )
}

export default Header;