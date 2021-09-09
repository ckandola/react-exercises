import React, { Component } from "react";
import PropTypes from 'prop-types';

class NamedComponent extends Component {
  render() {
    return <p>My name is {this.props.name}</p>;
  }
}

export default NamedComponent;

NamedComponent.propTypes = {
  name: PropTypes.string,
};
