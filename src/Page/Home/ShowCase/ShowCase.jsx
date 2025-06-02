import React from 'react';
import style from './showCase.module.css';
import ImageCarousel from '../../../Hooks/ShowCase/ImageCarousel';


function ShowCase() {
  return (
    <div className={style.showCase}>
        <div className={style.content}>
            <h2>Make your digital mark with a professional <br />
            and impressive portfolio</h2>
            <p>Create a unique online space to showcase your software development projects, skills, and experience. <br />
            Thousands of developers and IT professionals are using Portlify to create their own portfolios, <br />
            giving each website a unique personality and capabilities.</p>
        </div>
        <div className={style.carousel}>
            <ImageCarousel />
        </div>
    </div>
  );
}

export default ShowCase;