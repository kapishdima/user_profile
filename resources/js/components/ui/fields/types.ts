import { InputProps } from "../input";

export type RootInputProps = {
    name: string;
    label?: string;
    description?: JSX.Element | string;
    formItemClasses?: string;
    formLabelClasses?: string;

    withButton?: boolean;
    endContent?: JSX.Element;
};

export type InputControlProps = InputProps & {};
export type CheckboxControlProps = {};
