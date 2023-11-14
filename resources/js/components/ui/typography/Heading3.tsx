import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Heading3: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <h3
            className={classNames(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                classes
            )}
        >
            {children}
        </h3>
    );
};
