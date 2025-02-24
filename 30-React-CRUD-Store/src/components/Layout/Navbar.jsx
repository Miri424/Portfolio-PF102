import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import Input from "../UI/Input";
import "../../assets/scss/main.scss";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-holder">
            <div className="nav-left-holder">
              <h1>Estore.</h1>
            </div>
            <div className="nav-right-holder">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Category"}>About</Link>
                </li>
                <li>
                  <Link to={"/Latest"}>Latest</Link>
                </li>
                <li>
                  <Link to={"/Blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/admin/product-table"}>Admin Table</Link>
                </li>
              </ul>
              <div className="actions-holder">
                <Input />
                <Link to={"/wishlist"} className="icon-holder">
                  <FaRegHeart />
                </Link>
                <Link to={"/basket"} className="icon-holder">
                  <FaShoppingCart />
                </Link>
                <button className="sign-in-btn font-400 font-size-18">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
