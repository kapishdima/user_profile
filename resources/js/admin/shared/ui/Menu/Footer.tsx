import React from "react";

import { Pane, Menu, majorScale } from "evergreen-ui";
import { User } from "modules/user";

export const MenuFooter: React.FC<React.PropsWithChildren<unknown>> = () => {
    return (
        <Pane
        // position="absolute"
        // bottom={majorScale(3)}
        // width={`calc(100% - ${majorScale(4)}px)`}
        >
            <Menu.Group>
                <User />
            </Menu.Group>
        </Pane>
    );
};
