import React from "react";

const ResultSection = ({ result }) => {
  return (
    <div>
      {result == null || result.name ? (
        <div>
          <div className="max-w-screen-xl mx-auto p-8 mb-24 text-left">
            <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
              {result.name}
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
                <div className="mt-2">
                  <div className="text-base leading-6 text-gray-600">
                    {result.action}
                  </div>
                </div>
              </li>
              <li className="w-2/5">
                <div className="text-lg font-medium leading-6 text-blue-600">
                  Indications
                </div>
                <ul className="mt-2 list-disc">
                  {result.indications.map((indication) => {
                    return (
                      <li className="text-base leading-6 text-gray-600 m-4">
                        {indication}
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
                  {result.contraindications.map((contraindication) => {
                    return (
                      <li className="text-base leading-6 text-gray-600 m-4">
                        {contraindication}
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
                  {result.sideEffects.map((sideEffect) => {
                    return (
                      <li className="text-base leading-6 text-gray-600 m-4">
                        {sideEffect}
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
                  {result.routes.map((route) => {
                    return (
                      <li className="text-base leading-6 text-gray-600 m-4">
                        {route}
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
                  {result.ivInfusion.map((iv) => {
                    return (
                      <li className="text-base leading-6 text-gray-600 m-4">
                        {iv}
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