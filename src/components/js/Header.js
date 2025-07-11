import React, { useState, useEffect } from 'react';
import './../../components/css/Header.css';
import BTECLogo from './../../assets/btec-logo.png.png';
import BTECLogoWhite from './../../assets/btec-logo.png.png';

function Header({ onChatToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-section">
          <img
            src={isScrolled ? BTECLogoWhite : BTECLogo}
            alt="BTEC Logo"
            className="btec-logo"
          />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#intro">Giới Thiệu</a></li>
            <li><a href="#summer">Mùa Hè BTEC</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </nav>

        {/* Nút Nhận Tư Vấn gọi chatbot */}
        <button className="get-quote-btn" onClick={onChatToggle}>
          Nhận Tư Vấn
        </button>
      </div>
    </header>
  );
}

export default Header;
