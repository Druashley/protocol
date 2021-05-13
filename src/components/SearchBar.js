import React, { useState, useEffect } from "react";

import ResultSection from "./ResultSection";

const SearchBar = ({ medicineList, searchText, setSearchText }) => {
  // const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState({});

  const searchHandler = (e) => {
    const newSearch = e.target.value;
    e.preventDefault();
    setSearchText(newSearch.toLowerCase());
  };

  useEffect(() => {
    for (let i = 0; i < medicineList.length; i++) {
      if (
        medicineList[i].medicineName.toLowerCase().includes(searchText) &&
        searchText.length > 1
      ) {
        setResult(medicineList[i]);
        break;
      } else {
        setResult({});
      }
    }
  }, [searchText]);

  return (
    <div className="container mx-auto lg:px-4 text-left lg:text-center px-8">
      <form className="" action="/">
        <div className="flex flex-col mb-4 rounded md:items-center">
          <label className="mb-2 uppercase font-bold text-lg text-blue-600">
            Search by medicine name
          </label>
          <input
            value={searchText}
            onChange={searchHandler}
            className="border py-2 px-3 text-grey-darkest rounded md:w-1/3"
            type="text"
            name="search"
            id="search"
            autoComplete="off"
          ></input>
        </div>
      </form>
      {result == null || result.medicineName ? (
        <div>
          <ResultSection result={result} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default SearchBar;
