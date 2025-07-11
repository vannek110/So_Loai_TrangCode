import React, { useState } from "react";
import "./../../components/css/ChatBot.css";

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Chào bạn! Mình có thể hỗ trợ gì về BTEC?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotReply(input) };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotReply = (text) => {
    const msg = text.toLowerCase();
    if (msg.includes("ngành")) return "Trường có CNTT, Thiết kế đồ họa, QTKD...";
    if (msg.includes("học phí")) return "Học phí trung bình 25–30 triệu/kỳ.";
    if (msg.includes("tuyển sinh")) return "Đăng ký tại: https://btec.fpt.edu.vn/dang-ky";
    if (msg.includes("liên hệ")) return "Hotline: 1900 8080 – Fanpage: fb.com/btecvietnam";
    return "Bạn có thể hỏi về ngành học, học phí, tuyển sinh, liên hệ...";
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        🎓 Hỗ trợ BTEC
        <button onClick={onClose} className="close-btn">×</button>
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
  );
};

export default ChatBot;
