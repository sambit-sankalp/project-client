import React from 'react';

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-4xl font-bilbo">async</h1>
        <h1 className="text-8xl w-11/12 text-center font-bilbo mt-4">
          tic tac toe
        </h1>
      </div>
      <button
        type="submit"
        className="w-full text-white font-epilogue font-bold shadow-xl bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Login
      </button>
      <button
        type="submit"
        className="w-full mt-4 text-white font-epilogue font-bold shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Register
      </button>
    </div>
  );
};

export default Landing;
