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
    margin: "2px",
    outline: "2px solid black",
  },
  largeAvatar: {
    width: "256px",
    height: "256px",
    outline: "2px solid red",
    margin: "8px",
  },
  twoColumn: { display: "flex", justifyContent: "space-between" },
});

const CreatureDetails = (props) => {
  const { pokemonDetails } = props;
  const classes = useStyles();
  const formattedNum = ("00" + pokemonDetails.id).substr(-2, 2);
  const url =
    pokemonDetails.id !== 0
      ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${formattedNum}.png`
      : "http://www.coustier.com/empty.png";
  return (
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
              src={url}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatureDetails;
