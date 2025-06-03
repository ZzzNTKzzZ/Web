import React, { useState } from "react";
import style from "../../Page/Home/ShowCase/showCase.module.css";

const images = [
  "../../assets/Img/ImgShowCase1.svg",
  "../../assets/Img/ImgShowCase2.svg",
  "../../assets/Img/ImgShowCase3.svg",
  // Thêm nhiều hình ảnh hơn nếu cần cho mộtphù hợp
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  // Hàm lấy chỉ số ảnh trước đó, đảm bảo vòng lặp
  const getPreviousIndex = (index) => (index - 1 + totalImages) % totalImages;
  // Hàm lấy chỉ số ảnh tiếp theo, đảm bảo vòng lặp
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
        <div className={`${style.carouselItem} ${style.leftItem}`}>
          <img
            src={images[leftImageIndex]}
            alt={`Hình ảnh${leftImageIndex + 1}`}
          />
        </div>
        <div className={`${style.carouselItem} ${style.centerItem}`}>
          <img
            src={images[centerImageIndex]}
            alt={`Hình ảnh${centerImageIndex + 1}`}
          />
        </div>
        <div className={`${style.carouselItem} ${style.rightItem}`}>
          <img
            src={images[rightImageIndex]}
            alt={`Hình ảnh${rightImageIndex + 1}`}
          />
        </div>
      </div>

      {/* Nút Previous */}
      <button
        className={`${style.carouselButton} ${style.carouselButtonPrev}`}
        onClick={handlePrevClick}
      >
        &lt; {/* Ký tự HTML cho dấu nhỏ hơn */}
      </button>
      {/* Nút Next */}
      <button
        className={`${style.carouselButton} ${style.carouselButtonNext}`}
        onClick={handleNextClick}
      >
        &gt; {/* Ký tự HTML cho dấu lớn hơn */}
      </button>
    </div>
  );
};

export default ImageCarousel;