import React, { useState } from "react";
import "./styledt.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
}));

export default function DateTime(props) {
  const classes = useStyles();
  const { setBookingDate, setSelectedTime, setAddress } = props;
  //todo add onChange and change the hooks
  return (
    <div className="dateTime">
      <div>
        <TextField
          theme={theme}
          variant="outlined"
          label="Search date"
          id="date"
          type="date"
          defaultValue="2022-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <TextField
        theme={theme}
        variant="outlined"
        id="time"
        label="Select time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        theme={theme}
        variant="outlined"
        label="Address"
        id="outlined-basic"
        type="outlined-basic"
        placeholder="Enter the location address"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
