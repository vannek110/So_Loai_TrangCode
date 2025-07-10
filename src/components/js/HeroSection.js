// src/components/js/HeroSection.js
import React from 'react';
import './../../components/css/HeroSection.css';
import heroBg from './../../assets/hero-bg.jpg'; // Ảnh nền lớn

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1>BTEC Hè Rực Rỡ</h1>
        <p className="slogan-text">Nơi Tinh Hoa Hội Tụ – Hành Trình Sĩ Tử Vươn Xa</p>
        <p className="keywords-highlight">
          Cùng <span className="keyword">Cao đẳng quốc tế BTEC</span> khám phá <span className="keyword">mùa hè</span> rực rỡ,
          nơi tinh thần <span className="keyword">sĩ tử</span> hòa quyện với giá trị <span className="keyword">cổ truyền</span>.
        </p>
        <a href="#intro" className="btn hero-btn">Khám Phá Ngay</a>
      </div>
    </section>
  );
}
export default HeroSection;