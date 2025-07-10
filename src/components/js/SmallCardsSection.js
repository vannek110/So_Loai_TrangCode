// src/components/js/SmallCardsSection.js
import React from 'react';
import './../../components/css/SmallCardsSection.css';
import iconSummer from './../../assets/small-card-icon-1.jpg'; // Ví dụ icon
import iconStudent from './../../assets/small-card-icon-2.jpg';
import iconTradition from './../../assets/small-card-icon-3.jpg';

function SmallCardsSection() {
  return (
    <section className="small-cards-section">
      <div className="container">
        <h2 className="section-title">Tinh Hoa BTEC – Những Giá Trị Vượt Thời Gian</h2>
        <div className="small-cards-grid">
          <div className="card-box small-card-item">
            <img src={iconSummer} alt="Icon Mùa Hè" />
            <h3>Năng Lượng Mùa Hè</h3>
            <p>Không khí học tập sôi nổi, sáng tạo, tràn đầy sức sống của <span className="keyword">mùa hè</span>.</p>
          </div>
          <div className="card-box small-card-item">
            <img src={iconStudent} alt="Icon Sĩ Tử" />
            <h3>Tâm Huyết Sĩ Tử</h3>
            <p>Tinh thần kiên trì, vượt khó của mỗi <span className="keyword">sĩ tử</span> trên con đường tri thức.</p>
          </div>
          <div className="card-box small-card-item">
            <img src={iconTradition} alt="Icon Cổ Truyền" />
            <h3>Bản Sắc Cổ Truyền</h3>
            <p>Lồng ghép và phát huy những giá trị <span className="keyword">cổ truyền</span> văn hóa Việt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SmallCardsSection;