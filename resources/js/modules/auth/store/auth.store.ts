import { create } from "zustand";
import {
    getToken,
    storeToken,
    checkAuth as sendCheckAuth,
    login as sendLogin,
    registerUser,
    logout,
    resetPassword,
} from "../api/auth.api";
import { LoginRequest } from "../model/login";
import { SignupRequest } from "../model/sing-up";
import { CACHED_EMAIL } from "@/app/constants/storage";
import { ResetPasswordRequest } from "../model/reset-password";
import { toast } from "@/components/ui/use-toast";

type AuthStore = {
    loading: boolean;
    resetLoading: boolean;
    loginLoading: boolean;
    isAuth: boolean;
    login: (request: LoginRequest) => void;
    logout: () => void;
    checkAuth: () => void;
    register: (values: SignupRequest) => void;
    resetPassword: (values: ResetPasswordRequest) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    loading: false,
    resetLoading: false,
    loginLoading: false,
    isAuth: false,
    cachedPhone: "",
    checkAuth: async () => {
        set(() => ({ loading: true }));
        const token = getToken();
        const isTokenValid = await sendCheckAuth();
        const isAuth = Boolean(token && isTokenValid);
        set(() => ({ loading: false, isAuth }));
    },
    login: async (request: LoginRequest) => {
        try {
            set(() => ({
                loginLoading: true,
            }));
            const response = await sendLogin(request);
            if (response?.token) {
                storeToken(response.token);
            }
            set(() => ({
                loginLoading: false,
                isAuth: Boolean(response?.token),
            }));
        } catch (error) {
            set(() => ({
                loginLoading: false,
                isAuth: false,
            }));
            toast({
                variant: "destructive",
                title: "Неверный email или пароль",
            });
        }
    },
    register: async (request: SignupRequest) => {
        try {
            set(() => ({
                loading: true,
            }));
            await registerUser(request);
            window.localStorage.setItem(CACHED_EMAIL, request.email);
            set(() => ({
                loading: false,
            }));
        } catch (error) {
            console.error(error);
        }
    },
    resetPassword: async (request: ResetPasswordRequest) => {
        try {
            set(() => ({
                resetLoading: true,
            }));
            await resetPassword({
                password: request.password,
                email: window.localStorage.getItem(CACHED_EMAIL),
            });

            set(() => ({
                resetLoading: false,
            }));
        } catch (error) {
            set(() => ({
                resetLoading: false,
            }));
            console.error(error);
        }
    },
    logout: async () => {
        return await logout();
    },
}));
