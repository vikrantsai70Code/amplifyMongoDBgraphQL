import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Appeals } from "./graphql/types";
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
export declare type AppealsUpdateFormInputValues = {
    appealId?: string;
    fafsaId?: string;
    appealReasons?: string;
    supportingDocuments?: string;
};
export declare type AppealsUpdateFormValidationValues = {
    appealId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    appealReasons?: ValidationFunction<string>;
    supportingDocuments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppealsUpdateFormOverridesProps = {
    AppealsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    appealId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    appealReasons?: PrimitiveOverrideProps<TextFieldProps>;
    supportingDocuments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppealsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppealsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appeals?: Appeals;
    onSubmit?: (fields: AppealsUpdateFormInputValues) => AppealsUpdateFormInputValues;
    onSuccess?: (fields: AppealsUpdateFormInputValues) => void;
    onError?: (fields: AppealsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppealsUpdateFormInputValues) => AppealsUpdateFormInputValues;
    onValidate?: AppealsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppealsUpdateForm(props: AppealsUpdateFormProps): React.ReactElement;
