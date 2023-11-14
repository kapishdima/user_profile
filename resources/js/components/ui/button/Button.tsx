import React from "react";

import { Button as ButtonUI, ButtonProps as ButtonUIProps } from "../button";
import { Loader2 } from "lucide-react";

export type ButtonProps = ButtonUIProps & {
    loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    loading = false,
    ...buttonProps
}) => {
    if (loading) {
        return (
            <ButtonUI {...buttonProps} disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {children}
            </ButtonUI>
        );
    }

    return <ButtonUI {...buttonProps}>{children}</ButtonUI>;
};
