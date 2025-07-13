// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import './ThemeContext.css';

// 1. Tạo Context
const ThemeContext = createContext();

// 2. Tạo Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Mặc định là light mode

  // Hàm để chuyển đổi theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Mỗi khi theme thay đổi, thêm hoặc xóa class 'dark' khỏi thẻ <body>
  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Tạo custom hook để sử dụng context dễ dàng hơn
export const useTheme = () => {
  return useContext(ThemeContext);
};
