import React from "react";

import { MediaDomainEntity, useCreateMedia, MediaService } from "modules/media";

import { useControl } from "../../hooks";
import { ListResponse } from "../../api";

import { GalleryInputMany } from "..";
import { Image } from "../GalleryMany/model/image";

type MediaInputProps = {
    name?: string;
    maxFiles?: number;
    required?: boolean;
    disabled?: boolean;
};

export const MediaInputMany: React.FC<
    React.PropsWithChildren<MediaInputProps>
> = ({ name, required, disabled }) => {
    const { setValue } = useControl();
    const inputName = name || "media";

    const getImages = async ({
        page,
        size,
    }): Promise<ListResponse<Image[]>> => {
        const { data: media, meta } = await MediaService.getMedia({
            page,
            size,
        });

        return {
            data: (media as MediaDomainEntity[]).map((media) => ({
                id: media.id,
                url: media.path,
            })),
            meta,
        };
    };

    const upload = async (file: File): Promise<Image> => {
        const image = await MediaService.createMedia({ file });

        return { id: image.id, url: image.path };
    };

    const saveToForm = (images: Image[]) => {
        setValue(
            inputName,
            images.map((image, index) => ({
                order: index,
                id: image.id,
                url: image.url,
            }))
        );
    };

    return (
        <GalleryInputMany
            required={required}
            getImages={getImages}
            upload={upload}
            name={inputName}
            buttonText="Оберіть медіа"
            saveToForm={saveToForm}
            disabled={disabled}
        />
    );
};
