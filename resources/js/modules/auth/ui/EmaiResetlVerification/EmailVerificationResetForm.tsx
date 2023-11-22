import React from "react";

import { Typography } from "@/components/ui/typography";
import { Form, OnSubmitValues } from "@/components/ui/form/index";

import {
    emailVerificationSchema,
    codeVerificationSchema,
} from "../../validation/schema";
import { EmailVerification } from "./EmailVerification";

export const EmailVerificationResetForm: React.FC = () => {
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
                handleSubmit={() => {
                    console.log();
                }}
                defaultValues={defaultValues}
                schema={codeVerificationSchema}
            >
                <EmailVerification />
            </Form>
        </div>
    );
};
