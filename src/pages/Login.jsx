import React from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const notify = () =>
    toast.custom(
      (t) => (
        <div
          className={`w-full h-[5rem] bg-[#EB5757] flex justify-start items-center rounded-lg my-3 shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 relative transition-all duration-500 ease-in-out ${
            t.visible ? 'bottom-5' : '-bottom-96'
          }`}
        >
          <h4 className="w-full text-white text-sm font-epilogue font-normal ml-3">
            Enter correct details.
          </h4>
        </div>
      ),
      { id: 'unique-notification', position: 'bottom-center' }
    );
  return (
    <div class="w-full p-4 bg-white">
      <FontAwesomeIcon icon={faChevronLeft} />
      <form className="mt-10 w-full h-[85vh] flex justify-between items-start flex-col">
        <div className="w-full">
          <h5 className="font-extrabold font-epilogue text-sm text-gray-900 dark:text-white">
            Login
          </h5>
          <h5 class="mt-2 font-extrabold font-epilogue text-3xl w-11/12 text-gray-900 dark:text-white">
            Please enter your details
          </h5>
          <div class="mt-4">
            <label
              for="username"
              className="block my-1 font-bold font-epilogue text-sm text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-100 font-light font-epilogue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Type your username here"
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
        <button
          onClick={notify}
          type="submit"
          className="w-full text-white font-epilogue shadow-xl font-bold bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default Login;
