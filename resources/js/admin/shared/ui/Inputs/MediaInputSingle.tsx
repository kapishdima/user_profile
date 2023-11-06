import React from "react";

import { MediaDomainEntity, useCreateMedia, MediaService } from "modules/media";

import { useControl } from "../../hooks";
import { ListResponse } from "../../api";
import { GalleryInputSingle } from "..";

import { Image } from "../GalleryMany/model/image";
import { FormFieldProps } from "evergreen-ui";

type MediaInputProps = FormFieldProps & {
    name?: string;
    required?: boolean;
};

export const MediaInputSingle: React.FC<
    React.PropsWithChildren<MediaInputProps>
> = ({ name, label, required }) => {
    const { setValue } = useControl();

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

    const saveToForm = (image: Image) => {
        if (!image?.id || !image?.url) {
            return;
        }
        setValue(name, image.id);
    };

    return (
        <GalleryInputSingle
            required={required}
            label={label}
            getImages={getImages}
            upload={upload}
            name={name}
            buttonText="Оберіть медіа"
            saveToForm={saveToForm}
        />
    );
};
