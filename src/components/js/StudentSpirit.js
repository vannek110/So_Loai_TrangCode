// frontend/src/components/js/StudentSpirit.js
import React from 'react';
import '../css/StudentSpirit.css';

function StudentSpirit() {
  return (
    <section className="student-spirit-section">
      <div className="container">
        <h2>Cao đẳng quốc tế BTEC - Nơi Hội Tụ Tinh Hoa, Khai Phá Tiềm Năng</h2>
        <p>
          "Ngàn phương hội tụ bình minh, Gửi trao thông điệp, kết tình tri âm." BTEC không chỉ mang đến kiến thức, mà còn là cộng đồng nơi mỗi sĩ tử tìm thấy nguồn cảm hứng và cơ hội phát triển toàn diện.
        </p>
        <div className="testimonials-placeholder">
          <h3>Các câu chuyện thành công:</h3>
          <ul>
            <li>Sinh viên A: Đạt học bổng toàn phần nhờ nỗ lực không ngừng nghỉ tại BTEC.</li>
            <li>Sinh viên B: Phát triển dự án khởi nghiệp thành công từ ý tưởng tại trường.</li>
            {/* Sẽ thay bằng Component testimonial thực tế sau */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default StudentSpirit;