import React, { useEffect } from 'react';
import Game from '../components/Playground/Game';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGameByID } from '../slices/games/getGameByIdSlice';
import Loader from '../components/Loader';
import { getUser } from '../slices/auth/getUserSlice';

const Playground = () => {
  const { id } = useParams();

  const result = useSelector((state) => state.getGamebyID);
  const { loading, error, game } = result;

  const dispatch = useDispatch();

  const { createdBy, player } = game;

  useEffect(() => {
    dispatch(getGameByID(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (createdBy && player) {
      const friendEmail =
        JSON.parse(localStorage.getItem('userInfo')).email === createdBy
          ? player
          : createdBy;

      dispatch(getUser(friendEmail));
    }
  }, [createdBy, dispatch, player]);

  const userResult = useSelector((state) => state.getUser);
  const { user } = userResult;

  return (
    <div className="w-full p-3 bg-white">
      <FontAwesomeIcon icon={faChevronLeft} />
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        game && (
          <>
            <h5 className="mt-6 font-bold font-epilogue text-2xl text-gray-900 dark:text-white">
              Game with {user?.name}
            </h5>
            <h5 className="font-normal mt-2 font-epilogue text-sm text-gray-900 dark:text-white">
              Your Piece
            </h5>
            <img
              className="w-10 h-10 m-2"
              src="https://res.cloudinary.com/sambitsankalp/image/upload/v1671540910/x_uuo5tv.png"
              alt="X"
            />

            <Game />
            <button
              type="submit"
              className="w-full mt-7 text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </>
        )
      )}
    </div>
  );
};

export default Playground;
