import React, { Component } from "react";

class ColorSquare extends Component {
  constructor(props) {
    super(props);
    const randomIndex = Math.floor(Math.random() * colorList.length);
    this.state = { color: colorList[randomIndex] };
  }
  render() {
    const changeColor = () => {
      const randomIndex = Math.floor(Math.random() * colorList.length);
      this.setState({ color: colorList[randomIndex] });
    };

    return (
      <div
        style={{
          width: "9em",
          height: "9em",
          backgroundColor: this.state.color
        }}
        onClick={changeColor}
      ></div>
    );
  }
}

const colorList = [
  "aliceblue",
  "brown",
  "coral",
  "cornsilk",
  "navy",
  "lawngreen",
  "mediumvioletred",
  "yellow",
  "orange",
  "pink",
  "skyblue",
  "purple",
  "yellowgreen",
  "forestgreen",
  "blue",
  "red",
  "maroon",
  "silver",
  "black"
];

export default ColorSquare;
