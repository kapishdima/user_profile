import React from "react";
import { RootLayout } from "./RootLayout";
import { Typography } from "../typography";

export const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <RootLayout>
            <div className="md:flex-row flex-col flex items-center rounded-xl overflow-hidden w-full ">
                <div className="lg:flex hidden w-full lg:w-2/4 h-full  items-center justify-center bg-black">
                    <Typography.Heading1 classes="text-white">
                        Logo
                    </Typography.Heading1>
                </div>
                <div className="flex w-full md:w-2/4 h-full  lg:p-20 py-4 px-8 items-center bg-white">
                    {children}
                </div>
            </div>
        </RootLayout>
    );
};
