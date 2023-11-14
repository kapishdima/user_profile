import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Subtitle: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <p
            className={classNames(
                "text-sm font-normal text-black lg:text-sm",
                classes
            )}
        >
            {children}
        </p>
    );
};
