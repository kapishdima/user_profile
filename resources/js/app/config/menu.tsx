import React from "react";
import { AppRoutes } from "./routes";
import { User2Icon } from "lucide-react";

type MenuItem = {
    title: string;
    icon?: JSX.Element;
    path: AppRoutes;
    children?: MenuItem[];
};

export const menu: MenuItem[] = [
    {
        title: "Профиль",
        icon: <User2Icon className="w-4 h-4" />,
        path: AppRoutes.PROFILE_SETTINGS,
        children: [
            {
                title: "Личная информация",
                path: AppRoutes.PROFILE_INFO_SETTINGS,
            },
            {
                title: "Электронная почта",
                path: AppRoutes.PROFILE_EMAIL_SETTINGS,
            },
            {
                title: "Номер телефона",
                path: AppRoutes.PROFILE_PHONE_SETTINGS,
            },
            {
                title: "Двухфакторная авторизация",
                path: AppRoutes.PROFILE_TWO_FACTOR_SETTINGS,
            },
            {
                title: "Документы",
                path: AppRoutes.PROFILE_DOCUMENTS,
            },
            {
                title: "Действия с аккаунтом",
                path: AppRoutes.PROFILE_ACTIONS,
            },
        ],
    },
];
