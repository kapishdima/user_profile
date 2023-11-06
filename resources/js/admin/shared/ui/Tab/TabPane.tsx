import React, { ReactElement, ReactNode, useEffect } from "react";

import { Pane } from "evergreen-ui";

import { get } from "react-hook-form";

import { useControl, useFindChild, useTab } from "../../hooks";
import { Tab } from "./types";
import { CommonDataService } from "modules/common-data";
import { COMPONENT_TYPE } from "../Inputs/TranslatableInput";

export type TabPaneProps = {
    tab: Tab;
    index: number;
};

export const TabPane: React.FC<React.PropsWithChildren<TabPaneProps>> = ({
    tab,
    index,
    children,
}) => {
    const { selectedIndex, onTabWithError } = useTab();

    const { locales } = CommonDataService.getCommonData();
    const requiredLocales = locales.map((locale) => locale.id);

    const isTabHidden = () => index !== selectedIndex;
    const { deepFind } = useFindChild();
    const { state } = useControl();

    const checkIsTabInvalid = () => {
        const invalidInputs = deepFind(children, (child: ReactElement) => {
            if (child.type?.toString().includes(COMPONENT_TYPE)) {
                const invalidTranslation = requiredLocales.find((locale) => {
                    return get(
                        state?.errors,
                        `translations.${locale}.${
                            (child as ReactElement).props.name
                        }`
                    );
                });

                return Boolean(invalidTranslation);
            }

            return get(state?.errors, (child as ReactElement).props?.name);
        });

        onTabWithError({ name: tab, isInvalid: Boolean(invalidInputs) });
    };

    useEffect(() => {
        if (!Object.keys(state?.errors).length) {
            return;
        }
        checkIsTabInvalid();
    }, [state?.errors]);
    return (
        <Pane
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
            aria-hidden={isTabHidden()}
            display={isTabHidden() ? "none" : "block"}
        >
            <>{children}</>
        </Pane>
    );
};
