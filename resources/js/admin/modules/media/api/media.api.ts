import { ListResponse } from "shared/api";
import { GetListOptions } from "shared/api/types";
import { CreateMediaDTO, MediaResponseEntity } from "../models";
import { clientAxios } from "app/http/client";

export interface IMediaAPI {
    getMedia: (
        options: GetListOptions
    ) => Promise<ListResponse<MediaResponseEntity[]>>;
    getMediaById: (id: string) => Promise<MediaResponseEntity>;
    createMedia: (
        payload: CreateMediaDTO
    ) => Promise<ListResponse<MediaResponseEntity>>;
}

export const MediaAPI: IMediaAPI = {
    getMedia: async (
        options?: GetListOptions
    ): Promise<ListResponse<MediaResponseEntity[]>> => {
        const { data: media } = await clientAxios().get<
            ListResponse<MediaResponseEntity[]>
        >(
            options
                ? `/api/media?page=${options.page || 1}&per_page=${
                      options.size || 10
                  }`
                : `/api/media`
        );

        return media;
    },
    getMediaById: async (id: string): Promise<MediaResponseEntity> => {
        const { data: media } = await clientAxios().get<
            ListResponse<MediaResponseEntity>
        >(`/api/media/${id}`);

        return media.data;
    },
    createMedia: async (
        payload: CreateMediaDTO
    ): Promise<ListResponse<MediaResponseEntity>> => {
        const { data: media } = await clientAxios().post<
            ListResponse<MediaResponseEntity>
        >("/api/media", payloadToFormData(payload));
        return media;
    },
};

const payloadToFormData = <Payload extends {}>(payload: Payload): FormData => {
    const formData = new FormData();
    const payloadKeys = Object.keys(payload);

    payloadKeys.forEach((key) => {
        formData.append(key, payload[key]);
    });

    return formData;
};
