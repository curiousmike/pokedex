import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const red = "#ff0000";
const blue = "#3B4CCA";
const yellow = "#FFDE00";

const useStyles = makeStyles({
  input: {
    background: "#DAF7A6",
    "text-align": "center",
  },
  container: {
    // margin: "0px auto 8px",
    // textAlign: "center",
    order: 2,
    background: "#2a75bb", // "#3c5aa6", // #003A70
  },
  largeAvatar: {
    width: "256px",
    height: "256px",
  },
  nameText: {
    width: "120px",
    margin: "8px",
    color: "white",
    textAlign: "center",
  },
  text: {
    width: "80px",
    margin: "8px",
    color: "white",
    textAlign: "center",
  },
  twoColumn: { display: "flex", justifyContent: "space-between" },
});

function CreatureDetails(props) {
  const { pokemonDetails, readOnly } = props;
  const classes = useStyles();
  return (
    props.isVisible && (
      <div className={classes.container}>
        {pokemonDetails.name && (
          <div>
            <form noValidate autoComplete="off">
              <div className={classes.twoColumn}>
                <TextField
                  label="Name"
                  inputProps={{
                    "aria-label": "description",
                    style: { textAlign: "center" },
                  }}
                  value={pokemonDetails.name}
                  className={classes.nameText}
                  variant="outlined"
                  margin="dense"
                  readOnly
                />
                <TextField
                  label="i.d."
                  inputProps={{
                    "aria-label": "description",
                    style: { textAlign: "center" },
                  }}
                  value={pokemonDetails.id}
                  className={classes.text}
                  variant="outlined"
                  margin="dense"
                  readOnly
                />
              </div>
              <div className={classes.twoColumn}>
                <TextField
                  label="Weight"
                  inputProps={{
                    "aria-label": "description",
                    style: { textAlign: "center" },
                  }}
                  value={pokemonDetails.weight}
                  className={classes.text}
                  variant="outlined"
                  margin="dense"
                  readOnly
                />
                <TextField
                  label="Height"
                  inputProps={{
                    "aria-label": "description",
                    style: { textAlign: "center" },
                  }}
                  value={pokemonDetails.height}
                  className={classes.text}
                  variant="outlined"
                  margin="dense"
                  readOnly
                />
              </div>
              {/* Improvement: Create placeholder while waiting for image to load */}
              {/* https://github.com/mui-org/material-ui/issues/16161 */}
              <Avatar
                className={classes.largeAvatar}
                alt={pokemonDetails.name}
                src={
                  pokemonDetails.sprites
                    ? pokemonDetails.sprites.front_default
                    : ""
                }
              />
            </form>
          </div>
        )}
      </div>
    )
  );
}

export default CreatureDetails;
