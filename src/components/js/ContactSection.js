// src/components/js/ContactSection.js
import React from 'react';
import './../../components/css/ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Kết Nối Cùng BTEC – Chắp Cánh Ước Mơ</h2>
        <p className="contact-description">
          Bạn muốn tìm hiểu thêm về <span className="keyword">Cao đẳng quốc tế BTEC</span> hay hành trình học tập dành cho <span className="keyword">sĩ tử</span> trong <span className="keyword">mùa hè</span> này?
          Hãy để lại thông tin để chúng tôi liên hệ và tư vấn cho bạn.
        </p>

        <div className="contact-form-wrapper card-box">
          <h3>Đăng Ký Nhận Tư Vấn</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">Địa chỉ Email của bạn:</label>
              <input type="email" id="email" name="email" placeholder="Nhập email của bạn..." required />
            </div>
            <button type="submit" className="btn submit-btn">Đăng Ký Ngay</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;