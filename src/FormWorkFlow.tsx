import React, { useState } from "react";
import {
  FAFSAApplicationsCreateForm,
  StudentsCreateForm,
  FinancialInformationCreateForm,
  SchoolEnrollmentCreateForm,
  CostAndAidCreateForm,
  DisbursementCreateForm,
} from "../ui-components"; // Adjust the path as necessary

function FormWorkFlow() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Core forms for the FSA application process
  const forms = [
    { component: FAFSAApplicationsCreateForm, name: "FAFSA Applications" },
    { component: StudentsCreateForm, name: "Students" },
    { component: FinancialInformationCreateForm, name: "Financial Information" },
    { component: SchoolEnrollmentCreateForm, name: "School Enrollment" },
    { component: CostAndAidCreateForm, name: "Cost and Aid" },
    { component: DisbursementCreateForm, name: "Disbursement" },
  ];

  const handleSuccess = () => {
    setIsTransitioning(true);
    console.log(React.version);

    setTimeout(() => {
      setIsTransitioning(false);
      if (currentFormIndex < forms.length - 1) {
        setCurrentFormIndex((prevIndex) => prevIndex + 1);
      } else {
        alert("FSA Application successfully completed!");
      }
    }, 1000);
  };

  const CurrentForm = forms[currentFormIndex].component;

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      {/* Breadcrumbs */}
      <nav
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        {forms.map((form, index) => (
          <span
            key={form.name}
            style={{
              color: index === currentFormIndex ? "blue" : "gray",
              fontWeight: index === currentFormIndex ? "bold" : "normal",
            }}
          >
            {form.name}
            {index < forms.length - 1 && " > "}
          </span>
        ))}
      </nav>

      {/* Form Content */}
      {isTransitioning ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            zIndex: 1000,
          }}
        >
          Please wait... Loading next form...
        </div>
      ) : (
        <div
          style={{
            opacity: isTransitioning ? 0.5 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
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
      )}
    </div>
  );
}

export default FormWorkFlow;
