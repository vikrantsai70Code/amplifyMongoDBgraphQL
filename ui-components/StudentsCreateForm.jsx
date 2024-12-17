import React, { useState } from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createStudents } from "./graphql/mutations";

const client = generateClient();

export default function StudentsCreateForm(props) {
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
    studentId: "",
    firstName: "",
    lastName: "",
    dob: "",
    dependencyStatus: "",
    householdSize: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetStateValues = () => {
    setFormValues(initialValues);
    setErrors({});
  };

  const validations = {
    studentId: [],
    firstName: [],
    lastName: [],
    dob: [],
    dependencyStatus: [],
    householdSize: [],
  };

  const runValidationTasks = async (fieldName, currentValue) => {
    const value = currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const validationResponses = await Promise.all(
      Object.keys(validations).map((fieldName) =>
        runValidationTasks(fieldName, formValues[fieldName])
      )
    );

    if (validationResponses.some((r) => r.hasError)) {
      setIsSubmitting(false);
      return;
    }

    if (onSubmit) {
      onSubmit(formValues);
    }

    try {
      const input = {
        studentId: formValues.studentId || null,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        dob: formValues.dob,
        dependencyStatus: formValues.dependencyStatus,
        householdSize: formValues.householdSize,
      };

      await client.graphql({
        query: createStudents,
        variables: { input },
      });

      if (onSuccess) {
        onSuccess(formValues);
      }

      if (clearOnSuccess) {
        resetStateValues();
      }
    } catch (err) {
      if (onError) {
        onError(formValues, err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]?.hasError) {
      runValidationTasks(field, value);
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
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        onSubmit={handleSubmit}
        {...getOverrideProps(overrides, "StudentsCreateForm")}
        {...rest}
      >
        <TextField
          label="Student ID"
          value={formValues.studentId}
          onChange={handleChange("studentId")}
          errorMessage={errors.studentId?.errorMessage}
          hasError={errors.studentId?.hasError}
        />
        <TextField
          label="First Name"
          value={formValues.firstName}
          onChange={handleChange("firstName")}
          errorMessage={errors.firstName?.errorMessage}
          hasError={errors.firstName?.hasError}
        />
        <TextField
          label="Last Name"
          value={formValues.lastName}
          onChange={handleChange("lastName")}
          errorMessage={errors.lastName?.errorMessage}
          hasError={errors.lastName?.hasError}
        />
        <TextField
          label="Date of Birth"
          type="date"
          value={formValues.dob}
          onChange={handleChange("dob")}
          errorMessage={errors.dob?.errorMessage}
          hasError={errors.dob?.hasError}
        />
        <TextField
          label="Dependency Status"
          value={formValues.dependencyStatus}
          onChange={handleChange("dependencyStatus")}
          errorMessage={errors.dependencyStatus?.errorMessage}
          hasError={errors.dependencyStatus?.hasError}
        />
        <TextField
          label="Household Size"
          type="number"
          value={formValues.householdSize}
          onChange={handleChange("householdSize")}
          errorMessage={errors.householdSize?.errorMessage}
          hasError={errors.householdSize?.hasError}
        />
        <Flex justifyContent="flex-end">
          <Button type="submit" variation="primary">
            Submit
          </Button>
        </Flex>
      </Grid>
    </div>
  );
}
