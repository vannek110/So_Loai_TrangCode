import React from 'react';
import './../../components/css/HeroSection.css';
import heroBg from './../../assets/hero-bg.jpg'; // Ảnh nền lớn
import anh1 from './../../assets/anh1.jpg';
import anh2 from './../../assets/anh2.jpg';
import anh3 from './../../assets/anh3.webp';
import anh4 from './../../assets/anh4.webp';
import anh5 from './../../assets/anh5.webp';
import anh6 from './../../assets/anh6.webp';
import anh7 from './../../assets/anh7.webp';
import anh8 from './../../assets/anh8.jpg';
import anh9 from './../../assets/anh9.jpg';
import anh10 from './../../assets/anh10.jpg';
import anh11 from './../../assets/anh11.jpg';
import anh12 from './../../assets/anh12.jpg';
import anh13 from './../../assets/anh13.jpg';
import anh14 from './../../assets/anh14.jpg';
import anh15 from './../../assets/anh15.jpg';
import anh16 from './../../assets/anh16.jpg';
import anh17 from './../../assets/anh17.jpg';
import anh18 from './../../assets/anh18.jpg';
import anh19 from './../../assets/anh19.png';
import anh20 from './../../assets/student-success.png';

function HeroSection() {
  const images = [
  anh1, anh2, anh3, anh4, anh5, anh6, anh7,
  anh8, anh9, anh10, anh11, anh12, anh13,
  anh14, anh15, anh16, anh17, anh18, anh19,anh20,
];

  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-content">
        <h1>BTEC Hè Rực Rỡ</h1>
        <p className="slogan-text">Nơi Tinh Hoa Hội Tụ – Hành Trình Sĩ Tử Vươn Xa</p>
        <p className="keywords-highlight">
          Cùng <span className="keyword">Cao đẳng quốc tế BTEC</span> khám phá{' '}
          <span className="keyword">mùa hè</span> rực rỡ, nơi tinh thần{' '}
          <span className="keyword">sĩ tử</span> hòa quyện với giá trị{' '}
          <span className="keyword">cổ truyền</span>.
        </p>
        <a href="#intro" className="btn hero-btn">
          Khám Phá Ngay
        </a>
      </div>
      <div className="carousel-container">
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ transform: `rotateY(${index * 18}deg) translateZ(650px)` }}
          >
            <img src={src} alt={`carousel-item-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;