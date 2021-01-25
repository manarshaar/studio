import React from "react";
import "./stylepk.css";

export default function Packages() {
  return (
    <div className="packages">
      <div className="card">
        <div className="h2">Basic</div>
        <div className="h1">$30,000</div>
        <div className="note">
          1 hour shoot<br></br>Unlimited photos<br></br>Editing included
        </div>
        <br></br>
        <br></br>
        <button className="button">Select</button>
      </div>
      <div className="card">
        <div className="h2">Standard</div>
        <div className="h1">$50,000</div>
        <div className="note">
          2 hour shoot<br></br>Unlimited photos<br></br>Editing included
        </div>
        <br></br>
        <br></br>
        <button className="button">Select</button>
      </div>
      <div className="card">
        <div className="h2">Premium</div>
        <div className="h1">$80,000</div>
        <div className="note">
          3 hour shoot<br></br>Unlimited photos<br></br>Editing included
          <br></br>Free photobook
        </div>
        <br></br>
        <button className="button">Select</button>
      </div>
    </div>
  );
}
