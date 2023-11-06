import { UserResponseEntity } from "modules/user";
import { AuthToken } from "modules/token";

import { LoginCredentials } from "../models/login-credentials";
import { LoginResponse } from "../models/login-response";
import { clientAxios } from "app/http/client";

export interface ILoginAPI {
    login: (credentials: LoginCredentials) => Promise<UserResponseEntity>;
    sendLoginRequest: (credentials: LoginCredentials) => Promise<LoginResponse>;
}

export const LoginAPI: ILoginAPI = {
    login: async (
        credentials: LoginCredentials
    ): Promise<UserResponseEntity> => {
        await getCSRFToken();

        const { admin, token } = await LoginAPI.sendLoginRequest(credentials);
        createAndSaveAuthToken(token);

        return admin;
    },
    sendLoginRequest: async (credentials: LoginCredentials) => {
        const { data } = await clientAxios().post<LoginResponse>(`/api/login`, {
            email: credentials.email,
            password: credentials.password,
        });

        return { admin: data.admin, token: data.token };
    },
};

const createAndSaveAuthToken = (token: string) => {
    const authToken = new AuthToken();

    authToken.clear();
    authToken.save(token);

    return authToken;
};
const getCSRFToken = async () => {
    return await clientAxios().get("/sanctum/csrf-cookie");
};
