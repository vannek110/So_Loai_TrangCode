// src/components/js/IntroBTEC.js
import React from 'react';
import './../../components/css/IntroBTEC.css';

const programs = [
    {
        name: 'Lập trình máy tính',
        description: 'Kiến tạo TƯƠNG LAI số: Phát triển phần mềm, AI, Web, ứng dụng. Trở thành Kỹ sư phần mềm, AI Developer.',
        link: 'https://btec.fpt.edu.vn/nganh/lap-trinh-may-tinh'
    },
    {
        name: 'Quản trị kinh doanh',
        description: 'Trở thành NHÀ LÃNG ĐẠO: Nắm vững Marketing, Tài chính, Quản lý để khởi nghiệp, điều hành doanh nghiệp hoặc chuyên gia Marketing số.',
        link: 'https://btec.fpt.edu.vn/nganh/quan-tri-kinh-doanh'
    },
    {
        name: 'Thiết kế đồ họa',
        description: 'Biến SÁNG TẠO thành giá trị: Khám phá UI/UX, Web, nhận diện thương hiệu. Tự tin làm Designer, Art Director.',
        link: 'https://btec.fpt.edu.vn/nganh/thiet-ke-do-hoa'
    },
    {
        name: 'Kỹ thuật + Công nghệ bán dẫn',
        description: 'Đón đầu CÔNG NGHỆ CHIP: Đi sâu vào ngành bán dẫn, thiết kế vi mạch. Trở thành Kỹ sư bán dẫn, góp phần tạo nên "trái tim" công nghệ.',
        link: 'https://btec.fpt.edu.vn/tuyen-sinh-cong-nghe-ban-dan-2025/'
    },
];

function IntroBTEC() {
    return (
        <section id="intro-split" className="intro-btec-split-section offset-anchor">

            {/* PHẦN TEXT TRÊN ĐẦU BÊN PHẢI */}
            <div className="top-header-area">
                <h3 className="top-right-title">Các ngành học tại BTEC FPT</h3>
            </div>


            {/* CỘT BÊN TRÁI CHÍNH */}
            <div className="split-left-column">
                <div className="left-content-wrapper">
                    <h2 className="left-title">Chào mừng mùa hè rực rỡ của các sĩ tử!</h2> {/* Đã thay đổi tiêu đề */}
                    <p className="left-description">
                        Kỳ thi quan trọng đã khép lại, cánh cửa tương lai đang rộng mở. BTEC FPT tự hào đồng hành cùng các bạn 2K7 trên hành trình khám phá tiềm năng, trang bị kiến thức và kỹ năng chuẩn quốc tế để tự tin hội nhập và bứt phá trong kỷ nguyên số.
                    </p>
                    <a href="https://btec.fpt.edu.vn/lien-he" className="btn left-cta-btn">Khám phá ngay</a> {/* Nút CTA điều chỉnh */}
                    <a href="https://btec.fpt.edu.vn/trac-nghiem-nghe-nghiep/" className="btn left-cta-btn">Trắc nghiệm nghề nghiệp</a>
                </div>
            </div>

            {/* CỘT BÊN PHẢI CHỨA CÁC NGÀNH HỌC */}
            <div className="split-right-main-column">
                <div className="program-list-container">
                    {programs.map((program, index) => (
                        <a key={index} href={program.link} className="program-list-item">
                            <h3>{program.name}</h3>
                            <p>{program.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IntroBTEC;