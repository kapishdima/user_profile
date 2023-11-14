import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Muted: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <p className={classNames("text-sm text-muted-foreground", classes)}>
            {children}
        </p>
    );
};
