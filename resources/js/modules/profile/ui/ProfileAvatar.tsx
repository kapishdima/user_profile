import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import { Typography } from "@/components/ui/typography";

import { useProfileStore } from "../store/profile.store";
import { getProfileAvatarName } from "../store/profile.select";
import { ProfileLogout } from "./ProfileLogout";

export const ProfileAvatar: React.FC = () => {
    const profile = useProfileStore((state) => state.profile);
    const profileAvatarName = useProfileStore(getProfileAvatarName);

    if (!profile) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={profile.avatar?.compressed_path} />
                    <AvatarFallback>{profileAvatarName}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuLabel>
                    <Typography.Muted>{profile.email}</Typography.Muted>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span>Настройки</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ProfileLogout />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
