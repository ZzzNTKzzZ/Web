// src/pages/Auth/Login/Login.js
import React, { useState } from "react";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { auth, googleProvider, githubProvider } from "../../../Config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import style from "./login.module.css";

function Login({ setActiveTab }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Xử lý đăng nhập bằng Email và Mật khẩu
  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    setError(null); // Reset lỗi trước mỗi lần thử đăng nhập

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Đăng nhập thành công, bạn có thể thông báo hoặc chuyển hướng
      alert("Đăng nhập thành công!");
      setEmail("");
      setPassword("");
      // Component cha LoginForm sẽ tự động cập nhật trạng thái người dùng
    } catch (err) {
      console.error("Lỗi đăng nhập:", err.code, err.message);
      let errorMessage = "Đã xảy ra lỗi. Vui lòng thử lại.";
      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage = 'Email không hợp lệ.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Tài khoản không tồn tại. Vui lòng kiểm tra email hoặc đăng ký.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Mật khẩu không đúng. Vui lòng thử lại.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Quá nhiều lần đăng nhập thất bại. Vui lòng thử lại sau ít phút.';
          break;
        default:
          errorMessage = err.message;
      }
      setError(errorMessage);
    }
  };

  // Xử lý đăng nhập bằng Google
  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Đăng nhập bằng Google thành công!');
    } catch (err) {
      console.error("Lỗi đăng nhập Google:", err.code, err.message);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Bạn đã đóng cửa sổ đăng nhập Google.');
      } else {
        setError('Không thể đăng nhập bằng Google. Vui lòng thử lại.');
      }
    }
  };

  // Xử lý đăng nhập bằng GitHub
  const handleGitHubSignIn = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, githubProvider);
      alert('Đăng nhập bằng GitHub thành công!');
    } catch (err) {
      console.error("Lỗi đăng nhập GitHub:", err.code, err.message);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Bạn đã đóng cửa sổ đăng nhập GitHub.');
      } else {
        setError('Không thể đăng nhập bằng GitHub. Vui lòng thử lại.');
      }
    }
  };


  return (
    <div className={`${style.loginContainer} flex flex-col gap-4`}>
      {error && (
        <p className="text-red-500 bg-red-100 border border-red-300 p-3 rounded-lg text-sm text-center mb-4">
          {error}
        </p>
      )}

      <div className={style.socialLogin}>
        <span className="text-center text-gray-500 text-sm mb-4">Sign in with account</span>
        <div className={`${style.socialIcons} flex justify-center gap-4 mb-4`}>
          <button
            type="button"
            // onClick={handleGoogleSignIn}
            className="bg-white border border-gray-300 rounded-full p-2 flex items-center justify-center w-12 h-12 hover:bg-gray-100 transition duration-200"
          >
            {/* <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" /> */}
            <FaGoogle style={{ color: "#DB4437" }} className={style.icon} />
          </button>
          <button
            type="button"
            // onClick={handleGitHubSignIn}
            className="bg-white border border-gray-300 rounded-full p-2 flex items-center justify-center w-12 h-12 hover:bg-gray-100 transition duration-200"
          >
            {/* <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg" alt="GitHub" className="w-6 h-6" /> */}
            <FaGithub style={{ color: "#333" }} className={style.icon} />
          </button>
        </div>
        <div className={`${style.divider} text-center text-gray-500 text-sm`}>Or</div>
      </div>

      <form onSubmit={handleEmailPasswordSignIn} className={`${style.form} flex flex-col gap-4`}>
        <input
          type="email"
          placeholder="Email"
          className={`${style.input} w-full px-4 py-3 border border-gray-300 rounded-lg text-base shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={`${style.input} w-full px-4 py-3 border border-gray-300 rounded-lg text-base shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit" // Quan trọng để form submit
          className={`${style.loginButton} w-full px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg text-base shadow-md hover:bg-orange-600 transition duration-200`}
        >
          Sign In
        </button>
        <a href="#" className={`${style.forgotPassword} text-center text-sm mt-4 text-orange-500 hover:underline font-medium`}>
          Forgot password?
        </a>
      </form>
    </div>
  );
}

export default Login;
