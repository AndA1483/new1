import React from 'react';
import Header from './Header'; // Import Header component ที่เราสร้างไว้
import Main from './Main';
import './Header.css';


function App() {
  return (
    <div className="App">
      <Header /> {/* เรียกใช้ Component Header ที่เรา import เข้ามา */}
      {/* เนื้อหาหลักของแอปพลิเคชันอาจจะอยู่ที่นี่ */}

      
      <Main /> {/* เรียกใช้ Component Header ที่เรา import เข้ามา */}
      {/* เนื้อหาหลักของแอปพลิเคชันอาจจะอยู่ที่นี่ */}

    </div>
  );
}

export default App;
