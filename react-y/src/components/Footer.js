import React from 'react';
import './Footer.css'; // For styles
import visa from "../images/visa.png"
import mastercard from "../images/mastercard.png"
import applePay from "../images/apple pay.png"
import paypal from "../images/paypal.png"
import googlePay from "../images/googlepay.svg"
import "../resp.css"
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>SHOP.CO</h3>
          <p>
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FAQ</h4>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to - Blog</a></li>
            <li><a href="#">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="payment-icons">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={paypal} alt="PayPal" />
          <img src={applePay} alt="ApplePay" />
          <img src={googlePay} alt="GooglePay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
