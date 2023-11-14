import React from "react";
import { Input } from "./Input";
import { Input as InputUI } from "../input";
import { RootInputProps, InputControlProps } from "./types";
import { Button, ButtonProps } from "../button/index";

type TextInputProps = RootInputProps &
    InputControlProps & {
        buttonProps?: ButtonProps;
    };

export const TextInput: React.FC<TextInputProps> = ({
    name,
    label,
    description,
    withButton,
    buttonProps,
    ...inputProps
}) => {
    return (
        <Input name={name} label={label} description={description}>
            {({ field }) => (
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <InputUI {...field} {...inputProps} />
                    {withButton && (
                        <Button {...buttonProps}>{buttonProps.children}</Button>
                    )}
                </div>
            )}
        </Input>
    );
};
