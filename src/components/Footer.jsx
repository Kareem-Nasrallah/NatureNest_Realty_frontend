import React from "react";

const Footer = () => {
  return (
    <div className="shadow-lg bgMainNoBrr mt-4">
      <div className="container">
        <div className="row p-3 gap-3 justify-content-evenly align-items-start">
          <div className="row col-lg p-3">
            <div className="w-fit text-start m-auto">
              <h3>Conect Us</h3>
              <a href="" className="footerItem d-block">
                <i className="fa-regular fa-map"></i>
                <span className="d-inline-block ps-2">Alexandria, Egypt</span>
              </a>
              <a href="tel:+201552528638" className="footerItem d-block">
                <i className="fa-solid fa-phone"></i>
                <span className="d-inline-block ps-2">0155 252 8638</span>
              </a>
              <a href="" className="footerItem d-block">
                <i className="fa-brands fa-whatsapp"></i>
                <span className="d-inline-block ps-2">0127 643 4424</span>
              </a>
              <a
                href="mailto:Kareemnasrallah88@gmail.com"
                className="footerItem d-block"
              >
                <i className="fa-solid fa-envelope"></i>
                <span className="d-inline-block ps-2">
                  Kareemnasrallah88@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="row col-lg p-3">
            <div className="text-start row">
              <h3 className="followUs">Follow Us</h3>
              <div className="col-sm">
                <a
                  href="https://www.facebook.com/kareem.nasrallah.904"
                  className="footerItem d-block"
                >
                  <i className="fa-brands fa-facebook"></i>
                  <span className="d-inline-block ps-2">NatureNestRealty</span>
                </a>
                <a href="" className="footerItem d-block">
                  <i className="fa-brands fa-twitter"></i>
                  <span className="d-inline-block ps-2">NatureNest_Homes</span>
                </a>
                <a href="" className="footerItem d-block">
                  <i className="fa-brands fa-instagram"></i>
                  <span className="d-inline-block ps-2">NatureNestLiving</span>
                </a>
              </div>
              <div className="col-sm">
                <a href="" className="footerItem d-block">
                  <i className="fa-brands fa-tiktok"></i>
                  <span className="d-inline-block ps-2">
                    NatureNestRealtors
                  </span>
                </a>
                <a href="" className="footerItem d-block">
                  <i className="fa-brands fa-youtube"></i>
                  <span className="d-inline-block ps-2">
                    NatureNestRealtyChannel
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kareem-nasrallah-181772282/"
                  className="footerItem d-block"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span className="d-inline-block ps-2">
                    NatureNestRealtyOfficial
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="m-0 p-2 bgMainNoBrr text-center" id="copyright">
        Copyright
        <a
          className="d-inline-block w-auto fw-bold px-2"
          target="_blank"
          href="https://kareem-nasrallah.github.io/K_N-Portfolio/"
        >
          &copy; K_Nasrallah
        </a>
        || All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
