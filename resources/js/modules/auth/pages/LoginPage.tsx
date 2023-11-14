import React from "react";
import { AuthLayout } from "@/components/ui/layout";

import { LoginForm } from "../ui/LoginForm";

export const LoginPage: React.FC = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};
