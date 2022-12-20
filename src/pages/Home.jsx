import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl mb-4 font-epilogue font-bold">Your Games</h1>
      <Card />
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
      </button>
    </div>
  );
};

export default Home;
