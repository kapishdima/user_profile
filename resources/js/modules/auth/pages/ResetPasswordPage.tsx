import React from "react";
import { AuthLayout } from "@/components/ui/layout";

import { ResetPasswordForm } from "../ui/ResetPassword";

export const ResetPasswordPage: React.FC = () => {
    return (
        <AuthLayout>
            <ResetPasswordForm />
        </AuthLayout>
    );
};
