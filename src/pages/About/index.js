import React from "react";
import MainHeader from "./../../components/MainHeader";
import Logo from "./../../assets/BigLogo.png";
import "./styleab.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="body">
        <img src={Logo} alt="logo" className="bigLogo"></img>
        <div className="paragraph">
          <div className="h1">About</div>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nunc
          eleifend id pulvinar. Id pretium feugiat dignissim quisque. Duis purus
          tellus duis nunc rhoncus, ultrices id in ipsum. Eget sit tempor
          habitant id turpis imperdiet ut. <br></br> <br></br>
          If you are looking to make enquiries, kindly{" "}
          <Link to="/Contact" className="contact">
            contact
          </Link>{" "}
          us or make your booking
          <Link to="/Contact" className="contact">
            {" "}
            here
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
