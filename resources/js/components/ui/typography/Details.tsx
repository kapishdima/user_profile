import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Details: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <p
            className={classNames(
                "text-sm font-medium leading-none text-gray-400",
                classes
            )}
        >
            {children}
        </p>
    );
};
