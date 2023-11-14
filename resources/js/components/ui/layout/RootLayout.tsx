import React from "react";
import { Toaster } from "@/components/ui/toaster";

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex lg:py-24 py-10 lg:px-40 px-10 bg-gray-100 w-screen min-h-screen">
            <Toaster />
            {children}
        </div>
    );
};
