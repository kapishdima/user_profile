import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Heading2: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <h2
            className={classNames(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                classes
            )}
        >
            {children}
        </h2>
    );
};
