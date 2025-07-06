// src/components/js/StudentJourney.js

import React from 'react';
import '../css/StudentJourney.css';
// Import hình ảnh liên quan đến sinh viên học tập, hoạt động, thành công
import studentSuccessImg from './../../assets/student-success.png'; // Ví dụ
import groupStudyImg from './../../assets/group-study.jpg'; // Ví dụ

function StudentJourney() {
  return (
    <section id="student" className="student-journey-section">
      <div className="container">
        <h2>Hành Trình Sĩ Tử - Vươn Tới Đỉnh Cao Tri Thức</h2>
        <p className="section-description">
          Mỗi <span className="keyword">sĩ tử</span> tại <span className="keyword">Cao đẳng quốc tế BTEC</span>
          đều được trang bị để trở thành những cá nhân ưu tú, với động lực học tập mạnh mẽ
          và tinh thần không ngừng vượt qua thử thách, đặc biệt trong không khí sôi động của <span className="keyword">mùa hè</span>.
        </p>

        <div className="journey-content">
          <div className="journey-item">
            <img src={studentSuccessImg} alt="Successful student" />
            <h3>Động Lực Học Tập Bền Bỉ</h3>
            <p>
              Chúng tôi tạo dựng môi trường khuyến khích sự tò mò, khám phá và đam mê học hỏi.
              Mỗi sinh viên được truyền cảm hứng để "gieo lên một ánh trong lành, Tô thêm màu sắc,
              ngát xanh nụ cười" [cite: 11] trên con đường học vấn.
            </p>
          </div>
          <div className="journey-item">
            <img src={groupStudyImg} alt="Students studying together" />
            <h3>Tinh Thần Vượt Khó Trong Môi Trường Quốc Tế</h3>
            <p>
              Đối mặt với những thách thức mới là cơ hội để phát triển. Sĩ tử BTEC được rèn luyện
              kỹ năng giải quyết vấn đề, tư duy phản biện, và khả năng thích nghi, vững tin giữa đời hiện sinh[cite: 12].
              BTEC là nơi "ngàn phương hội tụ bình minh, Gửi trao thông điệp, kết tình tri âm"[cite: 13].
            </p>
          </div>
        </div>
        <p className="call-to-action">
          Khám phá thêm về cuộc sống và cơ hội học tập dành cho <span className="keyword">sĩ tử</span> tại BTEC.
        </p>
      </div>
    </section>
  );
}

export default StudentJourney;