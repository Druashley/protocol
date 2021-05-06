import React from "react";

const ResultSection = ({ result }) => {
  return (
    <div>
      {result == null || result.medicineName ? (
        <div>
          <div className="max-w-screen-xl mx-auto p-8 mb-24 text-left">
            <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
              {result.medicineName}
            </h2>
            <ul className="flex items-start gap-8 flex-wrap">
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Trade Name
                </div>
                <div className="mt-2">
                  <div className="text-base leading-6 text-gray-600">
                    {result.tradeName}
                  </div>
                </div>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Action
                </div>
                <ul className="mt-2 list-disc">
                  {result.actionList.map((action) => {
                    return (
                      <li
                        key={action.id}
                        className="text-base leading-6 text-gray-600 m-4"
                      >
                        {action.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Indications
                </div>
                <ul className="mt-2 list-disc">
                  {result.indicationsList.map((indication) => {
                    return (
                      <li
                        key={indication.id}
                        className="text-base leading-6 text-gray-600 m-4"
                      >
                        {indication.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Contraindications
                </div>
                <ul className="mt-2 list-disc">
                  {result.contraindicationsList.map((contraindication) => {
                    return (
                      <li
                        key={contraindication.id}
                        className="text-base leading-6 text-gray-600 m-4"
                      >
                        {contraindication.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Side Effects & Precautions
                </div>
                <ul className="mt-2 list-disc">
                  {result.sideEffectsList.map((sideEffect) => {
                    return (
                      <li
                        key={sideEffect.id}
                        className="text-base leading-6 text-gray-600 m-4"
                      >
                        {sideEffect.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Route & Dosage
                </div>
                <ul className="mt-2 list-disc">
                  {result.routesList.map((route) => {
                    return (
                      <li
                        key={route.id}
                        className="text-base leading-6 text-gray-600 m-4"
                      >
                        {route.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  IV Infusion (Intubated Patient Only)
                </div>
                <ul className="mt-2 list-disc">
                  {result.ivInfusionList.map((iv) => {
                    return (
                      <li
                        key={iv.id}
                        className="text-base leading-6 text-gray-600 m-4"
                      >
                        {iv.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultSection;
