import React from "react";
import { Pane } from "evergreen-ui";

import { Loading } from "shared/ui";
import { useFetchProjects } from "modules/projects";
import { ProjectInput } from "./ProjectInput";

export const ProjectsSelect: React.FC = () => {
    const { projects, isFetching } = useFetchProjects();

    const data = projects?.data?.map((project) => {
        return {
            id: project.id,
            name: project.name,
        };
    });

    if (isFetching) {
        return <Loading minWidth="100%" minHeight="60vh" />;
    }

    return (
        <Pane display="flex" flexWrap="wrap" justifyContent="space-between">
            <ProjectInput index={0} items={data} />
            <ProjectInput index={1} items={data} />
            <ProjectInput index={2} items={data} />
            <ProjectInput index={3} items={data} />
            <ProjectInput index={4} items={data} />
            <ProjectInput index={5} items={data} />
        </Pane>
    );
};
