import { Link } from "react-router-dom";
import "../../../assets/scss/main.scss";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="nav flex-box align-center justify-between">
          <div className="nav-left">
            <h1 className="font-size-30 font-800">Selling.</h1>
          </div>

          <div
            className={`hamburger ${isMenuOpen ? 'rotate' : ''}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
            <ul className="justify-between gap-2-05">
              <Link to={"/"} className="hover-orange font-size-14">
                Home
              </Link>
              <Link to={"/products"} className="hover-orange font-size-14">
                Products
              </Link>
              <Link to={"/"} className="hover-orange font-size-14">
                About Us
              </Link>
              <Link to={"/"} className="hover-orange font-size-14">
                Special
              </Link>
              <Link to={"/"} className="hover-orange font-size-14">
                Testimonials
              </Link>
              <div className="flex-box icon-div">
                <Link to={"/wishlist"} className="icon-holder">
                  <FaRegHeart className="hover-orange hover-scale-12 font-size-18" />
                </Link>
                <Link to={"/basket"} className="icon-holder">
                  <FaShoppingCart className="hover-orange hover-scale-12 font-size-18" />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
