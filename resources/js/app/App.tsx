import React from "react";

import { AppRouterProvider } from "app/router";
import { HttpProvider } from "app/http";

import { BrowserRouter } from "react-router-dom";

export const App: React.FC = () => {
    return (
        <>
            <HttpProvider>
                <BrowserRouter>
                    <AppRouterProvider />
                </BrowserRouter>
            </HttpProvider>
        </>
    );
};
