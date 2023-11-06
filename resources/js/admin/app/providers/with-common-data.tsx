import React from "react";
import { AuthStatusTypes, useAuthStore } from "modules/auth";
import { LocaleDomainEntity } from "modules/locales";

import { useCommonData } from "../hooks";
import { Loading } from "../../shared/ui";
import { useQuery } from "react-query";
import { observer } from "mobx-react-lite";

export type CommonData = {
    locales: LocaleDomainEntity[];
    generalLocale: LocaleDomainEntity;
};

const defaultCommonDataContext: CommonData = {
    locales: [],
    generalLocale: null,
};

export const CommonDataContext = React.createContext<CommonData>(
    defaultCommonDataContext
);

export const withCommonData = (
    Component: React.FC<React.PropsWithChildren<any>>
) =>
    observer(() => {
        const authStore = useAuthStore();
        const { prepareCommonData } = useCommonData();

        const { data: commonData, isFetching } = useQuery(
            ["common-data", authStore.authorizationStatus],
            prepareCommonData,
            {
                enabled:
                    authStore.authorizationStatus ===
                    AuthStatusTypes.AUTHORIZED,
            }
        );

        if (isFetching) {
            return (
                <Loading
                    minHeight="100vh"
                    minWidth="100vw"
                    title="Готуємо дані..."
                    forwardFront
                />
            );
        }

        return (
            <CommonDataContext.Provider
                value={commonData || defaultCommonDataContext}
            >
                <Component />
            </CommonDataContext.Provider>
        );
    });
