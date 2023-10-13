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
export declare type ListTodoUpdateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ListTodoUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListTodoUpdateFormOverridesProps = {
    ListTodoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ListTodoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListTodoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    listTodo?: any;
    onSubmit?: (fields: ListTodoUpdateFormInputValues) => ListTodoUpdateFormInputValues;
    onSuccess?: (fields: ListTodoUpdateFormInputValues) => void;
    onError?: (fields: ListTodoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListTodoUpdateFormInputValues) => ListTodoUpdateFormInputValues;
    onValidate?: ListTodoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListTodoUpdateForm(props: ListTodoUpdateFormProps): React.ReactElement;
