import React from "react";
import { majorScale, Pane } from "evergreen-ui";

import { TabPane } from "shared/ui";
import { ProjectsSelect } from "../ProjectsSelect/ProjectsSelect";

export const ProjectsInfo: React.FC = () => {
    return (
        <TabPane index={1} tab="Проекти">
            <Pane width="90%" marginTop={majorScale(4)}>
                <ProjectsSelect />
            </Pane>
        </TabPane>
    );
};
