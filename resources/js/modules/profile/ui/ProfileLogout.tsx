import React from "react";
import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui/button/index";
import { useAuthStore } from "@/modules/auth";

export const ProfileLogout: React.FC = () => {
    const logout = useAuthStore((state) => state.logout);
    const checkAuth = useAuthStore((state) => state.checkAuth);

    const onClick = async () => {
        await logout();
        await checkAuth();
    };

    return (
        <Button
            onClick={onClick}
            variant="link"
            className="px-0 py-0 h-full leading-normal gap-x-2"
        >
            <LogOutIcon className="w-4 h-4" />
            Выйти
        </Button>
    );
};
