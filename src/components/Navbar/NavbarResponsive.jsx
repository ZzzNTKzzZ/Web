import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useScrollDirection from "../../Hooks/Navbar/useScrollDirection";

import style from "./navbarResponsive.module.css";

function NavbarResponsive() {
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle hamburger menu (mở/đóng)
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Hàm xử lý khi click vào nút Sign In
  const handleSignInClick = () => {
    setIsOpen(false); // Đóng menu sau khi click
    navigate("/loginForm", { state: { tab: "login" } });
  };

  // Hàm xử lý khi click vào nút Sign Up
  const handleSignUpClick = () => {
    setIsOpen(false); // Đóng menu sau khi click
    navigate("/loginForm", { state: { tab: "register" } }); // Chuyển hướng đến trang Register (giả sử route là /register)
  };

  // useEffect để xử lý việc click bên ngoài menu để đóng menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Nếu menu đang mở và click không phải vào nút toggle hoặc menu chính
      if (
        isOpen &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target) && // Không click vào nút toggle
        menuRef.current &&
        !menuRef.current.contains(e.target) // Không click vào menu
      ) {
        setIsOpen(false); // Đóng menu
      }
    };

    // Đăng ký event listener cho sự kiện click trên toàn bộ cửa sổ
    window.addEventListener("click", handleOutsideClick);

    // Cleanup function: Gỡ bỏ event listener khi component unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]); // Dependency array: chạy lại khi isOpen thay đổi

  // useEffect quan trọng để ngăn cuộn trang khi menu mở
  useEffect(() => {
    // Lưu trữ trạng thái gốc của body overflow, position và vị trí cuộn
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyLeft = document.body.style.left;
    const originalBodyRight = document.body.style.right;

    let scrollYPosition = 0; // Biến để lưu vị trí cuộn hiện tại

    if (isOpen) {
      // Khi menu mở:
      scrollYPosition = window.scrollY; // Lưu vị trí cuộn
      document.body.style.overflow = "hidden"; // Ngăn cuộn
      document.body.style.position = "fixed"; // Cố định body
      document.body.style.top = `-${scrollYPosition}px`; // Giữ body ở vị trí cuộn hiện tại
      document.body.style.left = "0"; // Đảm bảo body chiếm toàn bộ chiều rộng
      document.body.style.right = "0"; // Đảm bảo body chiếm toàn bộ chiều rộng
    } else {
      // Khi menu đóng:
      // Phục hồi lại trạng thái body về mặc định
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.left = originalBodyLeft;
      document.body.style.right = originalBodyRight;

      // Cuộn trang trở lại vị trí ban đầu (nếu có sự thay đổi do position: fixed)
      // Sử dụng setTimeout để đảm bảo các style của body đã được reset hoàn toàn trước khi cuộn
      window.scrollTo(0, scrollYPosition);
    }

    // Cleanup function: Đảm bảo body style được reset khi component unmount
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.left = originalBodyLeft;
      document.body.style.right = originalBodyRight;
    };
  }, [isOpen]); // Dependency array: useEffect sẽ chạy lại khi isOpen thay đổi

  return (
    <div className={style.navbarResponsive}>
      <div className={style.itemLeft}>
        <div className={style.logo}></div>
        <p>Portlify</p>
      </div>

      <div className={style.itemRight}>
        <button
          aria-label="mobile menu"
          className={`${style.navbarToggle} ${isOpen ? style.open : ""}`}
          onClick={handleToggleClick}
          ref={toggleRef} /* Đã gắn ref cho nút hamburger */
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          ref={menuRef} /* Đã gắn ref cho menu overlay (ul) */
          className={`${style.menuLeft} ${isOpen ? style.collapse : ""}`}
        >
          {/* Logo và Portlify bên trong menu (có thể cần điều chỉnh styling) */}
          <div className={style.itemLeft}>
            <div className={style.logo}></div>
            <p>Portlify</p>
          </div>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="/about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>

          <div className={style.btnMenu}>
            <button className={style.btnSignIn} onClick={handleSignInClick}>
              Sign In
            </button>
            <button className={style.btnSignUp} onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavbarResponsive;
