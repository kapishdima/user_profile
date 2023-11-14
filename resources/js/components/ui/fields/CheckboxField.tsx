import React from "react";
import { Input } from "./Input";
import { Checkbox as CheckboxUI } from "../checkbox";
import { RootInputProps, CheckboxControlProps } from "./types";

type CheckboxFieldProps = RootInputProps & CheckboxControlProps & {};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
    name,
    label,
    description,
    ...inputProps
}) => {
    return (
        <Input
            name={name}
            label={label}
            description={description}
            formItemClasses="flex flex-row-reverse items-center space-y-0 gap-x-2 font-regular"
            formLabelClasses="font-normal text-sm"
        >
            {({ field }) => (
                <CheckboxUI {...field} {...inputProps} className="space-y-0" />
            )}
        </Input>
    );
};
