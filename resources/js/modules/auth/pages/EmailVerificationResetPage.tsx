import React from "react";
import { AuthLayout } from "@/components/ui/layout";
import { EmailVerificationResetForm } from "../ui/EmaiResetlVerification/EmailVerificationResetForm";

export const EmailVerificationResetPage: React.FC = () => {
    return (
        <AuthLayout>
            <EmailVerificationResetForm />
        </AuthLayout>
    );
};
