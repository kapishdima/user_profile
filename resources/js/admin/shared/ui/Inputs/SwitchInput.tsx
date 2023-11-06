import React from "react";

import { Switch, majorScale, FormField } from "evergreen-ui";
import { Input } from "./Input";

export const SwitchInput = ({ name, label }) => {
    return (
        <FormField label={label} marginBottom={majorScale(3)}>
            <Input name={name} defaultValue={false}>
                {({ field, fieldState }) => {
                    const isInvalid = Boolean(fieldState.error);

                    return (
                        <div
                            style={
                                isInvalid
                                    ? {
                                          width: "max-content",
                                          border: "1px solid #D14343",
                                          borderRadius: "9999px",
                                      }
                                    : null
                            }
                        >
                            <Switch
                                name={name}
                                checked={field.value || false}
                                onChange={field.onChange}
                            />
                        </div>
                    );
                }}
            </Input>
        </FormField>
    );
};
