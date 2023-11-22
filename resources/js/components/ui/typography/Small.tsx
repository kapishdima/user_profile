import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Small: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <p className={classNames("text-sm font-medium leading-none", classes)}>
            {children}
        </p>
    );
};
