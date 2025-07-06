import React from 'react';
import '../css/Header.css'; // Component-specific styles
import BTECLogo from './../../assets/btec-logo.png.png'; // Make sure to place your logo here

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={BTECLogo} alt="BTEC International College Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#about">Giới Thiệu BTEC</a></li>
            <li><a href="#summer">Mùa Hè & Sĩ Tử</a></li>
            <li><a href="#tradition">Giá Trị Cổ Truyền</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;