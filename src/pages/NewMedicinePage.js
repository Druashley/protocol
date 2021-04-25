import React from "react";
import TitleSection from "../components/TitleSection.js";
import NewMedicineForm from "../components/NewMedicineForm";

const NewMedicinePage = () => {
  return (
    <div>
      <TitleSection phrase="Please fill out the form to create a new medicine protocol" />
      <NewMedicineForm />
    </div>
  );
};

export default NewMedicinePage;
