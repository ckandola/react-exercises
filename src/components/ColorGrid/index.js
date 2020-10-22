import React from "react";
import ColorSquare from "../ColorSquare";

class ColorGrid extends React.Component {
  createGrid = () => {
    let table = [];
    for (let i = 0; i < 8; i++) {
      let columns = [];
      for (let j = 0; j < 3; j++) {
        columns.push(
          <td key={i + "" + j}>
            <ColorSquare />
          </td>
        );
      }
      table.push(
        <tbody key={i}>
          <tr>{columns}</tr>
        </tbody>
      );
    }
    return table;
  };
  render() {
    return <table>{this.createGrid()}</table>;
  }
}

export default ColorGrid;