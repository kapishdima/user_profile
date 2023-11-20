import React from "react";

import { Link as LinkUI, LinkProps as LinkUIProps } from "react-router-dom";

type LinkProps = LinkUIProps;

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
    return (
        <LinkUI className="h-auto" {...props}>
            {children}
        </LinkUI>
    );
};
