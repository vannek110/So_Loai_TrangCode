// src/components/js/ContactSection.js

import React, { useState, useEffect } from 'react';
import './../../components/css/ContactSection.css';
import Stepper, { Step } from './Stepper';

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    major: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFinalStepCompleted = () => {
    console.log("All steps completed! Form Data:", formData);
    setShowToast(true);

    // Ẩn toast sau 4 giây
    setTimeout(() => {
      setShowToast(false);
    }, 4000);

    // Gửi dữ liệu lên server nếu cần
    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Kết Nối Cùng BTEC – Chắp Cánh Ước Mơ</h2>
        <p className="contact-description">
          Bạn muốn tìm hiểu thêm về <span className="keyword">Cao đẳng quốc tế BTEC </span>
          hay hành trình học tập dành cho <span className="keyword">sĩ tử</span> trong <span className="keyword">mùa hè</span> này?
          Hãy đăng ký tư vấn để chúng tôi liên hệ và hỗ trợ bạn.
        </p>

        <div className="contact-stepper-wrapper card-box">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(`Current step: ${step}`);
            }}
            onFinalStepCompleted={handleFinalStepCompleted}
            backButtonText="Quay lại"
            nextButtonText="Tiếp tục"
          >
            <Step>
              <h3>Thông Tin Cơ Bản</h3>
              <p>Vui lòng điền thông tin để chúng tôi có thể liên hệ với bạn.</p>
              <div className="form-group">
                <label htmlFor="fullName">Họ và tên:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="09xx.xxx.xxx"
                />
              </div>
            </Step>

            <Step>
              <h3>Ngành Học Quan Tâm</h3>
              <p>Bạn quan tâm đến ngành nào tại BTEC?</p>
              <div className="form-group">
                <label htmlFor="major">Chọn ngành:</label>
                <select
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">-- Chọn ngành học --</option>
                  <option value="thiet-ke-do-hoa">Thiết Kế Đồ Họa</option>
                  <option value="lap-trinh-may-tinh">Lập Trình Máy Tính</option>
                  <option value="quan-tri-kinh-doanh">Quản Trị Kinh Doanh</option>
                  <option value="marketing">Bán Dẫn</option>
                  <option value="khac">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Lời nhắn cho BTEC (Tùy chọn):</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Ví dụ: Em muốn tìm hiểu về học bổng..."
                ></textarea>
              </div>
            </Step>

            <Step>
              <h3>Xác Nhận Thông Tin</h3>
              <p>Vui lòng kiểm tra lại thông tin trước khi gửi:</p>
              <div className="summary-info">
                <p><strong>Họ và tên:</strong> {formData.fullName || 'Chưa điền'}</p>
                <p><strong>Email:</strong> {formData.email || 'Chưa điền'}</p>
                <p><strong>Số điện thoại:</strong> {formData.phone || 'Chưa điền'}</p>
                <p><strong>Ngành quan tâm:</strong> {formData.major || 'Chưa chọn'}</p>
                <p><strong>Lời nhắn:</strong> {formData.message || 'Không có'}</p>
              </div>
              <p className="final-message">Bạn đã sẵn sàng gửi đăng ký tư vấn?</p>
            </Step>
          </Stepper>
        </div>

        {showToast && (
          <div className="custom-toast-center">
            <div className="toast-icon">✔</div>
            <p>Đăng ký tư vấn thành công! Chúng tôi sẽ liên hệ với bạn sớm.</p>
          </div>
        )}

        <p className="contact-note">
          Chúng tôi cam kết bảo mật thông tin cá nhân của bạn. Mọi thông tin sẽ được sử dụng chỉ để liên hệ và tư vấn.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
