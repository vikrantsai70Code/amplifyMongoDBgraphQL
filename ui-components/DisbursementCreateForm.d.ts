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
export declare type DisbursementCreateFormInputValues = {
    disbursementId?: string;
    fafsaId?: string;
    paymentSchedule?: string;
    disbursementRecords?: string;
    bankingDetails?: string;
};
export declare type DisbursementCreateFormValidationValues = {
    disbursementId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    paymentSchedule?: ValidationFunction<string>;
    disbursementRecords?: ValidationFunction<string>;
    bankingDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DisbursementCreateFormOverridesProps = {
    DisbursementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    disbursementId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    paymentSchedule?: PrimitiveOverrideProps<TextFieldProps>;
    disbursementRecords?: PrimitiveOverrideProps<TextFieldProps>;
    bankingDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DisbursementCreateFormProps = React.PropsWithChildren<{
    overrides?: DisbursementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DisbursementCreateFormInputValues) => DisbursementCreateFormInputValues;
    onSuccess?: (fields: DisbursementCreateFormInputValues) => void;
    onError?: (fields: DisbursementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DisbursementCreateFormInputValues) => DisbursementCreateFormInputValues;
    onValidate?: DisbursementCreateFormValidationValues;
} & React.CSSProperties>;
export default function DisbursementCreateForm(props: DisbursementCreateFormProps): React.ReactElement;
