import React, { useState, useEffect } from 'react';
import style from './typewriterEffect.module.css'; // Đảm bảo đúng tên file CSS module của bạn

/**
 * Component TypewriterEffect tạo hiệu ứng gõ và xóa chữ.
 *
 * @param {object} props - Thuộc tính của component.
 * @param {string[]} props.words - Mảng các từ hoặc cụm từ sẽ được gõ và xóa (không bao gồm tiền tố).
 * @param {number} [props.typingDelay=150] - Thời gian chờ (ms) giữa mỗi ký tự khi gõ.
 * @param {number} [props.deletingDelay=75] - Thời gian chờ (ms) giữa mỗi ký tự khi xóa.
 * @param {number} [props.pauseDelay=1000] - Thời gian chờ (ms) sau khi gõ xong một từ và trước khi bắt đầu xóa.
 * @param {string} [props.fixedPrefix=''] - Tiền tố cố định sẽ luôn hiển thị trước phần chữ động.
 */
const TypewriterEffect = ({ words, typingDelay = 150, deletingDelay = 75, pauseDelay = 1000, fixedPrefix = '' }) => {
  const [currentDynamicText, setCurrentDynamicText] = useState(''); // Phần chữ thay đổi động
  const [isDeleting, setIsDeleting] = useState(false); // Trạng thái: đang xóa hay đang gõ
  const [loopNum, setLoopNum] = useState(0); // Chỉ số của từ hiện tại trong mảng 'words'
  const [speed, setSpeed] = useState(typingDelay); // Tốc độ hiện tại (gõ hoặc xóa)

  useEffect(() => {
    const handleType = () => {
      // Lấy từ đầy đủ (phần động) cho vòng lặp hiện tại
      const i = loopNum % words.length;
      const fullDynamicTxt = words[i];

      let updatedDynamicText = '';

      if (isDeleting) {
        // Nếu đang xóa: loại bỏ từng ký tự từ cuối của currentDynamicText
        updatedDynamicText = fullDynamicTxt.substring(0, currentDynamicText.length - 1);
      } else {
        // Nếu đang gõ: thêm từng ký tự vào cuối của currentDynamicText
        updatedDynamicText = fullDynamicTxt.substring(0, currentDynamicText.length + 1);
      }

      setCurrentDynamicText(updatedDynamicText); // Cập nhật trạng thái chữ động

      // Điều chỉnh tốc độ và trạng thái dựa trên quá trình gõ/xóa
      if (!isDeleting && updatedDynamicText === fullDynamicTxt) {
        // Đã gõ xong từ: Đặt trạng thái là đang xóa, và tạm dừng
        setSpeed(pauseDelay);
        setIsDeleting(true);
      } else if (isDeleting && updatedDynamicText === '') {
        // Đã xóa xong từ: Đặt trạng thái là đang gõ, chuyển sang từ tiếp theo và reset tốc độ gõ
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setSpeed(typingDelay);
      } else {
        // Đang trong quá trình gõ hoặc xóa: Điều chỉnh tốc độ
        setSpeed(isDeleting ? deletingDelay : typingDelay);
      }
    };

    // Thiết lập setTimeout để thực hiện hành động gõ/xóa sau mỗi khoảng thời gian
    let ticker = setTimeout(() => {
      handleType();
    }, speed);

    // Hàm cleanup: xóa timeout khi component unmount hoặc khi dependencies thay đổi
    return () => clearTimeout(ticker);
  }, [currentDynamicText, isDeleting, loopNum, speed, words, typingDelay, deletingDelay, pauseDelay]); // Dependencies

  return (
    <span className={style.typewriterContainer}>
      {fixedPrefix} {/* Hiển thị tiền tố cố định (ví dụ: 'P') */}
      <span className={style.typewriterDynamicText}>
        {currentDynamicText}
      </span>
      <span className={style.cursor}></span> {/* Con trỏ nhấp nháy */}
    </span>
  );
};

export default TypewriterEffect;