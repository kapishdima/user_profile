import React from "react";
import classNames from "classnames";

import { TypographyProps } from "./types";

export const Paragraph: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    classes,
}) => {
    return (
        <p
            className={classNames(
                "leading-7 [&:not(:first-child)]:mt-6",
                classes
            )}
        >
            {children}
        </p>
    );
};
