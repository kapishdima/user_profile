import React, { useEffect } from "react";
import { RootLayout } from "./RootLayout";
import { Header } from "./Header";
import { AppNavigation } from "./AppNavigation";
import { useProfileStore } from "@/modules/profile";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const fetchProfile = useProfileStore((state) => state.fetchProfile);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return (
        <RootLayout>
            <div className="w-full bg-white flex flex-col rounded-xl">
                <Header />
                <div className="flex lg:flex-row flex-col">
                    <AppNavigation />
                    <div className="lg:pl-14 lg:pr-4 px-4 w-full lg:pb-0 pb-10">
                        {children}
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};
