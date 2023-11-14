import React from "react";

import { TextInput } from "@/components/ui/fields";
import { usePhoneVerificationCode } from "@/modules/auth";
import { useFormContext } from "react-hook-form";

export const ProfilePhoneVerification: React.FC = () => {
    const form = useFormContext();

    const sended = usePhoneVerificationCode((state) => state.sended);
    const sendingLoading = usePhoneVerificationCode(
        (state) => state.sendingLoading
    );
    const verificationLoading = usePhoneVerificationCode(
        (state) => state.verificationLoading
    );
    const verified = usePhoneVerificationCode((state) => state.verified);
    const sendCode = usePhoneVerificationCode((state) => state.sendCode);
    const verifyCode = usePhoneVerificationCode((state) => state.verifyCode);

    const isPhoneDirty = form.getFieldState("phone").isDirty;
    const phone = form.watch("phone");
    const codeVerification = form.watch("code");

    const onSendCode = () => {
        sendCode({ phone });
    };

    const onVerifyPhone = () => {
        verifyCode({ phone, code: codeVerification });
    };

    return (
        <>
            <TextInput
                name="phone"
                label="Номер телефона"
                placeholder="+38098123123"
                description={
                    sended
                        ? "На этот номер телефона будет отправлен код с подтвержением"
                        : ""
                }
                withButton={isPhoneDirty && !verified}
                buttonProps={{
                    children: "Подтвердить",
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
                        children: "Отправить",
                        type: "button",
                        onClick: onVerifyPhone,
                        loading: verificationLoading,
                    }}
                />
            )}
        </>
    );
};
