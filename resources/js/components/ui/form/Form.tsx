import React from "react";

import { Form as FormUI } from "../form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { OnSubmitValues } from "./types";

type FormProps = {
    schema: z.ZodSchema;
    defaultValues: any;
    handleSubmit: (value: OnSubmitValues<z.ZodSchema>) => void;
};

export const Form: React.FC<React.PropsWithChildren<FormProps>> = ({
    schema,
    defaultValues,
    handleSubmit,
    children,
}) => {
    const form = useForm<OnSubmitValues<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = (values: OnSubmitValues<typeof schema>) => {
        handleSubmit(values);
    };

    console.log(form.getValues());

    return (
        <FormUI {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-full"
            >
                {children}
            </form>
        </FormUI>
    );
};
