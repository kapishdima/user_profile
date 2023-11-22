import React from "react";

import { useNavigate } from "react-router-dom";

import { SubmitButton } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { AppRoutes } from "@/app/config/routes";

import {
    emailVerificationSchema,
    codeVerificationSchema,
} from "../../validation/schema";
import { EmailVerification } from "./EmailVerification";
import { useEmailVerificationCode } from "../../store/email-verification.store";

export const EmailVerificationResetForm: React.FC = () => {
    const defaultValues: OnSubmitValues<typeof emailVerificationSchema> = {
        email: "",
        code: "",
    };

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-left">
                Подтвержение электронной почты
            </Typography.Heading3>
            <Form
                handleSubmit={() => {}}
                defaultValues={defaultValues}
                schema={codeVerificationSchema}
            >
                <EmailVerification />
            </Form>
        </div>
    );
};
