import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <div className="entry">
          <h3 className="name">{this.props.name}</h3>
          <img src={this.props.image} alt={this.props.name} className="image" />
          <h3 className="type">Type: {this.props.type}</h3>
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