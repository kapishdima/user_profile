import { AuthLayout } from "@/components/ui/layout";
import React from "react";
import { SignUpForm } from "../ui/SignUpForm";

export const SignUpPage: React.FC = () => {
    return (
        <AuthLayout>
            <SignUpForm />
        </AuthLayout>
    );
};
