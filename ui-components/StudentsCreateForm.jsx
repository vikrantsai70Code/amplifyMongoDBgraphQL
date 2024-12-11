/* eslint-disable */
"use client";
import * as React from "react";
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
    ssn: "",
    firstName: "",
    lastName: "",
    dob: "",
    dependencyStatus: "",
    householdSize: "",
  };
  const [studentId, setStudentId] = React.useState(initialValues.studentId);
  const [ssn, setSsn] = React.useState(initialValues.ssn);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [dependencyStatus, setDependencyStatus] = React.useState(
    initialValues.dependencyStatus
  );
  const [householdSize, setHouseholdSize] = React.useState(
    initialValues.householdSize
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStudentId(initialValues.studentId);
    setSsn(initialValues.ssn);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setDob(initialValues.dob);
    setDependencyStatus(initialValues.dependencyStatus);
    setHouseholdSize(initialValues.householdSize);
    setErrors({});
  };
  const validations = {
    studentId: [],
    ssn: [],
    firstName: [],
    lastName: [],
    dob: [],
    dependencyStatus: [],
    householdSize: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          studentId,
          ssn,
          firstName,
          lastName,
          dob,
          dependencyStatus,
          householdSize,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createStudents.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StudentsCreateForm")}
      {...rest}
    >
      <TextField
        label="Student id"
        isRequired={false}
        isReadOnly={false}
        value={studentId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentId: value,
              ssn,
              firstName,
              lastName,
              dob,
              dependencyStatus,
              householdSize,
            };
            const result = onChange(modelFields);
            value = result?.studentId ?? value;
          }
          if (errors.studentId?.hasError) {
            runValidationTasks("studentId", value);
          }
          setStudentId(value);
        }}
        onBlur={() => runValidationTasks("studentId", studentId)}
        errorMessage={errors.studentId?.errorMessage}
        hasError={errors.studentId?.hasError}
        {...getOverrideProps(overrides, "studentId")}
      ></TextField>
      <TextField
        label="Ssn"
        isRequired={false}
        isReadOnly={false}
        value={ssn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentId,
              ssn: value,
              firstName,
              lastName,
              dob,
              dependencyStatus,
              householdSize,
            };
            const result = onChange(modelFields);
            value = result?.ssn ?? value;
          }
          if (errors.ssn?.hasError) {
            runValidationTasks("ssn", value);
          }
          setSsn(value);
        }}
        onBlur={() => runValidationTasks("ssn", ssn)}
        errorMessage={errors.ssn?.errorMessage}
        hasError={errors.ssn?.hasError}
        {...getOverrideProps(overrides, "ssn")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentId,
              ssn,
              firstName: value,
              lastName,
              dob,
              dependencyStatus,
              householdSize,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentId,
              ssn,
              firstName,
              lastName: value,
              dob,
              dependencyStatus,
              householdSize,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentId,
              ssn,
              firstName,
              lastName,
              dob: value,
              dependencyStatus,
              householdSize,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
      ></TextField>
      <TextField
        label="Dependency status"
        isRequired={false}
        isReadOnly={false}
        value={dependencyStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentId,
              ssn,
              firstName,
              lastName,
              dob,
              dependencyStatus: value,
              householdSize,
            };
            const result = onChange(modelFields);
            value = result?.dependencyStatus ?? value;
          }
          if (errors.dependencyStatus?.hasError) {
            runValidationTasks("dependencyStatus", value);
          }
          setDependencyStatus(value);
        }}
        onBlur={() => runValidationTasks("dependencyStatus", dependencyStatus)}
        errorMessage={errors.dependencyStatus?.errorMessage}
        hasError={errors.dependencyStatus?.hasError}
        {...getOverrideProps(overrides, "dependencyStatus")}
      ></TextField>
      <TextField
        label="Household size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={householdSize}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              studentId,
              ssn,
              firstName,
              lastName,
              dob,
              dependencyStatus,
              householdSize: value,
            };
            const result = onChange(modelFields);
            value = result?.householdSize ?? value;
          }
          if (errors.householdSize?.hasError) {
            runValidationTasks("householdSize", value);
          }
          setHouseholdSize(value);
        }}
        onBlur={() => runValidationTasks("householdSize", householdSize)}
        errorMessage={errors.householdSize?.errorMessage}
        hasError={errors.householdSize?.hasError}
        {...getOverrideProps(overrides, "householdSize")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
