import { UserResponseEntity } from "modules/user/models";
import { AuthToken } from "modules/token";

import { IAuthAPI } from "../api/auth.api";
import { AuthAPI } from "../api/auth.api";

export const AuthService = {
    logout: async () => {
        return await AuthAPI.logout();
    },
    getMe: async (): Promise<UserResponseEntity> => {
        const user = await AuthAPI.getMeInfo();

        return user;
    },
    getAuthToken: (): string => {
        return new AuthToken().read();
    },
};
