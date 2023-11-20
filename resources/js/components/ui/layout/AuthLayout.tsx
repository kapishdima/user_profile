import React from "react";
import { RootLayout } from "./RootLayout";
import { Typography } from "../typography";

export const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <RootLayout>
            <div className="md:flex-row flex-col flex items-center rounded-xl overflow-hidden w-full ">
                <div className="lg:flex hidden w-full h-full lg:w-2/4 relative flex-col p-10 text-white dark:border-r bg-black">
                    <div className="w-full h-full lg:w-2/4 relative flex text-white dark:border-r bg-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                        </svg>
                        Acme Inc
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-2/4 h-full bg-white">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        {children}
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};
