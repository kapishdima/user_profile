import classNames from "classnames";
import React from "react";

type CenterProps = {
    fullScreen?: boolean;
};

export const Center: React.FC<React.PropsWithChildren<CenterProps>> = ({
    children,
    fullScreen = false,
}) => {
    const cn = fullScreen ? "w-screen h-screen" : "w-full h-full";

    return (
        <div className={classNames(cn, "flex items-center justify-center")}>
            {children}
        </div>
    );
};
