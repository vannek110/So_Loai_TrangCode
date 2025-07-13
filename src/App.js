// src/App.js
import React, { useState } from "react";
import "./index.css";

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

  // Style để nút bấm luôn nổi ở góc dưới bên phải
  const buttonStyle = {
    position: "fixed",
    bottom: "100px",
    right: "37px",
    zIndex: 1001, // Đảm bảo nó nổi trên cả ChatBot
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "var(--card-bg)",
    color: "var(--heading-color)",
    border: "1px solid var(--heading-color)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 4px 12px var(--shadow-light)",
    transition:
      "transform 0.2s ease, background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Hiển thị icon mặt trăng hoặc mặt trời tùy vào theme hiện tại */}
      {/* Bạn cần đảm bảo đã import FontAwesome trong index.html */}
      {theme === "light" ? (
        <i className="fas fa-moon"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </button>
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
