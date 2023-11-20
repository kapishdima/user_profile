import React from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "@/app/config/routes";
import { Button } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { CheckboxField, TextInput } from "@/components/ui/fields";

import { signupSchame } from "../validation/schema";
import { useAuthStore } from "../store/auth.store";

const defaultValues: OnSubmitValues<typeof signupSchame> = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
};

export const SignUpForm: React.FC = () => {
    const loading = useAuthStore((state) => state.loading);
    const register = useAuthStore((state) => state.register);
    const navigate = useNavigate();

    const onSubmit = async (values: OnSubmitValues<typeof signupSchame>) => {
        await register(values);
        navigate(AppRoutes.EMAIL_VARIFICATION);
    };

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
                handleSubmit={onSubmit}
                defaultValues={defaultValues}
                schema={signupSchame}
            >
                <TextInput name="first_name" label="Имя" placeholder="Иван" />
                <TextInput
                    name="last_name"
                    label="Фамилия"
                    placeholder="Иванович"
                />
                <TextInput
                    name="email"
                    label="Почта"
                    placeholder="example@example.com"
                />
                <TextInput name="password" label="Пароль" type="password" />
                <TextInput
                    name="passwordConfirmation"
                    label="Подтвердите пароль"
                />

                <CheckboxField
                    name="remember"
                    label="Своей регистрацией вы подтверждаете и автоматически принимаете Условия пользователького соглашения"
                />
                <Button className="w-full" type="submit" loading={loading}>
                    Создать аккаунт
                </Button>
                <Typography.Terms />
            </Form>
        </div>
    );
};
