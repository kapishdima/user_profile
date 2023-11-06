import React from "react";

import { FormField, FormFieldProps } from "evergreen-ui";

import { TranslatableInput } from "./TranslatableInput";

import { InputCoreProps } from "./types";
import { TextAreaInput } from "./TextAreaInput";
import { TextEditorInput } from "./TextEditorInput/TextEditorInput";

type TranslatableTextEditorInputProps = InputCoreProps &
    FormFieldProps & {
        isInline?: boolean;
        rows?: number;
        required?: boolean;
    };

export const TranslatableTextEditorInput: React.FC<React.PropsWithChildren<TranslatableTextEditorInputProps>> = ({
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
                        <TextEditorInput
                            name={`${name}.${locale}`}
                            placeholder={placeholder}
                        />
                    );
                }}
            </TranslatableInput>
        </FormField>
    );
};
