/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAwards } from "./graphql/queries";
import { updateAwards } from "./graphql/mutations";
const client = generateClient();
export default function AwardsUpdateForm(props) {
  const {
    id: idProp,
    awards: awardsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    awardId: "",
    fafsaId: "",
    pellGrantEligibility: false,
    loanEligibility: false,
    awardDecision: "",
    awardPackageDetails: "",
  };
  const [awardId, setAwardId] = React.useState(initialValues.awardId);
  const [fafsaId, setFafsaId] = React.useState(initialValues.fafsaId);
  const [pellGrantEligibility, setPellGrantEligibility] = React.useState(
    initialValues.pellGrantEligibility
  );
  const [loanEligibility, setLoanEligibility] = React.useState(
    initialValues.loanEligibility
  );
  const [awardDecision, setAwardDecision] = React.useState(
    initialValues.awardDecision
  );
  const [awardPackageDetails, setAwardPackageDetails] = React.useState(
    initialValues.awardPackageDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = awardsRecord
      ? { ...initialValues, ...awardsRecord }
      : initialValues;
    setAwardId(cleanValues.awardId);
    setFafsaId(cleanValues.fafsaId);
    setPellGrantEligibility(cleanValues.pellGrantEligibility);
    setLoanEligibility(cleanValues.loanEligibility);
    setAwardDecision(cleanValues.awardDecision);
    setAwardPackageDetails(cleanValues.awardPackageDetails);
    setErrors({});
  };
  const [awardsRecord, setAwardsRecord] = React.useState(awardsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAwards.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAwards
        : awardsModelProp;
      setAwardsRecord(record);
    };
    queryData();
  }, [idProp, awardsModelProp]);
  React.useEffect(resetStateValues, [awardsRecord]);
  const validations = {
    awardId: [],
    fafsaId: [],
    pellGrantEligibility: [],
    loanEligibility: [],
    awardDecision: [],
    awardPackageDetails: [],
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
          awardId: awardId ?? null,
          fafsaId: fafsaId ?? null,
          pellGrantEligibility: pellGrantEligibility ?? null,
          loanEligibility: loanEligibility ?? null,
          awardDecision: awardDecision ?? null,
          awardPackageDetails: awardPackageDetails ?? null,
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
            query: updateAwards.replaceAll("__typename", ""),
            variables: {
              input: {
                id: awardsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AwardsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Award id"
        isRequired={false}
        isReadOnly={false}
        value={awardId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awardId: value,
              fafsaId,
              pellGrantEligibility,
              loanEligibility,
              awardDecision,
              awardPackageDetails,
            };
            const result = onChange(modelFields);
            value = result?.awardId ?? value;
          }
          if (errors.awardId?.hasError) {
            runValidationTasks("awardId", value);
          }
          setAwardId(value);
        }}
        onBlur={() => runValidationTasks("awardId", awardId)}
        errorMessage={errors.awardId?.errorMessage}
        hasError={errors.awardId?.hasError}
        {...getOverrideProps(overrides, "awardId")}
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
              awardId,
              fafsaId: value,
              pellGrantEligibility,
              loanEligibility,
              awardDecision,
              awardPackageDetails,
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
      <SwitchField
        label="Pell grant eligibility"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pellGrantEligibility}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              awardId,
              fafsaId,
              pellGrantEligibility: value,
              loanEligibility,
              awardDecision,
              awardPackageDetails,
            };
            const result = onChange(modelFields);
            value = result?.pellGrantEligibility ?? value;
          }
          if (errors.pellGrantEligibility?.hasError) {
            runValidationTasks("pellGrantEligibility", value);
          }
          setPellGrantEligibility(value);
        }}
        onBlur={() =>
          runValidationTasks("pellGrantEligibility", pellGrantEligibility)
        }
        errorMessage={errors.pellGrantEligibility?.errorMessage}
        hasError={errors.pellGrantEligibility?.hasError}
        {...getOverrideProps(overrides, "pellGrantEligibility")}
      ></SwitchField>
      <SwitchField
        label="Loan eligibility"
        defaultChecked={false}
        isDisabled={false}
        isChecked={loanEligibility}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              awardId,
              fafsaId,
              pellGrantEligibility,
              loanEligibility: value,
              awardDecision,
              awardPackageDetails,
            };
            const result = onChange(modelFields);
            value = result?.loanEligibility ?? value;
          }
          if (errors.loanEligibility?.hasError) {
            runValidationTasks("loanEligibility", value);
          }
          setLoanEligibility(value);
        }}
        onBlur={() => runValidationTasks("loanEligibility", loanEligibility)}
        errorMessage={errors.loanEligibility?.errorMessage}
        hasError={errors.loanEligibility?.hasError}
        {...getOverrideProps(overrides, "loanEligibility")}
      ></SwitchField>
      <TextField
        label="Award decision"
        isRequired={false}
        isReadOnly={false}
        value={awardDecision}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awardId,
              fafsaId,
              pellGrantEligibility,
              loanEligibility,
              awardDecision: value,
              awardPackageDetails,
            };
            const result = onChange(modelFields);
            value = result?.awardDecision ?? value;
          }
          if (errors.awardDecision?.hasError) {
            runValidationTasks("awardDecision", value);
          }
          setAwardDecision(value);
        }}
        onBlur={() => runValidationTasks("awardDecision", awardDecision)}
        errorMessage={errors.awardDecision?.errorMessage}
        hasError={errors.awardDecision?.hasError}
        {...getOverrideProps(overrides, "awardDecision")}
      ></TextField>
      <TextField
        label="Award package details"
        isRequired={false}
        isReadOnly={false}
        value={awardPackageDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awardId,
              fafsaId,
              pellGrantEligibility,
              loanEligibility,
              awardDecision,
              awardPackageDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.awardPackageDetails ?? value;
          }
          if (errors.awardPackageDetails?.hasError) {
            runValidationTasks("awardPackageDetails", value);
          }
          setAwardPackageDetails(value);
        }}
        onBlur={() =>
          runValidationTasks("awardPackageDetails", awardPackageDetails)
        }
        errorMessage={errors.awardPackageDetails?.errorMessage}
        hasError={errors.awardPackageDetails?.hasError}
        {...getOverrideProps(overrides, "awardPackageDetails")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || awardsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || awardsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
