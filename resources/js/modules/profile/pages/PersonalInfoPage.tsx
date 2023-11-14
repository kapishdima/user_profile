import { DashboardLayout } from "@/components/ui/layout";
import React from "react";
import { PersonalInfoForm } from "../ui/ProfileInfo/ProfilelInfoForm";

export const PersonalInfoPage: React.FC = () => {
    return (
        <DashboardLayout>
            <PersonalInfoForm />
        </DashboardLayout>
    );
};
