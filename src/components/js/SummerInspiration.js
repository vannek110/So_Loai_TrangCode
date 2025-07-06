// src/components/js/SummerInspiration.js

import React from 'react';
import '../css/SummerInspiration.css';
// Import hình ảnh liên quan đến mùa hè, học sinh, không khí thi cử
import summerStudyImg from './../../assets/summer-study.jpg'; // Ví dụ
import brightColorsImg from './../../assets/bright-colors.webp'; // Ví dụ

function SummerInspiration() {
  return (
    <section id="summer" className="summer-inspiration-section">
      <div className="container">
        <h2>Cảm Hứng Mùa Hè - Nơi Ước Mơ Khởi Sắc</h2>
        <p className="section-description">
          Mùa hè không chỉ là nắng vàng rực rỡ mà còn là mùa của những nỗ lực thầm lặng
          và những khát vọng vươn tới. Tại <span className="keyword">Cao đẳng quốc tế BTEC</span>,
          chúng tôi tin rằng mỗi <span className="keyword">sĩ tử</span> đều mang trong mình ngọn lửa
          bứt phá, sẵn sàng biến những thách thức thành cơ hội.
        </p>

        <div className="inspiration-grid">
          <div className="inspiration-item">
            <img src={summerStudyImg} alt="Students studying in summer" />
            <h3>Tinh Thần Vượt Khó Của Sĩ Tử</h3>
            <p>
              "Sĩ tử lặng lẽ học hành, Mong ngày vươn cánh, chạm thành ước ao".
              Đó là tinh thần kiên trì, bền bỉ của thế hệ trẻ BTEC, luôn nỗ lực học tập,
              rèn luyện để chinh phục tri thức và đạt được ước mơ trên hành trình khám phá mùa hè.
            </p>
          </div>
          <div className="inspiration-item">
            <img src={brightColorsImg} alt="Vibrant summer colors" />
            <h3>Sắc Màu Rực Rỡ Mùa Hè</h3>
            <p>
              Mùa hè tại BTEC tràn đầy năng lượng và sắc màu. Từ những buổi học sôi nổi
              đến các hoạt động ngoại khóa ý nghĩa, mỗi khoảnh khắc đều được tô điểm bằng
              sự nhiệt huyết và sáng tạo, mang hơi thở mới, ngập tràn ý thơ.
            </p>
          </div>
        </div>
        <p className="call-to-action">
          Hãy cùng BTEC đón chào một <span className="keyword">mùa hè</span> đầy ý nghĩa,
          nơi mỗi nỗ lực của <span className="keyword">sĩ tử</span> được đền đáp xứng đáng.
        </p>
      </div>
    </section>
  );
}

export default SummerInspiration;