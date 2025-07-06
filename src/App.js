// frontend/src/App.js
import React from 'react';
import './App.css';

import MouseTrail from './components/js/MouseTrail.js'; // Vẫn giữ hiệu ứng con trỏ toàn trang

// KHÔNG import TextTrail ở đây nữa vì nó đã nằm trong HeroSection
// import TextTrail from './components/js/TextTrail.js';

// Import các components section của bạn
import Header from './components/js/Header.js';
import HeroSection from './components/js/HeroSection.js';
import AboutBTEC from './components/js/AboutBTEC.js';
import SummerInspiration from './components/js/SummerInspiration.js';
import TraditionalValues from './components/js/TraditionalValues.js';
import StudentJourney from './components/js/StudentJourney.js';
import ContactSection from './components/js/ContactSection.js';
import Footer from './components/js/Footer.js';


function App() {
  return (
    <div className="App">
      {/* MouseTrail bao phủ toàn trang */}
      <MouseTrail />

      <Header />
      <main>
        <HeroSection />
        <AboutBTEC />
        <SummerInspiration />
        <TraditionalValues />
        <StudentJourney />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;