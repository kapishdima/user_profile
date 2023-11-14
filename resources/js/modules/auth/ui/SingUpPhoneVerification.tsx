import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

import { AppRoutes } from "@/app/config/routes";
import { Button } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { TextInput } from "@/components/ui/fields";

import { phoneVerificationSchema } from "../validation/schema";
import { usePhoneVerificationCode } from "../store/phone-verification.store";

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

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-center">
                Создать аккаунт
            </Typography.Heading3>
            <Typography.Small classes="text-center mb-6">
                Уже есть аккаунт?{" "}
                <Button variant="link" className="p-0" asChild>
                    <Link to={AppRoutes.LOGIN}>Войти</Link>
                </Button>
            </Typography.Small>
            <Form
                handleSubmit={sended ? verifyCode : sendCode}
                defaultValues={defaultValues}
                schema={phoneVerificationSchema}
            >
                <TextInput
                    name="phone"
                    label="Номер телефона"
                    placeholder="+38098123123"
                    description="На этот номер телефона будет отправлен код с подтвержением"
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
                    <Button
                        className="w-full"
                        type="submit"
                        loading={sendingLoading}
                    >
                        Отправить код
                    </Button>
                ) : (
                    <Button
                        className="w-full"
                        disabled={!verified}
                        type="button"
                        onClick={onVerifiedSuccess}
                    >
                        Начать регистрацию
                    </Button>
                )}
            </Form>
        </div>
    );
};
