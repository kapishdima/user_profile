import React from "react";
import { Navigate } from "react-router-dom";

import {
    EmailVerificationPage,
    EmailVerificationResetPage,
    LoginPage,
    ResetPasswordPage,
    ResetPasswordSuccess,
    SignUpPage,
    SignUpPhoneVerificationPage,
    TwoFactorAuthPage,
} from "modules/auth";
import {
    PersonalInfoPage,
    ProfileActionsPage,
    ProfileDocumentsPage,
    ProfileEmailPage,
    ProfilePhonePage,
} from "@/modules/profile";

export type Route = {
    path: string;
    element: React.FC;
    title?: string;
    icon?: JSX.Element;
};

export enum AppRoutes {
    LOGIN = "/login",
    REGISTRATION = "/sign-up",
    PHONE_VERIFICATION = "/sign-up/verification",
    SIGNUP = "/sign-up",
    FORGOT_PASSWORD = "/forgot",
    EMAIL_VARIFICATION = "/verification/email",
    PROFILE_SETTINGS = "/profile/settings",
    PROFILE_INFO_SETTINGS = "/profile/settings/personal",
    PROFILE_EMAIL_SETTINGS = "/profile/settings/email",
    PROFILE_PHONE_SETTINGS = "/profile/settings/phone",
    PROFILE_TWO_FACTOR_SETTINGS = "/profile/settings/two-factor",
    PROFILE_ACTIONS = "/profile/settings/actions",
    PROFILE_DOCUMENTS = "/profile/settings/documents",
    RESET_PASSWORD = "/profile/reset-password",
    RESET_PASSWORD_SUCCESS = "/profile/reset-password/success",
    VERIFY_RESET_CODE = "/profile/verify-reset-password",
}

export const rootRoutes: Route[] = [
    {
        path: AppRoutes.PROFILE_SETTINGS,
        element: () => <PersonalInfoPage />,
    },
    {
        path: AppRoutes.PROFILE_INFO_SETTINGS,
        element: () => <PersonalInfoPage />,
    },
    {
        path: AppRoutes.PROFILE_EMAIL_SETTINGS,
        element: () => <ProfileEmailPage />,
    },
    {
        path: AppRoutes.PROFILE_PHONE_SETTINGS,
        element: () => <ProfilePhonePage />,
    },
    {
        path: AppRoutes.PROFILE_TWO_FACTOR_SETTINGS,
        element: () => <TwoFactorAuthPage />,
    },
    {
        path: AppRoutes.PROFILE_ACTIONS,
        element: () => <ProfileActionsPage />,
    },
    {
        path: AppRoutes.PROFILE_DOCUMENTS,
        element: () => <ProfileDocumentsPage />,
    },
    {
        path: "*",
        element: () => <Navigate to={AppRoutes.PROFILE_SETTINGS} replace />,
    },
];

export const authRoutes: Route[] = [
    {
        path: AppRoutes.LOGIN,
        element: () => <LoginPage />,
    },
    {
        path: AppRoutes.PHONE_VERIFICATION,
        element: () => <SignUpPhoneVerificationPage />,
    },
    {
        path: AppRoutes.SIGNUP,
        element: () => <SignUpPage />,
    },
    {
        path: AppRoutes.EMAIL_VARIFICATION,
        element: () => <EmailVerificationPage />,
    },
    {
        path: AppRoutes.RESET_PASSWORD,
        element: () => <ResetPasswordPage />,
    },
    {
        path: AppRoutes.VERIFY_RESET_CODE,
        element: () => <EmailVerificationResetPage />,
    },
    {
        path: AppRoutes.RESET_PASSWORD_SUCCESS,
        element: () => <ResetPasswordSuccess />,
    },

    { path: "*", element: () => <Navigate to={AppRoutes.LOGIN} replace /> },
];
