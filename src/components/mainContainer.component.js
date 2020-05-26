import React from "react";
import CreatureTable from "./creatureTable/creatureTable.component";
import CreatureDetails from "./creatureDetails/creatureDetails.component";
import "./mainContainer.css";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemonIndex: null,
      selectedPokemonDetails: {},
      errorState: false,
      isVisible: false,
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (res.ok) {
      const data = await res.json();
      this.setState({ pokemon: data.results });
    } else {
      this.setState({ errorState: true });
    }
  }

  async loadPokemonDetails() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.state.selectedPokemonIndex}`
    );
    if (res.ok) {
      const data = await res.json();
      this.setState({ selectedPokemonDetails: data });
    } else {
      this.setState({ errorState: true });
    }
  }

  onSelectPokemon(pokeIndex) {
    if (
      this.state.isVisible &&
      pokeIndex + 1 === this.state.selectedPokemonIndex
    ) {
      this.setState({ selectedPokemonIndex: null, isVisible: false });
    } else {
      //note: pokeIndex is sent 0 based, but pokemon are 1 based.
      this.setState(
        { selectedPokemonIndex: pokeIndex + 1, isVisible: true },
        () => this.loadPokemonDetails()
      );
    }
  }
  render() {
    return (
      <div className="container">
        <CreatureTable
          pokemon={this.state.pokemon}
          onSelectPokemon={(ix) => {
            this.onSelectPokemon(ix);
          }}
        />
        <CreatureDetails
          pokemonDetails={this.state.selectedPokemonDetails}
          isVisible={this.state.isVisible}
        />
      </div>
    );
  }
}

export default MainContainer;
