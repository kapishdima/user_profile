import { ApiRoutes, client, JsonResponse } from "app/http";
import { Storage } from "app/constants";
import { LoginRequest, LoginResponse } from "../model/login";
import { SignupRequest, SignupResponse } from "../model/sing-up";
import { VerificationPhoneCode } from "../model/phone-verification";
import {
    SendEmailCodeRequest,
    VerificationEmailCode,
} from "../model/email-verification";
import { ResetPasswordRequest } from "../model/reset-password";

export const login = async (
    request: LoginRequest
): Promise<LoginResponse | null> => {
    const { data: response } = await client.post<LoginResponse>(
        ApiRoutes.LOGIN,
        request
    );

    return response;
};

export const logout = async () => {
    return await client.post(ApiRoutes.LOGOUT);
};

export const checkAuth = async () => {
    try {
        const { data } = await client.get<JsonResponse>(ApiRoutes.GET_ME);

        return Boolean(data);
    } catch (error) {
        return false;
    }
};

export const registerUser = async (request: SignupRequest) => {
    try {
        const { data } = await client.post<SignupResponse>(
            ApiRoutes.REGISTER,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};
export const resetPassword = async (request: ResetPasswordRequest) => {
    try {
        const { data } = await client.post<JsonResponse>(
            ApiRoutes.RESET_PASSWORD,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};

export const sendVerificationPhoneCode = async (
    request: VerificationPhoneCode
) => {
    try {
        const { data } = await client.post<JsonResponse>(
            ApiRoutes.SEND_PHONE_CODE,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};

export const verifyPhoneCode = async (request: VerificationPhoneCode) => {
    try {
        const { data } = await client.post<JsonResponse>(
            ApiRoutes.VERIFY_PHONE_CODE,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};

export const sendVerificationEmailCode = async (
    request: SendEmailCodeRequest
) => {
    try {
        const { data } = await client.post<JsonResponse>(
            ApiRoutes.SEND_EMAIL_CODE,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};

export const verifyEmailCode = async (request: VerificationEmailCode) => {
    try {
        const { data } = await client.post<JsonResponse>(
            ApiRoutes.VERIFY_EMAIL_CODE,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};

export const verifyResetCode = async (request: VerificationEmailCode) => {
    try {
        const { data } = await client.post<JsonResponse>(
            ApiRoutes.VERIFY_RESET_CODE,
            request
        );

        return data.success;
    } catch (error) {
        return false;
    }
};

export const storeToken = (token: string) => {
    window.localStorage.setItem(Storage.AUTH_TOKEN, token);
};

export const getToken = () => {
    return window.localStorage.getItem(Storage.AUTH_TOKEN);
};
