import React from "react";
import { Typography } from "../typography";

type FormSectionProps = {
    title: string;
    subtitle?: string;
};

export const FormSection: React.FC<FormSectionProps> = ({
    title,
    subtitle,
}) => {
    return (
        <div className="py-6 mb-6 flex flex-col gap-y-2 border-b border-b-gray-150">
            <Typography.Heading3>{title}</Typography.Heading3>
            <Typography.Details>{subtitle}</Typography.Details>
        </div>
    );
};
