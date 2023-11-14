import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Heading1: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <h1
            className={classNames(
                "text-4xl font-extrabold tracking-tight lg:text-5xl",
                classes
            )}
        >
            {children}
        </h1>
    );
};
