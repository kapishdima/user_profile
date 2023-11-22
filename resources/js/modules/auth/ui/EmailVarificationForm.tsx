import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, SubmitButton } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { TextInput } from "@/components/ui/fields";

import {
    CACHED_EMAIL,
    CACHED_PHONE,
    PHONE_RESEND_TIERS,
} from "@/app/constants/storage";
import { AppRoutes } from "@/app/config/routes";

import {
    codeVerificationSchema,
    emailVerificationSchema,
} from "../validation/schema";
import { useEmailVerificationCode } from "../store/email-verification.store";
import { EmailResendCode } from "./EmailResendCode";

export const EmailVerificationForm: React.FC = () => {
    const navigate = useNavigate();
    const verificationLoading = useEmailVerificationCode(
        (state) => state.verificationLoading
    );
    const verifyCode = useEmailVerificationCode((state) => state.verifyCode);
    const verified = useEmailVerificationCode((state) => state.verified);

    const onSubmit = async (
        values: OnSubmitValues<typeof emailVerificationSchema>
    ) => {
        try {
            await verifyCode({
                phone: window.localStorage.getItem(CACHED_PHONE),
                email: window.localStorage.getItem(CACHED_EMAIL),
                code: values.code,
            });
            if (verified) {
                navigate(AppRoutes.LOGIN);
            }
        } catch (error) {}
    };

    const defaultValues: OnSubmitValues<typeof emailVerificationSchema> = {
        code: "",
    };

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-left">
                Подтвержение электронной почты
            </Typography.Heading3>
            <Typography.Muted classes="text-left mb-6">
                Пожалуйста введите 4 цифр, которые отправлены на почту
            </Typography.Muted>
            <Form
                handleSubmit={onSubmit}
                defaultValues={defaultValues}
                schema={codeVerificationSchema}
            >
                <TextInput
                    type="number"
                    name="code"
                    label="Код подтверждения"
                    endContent={<EmailResendCode email={defaultValues.email} />}
                />

                <SubmitButton loading={verificationLoading}>
                    Отправить
                </SubmitButton>
            </Form>
        </div>
    );
};
