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
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Click any grid</h3>
        <table style={{margin: 'auto'}}>{this.createGrid()}</table>
      </div>
    );
  }
}

export default ColorGrid;
