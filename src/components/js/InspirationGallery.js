// src/components/js/InspirationGallery.js
import React from 'react';
import './../../components/css/InspirationGallery.css';
import galleryImg1 from './../../assets/gallery-img-1.jpg';
import galleryImg2 from './../../assets/hero-bg.webp';
import galleryImg3 from './../../assets/gallery-img-2.webp';

function InspirationGallery() {
  return (
    <section className="inspiration-gallery-section">
      <div className="container">
        <h2 className="section-title">Khoảnh Khắc Đáng Nhớ Cùng BTEC</h2>
        <div className="gallery-layout">
          <div className="gallery-text card-box">
            <h3>Vô Vàn Cảm Hứng</h3>
            <p>
              Mỗi ngày tại <span className="keyword">Cao đẳng quốc tế BTEC</span> đều là một nguồn cảm hứng mới.
              Từ những buổi học đến các hoạt động ngoại khóa sôi nổi,
              chúng tôi tạo ra không gian để <span className="keyword">sĩ tử</span> phát triển toàn diện.
              "Dáng xưa vọng lại chơi vơi, vững tin cổ tích, giữa đời hiện sinh."
            </p>
          </div>
          <div className="gallery-images">
            <img src={galleryImg1} alt="BTEC Student Life 1" className="gallery-img top-left" />
            <img src={galleryImg2} alt="BTEC Student Life 2" className="gallery-img bottom-left" />
            <img src={galleryImg3} alt="BTEC Student Life 3" className="gallery-img right" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default InspirationGallery;