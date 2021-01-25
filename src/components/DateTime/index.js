import React, { useState } from "react";
import "./styledt.css";
import DateFnsUtils from "@date-io/date-fns";

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTime() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="dateTime">
      <DatePicker
        className="box"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText={"   Select date"}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableYearDropdown
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          autoOk
          className="box"
          label="12 hours"
          value={selectedDate}
          onChange={(time) => setSelectedTime(time)}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
