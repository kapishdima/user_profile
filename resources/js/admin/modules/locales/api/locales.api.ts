import { LocaleResponseEntity } from "../models";
import { ListResponse } from "shared/api";
import { clientAxios } from "app/http/client";

export interface ILocalesAPI {
    getAllLocales: () => Promise<LocaleResponseEntity[]>;
}

export const LocalesAPI: ILocalesAPI = {
    getAllLocales: async (): Promise<LocaleResponseEntity[]> => {
        const { data: locales } = await clientAxios().get<
            ListResponse<LocaleResponseEntity[]>
        >("/api/locales");

        return locales.data;
    },
};
