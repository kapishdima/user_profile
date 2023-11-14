import React from "react";

import { Button } from "@/components/ui/button/index";
import { FormSection } from "@/components/ui/layout";

import { LogOutIcon } from "lucide-react";
import { useAuthStore } from "@/modules/auth";
import { ProfileRemoveButton } from "./ProfileRemove/ProfileRemoveButton";

export const ProfileActionsForm: React.FC = () => {
    const logout = useAuthStore((state) => state.logout);
    const checkAuth = useAuthStore((state) => state.checkAuth);

    const onLogoutClick = async () => {
        await logout();
        await checkAuth();
    };

    return (
        <div className="">
            <FormSection
                title="Удалить аккаунт"
                subtitle="Как только вы удалите свою учетную запись, пути назад уже не будет"
            />
            <ProfileRemoveButton />
            <FormSection
                title="Действия с аккаунтом"
                subtitle="Управляйте вашим аккаунтом с помощью кнопок ниже"
            />
            <div className="flex lg:flex-row flex-col items-center lg:gap-x-4 gap-y-4">
                <Button className="lg:w-auto w-full">
                    Временно отключить аккаунт
                </Button>
                <Button onClick={onLogoutClick} className="lg:w-auto w-full">
                    <LogOutIcon className="w-4 h-4" />
                    Выйти
                </Button>
            </div>
        </div>
    );
};
