import React from "react";

import {
    ControllerFieldState,
    ControllerRenderProps,
    UseFormStateReturn,
    useFormContext,
} from "react-hook-form";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../form";
import { RootInputProps } from "./types";

type InputChildren = ({
    field,
    fieldState,
    formState,
}: {
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
}) => React.ReactElement;

type InputProps = RootInputProps & {
    children: InputChildren;
};

export const Input: React.FC<InputProps> = ({
    name,
    description,
    label,
    formItemClasses,
    formLabelClasses,
    children,
}) => {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={name}
            render={(inputProps) => (
                <FormItem className={formItemClasses}>
                    {Boolean(label) && (
                        <FormLabel className={formLabelClasses}>
                            {label}
                        </FormLabel>
                    )}
                    <FormControl>{children(inputProps)}</FormControl>
                    {Boolean(description) && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage className="font-normal" />
                </FormItem>
            )}
        />
    );
};
