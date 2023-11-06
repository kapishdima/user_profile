import React from "react";

import { Heading, majorScale, Pane } from "evergreen-ui";
import { Loading, TabbedForm } from "shared/ui";

import { CommonDataService } from "modules/common-data";
import { SettingsResponseEntity } from "modules/settings";
import { createValidationSchema } from "app/validation";
import { MainInfo } from "./MainInfo";
import { OtherInfo } from "./OtherInfo";
import { ProjectsInfo } from "./ProjectsInfo";

const tabs = ["Основна інформація", "Проекти", "Html код"];

type SettingsFormProps = {
    onSubmit: (values: SettingsResponseEntity) => void;
    defaultValue?: SettingsResponseEntity;
    isLoading?: boolean;
};

export const SettingsForm: React.FC<SettingsFormProps> = ({
    onSubmit,
    defaultValue,
    isLoading,
}) => {
    const generalLocale = CommonDataService.getRequiredLocales();
    const schema = createValidationSchema(generalLocale, "settings");

    return (
        <TabbedForm
            isLoading={isLoading}
            onSubmit={onSubmit}
            defaultValues={defaultValue}
            tabs={tabs}
            validationSchema={schema}
            header={
                <Heading size={500} marginBottom={majorScale(3)}>
                    Інформація про налаштування
                </Heading>
            }
            actions={
                isLoading && (
                    <Pane>
                        <Loading minWidth="100%" minHeight="32px" />
                    </Pane>
                )
            }
        >
            <MainInfo />
            <ProjectsInfo />
            <OtherInfo />
        </TabbedForm>
    );
};
