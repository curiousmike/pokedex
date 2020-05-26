import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Avatar } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  input: {
    background: "#DAF7A6",
    "text-align": "center",
  },
  container: {
    // margin: "0px auto 8px",
    // textAlign: "center",
    order: 2,
  },
  largeAvatar: {
    width: "256px",
    height: "256px",
  },
});

function CreatureDetails(props) {
  const { pokemonDetails } = props;
  const classes = useStyles();
  return (
    props.isVisible && (
      <div className={classes.container}>
        {pokemonDetails.name && (
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <Input
                inputProps={{ "aria-label": "description" }}
                value={pokemonDetails.id}
              />
              <Input
                placeholder="Name"
                inputProps={{ "aria-label": "description" }}
                value={pokemonDetails.name}
              />
              <Input
                inputProps={{ "aria-label": "description" }}
                value={pokemonDetails.weight}
              />
              <Input
                inputProps={{ "aria-label": "description" }}
                value={pokemonDetails.height}
              />
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
