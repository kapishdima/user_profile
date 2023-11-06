import React from "react";

import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "../errors";

export const withErrors = (Component: React.FC<React.PropsWithChildren<any>>) => () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Component />
        </ErrorBoundary>
    );
};
