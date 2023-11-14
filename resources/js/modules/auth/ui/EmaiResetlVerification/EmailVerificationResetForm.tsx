import React from "react";

import { Button } from "@/components/ui/button/index";
import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";

import { emailVerificationSchema } from "../../validation/schema";
import { EmailVerification } from "./EmailVerification";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/app/config/routes";

export const EmailVerificationResetForm: React.FC = () => {
    const navigate = useNavigate();

    const defaultValues: OnSubmitValues<typeof emailVerificationSchema> = {
        email: "",
        code: "",
    };

    return (
        <div className="flex flex-col flex-1 gap-y-2">
            <Typography.Heading3 classes="text-left">
                Подтвержение электронной почты
            </Typography.Heading3>
            <Form
                handleSubmit={() => {}}
                defaultValues={defaultValues}
                schema={emailVerificationSchema}
            >
                <EmailVerification />

                <Button
                    type="button"
                    onClick={() => navigate(AppRoutes.RESET_PASSWORD)}
                >
                    Продолжить
                </Button>
            </Form>
        </div>
    );
};
