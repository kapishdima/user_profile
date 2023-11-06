import React from "react";
import {
    FormField,
    FilePicker as FileInputUI,
    FormFieldProps,
    majorScale,
} from "evergreen-ui";
import { Input } from "./Input";
import { useCreateMedia } from "modules/media";
import { useControl } from "../../hooks";

type FileInputProps = FormFieldProps & {
    name: string;
    required?: boolean;
};

export const FileInput: React.FC<React.PropsWithChildren<FileInputProps>> = ({
    label,
    description,
    hint,
    name,
    required,
}) => {
    const { createMedia } = useCreateMedia();
    const { setValue } = useControl();

    const onChange = async (files: FileList) => {
        const file = files[0];

        const media = await createMedia(file);
        setValue(name, [{ order: 0, id: media.id, url: media.path }]);
    };

    return (
        <FormField
            label={label}
            description={description}
            hint={hint}
            marginBottom={majorScale(2)}
        >
            <Input name={name}>
                {({ field }) => (
                    <FileInputUI
                        ref={field.ref}
                        multiple={false}
                        onChange={onChange}
                        required={required}
                    />
                )}
            </Input>
        </FormField>
    );
};
