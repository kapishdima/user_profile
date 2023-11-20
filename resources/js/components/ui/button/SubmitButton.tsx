import React from "react";
import { useFormContext } from "react-hook-form";

import { ButtonProps as ButtonUIProps } from "../button";
import { Button } from "./Button";

export type SubmitButtonProps = ButtonUIProps & {
    loading?: boolean;
};

export const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
    const form = useFormContext();
    return (
        <Button type="submit" disabled={!form.formState.isValid} {...props}>
            {props.children}
        </Button>
    );
};
