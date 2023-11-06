import React from "react";

import { Tabs, SubmitButton } from "..";

import { TabInputs } from "./TabbedForm";

type TabbedFormViewProps = {
    tabs: string[];
    actions?: JSX.Element;
    header?: JSX.Element;
    inputs?: TabInputs;
    defaultValues?: any;
    isLoading?: boolean;
    withoutButton?: boolean;
};

export const TabbedFormView: React.FC<
    React.PropsWithChildren<TabbedFormViewProps>
> = ({ children, tabs, withoutButton, isLoading, header }) => {
    return (
        <>
            {header ? header : null}
            <Tabs tabs={tabs} appearance="primary">
                {children}
            </Tabs>
            {!withoutButton && (
                <SubmitButton isLoading={isLoading} text="Відправити" />
            )}
        </>
    );
};
