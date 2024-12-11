import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SchoolEnrollment } from "./graphql/types";
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
export declare type SchoolEnrollmentUpdateFormInputValues = {
    enrollmentId?: string;
    fafsaId?: string;
    schoolConfirmationStatus?: string;
    verificationData?: string;
};
export declare type SchoolEnrollmentUpdateFormValidationValues = {
    enrollmentId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    schoolConfirmationStatus?: ValidationFunction<string>;
    verificationData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolEnrollmentUpdateFormOverridesProps = {
    SchoolEnrollmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    enrollmentId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    schoolConfirmationStatus?: PrimitiveOverrideProps<TextFieldProps>;
    verificationData?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SchoolEnrollmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: SchoolEnrollmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    schoolEnrollment?: SchoolEnrollment;
    onSubmit?: (fields: SchoolEnrollmentUpdateFormInputValues) => SchoolEnrollmentUpdateFormInputValues;
    onSuccess?: (fields: SchoolEnrollmentUpdateFormInputValues) => void;
    onError?: (fields: SchoolEnrollmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolEnrollmentUpdateFormInputValues) => SchoolEnrollmentUpdateFormInputValues;
    onValidate?: SchoolEnrollmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolEnrollmentUpdateForm(props: SchoolEnrollmentUpdateFormProps): React.ReactElement;
