import React, { useState } from "react";
import "./stylec.css";
import MainHeader from "./../../components/MainHeader";
import BookingType from "./../../components/BookingType";
import DateTime from "./../../components/DateTime";

export default function Booking() {
  const [Booking_Type, setBookingType] = useState("");
  const [BookingDate, setBookingDate] = useState("");
  const [BookingTime, setBookingTime] = useState("");
  const [BookingAddress, setBookingAddress] = useState("");
  const [BookingPackage, setBookingPackage] = useState("");
  const [BookingName, setBookingName] = useState("");
  const [BookingNumber, setBookingNumber] = useState("");
  const [BookingEmail, setBookingEmail] = useState("");

  return (
    <div className="bookingPage">
      <MainHeader></MainHeader>
      <div className="content">
        <div className="h1 text">Welcome to the booking page!</div>
        <div className="h3 text">
          Kindly provide necessary informations by attending to the questions
          below.
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="h2 text">What are you booking for?</div>
        <div className="note text">(you can select multiple options)</div>
        <br></br>
        <BookingType Booking_Type></BookingType>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="h2 text">When and where is the photoshoot?</div>
        <br></br>
        <DateTime></DateTime>
      </div>
    </div>
  );
}
