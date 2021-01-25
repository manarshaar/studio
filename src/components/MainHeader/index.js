import React from "react";
import "./style.css";
import logo from "./../../assets/logo.png";

export default function MainHeader() {
  return (
    //todo : the selected page is colored yellow
    <div className="mainHead">
      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
      <div className="pages">
        <div>Home</div>
        <div>Book</div>
        <div>Contact</div>
        <div>About</div>
      </div>
    </div>
  );
}
