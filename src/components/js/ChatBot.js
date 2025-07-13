// src/components/js/ChatBot.js

import React, { useState, useRef, useEffect } from "react"; // Thêm useRef, useEffect
import "./../../components/css/ChatBot.css";
import ChatBotIMG from "./../../assets/ChatBotIconWhite.png";
import BTECLogo from './../../assets/btec-logo.png.png';


const ChatBot = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Chào bạn! Mình có thể hỗ trợ gì về BTEC?" },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null); // Ref để cuộn xuống cuối tin nhắn

  // Cuộn xuống cuối tin nhắn mỗi khi tin nhắn thay đổi
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);


  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotReply(input) };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotReply = (text) => {
  const msg = text.toLowerCase();

    // Các câu trả lời của bot (không thay đổi)
  if (/^(hi|hello|hey|xin chào|chào bạn|chào|good (morning|afternoon|evening)|greetings)/i.test(msg)) {
    return "👋 Chào bạn! Mình là trợ lý siêu cấp của Cao Đẳng Anh Quốc BTEC FPT – luôn sẵn sàng giúp bạn, kể cả 2h sáng! 🌙";
  }
    // ... (các câu trả lời khác của bot) ...
    if (/ngành|chuyên ngành|học gì|có ngành gì|ngành nào/i.test(msg)) {
        return "📚 Ngành học tại BTEC:\n• 👨‍💻 Công nghệ thông tin\n• 🎨 Thiết kế đồ họa\n• 💼 Marketing\n• 📦 Logistics\n• 📈 Quản trị kinh doanh\n• 🎮 Esports (sắp ra mắt!)";
    }
    // ... (tất cả các câu trả lời khác) ...
    if (/tư vấn|giúp tôi|hỏi chút|hỏi tí|cho hỏi/i.test(msg)) {
        return "🤖 Cứ hỏi đi, mình ở đây mà!\nBạn có thể hỏi về học phí, ngành học, tuyển sinh, bằng cấp,... Mình chém gió giỏi lắm 😄";
    }

    if (/cảm ơn|thank you|thanks/i.test(msg)) {
        return "🥰 Không có chi! Rất vui được hỗ trợ bạn!\nChúc bạn sớm trở thành sinh viên BTEC 🧡";
    }

    if (/bye|tạm biệt|hẹn gặp lại|see you/i.test(msg)) {
        return "👋 Hẹn gặp bạn tại BTEC FPT nha! Chúc bạn một ngày tươi như hoa 🌸";
    }

    // Mặc định
    return "❓ Mình chưa hiểu lắm. Bạn có thể hỏi về:\n• Ngành học\n• Học phí\n• Tuyển sinh\n• Học bổng\n• Việc làm sau tốt nghiệp v.v.\nHỏi đi, đừng ngại! 😄";
  };


  return (
    <>
      {/* ChatBot chính, luôn render và điều khiển hiển thị bằng class */}
      <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
          <div className="chatbot-header">
            <div className="chatbot-title">
              <button className="chatbot-logo-button">
                <img src={BTECLogo} alt="BTEC Logo" className="chatbot-logo" />
              </button>
              <span>Cao Đẳng Anh Quốc BTEC FPT</span>
            </div>

            <div>
              <button className="minimize-btn" onClick={() => setIsMinimized(true)}>−</button>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.from}`}>{msg.text}</div>
            ))}
            <div ref={messagesEndRef} /> {/* Dùng để cuộn xuống cuối tin nhắn */}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
      </div>

      {/* Nút icon để mở lại ChatBot (luôn render, điều khiển hiển thị bằng class) */}
      <div className={`chatbot-icon-button ${isMinimized ? 'visible' : ''}`}>
          <img
            src={ChatBotIMG}
            alt="Chat Icon"
            onClick={() => setIsMinimized(false)}
          />
      </div>
    </>
  );
};

  return (
    <>
      {!isMinimized && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <button className="chatbot-logo-button">
                <img src={BTECLogo} alt="BTEC Logo" className="chatbot-logo" />
              </button>
              <span>Cao Đẳng Anh Quốc BTEC FPT</span>
            </div>

            <div>
              <button className="minimize-btn" onClick={() => setIsMinimized(true)}>−</button>
              {/* <button className="close-btn" onClick={onClose}>×</button> */}
            </div>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
        </div>
      )}

      {isMinimized && (
        <div className="chatbot-icon-button">
          <img
            src={ChatBotIMG}
            alt="Chat Icon"
            onClick={() => setIsMinimized(false)}
          />
        </div>
      )}

    </>
  );
};

export default ChatBot;
