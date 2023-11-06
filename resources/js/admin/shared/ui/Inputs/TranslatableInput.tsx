import React from "react";

import { useUILocales } from "../../hooks";
import { Tabs, TabPane } from "..";

type TranslatableInputProps = {
    children: (locale: string) => JSX.Element;
};

export const COMPONENT_TYPE = "Translatable";

export const TranslatableInput: React.FC<TranslatableInputProps> = ({
    children,
}) => {
    const locales = useUILocales();
    const localesLabels = locales.map((locale) => locale.label);

    return (
        <Tabs
            style={{ marginTop: 16, marginBottom: 4 }}
            tabs={localesLabels}
            appearance="secondary"
        >
            {locales.map((locale, index) => {
                return (
                    <TabPane tab={locale.label} index={index}>
                        {children(locale.id)}
                    </TabPane>
                );
            })}
        </Tabs>
    );
};
