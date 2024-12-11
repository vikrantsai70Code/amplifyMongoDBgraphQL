import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AwardsCreateFormInputValues = {
    awardId?: string;
    fafsaId?: string;
    pellGrantEligibility?: boolean;
    loanEligibility?: boolean;
    awardDecision?: string;
    awardPackageDetails?: string;
};
export declare type AwardsCreateFormValidationValues = {
    awardId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    pellGrantEligibility?: ValidationFunction<boolean>;
    loanEligibility?: ValidationFunction<boolean>;
    awardDecision?: ValidationFunction<string>;
    awardPackageDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwardsCreateFormOverridesProps = {
    AwardsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    awardId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    pellGrantEligibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    loanEligibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    awardDecision?: PrimitiveOverrideProps<TextFieldProps>;
    awardPackageDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwardsCreateFormProps = React.PropsWithChildren<{
    overrides?: AwardsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AwardsCreateFormInputValues) => AwardsCreateFormInputValues;
    onSuccess?: (fields: AwardsCreateFormInputValues) => void;
    onError?: (fields: AwardsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwardsCreateFormInputValues) => AwardsCreateFormInputValues;
    onValidate?: AwardsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AwardsCreateForm(props: AwardsCreateFormProps): React.ReactElement;
