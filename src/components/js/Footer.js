// src/components/js/Footer.js
import React from 'react';
import './../../components/css/Footer.css';
import BTECLogoWhite from './../../assets/btec-logo.png.png'; // Nếu có logo trắng cho nền tối
// Hoặc sử dụng lại BTECLogo nếu nó hiển thị tốt trên nền tối

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-branding">
            {/* Nếu có logo trắng, dùng nó, không thì dùng logo thường nếu hợp */}
            <img src={BTECLogoWhite || './../../assets/btec-logo.png.png'} alt="BTEC International College Logo" />
            <p>Cao đẳng quốc tế – Ươm Mầm Tinh Hoa.</p>
          </div>
          <div className="footer-links">
            <h4>Thông tin liên hệ</h4>
            <h5>Địa chỉ:</h5>
            <li>
              Hà Nội: Tòa BTEC FPT, Trịnh Văn Bô, Nam Từ Liêm, Hà Nội.
            </li>
            <li>
              Hồ Chí Minh: Toà F, công viên phần mềm Quang Trung, P. Tân Chánh Hiệp, Q. 12, TP. Hồ Chí Minh.
            </li>
            <li>
              Đà Nẵng: 66 Võ Văn Tần, Q. Thanh Khê, TP. Đà Nẵng.
            </li>
            <li>
              Cần Thơ: Đường số 22, Phường Thường Thạnh, Quận Cái Răng, TP. Cần Thơ.
            </li>
          </div>
          <div className="footer-contact">
            <h6>Điện thoại:</h6>
            <li>
              Hà Nội: 098 109 05 13
            </li>
            <li>
              Hồ Chí Minh: 035 385 21 38
            </li>
            <li>
              Đà Nẵng: 032 757 57 27
            </li>
            <li>
              Cần Thơ: 096 705 76 05
            </li>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cao đẳng quốc tế BTEC. All Rights Reserved.</p>
          <p className="made-with">
            {/* Có thể thêm icon Visily nếu muốn và có nguồn */}
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;