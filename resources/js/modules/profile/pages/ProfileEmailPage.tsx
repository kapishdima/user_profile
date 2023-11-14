import React from "react";

import { DashboardLayout } from "@/components/ui/layout";
import { ProfileEmailForm } from "../ui/PhoneEmail/ProfileEmailForm";

export const ProfileEmailPage: React.FC = () => {
    return (
        <DashboardLayout>
            <ProfileEmailForm />
        </DashboardLayout>
    );
};
