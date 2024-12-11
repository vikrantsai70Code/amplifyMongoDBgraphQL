import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FAFSAApplications } from "./graphql/types";
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
export declare type FAFSAApplicationsUpdateFormInputValues = {
    fafsaId?: string;
    studentId?: string;
    applicationDate?: string;
    schoolCodes?: string;
    enrollmentDetails?: string;
    drtResults?: string;
};
export declare type FAFSAApplicationsUpdateFormValidationValues = {
    fafsaId?: ValidationFunction<string>;
    studentId?: ValidationFunction<string>;
    applicationDate?: ValidationFunction<string>;
    schoolCodes?: ValidationFunction<string>;
    enrollmentDetails?: ValidationFunction<string>;
    drtResults?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAFSAApplicationsUpdateFormOverridesProps = {
    FAFSAApplicationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    studentId?: PrimitiveOverrideProps<TextFieldProps>;
    applicationDate?: PrimitiveOverrideProps<TextFieldProps>;
    schoolCodes?: PrimitiveOverrideProps<TextFieldProps>;
    enrollmentDetails?: PrimitiveOverrideProps<TextFieldProps>;
    drtResults?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAFSAApplicationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FAFSAApplicationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fAFSAApplications?: FAFSAApplications;
    onSubmit?: (fields: FAFSAApplicationsUpdateFormInputValues) => FAFSAApplicationsUpdateFormInputValues;
    onSuccess?: (fields: FAFSAApplicationsUpdateFormInputValues) => void;
    onError?: (fields: FAFSAApplicationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FAFSAApplicationsUpdateFormInputValues) => FAFSAApplicationsUpdateFormInputValues;
    onValidate?: FAFSAApplicationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FAFSAApplicationsUpdateForm(props: FAFSAApplicationsUpdateFormProps): React.ReactElement;
