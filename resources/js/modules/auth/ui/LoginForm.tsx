import React from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "@/app/config/routes";
import { Button } from "@/components/ui/button/index";
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
            <Typography.Small classes="text-center mb-6">
                Нет аккаунта?{" "}
                <Button variant="link" className="p-0" asChild>
                    <Link to={AppRoutes.PHONE_VERIFICATION}>
                        Создать аккаунт
                    </Link>
                </Button>
            </Typography.Small>
            <Form
                handleSubmit={login}
                defaultValues={defaultValues}
                schema={loginSchema}
            >
                <TextInput
                    name="email"
                    label="Email"
                    placeholder="example@example.com"
                />
                <TextInput name="password" label="Пароль" type="password" />
                <div className="flex items-center justify-between">
                    <CheckboxField name="remember" label="Запомнить меня" />
                    <Link to={AppRoutes.VERIFY_RESET_CODE}>
                        <Button variant="link">Забыли пароль? </Button>
                    </Link>
                </div>
                <Button className="w-full" loading={loading} type="submit">
                    Войти
                </Button>
            </Form>
        </div>
    );
};
