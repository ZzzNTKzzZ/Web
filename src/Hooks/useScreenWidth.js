import React, { useState, useEffect, useCallback } from 'react';

// Custom Hook: useScreenWidth
// Hook này sẽ trả về chiều rộng hiện tại của màn hình trình duyệt (viewport width).
// Nó sẽ tự động cập nhật giá trị khi kích thước trình duyệt thay đổi.
const useScreenWidth = () => {
  // State để lưu trữ chiều rộng màn hình.
  // Khởi tạo với window.innerWidth nếu đã ở phía client, nếu không thì là 0 để tránh lỗi SSR.
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  // useCallback để memoize hàm handleResize, tránh việc tạo lại hàm mới mỗi lần render.
  const handleResize = useCallback(() => {
    // Cập nhật state screenWidth với chiều rộng mới của cửa sổ.
    setScreenWidth(window.innerWidth);
  }, []); // Dependency array rỗng vì hàm không phụ thuộc vào bất kỳ giá trị nào từ component.

  useEffect(() => {
    // Đăng ký event listener cho sự kiện 'resize' khi component mount.
    // Mọi khi cửa sổ trình duyệt thay đổi kích thước, handleResize sẽ được gọi.
    if (typeof window !== 'undefined') { // Đảm bảo window object có sẵn (tránh lỗi SSR)
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function: Gỡ bỏ event listener khi component unmount
    // để tránh rò rỉ bộ nhớ.
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [handleResize]); // Dependency array chứa handleResize để đảm bảo listener sử dụng hàm memoized.

  // Trả về chiều rộng màn hình hiện tại.
  return screenWidth;
};

export default useScreenWidth;