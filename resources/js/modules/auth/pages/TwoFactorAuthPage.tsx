import React from "react";
import { DashboardLayout } from "@/components/ui/layout";
import { TwoFactorAuth } from "../ui/TwoFactorAuth";

export const TwoFactorAuthPage: React.FC = () => {
    return (
        <DashboardLayout>
            <TwoFactorAuth />
        </DashboardLayout>
    );
};
