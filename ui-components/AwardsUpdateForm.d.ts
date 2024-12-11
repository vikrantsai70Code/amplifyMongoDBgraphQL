import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Awards } from "./graphql/types";
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
export declare type AwardsUpdateFormInputValues = {
    awardId?: string;
    fafsaId?: string;
    pellGrantEligibility?: boolean;
    loanEligibility?: boolean;
    awardDecision?: string;
    awardPackageDetails?: string;
};
export declare type AwardsUpdateFormValidationValues = {
    awardId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    pellGrantEligibility?: ValidationFunction<boolean>;
    loanEligibility?: ValidationFunction<boolean>;
    awardDecision?: ValidationFunction<string>;
    awardPackageDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwardsUpdateFormOverridesProps = {
    AwardsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    awardId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    pellGrantEligibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    loanEligibility?: PrimitiveOverrideProps<SwitchFieldProps>;
    awardDecision?: PrimitiveOverrideProps<TextFieldProps>;
    awardPackageDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwardsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AwardsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    awards?: Awards;
    onSubmit?: (fields: AwardsUpdateFormInputValues) => AwardsUpdateFormInputValues;
    onSuccess?: (fields: AwardsUpdateFormInputValues) => void;
    onError?: (fields: AwardsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwardsUpdateFormInputValues) => AwardsUpdateFormInputValues;
    onValidate?: AwardsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AwardsUpdateForm(props: AwardsUpdateFormProps): React.ReactElement;
