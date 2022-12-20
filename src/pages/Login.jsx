import React from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  return (
    <div class="w-full p-4 bg-white">
      <FontAwesomeIcon icon={faChevronLeft} />
      <form className="mt-10 w-full h-[85vh] flex justify-between items-start flex-col">
        <div className="w-full">
          <h5 className="font-extrabold font-epilogue text-sm text-gray-900 dark:text-white">
            Create Account
          </h5>
          <h5 class="mt-2 font-extrabold font-epilogue text-3xl w-11/12 text-gray-900 dark:text-white">
            Let’s get to know you better!
          </h5>
          <div className="mt-8">
            <label
              for="name"
              className="font-epilogue font-bold my-2 text-sm text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" bg-gray-100 my-1 font-epilogue text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Type your name here"
              required
            />
          </div>
          <div class="mt-4">
            <label
              for="email"
              className="block my-1 font-bold font-epilogue text-sm text-gray-900"
            >
              Username
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-100 font-light font-epilogue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Type your username here"
              required
            />
          </div>
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
              className="bg-gray-100 font-light font-epilogue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Type your email here"
              required
            />
          </div>
          <div className="mt-4">
            <label
              for="password"
              className="block mb-2 font-bold text-sm font-epilogue text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your password here"
              className="bg-gray-100 my-1 font-epilogue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-[5rem] bg-green-400 flex justify-start items-center rounded-lg my-3">
            <h4 className="w-full text-white text-sm font-epilogue font-normal ml-3">
              Congratulations!!! Account created.
            </h4>
          </div>
          <button
            type="submit"
            className="w-full text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
