import { UserResponseEntity } from "modules/user/models";
import { AuthResponse, AuthStatusTypes } from "../models";

import { IAPIClient } from "shared/api";
import { clientAxios } from "app/http/client";

export interface IAuthAPI {
    logout: () => Promise<void>;
    getMeInfo: () => Promise<UserResponseEntity>;
    isAuthorized: () => Promise<AuthResponse>;
}

export const AuthAPI: IAuthAPI = {
    logout: async (): Promise<void> => {
        await clientAxios().post("/api/logout");
    },
    getMeInfo: async (): Promise<UserResponseEntity> => {
        const { data: user } = await clientAxios().get<UserResponseEntity>(
            "/api/user"
        );
        return user;
    },
    isAuthorized: async (): Promise<AuthResponse> => {
        const user = await AuthAPI.getMeInfo();

        return sendAuthResponse(user);
    },
};

const sendAuthResponse = (user): AuthResponse => {
    return {
        user,
        status: Boolean(user)
            ? AuthStatusTypes.AUTHORIZED
            : AuthStatusTypes.UNAUTHORIZED,
    };
};
