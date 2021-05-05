import React from "react";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";
import NewSection from "../components/NewSection";
import { Link } from "react-router-dom";

const MainPage = ({ medicineList }) => {
  return (
    <div>
      <TitleSection
        phrase="Please use the search bar to find the answer you are seeking. Also,
            look through our newest changes to the protocol."
      />

      <SearchBar />
      <NewSection medicineList={medicineList} />
      <button className="px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:bg-blue-400  focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
        <Link to="/newmedicine">Create New Medicine Protocol</Link>
      </button>
    </div>
  );
};

export default MainPage;
