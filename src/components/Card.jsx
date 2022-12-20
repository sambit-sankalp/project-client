import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm p-2 my-2 pl-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <h5 className="mb-2 text-2xl font-epilogue font-bold tracking-tight text-gray-900 dark:text-white">
          Game with Tanmay
        </h5>
      </a>
      <p className="mb-3 text-xm font-normal font-epilogue text-gray-700 dark:text-gray-400">
        Tanmay just made their move! It’s your turn to play now.
      </p>
      <p className="mb-3 text-xs font-normal font-epilogue text-gray-700 dark:text-gray-400">
        9th June 2022, 3:15pm
      </p>
      <button
        type="submit"
        className="w-full text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Play!
      </button>
    </div>
  );
};

export default Card;
