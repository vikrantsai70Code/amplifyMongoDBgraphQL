import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Students } from "./graphql/types";
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
export declare type StudentsUpdateFormInputValues = {
    studentId?: string;
    ssn?: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    dependencyStatus?: string;
    householdSize?: number;
};
export declare type StudentsUpdateFormValidationValues = {
    studentId?: ValidationFunction<string>;
    ssn?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    dependencyStatus?: ValidationFunction<string>;
    householdSize?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentsUpdateFormOverridesProps = {
    StudentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentId?: PrimitiveOverrideProps<TextFieldProps>;
    ssn?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    dependencyStatus?: PrimitiveOverrideProps<TextFieldProps>;
    householdSize?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    students?: Students;
    onSubmit?: (fields: StudentsUpdateFormInputValues) => StudentsUpdateFormInputValues;
    onSuccess?: (fields: StudentsUpdateFormInputValues) => void;
    onError?: (fields: StudentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentsUpdateFormInputValues) => StudentsUpdateFormInputValues;
    onValidate?: StudentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudentsUpdateForm(props: StudentsUpdateFormProps): React.ReactElement;
