import React, { useState } from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameDetails = () => {
  const [email, setemail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    window.location.href = '/home/playground';
  };

  return (
    <div class="w-full p-4 bg-white">
      <FontAwesomeIcon icon={faChevronLeft} />
      <form className="mt-10 w-full h-[85vh] flex justify-between items-start flex-col">
        <div className="w-full">
          <h5 className="font-extrabold font-epilogue text-sm text-gray-900 dark:text-white">
            Start a new game
          </h5>
          <h5 class="mt-2 font-extrabold font-epilogue text-3xl w-11/12 text-gray-900 dark:text-white">
            Whom do you want to play with?
          </h5>
          <div class="mt-4">
            <label
              for="email"
              className="block my-1 font-bold font-epilogue text-sm text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setemail(e.target.value)}
              className="bg-gray-100 font-light font-epilogue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Type player email here"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Start Game
        </button>
      </form>
    </div>
  );
};

export default GameDetails;
