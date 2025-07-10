// src/components/js/IntroBTEC.js
import React from 'react';
import './../../components/css/IntroBTEC.css';
// import introIcon1 from './../../assets/intro-icon-1.png'; // Nếu bạn có icon
// import introIcon2 from './../../assets/intro-icon-2.png';
// import introIcon3 from './../../assets/intro-icon-3.png';

function IntroBTEC() {
  return (
    <section id="intro" className="intro-btec-section">
      <div className="container">
        <h2 className="section-title">Cách BTEC Kiến Tạo Tương Lai Sĩ Tử</h2>
        <p className="intro-description">
          Tại <span className="keyword">Cao đẳng quốc tế BTEC</span>, chúng tôi không ngừng đổi mới để mang đến
          một hành trình học tập độc đáo và hiệu quả, giúp <span className="keyword">sĩ tử</span> vươn mình trong <span className="keyword">mùa hè</span> này.
        </p>
        <div className="info-cards-grid">
          <div className="card-box info-card">
            {/* <img src={introIcon1} alt="Icon Tư Duy" /> */}
            <h3>Tư Duy Đột Phá</h3>
            <p>Phát triển kỹ năng giải quyết vấn đề, tư duy phản biện cho một tương lai năng động.</p>
          </div>
          <div className="card-box info-card">
            {/* <img src={introIcon2} alt="Icon Công Nghệ" /> */}
            <h3>Kỹ Năng Thực Tiễn</h3>
            <p>Học lập trình web, thiết kế đồ họa, marketing số... theo chuẩn quốc tế.</p>
          </div>
          <div className="card-box info-card">
            {/* <img src={introIcon3} alt="Icon Kết Nối" /> */}
            <h3>Hội Nhập Toàn Cầu</h3>
            <p>Môi trường học tập đa văn hóa, mở rộng cơ hội nghề nghiệp trên phạm vi quốc tế.</p>
          </div>
        </div>
        <a href="https://btec.fpt.edu.vn/" className="btn view-details-btn">Khám phá chi tiết</a>
      </div>
    </section>
  );
}
export default IntroBTEC;