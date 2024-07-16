import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img src="img/DSC00570.jpg" alt="" className="img-fluid rounded-circle" />
      </div>

      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">Weerachon Jantasit</h1>
      </a>

      <div className="social-links text-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/Kirigaya.kiritozz/?locale=th_TH" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/anda_1483/?fbclid=IwZXh0bgNhZW0CMTAAAR3O6SR-I4jnpDoQhpO_eSrlpAKmV6LD0xDxAyPqu4PGZQC_xZmRcFhJkR4_aem_SrKWbJpXMedXr6gzNdG3VQ" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#home" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li className="dropdown">
            <a href="#portfolio"><i className="bi bi-images navicon"></i><span>Portfolio</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li className="dropdown">
                <a href="portfolio-details.html#portfolio-details"><span>ACU PAY THAILAND</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="portfolio-details.html#portfolio-details1">content 1</a></li>
                  <li><a href="portfolio-details.html#portfolio-details2">content 2</a></li>
                  {/* ต่อไปเพิ่มได้ตามจำนวนที่ต้องการ */}
                </ul>
              </li>
              <li className="dropdown">
                <a href="portfolio-details2.html#portfolio-details2"><span>ACU PAY IBM</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="portfolio-details2.html#portfolio-details201">content 1</a></li>
                  <li><a href="#">content 2</a></li>
                  {/* ต่อไปเพิ่มได้ตามจำนวนที่ต้องการ */}
                </ul>
              </li>
              <li className="dropdown">
                <a href="portfolio-details3.html#portfolio-details3"><span>ACU Online outlet</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="portfolio-details3.html#portfolio-details301">content 1</a></li>
                  <li><a href="#">content 2</a></li>
                  {/* ต่อไปเพิ่มได้ตามจำนวนที่ต้องการ */}
                </ul>
              </li>
              <li className="dropdown">
                <a href=""><span>Story telling</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">content 1</a></li>
                  <li><a href="#">content 2</a></li>
                  {/* ต่อไปเพิ่มได้ตามจำนวนที่ต้องการ */}
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
