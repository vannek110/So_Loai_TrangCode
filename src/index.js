import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS của AOS
AOS.init({
  duration: 1000, // Thời gian animation mặc định (tính bằng ms)
  once: true,    // Chỉ chạy animation một lần khi cuộn đến
  mirror: false, // Không lặp lại animation khi cuộn lên/xuống
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
