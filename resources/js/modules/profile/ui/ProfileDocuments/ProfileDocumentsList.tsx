import React from "react";
import { useProfileStore } from "../../store/profile.store";

export const ProfileDocumentsList: React.FC = () => {
    const profile = useProfileStore((state) => state.profile);

    if (!profile || !profile.documents.length) {
        return null;
    }

    return (
        <div className="flex items-center gap-x-2 py-8">
            {profile.documents?.map((document) => (
                <div className="w-8 h-8 rounded-md overflow-hidden">
                    <img src={document.path} className="w-full h-full" />
                </div>
            ))}
        </div>
    );
};
