import React from "react";
import { useFormContext } from "react-hook-form";

import { ButtonProps as ButtonUIProps } from "../button";
import { Button } from "./Button";

export type SubmitButtonProps = ButtonUIProps & {
    loading?: boolean;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
    disabled = false,
    ...props
}) => {
    const form = useFormContext();
    console.log(form.formState.isValid);
    return (
        <Button
            type="submit"
            disabled={!form.formState.isValid || disabled}
            {...props}
        >
            {props.children}
        </Button>
    );
};
