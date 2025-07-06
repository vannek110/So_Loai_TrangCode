import React from 'react';
import '../css/AboutBTEC.css';
// Assume you'll get official info and images from BTC

function AboutBTEC() {
  return (
    <section id="about" className="about-btec-section">
      <div className="container">
        <h2>Giới Thiệu về Cao đẳng quốc tế BTEC</h2>
        <div className="about-content">
          <div className="text-content">
            <p>
              Cao đẳng quốc tế BTEC (Pearson BTEC Higher National Diploma) là chương trình đào tạo quốc tế
              được công nhận rộng rãi trên toàn cầu.  Tại BTEC, sinh viên được trang bị kiến thức,
              kỹ năng thực tiễn và tư duy sáng tạo, sẵn sàng cho sự nghiệp trong môi trường hội nhập.
              Mục tiêu của vòng sơ loại là đánh giá năng lực tư duy, sáng tạo, kỹ năng lập trình web, khả năng thể hiện chủ đề qua sản phẩm số, cũng như nhận diện các gương mặt tiềm năng cho các vòng tiếp theo. [cite: 2]
            </p>
            <p>
              Với triết lý giáo dục tiên tiến và đội ngũ giảng viên chuyên nghiệp, BTEC cam kết mang đến
              môi trường học tập năng động, nơi tinh hoa hội tụ và chắp cánh ước mơ cho thế hệ trẻ.
            </p>
            {/* More detailed information about BTEC from the provided resources */}
          </div>
          <div className="image-content">
            {/* Use official BTEC images provided by BTC */}
            <img src="/path/to/btec-campus-image.jpg" alt="BTEC Campus" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBTEC;