import { AppRoutes } from "@/app/config/routes";
import { AuthLayout } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import React from "react";

export const ResetPasswordSuccess: React.FC = () => {
    return (
        <AuthLayout>
            <div className="flex flex-col flex-1 gap-y-2 items-center">
                <Typography.Heading3 classes="text-left">
                    Пароль сброшен
                </Typography.Heading3>
                <Typography.Small classes="text-center mb-6 text-slate-400">
                    Вы успешно сбросили свой пароль!
                </Typography.Small>

                <div className="">
                    <Typography.Small classes="text-center mb-6 text-slate-400">
                        Теперь вы можете{" "}
                        <Typography.Link
                            to={AppRoutes.LOGIN}
                            className="text-black font-medium"
                        >
                            авторизоваться
                        </Typography.Link>
                    </Typography.Small>
                </div>
            </div>
        </AuthLayout>
    );
};
