// src/App.js
import React, { useState } from "react";
import "./index.css"; // Đảm bảo file CSS này được import

import { useTheme } from "./context/ThemeContext";

// Import components
import MouseTrail from "./components/js/MouseTrail";
import Header from "./components/js/Header";
import HeroSection from "./components/js/HeroSection";
import IntroBTEC from "./components/js/IntroBTEC";
import MidSectionImageText from "./components/js/MidSectionImageText";
import SummerBTEC from "./components/js/SummerBTEC";
import SmallCardsSection from "./components/js/SmallCardsSection";
import InspirationGallery from "./components/js/InspirationGallery";
import ContactSection from "./components/js/ContactSection";
import Footer from "./components/js/Footer";
import ChatBot from "./components/js/ChatBot";

// Import assets
import summerVibesImg from "./assets/mid-section-img-1.jpg";
import ancientWisdomImg from "./assets/mid-section-img-2.jpg";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // Wrapper cho switch để định vị và thêm style nền
    <div className="theme-switch-wrapper">
      <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme === "dark"} // Nếu theme là dark, checkbox được checked
          onChange={toggleTheme}
          title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
        />
        <span className="slider round">
          {/* Icons cho mặt trăng và mặt trời */}
          {/* Đảm bảo FontAwesome đã được import trong index.html hoặc tương tự */}
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
        </span>
      </label>
    </div>
  );
};

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

      {/* Đặt ThemeToggleButton ở đây */}
      <ThemeToggleButton />

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
          buttonHref="https://btec.fpt.edu.vn/thong-diep-tam-nhin-su-menh/"
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