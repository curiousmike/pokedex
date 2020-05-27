import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import Detail from "../detail/detail.component";

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
                <Detail label="Name" value={pokemonDetails.name} />
                <Detail label="i.d." value={pokemonDetails.id} />
              </div>
              <div className={classes.twoColumn}>
                <Detail label="Weight" value={pokemonDetails.weight} />
                <Detail label="Height" value={pokemonDetails.height} />
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
