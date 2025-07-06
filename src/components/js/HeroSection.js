import React from 'react';
import '../css/HeroSection.css';
import summerBg from './../../assets/anh-truong.png.jpg'; 

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${summerBg})` }}>
      <div className="hero-content">
        <h1>BTEC GIỮA SẮC MÀU MÙA HÈ – NƠI TINH HOA HỘI TỤ</h1>
        <p className="slogan">
          Mùa hè gió thổi lao xao, Trang đời mới mở, bước vào mộng xanh. [cite: 4]
          Sĩ tử lặng lẽ học hành, Mong ngày vươn cánh, chạm thành ước ao. [cite: 5]
        </p>
        <p className="keywords-highlight">
          Khám phá hành trình tại <span className="keyword">Cao đẳng quốc tế BTEC</span>,
          nơi tinh thần <span className="keyword">sĩ tử</span> hòa quyện cùng giá trị
          <span className="keyword">cổ truyền</span> trong không khí rực rỡ <span className="keyword">mùa hè</span>.
        </p>
        <a href="#about" className="btn-learn-more">Tìm hiểu thêm về BTEC</a>
      </div>
    </section>
  );
}

export default HeroSection;