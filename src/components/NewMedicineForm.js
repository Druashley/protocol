import React, { useState } from "react";

const NewMedicineForm = () => {
  const [medicineName, setMedicineName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [action, setAction] = useState([]);
  const [actionLineCount, setActionLineCount] = useState(["1"]);

  const [newMedicine, setNewMedicine] = useState([]);

  const medicineNameHandler = (e) => {
    const newMedicineName = e.target.value;
    setMedicineName(newMedicineName);
  };

  const tradeNameHandler = (e) => {
    const newTradeName = e.target.value;
    setTradeName(newTradeName);
  };

  const actionHandler = (e, line) => {
    const newAction = e.target.value;
    const currentAction = action;
    const newArray = [...currentAction];
    newArray[line - 1] = newAction;
    setAction(newArray);
  };

  const submitMedicineHandler = (event) => {
    event.preventDefault();

    setNewMedicine({ name: medicineName, tradeName: tradeName });
  };

  const createExtraLine = () => {
    const initialArray = actionLineCount;
    const initialCount = actionLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];

    setActionLineCount(newArray);
    console.log(newArray);
  };

  return (
    <div className="flex items-center h-screen w-full bg-blue-50 md:h-4/5 md:w-4/5 md:mx-auto md:rounded">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-7xl md:mx-auto">
        <h1 className="text-4xl text-blue-700 font-bold ">Medicine Details</h1>
        <form
          className="mb-6 md:flex md:flex-wrap md:justify-between"
          //  action="/"
          // method="POST"
          onSubmit={submitMedicineHandler}
        >
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="name"
            >
              Medicine Name
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="name"
              id="name"
              value={medicineName}
              onChange={medicineNameHandler}
            />
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="tradeName"
            >
              Trade Name
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="tradeName"
              id="tradeName"
              value={tradeName}
              onChange={tradeNameHandler}
            />
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Action
            </label>

            {actionLineCount.map((line) => {
              return (
                <input
                  className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                  type="text"
                  name={`action${line}`}
                  id={`action${line}`}
                  key={line}
                  value={action[line - 1]}
                  onChange={(e) => actionHandler(e, line)}
                />
              );
            })}

            <h1 onClick={createExtraLine}>+</h1>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="indications"
            >
              Indications
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="indications"
              id="indications"
            />
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="sideEffects"
            >
              Side Effects
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="indications"
              id="indications"
            />
          </div>
          <button
            className="block bg-teal hover:bg-blue-700 text-white bg-blue-500 uppercase text-lg mx-auto p-4 rounded"
            //type="submit"
          >
            Create Protocol
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMedicineForm;
