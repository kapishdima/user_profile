import React, { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import {
    Pane,
    ClipboardIcon,
    LearningIcon,
    PaperclipIcon,
    EnvelopeIcon,
    TagIcon,
    ProjectsIcon,
    SettingsIcon,
} from "evergreen-ui";

import { AppMenu } from "../Menu/Menu";
import { useAuthStore } from "modules/auth";

import { useLayoutDimensions } from "./hooks/useLayoutDimensions";

type NavigationProps = {};

const createMenu = (user) => [
    { title: "Теги", path: "tags", Icon: TagIcon },
    { title: "Проекти", path: "projects", Icon: ProjectsIcon },
    { title: "Типи проекту", path: "project_types", Icon: ClipboardIcon },
    { title: "SeoData", path: "seo_datas", Icon: PaperclipIcon },
    { title: "Нагороди", path: "achievements", Icon: LearningIcon },
    { title: "Відгуки", path: "applications", Icon: EnvelopeIcon },
    { title: "Налаштування", path: "settings/1", Icon: SettingsIcon },
];

export const Navigation: React.FC<
    React.PropsWithChildren<NavigationProps>
> = () => {
    const { navbarWidth } = useLayoutDimensions();
    const { user } = useAuthStore();
    const menu = createMenu(user);
    const location = useLocation();

    const activeMenu = menu.find((item) =>
        location.pathname.includes(item.path)
    );

    const [activeMenuItem, setActiveMenuItem] = useState(activeMenu || menu[0]);
    const onMenuItemClick = (menuItem: any) => {
        if (menuItem.title === activeMenuItem.title) {
            return;
        }
        setActiveMenuItem(menuItem);
    };
    return (
        <Pane width={navbarWidth} position="absolute">
            <AppMenu
                items={menu}
                activeItemTitle={activeMenuItem.title}
                onMenuItemClick={onMenuItemClick}
                title="Project"
            />
            <Outlet />
        </Pane>
    );
};
