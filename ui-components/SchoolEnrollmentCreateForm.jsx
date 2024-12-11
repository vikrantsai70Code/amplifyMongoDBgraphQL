/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSchoolEnrollment } from "./graphql/mutations";
const client = generateClient();
export default function SchoolEnrollmentCreateForm(props) {
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
    enrollmentId: "",
    fafsaId: "",
    schoolConfirmationStatus: "",
    verificationData: "",
  };
  const [enrollmentId, setEnrollmentId] = React.useState(
    initialValues.enrollmentId
  );
  const [fafsaId, setFafsaId] = React.useState(initialValues.fafsaId);
  const [schoolConfirmationStatus, setSchoolConfirmationStatus] =
    React.useState(initialValues.schoolConfirmationStatus);
  const [verificationData, setVerificationData] = React.useState(
    initialValues.verificationData
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEnrollmentId(initialValues.enrollmentId);
    setFafsaId(initialValues.fafsaId);
    setSchoolConfirmationStatus(initialValues.schoolConfirmationStatus);
    setVerificationData(initialValues.verificationData);
    setErrors({});
  };
  const validations = {
    enrollmentId: [],
    fafsaId: [],
    schoolConfirmationStatus: [],
    verificationData: [],
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
          enrollmentId,
          fafsaId,
          schoolConfirmationStatus,
          verificationData,
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
            query: createSchoolEnrollment.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SchoolEnrollmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Enrollment id"
        isRequired={false}
        isReadOnly={false}
        value={enrollmentId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              enrollmentId: value,
              fafsaId,
              schoolConfirmationStatus,
              verificationData,
            };
            const result = onChange(modelFields);
            value = result?.enrollmentId ?? value;
          }
          if (errors.enrollmentId?.hasError) {
            runValidationTasks("enrollmentId", value);
          }
          setEnrollmentId(value);
        }}
        onBlur={() => runValidationTasks("enrollmentId", enrollmentId)}
        errorMessage={errors.enrollmentId?.errorMessage}
        hasError={errors.enrollmentId?.hasError}
        {...getOverrideProps(overrides, "enrollmentId")}
      ></TextField>
      <TextField
        label="Fafsa id"
        isRequired={false}
        isReadOnly={false}
        value={fafsaId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              enrollmentId,
              fafsaId: value,
              schoolConfirmationStatus,
              verificationData,
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
        label="School confirmation status"
        isRequired={false}
        isReadOnly={false}
        value={schoolConfirmationStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              enrollmentId,
              fafsaId,
              schoolConfirmationStatus: value,
              verificationData,
            };
            const result = onChange(modelFields);
            value = result?.schoolConfirmationStatus ?? value;
          }
          if (errors.schoolConfirmationStatus?.hasError) {
            runValidationTasks("schoolConfirmationStatus", value);
          }
          setSchoolConfirmationStatus(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "schoolConfirmationStatus",
            schoolConfirmationStatus
          )
        }
        errorMessage={errors.schoolConfirmationStatus?.errorMessage}
        hasError={errors.schoolConfirmationStatus?.hasError}
        {...getOverrideProps(overrides, "schoolConfirmationStatus")}
      ></TextField>
      <TextField
        label="Verification data"
        isRequired={false}
        isReadOnly={false}
        value={verificationData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              enrollmentId,
              fafsaId,
              schoolConfirmationStatus,
              verificationData: value,
            };
            const result = onChange(modelFields);
            value = result?.verificationData ?? value;
          }
          if (errors.verificationData?.hasError) {
            runValidationTasks("verificationData", value);
          }
          setVerificationData(value);
        }}
        onBlur={() => runValidationTasks("verificationData", verificationData)}
        errorMessage={errors.verificationData?.errorMessage}
        hasError={errors.verificationData?.hasError}
        {...getOverrideProps(overrides, "verificationData")}
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
