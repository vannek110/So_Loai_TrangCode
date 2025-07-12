import React, { useState } from "react";
import "./../../components/css/ChatBot.css";
import ChatBotIMG from "./../../assets/ChatBotIconWhite.png";
import BTECLogo from './../../assets/btec-logo.png.png';


const ChatBot = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
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

  if (/^(hi|hello|hey|xin chào|chào bạn|chào|good (morning|afternoon|evening)|greetings)/i.test(msg)) {
    return "👋 Chào bạn! Mình là trợ lý siêu cấp của Cao Đẳng Anh Quốc BTEC FPT – luôn sẵn sàng giúp bạn, kể cả 2h sáng! 🌙";
  }

  if (/ngành|chuyên ngành|học gì|có ngành gì|ngành nào/i.test(msg)) {
    return "📚 Ngành học tại BTEC:\n• 👨‍💻 Công nghệ thông tin\n• 🎨 Thiết kế đồ họa\n• 💼 Marketing\n• 📦 Logistics\n• 📈 Quản trị kinh doanh\n• 🎮 Esports (sắp ra mắt!)";
  }

  if (/học phí|tiền học|bao nhiêu tiền|chi phí|tuition/i.test(msg)) {
    return "💸 Học phí mỗi kỳ:\n• HN & HCM: ~14.190.000 VNĐ\n• Đà Nẵng & Cần Thơ: ~11.352.000 VNĐ\n• Tiếng Anh dự bị: ~8–10 triệu/level\n👉 Mềm mại, phù hợp sinh viên Gen Z!";
  }

  if (/bao lâu|thời gian học|mấy năm|mất bao lâu|học trong bao lâu|duration/i.test(msg)) {
    return "⏳ Thời gian học:\n• Chính khóa: 2 năm (6 kỳ)\n• Nếu học tiếng Anh dự bị: tổng cộng 2.5 – 3 năm\nNhanh gọn như mì ăn liền 🍜!";
  }

  if (/tuyển sinh|đăng ký|nộp hồ sơ|xét tuyển|enroll|apply/i.test(msg)) {
    return "📝 Chỉ cần học bạ THPT là đủ!\n✅ Đăng ký online tại: https://btec.fpt.edu.vn/dang-ky\n✅ Hoặc đến cơ sở gần bạn nhất!\nKhông thi cử, không đau đầu 🤯!";
  }

  if (/liên hệ|số điện thoại|hotline|gọi điện|contact/i.test(msg)) {
    return "📞 Liên hệ ngay:\n• Hotline: 0981 090 513\n• Fanpage: https://facebook.com/btecvietnam\n💬 Inbox là có người rep liền!";
  }

  if (/địa chỉ|ở đâu|cơ sở|campus|location/i.test(msg)) {
    return "📍 Cơ sở BTEC:\n• 🏙️ Hà Nội: Trịnh Văn Bô\n• 🌆 TP.HCM: 205 Nguyễn Xí\n• 🌊 Đà Nẵng: 66 Võ Văn Tần\n• 🌾 Cần Thơ: 41 CMT8";
  }

  if (/bằng cấp|chứng chỉ|bằng gì|degree|certificate/i.test(msg)) {
    return "🎓 Bằng cấp: **BTEC HND Level 5 (UK)**\n👉 Có thể học tiếp lên đại học quốc tế hoặc xin việc dễ dàng khắp thế giới 🌍.";
  }

  if (/việc làm|ra trường|có dễ xin việc|thực tập|intern|job/i.test(msg)) {
    return "💼 Việc làm:\n• 98% sinh viên có việc làm sau tốt nghiệp\n• Có thực tập từ kỳ 2 tại FPT, Yakult,...\nBảo chứng đầu ra như vàng 9999 ✨!";
  }

  if (/ielts|toeic|tiếng anh|english requirement|cần tiếng anh không/i.test(msg)) {
    return "🇬🇧 Không yêu cầu IELTS ban đầu\n👉 Nếu cần thì học tiếng Anh dự bị tại trường\nYên tâm cho người mới bắt đầu nha!";
  }

  if (/liên thông|học tiếp|chuyển tiếp|du học|study abroad|top up/i.test(msg)) {
    return "🌍 Học xong bạn có thể:\n• Học tiếp năm 3 tại UK, Úc, Mỹ, Singapore,...\n• Hoặc đi làm ngay với bằng quốc tế\nTự do lựa chọn như buffet! 🍽️";
  }

  if (/học bổng|giảm học phí|ưu đãi|scholarship/i.test(msg)) {
    return "🎁 Học bổng siêu hấp dẫn:\n• Từ 10% đến 70%\n• Tổng quỹ: hơn 23 tỷ VNĐ/năm\n🔥 Hơn 1600 suất – bạn là 1 trong số đó chứ?";
  }

  if (/giờ học|thời khóa biểu|thời gian học|schedule/i.test(msg)) {
    return "🕘 Lịch học:\n• Linh hoạt ca sáng/chiều\n• 80% là thực hành\nKhông dạy chay – học là chiến đấu! 💪";
  }

  if (/online|học từ xa|trực tuyến|remote|e-learning/i.test(msg)) {
    return "💻 Chủ yếu học offline để tương tác thực tế\nMột số môn có thể học online nếu cần – tiện lợi không kém Zoom đâu nhé 😉";
  }

  if (/thực hành|dự án|trải nghiệm|project|practice/i.test(msg)) {
    return "🛠️ Học đi đôi với hành:\n• Dự án thật từ kỳ 2\n• Có Hackathon, Start-up, thực chiến các kiểu\nKhông nhàm chán đâu nha!";
  }

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
              <button className="close-btn" onClick={onClose}>×</button>
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
