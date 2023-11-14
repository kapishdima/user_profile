import React from "react";
import { DashboardLayout } from "@/components/ui/layout";
import { ProfileDocumentsForm } from "../ui/ProfileDocuments/ProfileDocumentsForm";

export const ProfileDocumentsPage: React.FC = () => {
    return (
        <DashboardLayout>
            <ProfileDocumentsForm />
        </DashboardLayout>
    );
};
