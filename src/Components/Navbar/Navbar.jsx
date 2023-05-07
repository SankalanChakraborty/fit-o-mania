import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Logo-1.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="website logo" />
      </Link>
    </div>
  );
};

export default Navbar;
