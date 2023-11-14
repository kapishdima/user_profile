import React from "react";
import { Loader2 } from "lucide-react";
import classNames from "classnames";

type SpinnerProps = {
    className?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
    return <Loader2 className={classNames("animate-spin", className)} />;
};
