import React from "react";

import { DashboardLayout } from "@/components/ui/layout";
import { ProfilePhoneForm } from "../ui/ProfilePhone/ProfilePhoneForm";

export const ProfilePhonePage: React.FC = () => {
    return (
        <DashboardLayout>
            <ProfilePhoneForm />
        </DashboardLayout>
    );
};
