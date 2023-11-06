import React from "react";

import { FilePicker, majorScale } from "evergreen-ui";
import { useMutation } from "react-query";
import { Loading } from "../..";

import { useGalleryStore } from "../hooks/useGalleryStore";
import { UploadFunction } from "../types";

type GalleryUploadProps = {
    upload: UploadFunction;
    isValid?: boolean;
};

export const GalleryUpload: React.FC<React.PropsWithChildren<GalleryUploadProps>> = ({
    upload,
    isValid,
}) => {
    const galleryStore = useGalleryStore();

    const {
        mutateAsync: startUploading,
        isLoading,
    } = useMutation((file: File) => upload(file));

    const onChange = (files: FileList) => {
        galleryStore.upload(startUploading, files[0]);
    };

    if (isLoading) {
        return <Loading minHeight={`${majorScale(4)}px`} />;
    }

    return (
        <FilePicker
            className={`${!isValid ? "gallery-single-input--invalid" : ""}`}
            placeholder="Завантажте 1 файл"
            onChange={onChange}
        />
    );
};
