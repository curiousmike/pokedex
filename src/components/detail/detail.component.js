import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const red = "#ff0000";
// const blue = "#3B4CCA";
// const yellow = "#FFDE00";

const useStyles = makeStyles({
  nameText: {
    width: "120px",
    margin: "8px",
    color: "white",
    textAlign: "center",
  },
});

const Detail = (props) => {
  const classes = useStyles();
  return (
    <TextField
      label={props.label}
      inputProps={{
        "aria-label": "description",
        style: { textAlign: "center" },
      }}
      value={props.value}
      className={classes.nameText}
      variant="outlined"
      margin="dense"
      readOnly
    />
  );
};

export default Detail;
