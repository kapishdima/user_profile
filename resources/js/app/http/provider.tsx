import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const HttpProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
