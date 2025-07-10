// src/components/js/MidSectionImageText.js
import React from 'react';
import './../../components/css/MidSectionImageText.css';

function MidSectionImageText({ image, title, description, buttonText, buttonHref, isReversed }) {
  return (
    <section className={`mid-section-image-text ${isReversed ? 'reversed' : ''}`}>
      <div className="container">
        <div className="content-wrapper">
          <div className="image-part" style={{ backgroundImage: `url(${image})` }}>
            {/* Có thể thêm overlay hoặc hiệu ứng vào đây */}
          </div>
          <div className="text-part card-box">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={buttonHref} className="btn">{buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MidSectionImageText;