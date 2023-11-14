import React from "react";
import { AuthLayout } from "@/components/ui/layout";
import { EmailVerificationForm } from "../ui/EmailVarificationForm";

export const EmailVerificationPage: React.FC = () => {
    return (
        <AuthLayout>
            <EmailVerificationForm />
        </AuthLayout>
    );
};
