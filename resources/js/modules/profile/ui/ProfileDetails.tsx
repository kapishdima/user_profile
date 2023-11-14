import React from "react";
import { ProfileAvatar } from "./ProfileAvatar";
import { Typography } from "@/components/ui/typography";
import { useProfileStore } from "../store/profile.store";

export const ProfileDetails: React.FC = () => {
    const profile = useProfileStore((state) => state.profile);

    if (!profile) {
        return null;
    }

    return (
        <div className="flex items-center gap-x-3">
            <div className="text-right">
                <Typography.Small>
                    {profile.firstName} {profile.lastName}
                </Typography.Small>
                <Typography.Muted>ID: 25148401 </Typography.Muted>
            </div>
            <ProfileAvatar />
        </div>
    );
};
