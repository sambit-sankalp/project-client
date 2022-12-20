import React, { useState } from 'react';
import { calculateWinner } from '../../utils/winner';
import Board from './Board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <div className="flex justify-center items-center flex-col mt-7">
      <div className="h-[3rem] w-[300px] bg-[#FFE79E] flex justify-center items-center">
        <p className="text-black text-sm font-epilogue">Your Move</p>
      </div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      {/* <div class="flex justify-between">
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
      </div> */}
    </div>
  );
};

export default Game;
