import React, { useState } from "react";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";
import NewSection from "../components/NewSection";
import MedicineTOC from "../components/medicineTOC/MedicineTOC";

const MainPage = ({ medicineList }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <TitleSection phrase="This is not intended to be real a real EMS protocol. This is just a fun project I put together." />

      <SearchBar
        medicineList={medicineList}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <NewSection medicineList={medicineList} setSearchText={setSearchText} />
      <MedicineTOC medicineList={medicineList} setSearchText={setSearchText} />
    </div>
  );
};

export default MainPage;
