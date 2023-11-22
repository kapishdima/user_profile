import React from "react";
import { Input } from "./Input";
import { Input as InputUI } from "../input";
import { RootInputProps, InputControlProps } from "./types";
import { Button, ButtonProps, SubmitButton } from "../button/index";

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
    endContent,
    ...inputProps
}) => {
    return (
        <Input name={name} label={label} description={description}>
            {({ field }) => (
                <div className="flex w-full items-center space-x-2">
                    <div className="relative flex flex-1 items-center">
                        <InputUI {...field} {...inputProps} />
                        {endContent && (
                            <div className="absolute right-4">{endContent}</div>
                        )}
                    </div>
                    {withButton && (
                        <Button {...buttonProps}>{buttonProps.children}</Button>
                    )}
                </div>
            )}
        </Input>
    );
};
