// src/App.js
import React, { useState } from 'react';
import './index.css';

// Import components
import MouseTrail from './components/js/MouseTrail';
import Header from './components/js/Header';
import HeroSection from './components/js/HeroSection';
import IntroBTEC from './components/js/IntroBTEC';
import MidSectionImageText from './components/js/MidSectionImageText';
import SummerBTEC from './components/js/SummerBTEC';
import SmallCardsSection from './components/js/SmallCardsSection';
import InspirationGallery from './components/js/InspirationGallery';
import ContactSection from './components/js/ContactSection';
import Footer from './components/js/Footer';
import ChatBot from './components/js/ChatBot';

// Import assets
import summerVibesImg from './assets/mid-section-img-1.jpg';
import ancientWisdomImg from './assets/mid-section-img-2.jpg';

function App() {
  const [showChatBot, setShowChatBot] = useState(false); // Mặc định không hiển thị

  const handleChatToggle = () => {
    setShowChatBot(true); // Mở chatbot khi bấm nút tư vấn
  };

  const handleChatClose = () => {
    setShowChatBot(false); // Đóng chatbot
  };

  return (
    <div className="App">
      <MouseTrail />
      <Header onChatToggle={handleChatToggle} />

      <main>
        <HeroSection />
        <IntroBTEC />
        <SummerBTEC />
        <MidSectionImageText
          image={summerVibesImg}
          title="Chào Hè Rực Rỡ Cùng BTEC!"
          description="Đón chào một mùa hè đầy năng lượng và khám phá tại Cao đẳng quốc tế BTEC. Nơi đây, mỗi sĩ tử sẽ tìm thấy con đường riêng để phát triển."
          buttonText="Xem Lộ Trình Học"
          buttonHref="https://btec.fpt.edu.vn/"
          isReversed={false}
        />
        <SmallCardsSection />
        <MidSectionImageText
          image={ancientWisdomImg}
          title="Giá Trị Cổ Truyền – Nền Tảng Vững Chắc"
          description="BTEC tự hào gìn giữ và phát huy những nét đẹp cổ truyền Việt Nam, lồng ghép vào chương trình học để tạo nên những cá nhân toàn diện."
          buttonText="Khám phá di sản"
          buttonHref="#intro"
          isReversed={true}
        />
        <InspirationGallery />
        <ContactSection />
      </main>

      <Footer />

      {/* Chỉ hiển thị ChatBot khi showChatBot = true */}
      {showChatBot && <ChatBot onClose={handleChatClose} />}
    </div>
  );
}

export default App;
