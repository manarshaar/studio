import React, { useState } from "react";
import "./stylep.css";
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

export default function ContactDetails(props) {
  const classes = useStyles();
  const { setBookingPackage } = props;
  //todo add onChange and change the hooks
  return (
    <div className="contactDetails">
      <TextField
        theme={theme}
        variant="outlined"
        label="Name"
        id="outlined-basic"
        type="outlined-basic"
        placeholder="Enter full name"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        theme={theme}
        variant="outlined"
        label="Phone number"
        id="outlined-basic"
        type="outlined-basic"
        placeholder="Enter phone number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        theme={theme}
        variant="outlined"
        label="Email"
        id="outlined-basic"
        type="outlined-basic"
        placeholder="Enter email address"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
