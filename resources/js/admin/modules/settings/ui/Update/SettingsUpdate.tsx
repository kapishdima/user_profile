import React from "react";

import { useNavigate } from "react-router-dom";

import { Pane } from "evergreen-ui";
import { Content, ContentHeader, Loading } from "shared/ui";
import { useGetResourceById } from "shared/hooks";

import {
    SettingsResponseEntity,
    useUpdateSettings,
    SettingsService,
} from "../../index";

import { SettingsHeading } from "../Form/SettingsHeading";
import { SettingsForm } from "../Form/SettingsForm";

export const SettingsUpdateContent: React.FC = () => {
    const { data: settings, isFetching } = useGetResourceById(
        "settings",
        async (id: string) => {
            const settings = await SettingsService.getSettings(id);

            return settings;
        }
    );
    const { mutate: updateSettings, isLoading } = useUpdateSettings(
        (id: string, settings: SettingsResponseEntity) =>
            SettingsService.updateSettings(id, settings)
    );

    if (isFetching) {
        return <Loading minWidth="100vw" minHeight="100vh" />;
    }

    return (
        <Content
            header={
                <ContentHeader
                    title={
                        <Pane display="flex" alignItems="center">
                            <SettingsHeading settings={settings} />
                        </Pane>
                    }
                    hasBackLink={false}
                />
            }
        >
            <SettingsForm
                onSubmit={updateSettings}
                defaultValue={settings}
                isLoading={isLoading}
            />
        </Content>
    );
};
