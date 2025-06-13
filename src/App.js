import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsersData } from "./Service/dataService";

import "./App.css";
import publicRoutes from "./routes/routes";

export default function App() {
  const [allUsersData, setAllUsersData] = useState(null);   // State để lưu trữ dữ liệu tất cả người dùng
  const [loadingUsers, setLoadingUsers] = useState(true);   // State để hiển thị trạng thái tải
  const [usersError, setUsersError] = useState(null);       // State để lưu lỗi

  useEffect(() => {
    async function fetchAllUsersData() { // Đổi tên hàm cho phù hợp
      try {
        // Gọi hàm để lấy dữ liệu. Giả sử bạn muốn lấy từ node 'users'
        // Nếu hàm getUsersData của bạn chấp nhận một path, thì sẽ là:
        const data = await getUsersData(''); // <--- Lấy tất cả user từ node 'users'
        setAllUsersData(data); // Cập nhật state
      } catch (error) {
        setUsersError("Không thể tải danh sách người dùng.");
      } finally {
        setLoadingUsers(false);
      }
    }

    fetchAllUsersData(); // Gọi hàm khi component mount

    // Không cần cleanup debounce ở đây trừ khi bạn có một logic debounce cụ thể cho việc fetch này.
    // Nếu không có debounceRef.current, bạn có thể bỏ phần return này đi.
    // return () => {
    //   if (debounceRef.current) clearTimeout(debounceRef.current);
    // };
  }, []); // [] rỗng vì bạn muốn fetch một lần khi ứng dụng khởi động, không phụ thuộc vào ID

  // Bạn có thể hiển thị trạng thái tải hoặc lỗi trên UI của App component nếu cần
  if (loadingUsers) {
    return <div>Đang tải dữ liệu người dùng cho ứng dụng...</div>;
  }

  if (usersError) {
    return <div>Lỗi tải dữ liệu người dùng: {usersError}</div>;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}