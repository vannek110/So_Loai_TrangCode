// src/components/js/TraditionalValues.js

import React from 'react';
import '../css/TraditionalValues.css';
// Import hình ảnh liên quan đến văn hóa, truyền thống Việt Nam
import aoDaiImg from './../../assets/aodai.jpg'; // Ví dụ
import lotusImg from './../../assets/lotus.jpg'; // Ví dụ

function TraditionalValues() {
  return (
    <section id="tradition" className="traditional-values-section">
      <div className="container">
        <h2>Giá Trị Cổ Truyền - Nền Tảng Vững Chắc Tương Lai</h2>
        <p className="section-description">
          Tại <span className="keyword">Cao đẳng quốc tế BTEC</span>, chúng tôi không chỉ đào tạo kiến thức hiện đại
          mà còn trân trọng gìn giữ và phát huy những giá trị <span className="keyword">cổ truyền</span>
          tuyệt vời của Việt Nam. Đây là những nét đẹp "vẫn in dấu cũ, đậm màu tương lai"[cite: 6].
        </p>

        <div className="values-grid">
          <div className="values-item">
            <img src={aoDaiImg} alt="Traditional Ao Dai" />
            <h3>Hồn Việt Trong Kiến Trúc Và Đời Sống</h3>
            <p>
              Từ những đường nét thiết kế tinh tế của trang web đến các hoạt động văn hóa,
              chúng tôi khéo léo lồng ghép hình ảnh áo dài, kiến trúc đình làng, và những phong tục
              tập quán để tạo nên không gian gần gũi, mang đậm bản sắc dân tộc.
            </p>
          </div>
          <div className="values-item">
            <img src={lotusImg} alt="Lotus flower" />
            <h3>Tinh Hoa Văn Hóa Trong Tư Duy</h3>
            <p>
              Những nét <span className="keyword">cổ truyền</span> không chỉ là hình ảnh mà còn là triết lý sống.
              BTEC khuyến khích <span className="keyword">sĩ tử</span> học hỏi từ những giá trị cha ông,
              từ đó hình thành phẩm chất tốt đẹp, tinh thần đoàn kết và ý chí vươn lên.
              "Bao điều chắt lọc tinh khôi, Thành niềm tự hào, sáng soi bạn hiền"[cite: 7].
            </p>
          </div>
        </div>
        <p className="call-to-action">
          Khám phá cách BTEC dung hòa truyền thống và hiện đại, tạo nên môi trường học tập độc đáo.
        </p>
      </div>
    </section>
  );
}

export default TraditionalValues;