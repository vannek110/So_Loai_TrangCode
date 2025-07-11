// src/components/js/SummerAtBTEC.js

import React from 'react';
import '../css/SummerBTEC.css';

// Import ảnh liên quan đến mùa hè, sinh viên, hoạt động (ví dụ)
import summerCampusActivity from './../../assets/summer-activity.webp'; // Ảnh sinh viên hoạt động hè
import summerStudyVibes from './../../assets/summer-activity2.webp'; // Ảnh học tập mùa hè
import traditionalSummerFest from './../../assets/summer-activity3.jpeg'; // Ảnh lồng ghép cổ truyền vào hè


function SummerAtBTEC() {
  return (
    <section id="summer" className="summer-at-btec-section">
      <div className="container">
        <h2 className="section-title">Mùa Hè Tại BTEC – Nơi Nắng Vàng Gieo Mộng Lớn</h2>
        <p className="summer-description">
          Mùa hè không chỉ là khoảng lặng nghỉ ngơi, mà còn là bản giao hưởng của sức trẻ,
          nơi những <span className="keyword">sĩ tử</span> BTEC bứt phá giới hạn và gieo mầm cho những hoài bão lớn.
          Đây là thời điểm để vươn cánh, chạm thành ước ao.
        </p>

        <div className="summer-highlights-grid">
          <div className="highlight-item card-box">
            <img src={summerCampusActivity} alt="Hoạt động hè BTEC" className="highlight-image" />
            <h3>Năng Lượng Bùng Cháy</h3>
            <p>
              Từ những workshop công nghệ chuyên sâu, các buổi team-building sôi động, đến cuộc thi đầy thử thách,
              mỗi hoạt động tại BTEC đều mang hơi thở mới, ngập tràn ý thơ, giúp sinh viên vừa học, vừa chơi, vừa phát triển toàn diện.
            </p>
          </div>
          <div className="highlight-item card-box">
            <img src={summerStudyVibes} alt="Tinh thần học tập mùa hè" className="highlight-image" />
            <h3>Tinh Thần Sĩ Tử Kiên Cường</h3>
            <p>
              Mặc cho nắng hè gay gắt, <span className="keyword">sĩ tử</span> BTEC vẫn lặng lẽ học hành.
              Tinh thần vượt khó được rèn luyện qua từng dự án, từng kỳ thi,
              biến áp lực thành động lực để đạt được đỉnh thành.
              Bao điều chắt lọc tinh khôi, thành niềm tự hào, sáng soi bạn hiền.
            </p>
          </div>
          <div className="highlight-item card-box">
            <img src={traditionalSummerFest} alt="Mùa hè và giá trị cổ truyền" className="highlight-image" />
            <h3>Sắc Màu Cổ Truyền Hiện Đại</h3>
            <p>
              Mùa hè BTEC cũng là nơi những nét <span className="keyword">cổ truyền</span> phai đâu, vẫn in dấu cũ, đậm màu tương lai.
              Các giá trị văn hóa Việt được lồng ghép một cách hợp lý, hiện đại, chuyên nghiệp,
              tạo nên một không gian độc đáo, nơi ngàn phương hội tụ bình minh.
            </p>
          </div>
        </div>

        <p className="summer-outro">
          Hãy cùng <span className="keyword">BTEC</span> tô thêm màu sắc, ngát xanh nụ cười cho mùa hè của bạn,
          biến đây thành nơi tinh hoa hội tụ  và biến mọi ước mơ thành hiện thực.
        </p>
      </div>
    </section>
  );
}

export default SummerAtBTEC;