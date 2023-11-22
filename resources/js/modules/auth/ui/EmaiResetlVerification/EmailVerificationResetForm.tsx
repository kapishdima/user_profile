import React from "react";

import { Button, SubmitButton } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";

import {
    emailVerificationSchema,
    codeVerificationSchema,
} from "../../validation/schema";
import { EmailVerification } from "./EmailVerification";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/app/config/routes";
import { useEmailVerificationCode } from "../../store/email-verification.store";

export const EmailVerificationResetForm: React.FC = () => {
    const navigate = useNavigate();

    const sended = useEmailVerificationCode((state) => state.sended);

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

                <SubmitButton
                    type="button"
                    onClick={() => navigate(AppRoutes.RESET_PASSWORD)}
                >
                    Продолжить
                </SubmitButton>
            </Form>
        </div>
    );
};
