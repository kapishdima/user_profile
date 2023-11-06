import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navigation } from "shared/ui/layout/Navigation";

import { LoginPage } from "../Login/LoginPage";
import { Protected } from "./Protected";

import { TagsViewPage, TagUpdatePage, TagCreatePage } from "../Tags";
import {
    ProjectsViewPage,
    ProjectUpdatePage,
    ProjectCreatePage,
} from "../Projects";
import {
    ProjectTypesViewPage,
    ProjectTypeUpdatePage,
    ProjectTypeCreatePage,
} from "../ProjectTypes";
import { ApplicationsViewPage, ApplicationShowPage } from "../Applications";
import {
    AchievementsViewPage,
    AchievementUpdatePage,
    AchievementCreatePage,
} from "../Achievements";
import {
    SeoDatasViewPage,
    SeoDataUpdatePage,
    SeoDataCreatePage,
} from "../SeoDatas";
import { SettingsUpdatePage } from "../Settings/settings.update";

export const AppRouter: React.FC<React.PropsWithChildren<unknown>> = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<Navigation />}>
                <Route
                    path="/"
                    element={
                        <Protected>
                            <Navigate to="/tags" replace />
                        </Protected>
                    }
                />
                <Route
                    path="tags"
                    element={
                        <Protected>
                            <TagsViewPage />
                        </Protected>
                    }
                />
                <Route
                    path="tags/create"
                    element={
                        <Protected>
                            <TagCreatePage />
                        </Protected>
                    }
                />
                <Route
                    path="tags/:id"
                    element={
                        <Protected>
                            <TagUpdatePage />
                        </Protected>
                    }
                />
                <Route
                    path="projects"
                    element={
                        <Protected>
                            <ProjectsViewPage />
                        </Protected>
                    }
                />
                <Route
                    path="projects/create"
                    element={
                        <Protected>
                            <ProjectCreatePage />
                        </Protected>
                    }
                />
                <Route
                    path="projects/:id"
                    element={
                        <Protected>
                            <ProjectUpdatePage />
                        </Protected>
                    }
                />
                <Route
                    path="project_types"
                    element={
                        <Protected>
                            <ProjectTypesViewPage />
                        </Protected>
                    }
                />
                <Route
                    path="project_types/create"
                    element={
                        <Protected>
                            <ProjectTypeCreatePage />
                        </Protected>
                    }
                />
                <Route
                    path="project_types/:id"
                    element={
                        <Protected>
                            <ProjectTypeUpdatePage />
                        </Protected>
                    }
                />
                <Route
                    path="applications"
                    element={
                        <Protected>
                            <ApplicationsViewPage />
                        </Protected>
                    }
                />
                <Route
                    path="applications/:id"
                    element={
                        <Protected>
                            <ApplicationShowPage />
                        </Protected>
                    }
                />
                <Route
                    path="achievements"
                    element={
                        <Protected>
                            <AchievementsViewPage />
                        </Protected>
                    }
                />
                <Route
                    path="achievements/create"
                    element={
                        <Protected>
                            <AchievementCreatePage />
                        </Protected>
                    }
                />
                <Route
                    path="achievements/:id"
                    element={
                        <Protected>
                            <AchievementUpdatePage />
                        </Protected>
                    }
                />
                <Route
                    path="seo_datas"
                    element={
                        <Protected>
                            <SeoDatasViewPage />
                        </Protected>
                    }
                />
                <Route
                    path="seo_datas/create"
                    element={
                        <Protected>
                            <SeoDataCreatePage />
                        </Protected>
                    }
                />
                <Route
                    path="seo_datas/:id"
                    element={
                        <Protected>
                            <SeoDataUpdatePage />
                        </Protected>
                    }
                />
                <Route
                    path="settings/:id"
                    element={
                        <Protected>
                            <SettingsUpdatePage />
                        </Protected>
                    }
                />
            </Route>
        </Routes>
    );
};
