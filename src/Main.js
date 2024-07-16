import React from 'react';
import './Header.css';
const Main = () => {
  return (
    <main className="main">

      {/* Hero Section */}
      <section id="home" className="hero section dark-background">
        <img src="img/logo-06.jpg" alt="" data-aos="fade-in" className="" />
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Weerachon Jantasit</h2>
          <p>Graphic Internship<span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
        </div>
      </section>
      {/* /Hero Section */}

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>การมีแพสชั่น เป็นสิ่งสำ คัญที่ทำ ให้เราดำ เนินชีวิต
            ได้อย่างมีเป้าหมาย ทั้งยังช่วยให้เรามีพลังขับเคลื่อน
            และรังสรรค์สิ่งต่างๆ ได้อย่างมีประสิทธิภาพ แตกต่าง
            และแปลกใหม่</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="img/DSC00567.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Graphic & Web Developer.</h2>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>27 june 2001</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://www.youtube.com/@yindeechannel2567</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>098 150 1043</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>THAILAND, SISAKET, 33160</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Junior</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>weerachon.jant@bumail.net</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}

      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-people"></i>
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Stats Section */}

      {/* Skills Section */}
      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">50%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>Adobe premiere pro</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Adode Illustrator</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Adode Photoshop</span> <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Skills Section */}

      {/* Resume Section */}
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>....................................................................</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>....................................................................</h4>
                <p><em>....................................................................</em></p>
                <ul>
                  <li>....................................................................</li>
                  <li>....................................................................</li>
                  <li>weerachon.jant@bumail.net</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>ชั้นมัธยมศึกษาตอนปลายปีที่4-6</h4>
                <h4>โรงเรียนโรงเรียนราษีไศล</h4>
                <h5>2560-2563</h5>
                <p><em>....................................................................</em></p>
                <p>....................................................................</p>
              </div>
              <div className="resume-item">
                <h4>.................................................................... &amp;....................................................................</h4>
                <h5>2010 - 2014</h5>
                <p><em>....................................................................</em></p>
                <p>....................................................................</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">....................................................................</h3>
              <div className="resume-item">
                <h4>....................................................................</h4>
                <h5>......................</h5>
                <p><em>...................... </em></p>
                <ul>
                  <li>......................</li>
                  <li>...................... </li>
                  <li>......................</li>
                  <li>......................</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>......................</h4>
                <h5>......................</h5>
                <p><em>......................</em></p>
                <ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Resume Section */}

    </main>
  );
}

export default Main;
