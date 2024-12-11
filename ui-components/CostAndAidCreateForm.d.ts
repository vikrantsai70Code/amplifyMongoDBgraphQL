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
export declare type CostAndAidCreateFormInputValues = {
    costAidId?: string;
    fafsaId?: string;
    costOfAttendance?: number;
    aidPackageDetails?: string;
};
export declare type CostAndAidCreateFormValidationValues = {
    costAidId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    costOfAttendance?: ValidationFunction<number>;
    aidPackageDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CostAndAidCreateFormOverridesProps = {
    CostAndAidCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    costAidId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    costOfAttendance?: PrimitiveOverrideProps<TextFieldProps>;
    aidPackageDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CostAndAidCreateFormProps = React.PropsWithChildren<{
    overrides?: CostAndAidCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CostAndAidCreateFormInputValues) => CostAndAidCreateFormInputValues;
    onSuccess?: (fields: CostAndAidCreateFormInputValues) => void;
    onError?: (fields: CostAndAidCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CostAndAidCreateFormInputValues) => CostAndAidCreateFormInputValues;
    onValidate?: CostAndAidCreateFormValidationValues;
} & React.CSSProperties>;
export default function CostAndAidCreateForm(props: CostAndAidCreateFormProps): React.ReactElement;
