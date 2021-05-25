import React from "react";

const NewSection = ({ medicineList, setSearchText }) => {
  const searchHandler = (e, medicineName) => {
    const newSearch = medicineName;
    e.preventDefault();
    setSearchText(newSearch.toLowerCase());
  };

  return (
    <div>
      <div>
        <section className="text-gray-700 body-font">
          <div className="container px-8 pt-4 mx-auto ">
            <div className="flex flex-wrap text-center lg:divide-x">
              {medicineList.slice(0, 3).map((medicine) => {
                return (
                  <div className="w-full px-8 py-6 mx-auto lg:w-1/3">
                    <h2
                      onClick={(e) => searchHandler(e, medicine.medicineName)}
                      className="mb-3 text-lg font-semibold text-blue-600 lg:text-2xl uppercase cursor-pointer"
                    >
                      {medicine.medicineName}
                    </h2>
                    <p className="my-4 text-base leading-relaxed ">
                      {medicine.newsPhrase}
                    </p>
                    <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                      <h3 className="tracking-widest">{medicine.date}</h3>
                      <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-black lg:text-6xl">
                        <span className="ml-1 text-base text-gray-600">
                          {medicine.author}
                        </span>
                      </h2>
                    </div>
                    <button
                      onClick={(e) => searchHandler(e, medicine.medicineName)}
                      className="flex items-center px-8 py-3 mx-auto mt-6 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg hover:bg-gray-200 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                    >
                      Read more
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewSection;
