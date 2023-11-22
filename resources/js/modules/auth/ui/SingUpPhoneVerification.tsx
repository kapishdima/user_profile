import React from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "@/app/config/routes";
import { SubmitButton } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { TextInput } from "@/components/ui/fields";

import { phoneVerificationSchema } from "../validation/schema";
import { usePhoneVerificationCode } from "../store/phone-verification.store";
import { PhoneResendCode } from "./PhoneResendCode";
import { PHONE_RESEND_TIERS } from "@/app/constants/storage";

const defaultValues: OnSubmitValues<typeof phoneVerificationSchema> = {
    phone: "",
    code: "",
};

export const SingUpPhoneVerificationForm: React.FC = () => {
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

    const navigate = useNavigate();

    const onVerifiedSuccess = () => {
        navigate(AppRoutes.SIGNUP);
    };

    console.log("!verified", !verified);
    console.log(JSON.parse(window.localStorage.getItem(PHONE_RESEND_TIERS)));
    console.log(
        "tiers",
        JSON.parse(window.localStorage.getItem(PHONE_RESEND_TIERS)) < 3
    );
    console.log(
        !verified ||
            JSON.parse(window.localStorage.getItem(PHONE_RESEND_TIERS)) < 3
    );

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-center">
                Создать аккаунт
            </Typography.Heading3>
            <Typography.Small classes="text-center mb-6 text-slate-400">
                Уже есть аккаунт?{" "}
                <Typography.Link
                    to={AppRoutes.LOGIN}
                    className="text-black font-medium"
                >
                    Войти
                </Typography.Link>
            </Typography.Small>
            <Form
                handleSubmit={sended ? verifyCode : sendCode}
                defaultValues={defaultValues}
                schema={phoneVerificationSchema}
            >
                <TextInput
                    name="phone"
                    // type="number"
                    label="Номер телефона"
                    placeholder="+38098123123"
                    description="На этот номер телефона будет отправлен код с подтвержением"
                    endContent={<PhoneResendCode />}
                />
                {sended && (
                    <TextInput
                        name="code"
                        label="Код подтверждения"
                        withButton={!verified}
                        buttonProps={{
                            children: "Отправить",
                            type: "submit",
                            loading: verificationLoading,
                        }}
                    />
                )}

                {!sended ? (
                    <SubmitButton
                        className="w-full"
                        type="submit"
                        loading={sendingLoading}
                    >
                        Отправить код
                    </SubmitButton>
                ) : (
                    <SubmitButton
                        className="w-full"
                        disabled={
                            JSON.parse(
                                window.localStorage.getItem(PHONE_RESEND_TIERS)
                            ) < 2
                                ? !verified
                                : false
                        }
                        type="button"
                        onClick={onVerifiedSuccess}
                    >
                        Начать регистрацию
                    </SubmitButton>
                )}
                <Typography.Terms />
            </Form>
        </div>
    );
};
