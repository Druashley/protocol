import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const NewMedicineForm = () => {
  const [medicineName, setMedicineName] = useState("");
  const [tradeName, setTradeName] = useState("");

  const [newMedicine, setNewMedicine] = useState([]);

  const [actionList, setActionList] = useState([]);
  const [actionName, setActionName] = useState("");

  const [indicationsList, setIndicationsList] = useState([]);
  const [indicationName, setIndicationName] = useState("");

  const [contraindicationsList, setContraindicationsList] = useState([]);
  const [contraindicationName, setContraindicationName] = useState("");

  const [sideEffectsList, setSideEffectsList] = useState([]);
  const [sideEffectName, setSideEffectName] = useState("");

  const [routesList, setRoutesList] = useState([]);
  const [routeName, setRouteName] = useState("");

  const [ivInfusionList, setIvInfusionList] = useState([]);
  const [ivInfusionName, setIvInfusionName] = useState("");

  const history = useHistory();

  const submitMedicineHandler = (event) => {
    event.preventDefault();

    setNewMedicine({
      medicineName: medicineName,
      tradeName: tradeName,
      action: actionList,
      indications: indicationsList,
      contraindications: contraindicationsList,
      sideEffects: sideEffectsList,
      routes: routesList,
      ivInfusion: ivInfusionList,
    });

    const url = "/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        medicineName,
        tradeName,
        actionList,
        indicationsList,
        contraindicationsList,
        sideEffectsList,
        routesList,
        ivInfusionList,
      }),
    };
    history.push("/");

    //   fetch(url, requestOptions)
    //       .then(response => console.log('Submitted successfully'))
    //       .catch(error => console.log('Form submit error', error))
    // };

    fetch(url, requestOptions);
  };

  const addAction = (e) => {
    if (actionName.length > 0) {
      setActionList([
        ...actionList,
        {
          id: actionList.length,
          name: actionName,
        },
      ]);
      setActionName("");
    }
  };

  const removeAction = (id) => {
    const newList = actionList.filter((item) => item.id !== id);
    setActionList(newList);
  };

  const addIndication = (e) => {
    if (indicationName.length > 0) {
      setIndicationsList([
        ...indicationsList,
        {
          id: indicationsList.length,
          name: indicationName,
        },
      ]);
      setIndicationName("");
    }
  };

  const removeIndication = (id) => {
    const newList = indicationsList.filter((item) => item.id !== id);
    setIndicationsList(newList);
  };

  const addContraindication = (e) => {
    if (contraindicationName.length > 0) {
      setContraindicationsList([
        ...contraindicationsList,
        {
          id: contraindicationsList.length,
          name: contraindicationName,
        },
      ]);
      setContraindicationName("");
    }
  };

  const removeContraindication = (id) => {
    const newList = contraindicationsList.filter((item) => item.id !== id);
    setContraindicationsList(newList);
  };

  const addSideEffect = (e) => {
    if (sideEffectName.length > 0) {
      setSideEffectsList([
        ...sideEffectsList,
        {
          id: sideEffectsList.length,
          name: sideEffectName,
        },
      ]);
      setSideEffectName("");
    }
  };

  const removeSideEffect = (id) => {
    const newList = sideEffectsList.filter((item) => item.id !== id);
    setSideEffectsList(newList);
  };

  const addRoute = (e) => {
    if (routeName.length > 0) {
      setRoutesList([
        ...routesList,
        {
          id: routesList.length,
          name: routeName,
        },
      ]);
      setRouteName("");
    }
  };

  const removeRoute = (id) => {
    const newList = routesList.filter((item) => item.id !== id);
    setRoutesList(newList);
  };

  const addIvInfusion = (e) => {
    if (ivInfusionName.length > 0) {
      setIvInfusionList([
        ...ivInfusionList,
        {
          id: ivInfusionList.length,
          name: ivInfusionName,
        },
      ]);
      setIvInfusionName("");
    }
  };

  const removeIvInfusion = (id) => {
    const newList = ivInfusionList.filter((item) => item.id !== id);
    setIvInfusionList(newList);
  };

  return (
    <div className="flex items-center h-screen w-full bg-gradient-to-r from-blue-200 to-blue-500  md:h-4/5 md:w-4/5 md:mx-auto md:rounded">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-7xl md:mx-auto">
        <h1 className="text-4xl text-blue-700 font-bold ">Medicine Details</h1>
        <form
          className="mb-6 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="POST"
          onSubmit={submitMedicineHandler}
          autoComplete="off"
        >
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Drug Name
            </label>

            <div className="flex items-center ">
              <input
                name="medicineName"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Trade Name
            </label>

            <div className="flex items-center ">
              <input
                name="tradeName"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={tradeName}
                onChange={(e) => setTradeName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Action
            </label>
            <ul className="flex items-start gap-4 flex-wrap list-disc">
              {actionList.map((action) => (
                <li
                  className="w-2/5 break-words text-base text-gray-600 max-w-3xl m-2 hover:line-through hover:text-red-500 cursor-pointer"
                  key={action.id}
                  onClick={() => removeAction(action.id)}
                >
                  {action.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <input
                name="item"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={actionName}
                onChange={(e) => setActionName(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                onClick={addAction}
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Indications
            </label>
            <ul className="flex items-start gap-4 flex-wrap list-disc">
              {indicationsList.map((indication) => (
                <li
                  className="w-2/5 break-words text-base text-gray-600 max-w-3xl m-2 hover:line-through hover:text-red-500 cursor-pointer"
                  key={indication.id}
                  onClick={() => removeIndication(indication.id)}
                >
                  {indication.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <input
                name="item"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={indicationName}
                onChange={(e) => setIndicationName(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                onClick={addIndication}
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Contraindications
            </label>
            <ul className="flex items-start gap-4 flex-wrap list-disc">
              {contraindicationsList.map((contraindication) => (
                <li
                  className="w-2/5 break-words text-base text-gray-600 max-w-3xl m-2 hover:line-through hover:text-red-500 cursor-pointer"
                  key={contraindication.id}
                  onClick={() => removeContraindication(contraindication.id)}
                >
                  {contraindication.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <input
                name="item"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={contraindicationName}
                onChange={(e) => setContraindicationName(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                onClick={addContraindication}
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Side Effects
            </label>
            <ul className="flex items-start gap-4 flex-wrap list-disc">
              {sideEffectsList.map((sideEffect) => (
                <li
                  className="w-2/5 break-words text-base text-gray-600 max-w-3xl m-2 hover:line-through hover:text-red-500 cursor-pointer"
                  key={sideEffect.id}
                  onClick={() => removeSideEffect(sideEffect.id)}
                >
                  {sideEffect.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <input
                name="item"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={sideEffectName}
                onChange={(e) => setSideEffectName(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                onClick={addSideEffect}
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              Routes
            </label>
            <ul className="flex items-start gap-4 flex-wrap list-disc">
              {routesList.map((route) => (
                <li
                  className="w-2/5 break-words text-base text-gray-600 max-w-3xl m-2 hover:line-through hover:text-red-500 cursor-pointer"
                  key={route.id}
                  onClick={() => removeRoute(route.id)}
                >
                  {route.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <input
                name="item"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={routeName}
                onChange={(e) => setRouteName(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                onClick={addRoute}
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label
              className="mb-2 uppercase font-bold text-lg text-blue-600"
              htmlFor="action"
            >
              IV Infusion
            </label>
            <ul className="flex items-start gap-4 flex-wrap list-disc">
              {ivInfusionList.map((ivInfusion) => (
                <li
                  className="w-2/5 break-words text-base text-gray-600 max-w-3xl m-2 hover:line-through hover:text-red-500 cursor-pointer"
                  key={ivInfusion.id}
                  onClick={() => removeIvInfusion(ivInfusion.id)}
                >
                  {ivInfusion.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center ">
              <input
                name="item"
                type="text"
                className="border mb-2 py-2 px-3 text-grey-darkest md:mr-2"
                value={ivInfusionName}
                onChange={(e) => setIvInfusionName(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                onClick={addIvInfusion}
                className="cursor-pointer ml-2"
              />
            </div>
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
