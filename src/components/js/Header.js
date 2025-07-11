// src/components/js/Header.js

import React, { useState, useEffect } from 'react';
import './../../components/css/Header.css';
import BTECLogo from './../../assets/btec-logo.png.png'; // Logo BTEC (màu cho nền sáng)
import BTECLogoWhite from './../../assets/btec-logo.png.png'; // Logo BTEC trắng (cho nền tối khi cuộn)

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-section">
          <img
            src={isScrolled ? BTECLogoWhite : BTECLogo}
            alt="BTEC International College Logo"
            className="btec-logo"
          />
          <span className="header-slogan">
            {isScrolled ? '' : 'Nơi Tinh Hoa Hội Tụ'}
          </span>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#intro">Giới Thiệu</a></li>
            <li><a href="#summer">Mùa Hè BTEC</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </nav>
        <button className="get-quote-btn">Nhận Tư Vấn</button>
      </div>
    </header>
  );
}

export default Header;