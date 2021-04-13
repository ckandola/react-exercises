import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <div className="pokedex-entry">
          <h3 className="pokemon-name">{this.props.name}</h3>
          <h3 className="pokemon-type">Type: {this.props.type}</h3>
          <img src={this.props.image} alt={this.props.name} className="pokedex-image" />
        </div>
      </li>
    );
  }
}

export default Pokecard;

Pokecard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
};
