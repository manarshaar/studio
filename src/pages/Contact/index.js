import React from "react";
import MainHeader from "./../../components/MainHeader";
import Logo from "./../../assets/BigLogo.png";
import contacts from "./../../assets/contacts.png";
import "./styleco.css";

export default function Contact() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="contact_body">
        <img src={Logo} alt="logo" className="bigLogo_c"></img>
        <form action="#" className="contact_form">
          <div className="h1">Contact-us</div>
          <br></br>
          <label htmlFor="name">Name</label>
          <br></br>
          <input
            className="inputs"
            type="text"
            name="name"
            placeholder="Enter your name"
          ></input>
          <br></br>
          <label htmlFor="email">Email Address</label>
          <br></br>
          <input
            className="inputs"
            type="text"
            name="email"
            placeholder="Enter your email address"
          ></input>
          <br></br>
          <label htmlFor="message">Message</label>
          <br></br>
          <textarea
            name="message"
            cols="54"
            rows="15"
            className="inputs  msg_box"
            placeholder="Enter your message here"
          ></textarea>
          <br></br>
          <div className="submission">
            <div className="submit_note">
              We will get back to you within one<br></br> business day.
            </div>
            <input
              type="submit"
              value="Submit"
              className="submit_button"
            ></input>
          </div>
          <br></br>
          <div className="contacts">
            <img
              src={contacts}
              alt="contact-details"
              className="img_contacts"
            ></img>
          </div>
        </form>
      </div>
    </div>
  );
}
