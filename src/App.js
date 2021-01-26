import React from "react";
import "./App.css";
import Booking from "./pages/Booking";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Booking}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/About" component={About}></Route>
    </Router>
  );
}
