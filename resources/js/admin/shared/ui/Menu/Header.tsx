import React from "react";

import { majorScale, Pane } from "evergreen-ui";
import { Logotype } from "..";
import { Link } from "react-router-dom";

interface MenuHeaderProps {
    title?: string;
}

export const MenuHeader: React.FC<React.PropsWithChildren<MenuHeaderProps>> = ({ title }) => {
    return (
        <Pane
            display="flex"
            alignItems="center"
            width="100%"
            paddingLeft={majorScale(2)}
            marginBottom={majorScale(2)}
        >
            <Link to="employees">
                <Logotype width="48px" />
            </Link>
        </Pane>
    );
};
