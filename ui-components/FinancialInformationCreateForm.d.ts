import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FinancialInformationCreateFormInputValues = {
    financialInfoId?: string;
    studentId?: string;
    taxableIncome?: number;
    untaxedIncome?: number;
    irsData?: string;
    efc?: number;
};
export declare type FinancialInformationCreateFormValidationValues = {
    financialInfoId?: ValidationFunction<string>;
    studentId?: ValidationFunction<string>;
    taxableIncome?: ValidationFunction<number>;
    untaxedIncome?: ValidationFunction<number>;
    irsData?: ValidationFunction<string>;
    efc?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FinancialInformationCreateFormOverridesProps = {
    FinancialInformationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    financialInfoId?: PrimitiveOverrideProps<TextFieldProps>;
    studentId?: PrimitiveOverrideProps<TextFieldProps>;
    taxableIncome?: PrimitiveOverrideProps<TextFieldProps>;
    untaxedIncome?: PrimitiveOverrideProps<TextFieldProps>;
    irsData?: PrimitiveOverrideProps<TextFieldProps>;
    efc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FinancialInformationCreateFormProps = React.PropsWithChildren<{
    overrides?: FinancialInformationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FinancialInformationCreateFormInputValues) => FinancialInformationCreateFormInputValues;
    onSuccess?: (fields: FinancialInformationCreateFormInputValues) => void;
    onError?: (fields: FinancialInformationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FinancialInformationCreateFormInputValues) => FinancialInformationCreateFormInputValues;
    onValidate?: FinancialInformationCreateFormValidationValues;
} & React.CSSProperties>;
export default function FinancialInformationCreateForm(props: FinancialInformationCreateFormProps): React.ReactElement;
