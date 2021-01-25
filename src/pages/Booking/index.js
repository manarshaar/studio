import React, { useState } from "react";
import "./stylec.css";
import MainHeader from "./../../components/MainHeader";
import BookingType from "./../../components/BookingType";
import DateTime from "./../../components/DateTime";
import ContactDetails from "../../components/ContactDetails";
import Packages from "../../components/Packages";

export default function Booking() {
  const [Booking_Type, setBookingType] = useState(null);
  const [BookingDate, setBookingDate] = useState(null);
  const [BookingTime, setBookingTime] = useState(null);
  const [BookingAddress, setBookingAddress] = useState(null);
  const [BookingPackage, setBookingPackage] = useState(null);
  const [BookingName, setBookingName] = useState(null);
  const [BookingNumber, setBookingNumber] = useState(null);
  const [BookingEmail, setBookingEmail] = useState(null);

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
        <BookingType setBookingType></BookingType>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="h2 text">When and where is the photoshoot?</div>
        <br></br> <br></br>
        <DateTime setBookingDate setBookingTime setBookingAddress></DateTime>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="h2 text">Select your preferred package</div>
        <br></br>
        <Packages setBookingPackage></Packages>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="h2 text">Kindly provide your contact details</div>
        <br></br> <br></br>
        <ContactDetails></ContactDetails>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="buttons text">
          <button className="b">Book now</button>
          <button className="b b2">Save and book later</button>
        </div>
      </div>
    </div>
  );
}
