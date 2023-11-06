import React from "react";

import { FormField, FormFieldProps } from "evergreen-ui";

import { TranslatableInput, TextEditorInput } from "shared/ui";

import { InputCoreProps } from "./types";

type TranslatableEditorProps = InputCoreProps &
    FormFieldProps & {
        isInline?: boolean;
        rows?: number;
        small?: boolean;
    };

export const TranslatableEditor: React.FC<React.PropsWithChildren<TranslatableEditorProps>> = ({
    name,
    label,
    description,
    placeholder,
    hint,
    isInline,
    small = false,
}) => {
    return (
        <FormField label={label} description={description} hint={hint}>
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
