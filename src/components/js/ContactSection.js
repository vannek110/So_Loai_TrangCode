// src/components/js/ContactSection.js

import React from 'react';
import '../css/ContactSection.css';
// import contactMap from './../../assets/contact-map.png'; // Ví dụ ảnh bản đồ hoặc minh họa liên hệ

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Liên Hệ & Đăng Ký Tư Vấn</h2>
        <p className="section-description">
          Bạn muốn tìm hiểu thêm về <span className="keyword">Cao đẳng quốc tế BTEC</span>
          hay hành trình học tập dành cho <span className="keyword">sĩ tử</span> trong <span className="keyword">mùa hè</span> này?
          Hãy liên hệ với chúng tôi để nhận được thông tin chi tiết và tư vấn tận tình.
        </p>

        <div className="contact-details">
          <div className="info-item">
            <h3>Địa chỉ</h3>
            <p>
              [Thông tin địa chỉ chính xác của BTEC do BTC cung cấp]
              {/* Ví dụ: Tòa nhà FPT Polytechnic, Đường số 22, Công viên phần mềm Quang Trung, Q.12, TP.HCM */}
            </p>
          </div>
          <div className="info-item">
            <h3>Điện thoại</h3>
            <p>[Số điện thoại liên hệ chính thức]</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>[Địa chỉ email chính thức]</p>
          </div>
          <div className="info-item">
            <h3>Website</h3>
            <p><a href="https://btec.fpt.edu.vn/" target="_blank" rel="noopener noreferrer">btec.fpt.edu.vn</a></p>
          </div>
        </div>

        {/* Form liên hệ đơn giản (tùy chọn) */}
        <div className="contact-form">
          <h3>Gửi Yêu Cầu Tư Vấn</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Họ và tên:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại:</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Nội dung:</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn-submit">Gửi yêu cầu</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;