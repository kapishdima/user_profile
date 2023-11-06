import React from "react";

import { RadioGroup, majorScale, FormField } from "evergreen-ui";
import { Input } from "./Input";

export const RadioGroupInput = ({
    name,
    label,
    options,
    defaultValue,
    required,
}: {
    name: string;
    label: any;
    options: any[];
    defaultValue: string;
    required: boolean;
}) => {
    return (
        <FormField label={label} marginBottom={majorScale(3)}>
            <Input name={name} defaultValue={defaultValue}>
                {({ field, fieldState }) => {
                    const isInvalid = Boolean(fieldState.error);

                    return (
                        <RadioGroup
                            ref={field.ref}
                            options={options}
                            value={field.value || defaultValue}
                            defaultValue={field.value || defaultValue}
                            onChange={(event) => {
                                field.onChange({
                                    target: {
                                        name,
                                        value: event.target.value,
                                    },
                                });
                            }}
                            onBlur={field.onBlur}
                            isRequired={required}
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
        </FormField>
    );
};
