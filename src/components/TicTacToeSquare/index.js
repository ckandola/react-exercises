import React, {useState} from 'react';
import './TicTacToeSquare.css';

const TicTacToeSquare = ({disabled, player, onClick}) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue(player);
    onClick();
  }

    return (
      <button className="square" disabled={disabled} onClick={handleClick}>{value}</button>
    );
}


export default TicTacToeSquare;