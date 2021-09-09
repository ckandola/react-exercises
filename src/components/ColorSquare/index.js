import React, { Component } from "react";

class ColorSquare extends Component {
  constructor(props) {
    super(props);
    const randomIndex = Math.floor(Math.random() * colorList.length);
    this.state = { color: colorList[randomIndex] };
  }
  render() {
    const changeColor = () => {
      let randomIndex = Math.floor(Math.random() * colorList.length);
      while(colorList[randomIndex] === this.state.color) {
        randomIndex = Math.floor(Math.random() * colorList.length);
      }
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

export const colorList = [
  "brown",
  "sandybrown",
  "cornsilk",
  "coral",
  "pink",
  "mediumvioletred",
  "yellow",
  "orange",
  "purple",
  "yellowgreen",
  "forestgreen",
  "lawngreen",
  "green",
  "skyblue",
  "aliceblue",
  "blue",
  "navy",
  "indigo",
  "red",
  "firebrick",
  "darkred",
  "maroon",
  "silver",
  "black"
];

export default ColorSquare;
