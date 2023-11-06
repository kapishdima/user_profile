import { clientAxios } from "app/http/client";
import { SettingsResponseEntity } from "modules/settings";

import { GetListOptions, ListResponse } from "shared/api";
import { ListFilter } from "shared/api/types";

export interface ISettingsAPI {
    getManySettings: (
        options: GetListOptions
    ) => Promise<ListResponse<SettingsResponseEntity[]>>;
    getSettings: (id: string) => Promise<ListResponse<SettingsResponseEntity>>;
    deleteSettings: (id: number) => Promise<any>;
    updateSettings: (id: string, settings: any) => Promise<void>;
}

export const SettingsAPI: ISettingsAPI = {
    getManySettings: async (
        options: GetListOptions
    ): Promise<ListResponse<SettingsResponseEntity[]>> => {
        const { data: settings } = await clientAxios().get<
            ListResponse<SettingsResponseEntity[]>
        >(createFetchSettingsURL(options));

        return settings;
    },
    getSettings: async (
        id: string
    ): Promise<ListResponse<SettingsResponseEntity>> => {
        const { data: settings } = await clientAxios().get<
            ListResponse<SettingsResponseEntity>
        >(`/api/settings/${id}`);

        return settings;
    },
    deleteSettings: async (id: number): Promise<any> => {
        return await clientAxios().delete(`/api/settings/${id}`);
    },
    updateSettings: async (id: string, settings: any): Promise<void> => {
        await clientAxios().patch(`/api/settings/${id}`, settings);
    },
};

const createFetchSettingsURL = (options: GetListOptions) => {
    const { page, size } = options;
    const filterQueryParams = createFiltersURL(options.filters);

    return `/api/settings?page=${page || 1}&per_page=${
        size || 10
    }&${filterQueryParams}`;
};

const createFiltersURL = (filters: ListFilter[]) => {
    if (!filters || !filters.length) {
        return "";
    }

    let url = "";
    // FIXME: Это че такое?
    for (const filter of filters) {
        for (const [key, value] of Object.entries(filter)) {
            url = url + [key, value].join("=") + "&";
        }
    }

    return url;
};
