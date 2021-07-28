import React , { useState } from 'react';
import TicTacToeSquare from './TicTacToeSquare';
import './TicTacToe.css';

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [usedSpots, setUsedSpots] = useState(new Array(9));
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('GAME OVER');

  const playAgain = () => {
    setGameOverMessage('GAME OVER');
    setGameOver(false);
    setCount(0);
    setUsedSpots([]);
  }

  const calculateWin = spots => {
    const wins = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]   
    ];
    for(let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (spots[a] && spots[a] === spots[b] && spots[a] === spots[c]) {
        setGameOver(true);
        setGameOverMessage(player === 'X' ? gameOverMessage + ' - X WINS' : gameOverMessage + ' - O WINS');
        break;
      }
    }
  }

  const incrementCount = id => {
    if(count === 8) {
      setGameOverMessage(gameOverMessage + ' - NO WINNER');
      setGameOver(true);
    }
    setCount(c => c + 1);
      const spotsCopy = usedSpots.slice();
      spotsCopy[id] = player;
      setUsedSpots(spotsCopy);
      calculateWin(spotsCopy);
  }

  const player = count % 2 === 0 ? 'X' : 'O';
  return (
    <div className="board">
      <div className="message" key="turn">Turn: {count}</div>
      {!gameOver ? 
        <div key="player">Player: {player}</div> :
        <div> 
          {gameOverMessage}
          <div>
            <button className="tictactoe-gameover-button" onClick={playAgain}>Play Again</button>
          </div>
        </div>
      }
      <div className="board-row" key={`row-1`}>
        <TicTacToeSquare
          key={0}
          player={player}
          disabled={gameOver || usedSpots[0]}
          onClick={() => incrementCount(0)}
        />
        <TicTacToeSquare
          key={1}
          player={player}
          disabled={gameOver || usedSpots[1]}
          onClick={() => incrementCount(1)}
        />
        <TicTacToeSquare
          key={2}
          player={player}
          disabled={gameOver || usedSpots[2]}
          onClick={() => incrementCount(2)}
        />
      </div>
      <div className="board-row" key={`row-2`}>
        <TicTacToeSquare
          key={3}
          player={player}
          disabled={gameOver || usedSpots[3]}
          onClick={() => incrementCount(3)}
        />
        <TicTacToeSquare
          key={4}
          player={player}
          disabled={gameOver || usedSpots[4]}
          onClick={() => incrementCount(4)}
        />
        <TicTacToeSquare
          key={5}
          player={player}
          disabled={gameOver || usedSpots[5]}
          onClick={() => incrementCount(5)}
        />
      </div>
      <div className="board-row" key={`row-3`}>
        <TicTacToeSquare
          key={6}
          player={player}
          disabled={gameOver || usedSpots[6]}
          onClick={() => incrementCount(6)}
        />
        <TicTacToeSquare
          key={7}
          player={player}
          disabled={gameOver || usedSpots[7]}
          onClick={() => incrementCount(7)}
        />
        <TicTacToeSquare
          key={8}
          player={player}
          disabled={gameOver || usedSpots[8]}
          onClick={() => incrementCount(8)}
        />
      </div>
    </div>
  );
}

export default TicTacToe;