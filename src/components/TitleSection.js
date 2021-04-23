import React from "react";

const TitleSection = () => {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-8 mx-auto py-20 lg:px-4">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-1 text-2xl font-semibold tracking-widest text-blue-600 sm:text-1xl uppercase title-font">
              Mercy Flights
            </h2>
            <h1 className="mb-6 text-3xl font-semibold tracking-tighter text-blue-700 sm:text-6xl title-font">
              {" "}
              Protocol
            </h1>
          </div>
          <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">
            Please use the search bar to find the answer you are seeking. Also,
            look through our newest changes to the protocol.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TitleSection;
