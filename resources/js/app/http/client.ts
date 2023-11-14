import axios from "axios";
import { handleHttpErrors } from "app/errors";
import { getToken } from "modules/auth";

export const client = axios.create({
    baseURL: import.meta.env.VITE_DEV_API_URL,
    headers: {
        Accept: "application/json",
    },
});

client.interceptors.request.use(async (config) => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// client.interceptors.response.use(function (response) {
//     handleHttpErrors(response.data.error);
//     return response;
// });
