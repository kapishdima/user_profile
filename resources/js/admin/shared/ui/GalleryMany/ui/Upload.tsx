import React, { useEffect, useState, useCallback } from "react";

import {
    ErrorIcon,
    FileUploader,
    Heading,
    majorScale,
    Pane,
    FileCard,
} from "evergreen-ui";
import { useMutation } from "react-query";

import { Loading } from "../..";

import { useGalleryStore } from "../hooks/useGalleryStore";
import { UploadFunction } from "../types";
import { ControllerFieldState, FieldError } from "react-hook-form";

type GalleryUploadProps = {
    upload: UploadFunction;
    label?: string;
    description?: string;
    isValid?: boolean;
    error?: FieldError;
    disabled?: boolean;
};

export const GalleryUpload: React.FC<React.PropsWithChildren<GalleryUploadProps>> = ({
    upload,
    label,
    description,
    isValid,
    error,
    disabled,
}) => {
    const galleryStore = useGalleryStore();

    const {
        mutateAsync: startUploading,
        isLoading,
    } = useMutation((file: File) => upload(file));

    const [files, setFiles] = useState<File[]>([]);

    const onAccepted = (files: File[]) => {
        setFiles((_files) => [..._files, ...files]);
    };

    useEffect(() => {
        if (!files.length) {
            return;
        }
        galleryStore.upload(startUploading, files);
    }, [files.length]);

    return (
        <Pane>
            {isLoading ? (
                <Loading title="Завантаження" />
            ) : (
                <FileUploader
                    disabled={disabled}
                    style={
                        !isValid
                            ? {
                                  borderColor: "#D14343",
                                  borderStyle: "solid",
                                  backgroundColor: "#FDF4F4",
                              }
                            : null
                    }
                    label={label || "Завантажте медіа"}
                    description={
                        description || `Файл не має перевищувати 50 MB.`
                    }
                    hint={
                        error ? (
                            <Heading
                                size={200}
                                color="#D14343"
                                display="flex"
                                alignItems="center"
                                fontWeight={400}
                                marginTop={majorScale(2)}
                                columnGap={majorScale(1)}
                            >
                                <ErrorIcon color="danger" /> {error?.message}{" "}
                            </Heading>
                        ) : null
                    }
                    maxSizeInBytes={50 * 1024 ** 2}
                    onAccepted={onAccepted}
                />
            )}
        </Pane>
    );
};
