import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { TextInput } from "@/components/ui/fields";
import { useEmailVerificationCode } from "@/modules/auth";

export const EmailVerification: React.FC = () => {
    const form = useFormContext();

    const sended = useEmailVerificationCode((state) => state.sended);
    const sendingLoading = useEmailVerificationCode(
        (state) => state.sendingLoading
    );
    const verificationLoading = useEmailVerificationCode(
        (state) => state.verificationLoading
    );
    const verified = useEmailVerificationCode((state) => state.verified);
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
                    type: "button",
                    onClick: onSendCode,
                    loading: sendingLoading,
                }}
            />
            {sended && !verified && (
                <TextInput
                    name="code"
                    label="Код подтверждения"
                    withButton={!verified}
                    buttonProps={{
                        children: "Подтвердить",
                        type: "button",
                        onClick: onVerifyEmail,
                        loading: verificationLoading,
                    }}
                />
            )}
        </>
    );
};
