import React, { useState, useEffect } from "react";

const NewMedicineForm = () => {
  const [medicineName, setMedicineName] = useState("");
  const [tradeName, setTradeName] = useState("");

  const [action, setAction] = useState([""]);
  const [actionLineCount, setActionLineCount] = useState(["1"]);
  const [indications, setIndications] = useState([""]);
  const [indicationsLineCount, setIndicationsLineCount] = useState(["1"]);
  const [contraindications, setContraindications] = useState([""]);
  const [contraindicationsLineCount, setContraindicationsLineCount] = useState([
    "1",
  ]);
  const [sideEffectsLineCount, setSideEffectsLineCount] = useState(["1"]);
  const [sideEffects, setSideEffects] = useState([""]);
  const [routesLineCount, setRoutesLineCount] = useState(["1"]);
  const [routes, setRoutes] = useState([""]);
  const [ivInfusionLineCount, setIvInfusionLineCount] = useState(["1"]);
  const [ivInfusion, setIvInfusion] = useState([""]);

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

  const indicationsHandler = (e, line) => {
    const newIndication = e.target.value;
    const currentIndication = indications;
    const newArray = [...currentIndication];
    newArray[line - 1] = newIndication;
    setIndications(newArray);
  };

  const contraindicationsHandler = (e, line) => {
    const newContraindication = e.target.value;
    const currentContraindication = contraindications;
    const newArray = [...currentContraindication];
    newArray[line - 1] = newContraindication;
    setContraindications(newArray);
  };

  const sideEffectsHandler = (e, line) => {
    const newSideEffect = e.target.value;
    const currentSideEffect = sideEffects;
    const newArray = [...currentSideEffect];
    newArray[line - 1] = newSideEffect;
    setSideEffects(newArray);
  };

  const routesHandler = (e, line) => {
    const newRoute = e.target.value;
    const currentRoute = routes;
    const newArray = [...currentRoute];
    newArray[line - 1] = newRoute;
    setRoutes(newArray);
  };

  const ivInfusionHandler = (e, line) => {
    const newIvInfusion = e.target.value;
    const currentIvInfusion = ivInfusion;
    const newArray = [...currentIvInfusion];
    newArray[line - 1] = newIvInfusion;
    setIvInfusion(newArray);
  };

  const submitMedicineHandler = (event) => {
    event.preventDefault();
    setNewMedicine({
      name: medicineName,
      tradeName: tradeName,
      action: action,
      indications: indications,
      contraindications: contraindications,
      sideEffects: sideEffects,
      routes: routes,
      ivInfusion: ivInfusion,
    });
  };

  const createActionExtraLine = () => {
    const initialArray = actionLineCount;
    const initialCount = actionLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];
    setActionLineCount(newArray);
  };

  const createindicationExtraLine = () => {
    const initialArray = indicationsLineCount;
    const initialCount = indicationsLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];
    setIndicationsLineCount(newArray);
  };

  const createContraindicationExtraLine = () => {
    const initialArray = contraindicationsLineCount;
    const initialCount = contraindicationsLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];
    setContraindicationsLineCount(newArray);
  };

  const createSideEffectExtraLine = () => {
    const initialArray = sideEffectsLineCount;
    const initialCount = sideEffectsLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];
    setSideEffectsLineCount(newArray);
  };

  const createRoutesExtraLine = () => {
    const initialArray = routesLineCount;
    const initialCount = routesLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];
    setRoutesLineCount(newArray);
  };

  const createIvInfusionExtraLine = () => {
    const initialArray = ivInfusionLineCount;
    const initialCount = ivInfusionLineCount.slice(-1).pop();
    const newCount = parseInt(initialCount) + 1;
    const newArray = [...initialArray, newCount.toString()];
    setIvInfusionLineCount(newArray);
  };

  const removeFormLine = (
    description,
    lineCount,
    setDescription,
    setDescriptionLineCount
  ) => {
    let initialArray = description;
    let initalCount = lineCount;

    initalCount.pop();
    initialArray.pop();

    setDescription(initialArray);
    setDescriptionLineCount(initalCount);
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

            <h1 onClick={createActionExtraLine}>+</h1>
            <h1
              onClick={() =>
                removeFormLine(
                  action,
                  actionLineCount,
                  setAction,
                  setActionLineCount
                )
              }
            >
              -
            </h1>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Indications
            </label>

            {indicationsLineCount.map((line) => {
              return (
                <input
                  className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                  type="text"
                  name={`indications${line}`}
                  id={`indications${line}`}
                  key={line}
                  value={indications[line - 1]}
                  onChange={(e) => indicationsHandler(e, line)}
                />
              );
            })}

            <h1 onClick={createindicationExtraLine}>+</h1>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Contraindications
            </label>

            {contraindicationsLineCount.map((line) => {
              return (
                <input
                  className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                  type="text"
                  name={`contraindications${line}`}
                  id={`contraindications${line}`}
                  key={line}
                  value={contraindications[line - 1]}
                  onChange={(e) => contraindicationsHandler(e, line)}
                />
              );
            })}

            <h1 onClick={createContraindicationExtraLine}>+</h1>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Side Effects
            </label>

            {sideEffectsLineCount.map((line) => {
              return (
                <input
                  className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                  type="text"
                  name={`sideEffects${line}`}
                  id={`sideEffects${line}`}
                  key={line}
                  value={sideEffects[line - 1]}
                  onChange={(e) => sideEffectsHandler(e, line)}
                />
              );
            })}

            <h1 onClick={createSideEffectExtraLine}>+</h1>
          </div>

          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Routes
            </label>

            {routesLineCount.map((line) => {
              return (
                <input
                  className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                  type="text"
                  name={`routes${line}`}
                  id={`routes${line}`}
                  key={line}
                  value={routes[line - 1]}
                  onChange={(e) => routesHandler(e, line)}
                />
              );
            })}

            <h1 onClick={createRoutesExtraLine}>+</h1>
          </div>

          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              IV Infusion
            </label>

            {ivInfusionLineCount.map((line) => {
              return (
                <input
                  className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                  type="text"
                  name={`ivInfusion${line}`}
                  id={`ivInfusion${line}`}
                  key={line}
                  value={ivInfusion[line - 1]}
                  onChange={(e) => ivInfusionHandler(e, line)}
                />
              );
            })}

            <h1 onClick={createIvInfusionExtraLine}>+</h1>
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
