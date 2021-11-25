import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__support">
        <div className="footer__support-title">Hỗ trợ khách hàng</div>
        <div className="footer__support-phone">
          <i className="fad fa-phone-square"></i> Mr Tùng -
          <span> 0902 999 000</span>
        </div>
        <div className="footer__support-phone">
          <i className="fad fa-phone-square"></i> Mr Nguyên -
          <span className="mx-3"> 0918 081 092</span>
        </div>
        <div className="footer__support-phone">
          <i className="fad fa-phone-square"></i> Mrs Loan -
          <span> 0977 773 553</span>
        </div>
        <div className="footer__support-phone">
          <i className="fad fa-phone-square"></i> Mr Ngân -
          <span> 0903 999 000</span>
        </div>
      </div>

      <div className="footer__social">
        <ul className="social-icon">
          <li className="social-icon__item">
            <Link to="/" className="social-icon__link" href="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link to="/" className="social-icon__link" href="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link to="/" className="social-icon__link" href="#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link to="/" className="social-icon__link" href="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
        <p>©2021 Công ty TNHH giao nhận vận tải PPN | All Rights Reserved</p>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-title">
          Công ty TNHH giao nhận vận tải PPN
        </div>
        <div className="footer__contact-info">
          <i className="fad fa-envelope"></i> ppn.logistics88@gmail.com
        </div>
        <div className="footer__contact-info">
          <i className="fad fa-map-marker-alt"></i> 243D - Cộng Hoà - phường 13
          - Quận Tân Bình - Thành phố Hồ Chí Minh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
