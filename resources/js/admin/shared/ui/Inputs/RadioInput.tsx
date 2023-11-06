import React from "react";

import { Radio, majorScale, FormField } from "evergreen-ui";
import { Input } from "./Input";

export const RadioInput = ({
    name,
    label,
    options,
}: {
    name: string;
    label: any;
    options: any[];
}) => {
    return (
        <FormField label={label} marginBottom={majorScale(3)}>
            {options.map((option) => (
                <Input name={name} key={option.value}>
                    {({ field, fieldState }) => {
                        const isInvalid = Boolean(fieldState.error);

                        return (
                            <Radio
                                ref={field.ref}
                                name={name}
                                label={option.value}
                                value={option.value}
                                onChange={(event) => {
                                    field.onChange({
                                        target: {
                                            name,
                                            value: event.target.value,
                                        },
                                    });
                                }}
                                onBlur={field.onBlur}
                                style={
                                    isInvalid
                                        ? {
                                              width: "max-content",
                                              borderBottom: "1px solid #D14343",
                                          }
                                        : null
                                }
                            />
                        );
                    }}
                </Input>
            ))}
        </FormField>
    );
};
