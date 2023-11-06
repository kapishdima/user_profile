import { GetListOptions } from "shared/api";

import { MediaAPI } from "../api/media.api";
import {
    CreateMediaDTO,
    toDomainEntity,
    MediaDomainEnity,
    MediaResponseEntity,
} from "../models";

export const MediaService = {
    getMedia: async (options?: GetListOptions) => {
        const { data: media, meta } = await MediaAPI.getMedia(options);
        return {
            data: mapToMediaDomainEntity(media),
            meta: {
                ...meta,
                total: Math.ceil(meta.total / meta.per_page),
            },
        };
    },
    getMediaById: async (id: string) => {
        const media = await MediaAPI.getMediaById(id);

        return toDomainEntity()(media);
    },
    createMedia: async (payload: CreateMediaDTO) => {
        const { data: media } = await MediaAPI.createMedia(payload);

        return mapToMediaDomainEntity(media) as MediaDomainEnity;
    },
};

const mapToMediaDomainEntity = (
    media: MediaResponseEntity | MediaResponseEntity[]
) => {
    const mapToDomain = (media: MediaResponseEntity) => {
        return toDomainEntity()(media);
    };

    if (Array.isArray(media)) {
        return media.map(mapToDomain);
    }

    return mapToDomain(media);
};
