import React from "react";

const MedicineTOC = ({ medicineList, setSearchText }) => {
  const searchHandler = (e, medicineName) => {
    const newSearch = medicineName;
    e.preventDefault();
    setSearchText(newSearch.toLowerCase());
  };

  return (
    <div className="container flex flex-col  w-full md:w-1/3 items-center justify-center">
      <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Medicine List
        </h3>
        <ul>
          {medicineList.map((medicine) => {
            return (
              <li
                className="border-gray-400 flex flex-row mb-2"
                onClick={(e) => searchHandler(e, medicine.medicineName)}
              >
                <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                  {medicine.medicineName}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MedicineTOC;
