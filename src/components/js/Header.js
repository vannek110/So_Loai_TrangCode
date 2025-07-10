// src/components/js/Header.js
import React from 'react';
import './../../components/css/Header.css'; // Đường dẫn tới CSS
import BTECLogo from './../../assets/btec-logo.png.png'; // Logo BTEC

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img src={BTECLogo} alt="BTEC International College Logo" />
          <span className="header-slogan">Nơi Tinh Hoa Hội Tụ</span>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#intro">Giới Thiệu</a></li>
            <li><a href="#summer">Mùa Hè BTEC</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;