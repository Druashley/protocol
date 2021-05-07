import React from "react";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";
import NewSection from "../components/NewSection";

const MainPage = ({ medicineList }) => {
  return (
    <div>
      <TitleSection
        phrase="Please use the search bar to find the answer you are seeking. Also,
            look through our newest changes to the protocol."
      />

      <SearchBar medicineList={medicineList} />
      <NewSection medicineList={medicineList} />
    </div>
  );
};

export default MainPage;
