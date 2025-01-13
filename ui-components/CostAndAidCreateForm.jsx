/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCostAndAid } from "./graphql/mutations";

const client = generateClient();

export default function CostAndAidCreateForm(props) {
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
    costAidId: "",
    fafsaId: "",
    costOfAttendance: "",
    aidPackageDetails: "",
  };

  const [formValues, setFormValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const resetStateValues = () => {
    setFormValues(initialValues);
    setErrors({});
  };

  const validations = {
    costAidId: [],
    fafsaId: [],
    costOfAttendance: [],
    aidPackageDetails: [],
  };

  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  const handleChange = (fieldName) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]?.hasError) {
      runValidationTasks(fieldName, value);
    }
    onChange?.({ ...formValues, [fieldName]: value });
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

    if (onSubmit) {
      onSubmit(formValues);
    }

    try {
      const input = { ...formValues };

      await client.graphql({
        query: createCostAndAid,
        variables: { input },
      });

      if (onSuccess) {
        onSuccess(formValues);
      }

      if (clearOnSuccess) {
        resetStateValues();
      }
    } catch (err) {
      onError?.(formValues, err.message);
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
        background: "linear-gradient(to bottom right, #ffffff, #f4f4f4)",
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
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        onSubmit={handleSubmit}
        {...getOverrideProps(overrides, "CostAndAidCreateForm")}
        {...rest}
      >
        
        <TextField
          label="Cost of Attendance"
          type="number"
          value={formValues.costOfAttendance}
          onChange={handleChange("costOfAttendance")}
          errorMessage={errors.costOfAttendance?.errorMessage}
          hasError={errors.costOfAttendance?.hasError}
        />
        <TextField
          label="Aid Package Details"
          value={formValues.aidPackageDetails}
          onChange={handleChange("aidPackageDetails")}
          errorMessage={errors.aidPackageDetails?.errorMessage}
          hasError={errors.aidPackageDetails?.hasError}
        />
        <Flex justifyContent="flex-end">
          <Button type="submit" variation="primary">
            Next
          </Button>
        </Flex>
      </Grid>
    </div>
  );
}
