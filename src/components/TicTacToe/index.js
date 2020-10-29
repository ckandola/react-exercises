import React , { useState } from 'react';
import TicTacToeSquare from '../TicTacToeSquare';
import './TicTacToe.css';

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [usedSpots, setUsedSpots] = useState(new Array(9));
  const [gameOver, setGameOver] = useState(false);

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
        break;
      }
    }
  }

  const incrementCount = id => {
      setCount(c => c + 1);
      if(count === 9) {
        setGameOver(true);
      }
      const spotsCopy = usedSpots.slice();
      spotsCopy[id] = player;
      setUsedSpots(spotsCopy);
      calculateWin(spotsCopy);
  }

  const player = count % 2 === 0 ? 'X' : 'O';
  return (
  <div className="board">
    <div className="message" key="turn">Turn: {count}</div>
      {!gameOver ? <div key="player">Player: {player}</div> : <div>GAME OVER - {player === 'X' ? 'O' : 'X'} WINS</div>}
    <div>
    <div className="board-row" key={10}>
      <TicTacToeSquare key={0} player={player} disabled={gameOver} onClick={()=>incrementCount(0)}/>
      <TicTacToeSquare key={1} player={player} disabled={gameOver} onClick={()=>incrementCount(1)}/>
      <TicTacToeSquare key={2} player={player} disabled={gameOver} onClick={()=>incrementCount(2)}/>
    </div>
    <div className="board-row" key={20}>
    <TicTacToeSquare key={3} player={player} disabled={gameOver} onClick={()=>incrementCount(3)}/>
    <TicTacToeSquare key={4} player={player} disabled={gameOver} onClick={()=>incrementCount(4)}/>
    <TicTacToeSquare key={5} player={player} disabled={gameOver} onClick={()=>incrementCount(5)}/>
    </div>
    <div className="board-row" key={30}>
    <TicTacToeSquare key={6} player={player} disabled={gameOver} onClick={()=>incrementCount(6)}/>
    <TicTacToeSquare key={7} player={player} disabled={gameOver} onClick={()=>incrementCount(7)}/>
    <TicTacToeSquare key={8} player={player} disabled={gameOver} onClick={()=>incrementCount(8)}/>      
    </div>
  </div>
  </div>
  );
}

export default TicTacToe;