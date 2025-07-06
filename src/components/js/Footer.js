// src/components/js/Footer.js

import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Cao đẳng quốc tế BTEC</h3>
            <p>Nơi Tinh Hoa Hội Tụ – Giữa Sắc Màu Mùa Hè</p>
            <p>Địa chỉ: [Thông tin địa chỉ chính xác của BTEC]</p>
            <p>Điện thoại: [Số điện thoại chính thức]</p>
            <p>Email: [Địa chỉ email chính thức]</p>
          </div>
          <div className="footer-links">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><a href="#home">Trang Chủ</a></li>
              <li><a href="#about">Giới Thiệu BTEC</a></li>
              <li><a href="#summer">Cảm Hứng Mùa Hè</a></li>
              <li><a href="#tradition">Giá Trị Cổ Truyền</a></li>
              <li><a href="#student">Hành Trình Sĩ Tử</a></li>
              <li><a href="#contact">Liên Hệ</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Kết nối với chúng tôi</h3>
            {/* Thêm các icon mạng xã hội nếu có, ví dụ */}
            <div className="social-icons">
              <a href="https://facebook.com/btec" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://youtube.com/btec" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              {/* Đảm bảo bạn đã cài đặt Font Awesome hoặc icon library tương tự */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cao đẳng quốc tế BTEC. All Rights Reserved.</p>
          <p>Thiết kế bởi Đội thi Trạng Code 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;