import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div class="text-gray-700 bg-white ">
        <div class="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row">
          <Link to="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div class="inline-flex items-center">
              <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 class="font-semibold tracking-tighter text-gray-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
                Protocol
              </h2>
            </div>
          </Link>
          <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto ">
            <a
              ahref="#"
              class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              Login
            </a>
          </nav>
          <Link
            to="/newmedicine"
            class="items-center px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring focus:outline-none"
          >
            Create Protocol
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
