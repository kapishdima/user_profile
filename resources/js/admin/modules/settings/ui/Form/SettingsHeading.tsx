import React from "react";

import { Heading, majorScale } from "evergreen-ui";

export type SettingsHeadingProps = {
    settings: any;
};

export const SettingsHeading: React.FC<SettingsHeadingProps> = ({
    settings,
}) => {
    return (
        <Heading size={700} marginRight={majorScale(3)}>
            Налаштування
        </Heading>
    );
};
