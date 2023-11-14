import React from "react";
import { Route, Routes } from "react-router-dom";

import { rootRoutes, authRoutes } from "app/config/routes";

export const RootRouter: React.FC = () => {
    return (
        <Routes>
            {rootRoutes.map((route) => (
                <Route path={route.path} element={<route.element />} />
            ))}
        </Routes>
    );
};
export const AuthRouter: React.FC = () => {
    return (
        <Routes>
            {authRoutes.map((route) => (
                <Route path={route.path} element={<route.element />} />
            ))}
        </Routes>
    );
};
