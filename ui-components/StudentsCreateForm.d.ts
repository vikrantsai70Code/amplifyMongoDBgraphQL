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
export declare type StudentsCreateFormInputValues = {
    studentId?: string;
    ssn?: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    dependencyStatus?: string;
    householdSize?: number;
};
export declare type StudentsCreateFormValidationValues = {
    studentId?: ValidationFunction<string>;
    ssn?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    dependencyStatus?: ValidationFunction<string>;
    householdSize?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentsCreateFormOverridesProps = {
    StudentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentId?: PrimitiveOverrideProps<TextFieldProps>;
    ssn?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    dependencyStatus?: PrimitiveOverrideProps<TextFieldProps>;
    householdSize?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentsCreateFormProps = React.PropsWithChildren<{
    overrides?: StudentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentsCreateFormInputValues) => StudentsCreateFormInputValues;
    onSuccess?: (fields: StudentsCreateFormInputValues) => void;
    onError?: (fields: StudentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentsCreateFormInputValues) => StudentsCreateFormInputValues;
    onValidate?: StudentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function StudentsCreateForm(props: StudentsCreateFormProps): React.ReactElement;
