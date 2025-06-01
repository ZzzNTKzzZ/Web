import React from 'react';
import style from './home.module.css';

import Header from './Header/Header.jsx';

function Home() {
  return (
    <div className={style.home}>
        <Header />
        
    </div>
  );
}

export default Home;