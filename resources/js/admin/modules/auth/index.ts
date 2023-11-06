import { AuthAPI, IAuthAPI } from "./api/auth.api";
import { useAuthStore, useGetMe, useLogout, useCheckAuth } from "./hooks";

import { AuthStore } from "./store/auth.api";
import { AuthService } from "./services/auth.service";

import {
    AuthStatusTypes,
    isAuthorized,
    isUnauthorized,
} from "./models/auth-status";
import { AuthResponse } from "./models/auth-response";

export type { IAuthAPI, AuthResponse };

export {
    AuthAPI,
    AuthStore,
    AuthStatusTypes,
    isAuthorized,
    isUnauthorized,
    AuthService,
    useGetMe,
    useLogout,
    useAuthStore,
    useCheckAuth,
};
