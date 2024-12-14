import React, { useState } from "react";
import {
  FAFSAApplicationsCreateForm,
  StudentsCreateForm,
  FinancialInformationCreateForm,
  AwardsCreateForm,
  SchoolEnrollmentCreateForm,
  CostAndAidCreateForm,
  DisbursementCreateForm,
  AppealsCreateForm,
} from "../ui-components"; // Adjust the path as necessary

function FormWorkflow() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  // Array of form components and their names
  const forms = [
    { component: FAFSAApplicationsCreateForm, name: "FAFSA Applications" },
    { component: StudentsCreateForm, name: "Students" },
    { component: FinancialInformationCreateForm, name: "Financial Information" },
    { component: AwardsCreateForm, name: "Awards" },
    { component: SchoolEnrollmentCreateForm, name: "School Enrollment" },
    { component: CostAndAidCreateForm, name: "Cost and Aid" },
    { component: DisbursementCreateForm, name: "Disbursement" },
    { component: AppealsCreateForm, name: "Appeals" },
  ];

  const handleSuccess = () => {
    console.log(React.version);

    if (currentFormIndex < forms.length - 1) {
      setCurrentFormIndex((prevIndex) => prevIndex + 1); // Move to the next form
    } else {
      alert("All forms have been successfully submitted!");
    }
  };

  const CurrentForm = forms[currentFormIndex].component;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{forms[currentFormIndex].name} Form</h2>
      <CurrentForm
        onSuccess={(data) => {
          console.log(`${forms[currentFormIndex].name} submitted successfully`, data);
          handleSuccess();
        }}
        onError={(error) => {
          console.error(`Error in ${forms[currentFormIndex].name} submission`, error);
        }}
      />
    </div>
  );
}

// Default export
export default FormWorkflow;
