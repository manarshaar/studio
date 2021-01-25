import React from "react";
import "./stylebt.css";
//todo the selected (multiple selection) becomes white and yellow and setState(Booking_Type)
export default function BookingType(props) {
  return (
    <div className="bookingType">
      <div className="line1">
        <div className="type selected">Engagement</div>
        <div className="type">Business event</div>
        <div className="type selected">Wedding</div>
        <div className="type">Birthday</div>
        <div className="type">Maternity</div>
        <div className="type">Graduation</div>
      </div>
      <div className="line2">
        <div className="type">Product</div>
        <div className="type selected">Honeymoon</div>
        <div className="type">Fashion</div>
        <div className="type">Anniversary</div>
        <div className="type">Food</div>
        <div className="type">Conference</div>
      </div>
      <div className="line3">
        <div className="type">Team and workspace</div>
        <div className="type">Personal Potrait</div>
        <div className="type">Family</div>
        <div className="type">Travel shoot</div>
        <div className="type">Baby</div>
        <div className="type selected">Others</div>
      </div>
    </div>
  );
}
