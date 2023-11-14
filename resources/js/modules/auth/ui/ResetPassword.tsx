import React from "react";

import { AppRoutes } from "@/app/config/routes";
import { Button } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { TextInput } from "@/components/ui/fields";

import { resetPasswordSchema } from "../validation/schema";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const defaultValues: OnSubmitValues<typeof resetPasswordSchema> = {
    password: "",
    passwordConfirmation: "",
};

export const ResetPasswordForm: React.FC = () => {
    const resetPassword = useAuthStore((state) => state.resetPassword);
    const loading = useAuthStore((state) => state.resetLoading);
    const navigate = useNavigate();

    const onSubmit = async (
        values: OnSubmitValues<typeof resetPasswordSchema>
    ) => {
        await resetPassword(values);
        navigate(AppRoutes.LOGIN);
    };

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-center">
                Войти
            </Typography.Heading3>
            <Typography.Small classes="text-center mb-6">
                Новый пароль
            </Typography.Small>
            <Form
                handleSubmit={onSubmit}
                defaultValues={defaultValues}
                schema={resetPasswordSchema}
            >
                <TextInput name="password" label="Пароль" type="password" />
                <TextInput
                    name="passwordConfirmation"
                    label="Подтвердите пароль"
                    type="password"
                />
                <Button className="w-full" loading={loading} type="submit">
                    Сохранить
                </Button>
            </Form>
        </div>
    );
};
