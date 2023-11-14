import React from "react";

import { Button } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { TextInput } from "@/components/ui/fields";

import { emailVerificationSchema } from "../validation/schema";
import { useEmailVerificationCode } from "../store/email-verification.store";
import { CACHED_EMAIL, CACHED_PHONE } from "@/app/constants/storage";

export const EmailVerificationForm: React.FC = () => {
    const verificationLoading = useEmailVerificationCode(
        (state) => state.verificationLoading
    );
    const verifyCode = useEmailVerificationCode((state) => state.verifyCode);

    const defaultValues: OnSubmitValues<typeof emailVerificationSchema> = {
        phone: window.localStorage.getItem(CACHED_PHONE),
        email: window.localStorage.getItem(CACHED_EMAIL),
        code: "",
    };

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-left">
                Подтвержение электронной почты
            </Typography.Heading3>
            <Typography.Muted classes="text-left mb-6">
                Пожалуйста введите 5 цифр, которые отправлены на почту
                example@example.com
            </Typography.Muted>
            <Form
                handleSubmit={verifyCode}
                defaultValues={defaultValues}
                schema={emailVerificationSchema}
            >
                <TextInput
                    name="code"
                    label="Код подтверждения"
                    description="Не пришел код? Отправить заново"
                />

                <Button loading={verificationLoading}>Отправить</Button>
            </Form>
        </div>
    );
};
