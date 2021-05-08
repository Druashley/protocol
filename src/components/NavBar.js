import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import e from "cors";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <div className="text-gray-700 bg-white ">
        <div className="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row">
          <Link to="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 className="font-semibold tracking-tighter text-gray-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
                {isAuthenticated ? `Hello ${user.nickname}` : "Protocol"}
              </h2>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center px-6 md:justify-center text-base md:ml-auto ">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </nav>

          <div className="pt-2 md:pt-0">
            {isAuthenticated ? (
              <Link
                to="/newmedicine"
                className=" text-center px-2 py-1 w-1/3 md:w-auto items-center md:px-8 md:py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring focus:outline-none"
              >
                Create Protocol
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
