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
export declare type FAFSAApplicationsCreateFormInputValues = {
    fafsaId?: string;
    studentId?: string;
    applicationDate?: string;
    schoolCodes?: string;
    enrollmentDetails?: string;
    drtResults?: string;
};
export declare type FAFSAApplicationsCreateFormValidationValues = {
    fafsaId?: ValidationFunction<string>;
    studentId?: ValidationFunction<string>;
    applicationDate?: ValidationFunction<string>;
    schoolCodes?: ValidationFunction<string>;
    enrollmentDetails?: ValidationFunction<string>;
    drtResults?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAFSAApplicationsCreateFormOverridesProps = {
    FAFSAApplicationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    studentId?: PrimitiveOverrideProps<TextFieldProps>;
    applicationDate?: PrimitiveOverrideProps<TextFieldProps>;
    schoolCodes?: PrimitiveOverrideProps<TextFieldProps>;
    enrollmentDetails?: PrimitiveOverrideProps<TextFieldProps>;
    drtResults?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAFSAApplicationsCreateFormProps = React.PropsWithChildren<{
    overrides?: FAFSAApplicationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FAFSAApplicationsCreateFormInputValues) => FAFSAApplicationsCreateFormInputValues;
    onSuccess?: (fields: FAFSAApplicationsCreateFormInputValues) => void;
    onError?: (fields: FAFSAApplicationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FAFSAApplicationsCreateFormInputValues) => FAFSAApplicationsCreateFormInputValues;
    onValidate?: FAFSAApplicationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FAFSAApplicationsCreateForm(props: FAFSAApplicationsCreateFormProps): React.ReactElement;
