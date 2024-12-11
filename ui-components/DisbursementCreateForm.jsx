/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createDisbursement } from "./graphql/mutations";
const client = generateClient();
export default function DisbursementCreateForm(props) {
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
    disbursementId: "",
    fafsaId: "",
    paymentSchedule: "",
    disbursementRecords: "",
    bankingDetails: "",
  };
  const [disbursementId, setDisbursementId] = React.useState(
    initialValues.disbursementId
  );
  const [fafsaId, setFafsaId] = React.useState(initialValues.fafsaId);
  const [paymentSchedule, setPaymentSchedule] = React.useState(
    initialValues.paymentSchedule
  );
  const [disbursementRecords, setDisbursementRecords] = React.useState(
    initialValues.disbursementRecords
  );
  const [bankingDetails, setBankingDetails] = React.useState(
    initialValues.bankingDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDisbursementId(initialValues.disbursementId);
    setFafsaId(initialValues.fafsaId);
    setPaymentSchedule(initialValues.paymentSchedule);
    setDisbursementRecords(initialValues.disbursementRecords);
    setBankingDetails(initialValues.bankingDetails);
    setErrors({});
  };
  const validations = {
    disbursementId: [],
    fafsaId: [],
    paymentSchedule: [],
    disbursementRecords: [],
    bankingDetails: [],
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
          disbursementId,
          fafsaId,
          paymentSchedule,
          disbursementRecords,
          bankingDetails,
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
            query: createDisbursement.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "DisbursementCreateForm")}
      {...rest}
    >
      <TextField
        label="Disbursement id"
        isRequired={false}
        isReadOnly={false}
        value={disbursementId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              disbursementId: value,
              fafsaId,
              paymentSchedule,
              disbursementRecords,
              bankingDetails,
            };
            const result = onChange(modelFields);
            value = result?.disbursementId ?? value;
          }
          if (errors.disbursementId?.hasError) {
            runValidationTasks("disbursementId", value);
          }
          setDisbursementId(value);
        }}
        onBlur={() => runValidationTasks("disbursementId", disbursementId)}
        errorMessage={errors.disbursementId?.errorMessage}
        hasError={errors.disbursementId?.hasError}
        {...getOverrideProps(overrides, "disbursementId")}
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
              disbursementId,
              fafsaId: value,
              paymentSchedule,
              disbursementRecords,
              bankingDetails,
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
        label="Payment schedule"
        isRequired={false}
        isReadOnly={false}
        value={paymentSchedule}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              disbursementId,
              fafsaId,
              paymentSchedule: value,
              disbursementRecords,
              bankingDetails,
            };
            const result = onChange(modelFields);
            value = result?.paymentSchedule ?? value;
          }
          if (errors.paymentSchedule?.hasError) {
            runValidationTasks("paymentSchedule", value);
          }
          setPaymentSchedule(value);
        }}
        onBlur={() => runValidationTasks("paymentSchedule", paymentSchedule)}
        errorMessage={errors.paymentSchedule?.errorMessage}
        hasError={errors.paymentSchedule?.hasError}
        {...getOverrideProps(overrides, "paymentSchedule")}
      ></TextField>
      <TextField
        label="Disbursement records"
        isRequired={false}
        isReadOnly={false}
        value={disbursementRecords}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              disbursementId,
              fafsaId,
              paymentSchedule,
              disbursementRecords: value,
              bankingDetails,
            };
            const result = onChange(modelFields);
            value = result?.disbursementRecords ?? value;
          }
          if (errors.disbursementRecords?.hasError) {
            runValidationTasks("disbursementRecords", value);
          }
          setDisbursementRecords(value);
        }}
        onBlur={() =>
          runValidationTasks("disbursementRecords", disbursementRecords)
        }
        errorMessage={errors.disbursementRecords?.errorMessage}
        hasError={errors.disbursementRecords?.hasError}
        {...getOverrideProps(overrides, "disbursementRecords")}
      ></TextField>
      <TextField
        label="Banking details"
        isRequired={false}
        isReadOnly={false}
        value={bankingDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              disbursementId,
              fafsaId,
              paymentSchedule,
              disbursementRecords,
              bankingDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.bankingDetails ?? value;
          }
          if (errors.bankingDetails?.hasError) {
            runValidationTasks("bankingDetails", value);
          }
          setBankingDetails(value);
        }}
        onBlur={() => runValidationTasks("bankingDetails", bankingDetails)}
        errorMessage={errors.bankingDetails?.errorMessage}
        hasError={errors.bankingDetails?.hasError}
        {...getOverrideProps(overrides, "bankingDetails")}
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
