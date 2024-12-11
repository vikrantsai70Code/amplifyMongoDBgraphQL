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
  const [costAidId, setCostAidId] = React.useState(initialValues.costAidId);
  const [fafsaId, setFafsaId] = React.useState(initialValues.fafsaId);
  const [costOfAttendance, setCostOfAttendance] = React.useState(
    initialValues.costOfAttendance
  );
  const [aidPackageDetails, setAidPackageDetails] = React.useState(
    initialValues.aidPackageDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCostAidId(initialValues.costAidId);
    setFafsaId(initialValues.fafsaId);
    setCostOfAttendance(initialValues.costOfAttendance);
    setAidPackageDetails(initialValues.aidPackageDetails);
    setErrors({});
  };
  const validations = {
    costAidId: [],
    fafsaId: [],
    costOfAttendance: [],
    aidPackageDetails: [],
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
          costAidId,
          fafsaId,
          costOfAttendance,
          aidPackageDetails,
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
            query: createCostAndAid.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CostAndAidCreateForm")}
      {...rest}
    >
      <TextField
        label="Cost aid id"
        isRequired={false}
        isReadOnly={false}
        value={costAidId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              costAidId: value,
              fafsaId,
              costOfAttendance,
              aidPackageDetails,
            };
            const result = onChange(modelFields);
            value = result?.costAidId ?? value;
          }
          if (errors.costAidId?.hasError) {
            runValidationTasks("costAidId", value);
          }
          setCostAidId(value);
        }}
        onBlur={() => runValidationTasks("costAidId", costAidId)}
        errorMessage={errors.costAidId?.errorMessage}
        hasError={errors.costAidId?.hasError}
        {...getOverrideProps(overrides, "costAidId")}
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
              costAidId,
              fafsaId: value,
              costOfAttendance,
              aidPackageDetails,
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
        label="Cost of attendance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costOfAttendance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              costAidId,
              fafsaId,
              costOfAttendance: value,
              aidPackageDetails,
            };
            const result = onChange(modelFields);
            value = result?.costOfAttendance ?? value;
          }
          if (errors.costOfAttendance?.hasError) {
            runValidationTasks("costOfAttendance", value);
          }
          setCostOfAttendance(value);
        }}
        onBlur={() => runValidationTasks("costOfAttendance", costOfAttendance)}
        errorMessage={errors.costOfAttendance?.errorMessage}
        hasError={errors.costOfAttendance?.hasError}
        {...getOverrideProps(overrides, "costOfAttendance")}
      ></TextField>
      <TextField
        label="Aid package details"
        isRequired={false}
        isReadOnly={false}
        value={aidPackageDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              costAidId,
              fafsaId,
              costOfAttendance,
              aidPackageDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.aidPackageDetails ?? value;
          }
          if (errors.aidPackageDetails?.hasError) {
            runValidationTasks("aidPackageDetails", value);
          }
          setAidPackageDetails(value);
        }}
        onBlur={() =>
          runValidationTasks("aidPackageDetails", aidPackageDetails)
        }
        errorMessage={errors.aidPackageDetails?.errorMessage}
        hasError={errors.aidPackageDetails?.hasError}
        {...getOverrideProps(overrides, "aidPackageDetails")}
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
