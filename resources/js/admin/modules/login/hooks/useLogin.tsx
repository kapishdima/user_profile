import React, { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { toDomainEntity, UserResponseEntity } from "modules/user";
import { AuthToken } from "modules/token";

import { LoginAPI, LoginCredentials } from "modules/login";
import { UserService } from "modules/user";
import { useAuthStore } from "modules/auth";

import { LocationState } from "shared/types/location";
import { createErrorNotification } from "shared/ui";
import { useMutation } from "react-query";

export const useLogin = () => {
    const authStore = useAuthStore();

    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as LocationState;
    const from = state?.from?.pathname || "/";

    const { mutate: login, isLoading } = useMutation(
        async (credentials: LoginCredentials) =>
            await LoginAPI.login(credentials),
        {
            onSuccess: (user: UserResponseEntity) => {
                authStore.setAuthorized();
                authStore.setUser(toDomainEntity(user));
                UserService.saveUser(user);
                navigate(from.includes("login") ? "/" : from, {
                    replace: true,
                });
            },
            onError: (error: any) => {
                if (error.status === 401) {
                    authStore.setUnauthorized();
                    createErrorNotification({
                        title: "Email чи пароль невірні",
                    });
                }
            },
        }
    );

    useEffect(() => {
        authStore.setUnauthorized();
        UserService.deleteUser();
        new AuthToken().clear();
    }, []);

    return { login, isLoading };
};
