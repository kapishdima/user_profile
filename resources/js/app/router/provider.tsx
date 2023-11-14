import React, { useEffect } from "react";

import { useAuthStore } from "modules/auth";

import { Center } from "@/components/ui/layout/Center";
import { Spinner } from "@/components/ui/spinner";

import { AuthRouter, RootRouter } from "./router";

export const AppRouterProvider: React.FC = () => {
    const checkAuth = useAuthStore((state) => state.checkAuth);
    const isAuth = useAuthStore((state) => state.isAuth);
    const loading = useAuthStore((state) => state.loading);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (loading) {
        return (
            <Center fullScreen>
                <Spinner className="w-10 h-10" />
            </Center>
        );
    }

    console.log(isAuth);
    if (!isAuth) {
        return <AuthRouter />;
    }

    return <RootRouter />;
};
