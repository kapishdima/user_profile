import React from "react";

import { FormField, FormFieldProps } from "evergreen-ui";

import { TextInput } from "./TextInput";
import { TranslatableInput } from "./TranslatableInput";

import { InputCoreProps } from "./types";

type TranslatableTextInputProps = InputCoreProps &
    FormFieldProps & {
        isInline?: boolean;
        required?: boolean;
    };

export const TranslatableTextInput: React.FC<React.PropsWithChildren<TranslatableTextInputProps>> = ({
    name,
    label,
    hint,
    description,
    placeholder,
    isInline,
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
                        <TextInput
                            name={`${name}.${locale}`}
                            placeholder={placeholder}
                        />
                    );
                }}
            </TranslatableInput>
        </FormField>
    );
};
