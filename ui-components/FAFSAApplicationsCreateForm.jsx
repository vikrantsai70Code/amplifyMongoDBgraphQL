/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { createFAFSAApplications } from "./graphql/mutations";
import { getOverrideProps, validateField } from "./utils"; // Ensure validateField is imported here

const client = generateClient();

export default function FAFSAApplicationsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;

  const initialValues = {
    fafsaId: "",
    studentId: "",
    applicationDate: "",
    schoolCodes: "",
    enrollmentDetails: "",
    drtResults: "",
  };

  const [formValues, setFormValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const resetStateValues = () => {
    setFormValues(initialValues);
    setErrors({});
  };

  const validations = {
    fafsaId: [],
    studentId: [],
    applicationDate: [],
    schoolCodes: [],
    enrollmentDetails: [],
    drtResults: [],
  };

  const runValidationTasks = async (fieldName, currentValue) => {
    let validationResponse = validateField(currentValue, validations[fieldName]);
    if (onValidate?.[fieldName]) {
      validationResponse = await onValidate[fieldName](currentValue, validationResponse);
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: validationResponse,
    }));
    return validationResponse;
  };

  const handleChange = (fieldName) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]?.hasError) {
      runValidationTasks(fieldName, value);
    }
    if (onChange) {
      const updatedFields = onChange({ ...formValues, [fieldName]: value });
      setFormValues((prev) => ({ ...prev, [fieldName]: updatedFields?.[fieldName] || value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const validationResponses = await Promise.all(
      Object.keys(validations).map((fieldName) =>
        runValidationTasks(fieldName, formValues[fieldName])
      )
    );

    if (validationResponses.some((res) => res.hasError)) {
      setIsSubmitting(false);
      return;
    }

    let modelFields = { ...formValues };

    if (onSubmit) {
      modelFields = onSubmit(modelFields);
    }

    try {
      Object.entries(modelFields).forEach(([key, value]) => {
        if (typeof value === "string" && value.trim() === "") {
          modelFields[key] = null;
        }
      });

      const result = await client.graphql({
        query: createFAFSAApplications,
        variables: { input: modelFields },
      });

      if (onSuccess) {
        onSuccess(result.data);
      }

      if (clearOnSuccess) {
        resetStateValues();
      }
    } catch (err) {
      if (onError) {
        onError(formValues, err.message || "Submission failed");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(to bottom right, #ffffff, #f0f0f0)",
      }}
    >
      {isSubmitting && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <span>Submitting...</span>
        </div>
      )}

      <Grid
        as="form"
        onSubmit={handleSubmit}
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        {...getOverrideProps(overrides, "FAFSAApplicationsCreateForm")}
        {...rest}
      >
        <TextField
          label="FAFSA ID"
          value={formValues.fafsaId}
          onChange={handleChange("fafsaId")}
          onBlur={() => runValidationTasks("fafsaId", formValues.fafsaId)}
          errorMessage={errors.fafsaId?.errorMessage}
          hasError={errors.fafsaId?.hasError}
          {...getOverrideProps(overrides, "fafsaId")}
        />
        <TextField
          label="Student ID"
          value={formValues.studentId}
          onChange={handleChange("studentId")}
          onBlur={() => runValidationTasks("studentId", formValues.studentId)}
          errorMessage={errors.studentId?.errorMessage}
          hasError={errors.studentId?.hasError}
          {...getOverrideProps(overrides, "studentId")}
        />
        <TextField
          label="Application Date"
          type="date"
          value={formValues.applicationDate}
          onChange={handleChange("applicationDate")}
          onBlur={() => runValidationTasks("applicationDate", formValues.applicationDate)}
          errorMessage={errors.applicationDate?.errorMessage}
          hasError={errors.applicationDate?.hasError}
          {...getOverrideProps(overrides, "applicationDate")}
        />
        <TextField
          label="School Codes"
          value={formValues.schoolCodes}
          onChange={handleChange("schoolCodes")}
          onBlur={() => runValidationTasks("schoolCodes", formValues.schoolCodes)}
          errorMessage={errors.schoolCodes?.errorMessage}
          hasError={errors.schoolCodes?.hasError}
          {...getOverrideProps(overrides, "schoolCodes")}
        />
        <TextField
          label="Enrollment Details"
          value={formValues.enrollmentDetails}
          onChange={handleChange("enrollmentDetails")}
          onBlur={() => runValidationTasks("enrollmentDetails", formValues.enrollmentDetails)}
          errorMessage={errors.enrollmentDetails?.errorMessage}
          hasError={errors.enrollmentDetails?.hasError}
          {...getOverrideProps(overrides, "enrollmentDetails")}
        />
        <TextField
          label="DRT Results"
          value={formValues.drtResults}
          onChange={handleChange("drtResults")}
          onBlur={() => runValidationTasks("drtResults", formValues.drtResults)}
          errorMessage={errors.drtResults?.errorMessage}
          hasError={errors.drtResults?.hasError}
          {...getOverrideProps(overrides, "drtResults")}
        />
        <Flex justifyContent="space-between">
          <Button
            children="Clear"
            type="reset"
            onClick={(event) => {
              event.preventDefault();
              resetStateValues();
            }}
          />
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
          />
        </Flex>
      </Grid>
    </div>
  );
}
