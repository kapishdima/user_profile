import React from "react";

import {
    FormField,
    FormFieldProps,
    Heading,
    majorScale,
    Pane,
} from "evergreen-ui";

import { Input, InputCoreProps } from "../..";

import { GalleryModal } from "./Modal/GalleryModal";
import { GalleryValues } from "./Values";
import { GalleryUpload } from "./Upload";

import { GalleryManager } from "../lib/providers/GalleryManager";
import { GalleryStoreProvider } from "../lib/providers/GalleryStoreProvider";
import { GalleryDefaultValueProvider } from "../lib/providers/GalleryDefaultValueProvider";

import { GetImageFunction, UploadFunction } from "../types";
import { Image } from "../model/image";

type GalleryInputProps = InputCoreProps &
    FormFieldProps & {
        buttonText?: string;
        getImages: GetImageFunction;
        upload: UploadFunction;
        saveToForm?: (images: Image[]) => void;
        modalTitle?: string;
        required?: boolean;
        disabled?: boolean;
    };

export const GalleryInputMany: React.FC<React.PropsWithChildren<GalleryInputProps>> = ({
    name,
    label,
    hint,
    getImages,
    upload,
    saveToForm,
    buttonText,
    required,
    disabled,
}) => {
    return (
        <GalleryStoreProvider>
            <FormField
                label={label || ""}
                hint={hint}
                marginBottom={majorScale(3)}
                isRequired={required}
            >
                <GalleryManager
                    name={name}
                    saveToForm={saveToForm}
                    getImages={getImages}
                >
                    <Input name={name}>
                        {({ field, fieldState }) => {
                            const isValid = !Boolean(fieldState.error);

                            return (
                                <GalleryDefaultValueProvider name={name}>
                                    <Pane display="flex" flexDirection="column">
                                        <GalleryUpload
                                            error={fieldState.error}
                                            isValid={isValid}
                                            upload={upload}
                                            disabled={disabled}
                                        />

                                        <Heading
                                            textAlign="center"
                                            marginBottom={majorScale(2)}
                                            size={100}
                                        >
                                            чи оберіть із завантаженних
                                        </Heading>

                                        <GalleryModal title={buttonText} />

                                        <GalleryValues />
                                    </Pane>
                                </GalleryDefaultValueProvider>
                            );
                        }}
                    </Input>
                </GalleryManager>
            </FormField>
        </GalleryStoreProvider>
    );
};
