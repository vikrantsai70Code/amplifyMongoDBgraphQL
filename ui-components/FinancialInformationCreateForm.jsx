/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createFinancialInformation } from "./graphql/mutations";
const client = generateClient();
export default function FinancialInformationCreateForm(props) {
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
    financialInfoId: "",
    studentId: "",
    taxableIncome: "",
    untaxedIncome: "",
    irsData: "",
    efc: "",
  };
  const [financialInfoId, setFinancialInfoId] = React.useState(
    initialValues.financialInfoId
  );
  const [studentId, setStudentId] = React.useState(initialValues.studentId);
  const [taxableIncome, setTaxableIncome] = React.useState(
    initialValues.taxableIncome
  );
  const [untaxedIncome, setUntaxedIncome] = React.useState(
    initialValues.untaxedIncome
  );
  const [irsData, setIrsData] = React.useState(initialValues.irsData);
  const [efc, setEfc] = React.useState(initialValues.efc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFinancialInfoId(initialValues.financialInfoId);
    setStudentId(initialValues.studentId);
    setTaxableIncome(initialValues.taxableIncome);
    setUntaxedIncome(initialValues.untaxedIncome);
    setIrsData(initialValues.irsData);
    setEfc(initialValues.efc);
    setErrors({});
  };
  const validations = {
    financialInfoId: [],
    studentId: [],
    taxableIncome: [],
    untaxedIncome: [],
    irsData: [],
    efc: [],
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
          financialInfoId,
          studentId,
          taxableIncome,
          untaxedIncome,
          irsData,
          efc,
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
            query: createFinancialInformation.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "FinancialInformationCreateForm")}
      {...rest}
    >
      <TextField
        label="Financial info id"
        isRequired={false}
        isReadOnly={false}
        value={financialInfoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              financialInfoId: value,
              studentId,
              taxableIncome,
              untaxedIncome,
              irsData,
              efc,
            };
            const result = onChange(modelFields);
            value = result?.financialInfoId ?? value;
          }
          if (errors.financialInfoId?.hasError) {
            runValidationTasks("financialInfoId", value);
          }
          setFinancialInfoId(value);
        }}
        onBlur={() => runValidationTasks("financialInfoId", financialInfoId)}
        errorMessage={errors.financialInfoId?.errorMessage}
        hasError={errors.financialInfoId?.hasError}
        {...getOverrideProps(overrides, "financialInfoId")}
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
              financialInfoId,
              studentId: value,
              taxableIncome,
              untaxedIncome,
              irsData,
              efc,
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
        label="Taxable income"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={taxableIncome}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              financialInfoId,
              studentId,
              taxableIncome: value,
              untaxedIncome,
              irsData,
              efc,
            };
            const result = onChange(modelFields);
            value = result?.taxableIncome ?? value;
          }
          if (errors.taxableIncome?.hasError) {
            runValidationTasks("taxableIncome", value);
          }
          setTaxableIncome(value);
        }}
        onBlur={() => runValidationTasks("taxableIncome", taxableIncome)}
        errorMessage={errors.taxableIncome?.errorMessage}
        hasError={errors.taxableIncome?.hasError}
        {...getOverrideProps(overrides, "taxableIncome")}
      ></TextField>
      <TextField
        label="Untaxed income"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={untaxedIncome}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              financialInfoId,
              studentId,
              taxableIncome,
              untaxedIncome: value,
              irsData,
              efc,
            };
            const result = onChange(modelFields);
            value = result?.untaxedIncome ?? value;
          }
          if (errors.untaxedIncome?.hasError) {
            runValidationTasks("untaxedIncome", value);
          }
          setUntaxedIncome(value);
        }}
        onBlur={() => runValidationTasks("untaxedIncome", untaxedIncome)}
        errorMessage={errors.untaxedIncome?.errorMessage}
        hasError={errors.untaxedIncome?.hasError}
        {...getOverrideProps(overrides, "untaxedIncome")}
      ></TextField>
      <TextField
        label="Irs data"
        isRequired={false}
        isReadOnly={false}
        value={irsData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              financialInfoId,
              studentId,
              taxableIncome,
              untaxedIncome,
              irsData: value,
              efc,
            };
            const result = onChange(modelFields);
            value = result?.irsData ?? value;
          }
          if (errors.irsData?.hasError) {
            runValidationTasks("irsData", value);
          }
          setIrsData(value);
        }}
        onBlur={() => runValidationTasks("irsData", irsData)}
        errorMessage={errors.irsData?.errorMessage}
        hasError={errors.irsData?.hasError}
        {...getOverrideProps(overrides, "irsData")}
      ></TextField>
      <TextField
        label="Efc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={efc}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              financialInfoId,
              studentId,
              taxableIncome,
              untaxedIncome,
              irsData,
              efc: value,
            };
            const result = onChange(modelFields);
            value = result?.efc ?? value;
          }
          if (errors.efc?.hasError) {
            runValidationTasks("efc", value);
          }
          setEfc(value);
        }}
        onBlur={() => runValidationTasks("efc", efc)}
        errorMessage={errors.efc?.errorMessage}
        hasError={errors.efc?.hasError}
        {...getOverrideProps(overrides, "efc")}
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
