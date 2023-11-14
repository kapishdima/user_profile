import React from "react";
import { AuthLayout } from "@/components/ui/layout";
import { SingUpPhoneVerificationForm } from "../ui/SingUpPhoneVerification";

export const SignUpPhoneVerificationPage: React.FC = () => {
    return (
        <AuthLayout>
            <SingUpPhoneVerificationForm />
        </AuthLayout>
    );
};
