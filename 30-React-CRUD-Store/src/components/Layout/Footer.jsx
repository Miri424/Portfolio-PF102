import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/main.scss"

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer">
        <div className="footer-holder flex-box">
          <div className="Logo&desc">
            <h3>Estore</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="paragrahps quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"} className="font-size-14">Home</Link>
              </li>
              <li>
                <Link to={"/404"} className="font-size-14">About</Link>
              </li>
              <li>
                <Link to={"/404"} className="font-size-14">Offers & Discounts</Link>
              </li>
              <li>
                <Link to={"/404"} className="font-size-14">Get Coupon</Link>
              </li>
              <li>
                <Link to={"Contact Us"} className="font-size-14">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="paragrahps new-products">
            <h3>New Products</h3>
            <ul>
              <li>
                <Link to="/product-1" className="font-size-14">Woman Cloth</Link>
              </li>
              <li>
                <Link to="/product-2" className="font-size-14">Fashion Accessories</Link>
              </li>
              <li>
                <Link to="/product-3" className="font-size-14">Man Accessories</Link>
              </li>
              <li>
                <Link to="/product-4" className="font-size-14">Rubber made Toys</Link>
              </li>
            </ul>
          </div>
          <div className="paragraphs support">
            <h3>Support</h3>
            <ul>
              <li> 
                <Link to={"/"} className="font-size-14" >Frequently Asked Questions   </Link>
              </li>
              <li>
                <Link to={"/"} className="font-size-14">Terms & Conditions</Link>
              </li>
              <li>
                <Link to={"/"} className="font-size-14">Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/"} className="font-size-14">Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/"} className="font-size-14">Report a Payment Issue</Link>
              </li>
            </ul>
          </div>
            <div className="credits">
                <p>Copyright 2021. All rights reserved || This Template Made With Me</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
