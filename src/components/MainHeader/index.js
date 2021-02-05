import React from "react";
import "./style.css";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    //todo : the selected page is colored yellow
    <div className="mainHead">
      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
      <div className="pages">
        <Link to="/Home" className="links">
          Home
        </Link>
        <Link to="/" className="links">
          Book
        </Link>
        <Link to="/Contact" className="links">
          Contact
        </Link>
        <Link to="/About" className="links">
          About
        </Link>
      </div>
    </div>
  );
}
