import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CostAndAid } from "./graphql/types";
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
export declare type CostAndAidUpdateFormInputValues = {
    costAidId?: string;
    fafsaId?: string;
    costOfAttendance?: number;
    aidPackageDetails?: string;
};
export declare type CostAndAidUpdateFormValidationValues = {
    costAidId?: ValidationFunction<string>;
    fafsaId?: ValidationFunction<string>;
    costOfAttendance?: ValidationFunction<number>;
    aidPackageDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CostAndAidUpdateFormOverridesProps = {
    CostAndAidUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    costAidId?: PrimitiveOverrideProps<TextFieldProps>;
    fafsaId?: PrimitiveOverrideProps<TextFieldProps>;
    costOfAttendance?: PrimitiveOverrideProps<TextFieldProps>;
    aidPackageDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CostAndAidUpdateFormProps = React.PropsWithChildren<{
    overrides?: CostAndAidUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    costAndAid?: CostAndAid;
    onSubmit?: (fields: CostAndAidUpdateFormInputValues) => CostAndAidUpdateFormInputValues;
    onSuccess?: (fields: CostAndAidUpdateFormInputValues) => void;
    onError?: (fields: CostAndAidUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CostAndAidUpdateFormInputValues) => CostAndAidUpdateFormInputValues;
    onValidate?: CostAndAidUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CostAndAidUpdateForm(props: CostAndAidUpdateFormProps): React.ReactElement;
