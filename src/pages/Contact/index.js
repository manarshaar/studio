import React from "react";
import MainHeader from "./../../components/MainHeader";
import Logo from "./../../assets/BigLogo.png";
import "./styleco.css";

export default function Contact() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="body">
        <img src={Logo} alt="logo" className="bigLogo"></img>
        <div className="h1">Contact</div>
      </div>
    </div>
  );
}
