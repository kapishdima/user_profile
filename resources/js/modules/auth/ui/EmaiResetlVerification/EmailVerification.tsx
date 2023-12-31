import React, { useEffect } from "react";

import { TextInput } from "@/components/ui/fields";
import { useEmailVerificationCode } from "@/modules/auth";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ApiRoutes } from "@/app/http";
import { AppRoutes } from "@/app/config/routes";

export const EmailVerification: React.FC = () => {
    const form = useFormContext();
    const navigate = useNavigate();

    const sended = useEmailVerificationCode((state) => state.sended);
    const verified = useEmailVerificationCode((state) => state.verified);

    const sendingLoading = useEmailVerificationCode(
        (state) => state.sendingLoading
    );
    const verificationLoading = useEmailVerificationCode(
        (state) => state.verificationLoading
    );
    const sendCode = useEmailVerificationCode((state) => state.sendCode);
    const verifyCode = useEmailVerificationCode(
        (state) => state.verifyResetCode
    );

    const email = form.watch("email");
    const codeVerification = form.watch("code");

    const onSendCode = () => {
        sendCode({ email });
    };

    const onVerifyEmail = () => {
        verifyCode({ email, code: codeVerification });
    };

    useEffect(() => {
        if (verified) {
            navigate(AppRoutes.RESET_PASSWORD);
        }
    }, [verified]);

    return (
        <>
            <TextInput
                name="email"
                label="Электронная почта"
                placeholder="example@example.com"
                description={
                    sended
                        ? "На этот email будет отправлен код с подтвержением"
                        : ""
                }
                withButton={!verified}
                buttonProps={{
                    children: "Отправить",
                    type: "submit",
                    loading: sendingLoading,
                    onClick: onSendCode,
                }}
            />
            {sended && !verified && (
                <TextInput
                    name="code"
                    type="number"
                    label="Код подтверждения"
                    withButton={!verified}
                    buttonProps={{
                        children: "Подтвердить",
                        type: "submit",
                        loading: verificationLoading,
                        onClick: onVerifyEmail,
                    }}
                />
            )}
        </>
    );
};
