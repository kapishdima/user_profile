import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Heading4: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <h4
            className={classNames(
                "scroll-m-20 text-xl font-semibold tracking-tight",
                classes
            )}
        >
            {children}
        </h4>
    );
};
