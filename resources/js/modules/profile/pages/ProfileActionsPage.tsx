import React from "react";

import { DashboardLayout } from "@/components/ui/layout";
import { ProfileActionsForm } from "../ui/ProfileActionsForm";

export const ProfileActionsPage: React.FC = () => {
    return (
        <DashboardLayout>
            <ProfileActionsForm />
        </DashboardLayout>
    );
};
