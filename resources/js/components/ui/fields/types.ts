import { InputProps } from "../input";

export type RootInputProps = {
    name: string;
    label?: string;
    description?: string;
    formItemClasses?: string;
    formLabelClasses?: string;

    withButton?: boolean;
};

export type InputControlProps = InputProps & {};
export type CheckboxControlProps = {};
