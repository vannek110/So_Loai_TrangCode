// src/App.js
import React from 'react';
import './index.css';



// Import components
import MouseTrail from './components/js/MouseTrail';

import Header from './components/js/Header';
import HeroSection from './components/js/HeroSection';
import IntroBTEC from './components/js/IntroBTEC';
import MidSectionImageText from './components/js/MidSectionImageText';
import SmallCardsSection from './components/js/SmallCardsSection';
import InspirationGallery from './components/js/InspirationGallery';
import ContactSection from './components/js/ContactSection';
import Footer from './components/js/Footer';

// Import assets (ví dụ ảnh cho MidSectionImageText)
import summerVibesImg from './assets/mid-section-img-1.jpg';
import ancientWisdomImg from './assets/mid-section-img-2.jpg';

function App() {
  return (
    <div className="App">
      <MouseTrail />
      <Header />
      <main>
        <HeroSection />
        <IntroBTEC />
        {/* Phần ảnh lớn ngang đầu tiên */}
        <MidSectionImageText
          image={summerVibesImg}
          title="Chào Hè Rực Rỡ Cùng BTEC!"
          description="Đón chào một mùa hè đầy năng lượng và khám phá tại Cao đẳng quốc tế BTEC. Nơi đây, mỗi sĩ tử sẽ tìm thấy con đường riêng để phát triển."
          buttonText="Xem Lộ Trình Học"
          buttonHref="https://btec.fpt.edu.vn/"
          isReversed={false}
        />
        <SmallCardsSection />
        {/* Phần ảnh lớn ngang thứ hai, đảo ngược vị trí */}
        <MidSectionImageText
          image={ancientWisdomImg}
          title="Giá Trị Cổ Truyền – Nền Tảng Vững Chắc"
          description="BTEC tự hào gìn giữ và phát huy những nét đẹp cổ truyền Việt Nam, lồng ghép vào chương trình học để tạo nên những cá nhân toàn diện."
          buttonText="Khám phá di sản"
          buttonHref="#intro" // Hoặc một section khác về truyền thống
          isReversed={true}
        />
        <InspirationGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;