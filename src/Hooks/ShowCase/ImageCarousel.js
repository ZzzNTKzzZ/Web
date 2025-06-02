import React, { useState } from "react";
import style from "../../Page/Home/ShowCase/showCase.module.css";

const images = [
  "../../assets/Images/ImgShowCase1.jpg",
  "../../assets/Images/ImgShowCase2.jpg",
  "../../assets/Images/ImgShowCase3.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const getPreviousIndex = (index) => (index - 1 + totalImages) % totalImages;
  const getNextIndex = (index) => (index + 1) % totalImages;

  const handlePrevClick = () => {
    setCurrentIndex(getPreviousIndex(currentIndex));
  };

  const handleNextClick = () => {
    setCurrentIndex(getNextIndex(currentIndex));
  };

  // Lấy các ảnh để hiển thị: ảnh trái, ảnh giữa, ảnh phải
  const leftImageIndex = getPreviousIndex(currentIndex);
  const centerImageIndex = currentIndex;
  const rightImageIndex = getNextIndex(currentIndex);

  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselWrapper}>
        <div className={style.carouselItemLeftItem}>
          <img
            src={images[leftImageIndex]}
            alt={`Carousel ${leftImageIndex + 1}`}
          />
        </div>
        <div className={style.carouselItemCenterItem}>
          <img
            src={images[centerImageIndex]}
            alt={`Carousel ${centerImageIndex + 1}`}
          />
        </div>
        <div className={style.carouselItemRightItem}>
          <img
            src={images[rightImageIndex]}
            alt={`Carousel ${rightImageIndex + 1}`}
          />
        </div>
      </div>

      <button className={style.carouselButtonPrev} onClick={handlePrevClick}>
        &lt;
      </button>
      <button className={style.carouselButtonNext} onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
