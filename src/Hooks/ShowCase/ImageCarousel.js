import React, { useState, useEffect } from "react";
import style from "../../Page/Home/ShowCase/showCase.module.css";

import ImgShowCase1 from "../../assets/Img/ImgShowCase1.svg";
import ImgShowCase2 from "../../assets/Img/ImgShowCase2.svg";
import ImgShowCase3 from "../../assets/Img/ImgShowCase3.svg";
// Thêm các hình ảnh khác vào đây để có đủ số lượng cho carousel cuộn tròn

const images = [
  ImgShowCase1,
  ImgShowCase2,
  ImgShowCase3
  // Đảm bảo bạn có ít nhất 3 ảnh, và tốt nhất là nhiều hơn để thấy hiệu ứng cuộn.
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Lấy chỉ số ảnh trước đó, đảm bảo vòng lặp
  const getPreviousIndex = (index) => (index - 1 + totalImages) % totalImages;
  // Lấy chỉ số ảnh tiếp theo, đảm bảo vòng lặp
  const getNextIndex = (index) => (index + 1) % totalImages;

  const handlePrevClick = () => {
    setCurrentIndex(getPreviousIndex(currentIndex));
  };

  const handleNextClick = () => {
    setCurrentIndex(getNextIndex(currentIndex));
  };

  // Hiệu ứng tự động chuyển ảnh
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
    }, 3000); // Tự động chuyển sau 3 giây

    return () => clearInterval(intervalId);
  }, [totalImages]); // Dependency array: Chỉ chạy lại useEffect khi totalImages thay đổi

  return (
    <div className={style.carouselContainer}>
      {/* Nút Previous (đặt ngoài carouselWrapper để dễ định vị) */}
      <button
        className={`${style.carouselButton} ${style.carouselButtonPrev}`}
        onClick={handlePrevClick}
      >
        &lt;
      </button>

      <div className={style.carouselWrapper}>
        {images.map((image, index) => {
          let itemClassName = style.carouselItem;

          // Xác định vị trí của ảnh hiện tại trong vòng lặp
          if (index === getPreviousIndex(currentIndex)) {
            itemClassName += ` ${style.leftItem}`;
          } else if (index === currentIndex) {
            itemClassName += ` ${style.centerItem}`;
          } else if (index === getNextIndex(currentIndex)) {
            itemClassName += ` ${style.rightItem}`;
          } else {
            // Các ảnh không nằm trong 3 vị trí hiển thị sẽ bị ẩn
            itemClassName += ` ${style.hiddenItem}`;
          }

          return (
            <div key={index} className={itemClassName}>
              <img src={image} alt={`Hình ảnh ${index + 1}`} />
            </div>
          );
        })}
      </div>

      {/* Nút Next (đặt ngoài carouselWrapper để dễ định vị) */}
      <button
        className={`${style.carouselButton} ${style.carouselButtonNext}`}
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;