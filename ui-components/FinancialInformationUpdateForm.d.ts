import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FinancialInformation } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FinancialInformationUpdateFormInputValues = {
    financialInfoId?: string;
    studentId?: string;
    taxableIncome?: number;
    untaxedIncome?: number;
    irsData?: string;
    efc?: number;
};
export declare type FinancialInformationUpdateFormValidationValues = {
    financialInfoId?: ValidationFunction<string>;
    studentId?: ValidationFunction<string>;
    taxableIncome?: ValidationFunction<number>;
    untaxedIncome?: ValidationFunction<number>;
    irsData?: ValidationFunction<string>;
    efc?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FinancialInformationUpdateFormOverridesProps = {
    FinancialInformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    financialInfoId?: PrimitiveOverrideProps<TextFieldProps>;
    studentId?: PrimitiveOverrideProps<TextFieldProps>;
    taxableIncome?: PrimitiveOverrideProps<TextFieldProps>;
    untaxedIncome?: PrimitiveOverrideProps<TextFieldProps>;
    irsData?: PrimitiveOverrideProps<TextFieldProps>;
    efc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FinancialInformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: FinancialInformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    financialInformation?: FinancialInformation;
    onSubmit?: (fields: FinancialInformationUpdateFormInputValues) => FinancialInformationUpdateFormInputValues;
    onSuccess?: (fields: FinancialInformationUpdateFormInputValues) => void;
    onError?: (fields: FinancialInformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FinancialInformationUpdateFormInputValues) => FinancialInformationUpdateFormInputValues;
    onValidate?: FinancialInformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FinancialInformationUpdateForm(props: FinancialInformationUpdateFormProps): React.ReactElement;
