import React from "react";

import { AppRoutes } from "@/app/config/routes";
import { Button, SubmitButton } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { CheckboxField, TextInput } from "@/components/ui/fields";

import { loginSchema } from "../validation/schema";
import { useAuthStore } from "../store/auth.store";

const defaultValues: OnSubmitValues<typeof loginSchema> = {
    email: "",
    password: "",
};

export const LoginForm: React.FC = () => {
    const login = useAuthStore((state) => state.login);
    const loading = useAuthStore((state) => state.loginLoading);

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-center">
                Войти
            </Typography.Heading3>
            <Typography.Small classes="text-center mb-6 text-slate-400">
                Нет аккаунта?{" "}
                <Typography.Link
                    to={AppRoutes.PHONE_VERIFICATION}
                    className="text-black font-medium"
                >
                    Создать аккаунт
                </Typography.Link>
            </Typography.Small>
            <Form
                handleSubmit={login}
                defaultValues={defaultValues}
                schema={loginSchema}
            >
                <TextInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="example@example.com"
                />
                <TextInput name="password" label="Пароль" type="password" />
                <div className="flex items-center justify-between">
                    <CheckboxField name="remember" label="Запомнить меня" />
                    <Typography.Link to={AppRoutes.VERIFY_RESET_CODE}>
                        <Typography.Link to={AppRoutes.VERIFY_RESET_CODE}>
                            Забыли пароль?
                        </Typography.Link>
                    </Typography.Link>
                </div>
                <SubmitButton
                    className="w-full"
                    loading={loading}
                    type="submit"
                >
                    Войти
                </SubmitButton>
                <Typography.Terms />
            </Form>
        </div>
    );
};
