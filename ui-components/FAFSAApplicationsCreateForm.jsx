/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createFAFSAApplications } from "./graphql/mutations";
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
  const [fafsaId, setFafsaId] = React.useState(initialValues.fafsaId);
  const [studentId, setStudentId] = React.useState(initialValues.studentId);
  const [applicationDate, setApplicationDate] = React.useState(
    initialValues.applicationDate
  );
  const [schoolCodes, setSchoolCodes] = React.useState(
    initialValues.schoolCodes
  );
  const [enrollmentDetails, setEnrollmentDetails] = React.useState(
    initialValues.enrollmentDetails
  );
  const [drtResults, setDrtResults] = React.useState(initialValues.drtResults);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFafsaId(initialValues.fafsaId);
    setStudentId(initialValues.studentId);
    setApplicationDate(initialValues.applicationDate);
    setSchoolCodes(initialValues.schoolCodes);
    setEnrollmentDetails(initialValues.enrollmentDetails);
    setDrtResults(initialValues.drtResults);
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
          fafsaId,
          studentId,
          applicationDate,
          schoolCodes,
          enrollmentDetails,
          drtResults,
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
            query: createFAFSAApplications.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "FAFSAApplicationsCreateForm")}
      {...rest}
    >
      <TextField
        label="Fafsa id"
        isRequired={false}
        isReadOnly={false}
        value={fafsaId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fafsaId: value,
              studentId,
              applicationDate,
              schoolCodes,
              enrollmentDetails,
              drtResults,
            };
            const result = onChange(modelFields);
            value = result?.fafsaId ?? value;
          }
          if (errors.fafsaId?.hasError) {
            runValidationTasks("fafsaId", value);
          }
          setFafsaId(value);
        }}
        onBlur={() => runValidationTasks("fafsaId", fafsaId)}
        errorMessage={errors.fafsaId?.errorMessage}
        hasError={errors.fafsaId?.hasError}
        {...getOverrideProps(overrides, "fafsaId")}
      ></TextField>
      <TextField
        label="Student id"
        isRequired={false}
        isReadOnly={false}
        value={studentId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fafsaId,
              studentId: value,
              applicationDate,
              schoolCodes,
              enrollmentDetails,
              drtResults,
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
        label="Application date"
        isRequired={false}
        isReadOnly={false}
        value={applicationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fafsaId,
              studentId,
              applicationDate: value,
              schoolCodes,
              enrollmentDetails,
              drtResults,
            };
            const result = onChange(modelFields);
            value = result?.applicationDate ?? value;
          }
          if (errors.applicationDate?.hasError) {
            runValidationTasks("applicationDate", value);
          }
          setApplicationDate(value);
        }}
        onBlur={() => runValidationTasks("applicationDate", applicationDate)}
        errorMessage={errors.applicationDate?.errorMessage}
        hasError={errors.applicationDate?.hasError}
        {...getOverrideProps(overrides, "applicationDate")}
      ></TextField>
      <TextField
        label="School codes"
        isRequired={false}
        isReadOnly={false}
        value={schoolCodes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fafsaId,
              studentId,
              applicationDate,
              schoolCodes: value,
              enrollmentDetails,
              drtResults,
            };
            const result = onChange(modelFields);
            value = result?.schoolCodes ?? value;
          }
          if (errors.schoolCodes?.hasError) {
            runValidationTasks("schoolCodes", value);
          }
          setSchoolCodes(value);
        }}
        onBlur={() => runValidationTasks("schoolCodes", schoolCodes)}
        errorMessage={errors.schoolCodes?.errorMessage}
        hasError={errors.schoolCodes?.hasError}
        {...getOverrideProps(overrides, "schoolCodes")}
      ></TextField>
      <TextField
        label="Enrollment details"
        isRequired={false}
        isReadOnly={false}
        value={enrollmentDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fafsaId,
              studentId,
              applicationDate,
              schoolCodes,
              enrollmentDetails: value,
              drtResults,
            };
            const result = onChange(modelFields);
            value = result?.enrollmentDetails ?? value;
          }
          if (errors.enrollmentDetails?.hasError) {
            runValidationTasks("enrollmentDetails", value);
          }
          setEnrollmentDetails(value);
        }}
        onBlur={() =>
          runValidationTasks("enrollmentDetails", enrollmentDetails)
        }
        errorMessage={errors.enrollmentDetails?.errorMessage}
        hasError={errors.enrollmentDetails?.hasError}
        {...getOverrideProps(overrides, "enrollmentDetails")}
      ></TextField>
      <TextField
        label="Drt results"
        isRequired={false}
        isReadOnly={false}
        value={drtResults}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fafsaId,
              studentId,
              applicationDate,
              schoolCodes,
              enrollmentDetails,
              drtResults: value,
            };
            const result = onChange(modelFields);
            value = result?.drtResults ?? value;
          }
          if (errors.drtResults?.hasError) {
            runValidationTasks("drtResults", value);
          }
          setDrtResults(value);
        }}
        onBlur={() => runValidationTasks("drtResults", drtResults)}
        errorMessage={errors.drtResults?.errorMessage}
        hasError={errors.drtResults?.hasError}
        {...getOverrideProps(overrides, "drtResults")}
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
