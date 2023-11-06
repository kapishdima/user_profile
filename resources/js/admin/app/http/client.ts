import axios from "axios";

import { apiConfig } from "app/config";
import { handleError } from "app/errors";
import { AuthToken } from "modules/token";

export const clientAxios = () => {
    const axiosClient = axios.create(apiConfig);

    axiosClient.interceptors.response.use(
        (request) => request,
        (error) => {
            const errorJson = error.toJSON();

            handleError(errorJson);

            return Promise.reject(errorJson);
        }
    );

    axiosClient.interceptors.request.use((request) => {
        const authToken = new AuthToken().read();

        if (!authToken) {
            return request;
        }
        if (request.url.includes("login")) {
            return request;
        }

        const headers = request.headers;
        return {
            ...request,
            headers: { ...headers, Authorization: `Bearer ${authToken}` },
        };
    });

    return axiosClient;
};
