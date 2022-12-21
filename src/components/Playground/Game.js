import React, { useEffect, useState } from 'react';
import { calculateWinner } from '../../utils/winner';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import { updateGame } from '../../slices/games/updateGameSlice';
import { Link } from 'react-router-dom';

const Game = ({ friendName }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [selected, setSelected] = useState(false);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? 'X' : 'O';

  const dispatch = useDispatch();

  const gameDetails = useSelector((state) => state.getGamebyID);
  const { game } = gameDetails;

  const result = useSelector((state) => state.updateGame);

  console.log(game);

  useEffect(() => {
    if (game) {
      setHistory(game.history);
      setStepNumber(game.stepnumber);
      setXisNext(game.xIsNext);
    }
  }, [game, result]);

  const handleClick = (i) => {
    if (selected) return;
    setSelected(true);
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    // return if won or occupied
    if (winner || squares[i] === 'X' || squares[i] === 'O') return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelected(false);
    dispatch(
      updateGame({
        id: game._id,
        stepnumber: stepNumber,
        history,
        xIsNext: game.xIsNext ? false : true,
        winner,
        isCompleted:
          stepNumber === 9 || winner === 'X' || winner === 'O' ? true : false,
        player: game.player,
        createdBy: game.createdBy,
      })
    );
    if (result) window.location.reload();
  };

  console.log(
    JSON.parse(localStorage.getItem('userInfo')).email !== game.createdBy
  );

  const winnerName =
    winner === 'X'
      ? JSON.parse(localStorage.getItem('userInfo')).email === game.createdBy
        ? 'You'
        : friendName
      : JSON.parse(localStorage.getItem('userInfo')).email !== game.createdBy
      ? 'You'
      : friendName;

  return (
    <div className="flex justify-center items-center flex-col mt-7">
      <div className="h-[3rem] w-[300px] bg-[#FFE79E] flex justify-center items-center">
        <p className="text-black text-sm font-epilogue">
          {game &&
            (game.isCompleted
              ? winner === ''
                ? 'Its a DRAW'
                : `${winnerName} WON`
              : xIsNext
              ? JSON.parse(localStorage.getItem('userInfo')).email ===
                game.createdBy
                ? 'Your Move'
                : 'Their Move'
              : JSON.parse(localStorage.getItem('userInfo')).email !==
                game.createdBy
              ? 'Your Move'
              : 'Their Move')}
        </p>
      </div>
      {game && <Board squares={history[stepNumber]} onClick={handleClick} />}

      {game && game.isCompleted ? (
        <Link className="w-full" to="/home/details">
          <button
            type="submit"
            className="w-full mt-5 text-white font-epilogue font-bold shadow-xl bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Start another Game
          </button>
        </Link>
      ) : xIsNext ? (
        game.createdBy ===
        JSON.parse(localStorage.getItem('userInfo')).email ? (
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full mt-7 text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="w-full mt-7 text-white font-epilogue shadow-xl cursor-not-allowed font-bold bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
            disabled
          >
            Waiting for Opponent
          </button>
        )
      ) : game.createdBy !==
        JSON.parse(localStorage.getItem('userInfo')).email ? (
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full mt-7 text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          {...(game && game.isCompleted && 'disabled')}
        >
          Submit
        </button>
      ) : (
        <button
          type="submit"
          className="w-full mt-7 text-white font-epilogue shadow-xl font-bold cursor-not-allowed bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          disabled
        >
          Waiting for Opponent
        </button>
      )}
    </div>
  );
};

export default Game;
