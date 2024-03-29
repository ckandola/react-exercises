import React, {useState, useEffect} from 'react';
import './TicTacToeSquare.css';
import PropTypes from 'prop-types';

const TicTacToeSquare = ({disabled, player, onClick}) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue(player);
    onClick();
  }

  useEffect(() => {
    if (!disabled) {
      setValue("");
    }
  }, [disabled]);

    return (
      <button className="tictactoe-square" disabled={disabled} onClick={handleClick}>{value}</button>
    );
}


export default TicTacToeSquare;

TicTacToeSquare.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  player: PropTypes.string,
  onClick: PropTypes.func
};
