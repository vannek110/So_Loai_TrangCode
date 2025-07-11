import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import BTECLogo from './../../assets/btec-logo.png.png'; // Giả định đây là logo mặc định (ví dụ: màu)
import BTECLogoWhite from './../../assets/btec-logo.png.png'; // Giả định đây là logo màu trắng (nếu có file này)
// Nếu bạn chỉ có 1 file logo và nó tự đổi màu qua CSS, chỉ cần import 1 cái

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
          {/* Bọc logo trong thẻ <a> để nó có thể click được */}
          {/* Dẫn về đầu trang (có thể dùng "#top" nếu bạn có id="top" ở <body> hoặc <div> ngoài cùng) */}
          {/* Hoặc về "/" nếu đây là ứng dụng Router và bạn muốn về trang chủ */}
          <a href="https://btec.fpt.edu.vn/"> {/* Link về đầu trang */}
            <img
              src={isScrolled ? BTECLogoWhite : BTECLogo} // Logo đổi màu khi scroll
              alt="BTEC Logo"
              className="btec-logo"
            />
          </a>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="https://btec.fpt.edu.vn/">Trang Chủ</a></li> {/* Vẫn là #home hoặc "/" */}
            <li><a href="#intro-split">Giới Thiệu</a></li> {/* CHỈNH SỬA: id của section IntroBTEC */}
            <li><a href="#summer">Mùa Hè BTEC</a></li> {/* CHỈNH SỬA: id mới cho section Mùa Hè */}
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