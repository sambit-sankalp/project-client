import React from 'react';
import { Link } from 'react-router-dom';
// import Card from '../components/Card';

const Home = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl mb-4 font-epilogue font-bold">Your Games</h1>
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button
        title="New Game"
        className="fixed z-90 font-epilogue bottom-5 right-4 bg-[#270F36] drop-shadow-lg flex justify-center items-center text-white text-sm px-2 py-1 rounded-md shadow-md"
      >
        <span className="text-2xl mr-1">+</span> New Game
      </button> */}
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl w-11/12 text-center font-bilbo mt-4">
          No Games Found
        </h1>
        <Link className="w-full mt-5" to="/home/details">
          <button
            type="submit"
            className="w-full text-white font-epilogue font-bold shadow-xl bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Start a New Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
