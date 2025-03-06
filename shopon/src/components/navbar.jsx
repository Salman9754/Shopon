import React from "react";
import logo from "../assets/Logo.png";
import "./components.css";
function Navbar() {
  return (
    <div className="container">
      <div className="row align-items-center py-3 row-gap-3">
        <div className="col-lg-2 col-md-6 col-sm-12">
          <img src={logo} alt="" width={120} height={40} />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ul className="d-flex justify-content-center gap-4 list-unstyled m-0 nav_ul">
            <li>Gift Cards</li>
            <li>Home</li>
            <li>Mobile and Tab</li>
            <li>Fashion</li>
            <li>Electronics</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
          <div className="input">
            <input
              type="text"
              className="searchInput"
              placeholder="Search Product"
            />
            <span className="searchIcon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
