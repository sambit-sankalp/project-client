import React from 'react';
import Game from '../components/Playground/Game';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Playground = () => {
  return (
    <div className="w-full p-3 bg-white">
      <FontAwesomeIcon icon={faChevronLeft} />

      <h5 className="mt-6 font-bold font-epilogue text-2xl text-gray-900 dark:text-white">
        Game with Tanmay
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
    </div>
  );
};

export default Playground;
