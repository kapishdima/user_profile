import React from "react";

import { FormField, FormFieldProps } from "evergreen-ui";

import { TranslatableInput } from "./TranslatableInput";

import { InputCoreProps } from "./types";
import { TextAreaInput } from "./TextAreaInput";

type TranslatableTextAreaInputProps = InputCoreProps &
    FormFieldProps & {
        isInline?: boolean;
        rows?: number;
        required?: boolean;
    };

export const TranslatableTextAreaInput: React.FC<React.PropsWithChildren<TranslatableTextAreaInputProps>> = ({
    name,
    label,
    hint,
    description,
    placeholder,
    isInline,
    rows,
    required,
}) => {
    return (
        <FormField
            label={label}
            description={description}
            hint={hint}
            isRequired={required}
        >
            <TranslatableInput>
                {(locale) => {
                    return (
                        <TextAreaInput
                            name={`${name}.${locale}`}
                            placeholder={placeholder}
                            rows={rows}
                        />
                    );
                }}
            </TranslatableInput>
        </FormField>
    );
};
