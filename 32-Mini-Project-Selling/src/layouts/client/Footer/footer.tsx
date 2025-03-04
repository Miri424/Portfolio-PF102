import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer-holder">
      <div className="left-box">
        <h3 className="title">ABOUT US</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere
          laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis
          aliquam.
        </p>
      </div>

      <div className="middle-box">
        <h3 className="title">QUICK LINKS</h3>
        <div className="links-box">
          <a href="#" className="link">
            About Us
          </a>
          <a href="#" className="link">
            Services
          </a>
          <a href="#" className="link">
            Testimonials
          </a>
          <a href="#" className="link">
            Contact Us
          </a>
        </div>
      </div>

      <div className="social-box">
        <h3 className="title">FOLLOW US</h3>
        <div className="icons-box">
          <a href="#" className="icon">
            <FaFacebook />
          </a>
          <a href="#" className="icon">
            <FaTwitter />
          </a>
          <a href="#" className="icon">
            <FaInstagram />
          </a>
          <a href="#" className="icon">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="product-box">
        <h3 className="title">FEATURED PRODUCT</h3>
        <div className="product-content">
          <img
            src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
            alt="Brown Shoe"
            className="product-img"
          />
          <p className="product-name">Leather Brown Shoe</p>
          <p className="product-price">$60.00</p>
          <button className="cart-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
