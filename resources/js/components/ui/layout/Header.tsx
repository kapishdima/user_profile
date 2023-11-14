import React from "react";
import { ProfileDetails } from "@/modules/profile";

export const Header: React.FC = () => {
    return (
        <div className="py-4 flex justify-end border-b border-b-gray-100 px-6">
            <ProfileDetails />
        </div>
    );
};
