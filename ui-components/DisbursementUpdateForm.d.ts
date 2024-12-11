import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Disbursement } from "./graphql/types";
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
export declare type DisbursementUpdateFormInputValues = {
    disbursementId?: string;
    fafsaId?: string;
    paymentSchedule?: string;
    disbursementRecords?: string;
    bankingDetails?: string;
};
export declare type DisbursementUpdateFormValidationValues = {
    disbursementId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    paymentSchedule?: ValidationFunction<string>;
    disbursementRecords?: ValidationFunction<string>;
    bankingDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DisbursementUpdateFormOverridesProps = {
    DisbursementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    disbursementId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    paymentSchedule?: PrimitiveOverrideProps<TextFieldProps>;
    disbursementRecords?: PrimitiveOverrideProps<TextFieldProps>;
    bankingDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DisbursementUpdateFormProps = React.PropsWithChildren<{
    overrides?: DisbursementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    disbursement?: Disbursement;
    onSubmit?: (fields: DisbursementUpdateFormInputValues) => DisbursementUpdateFormInputValues;
    onSuccess?: (fields: DisbursementUpdateFormInputValues) => void;
    onError?: (fields: DisbursementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DisbursementUpdateFormInputValues) => DisbursementUpdateFormInputValues;
    onValidate?: DisbursementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DisbursementUpdateForm(props: DisbursementUpdateFormProps): React.ReactElement;
