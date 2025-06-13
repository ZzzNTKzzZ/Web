import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../Config/firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Để điều hướng sau khi đăng xuất

import Navbar from '../../components/Navbar/Navbar';

function LoginAfter() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // Nếu không có người dùng, điều hướng về trang đăng nhập
      if (!currentUser) {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Bạn đã đăng xuất.');
      navigate('/login'); // Điều hướng về trang login sau khi đăng xuất
    } catch (err) {
      console.error("Lỗi đăng xuất:", err.message);
      alert('Không thể đăng xuất.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Đang tải trang Dashboard...</p>
      </div>
    );
  }

  // Nếu không có user (sau khi loading), sẽ tự động điều hướng bởi useEffect
  if (!user) {
    return null; // Hoặc một spinner nhỏ trong khi navigate
  }

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Navbar user={user} handleSignOut={handleSignOut} />

      <div className="container mx-auto p-8 pt-24"> {/* Thêm padding top để tránh Navbar */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Chào mừng đến Dashboard của bạn, {user.displayName || user.email}!</h1>
        <p className="text-gray-600 mb-4">Đây là nơi bạn có thể quản lý portfolio của mình.</p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Thông tin tài khoản:</h2>
          <p className="mb-2"><span className="font-medium">Email:</span> {user.email}</p>
          <p className="mb-2"><span className="font-medium">UID:</span> {user.uid}</p>
          {user.photoURL && (
            <div className="mt-4">
              <span className="font-medium">Ảnh đại diện:</span>
              <img src={user.photoURL} alt="Ảnh đại diện" className="w-16 h-16 rounded-full mt-2" />
            </div>
          )}
          {/* Thêm các tính năng quản lý portfolio tại đây */}
          <button
            onClick={() => alert("Đây là nút thêm dự án mới!")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Thêm Dự Án Mới
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginAfter;
