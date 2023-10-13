/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListTodoCreateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ListTodoCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListTodoCreateFormOverridesProps = {
    ListTodoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ListTodoCreateFormProps = React.PropsWithChildren<{
    overrides?: ListTodoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ListTodoCreateFormInputValues) => ListTodoCreateFormInputValues;
    onSuccess?: (fields: ListTodoCreateFormInputValues) => void;
    onError?: (fields: ListTodoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListTodoCreateFormInputValues) => ListTodoCreateFormInputValues;
    onValidate?: ListTodoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ListTodoCreateForm(props: ListTodoCreateFormProps): React.ReactElement;
