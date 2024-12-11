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
export declare type AppealsCreateFormInputValues = {
    appealId?: string;
    fafsaId?: string;
    appealReasons?: string;
    supportingDocuments?: string;
};
export declare type AppealsCreateFormValidationValues = {
    appealId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    appealReasons?: ValidationFunction<string>;
    supportingDocuments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppealsCreateFormOverridesProps = {
    AppealsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    appealId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    appealReasons?: PrimitiveOverrideProps<TextFieldProps>;
    supportingDocuments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppealsCreateFormProps = React.PropsWithChildren<{
    overrides?: AppealsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppealsCreateFormInputValues) => AppealsCreateFormInputValues;
    onSuccess?: (fields: AppealsCreateFormInputValues) => void;
    onError?: (fields: AppealsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppealsCreateFormInputValues) => AppealsCreateFormInputValues;
    onValidate?: AppealsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppealsCreateForm(props: AppealsCreateFormProps): React.ReactElement;
