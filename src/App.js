import React from "react";
import "./App.css";
import Booking from "./pages/Booking";
//todo add router
export default function App() {
  return (
    <div className="all">
      <Booking></Booking>
    </div>
  );
}

// handleSub(key) {
//   this.setState((prevState) => {
//     const newCounters = prevState.counters.map((c) => {
//       if (c.key === key && c.sum !== 0) return { ...c, sum: c.sum - 1 };
//       else return { ...c };
//     });
//     return { counters: newCounters };
//   });
// }
