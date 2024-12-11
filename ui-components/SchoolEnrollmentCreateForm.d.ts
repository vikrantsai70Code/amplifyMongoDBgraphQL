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
export declare type SchoolEnrollmentCreateFormInputValues = {
    enrollmentId?: string;
    fafsaId?: string;
    schoolConfirmationStatus?: string;
    verificationData?: string;
};
export declare type SchoolEnrollmentCreateFormValidationValues = {
    enrollmentId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    schoolConfirmationStatus?: ValidationFunction<string>;
    verificationData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolEnrollmentCreateFormOverridesProps = {
    SchoolEnrollmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    enrollmentId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    schoolConfirmationStatus?: PrimitiveOverrideProps<TextFieldProps>;
    verificationData?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SchoolEnrollmentCreateFormProps = React.PropsWithChildren<{
    overrides?: SchoolEnrollmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SchoolEnrollmentCreateFormInputValues) => SchoolEnrollmentCreateFormInputValues;
    onSuccess?: (fields: SchoolEnrollmentCreateFormInputValues) => void;
    onError?: (fields: SchoolEnrollmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolEnrollmentCreateFormInputValues) => SchoolEnrollmentCreateFormInputValues;
    onValidate?: SchoolEnrollmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolEnrollmentCreateForm(props: SchoolEnrollmentCreateFormProps): React.ReactElement;
